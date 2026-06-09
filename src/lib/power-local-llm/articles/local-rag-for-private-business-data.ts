// Power Local LLM — Local RAG for Business Data: GDPR-Compliant AI for Sensitive Documents
// Slug: local-rag-for-private-business-data
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'Local RAG for Business Data: GDPR-Compliant AI for Sensitive Documents (2026)',
    seoTitle: 'GDPR-Compliant Local RAG for Sensitive Documents (2026)',
    intro:
      'Legal, medical, and financial teams face the same problem: the documents most worth searching with AI are exactly the ones that cannot leave the building. This is the architecture, control set, and deployment-pattern decision matrix for self-hosted RAG that meets GDPR, the EU AI Act, HIPAA, and German Datenschutz expectations — written for the compliance officer who needs to send one document to an IT team and have them know what to build.',
    metaDescription:
      "GDPR-compliant local RAG for legal, medical, and financial teams. Architecture, audit logging, DPIA scope, and 3 deployment patterns compared. Send to your IT team.",
    twitterDescription:
      'Local RAG that meets GDPR and EU AI Act requirements. Air-gap, audit logs, data lineage, DPIA scope, and 3 deployment patterns — the article EU compliance officers send to IT.',
    audience:
      'EU/German compliance officers, DPOs, legal counsel, and IT architects responsible for building self-hosted RAG over confidential documents — contracts, patient records, audit files, M&A workrooms, regulator correspondence.',
    readTime: '15 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'GDPR-compliant local RAG',
    targetKeywords: [
      'gdpr compliant rag',
      'local rag business data',
      'eu ai act rag',
      'private rag for confidential documents',
      'on-premise rag deployment',
      'datenschutz rag',
      'dpia local rag',
    ],
    leadAnswerBlock:
      '**A self-hosted RAG deployment meets GDPR and EU AI Act expectations only when six controls are wired in from day one: air-gapped or strictly egress-controlled hosting, per-user authentication with role-based document access, immutable audit logs covering ingest and retrieval, end-to-end encryption at rest and in transit, deterministic data lineage from chunk to source, and a written deletion path that propagates from the source store through the vector index and any cached embeddings. The deployment pattern (single-user laptop, on-prem server, private EU cloud) determines which controls are easy and which are work — not whether the controls are required.**',
    quickAnswerTop: {
      en: {
        question: 'Is local RAG GDPR-compliant by default, and which deployment pattern should regulated teams pick?',
        answer:
          'Local RAG is not GDPR-compliant by default. Running a model on-premise solves the cross-border data transfer problem and shrinks your processor list, but GDPR Articles 5, 25, 30, 32, and 35 still apply: lawful basis, data minimisation, audit logging, security of processing, and a DPIA for any system that ingests special-category data at scale. Pick a single-user laptop deployment for solo professionals and one-off matter reviews; an on-prem server for departmental knowledge bases up to a few thousand documents and 5–50 users; a private EU cloud (sovereign cloud, customer-managed keys, EU-only region) for cross-departmental or cross-entity deployments where multi-region resilience matters more than full air-gap. Whichever you choose, the six controls above are the same — only the implementation cost shifts.',
        bullets: [
          'Local hosting solves cross-border transfer (Article 44–49) and shrinks the processor list — it does not solve lawful basis, DPIA, or data subject rights on its own.',
          'Single-user laptop — best for solo lawyers, doctors, auditors, and one-off matter reviews. Hardest to audit at scale; easiest air-gap.',
          'On-prem server — best for 5–50 user departmental deployments. Real audit logs, RBAC, backup, and disaster recovery. Highest IT effort.',
          'Private EU cloud — best for multi-entity deployments needing resilience. Sovereign region + customer-managed keys + no AI training on customer data clauses required.',
          'A DPIA is mandatory under Article 35 when special-category data is ingested at scale, regardless of deployment pattern.',
          'Right-to-be-forgotten requests must propagate to source documents, vector indexes, and cached embeddings — design the deletion path before go-live, not after a request arrives.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Deployment Pattern Comparison', anchor: '#deployment-comparison' },
      { label: 'Choosing a Deployment Pattern', anchor: '#which-deployment' },
      { label: 'Why Local RAG for Sensitive Data', anchor: '#why-local-rag' },
      { label: 'The Six Controls Every Deployment Needs', anchor: '#required-controls' },
      { label: 'Air-Gap and Egress Control', anchor: '#air-gap' },
      { label: 'Audit Logging That Will Survive Review', anchor: '#audit-logging' },
      { label: 'Data Lineage From Chunk to Source', anchor: '#data-lineage' },
      { label: 'Encryption and Access Control', anchor: '#encryption-access' },
      { label: 'Single-User Laptop Pattern', anchor: '#laptop-pattern' },
      { label: 'On-Prem Server Pattern', anchor: '#on-prem-pattern' },
      { label: 'Vector Database Options', anchor: '#vector-db-comparison' },
      { label: 'Private EU Cloud Pattern', anchor: '#private-cloud-pattern' },
      { label: 'EU AI Act Classification', anchor: '#eu-ai-act' },
      { label: 'DPIA Requirements', anchor: '#dpia-requirements' },
      { label: 'Germany-Specific Notes (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Compliance Checklist', anchor: '#compliance-checklist' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Local hosting is necessary but not sufficient.** Running the model and vector store on your own hardware solves cross-border data transfer and shrinks the processor list, but GDPR Articles 5, 25, 30, 32, and 35 still apply. Lawful basis, data minimisation, audit logging, security of processing, and DPIAs do not become optional just because the data stays on premises.',
          '**Six controls are non-negotiable** regardless of deployment pattern: air-gap or strict egress control, per-user authentication with role-based access, immutable audit logs, encryption at rest and in transit, deterministic data lineage from chunk back to source document, and a written deletion path that includes the vector index and any cached embeddings.',
          '**Three deployment patterns cover most regulated use cases.** Single-user laptop for solo professionals and matter reviews; on-prem server for departmental knowledge bases of 5–50 users; private EU cloud (sovereign region, customer-managed keys) for multi-entity deployments where resilience matters more than full air-gap.',
          '**The EU AI Act classifies most local RAG as a limited-risk system** — but the moment retrieval feeds an automated decision (creditworthiness scoring, employment screening, benefit eligibility) the deployment slides into high-risk and triggers the full conformity assessment, post-market monitoring, and human-oversight obligations.',
          '**A DPIA is mandatory under Article 35** for any RAG that ingests special-category data (health, legal, biometric, political, union membership) at scale, or any system that produces automated decisions with legal effects. Skip the DPIA and you skip the audit defence.',
          '**Right-to-be-forgotten is the deletion test most deployments fail.** Source documents are easy. Vector indexes can be rebuilt. Cached embeddings, retrieval logs, and any answers stored in chat history are the parts that get missed — and the parts a regulator will ask about.',
          '**Open-source embedding models are GDPR-safe in principle**, but only if (a) the model weights are downloaded once and pinned to a hash, (b) inference runs entirely on local hardware with no telemetry, and (c) the model card and licence are reviewed for any clauses that conflict with confidential business use.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**6 mandatory controls** for any regulated RAG: air-gap, RBAC, audit logs, encryption, data lineage, deletion path.',
          '**3 deployment patterns:** single-user laptop (solo professionals), on-prem server (5–50 users), private EU cloud (multi-entity).',
          '**DPIA is mandatory** under Article 35 when ingesting special-category data (health, legal, biometric) at scale.',
          '**EU AI Act:** most local RAG = limited-risk; becomes high-risk when retrieval feeds automated decisions (credit, employment, benefits).',
          '**Right-to-be-forgotten** must propagate through source docs, vector indexes, cached embeddings, AND answer history.',
          '**Works-council (Betriebsrat) co-determination** under §87 BetrVG required for any RAG over employee-authored content in Germany.',
          '**Open-source embedding models** are GDPR-safe only if weights are pinned, inference is fully local, and licence is reviewed.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Deployment Pattern Comparison',
        content:
          'Each pattern can be made GDPR-compliant; what changes is the cost of the controls and the breakage modes when something goes wrong. Pick the simplest pattern that fits the user count, document sensitivity, and resilience requirement.',
        columns: ['Control', 'Single-user laptop', 'On-prem server', 'Private EU cloud'],
        rows: [
          {
            'Control': 'Air-gap (no outbound network)',
            'Single-user laptop': 'Trivial — disable network',
            'On-prem server': 'Achievable — VLAN + firewall',
            'Private EU cloud': 'Hard — egress allowlist only',
          },
          {
            'Control': 'Audit log (who, what, when)',
            'Single-user laptop': 'Manual — OS-level only',
            'On-prem server': 'Strong — central log pipeline',
            'Private EU cloud': 'Strong — cloud-native logging',
          },
          {
            'Control': 'Data lineage (chunk → source)',
            'Single-user laptop': 'Local files only',
            'On-prem server': 'Full pipeline traceable',
            'Private EU cloud': 'Full — but spans regions',
          },
          {
            'Control': 'EU data residency',
            'Single-user laptop': 'Inherent — physical location',
            'On-prem server': 'Inherent — physical location',
            'Private EU cloud': 'Configured — sovereign region required',
          },
          {
            'Control': 'Per-user RBAC',
            'Single-user laptop': 'Single user — N/A',
            'On-prem server': 'Identity provider + groups',
            'Private EU cloud': 'IAM + SSO + per-collection ACLs',
          },
          {
            'Control': 'Backup and disaster recovery',
            'Single-user laptop': 'Encrypted external disk',
            'On-prem server': 'Tape or off-site backup',
            'Private EU cloud': 'Cross-AZ replication',
          },
          {
            'Control': 'Initial cost',
            'Single-user laptop': 'Hardware only — low',
            'On-prem server': 'Server + integration — medium',
            'Private EU cloud': 'Subscription + setup — medium',
          },
          {
            'Control': 'Ongoing cost',
            'Single-user laptop': 'None — sysadmin time',
            'On-prem server': 'IT ops + power + cooling',
            'Private EU cloud': 'Monthly recurring',
          },
          {
            'Control': 'Best for',
            'Single-user laptop': 'Solo professionals, matter reviews',
            'On-prem server': '5–50 users, departmental KBs',
            'Private EU cloud': 'Multi-entity, resilient deployments',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Choosing a Deployment Pattern',
        content:
          '**The right choice depends on user count, document sensitivity, audit-readiness pressure, and how much in-house IT capacity you have.** This decision shortcut covers most real situations.',
        columns: ['Your situation', 'Pick'],
        rows: [
          {
            'Your situation': 'Solo lawyer, doctor, or auditor reviewing one matter at a time',
            'Pick': 'Single-user laptop',
          },
          {
            'Your situation': 'M&A workroom with 3–5 named reviewers and a fixed end date',
            'Pick': 'Single-user laptop or on-prem (depending on document volume)',
          },
          {
            'Your situation': 'Compliance team of 10–30 sharing a regulator-correspondence archive',
            'Pick': 'On-prem server',
          },
          {
            'Your situation': 'Hospital department building a clinical-protocol assistant for 50 staff',
            'Pick': 'On-prem server',
          },
          {
            'Your situation': 'Multi-entity group needing one RAG across subsidiaries in several EU countries',
            'Pick': 'Private EU cloud (sovereign region + customer-managed keys)',
          },
          {
            'Your situation': 'Insurance carrier with 24/7 uptime requirement and DR plan',
            'Pick': 'Private EU cloud',
          },
          {
            'Your situation': 'Government agency with classified or restricted data',
            'Pick': 'Air-gapped on-prem only — cloud is out of scope',
          },
          {
            'Your situation': 'Regulator-facing audit defence due in under 6 weeks',
            'Pick': 'On-prem server (fastest to demonstrate control over)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Why Local RAG for Sensitive Data',
        content:
          '**The case for local RAG over cloud LLM-as-a-service is not ideology — it is the shape of the GDPR risk assessment.** Cloud RAG is workable for many uses cases; for sensitive business data it adds five risks that local RAG eliminates by construction.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local RAG keeps your sensitive documents on your own hardware while giving your team AI-powered search — no data leaves the building, no third-party processor touches it, and no cross-border transfer question arises.',
          },
          {
            type: 'plain-terms',
            text: 'Imagine your legal team could search 10,000 case files by asking questions in plain language — but the documents never leave your server room. That is local RAG: the AI reads your documents on your hardware, answers your questions on your hardware, and nothing gets sent anywhere. The compliance advantage is not a feature — it is the architecture.',
          },
        ],
        items: [
          '**Cross-border transfer (Article 44–49).** Sending personal data to a non-EU processor requires Standard Contractual Clauses, a Transfer Impact Assessment, and a credible answer for whether the receiving jurisdiction has subpoena powers reaching that data. Local RAG does not transfer data — the question does not arise.',
          '**Sub-processor sprawl (Article 28).** Cloud LLM providers typically rely on hyperscaler infrastructure, content-moderation services, and observability vendors. Each is a sub-processor that must be listed, contracted, and audited. Local RAG has zero sub-processors by default.',
          '**Training-data leakage.** Many cloud LLM terms reserve the right to use customer prompts for model improvement unless a paid enterprise tier is used and the no-training clause is verified. Local RAG runs models with weights you control; nothing leaves the host.',
          '**Confidentiality clauses in client contracts.** Outside counsel agreements, M&A NDAs, and patient-data agreements frequently prohibit transmission of the protected material to third-party processors. Local RAG sidesteps the clause entirely.',
          '**Subpoena and legal-process exposure.** Documents stored with a cloud provider can be compelled by legal process directed at the provider, with disclosure obligations the data controller may not even be notified about in time. Documents that never leave your premises can only be compelled from you.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Local RAG is not the right answer for every workload. Public-information research, marketing draft generation, code assistance on open-source repos — all of these are usually better with cloud LLMs because the GDPR exposure is low and the model quality gap matters. The argument in this article is specifically for confidential business data: legal, medical, financial, HR, regulator correspondence, and trade secrets.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'The Six Controls Every Deployment Needs',
        content:
          '**These six controls are the floor.** Every regulated deployment needs all six; the deployment pattern only changes how you implement them. Skipping any one of these is the most common reason audits go badly.',
        numberedItems: [
          {
            title: 'Air-gap or strict egress control',
            whyItMatters:
              'Confirms that documents and embeddings cannot leak via outbound calls — telemetry SDKs, model-update probes, crash reporters, content-moderation callbacks, third-party CDNs for fonts. Either disable network access entirely (true air-gap) or run an egress allowlist that permits only signed update servers.',
          },
          {
            title: 'Per-user authentication with role-based access',
            whyItMatters:
              'You need to be able to answer "who accessed which document" before a regulator asks. Single sign-on against an identity provider, group-based collection access, and per-document ACLs where the matter requires it. Shared accounts are not a control — they are an audit failure waiting to happen.',
          },
          {
            title: 'Immutable audit logs covering ingest and retrieval',
            whyItMatters:
              'For each document: who uploaded it, when, source path, hash. For each query: who asked, what was asked (if logging permits), which chunks were retrieved, which document IDs they came from, what answer was returned. Logs must be tamper-evident — append-only, signed, with retention long enough to cover the supervisory authority\'s investigation window. For the prompt-level audit trail — versioning, changelogs, and rollback — see [prompt version control workflows](https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows).',
          },
          {
            title: 'Encryption at rest and in transit',
            whyItMatters:
              'Disk encryption on the host, TLS for any internal service-to-service call, and key management that survives a stolen laptop or compromised admin account. Customer-managed keys for cloud deployments. Without these, a device theft becomes a notifiable data breach under Article 33.',
          },
          {
            title: 'Deterministic data lineage from chunk to source',
            whyItMatters:
              'Every retrieved chunk must trace back to its source document, page, section, and version. This is what lets you (a) verify the answer, (b) honour a deletion request, (c) defend the system in court when a generated summary is questioned. "We can\'t reproduce which chunk caused which answer" is not an acceptable answer to a supervisory authority.',
          },
          {
            title: 'Written deletion path including vector index and cached embeddings',
            whyItMatters:
              'A right-to-be-forgotten request must propagate from the source store, through the vector index, into any cached embeddings, and through retention of retrieval logs. Most deployments handle the source delete cleanly and forget the rest. Document the deletion runbook before go-live; rehearse it on synthetic data.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-Gap and Egress Control',
        content:
          '**Air-gap means the host has no outbound network path; egress control means it has a tightly allowlisted one.** Both are acceptable; pick the strongest model your operations can sustain.',
        items: [
          '**True air-gap** — no DHCP, no DNS resolution to public destinations, no outbound TCP. Updates happen via signed media that an admin physically connects. This is the right model for classified work, certain hospital networks, and any deployment where the threat model includes a malicious dependency.',
          '**Egress allowlist** — outbound network is permitted only to a small list of named destinations (model update servers, your identity provider, log forwarders to internal collectors). All other traffic is dropped at the firewall. This is the practical default for most regulated departmental deployments.',
          '**What to look for in the platform**: zero telemetry by default, no outbound calls during inference, no font CDNs in the UI, no crash reporters that ship payloads. Verify with a packet capture or a tool like Little Snitch on the test bench before promoting to production.',
          '**Update governance** — model weights, embedder weights, application code, and OS patches all move through a controlled update window. The admin who promotes an update signs off in writing; the change is logged.',
          '**Common air-gap break:** an analytics SDK bundled with a third-party UI component, a font CDN reference in the application chrome, or a "check for updates" probe that runs on launch. These are why the verification step matters — assume nothing about defaults.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Run a 24-hour packet capture on the host with the application open and idle. Anything outbound that is not on the allowlist is a finding. Repeat this every time the application is updated — release notes routinely understate what new outbound calls have been added.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'Audit Logging That Will Survive Review',
        content:
          '**The audit log is the artefact a supervisory authority will read first.** It must answer two questions for every retrieval: who asked, and what did the system give them. Anything less and you are arguing with words; with proper logging, you are showing receipts.',
        items: [
          '**Ingest events**: document ID, hash (SHA-256), filename, source path, uploaded by, timestamp, classification tag, size, page count, owner group, retention class. Tag every document at ingest — retroactive classification of large corpora is hard and rarely complete.',
          '**Retrieval events**: query ID, user ID, timestamp, retrieved chunk IDs (and the document IDs they came from), retrieval scores, final answer hash, model identifier, embedder identifier, top-K used. The query text itself is sensitive — log it only if your purpose-of-processing covers it; otherwise log the hash and timestamp.',
          '**Administrative events**: model promotion, embedder change, index rebuild, user/group changes, ACL changes, access-policy changes. Each event signed by the responsible admin.',
          '**Tamper-evidence**: append-only log, hash chain (each entry references the previous entry hash), out-of-band signing key, regular reconciliation against a separate copy held by a different admin or a write-once medium.',
          '**Retention**: aligns with the supervisory authority\'s investigation window — at minimum the matter retention period; commonly six to seven years for regulated industries; longer where industry rules apply.',
          '**Pipeline**: the application emits structured events; a forwarder ships them to a separate, write-restricted log store. The application server should never have permission to delete or rewrite log entries — separation of duties is what makes the log credible.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Logging the query text introduces its own GDPR question — a query may itself contain personal data (e.g., "summarise the medical history of patient X"). Decide at design time whether your purpose-of-processing covers query logging, and if it does not, log only the metadata required for audit and operational diagnostics.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Data Lineage From Chunk to Source',
        content:
          '**Lineage is the backbone of every other control.** Without it, deletion requests fail, answer verification is impossible, and the audit trail collapses. Build lineage in from the first ingest, not after.',
        items: [
          '**Document-level lineage**: each document has a stable internal ID, a content hash, an ingest timestamp, an owner, a classification, and a retention class. The original file remains on the source store; the RAG system holds a reference, not the master.',
          '**Chunk-level lineage**: each chunk references its parent document ID, page (for PDFs), section (for structured docs), character offset, length, and chunking-strategy version. When you re-chunk (you will), the old chunks are tombstoned, not deleted in place — so old retrieval logs still resolve.',
          '**Embedding-level lineage**: each embedding vector references its chunk ID and embedder identifier. When you change embedders, the old vectors are kept until the new ones are validated and any matters that referenced them are closed; only then are they purged.',
          '**Answer-level lineage**: each generated answer references the chunk IDs that produced it, the model identifier, the prompt template version, and the timestamp. When a user asks "where did this answer come from", the system resolves chunk → document → page in one click.',
          '**Re-indexing without breaking lineage**: rebuilds preserve document IDs and increment chunk-strategy versions. Old chunk IDs remain resolvable in retrieval logs even after the live index has moved on.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Test the lineage chain quarterly. Pick a random retrieval from the audit log and walk it back: chunk ID → document ID → original file on the source store → retention class. If any step is broken, fix the schema before the next supervisory inspection — not during it.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'Encryption and Access Control',
        content:
          '**Encryption at rest, encryption in transit, and access control that maps to your existing identity provider.** These are well-understood controls; the failure mode is forgetting one of the three layers, not implementing the chosen layer badly.',
        items: [
          '**At-rest encryption** — full-disk encryption on the host (LUKS on Linux, BitLocker on Windows, FileVault on macOS for laptops). For servers, also encrypt the partitions holding the vector store and ingest staging. Customer-managed keys for any cloud deployment, with key rotation per your policy.',
          '**In-transit encryption** — TLS for any service-to-service hop, even on localhost. Cipher policy aligned with your industry baseline. Mutual TLS where the threat model warrants — typically server-to-server in cloud deployments.',
          '**Authentication** — single sign-on against your existing identity provider (OIDC, SAML). No local accounts in production. MFA enforced for any user with administrative or sensitive-collection access.',
          '**Authorisation** — group-based access at the collection level; document-level ACLs where the matter requires (e.g., M&A workrooms, employment investigations). The retrieval pipeline must enforce ACLs at query time — not just the UI. A user who cannot see a document must also not have its chunks returned.',
          '**Administrative access** — privileged access management for any account that can read or rebuild indexes, view audit logs, or change ACLs. Just-in-time elevation with logged justification beats permanent admin rights.',
          '**Endpoint security** — managed devices for laptop deployments (MDM-enrolled, encrypted, screen-lock policy enforced). A solo-professional laptop with the document store decrypted and unattended in a café is the GDPR breach you do not want to write up.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Single-User Laptop Pattern',
        content:
          '**The single-user laptop is the easiest pattern to make air-gapped and the hardest to scale.** Right for solo professionals and one-off matter reviews; wrong for anything that needs to outlive a single user or survive their departure.',
        items: [
          '**Hardware** — a workstation-class laptop with full-disk encryption, a discrete GPU (or a recent unified-memory machine), and at least 32 GB of RAM. The model and embedder must fit in memory alongside the vector store cache. For hardware requirements and model selection by VRAM, see the [local LLM hardware guide](https://www.promptquorum.com/local-llms/local-llm-hardware-guide-2026).',
          '**Software** — a self-contained desktop RAG application running locally; an open-source LLM with weights downloaded once and pinned to a hash; an open-source embedder; a local vector store on the encrypted disk. For a comparison of open-source models suitable for local RAG, see [top open-source models for Ollama](https://www.promptquorum.com/local-llms/top-open-source-models-ollama).',
          '**Network posture** — air-gapped during work; reconnected only for explicit signed updates. Configure the OS firewall to drop all outbound connections by default and create explicit exceptions for the update workflow.',
          '**Document handling** — source documents on the encrypted disk; a separate per-matter folder structure; weekly encrypted backups to an external drive stored at a different location.',
          '**Audit posture** — the OS-level audit log (login, file access, peripheral events) is the floor. Application-level events are easier in the on-prem server pattern; for the laptop pattern, treat the OS log as the primary record and supplement with manual matter-by-matter notes.',
          '**Limits** — a single-user laptop is not a multi-user platform. Sharing the laptop, sharing accounts, or copying the document store to a colleague\'s machine breaks the audit posture and the lawful-basis assessment.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For solo professionals working confidential matters, the single-user laptop pattern is genuinely the strongest privacy posture available — better than any cloud and stronger than many on-prem deployments. The trade-off is operational: when the laptop dies, the matter inherits the recovery time of your backup discipline.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'On-Prem Server Pattern',
        content:
          '**The on-prem server is the workhorse pattern for regulated departmental RAG.** It scales to 5–50 users and a few thousand documents, supports proper audit logging, and stays inside your physical perimeter. The cost is real IT operations work.',
        items: [
          '**Hardware** — a server with one or two enterprise GPUs (workstation-class GPUs are acceptable for smaller corpora), redundant disks, ECC memory, and a UPS. Plan for 2–4× the storage of your raw document corpus to cover vectors, indexes, logs, and backups.',
          '**Network** — a dedicated VLAN behind the corporate firewall; egress allowlist or full air-gap depending on the threat model. Internal access via the corporate network only, no public ingress.',
          '**Software stack** — a self-hosted RAG platform (a standalone server image or a containerised deployment), an open-source LLM as the chat model, an open-source embedder, and a vector store appropriate for the corpus size. The application server, vector store, and log forwarder run as separate processes with separate service accounts.',
          '**Identity** — federated against the corporate identity provider; group membership drives collection access. Sensitive collections gate behind additional approval workflows.',
          '**Backup and DR** — nightly incremental backups of the document store and the vector index; weekly full backups; offsite copy held by IT. Documented restore runbook tested at least annually.',
          '**Operations** — patching window per change-management policy; quarterly access reviews; rehearsed deletion runbook for right-to-be-forgotten requests; documented model and embedder upgrade path that preserves lineage.',
          '**Capacity planning** — a few thousand documents and 5–50 concurrent users sit comfortably on a single mid-range GPU server. Past that, plan for either a beefier host or moving to the private cloud pattern.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'On-prem RAG is the pattern most likely to fail for non-technical reasons: a backup that has never been restored, an admin account shared across IT staff, a UPS that nobody has tested, a log forwarder that has been silently dropping events for two months. The technical controls are easier than the operational hygiene.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Vector Database Options for On-Prem RAG',
        content:
          '**The vector store choice rarely makes or breaks compliance — but it does shape operational cost, scale ceiling, and how cleanly the deletion runbook can be implemented.** Most regulated deployments pick one of these six.',
        columns: ['Vector Database', 'Type', 'EU Self-Hosted', 'Best for RAG Pattern'],
        rows: [
          {
            'Vector Database': '**Chroma**',
            'Type': 'Open-source, lightweight',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'Laptop + small on-prem',
          },
          {
            'Vector Database': '**Qdrant**',
            'Type': 'Open-source, performant',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'On-prem server, filtering-heavy',
          },
          {
            'Vector Database': '**Weaviate**',
            'Type': 'Open-source, full-featured',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'On-prem + hybrid search',
          },
          {
            'Vector Database': '**Milvus**',
            'Type': 'Open-source, enterprise',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'Large-scale on-prem',
          },
          {
            'Vector Database': '**pgvector**',
            'Type': 'PostgreSQL extension',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'Teams already on Postgres',
          },
          {
            'Vector Database': '**Pinecone**',
            'Type': 'Managed SaaS',
            'EU Self-Hosted': '⚠️ US-hosted',
            'Best for RAG Pattern': 'Private EU cloud only (with caveats)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Private EU Cloud Pattern',
        content:
          '**The private EU cloud pattern uses a sovereign-region cloud provider with customer-managed keys, EU-only data residency, and a contractual no-AI-training clause covering customer data.** It is the right answer for multi-entity deployments, multi-region resilience requirements, and teams that lack the operational capacity for true on-prem.',
        items: [
          '**Provider selection** — a hyperscaler\'s EU sovereign offering or a European cloud provider. The DPA must list every sub-processor; transfer mechanisms must be addressed if any sub-processor is outside the EEA. Schrems II–style transfer impact analysis is part of the file even when the immediate processor is EU-based.',
          '**Region** — EU-only, with explicit data residency guarantees. Cross-region replication only to other EU regions. No US region as a failover, even temporarily, even for backups.',
          '**Encryption** — customer-managed keys with rotation; bring-your-own-key where the provider supports it; key access events logged separately from cloud-provider operational logs.',
          '**Network** — private VPC with no public ingress; access only via private connectivity (dedicated link or VPN) from your corporate network; egress allowlist for any outbound dependency.',
          '**Identity** — federated against your corporate IdP; cloud-native IAM bound to user identities, not shared service accounts; per-collection ACLs enforced in the retrieval pipeline.',
          '**Logging** — cloud-native audit log fed into your existing SIEM; separate ingestion for application audit events; tamper-evident retention that meets supervisory expectations.',
          '**Contracts** — the DPA must be Article 28–compliant, list sub-processors, address SCCs where needed, and include an explicit no-training-on-customer-data clause covering both LLM weights and any ancillary services (search, telemetry, support).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The private EU cloud pattern reads as more permissive than on-prem because it uses a third-party processor — but with sovereign region, customer-managed keys, no-training contractual clause, and proper egress control, it can match or beat on-prem on availability and audit posture. The compliance file is bigger; the operational risk is smaller.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'EU AI Act Classification: Limited-Risk vs High-Risk',
        content:
          '**Most local RAG deployments are limited-risk AI systems under the EU AI Act — but the moment retrieval feeds an automated decision affecting a person, the classification slides into high-risk and the obligations multiply.** Classify before you build.',
        items: [
          '**Limited-risk (most local RAG)** — the system retrieves and summarises documents to assist a human; the human makes the decision. Obligations are mostly transparency: users must know they are interacting with an AI, generated content must be identifiable as such, and no manipulative or deceptive design.',
          '**High-risk** — retrieval feeds an automated decision in domains the Act lists: credit scoring, employment screening, education admissions, essential public services, law enforcement, migration, justice, biometric identification, critical infrastructure. A clinical-decision-support RAG that recommends treatments is high-risk; a clinical-protocol-summary RAG that helps a doctor read guidelines faster is not.',
          '**High-risk obligations** — risk management system across the lifecycle, data governance (training, validation, testing data documented), technical documentation, automatic event logging, transparency and information to users, human oversight, accuracy and robustness measures, conformity assessment before placing on the market, post-market monitoring.',
          '**General-purpose AI considerations** — using a general-purpose LLM (open-source or otherwise) does not transfer the high-risk obligations to the model provider. The deployer (your organisation) carries the high-risk obligations for the system you build with that model.',
          '**Prohibited practices** — social scoring, untargeted scraping of facial images, emotion recognition in workplaces and schools, certain real-time biometric categorisation. These are off the table regardless of how locally you run them.',
          '**Documentation as the audit artefact** — the technical file required for high-risk systems is not a one-time deliverable; it is a living document. Tie it to your change-management process so that every model promotion, embedder change, and ACL change is reflected.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The high-risk vs limited-risk line is drawn by the use case, not the technology. The same vector store and the same model can be limited-risk in a research-assistant deployment and high-risk in an HR-screening deployment. Classify per use case, not per platform.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'DPIA Requirements',
        content:
          '**A Data Protection Impact Assessment (Article 35) is mandatory for processing likely to result in a high risk to data subjects.** Most regulated local RAG falls in scope. Treat the DPIA as the design document, not a post-hoc compliance artefact.',
        items: [
          '**When mandatory** — systematic and extensive evaluation including profiling with legal effects; large-scale processing of special-category data (health, legal, biometric, racial, political, religious, union); systematic monitoring of public areas. National supervisory authorities publish lists of operations that always require a DPIA — check yours.',
          '**Scope of the DPIA** — purpose and lawful basis; description of the processing operations; necessity and proportionality assessment; risk assessment to data subjects; mitigations and residual risk; consultation with the DPO and (where the residual risk is high) with the supervisory authority before processing begins.',
          '**RAG-specific risks** to address: re-identification of individuals from retrieved chunks; generation of inaccurate information that affects a person; leakage via logs or backups; right-to-be-forgotten deletion completeness; cross-collection contamination; over-broad access for power users.',
          '**Mitigations to document** — the six controls above, plus chunk-level redaction or pseudonymisation where lawful basis is consent or legitimate interest; deletion runbook with rehearsal evidence; access reviews on a stated cadence.',
          '**Reviewers** — the DPO signs off; the supervisory authority is consulted where the residual risk after mitigation remains high. The signed DPIA goes in the technical file alongside the EU AI Act conformity documentation if the system is also high-risk.',
          '**Living document** — re-run the DPIA when the corpus expands materially, when the model or embedder changes, when access boundaries change, or annually as a baseline. Tie this to your change-management process.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A DPIA written in week two of the project is a planning tool. A DPIA written in week ten is a defensive document. The first is much more useful and tends to surface design changes that lower the eventual residual risk. Start the DPIA before the procurement decision, not after the deployment.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'Germany-Specific Notes (Datenschutz)',
        content:
          '**German data-protection practice layers BDSG-Neu, sector-specific rules, and works-council co-determination on top of the GDPR baseline.** A RAG deployment that satisfies generic GDPR can still fail a German review if these are missed.',
        items: [
          '**Works council (Betriebsrat) co-determination** — under §87 BetrVG, any system that monitors employee performance or behaviour requires works-council agreement before deployment. A RAG over employee-authored content (emails, internal docs) typically triggers this. Engage the works council at design time; the agreement (Betriebsvereinbarung) becomes part of the lawful-basis file.',
          '**Sector-specific confidentiality** — §203 StGB criminalises breach of professional confidentiality (lawyers, doctors, tax advisors, auditors). Deploying RAG in a way that exposes protected client data to non-bound staff or external processors can be a criminal offence, not just a civil matter. The on-prem or air-gapped pattern is the safer choice in these sectors.',
          '**Telemediengesetz (TTDSG) and telemetry** — outbound telemetry that touches end-user devices is governed not only by GDPR but also by TTDSG. Air-gap removes the question; egress-controlled deployments must verify that any outbound call is consented, necessary, or strictly technical.',
          '**Transparenzgesetz expectations** — federal and state transparency rules occasionally require disclosure of AI-supported decision-making to data subjects. Even where not strictly required, plain-language disclosure that retrieval is AI-assisted and that the human reviewer remains responsible for the decision is the defensible default.',
          '**Aufsichtsbehörden (state supervisory authorities)** — Datenschutzaufsicht is organised at the state level for the private sector. Reach out to the relevant Landesbeauftragte für Datenschutz where consultation under Article 36 is needed. Position papers from the major Landesbeauftragten on AI tooling are useful inputs to the DPIA.',
          '**Documentation language** — German supervisory authorities accept English documentation, but key user-facing artefacts (privacy notices, transparency disclosures, works-council agreements) should be in German for both legal and practical reasons.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Compliance Checklist Before Go-Live',
        content:
          '**Walk this list end-to-end before any production rollout.** Each item is a real failure mode from a real audit; the list is short on purpose so it actually gets used.',
        items: [
          '☐ **Lawful basis documented** for each category of source data — consent, contract, legal obligation, vital interest, public task, or legitimate interest with a balancing test on file.',
          '☐ **DPIA signed off** by the DPO, with a rehearsed deletion runbook attached.',
          '☐ **Records of processing activities (Article 30)** updated to include the RAG system, the categories of data, retention, recipients, and transfer mechanisms (typically none for local RAG).',
          '☐ **Six controls verified end-to-end**: air-gap or egress allowlist, RBAC, audit logs, encryption, lineage, deletion path.',
          '☐ **Outbound packet capture** clean over a 24-hour soak test; repeated after each application update.',
          '☐ **Identity provider integration** tested with a real user from each access tier; sensitive-collection access requires separate elevation.',
          '☐ **Backups taken and a restore actually tested** on isolated hardware, not just verified in a status panel.',
          '☐ **Right-to-be-forgotten runbook rehearsed** on synthetic data covering source store, vector index, cached embeddings, and retrieval log retention.',
          '☐ **EU AI Act classification** confirmed (limited-risk vs high-risk); technical file in place if high-risk.',
          '☐ **Vendor contracts (if any) reviewed**: DPA Article 28–compliant, sub-processors listed, no-training clause covering customer data.',
          '☐ **Works-council agreement** in place where employee-authored content is in scope (Germany, similar EU rules elsewhere).',
          '☐ **Transparency notice** drafted in user-facing language explaining the AI assistance, the human-in-the-loop, and the data flow.',
          '☐ **Incident-response runbook** updated to include RAG-specific scenarios: index leak, log tampering, deletion failure, model swap with downstream lineage break.',
          '☐ **Quarterly access review** scheduled and assigned; first review on the calendar before go-live.',
          '☐ **Annual DPIA refresh** scheduled and tied to the change-management process.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Mistake 1: Treating "local" as a synonym for "compliant".** Running on-prem solves transfer and processor questions; it does not solve lawful basis, DPIA, audit logging, or data subject rights. Compliance is a layered programme, not a deployment choice.',
          '**Mistake 2: Skipping the DPIA because the system is "just a search tool".** A search tool that ingests special-category data at scale is exactly what Article 35 covers. Skip the DPIA and you skip the audit defence.',
          '**Mistake 3: Logging the query text without checking lawful basis.** Queries themselves are personal data when they reference individuals. Decide at design time whether your purpose-of-processing covers query logging; if not, log the hash and metadata only.',
          '**Mistake 4: Forgetting cached embeddings in the deletion runbook.** Source delete works. Vector index rebuild works. The cache layer your platform added for performance, the embedding fingerprints in the retrieval log, and the answer history in the chat store are the parts that get missed.',
          '**Mistake 5: Allowing power users to bypass collection ACLs.** "Admins can see everything" is convenient and very common; it is also the single biggest reason audits go badly. Privileged access must itself be access-controlled, time-bound, and justified per use.',
          '**Mistake 6: Reusing one workspace for several matters or clients.** Cross-contamination of citations and context is a confidentiality failure even before any external party sees it. One matter or client per collection; separate ACLs; separate retention.',
          '**Mistake 7: Buying air-gap and then plugging in a personal phone for testing.** The air-gap perimeter has to include the people who can carry data across it. Endpoint policy is part of the control, not a separate concern.',
          '**Mistake 8: Treating model and embedder choice as "set and forget".** Each upgrade is a change-management event with DPIA, lineage, and audit-trail implications. Plan for the upgrade workflow before the first production deployment.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[GDPR Full Text (Official)](https://gdpr-info.eu/) — Complete text of the General Data Protection Regulation with article-by-article commentary.',
          '[EU AI Act Full Text](https://artificialintelligenceact.eu/) — Complete regulation text with risk classification framework.',
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — US federal governance framework applicable to AI risk assessment.',
          '[BDSG-Neu (German Federal Data Protection Act)](https://www.gesetze-im-internet.de/bdsg_2018/) — German implementation of GDPR with sector-specific additions.',
          '[EDPB Guidelines on DPIA](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — European Data Protection Board guidance on when and how to conduct DPIAs.',
          '[BfDI (German Federal Commissioner for Data Protection)](https://www.bfdi.bund.de/) — German Federal Commissioner for Data Protection position papers on AI deployment.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Does running RAG locally automatically meet GDPR?',
            a: 'No. Local hosting solves the cross-border transfer question and shrinks the processor list, but the GDPR principles in Article 5 (lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity and confidentiality, accountability) still apply. Article 25 (data protection by design and by default), Article 30 (records of processing), Article 32 (security of processing), and Article 35 (DPIA) all attach regardless of where the model runs. Local RAG is a strong starting point, not a finished compliance posture.',
          },
          {
            q: 'What is required for EU AI Act compliance for a local RAG deployment?',
            a: 'Classify the use case as limited-risk or high-risk. Most retrieval-assistant deployments are limited-risk and require transparency obligations: users must know they are interacting with an AI, generated content must be identifiable. The moment retrieval feeds an automated decision in a listed domain (credit, employment, education, public services, law enforcement, migration, justice, biometrics, critical infrastructure), the deployment is high-risk and the full obligations apply: risk management system, data governance, technical documentation, automatic event logging, transparency, human oversight, accuracy and robustness, conformity assessment, and post-market monitoring.',
          },
          {
            q: 'Do I need a DPIA for local RAG?',
            a: 'A DPIA under Article 35 is mandatory for processing likely to result in a high risk to data subjects — which includes large-scale processing of special-category data (health, legal, biometric, racial, political, religious, union) and systematic profiling with legal effects. Most regulated local RAG (legal, medical, financial, HR investigations) falls in scope. Run the DPIA early, treat it as the design document, and rehearse the mitigations — particularly the deletion runbook — before go-live.',
          },
          {
            q: 'Can I share a local RAG deployment across departments?',
            a: 'Yes, with care. Collection-level access control, per-user authentication against a single identity provider, and clear lawful basis for each department\'s use are the floor. The DPIA must cover the broadest set of processing purposes; if any one department needs a different lawful basis (e.g., HR investigations under legitimate interest while clinical staff operate under public-task), separate collections and separate access groups are easier to defend than a single collection with elaborate ACLs.',
          },
          {
            q: 'How do I audit who accessed which document?',
            a: 'Log every retrieval with user ID, timestamp, retrieved chunk IDs, and the document IDs they came from. Forward the events to a separate, write-restricted log store under different administrative control from the application server (separation of duties). Use append-only storage with a hash chain so tampering is detectable. Retention should align with the supervisory authority\'s investigation window and any sector-specific rules — six to seven years is common for regulated industries.',
          },
          {
            q: 'Are open-source embedding models GDPR-safe to use?',
            a: 'In principle yes, with three conditions. First, the weights are downloaded once and pinned to a hash so you can prove what was running. Second, inference is fully local with no telemetry or outbound calls — verify with a packet capture, do not trust documentation alone. Third, the model card and licence are reviewed for any clauses that conflict with confidential business use (some open-weight licences attach restrictions on data types or use cases). The practical default for regulated deployments is to allowlist a small number of vetted embedders and re-review on each upgrade.',
          },
          {
            q: 'What about data lineage for AI-generated outputs?',
            a: 'Every generated answer must reference the chunk IDs that produced it, the model identifier, the prompt template version, and the timestamp. The chunks then resolve back to document IDs, which resolve back to source documents. This chain is what lets you verify the answer, defend it under challenge, honour a deletion request, and reproduce the result later. Without it, "the AI said so" is the audit defence — which is no defence at all.',
          },
          {
            q: 'Can I use local RAG for client confidential documents?',
            a: 'Often yes, sometimes no. Many outside-counsel agreements, M&A NDAs, and patient-data contracts permit AI-assisted review provided the data does not leave a defined boundary and certain controls are met. Local RAG meets the boundary requirement by construction; the contract-specific control list (encryption, access, audit, retention, breach notification) must still be honoured. Where the contract prohibits AI processing entirely, no deployment pattern fixes that — the prohibition applies whether the AI is local or remote.',
          },
          {
            q: 'What logging is required for compliance?',
            a: 'Ingest events (document ID, hash, source, uploader, timestamp, classification), retrieval events (user ID, query metadata or hash, retrieved chunk IDs, answer reference, model/embedder identifier), administrative events (model promotion, embedder change, ACL change, user/group change), and operational events (backup, restore, key rotation). All events forwarded to a separate log store, append-only, hash-chained, and retained per your matter and sector requirements.',
          },
          {
            q: 'How do I handle right-to-be-forgotten requests in RAG?',
            a: 'A documented runbook that walks the deletion through every layer: source document store, vector index, cached embeddings, retrieval log retention (where lawful basis permits deletion of the log entry), and any answers stored in chat history. Source delete is straightforward; the vector index rebuild is well-understood; cached embeddings and answer history are the parts most deployments miss. Rehearse the runbook on synthetic data, document the rehearsal, and tie the runbook to your incident-response process so a real request fires the rehearsed sequence and not improvisation.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Best Local RAG](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — which self-hosted platforms suit each compliance posture, with notes on telemetry and licensing.',
          '[Local AI Agents for Business Workflows and EU Compliance](/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — adjacent compliance topic when retrieval feeds automated workflow steps rather than a human reader.',
          '[Local LLM Email and Calendar Automation](/power-local-llm/local-llm-email-and-calendar-automation) — adjacent business automation patterns where the same control set applies.',
          '[Local RAG on Your PDFs Step by Step](/power-local-llm/local-rag-on-your-pdfs-step-by-step) — practical implementation walkthrough for the on-prem and laptop patterns.',
          '[Chat With 1,000 PDFs Locally](/power-local-llm/chat-with-1000-pdfs-locally) — operational guidance for larger corpora that pushes against the on-prem ceiling.',
          '[Power Local LLM Hub](/power-local-llm) — the full guide library for self-hosted LLM deployments.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'Lokales RAG für Geschäftsdaten: DSGVO-konforme KI für vertrauliche Dokumente (2026)',
    seoTitle: 'DSGVO-konformes lokales RAG für sensible Dokumente (2026)',
    intro:
      'Juristische, medizinische und finanzielle Teams stehen vor demselben Problem: Genau die Dokumente, die sich am meisten für eine KI-gestützte Suche lohnen, dürfen das Haus nicht verlassen. Dies ist die Architektur, das Kontrollset und die Entscheidungsmatrix für Bereitstellungsmuster eines selbst gehosteten RAG, das den Anforderungen der DSGVO, des EU AI Act, von HIPAA und des deutschen Datenschutzes gerecht wird — geschrieben für Compliance-Verantwortliche, die ein einziges Dokument an ihr IT-Team senden möchten und wollen, dass dieses weiß, was zu bauen ist.',
    metaDescription:
      'DSGVO-konformes lokales RAG für Recht-, Medizin- und Finanzteams. Architektur, Audit-Logging, DSFA-Umfang und 3 Bereitstellungsmuster im Vergleich.',
    twitterDescription:
      'Lokales RAG, das DSGVO und EU AI Act erfüllt. Air-Gap, Audit-Logs, Datenherkunft, DSFA-Umfang und 3 Bereitstellungsmuster — der Artikel, den EU-Compliance-Verantwortliche an die IT senden.',
    audience:
      'Compliance-Verantwortliche, Datenschutzbeauftragte (DSB), Justiziare und IT-Architekten in der EU und im DACH-Raum, die für den Aufbau selbst gehosteter RAG-Systeme über vertrauliche Dokumente verantwortlich sind — Verträge, Patientenakten, Audit-Dateien, M&A-Datenräume, Korrespondenz mit Aufsichtsbehörden.',
    readTime: '15 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'DSGVO-konformes lokales RAG',
    targetKeywords: [
      'dsgvo konformes rag',
      'lokales rag geschäftsdaten',
      'eu ai act rag',
      'privates rag für vertrauliche dokumente',
      'on-premise rag bereitstellung',
      'datenschutz rag',
      'dsfa lokales rag',
    ],
    leadAnswerBlock:
      '**Eine selbst gehostete RAG-Bereitstellung erfüllt die Anforderungen der DSGVO und des EU AI Act nur dann, wenn sechs Kontrollen vom ersten Tag an verankert sind: Air-Gap oder strikt kontrollierter Egress, Authentifizierung pro Nutzer mit rollenbasiertem Dokumentenzugriff, unveränderliche Audit-Logs für Ingest und Retrieval, Ende-zu-Ende-Verschlüsselung im Ruhezustand und bei der Übertragung, deterministische Datenherkunft vom Chunk bis zur Quelle sowie ein schriftlich definierter Löschpfad, der vom Quellsystem über den Vektorindex bis zu zwischengespeicherten Embeddings reicht. Das Bereitstellungsmuster (Einzelnutzer-Laptop, On-Prem-Server, private EU-Cloud) bestimmt, welche Kontrollen leicht umzusetzen sind und welche Aufwand erfordern — nicht, ob die Kontrollen erforderlich sind.**',
    quickAnswerTop: {
      en: {
        question:
          'Ist lokales RAG standardmäßig DSGVO-konform, und welches Bereitstellungsmuster sollten regulierte Teams wählen?',
        answer:
          'Lokales RAG ist standardmäßig nicht DSGVO-konform. Der Betrieb eines Modells On-Premise löst zwar das Problem grenzüberschreitender Datentransfers und reduziert Ihre Liste der Auftragsverarbeiter, doch die Artikel 5, 25, 30, 32 und 35 der DSGVO gelten weiterhin: Rechtsgrundlage, Datenminimierung, Audit-Logging, Sicherheit der Verarbeitung sowie eine Datenschutz-Folgenabschätzung (DSFA) für jedes System, das besondere Kategorien personenbezogener Daten in größerem Umfang verarbeitet. Wählen Sie eine Einzelnutzer-Laptop-Bereitstellung für Einzelpersonen und einmalige Mandatsprüfungen; einen On-Prem-Server für abteilungsweite Wissensbasen mit bis zu wenigen tausend Dokumenten und 5–50 Nutzern; eine private EU-Cloud (souveräne Cloud, kundenseitig verwaltete Schlüssel, ausschließlich EU-Region) für abteilungs- oder unternehmensübergreifende Bereitstellungen, bei denen multiregionale Ausfallsicherheit wichtiger ist als ein vollständiger Air-Gap. Welches Muster Sie auch wählen — die sechs Kontrollen oben sind dieselben; nur die Implementierungskosten verschieben sich.',
        bullets: [
          'Lokales Hosting löst grenzüberschreitende Übermittlungen (Art. 44–49) und reduziert die Liste der Auftragsverarbeiter — es löst weder die Frage der Rechtsgrundlage noch die DSFA noch die Betroffenenrechte für sich genommen.',
          'Einzelnutzer-Laptop — am besten geeignet für einzelne Anwältinnen, Ärzte, Prüferinnen und einmalige Mandatsprüfungen. Schwer zu auditieren bei Skalierung; einfachster Air-Gap.',
          'On-Prem-Server — am besten geeignet für Abteilungsbereitstellungen mit 5–50 Nutzern. Echte Audit-Logs, RBAC, Backup und Disaster Recovery. Höchster IT-Aufwand.',
          'Private EU-Cloud — am besten geeignet für unternehmensübergreifende Bereitstellungen mit Anforderungen an Ausfallsicherheit. Souveräne Region + kundenseitig verwaltete Schlüssel + Klauseln, die KI-Training auf Kundendaten ausschließen, sind erforderlich.',
          'Eine DSFA ist gemäß Artikel 35 verpflichtend, wenn besondere Kategorien personenbezogener Daten in größerem Umfang verarbeitet werden — unabhängig vom Bereitstellungsmuster.',
          'Anträge auf Recht auf Vergessenwerden müssen sich auf Quelldokumente, Vektorindizes und zwischengespeicherte Embeddings auswirken — gestalten Sie den Löschpfad vor dem Go-Live, nicht erst nach dem ersten eingegangenen Antrag.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Schnellfakten', anchor: '#quick-facts' },
      { label: 'Vergleich der Bereitstellungsmuster', anchor: '#deployment-comparison' },
      { label: 'Auswahl eines Bereitstellungsmusters', anchor: '#which-deployment' },
      { label: 'Warum lokales RAG für sensible Daten', anchor: '#why-local-rag' },
      { label: 'Die sechs unverzichtbaren Kontrollen', anchor: '#required-controls' },
      { label: 'Air-Gap und Egress-Kontrolle', anchor: '#air-gap' },
      { label: 'Audit-Logging, das einer Prüfung standhält', anchor: '#audit-logging' },
      { label: 'Datenherkunft vom Chunk bis zur Quelle', anchor: '#data-lineage' },
      { label: 'Verschlüsselung und Zugriffskontrolle', anchor: '#encryption-access' },
      { label: 'Einzelnutzer-Laptop-Muster', anchor: '#laptop-pattern' },
      { label: 'On-Prem-Server-Muster', anchor: '#on-prem-pattern' },
      { label: 'Vektordatenbank-Optionen', anchor: '#vector-db-comparison' },
      { label: 'Privates EU-Cloud-Muster', anchor: '#private-cloud-pattern' },
      { label: 'Einstufung nach EU AI Act', anchor: '#eu-ai-act' },
      { label: 'DSFA-Anforderungen', anchor: '#dpia-requirements' },
      { label: 'Deutschlandspezifische Hinweise (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Compliance-Checkliste', anchor: '#compliance-checklist' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Lokales Hosting ist notwendig, aber nicht ausreichend.** Der Betrieb des Modells und des Vektorspeichers auf eigener Hardware löst grenzüberschreitende Datentransfers und reduziert die Liste der Auftragsverarbeiter, doch die Artikel 5, 25, 30, 32 und 35 der DSGVO gelten weiterhin. Rechtsgrundlage, Datenminimierung, Audit-Logging, Sicherheit der Verarbeitung und Datenschutz-Folgenabschätzungen werden nicht optional, nur weil die Daten im Haus bleiben.',
          '**Sechs Kontrollen sind nicht verhandelbar** — unabhängig vom Bereitstellungsmuster: Air-Gap oder strikte Egress-Kontrolle, Authentifizierung pro Nutzer mit rollenbasiertem Zugriff, unveränderliche Audit-Logs, Verschlüsselung im Ruhezustand und bei der Übertragung, deterministische Datenherkunft vom Chunk zurück zum Quelldokument sowie ein schriftlich definierter Löschpfad, der den Vektorindex und alle zwischengespeicherten Embeddings einschließt.',
          '**Drei Bereitstellungsmuster decken die meisten regulierten Anwendungsfälle ab.** Einzelnutzer-Laptop für Einzelpersonen und Mandatsprüfungen; On-Prem-Server für abteilungsweite Wissensbasen mit 5–50 Nutzern; private EU-Cloud (souveräne Region, kundenseitig verwaltete Schlüssel) für unternehmensübergreifende Bereitstellungen, bei denen Ausfallsicherheit wichtiger ist als ein vollständiger Air-Gap.',
          '**Der EU AI Act stuft die meisten lokalen RAG-Systeme als System mit begrenztem Risiko ein** — sobald jedoch ein Retrieval eine automatisierte Entscheidung speist (Bonitätsbewertung, Bewerberauswahl, Anspruch auf Sozialleistungen), rutscht die Bereitstellung ins Hochrisikosegment und löst die vollständige Konformitätsbewertung, die Marktbeobachtung nach Inverkehrbringen und die Pflichten zur menschlichen Aufsicht aus.',
          '**Eine DSFA ist nach Artikel 35 verpflichtend** für jedes RAG, das besondere Kategorien personenbezogener Daten (Gesundheit, Recht, biometrische, politische, gewerkschaftliche Daten) in größerem Umfang verarbeitet, oder für jedes System, das automatisierte Entscheidungen mit Rechtswirkung erzeugt. Wer die DSFA überspringt, überspringt zugleich die Verteidigungslinie im Audit.',
          '**Das Recht auf Vergessenwerden ist der Löschtest, an dem die meisten Bereitstellungen scheitern.** Quelldokumente sind einfach. Vektorindizes lassen sich neu aufbauen. Zwischengespeicherte Embeddings, Retrieval-Logs und alle in der Chat-Historie gespeicherten Antworten sind die Teile, die übersehen werden — und genau die Teile, nach denen eine Aufsichtsbehörde fragen wird.',
          '**Open-Source-Embedding-Modelle sind grundsätzlich DSGVO-konform**, aber nur unter drei Bedingungen: (a) die Modellgewichte werden einmal heruntergeladen und auf einen Hash fixiert, (b) die Inferenz läuft vollständig auf lokaler Hardware ohne Telemetrie, und (c) die Model Card und die Lizenz werden auf Klauseln geprüft, die der vertraulichen geschäftlichen Nutzung widersprechen.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellfakten',
        items: [
          '**6 verpflichtende Kontrollen** für jedes regulierte RAG: Air-Gap, RBAC, Audit-Logs, Verschlüsselung, Datenherkunft, Löschpfad.',
          '**3 Bereitstellungsmuster:** Einzelnutzer-Laptop (Einzelpersonen), On-Prem-Server (5–50 Nutzer), private EU-Cloud (unternehmensübergreifend).',
          '**Eine DSFA ist verpflichtend** nach Artikel 35, wenn besondere Kategorien personenbezogener Daten (Gesundheit, Recht, biometrische Daten) in größerem Umfang verarbeitet werden.',
          '**EU AI Act:** Die meisten lokalen RAG-Systeme = begrenztes Risiko; Hochrisiko, sobald Retrieval automatisierte Entscheidungen speist (Kredit, Beschäftigung, Sozialleistungen).',
          '**Recht auf Vergessenwerden** muss sich auf Quelldokumente, Vektorindizes, zwischengespeicherte Embeddings UND die Antwort-Historie auswirken.',
          '**Mitbestimmung des Betriebsrats** nach §87 BetrVG erforderlich für jedes RAG über mitarbeiterbezogene Inhalte in Deutschland.',
          '**Open-Source-Embedding-Modelle** sind nur DSGVO-konform, wenn die Gewichte fixiert sind, die Inferenz vollständig lokal läuft und die Lizenz geprüft wurde.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Vergleich der Bereitstellungsmuster',
        content:
          'Jedes Muster lässt sich DSGVO-konform betreiben; was sich ändert, sind die Kosten der Kontrollen und die Bruchstellen, wenn etwas schiefgeht. Wählen Sie das einfachste Muster, das zu Nutzerzahl, Dokumentensensibilität und Anforderungen an die Ausfallsicherheit passt.',
        columns: ['Kontrolle', 'Einzelnutzer-Laptop', 'On-Prem-Server', 'Private EU-Cloud'],
        rows: [
          {
            'Kontrolle': 'Air-Gap (kein ausgehendes Netzwerk)',
            'Einzelnutzer-Laptop': 'Trivial — Netzwerk deaktivieren',
            'On-Prem-Server': 'Erreichbar — VLAN + Firewall',
            'Private EU-Cloud': 'Schwer — nur Egress-Allowlist',
          },
          {
            'Kontrolle': 'Audit-Log (wer, was, wann)',
            'Einzelnutzer-Laptop': 'Manuell — nur OS-Ebene',
            'On-Prem-Server': 'Stark — zentrale Log-Pipeline',
            'Private EU-Cloud': 'Stark — Cloud-natives Logging',
          },
          {
            'Kontrolle': 'Datenherkunft (Chunk → Quelle)',
            'Einzelnutzer-Laptop': 'Nur lokale Dateien',
            'On-Prem-Server': 'Vollständig nachvollziehbar',
            'Private EU-Cloud': 'Vollständig — über Regionen hinweg',
          },
          {
            'Kontrolle': 'EU-Datenresidenz',
            'Einzelnutzer-Laptop': 'Inhärent — physischer Standort',
            'On-Prem-Server': 'Inhärent — physischer Standort',
            'Private EU-Cloud': 'Konfiguriert — souveräne Region erforderlich',
          },
          {
            'Kontrolle': 'RBAC pro Nutzer',
            'Einzelnutzer-Laptop': 'Einzelnutzer — n. v.',
            'On-Prem-Server': 'Identitätsanbieter + Gruppen',
            'Private EU-Cloud': 'IAM + SSO + ACLs pro Sammlung',
          },
          {
            'Kontrolle': 'Backup und Disaster Recovery',
            'Einzelnutzer-Laptop': 'Verschlüsselte externe Festplatte',
            'On-Prem-Server': 'Bandsicherung oder externes Backup',
            'Private EU-Cloud': 'Cross-AZ-Replikation',
          },
          {
            'Kontrolle': 'Anschaffungskosten',
            'Einzelnutzer-Laptop': 'Nur Hardware — niedrig',
            'On-Prem-Server': 'Server + Integration — mittel',
            'Private EU-Cloud': 'Abonnement + Setup — mittel',
          },
          {
            'Kontrolle': 'Laufende Kosten',
            'Einzelnutzer-Laptop': 'Keine — Sysadmin-Zeit',
            'On-Prem-Server': 'IT-Betrieb + Strom + Kühlung',
            'Private EU-Cloud': 'Monatlich wiederkehrend',
          },
          {
            'Kontrolle': 'Am besten geeignet für',
            'Einzelnutzer-Laptop': 'Einzelpersonen, Mandatsprüfungen',
            'On-Prem-Server': '5–50 Nutzer, abteilungsweite Wissensbasen',
            'Private EU-Cloud': 'Unternehmensübergreifende, ausfallsichere Bereitstellungen',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Auswahl eines Bereitstellungsmusters',
        content:
          '**Die richtige Wahl hängt von Nutzerzahl, Dokumentensensibilität, Audit-Druck und Ihrer internen IT-Kapazität ab.** Diese Entscheidungshilfe deckt die meisten realen Situationen ab.',
        columns: ['Ihre Situation', 'Empfehlung'],
        rows: [
          {
            'Ihre Situation': 'Einzelne Anwältin, Arzt oder Prüferin, die ein Mandat nach dem anderen prüft',
            'Empfehlung': 'Einzelnutzer-Laptop',
          },
          {
            'Ihre Situation': 'M&A-Datenraum mit 3–5 namentlich benannten Prüfern und festem Enddatum',
            'Empfehlung': 'Einzelnutzer-Laptop oder On-Prem (je nach Dokumentenvolumen)',
          },
          {
            'Ihre Situation': 'Compliance-Team aus 10–30 Personen, das ein Archiv mit Aufsichtsbehörden-Korrespondenz teilt',
            'Empfehlung': 'On-Prem-Server',
          },
          {
            'Ihre Situation': 'Krankenhausabteilung baut einen Assistenten für klinische Leitlinien für 50 Mitarbeitende',
            'Empfehlung': 'On-Prem-Server',
          },
          {
            'Ihre Situation': 'Konzern mit mehreren Tochtergesellschaften benötigt ein RAG über Tochtergesellschaften in mehreren EU-Ländern hinweg',
            'Empfehlung': 'Private EU-Cloud (souveräne Region + kundenseitig verwaltete Schlüssel)',
          },
          {
            'Ihre Situation': 'Versicherer mit 24/7-Verfügbarkeitsanforderung und DR-Plan',
            'Empfehlung': 'Private EU-Cloud',
          },
          {
            'Ihre Situation': 'Behörde mit Verschlusssachen oder eingeschränkten Daten',
            'Empfehlung': 'Ausschließlich Air-Gapped On-Prem — Cloud kommt nicht in Frage',
          },
          {
            'Ihre Situation': 'Aufsichtsbehörden-Audit-Verteidigung in unter 6 Wochen fällig',
            'Empfehlung': 'On-Prem-Server (am schnellsten, um Kontrolle nachzuweisen)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Warum lokales RAG für sensible Daten',
        content:
          '**Das Argument für lokales RAG gegenüber Cloud-LLM-as-a-Service ist keine Ideologie — es ist die Form der DSGVO-Risikobewertung.** Cloud-RAG ist für viele Anwendungsfälle praktikabel; bei sensiblen Geschäftsdaten fügt es jedoch fünf Risiken hinzu, die lokales RAG bauartbedingt eliminiert.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Lokales RAG hält Ihre sensiblen Dokumente auf eigener Hardware, ermöglicht Ihrem Team aber dennoch eine KI-gestützte Suche — keine Daten verlassen das Haus, kein Drittanbieter-Auftragsverarbeiter berührt sie, und Fragen zur grenzüberschreitenden Übermittlung stellen sich nicht.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich vor, Ihr Rechtsteam könnte 10.000 Fallakten in natürlicher Sprache durchsuchen — und die Dokumente verlassen niemals den Serverraum. Genau das ist lokales RAG: Die KI liest Ihre Dokumente auf Ihrer Hardware, beantwortet Ihre Fragen auf Ihrer Hardware, und nichts wird irgendwohin gesendet. Der Compliance-Vorteil ist kein Feature — er ist die Architektur.',
          },
        ],
        items: [
          '**Grenzüberschreitende Übermittlung (Art. 44–49).** Die Übermittlung personenbezogener Daten an einen Auftragsverarbeiter außerhalb der EU erfordert Standardvertragsklauseln, eine Transfer-Folgenabschätzung und eine belastbare Antwort darauf, ob die empfangende Jurisdiktion Zugriffsrechte auf diese Daten hat. Lokales RAG übermittelt keine Daten — die Frage stellt sich nicht.',
          '**Wildwuchs an Unterauftragsverarbeitern (Art. 28).** Cloud-LLM-Anbieter stützen sich typischerweise auf Hyperscaler-Infrastruktur, Content-Moderationsdienste und Observability-Anbieter. Jeder davon ist ein Unterauftragsverarbeiter, der gelistet, vertraglich gebunden und auditiert werden muss. Lokales RAG hat standardmäßig null Unterauftragsverarbeiter.',
          '**Leakage von Trainingsdaten.** Viele Cloud-LLM-AGB behalten sich das Recht vor, Kunden-Prompts zur Modellverbesserung zu nutzen, sofern keine kostenpflichtige Enterprise-Stufe gewählt und die No-Training-Klausel verifiziert ist. Lokales RAG nutzt Modelle mit Gewichten, die Sie kontrollieren; nichts verlässt den Host.',
          '**Vertraulichkeitsklauseln in Mandantenverträgen.** Außenanwaltsvereinbarungen, M&A-NDAs und Patientendatenverträge untersagen häufig die Übermittlung des geschützten Materials an Drittanbieter-Auftragsverarbeiter. Lokales RAG umgeht die Klausel vollständig.',
          '**Behördliche und prozessuale Zugriffe.** Dokumente bei einem Cloud-Anbieter können durch ein Auskunftsersuchen an den Anbieter erzwungen werden — mit Offenlegungspflichten, von denen der Verantwortliche möglicherweise nicht rechtzeitig erfährt. Dokumente, die Ihre Räumlichkeiten nicht verlassen, können nur Ihnen gegenüber erzwungen werden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Lokales RAG ist nicht für jede Workload die richtige Antwort. Recherche zu öffentlich verfügbaren Informationen, Marketing-Entwurfsgenerierung, Code-Assistenz für Open-Source-Repositories — all das funktioniert in der Regel besser mit Cloud-LLMs, weil das DSGVO-Risiko gering ist und die Modellqualitätslücke ins Gewicht fällt. Das Argument in diesem Artikel zielt speziell auf vertrauliche Geschäftsdaten ab: Recht, Medizin, Finanzen, Personalwesen, Korrespondenz mit Aufsichtsbehörden und Geschäftsgeheimnisse.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'Die sechs unverzichtbaren Kontrollen',
        content:
          '**Diese sechs Kontrollen sind das Fundament.** Jede regulierte Bereitstellung benötigt alle sechs; das Bereitstellungsmuster ändert nur, wie Sie sie umsetzen. Das Auslassen einer einzelnen Kontrolle ist der häufigste Grund dafür, dass Audits schlecht ausgehen.',
        numberedItems: [
          {
            title: 'Air-Gap oder strikte Egress-Kontrolle',
            whyItMatters:
              'Bestätigt, dass Dokumente und Embeddings nicht über ausgehende Verbindungen abfließen können — Telemetrie-SDKs, Modell-Update-Probes, Crash-Reporter, Content-Moderations-Callbacks, Drittanbieter-CDNs für Schriften. Deaktivieren Sie entweder den Netzzugriff vollständig (echter Air-Gap) oder betreiben Sie eine Egress-Allowlist, die ausschließlich signierte Update-Server zulässt.',
          },
          {
            title: 'Authentifizierung pro Nutzer mit rollenbasiertem Zugriff',
            whyItMatters:
              'Sie müssen die Frage „Wer hat auf welches Dokument zugegriffen?" beantworten können, bevor eine Aufsichtsbehörde sie stellt. Single Sign-On gegen einen Identitätsanbieter, gruppenbasierter Zugriff auf Sammlungen und ACLs auf Dokumentenebene, wo das Mandat es erfordert. Geteilte Konten sind keine Kontrolle — sie sind ein Audit-Versagen, das nur auf seinen Tag wartet.',
          },
          {
            title: 'Unveränderliche Audit-Logs für Ingest und Retrieval',
            whyItMatters:
              'Für jedes Dokument: wer es hochgeladen hat, wann, Quellpfad, Hash. Für jede Anfrage: wer gefragt hat, was gefragt wurde (sofern das Logging es zulässt), welche Chunks abgerufen wurden, aus welchen Dokument-IDs sie stammen, welche Antwort zurückgegeben wurde. Logs müssen manipulationssicher sein — append-only, signiert, mit einer Aufbewahrungsdauer, die das Untersuchungsfenster der Aufsichtsbehörde abdeckt. Für den prompt-bezogenen Audit-Trail — Versionierung, Änderungsprotokolle und Rollback — siehe [Workflows zur Versionskontrolle von Prompts](/de/prompt-engineering/prompt-version-control-workflows).',
          },
          {
            title: 'Verschlüsselung im Ruhezustand und bei der Übertragung',
            whyItMatters:
              'Festplattenverschlüsselung auf dem Host, TLS für jeden internen Service-zu-Service-Aufruf und ein Schlüsselmanagement, das einen gestohlenen Laptop oder ein kompromittiertes Admin-Konto übersteht. Kundenseitig verwaltete Schlüssel für Cloud-Bereitstellungen. Ohne diese Maßnahmen wird ein Gerätediebstahl zu einer meldepflichtigen Datenschutzverletzung nach Artikel 33.',
          },
          {
            title: 'Deterministische Datenherkunft vom Chunk bis zur Quelle',
            whyItMatters:
              'Jeder abgerufene Chunk muss auf sein Quelldokument, seine Seite, seinen Abschnitt und seine Version zurückführbar sein. Genau das erlaubt Ihnen (a) die Antwort zu verifizieren, (b) einen Löschantrag zu erfüllen, (c) das System vor Gericht zu verteidigen, wenn eine generierte Zusammenfassung infrage gestellt wird. „Wir können nicht reproduzieren, welcher Chunk welche Antwort erzeugt hat" ist keine akzeptable Antwort gegenüber einer Aufsichtsbehörde.',
          },
          {
            title: 'Schriftlich definierter Löschpfad inklusive Vektorindex und zwischengespeicherten Embeddings',
            whyItMatters:
              'Ein Antrag auf Recht auf Vergessenwerden muss vom Quellsystem über den Vektorindex bis hin zu zwischengespeicherten Embeddings und der Aufbewahrung von Retrieval-Logs propagieren. Die meisten Bereitstellungen erledigen die Quelllöschung sauber und vergessen den Rest. Dokumentieren Sie das Löschrunbook vor dem Go-Live; üben Sie es mit synthetischen Daten.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-Gap und Egress-Kontrolle',
        content:
          '**Air-Gap bedeutet, dass der Host keine ausgehende Netzwerkverbindung hat; Egress-Kontrolle bedeutet, dass er eine eng allowlistete Verbindung hat.** Beides ist akzeptabel; wählen Sie das stärkste Modell, das Ihr Betrieb tragen kann.',
        items: [
          '**Echter Air-Gap** — kein DHCP, keine DNS-Auflösung zu öffentlichen Zielen, kein ausgehendes TCP. Updates erfolgen über signierte Datenträger, die ein Administrator physisch anschließt. Das ist das richtige Modell für Verschlusssachen, bestimmte Krankenhausnetzwerke und jede Bereitstellung, deren Bedrohungsmodell eine bösartige Abhängigkeit einschließt.',
          '**Egress-Allowlist** — ausgehende Netzwerkverbindungen sind nur zu einer kleinen Liste benannter Ziele erlaubt (Modell-Update-Server, Identitätsanbieter, Log-Forwarder zu internen Sammlern). Aller andere Verkehr wird an der Firewall verworfen. Das ist die praktikable Standardlösung für die meisten regulierten Abteilungsbereitstellungen.',
          '**Worauf bei der Plattform zu achten ist**: null Telemetrie standardmäßig, keine ausgehenden Aufrufe während der Inferenz, keine Schriften-CDNs in der UI, keine Crash-Reporter, die Payloads versenden. Verifizieren Sie es mit einem Paketmitschnitt oder einem Tool wie Little Snitch auf dem Testbench, bevor Sie in die Produktion überführen.',
          '**Update-Governance** — Modellgewichte, Embedder-Gewichte, Anwendungscode und OS-Patches durchlaufen alle ein kontrolliertes Update-Fenster. Der Administrator, der ein Update freigibt, zeichnet schriftlich ab; die Änderung wird protokolliert.',
          '**Häufiger Air-Gap-Bruch:** ein Analytics-SDK, das mit einer Drittanbieter-UI-Komponente gebündelt ist, eine Schrift-CDN-Referenz im Anwendungs-Chrome oder eine „Auf Updates prüfen"-Probe, die beim Start läuft. Genau deshalb ist der Verifikationsschritt wichtig — verlassen Sie sich auf nichts, was als Standard ausgeliefert wird.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Führen Sie einen 24-stündigen Paketmitschnitt auf dem Host durch, während die Anwendung geöffnet und im Leerlauf ist. Alles Ausgehende, das nicht auf der Allowlist steht, ist ein Befund. Wiederholen Sie dies bei jedem Anwendungsupdate — Release Notes unterschätzen routinemäßig, welche neuen ausgehenden Aufrufe hinzugekommen sind.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'Audit-Logging, das einer Prüfung standhält',
        content:
          '**Das Audit-Log ist das Artefakt, das eine Aufsichtsbehörde zuerst lesen wird.** Es muss zwei Fragen für jeden Retrieval beantworten: Wer hat gefragt, und was hat das System geliefert? Ohne diese Antworten argumentieren Sie mit Worten; mit ordentlichem Logging legen Sie Belege vor.',
        items: [
          '**Ingest-Ereignisse**: Dokument-ID, Hash (SHA-256), Dateiname, Quellpfad, hochgeladen von, Zeitstempel, Klassifizierungs-Tag, Größe, Seitenzahl, Eigentümergruppe, Aufbewahrungsklasse. Klassifizieren Sie jedes Dokument bei der Aufnahme — eine nachträgliche Klassifizierung großer Korpora ist mühsam und selten vollständig.',
          '**Retrieval-Ereignisse**: Anfrage-ID, Nutzer-ID, Zeitstempel, abgerufene Chunk-IDs (und die Dokument-IDs, aus denen sie stammen), Retrieval-Scores, Hash der finalen Antwort, Modell-Identifikator, Embedder-Identifikator, verwendetes Top-K. Der Anfragetext selbst ist sensibel — protokollieren Sie ihn nur, wenn Ihre Verarbeitungszwecke es abdecken; andernfalls protokollieren Sie nur Hash und Zeitstempel.',
          '**Administrative Ereignisse**: Modellfreigabe, Embedder-Wechsel, Index-Neuaufbau, Nutzer-/Gruppenänderungen, ACL-Änderungen, Änderungen der Zugriffsrichtlinien. Jedes Ereignis ist von dem zuständigen Administrator signiert.',
          '**Manipulationssicherheit**: append-only-Log, Hash-Kette (jeder Eintrag verweist auf den Hash des vorherigen Eintrags), Out-of-Band-Signaturschlüssel, regelmäßige Abgleiche mit einer separaten Kopie, die von einem anderen Administrator oder auf einem WORM-Medium gehalten wird.',
          '**Aufbewahrung**: orientiert sich am Untersuchungsfenster der Aufsichtsbehörde — mindestens an der Aufbewahrungsfrist des Mandats; in regulierten Branchen üblicherweise sechs bis sieben Jahre; länger, wo Branchenregeln gelten.',
          '**Pipeline**: Die Anwendung emittiert strukturierte Ereignisse; ein Forwarder transportiert sie zu einem separaten, schreibgeschützten Logspeicher. Der Anwendungsserver darf niemals die Berechtigung haben, Log-Einträge zu löschen oder zu überschreiben — die Funktionstrennung ist es, die das Log glaubwürdig macht.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das Logging des Anfragetexts wirft eine eigene DSGVO-Frage auf — eine Anfrage kann selbst personenbezogene Daten enthalten (z. B. „Fasse die Krankengeschichte von Patient X zusammen"). Entscheiden Sie zur Designzeit, ob Ihre Verarbeitungszwecke das Logging von Anfragen abdecken; falls nicht, protokollieren Sie ausschließlich die für Audit und Betriebsdiagnose erforderlichen Metadaten.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Datenherkunft vom Chunk bis zur Quelle',
        content:
          '**Datenherkunft ist das Rückgrat jeder anderen Kontrolle.** Ohne sie scheitern Löschanträge, ist Antwortverifikation unmöglich, und der Audit-Trail bricht zusammen. Bauen Sie Datenherkunft vom ersten Ingest an ein, nicht nachträglich.',
        items: [
          '**Datenherkunft auf Dokumentenebene**: Jedes Dokument hat eine stabile interne ID, einen Inhalts-Hash, einen Ingest-Zeitstempel, einen Eigentümer, eine Klassifizierung und eine Aufbewahrungsklasse. Die Originaldatei verbleibt im Quellsystem; das RAG-System hält eine Referenz, nicht das Original.',
          '**Datenherkunft auf Chunk-Ebene**: Jeder Chunk verweist auf seine übergeordnete Dokument-ID, Seite (bei PDFs), Abschnitt (bei strukturierten Dokumenten), Zeichen-Offset, Länge und Version der Chunking-Strategie. Wenn Sie neu chunkten (Sie werden), werden alte Chunks tombstoned, nicht in-place gelöscht — damit alte Retrieval-Logs weiterhin auflösbar bleiben.',
          '**Datenherkunft auf Embedding-Ebene**: Jeder Embedding-Vektor verweist auf seine Chunk-ID und seinen Embedder-Identifikator. Wenn Sie Embedder wechseln, werden die alten Vektoren behalten, bis die neuen validiert sind und alle Mandate, die sie referenzierten, abgeschlossen wurden; erst dann werden sie gelöscht.',
          '**Datenherkunft auf Antwortebene**: Jede generierte Antwort verweist auf die Chunk-IDs, die sie hervorgebracht haben, den Modell-Identifikator, die Version der Prompt-Vorlage und den Zeitstempel. Wenn ein Nutzer fragt „Woher stammt diese Antwort?", löst das System Chunk → Dokument → Seite mit einem Klick auf.',
          '**Re-Indexierung ohne Bruch der Datenherkunft**: Neuaufbauten erhalten Dokument-IDs und erhöhen die Versionen der Chunking-Strategie. Alte Chunk-IDs bleiben in Retrieval-Logs auflösbar, auch nachdem der Live-Index weitergezogen ist.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Testen Sie die Datenherkunftskette quartalsweise. Wählen Sie zufällig ein Retrieval aus dem Audit-Log und gehen Sie es rückwärts durch: Chunk-ID → Dokument-ID → Originaldatei im Quellsystem → Aufbewahrungsklasse. Wenn ein Schritt unterbrochen ist, beheben Sie das Schema vor der nächsten Aufsichtsprüfung — nicht währenddessen.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'Verschlüsselung und Zugriffskontrolle',
        content:
          '**Verschlüsselung im Ruhezustand, Verschlüsselung bei der Übertragung und Zugriffskontrolle, die auf Ihren bestehenden Identitätsanbieter abbildet.** Das sind gut verstandene Kontrollen; das Versagen besteht meist nicht in schlechter Umsetzung, sondern darin, eine der drei Schichten zu vergessen.',
        items: [
          '**Verschlüsselung im Ruhezustand** — Vollverschlüsselung der Festplatte auf dem Host (LUKS unter Linux, BitLocker unter Windows, FileVault unter macOS für Laptops). Bei Servern verschlüsseln Sie zusätzlich die Partitionen, die den Vektorspeicher und den Ingest-Staging-Bereich enthalten. Kundenseitig verwaltete Schlüssel für jede Cloud-Bereitstellung, mit Schlüsselrotation gemäß Ihrer Richtlinie.',
          '**Verschlüsselung bei der Übertragung** — TLS für jeden Service-zu-Service-Hop, auch auf localhost. Cipher-Richtlinie ausgerichtet an Ihrer Branchen-Baseline. Mutual TLS, wo das Bedrohungsmodell es rechtfertigt — typischerweise Server-zu-Server in Cloud-Bereitstellungen.',
          '**Authentifizierung** — Single Sign-On gegen Ihren bestehenden Identitätsanbieter (OIDC, SAML). Keine lokalen Konten in der Produktion. MFA für jeden Nutzer mit administrativem oder sensiblem Sammlungszugriff durchgesetzt.',
          '**Autorisierung** — gruppenbasierter Zugriff auf Sammlungsebene; ACLs auf Dokumentenebene, wo das Mandat es erfordert (z. B. M&A-Datenräume, arbeitsrechtliche Untersuchungen). Die Retrieval-Pipeline muss ACLs zur Anfragezeit durchsetzen — nicht erst die UI. Ein Nutzer, der ein Dokument nicht sehen darf, darf auch dessen Chunks nicht zurückgegeben bekommen.',
          '**Administrativer Zugriff** — Privileged Access Management für jedes Konto, das Indizes lesen oder neu aufbauen, Audit-Logs einsehen oder ACLs ändern kann. Just-in-Time-Erhöhung mit protokollierter Begründung schlägt dauerhafte Admin-Rechte.',
          '**Endpunkt-Sicherheit** — verwaltete Geräte für Laptop-Bereitstellungen (MDM-eingebunden, verschlüsselt, durchgesetzte Bildschirmsperre). Ein Solo-Profi-Laptop mit entschlüsseltem Dokumentenspeicher, der unbeaufsichtigt im Café liegt, ist die Datenschutzverletzung, die Sie nicht melden möchten.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Einzelnutzer-Laptop-Muster',
        content:
          '**Der Einzelnutzer-Laptop ist das Muster, das sich am einfachsten air-gappen und am schwersten skalieren lässt.** Richtig für Einzelpersonen und einmalige Mandatsprüfungen; falsch für alles, was einen einzelnen Nutzer überdauern oder dessen Ausscheiden überstehen muss.',
        items: [
          '**Hardware** — ein Workstation-Laptop mit Vollverschlüsselung der Festplatte, einer dedizierten GPU (oder einer aktuellen Unified-Memory-Maschine) und mindestens 32 GB RAM. Modell und Embedder müssen neben dem Vektorspeicher-Cache in den Speicher passen. Hardwareanforderungen und Modellauswahl nach VRAM finden Sie im [Hardware-Leitfaden für lokale LLMs](/de/local-llms/local-llm-hardware-guide-2026).',
          '**Software** — eine in sich geschlossene Desktop-RAG-Anwendung, die lokal läuft; ein Open-Source-LLM mit einmal heruntergeladenen und auf einen Hash fixierten Gewichten; ein Open-Source-Embedder; ein lokaler Vektorspeicher auf der verschlüsselten Festplatte. Einen Vergleich von Open-Source-Modellen, die für lokales RAG geeignet sind, finden Sie unter [Top-Open-Source-Modelle für Ollama](/de/local-llms/top-open-source-models-ollama).',
          '**Netzwerk-Posture** — air-gapped während der Arbeit; nur für ausdrücklich signierte Updates wieder verbunden. Konfigurieren Sie die OS-Firewall so, dass sie standardmäßig alle ausgehenden Verbindungen verwirft, und legen Sie explizite Ausnahmen für den Update-Workflow an.',
          '**Dokumentenhandhabung** — Quelldokumente auf der verschlüsselten Festplatte; eine separate Mandatsstruktur pro Mandat; wöchentliche verschlüsselte Backups auf einer externen Festplatte, die an einem anderen Ort gelagert wird.',
          '**Audit-Posture** — Das OS-seitige Audit-Log (Login, Dateizugriff, Peripherieereignisse) ist die Grundlage. Anwendungsbezogene Ereignisse sind im On-Prem-Server-Muster einfacher; für das Laptop-Muster behandeln Sie das OS-Log als primären Nachweis und ergänzen Sie es mit manuellen Notizen pro Mandat.',
          '**Grenzen** — Ein Einzelnutzer-Laptop ist keine Mehrnutzer-Plattform. Den Laptop zu teilen, Konten zu teilen oder den Dokumentenspeicher auf den Rechner einer Kollegin zu kopieren bricht die Audit-Posture und die Bewertung der Rechtsgrundlage.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Einzelpersonen, die vertrauliche Mandate bearbeiten, ist das Einzelnutzer-Laptop-Muster die wirklich stärkste verfügbare Datenschutz-Posture — besser als jede Cloud und stärker als viele On-Prem-Bereitstellungen. Der Trade-off ist operativ: Wenn der Laptop ausfällt, erbt das Mandat die Wiederherstellungszeit Ihrer Backup-Disziplin.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'On-Prem-Server-Muster',
        content:
          '**Der On-Prem-Server ist das Arbeitspferd-Muster für reguliertes abteilungsweites RAG.** Es skaliert auf 5–50 Nutzer und wenige tausend Dokumente, unterstützt ordentliches Audit-Logging und bleibt innerhalb Ihres physischen Perimeters. Der Preis ist reale IT-Betriebsarbeit.',
        items: [
          '**Hardware** — ein Server mit ein bis zwei Enterprise-GPUs (Workstation-GPUs sind für kleinere Korpora akzeptabel), redundanten Festplatten, ECC-Speicher und einer USV. Planen Sie das 2- bis 4-fache des Speichers Ihres Roh-Dokumentenkorpus ein, um Vektoren, Indizes, Logs und Backups abzudecken.',
          '**Netzwerk** — ein dediziertes VLAN hinter der Unternehmens-Firewall; Egress-Allowlist oder vollständiger Air-Gap je nach Bedrohungsmodell. Interner Zugriff ausschließlich über das Unternehmensnetzwerk, kein öffentlicher Ingress.',
          '**Software-Stack** — eine selbst gehostete RAG-Plattform (ein eigenständiges Server-Image oder eine containerisierte Bereitstellung), ein Open-Source-LLM als Chat-Modell, ein Open-Source-Embedder und ein Vektorspeicher, der zur Korpusgröße passt. Anwendungsserver, Vektorspeicher und Log-Forwarder laufen als separate Prozesse mit separaten Service-Accounts.',
          '**Identität** — föderiert gegen den Unternehmens-Identitätsanbieter; Gruppenmitgliedschaft steuert den Sammlungszugriff. Sensible Sammlungen sind über zusätzliche Genehmigungs-Workflows abgesichert.',
          '**Backup und DR** — nächtliche inkrementelle Backups des Dokumentenspeichers und des Vektorindex; wöchentliche Vollbackups; externe Kopie, die von der IT verwahrt wird. Dokumentiertes Wiederherstellungs-Runbook, das mindestens jährlich getestet wird.',
          '**Betrieb** — Patch-Fenster nach Change-Management-Richtlinie; quartalsweise Zugriffsprüfungen; geübtes Lösch-Runbook für Anträge auf Recht auf Vergessenwerden; dokumentierter Upgrade-Pfad für Modelle und Embedder, der die Datenherkunft erhält.',
          '**Kapazitätsplanung** — wenige tausend Dokumente und 5–50 gleichzeitige Nutzer passen komfortabel auf einen einzelnen Mid-Range-GPU-Server. Darüber hinaus planen Sie entweder einen leistungsstärkeren Host oder den Wechsel zum Private-Cloud-Muster.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'On-Prem-RAG ist das Muster, das am ehesten aus nicht-technischen Gründen scheitert: ein Backup, das nie wiederhergestellt wurde, ein Admin-Konto, das im IT-Team geteilt wird, eine USV, die niemand getestet hat, ein Log-Forwarder, der seit zwei Monaten unbemerkt Ereignisse verwirft. Die technischen Kontrollen sind einfacher als die operative Hygiene.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Vektordatenbank-Optionen für On-Prem-RAG',
        content:
          '**Die Wahl des Vektorspeichers entscheidet selten über Compliance — sie prägt jedoch die Betriebskosten, die Skalierungsobergrenze und wie sauber das Lösch-Runbook umgesetzt werden kann.** Die meisten regulierten Bereitstellungen wählen eine dieser sechs Optionen.',
        columns: ['Vektordatenbank', 'Typ', 'EU-Self-Hosting', 'Bestes RAG-Muster'],
        rows: [
          {
            'Vektordatenbank': '**Chroma**',
            'Typ': 'Open Source, leichtgewichtig',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'Laptop + kleines On-Prem',
          },
          {
            'Vektordatenbank': '**Qdrant**',
            'Typ': 'Open Source, leistungsstark',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'On-Prem-Server, filterintensiv',
          },
          {
            'Vektordatenbank': '**Weaviate**',
            'Typ': 'Open Source, voller Funktionsumfang',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'On-Prem + hybride Suche',
          },
          {
            'Vektordatenbank': '**Milvus**',
            'Typ': 'Open Source, Enterprise',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'Großskaliges On-Prem',
          },
          {
            'Vektordatenbank': '**pgvector**',
            'Typ': 'PostgreSQL-Erweiterung',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'Teams, die bereits Postgres nutzen',
          },
          {
            'Vektordatenbank': '**Pinecone**',
            'Typ': 'Managed SaaS',
            'EU-Self-Hosting': '⚠️ US-gehostet',
            'Bestes RAG-Muster': 'Nur private EU-Cloud (mit Vorbehalten)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Privates EU-Cloud-Muster',
        content:
          '**Das private EU-Cloud-Muster nutzt einen Cloud-Anbieter mit souveräner Region, kundenseitig verwalteten Schlüsseln, ausschließlicher EU-Datenresidenz und einer vertraglichen Klausel gegen KI-Training auf Kundendaten.** Es ist die richtige Antwort für unternehmensübergreifende Bereitstellungen, multiregionale Ausfallsicherheitsanforderungen und Teams ohne ausreichende operative Kapazität für echtes On-Prem.',
        items: [
          '**Anbieterauswahl** — das souveräne EU-Angebot eines Hyperscalers oder ein europäischer Cloud-Anbieter. Der AVV muss jeden Unterauftragsverarbeiter auflisten; Übermittlungsmechanismen müssen adressiert werden, falls ein Unterauftragsverarbeiter außerhalb des EWR liegt. Eine Schrems-II-konforme Transfer-Folgenabschätzung ist Bestandteil der Akte, selbst wenn der unmittelbare Auftragsverarbeiter EU-ansässig ist.',
          '**Region** — ausschließlich EU, mit ausdrücklichen Datenresidenzgarantien. Cross-Region-Replikation nur in andere EU-Regionen. Keine US-Region als Failover, auch nicht vorübergehend, auch nicht für Backups.',
          '**Verschlüsselung** — kundenseitig verwaltete Schlüssel mit Rotation; Bring-your-own-Key, wo der Anbieter es unterstützt; Schlüsselzugriffsereignisse separat von den betrieblichen Logs des Cloud-Anbieters protokolliert.',
          '**Netzwerk** — privates VPC ohne öffentlichen Ingress; Zugriff ausschließlich über private Konnektivität (dedizierte Leitung oder VPN) aus Ihrem Unternehmensnetzwerk; Egress-Allowlist für jede ausgehende Abhängigkeit.',
          '**Identität** — föderiert gegen Ihren Unternehmens-IdP; Cloud-natives IAM, gebunden an Nutzeridentitäten, nicht an geteilte Service-Accounts; ACLs pro Sammlung in der Retrieval-Pipeline durchgesetzt.',
          '**Logging** — Cloud-natives Audit-Log, das in Ihr bestehendes SIEM eingespeist wird; separate Aufnahme für anwendungsbezogene Audit-Ereignisse; manipulationssichere Aufbewahrung, die den Erwartungen der Aufsicht entspricht.',
          '**Verträge** — der AVV muss Artikel-28-konform sein, Unterauftragsverarbeiter auflisten, SCCs adressieren, wo erforderlich, und eine ausdrückliche No-Training-Klausel enthalten, die LLM-Gewichte und alle Hilfsdienste (Suche, Telemetrie, Support) abdeckt.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Das private EU-Cloud-Muster wirkt freizügiger als On-Prem, weil es einen Drittanbieter-Auftragsverarbeiter einbindet — aber mit souveräner Region, kundenseitig verwalteten Schlüsseln, vertraglicher No-Training-Klausel und ordentlicher Egress-Kontrolle kann es On-Prem in Verfügbarkeit und Audit-Posture erreichen oder schlagen. Die Compliance-Akte ist dicker; das operative Risiko ist geringer.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'EU-AI-Act-Einstufung: Begrenztes Risiko vs. Hochrisiko',
        content:
          '**Die meisten lokalen RAG-Bereitstellungen sind unter dem EU AI Act KI-Systeme mit begrenztem Risiko — sobald jedoch das Retrieval eine automatisierte Entscheidung mit Auswirkungen auf eine Person speist, rutscht die Einstufung ins Hochrisiko, und die Pflichten vervielfachen sich.** Klassifizieren Sie, bevor Sie bauen.',
        items: [
          '**Begrenztes Risiko (die meisten lokalen RAG)** — Das System ruft Dokumente ab und fasst sie zusammen, um einen Menschen zu unterstützen; der Mensch trifft die Entscheidung. Die Pflichten sind überwiegend Transparenzpflichten: Nutzer müssen wissen, dass sie mit einer KI interagieren, generierter Inhalt muss als solcher erkennbar sein, kein manipulatives oder irreführendes Design.',
          '**Hochrisiko** — Das Retrieval speist eine automatisierte Entscheidung in den vom Act gelisteten Bereichen: Bonitätsbewertung, Bewerberauswahl, Bildungszulassungen, wesentliche öffentliche Dienste, Strafverfolgung, Migration, Justiz, biometrische Identifikation, kritische Infrastruktur. Ein RAG zur klinischen Entscheidungsunterstützung, das Behandlungen empfiehlt, ist Hochrisiko; ein RAG, das klinische Leitlinien zusammenfasst und einer Ärztin hilft, schneller zu lesen, ist es nicht.',
          '**Hochrisiko-Pflichten** — Risikomanagementsystem über den Lebenszyklus, Daten-Governance (Trainings-, Validierungs- und Testdaten dokumentiert), technische Dokumentation, automatische Ereignisprotokollierung, Transparenz und Information für Nutzer, menschliche Aufsicht, Genauigkeit und Robustheit, Konformitätsbewertung vor dem Inverkehrbringen, Marktbeobachtung nach Inverkehrbringen.',
          '**Erwägungen zu KI-Systemen mit allgemeinem Verwendungszweck** — Die Nutzung eines allgemeinen LLMs (Open Source oder anders) überträgt die Hochrisiko-Pflichten nicht auf den Modellanbieter. Der Betreiber (Ihre Organisation) trägt die Hochrisiko-Pflichten für das System, das Sie mit diesem Modell bauen.',
          '**Verbotene Praktiken** — Social Scoring, ungezieltes Scraping von Gesichtsbildern, Emotionserkennung an Arbeitsplätzen und Schulen, bestimmte Echtzeit-biometrische Kategorisierung. Diese sind unabhängig davon, wie lokal Sie sie betreiben, vom Tisch.',
          '**Dokumentation als Audit-Artefakt** — Die für Hochrisikosysteme erforderliche technische Akte ist kein einmaliges Lieferobjekt; sie ist ein lebendiges Dokument. Binden Sie sie an Ihren Change-Management-Prozess, sodass jede Modellfreigabe, jeder Embedder-Wechsel und jede ACL-Änderung darin reflektiert wird.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Linie zwischen Hochrisiko und begrenztem Risiko wird vom Anwendungsfall gezogen, nicht von der Technologie. Derselbe Vektorspeicher und dasselbe Modell können in einer Forschungsassistenten-Bereitstellung begrenztes Risiko und in einer HR-Screening-Bereitstellung Hochrisiko darstellen. Klassifizieren Sie pro Anwendungsfall, nicht pro Plattform.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'DSFA-Anforderungen (Artikel 35)',
        content:
          '**Eine Datenschutz-Folgenabschätzung (Artikel 35) ist verpflichtend für Verarbeitungen, die voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der Betroffenen zur Folge haben.** Die meisten regulierten lokalen RAG-Systeme fallen in den Anwendungsbereich. Behandeln Sie die DSFA als Designdokument, nicht als nachträgliches Compliance-Artefakt.',
        items: [
          '**Wann verpflichtend** — systematische und umfassende Bewertung einschließlich Profiling mit Rechtswirkung; großmaßstäbliche Verarbeitung besonderer Kategorien personenbezogener Daten (Gesundheit, Recht, biometrische, rassische, politische, religiöse, gewerkschaftliche Daten); systematische Überwachung öffentlich zugänglicher Bereiche. Die nationalen Aufsichtsbehörden veröffentlichen Listen von Verarbeitungstätigkeiten, die immer eine DSFA erfordern — prüfen Sie Ihre.',
          '**Umfang der DSFA** — Zweck und Rechtsgrundlage; Beschreibung der Verarbeitungstätigkeiten; Erforderlichkeit und Verhältnismäßigkeit; Risikobewertung gegenüber den Betroffenen; Risikominderungen und Restrisiko; Konsultation des Datenschutzbeauftragten und (bei verbleibendem hohem Risiko) der Aufsichtsbehörde vor Beginn der Verarbeitung.',
          '**RAG-spezifische Risiken**, die zu adressieren sind: Re-Identifikation von Einzelpersonen aus abgerufenen Chunks; Generierung ungenauer Informationen, die eine Person betreffen; Leakage über Logs oder Backups; Vollständigkeit der Löschung beim Recht auf Vergessenwerden; Cross-Sammlungs-Kontamination; zu weit gefasste Zugriffe für Power-User.',
          '**Zu dokumentierende Risikominderungen** — die sechs Kontrollen oben, plus Chunk-bezogene Schwärzung oder Pseudonymisierung, wo die Rechtsgrundlage Einwilligung oder berechtigtes Interesse ist; Lösch-Runbook mit Übungsnachweis; Zugriffsprüfungen in einer festgelegten Kadenz.',
          '**Prüfer** — Der DSB zeichnet ab; die Aufsichtsbehörde wird konsultiert, wenn das Restrisiko nach Risikominderung weiterhin hoch bleibt. Die unterzeichnete DSFA gehört in die technische Akte zusammen mit der EU-AI-Act-Konformitätsdokumentation, falls das System ebenfalls hochriskant ist.',
          '**Lebendiges Dokument** — Führen Sie die DSFA erneut durch, wenn der Korpus wesentlich erweitert wird, wenn das Modell oder der Embedder sich ändert, wenn Zugriffsgrenzen sich ändern oder als Baseline jährlich. Binden Sie dies an Ihren Change-Management-Prozess.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Eine DSFA, die in Woche zwei eines Projekts geschrieben wird, ist ein Planungswerkzeug. Eine DSFA, die in Woche zehn geschrieben wird, ist ein Verteidigungsdokument. Das erste ist deutlich nützlicher und bringt typischerweise Designänderungen ans Licht, die das spätere Restrisiko senken. Beginnen Sie die DSFA vor der Beschaffungsentscheidung, nicht nach der Bereitstellung.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'Deutschlandspezifische Hinweise (Datenschutz)',
        content:
          '**Die deutsche Datenschutzpraxis legt das BDSG-Neu, sektorspezifische Regeln, BSI-Grundschutz-Bausteine und die Mitbestimmung des Betriebsrats über die DSGVO-Baseline.** Eine RAG-Bereitstellung, die generische DSGVO-Anforderungen erfüllt, kann in einer deutschen Prüfung dennoch scheitern, wenn diese Punkte übersehen werden.',
        items: [
          '**Mitbestimmung des Betriebsrats** — Nach §87 BetrVG erfordert jedes System, das die Leistung oder das Verhalten von Beschäftigten überwacht, eine Vereinbarung mit dem Betriebsrat vor der Bereitstellung. Ein RAG über mitarbeiter-erstellte Inhalte (E-Mails, interne Dokumente) löst dies typischerweise aus. Beziehen Sie den Betriebsrat zur Designzeit ein; die Vereinbarung (Betriebsvereinbarung) wird Teil der Rechtsgrundlagen-Akte.',
          '**Sektorspezifische Verschwiegenheit** — §203 StGB stellt die Verletzung der beruflichen Verschwiegenheit (Anwälte, Ärzte, Steuerberater, Wirtschaftsprüfer) unter Strafe. Eine RAG-Bereitstellung, die geschützte Mandanten- oder Patientendaten gegenüber nicht berufsmäßig gebundenem Personal oder externen Auftragsverarbeitern offenlegt, kann eine Straftat sein, nicht nur eine zivilrechtliche Angelegenheit. Das On-Prem- oder Air-Gapped-Muster ist in diesen Sektoren die sicherere Wahl.',
          '**Telemediengesetz und TTDSG** — Ausgehende Telemetrie, die Endnutzergeräte berührt, wird nicht nur von der DSGVO, sondern auch vom TTDSG geregelt. Air-Gap nimmt die Frage vom Tisch; egress-kontrollierte Bereitstellungen müssen verifizieren, dass jeder ausgehende Aufruf eingewilligt, erforderlich oder strikt technisch ist.',
          '**BSI-Grundschutz-Bausteine** — Für Behörden und KRITIS-Betreiber liefert das BSI-Grundschutz-Kompendium des Bundesamts für Sicherheit in der Informationstechnik den verbindlichen Maßstab. Auch im Mittelstand sind Bausteine wie OPS.1.2.4 (Cloud-Nutzung), OPS.2.1 (Outsourcing) und APP.4.4 (Webanwendungen) sinnvolle Referenzen für die Architekturdokumentation. Die DSFA und das technische Konzept sollten an passende Bausteine knüpfen.',
          '**Aufsichtsbehörden (Bund und Länder)** — Die Datenschutzaufsicht ist im Privatsektor auf Länderebene organisiert. Wenden Sie sich an die zuständige Landesbeauftragte für Datenschutz, wenn eine Konsultation nach Artikel 36 erforderlich ist. Positionspapiere des BfDI und der großen Landesbeauftragten zu KI-Werkzeugen sind wertvolle Inputs für die DSFA.',
          '**Praxis im deutschen Mittelstand** — Lokales RAG ist für den Mittelstand häufig die pragmatische Wahl: Es passt zu vorhandenen On-Prem- oder Hybrid-Architekturen, vermeidet die Komplexität von SCCs und Schrems-II-Bewertungen und erlaubt der eigenen IT, Souveränität über Modell und Daten zu behalten. Eine typische Bereitstellung ist ein On-Prem-Server, federiert gegen Microsoft Entra ID oder Keycloak, mit BSI-konformer Patch- und Backup-Disziplin.',
          '**Dokumentationssprache** — Deutsche Aufsichtsbehörden akzeptieren englischsprachige Dokumentation, doch zentrale nutzerseitige Artefakte (Datenschutzhinweise, Transparenzerklärungen, Betriebsvereinbarungen) sollten aus rechtlichen wie praktischen Gründen auf Deutsch verfasst sein.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Compliance-Checkliste vor dem Go-Live',
        content:
          '**Arbeiten Sie diese Liste vor jedem produktiven Rollout vollständig durch.** Jeder Punkt ist ein realer Versagensmodus aus einem realen Audit; die Liste ist bewusst kurz, damit sie auch tatsächlich genutzt wird.',
        items: [
          '☐ **Rechtsgrundlage dokumentiert** für jede Kategorie von Quelldaten — Einwilligung, Vertrag, gesetzliche Verpflichtung, lebenswichtige Interessen, öffentliche Aufgabe oder berechtigtes Interesse mit Abwägungstest in der Akte.',
          '☐ **DSFA vom DSB unterzeichnet**, mit angehängtem geübten Lösch-Runbook.',
          '☐ **Verzeichnis von Verarbeitungstätigkeiten (Artikel 30)** aktualisiert, einschließlich des RAG-Systems, der Datenkategorien, Aufbewahrung, Empfänger und Übermittlungsmechanismen (typischerweise keine bei lokalem RAG).',
          '☐ **Sechs Kontrollen End-to-End verifiziert**: Air-Gap oder Egress-Allowlist, RBAC, Audit-Logs, Verschlüsselung, Datenherkunft, Löschpfad.',
          '☐ **Ausgehender Paketmitschnitt** sauber über einen 24-stündigen Soak-Test; nach jedem Anwendungsupdate wiederholt.',
          '☐ **Identitätsanbieter-Integration** mit echten Nutzern aus jeder Zugriffsstufe getestet; Zugriff auf sensible Sammlungen erfordert separate Erhöhung.',
          '☐ **Backups erstellt und Wiederherstellung tatsächlich getestet** auf isolierter Hardware, nicht nur in einem Status-Panel verifiziert.',
          '☐ **Recht-auf-Vergessenwerden-Runbook geübt** mit synthetischen Daten — abdeckend Quellsystem, Vektorindex, zwischengespeicherte Embeddings und Aufbewahrung der Retrieval-Logs.',
          '☐ **EU-AI-Act-Einstufung** bestätigt (begrenztes Risiko vs. Hochrisiko); technische Akte vorhanden, falls Hochrisiko.',
          '☐ **Anbieterverträge (sofern vorhanden) geprüft**: AVV gemäß Artikel 28, Unterauftragsverarbeiter aufgelistet, No-Training-Klausel, die Kundendaten abdeckt.',
          '☐ **Betriebsvereinbarung** vorhanden, wo mitarbeiterbezogene Inhalte im Geltungsbereich sind (Deutschland; ähnliche EU-Regeln andernorts).',
          '☐ **Transparenzhinweis** in nutzerverständlicher Sprache erstellt, der die KI-Unterstützung, den Human-in-the-Loop und den Datenfluss erklärt.',
          '☐ **Incident-Response-Runbook** aktualisiert, um RAG-spezifische Szenarien zu berücksichtigen: Index-Leak, Log-Manipulation, Löschversagen, Modellwechsel mit nachgelagertem Bruch der Datenherkunft.',
          '☐ **Quartalsweise Zugriffsprüfung** geplant und zugewiesen; erste Prüfung vor dem Go-Live im Kalender.',
          '☐ **Jährliche DSFA-Aktualisierung** geplant und an den Change-Management-Prozess gekoppelt.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Fehler 1: „Lokal" als Synonym für „konform" zu behandeln.** On-Prem-Betrieb löst Übermittlungs- und Auftragsverarbeiterfragen; er löst weder Rechtsgrundlage, DSFA, Audit-Logging noch Betroffenenrechte. Compliance ist ein geschichtetes Programm, keine Bereitstellungsentscheidung.',
          '**Fehler 2: Die DSFA überspringen, weil das System „nur ein Suchwerkzeug" sei.** Ein Suchwerkzeug, das besondere Kategorien personenbezogener Daten in größerem Umfang verarbeitet, ist genau das, was Artikel 35 abdeckt. Wer die DSFA überspringt, überspringt die Verteidigungslinie im Audit.',
          '**Fehler 3: Den Anfragetext ohne Prüfung der Rechtsgrundlage protokollieren.** Anfragen sind selbst personenbezogene Daten, wenn sie auf Einzelpersonen verweisen. Entscheiden Sie zur Designzeit, ob Ihre Verarbeitungszwecke das Logging der Anfragen abdecken; falls nicht, protokollieren Sie nur Hash und Metadaten.',
          '**Fehler 4: Zwischengespeicherte Embeddings im Lösch-Runbook vergessen.** Quelllöschung funktioniert. Vektorindex-Neuaufbau funktioniert. Die Cache-Schicht, die Ihre Plattform aus Performance-Gründen ergänzt hat, die Embedding-Fingerabdrücke im Retrieval-Log und die Antwort-Historie im Chat-Speicher sind die Teile, die übersehen werden.',
          '**Fehler 5: Power-Usern erlauben, Sammlungs-ACLs zu umgehen.** „Admins können alles sehen" ist bequem und sehr verbreitet; es ist auch der mit Abstand häufigste Grund dafür, dass Audits schiefgehen. Privilegierter Zugriff muss selbst zugriffskontrolliert, zeitlich begrenzt und pro Nutzung begründet sein.',
          '**Fehler 6: Einen Workspace für mehrere Mandate oder Mandanten wiederverwenden.** Cross-Kontamination von Zitaten und Kontext ist ein Vertraulichkeitsversagen, noch bevor eine externe Partei sie sieht. Ein Mandat oder Mandant pro Sammlung; separate ACLs; separate Aufbewahrung.',
          '**Fehler 7: Air-Gap kaufen und dann ein privates Smartphone zum Testen anschließen.** Der Air-Gap-Perimeter muss die Personen einschließen, die Daten über ihn hinwegtragen können. Endgeräte-Politik ist Teil der Kontrolle, nicht ein separater Punkt.',
          '**Fehler 8: Modell- und Embedder-Wahl als „einmal einrichten und vergessen" behandeln.** Jedes Upgrade ist ein Change-Management-Ereignis mit Implikationen für DSFA, Datenherkunft und Audit-Trail. Planen Sie den Upgrade-Workflow vor der ersten Produktivbereitstellung.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[DSGVO-Volltext (Offiziell)](https://gdpr-info.eu/) — Vollständiger Text der Datenschutz-Grundverordnung mit Kommentar je Artikel.',
          '[EU-AI-Act-Volltext](https://artificialintelligenceact.eu/) — Vollständiger Verordnungstext mit Risikoklassifizierungsrahmen.',
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — US-Bundesrahmenwerk, anwendbar auf KI-Risikobewertung.',
          '[BDSG-Neu (Bundesdatenschutzgesetz)](https://www.gesetze-im-internet.de/bdsg_2018/) — Deutsche Umsetzung der DSGVO mit sektorspezifischen Ergänzungen.',
          '[EDSA-Leitlinien zur DSFA](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — Leitfaden des Europäischen Datenschutzausschusses zu Anlass und Durchführung einer DSFA.',
          '[BfDI (Bundesbeauftragter für den Datenschutz)](https://www.bfdi.bund.de/) — Positionspapiere des Bundesbeauftragten zu KI-Bereitstellungen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Erfüllt der lokale Betrieb von RAG automatisch die DSGVO?',
            a: 'Nein. Lokales Hosting löst die Frage der grenzüberschreitenden Übermittlung und reduziert die Auftragsverarbeiterliste, doch die DSGVO-Grundsätze in Artikel 5 (Rechtmäßigkeit, Fairness, Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht) gelten weiterhin. Artikel 25 (Datenschutz durch Technikgestaltung und durch Voreinstellungen), Artikel 30 (Verzeichnis von Verarbeitungstätigkeiten), Artikel 32 (Sicherheit der Verarbeitung) und Artikel 35 (DSFA) gelten unabhängig davon, wo das Modell läuft. Lokales RAG ist ein starker Ausgangspunkt, keine fertige Compliance-Posture.',
          },
          {
            q: 'Was ist für die EU-AI-Act-Compliance einer lokalen RAG-Bereitstellung erforderlich?',
            a: 'Klassifizieren Sie den Anwendungsfall als begrenztes Risiko oder Hochrisiko. Die meisten Retrieval-Assistenz-Bereitstellungen sind begrenztes Risiko und erfordern Transparenzpflichten: Nutzer müssen wissen, dass sie mit einer KI interagieren, generierte Inhalte müssen erkennbar sein. Sobald das Retrieval eine automatisierte Entscheidung in einem gelisteten Bereich speist (Kredit, Beschäftigung, Bildung, öffentliche Dienste, Strafverfolgung, Migration, Justiz, Biometrie, kritische Infrastruktur), ist die Bereitstellung Hochrisiko, und die vollständigen Pflichten greifen: Risikomanagementsystem, Daten-Governance, technische Dokumentation, automatische Ereignisprotokollierung, Transparenz, menschliche Aufsicht, Genauigkeit und Robustheit, Konformitätsbewertung sowie Marktbeobachtung nach Inverkehrbringen.',
          },
          {
            q: 'Benötige ich eine DSFA für lokales RAG?',
            a: 'Eine DSFA nach Artikel 35 ist verpflichtend für Verarbeitungen, die voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der Betroffenen zur Folge haben — dazu zählen die großmaßstäbliche Verarbeitung besonderer Kategorien personenbezogener Daten (Gesundheit, Recht, biometrische, rassische, politische, religiöse, gewerkschaftliche Daten) sowie systematisches Profiling mit Rechtswirkung. Die meisten regulierten lokalen RAG-Anwendungen (Recht, Medizin, Finanzen, HR-Untersuchungen) fallen in den Anwendungsbereich. Führen Sie die DSFA früh durch, behandeln Sie sie als Designdokument und üben Sie die Risikominderungen — insbesondere das Lösch-Runbook — vor dem Go-Live.',
          },
          {
            q: 'Kann ich eine lokale RAG-Bereitstellung über Abteilungen hinweg teilen?',
            a: 'Ja, mit Sorgfalt. Zugriffskontrolle auf Sammlungsebene, Authentifizierung pro Nutzer gegen einen einzigen Identitätsanbieter und eine klare Rechtsgrundlage für die Nutzung jeder Abteilung sind die Untergrenze. Die DSFA muss die breiteste Menge der Verarbeitungszwecke abdecken; benötigt eine Abteilung eine andere Rechtsgrundlage (z. B. HR-Untersuchungen unter berechtigtem Interesse, während klinisches Personal unter öffentlicher Aufgabe arbeitet), sind getrennte Sammlungen und getrennte Zugriffsgruppen einfacher zu verteidigen als eine einzige Sammlung mit ausgefeilten ACLs.',
          },
          {
            q: 'Wie auditiere ich, wer auf welches Dokument zugegriffen hat?',
            a: 'Protokollieren Sie jeden Retrieval mit Nutzer-ID, Zeitstempel, abgerufenen Chunk-IDs und den Dokument-IDs, aus denen sie stammen. Leiten Sie die Ereignisse an einen separaten, schreibbeschränkten Logspeicher unter anderer administrativer Kontrolle als der Anwendungsserver weiter (Funktionstrennung). Nutzen Sie append-only-Speicher mit einer Hash-Kette, sodass Manipulationen erkennbar sind. Die Aufbewahrungsdauer sollte sich am Untersuchungsfenster der Aufsichtsbehörde und etwaigen branchenspezifischen Regeln orientieren — sechs bis sieben Jahre sind in regulierten Branchen üblich.',
          },
          {
            q: 'Sind Open-Source-Embedding-Modelle DSGVO-konform einsetzbar?',
            a: 'Grundsätzlich ja, mit drei Bedingungen. Erstens: Die Gewichte werden einmal heruntergeladen und auf einen Hash fixiert, sodass nachweisbar ist, was lief. Zweitens: Die Inferenz läuft vollständig lokal ohne Telemetrie oder ausgehende Aufrufe — verifizieren Sie es per Paketmitschnitt, vertrauen Sie nicht allein der Dokumentation. Drittens: Die Model Card und die Lizenz werden auf Klauseln geprüft, die der vertraulichen geschäftlichen Nutzung widersprechen (manche Open-Weight-Lizenzen knüpfen Einschränkungen an Datentypen oder Anwendungsfälle). Die praktische Standardvorgehensweise für regulierte Bereitstellungen ist, eine kleine Anzahl geprüfter Embedder zu allowlisten und bei jedem Upgrade neu zu prüfen.',
          },
          {
            q: 'Wie steht es um die Datenherkunft für KI-generierte Ausgaben?',
            a: 'Jede generierte Antwort muss auf die Chunk-IDs verweisen, die sie hervorgebracht haben, auf den Modell-Identifikator, die Version der Prompt-Vorlage und den Zeitstempel. Die Chunks lassen sich dann zu Dokument-IDs auflösen, die wiederum zu Quelldokumenten führen. Diese Kette ermöglicht es Ihnen, die Antwort zu verifizieren, sie unter Anfechtung zu verteidigen, einen Löschantrag zu erfüllen und das Ergebnis später zu reproduzieren. Ohne sie ist „Die KI hat es gesagt" die Audit-Verteidigung — und das ist überhaupt keine Verteidigung.',
          },
          {
            q: 'Kann ich lokales RAG für vertrauliche Mandantendokumente nutzen?',
            a: 'Häufig ja, manchmal nein. Viele Außenanwaltsvereinbarungen, M&A-NDAs und Patientendatenverträge erlauben KI-gestützte Prüfung, sofern die Daten eine definierte Grenze nicht verlassen und bestimmte Kontrollen erfüllt sind. Lokales RAG erfüllt die Grenz-Anforderung bauartbedingt; die vertragsspezifische Kontrollliste (Verschlüsselung, Zugriff, Audit, Aufbewahrung, Meldung von Verletzungen) muss dennoch eingehalten werden. Wenn der Vertrag KI-Verarbeitung vollständig untersagt, hilft kein Bereitstellungsmuster — das Verbot gilt unabhängig davon, ob die KI lokal oder remote läuft.',
          },
          {
            q: 'Welches Logging ist für die Compliance erforderlich?',
            a: 'Ingest-Ereignisse (Dokument-ID, Hash, Quelle, Hochlader, Zeitstempel, Klassifizierung), Retrieval-Ereignisse (Nutzer-ID, Anfragemetadaten oder -Hash, abgerufene Chunk-IDs, Antwortreferenz, Modell-/Embedder-Identifikator), administrative Ereignisse (Modellfreigabe, Embedder-Wechsel, ACL-Änderung, Nutzer-/Gruppenänderung) und betriebliche Ereignisse (Backup, Wiederherstellung, Schlüsselrotation). Alle Ereignisse werden an einen separaten Logspeicher weitergeleitet, append-only, hash-verkettet und entsprechend Ihren Mandats- und Branchenanforderungen aufbewahrt.',
          },
          {
            q: 'Wie behandle ich Anträge auf Recht auf Vergessenwerden in RAG?',
            a: 'Mit einem dokumentierten Runbook, das die Löschung durch jede Schicht führt: Quellsystem für Dokumente, Vektorindex, zwischengespeicherte Embeddings, Aufbewahrung von Retrieval-Logs (sofern die Rechtsgrundlage die Löschung des Log-Eintrags zulässt) und alle in der Chat-Historie gespeicherten Antworten. Quelllöschung ist unkompliziert; der Vektorindex-Neuaufbau ist gut verstanden; zwischengespeicherte Embeddings und die Antwort-Historie sind die Teile, die die meisten Bereitstellungen übersehen. Üben Sie das Runbook mit synthetischen Daten, dokumentieren Sie die Übung und koppeln Sie das Runbook an Ihren Incident-Response-Prozess, sodass ein realer Antrag die geübte Sequenz auslöst und keine Improvisation.',
          },
          {
            q: 'Muss ich bei lokalem RAG die DSGVO und das BDSG beachten?',
            a: 'Ja, vollumfänglich. Auch wenn die Daten Ihr Rechenzentrum nicht verlassen, bleibt Ihre Organisation Verantwortlicher im Sinne der DSGVO (Artikel 4 Nr. 7) und unterliegt sowohl der DSGVO als auch dem BDSG-Neu. Konkret bedeutet das: Rechtsgrundlage nach Artikel 6 (oder Artikel 9 bei besonderen Kategorien), Verzeichnis von Verarbeitungstätigkeiten nach Artikel 30, technische und organisatorische Maßnahmen nach Artikel 32, DSFA nach Artikel 35 (in fast allen Fällen mit besonderen Kategorien personenbezogener Daten verpflichtend), Meldepflicht bei Datenschutzverletzungen nach Artikel 33 und Erfüllung der Betroffenenrechte aus Artikel 15–22. Der Vorteil des lokalen Betriebs liegt darin, dass keine grenzüberschreitende Übermittlung nach Artikel 44 ff. stattfindet, kein AVV mit einem Cloud-Anbieter abzuschließen ist und die Eingriffsmöglichkeiten ausländischer Behörden entfallen. BDSG-Neu ergänzt zusätzlich §26 (Beschäftigtendatenschutz) für mitarbeiterbezogene Inhalte sowie sektorspezifische Regelungen — bei Berufsgeheimnisträgern ist zusätzlich §203 StGB zu beachten, der die Offenlegung an externe Auftragsverarbeiter unter Strafe stellt.',
          },
          {
            q: 'Eignet sich lokales RAG für den deutschen Mittelstand?',
            a: 'Ja, lokales RAG ist häufig die pragmatischste Wahl für den deutschen Mittelstand. Drei Gründe: Erstens passt es zu vorhandenen On-Prem- und Hybrid-Architekturen, die viele Mittelständler ohnehin betreiben — ein zusätzlicher GPU-Server im bestehenden Rechenzentrum oder Co-Location-Standort ist ein überschaubares Investment. Zweitens entfallen die rechtlichen Folgekosten von Cloud-Lösungen: keine Standardvertragsklauseln, keine Schrems-II-Folgenabschätzung, kein AVV mit Hyperscalern, keine Auseinandersetzung mit US-Zugriffsrechten. Drittens lässt sich die Architektur an etablierte Maßstäbe anbinden — BSI-Grundschutz-Bausteine (z. B. OPS.1.2.4 Cloud-Nutzung, APP.4.4 Webanwendungen) liefern den Rahmen für die technische Akte; eine Federation gegen Microsoft Entra ID oder Keycloak fügt sich in vorhandene Identitätslandschaften; Backups laufen über bestehende Pipelines. Eine typische Mittelstands-Bereitstellung umfasst einen Server mit zwei Enterprise-GPUs, einen Open-Source-LLM, einen Open-Source-Embedder, einen On-Prem-Vektorspeicher (Qdrant, Weaviate oder pgvector), federierte Authentifizierung über das bestehende Active Directory und ein Audit-Log, das in das vorhandene SIEM einspeist. Die Investition liegt typischerweise im fünfstelligen Bereich; laufende Kosten überwiegend Strom und Wartung. Wo der Datenschutzbeauftragte die DSFA frühzeitig begleitet und der Betriebsrat zur Designzeit eingebunden wird, ist die Bereitstellung in 8–12 Wochen audit-fähig — deutlich schneller als ein vergleichbares Cloud-Setup mit gleichwertigem Kontrollniveau.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[AnythingLLM vs. PrivateGPT vs. Open WebUI: Bestes lokales RAG](/de/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — welche selbst gehosteten Plattformen welcher Compliance-Posture entsprechen, mit Hinweisen zu Telemetrie und Lizenzierung.',
          '[Lokale KI-Agenten für Geschäftsabläufe und EU-Compliance](/de/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — angrenzendes Compliance-Thema, wenn Retrieval automatisierte Workflow-Schritte speist statt eines menschlichen Lesers.',
          '[Lokale LLM-E-Mail- und Kalender-Automatisierung](/de/power-local-llm/local-llm-email-and-calendar-automation) — angrenzende Geschäftsautomatisierungsmuster, in denen das gleiche Kontrollset gilt.',
          '[Lokales RAG für Ihre PDFs Schritt für Schritt](/de/power-local-llm/local-rag-on-your-pdfs-step-by-step) — praktische Implementierungsanleitung für die On-Prem- und Laptop-Muster.',
          '[Mit 1.000 PDFs lokal chatten](/de/power-local-llm/chat-with-1000-pdfs-locally) — operative Hinweise für größere Korpora, die an die On-Prem-Obergrenze stoßen.',
          '[Power Local LLM Hub](/de/power-local-llm) — die vollständige Bibliothek der Anleitungen für selbst gehostete LLM-Bereitstellungen.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'RAG local pour données métier : IA conforme RGPD pour documents sensibles (2026)',
    seoTitle: 'RAG local conforme RGPD pour documents sensibles (2026)',
    intro:
      "Les équipes juridiques, médicales et financières partagent le même problème : les documents les plus précieux à interroger par IA sont précisément ceux qui ne peuvent pas quitter l'entreprise. Voici l'architecture, le jeu de contrôles et la matrice de décision pour un RAG auto-hébergé conforme au RGPD, à l'AI Act, à HIPAA et au cadre Datenschutz allemand — rédigé pour les responsables conformité qui veulent transmettre un seul document à leur équipe IT.",
    metaDescription:
      'RAG local conforme RGPD pour les équipes juridiques, médicales et financières. Architecture, audit, PIA et 3 modèles de déploiement comparés.',
    twitterDescription:
      "RAG local répondant au RGPD et à l'AI Act. Air-gap, journaux d'audit, traçabilité, périmètre PIA et 3 modèles de déploiement — l'article que les responsables conformité envoient à l'IT.",
    audience:
      "Responsables conformité, DPO, juristes et architectes IT en Europe et dans la francophonie chargés de bâtir un RAG auto-hébergé sur des documents confidentiels — contrats, dossiers patients, archives d'audit, salles de données M&A, correspondance avec les autorités.",
    readTime: '15 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'RAG local conforme RGPD',
    targetKeywords: [
      'rag conforme rgpd',
      'rag local données métier',
      'eu ai act rag',
      'rag privé documents confidentiels',
      'déploiement rag on-premise',
      'datenschutz rag',
      'pia rag local',
    ],
    leadAnswerBlock:
      "**Un déploiement RAG auto-hébergé répond au RGPD et à l'AI Act seulement si six contrôles sont en place dès le premier jour : air-gap ou egress strictement contrôlé, authentification par utilisateur avec accès basé sur les rôles, journaux d'audit immuables couvrant l'ingestion et la recherche, chiffrement de bout en bout au repos et en transit, traçabilité déterministe du chunk vers la source, et un parcours de suppression écrit qui se propage du stockage source jusqu'à l'index vectoriel et aux embeddings en cache. Le modèle de déploiement (laptop mono-utilisateur, serveur on-prem, cloud privé EU) détermine quels contrôles sont triviaux et lesquels demandent du travail — pas si les contrôles sont requis.**",
    quickAnswerTop: {
      en: {
        question:
          'Le RAG local est-il conforme RGPD par défaut, et quel modèle de déploiement choisir pour des équipes régulées ?',
        answer:
          "Le RAG local n'est pas conforme RGPD par défaut. Faire tourner un modèle on-premise résout le transfert hors UE et réduit la liste des sous-traitants, mais les articles 5, 25, 30, 32 et 35 du RGPD continuent de s'appliquer : base légale, minimisation, audit, sécurité du traitement et PIA pour tout système traitant des données sensibles à grande échelle. Choisissez un laptop mono-utilisateur pour les professionnels solos et les revues ponctuelles ; un serveur on-prem pour des bases documentaires départementales jusqu'à quelques milliers de documents et 5–50 utilisateurs ; un cloud privé EU (région souveraine, clés gérées par le client, EU uniquement) pour des déploiements multi-entités où la résilience compte plus qu'un air-gap intégral. Quel que soit le choix, les six contrôles sont les mêmes — seul le coût d'implémentation change.",
        bullets: [
          "L'hébergement local résout le transfert transfrontalier (Art. 44–49) et réduit la liste des sous-traitants — il ne résout ni la base légale, ni la PIA, ni les droits des personnes.",
          'Laptop mono-utilisateur — idéal pour avocat, médecin ou auditeur solo. Difficile à auditer à grande échelle ; air-gap le plus simple.',
          'Serveur on-prem — idéal pour 5–50 utilisateurs. Vrais journaux, RBAC, sauvegardes, reprise. Effort IT le plus élevé.',
          'Cloud privé EU — idéal pour les multi-entités résilients. Région souveraine + clés gérées par le client + clause anti-entraînement obligatoires.',
          'Une PIA est obligatoire (Art. 35) dès que des données sensibles sont traitées à grande échelle, quel que soit le modèle de déploiement.',
          "Le droit à l'effacement doit se propager aux documents source, à l'index vectoriel et aux embeddings en cache — concevez le parcours avant la mise en production.",
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Comparaison des modèles de déploiement', anchor: '#deployment-comparison' },
      { label: 'Choisir un modèle de déploiement', anchor: '#which-deployment' },
      { label: 'Pourquoi un RAG local pour les données sensibles', anchor: '#why-local-rag' },
      { label: 'Les six contrôles indispensables', anchor: '#required-controls' },
      { label: "Air-gap et contrôle de l'egress", anchor: '#air-gap' },
      { label: "Journaux d'audit qui tiennent face à un contrôle", anchor: '#audit-logging' },
      { label: 'Traçabilité du chunk à la source', anchor: '#data-lineage' },
      { label: "Chiffrement et contrôle d'accès", anchor: '#encryption-access' },
      { label: 'Modèle laptop mono-utilisateur', anchor: '#laptop-pattern' },
      { label: 'Modèle serveur on-prem', anchor: '#on-prem-pattern' },
      { label: 'Bases vectorielles', anchor: '#vector-db-comparison' },
      { label: 'Modèle cloud privé EU', anchor: '#private-cloud-pattern' },
      { label: 'Classification AI Act', anchor: '#eu-ai-act' },
      { label: 'Exigences PIA (Art. 35)', anchor: '#dpia-requirements' },
      { label: 'Notes juridiction allemande (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Checklist conformité avant mise en production', anchor: '#compliance-checklist' },
      { label: 'Erreurs fréquentes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "**L'hébergement local est nécessaire mais insuffisant.** Faire tourner le modèle et le stockage vectoriel sur votre matériel résout le transfert hors UE et réduit la liste des sous-traitants, mais les articles 5, 25, 30, 32 et 35 du RGPD restent applicables. Base légale, minimisation, audit, sécurité du traitement et PIA ne deviennent pas optionnels parce que les données restent dans vos murs.",
          "**Six contrôles sont non négociables**, quel que soit le modèle : air-gap ou egress strict, authentification par utilisateur avec accès par rôle, journaux d'audit immuables, chiffrement au repos et en transit, traçabilité déterministe du chunk vers le document source, et parcours de suppression écrit incluant l'index vectoriel et tout embedding en cache.",
          '**Trois modèles de déploiement couvrent la plupart des cas régulés.** Laptop mono-utilisateur pour les solos et revues ponctuelles ; serveur on-prem pour des bases départementales de 5–50 utilisateurs ; cloud privé EU (région souveraine, clés gérées par le client) pour des déploiements multi-entités où la résilience prime sur un air-gap intégral.',
          "**L'AI Act classe la plupart des RAG locaux comme à risque limité** — mais dès que la recherche alimente une décision automatisée (scoring crédit, sélection d'emploi, éligibilité aux prestations), le déploiement bascule en haut risque et déclenche l'évaluation de conformité, la surveillance post-marché et la supervision humaine.",
          "**Une PIA est obligatoire au titre de l'article 35** pour tout RAG ingérant des données sensibles (santé, juridique, biométrique, politique, syndicale) à grande échelle, ou pour tout système produisant des décisions automatisées à effet juridique. Sauter la PIA, c'est sauter sa défense en cas d'audit.",
          "**Le droit à l'effacement est le test que la plupart des déploiements échouent.** Les documents source sont faciles. L'index vectoriel se reconstruit. Les embeddings en cache, les journaux de recherche et les réponses stockées dans l'historique de chat sont les parties oubliées — et celles que l'autorité de contrôle interrogera.",
          "**Les modèles d'embeddings open source sont conformes RGPD en principe**, à trois conditions : (a) les poids sont téléchargés une fois et figés sur un hash, (b) l'inférence tourne entièrement en local sans télémétrie, (c) la fiche modèle et la licence sont relues pour toute clause incompatible avec un usage métier confidentiel.",
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          "**6 contrôles obligatoires** pour tout RAG régulé : air-gap, RBAC, journaux d'audit, chiffrement, traçabilité, parcours de suppression.",
          '**3 modèles de déploiement :** laptop mono-utilisateur (solos), serveur on-prem (5–50 utilisateurs), cloud privé EU (multi-entités).',
          '**Une PIA est obligatoire** (Art. 35) dès que des données sensibles (santé, juridique, biométrique) sont traitées à grande échelle.',
          '**AI Act :** la plupart des RAG locaux = risque limité ; haut risque dès que la recherche alimente des décisions automatisées (crédit, emploi, prestations).',
          "**Le droit à l'effacement** doit se propager aux documents source, index vectoriels, embeddings en cache ET historique des réponses.",
          "**La CNIL recommande** l'IA locale pour le traitement des données professionnelles sensibles (financières, médicales, juridiques) lorsque l'enjeu de souveraineté ou de secret professionnel le justifie.",
          "**Les modèles d'embeddings open source** sont conformes RGPD seulement si les poids sont figés, l'inférence est entièrement locale et la licence est relue.",
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Comparaison des modèles de déploiement',
        content:
          "Chaque modèle peut être rendu conforme RGPD ; ce qui change, c'est le coût des contrôles et les modes de défaillance. Choisissez le modèle le plus simple qui correspond au nombre d'utilisateurs, à la sensibilité des documents et à l'exigence de résilience.",
        columns: ['Contrôle', 'Laptop mono-utilisateur', 'Serveur on-prem', 'Cloud privé EU'],
        rows: [
          {
            'Contrôle': 'Air-gap (aucun trafic sortant)',
            'Laptop mono-utilisateur': 'Trivial — désactiver le réseau',
            'Serveur on-prem': 'Faisable — VLAN + pare-feu',
            'Cloud privé EU': "Difficile — uniquement allowlist d'egress",
          },
          {
            'Contrôle': "Journal d'audit (qui, quoi, quand)",
            'Laptop mono-utilisateur': 'Manuel — niveau OS uniquement',
            'Serveur on-prem': 'Solide — pipeline de logs central',
            'Cloud privé EU': 'Solide — logging cloud-natif',
          },
          {
            'Contrôle': 'Traçabilité (chunk → source)',
            'Laptop mono-utilisateur': 'Fichiers locaux uniquement',
            'Serveur on-prem': 'Pipeline complètement traçable',
            'Cloud privé EU': 'Complète — sur plusieurs régions',
          },
          {
            'Contrôle': 'Résidence des données UE',
            'Laptop mono-utilisateur': 'Inhérente — emplacement physique',
            'Serveur on-prem': 'Inhérente — emplacement physique',
            'Cloud privé EU': 'Configurée — région souveraine requise',
          },
          {
            'Contrôle': 'RBAC par utilisateur',
            'Laptop mono-utilisateur': 'Mono-utilisateur — N/A',
            'Serveur on-prem': "Fournisseur d'identité + groupes",
            'Cloud privé EU': 'IAM + SSO + ACL par collection',
          },
          {
            'Contrôle': "Sauvegarde et plan de reprise d'activité",
            'Laptop mono-utilisateur': 'Disque externe chiffré',
            'Serveur on-prem': 'Bande ou sauvegarde hors site',
            'Cloud privé EU': 'Réplication multi-AZ',
          },
          {
            'Contrôle': 'Coût initial',
            'Laptop mono-utilisateur': 'Matériel uniquement — faible',
            'Serveur on-prem': 'Serveur + intégration — moyen',
            'Cloud privé EU': 'Abonnement + setup — moyen',
          },
          {
            'Contrôle': 'Coût récurrent',
            'Laptop mono-utilisateur': 'Aucun — temps sysadmin',
            'Serveur on-prem': 'IT ops + énergie + climatisation',
            'Cloud privé EU': 'Mensualité récurrente',
          },
          {
            'Contrôle': 'Idéal pour',
            'Laptop mono-utilisateur': 'Solos, revues ponctuelles',
            'Serveur on-prem': '5–50 utilisateurs, KB départementales',
            'Cloud privé EU': 'Multi-entités, déploiements résilients',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Choisir un modèle de déploiement',
        content:
          "**Le bon choix dépend du nombre d'utilisateurs, de la sensibilité des documents, de la pression d'audit et de la capacité IT interne.** Ce raccourci de décision couvre la plupart des cas réels.",
        columns: ['Votre situation', 'Recommandation'],
        rows: [
          {
            'Votre situation': 'Avocat, médecin ou auditeur solo traitant un dossier à la fois',
            'Recommandation': 'Laptop mono-utilisateur',
          },
          {
            'Votre situation': 'Salle de données M&A avec 3–5 reviewers nommés et date de fin fixe',
            'Recommandation': 'Laptop mono-utilisateur ou on-prem (selon le volume documentaire)',
          },
          {
            'Votre situation': 'Équipe conformité de 10–30 personnes partageant des archives de correspondance régulateur',
            'Recommandation': 'Serveur on-prem',
          },
          {
            'Votre situation': 'Service hospitalier construisant un assistant de protocoles cliniques pour 50 personnes',
            'Recommandation': 'Serveur on-prem',
          },
          {
            'Votre situation': 'Groupe multi-entités ayant besoin d\'un seul RAG sur plusieurs filiales européennes',
            'Recommandation': 'Cloud privé EU (région souveraine + clés gérées par le client)',
          },
          {
            'Votre situation': 'Assureur avec exigence de disponibilité 24/7 et plan de reprise',
            'Recommandation': 'Cloud privé EU',
          },
          {
            'Votre situation': 'Administration avec données classifiées ou restreintes',
            'Recommandation': 'On-prem air-gappé uniquement — le cloud est exclu',
          },
          {
            'Votre situation': "Défense d'audit régulateur due dans moins de 6 semaines",
            'Recommandation': "Serveur on-prem (le plus rapide pour démontrer la maîtrise)",
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Pourquoi un RAG local pour les données sensibles',
        content:
          "**L'argument du RAG local face au LLM cloud-as-a-service n'est pas une posture — c'est la forme de l'analyse de risque RGPD.** Le RAG cloud convient à de nombreux usages ; pour des données métier sensibles, il ajoute cinq risques que le RAG local élimine par construction.",
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "Le RAG local garde vos documents sensibles sur votre matériel tout en offrant à votre équipe une recherche assistée par IA — aucune donnée ne quitte vos locaux, aucun sous-traitant tiers ne les touche, et la question du transfert transfrontalier ne se pose pas.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez que votre équipe juridique puisse interroger 10 000 dossiers en langage naturel — mais que les documents ne quittent jamais votre salle serveur. C'est exactement le RAG local : l'IA lit vos documents sur votre matériel, répond à vos questions sur votre matériel, et rien n'est envoyé nulle part. L'avantage conformité n'est pas une fonctionnalité — c'est l'architecture.",
          },
        ],
        items: [
          "**Transfert transfrontalier (Art. 44–49).** Envoyer des données personnelles à un sous-traitant hors UE exige des Clauses Contractuelles Types, une analyse d'impact transfert et une réponse crédible sur les pouvoirs d'injonction de la juridiction réceptrice. Le RAG local ne transfère pas — la question disparaît.",
          "**Prolifération des sous-traitants (Art. 28).** Les fournisseurs LLM cloud reposent typiquement sur de l'infrastructure hyperscaler, des services de modération et des outils d'observabilité. Chacun est un sous-traitant à lister, contractualiser et auditer. Le RAG local n'a aucun sous-traitant par défaut.",
          "**Fuite vers les données d'entraînement.** De nombreuses CGU LLM cloud se réservent le droit d'utiliser les prompts clients pour améliorer le modèle, sauf à payer un palier entreprise et vérifier la clause anti-entraînement. Le RAG local utilise des modèles dont vous contrôlez les poids ; rien ne quitte l'hôte.",
          "**Clauses de confidentialité dans les contrats clients.** Conventions d'avocat externe, NDA M&A et accords sur données patient interdisent souvent la transmission du matériel protégé à des sous-traitants tiers. Le RAG local contourne entièrement la clause.",
          "**Exposition aux injonctions et procédures judiciaires.** Les documents stockés chez un fournisseur cloud peuvent être réquisitionnés par une procédure visant le fournisseur, parfois sans notification rapide au responsable de traitement. Les documents qui ne quittent jamais vos locaux ne peuvent être réquisitionnés que chez vous.",
        ],
        callouts: [
          {
            type: 'note',
            text: "Le RAG local n'est pas la bonne réponse pour toutes les charges de travail. Recherche d'informations publiques, génération de brouillons marketing, assistance code sur dépôts open source — tout cela fonctionne en général mieux avec des LLM cloud, parce que l'exposition RGPD est faible et l'écart de qualité compte. L'argument de cet article concerne spécifiquement les données métier confidentielles : juridique, médical, financier, RH, correspondance régulateur et secrets d'affaires.",
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'Les six contrôles indispensables',
        content:
          '**Ces six contrôles sont le socle.** Tout déploiement régulé en a besoin ; le modèle de déploiement ne change que la façon de les implémenter. Sauter un seul de ces contrôles est la cause la plus fréquente des audits qui se passent mal.',
        numberedItems: [
          {
            title: "Air-gap ou contrôle strict de l'egress",
            whyItMatters:
              "Confirme que les documents et les embeddings ne peuvent pas fuir par des appels sortants — SDK de télémétrie, sondes de mises à jour, crash reporters, callbacks de modération, CDN tiers pour les polices. Désactivez complètement l'accès réseau (vrai air-gap) ou exécutez une allowlist d'egress qui n'autorise que des serveurs de mise à jour signés.",
          },
          {
            title: 'Authentification par utilisateur avec accès par rôle',
            whyItMatters:
              "Vous devez pouvoir répondre à \"qui a accédé à quel document\" avant qu'un régulateur ne le demande. SSO contre un fournisseur d'identité, accès par groupe aux collections et ACL par document quand le dossier le justifie. Les comptes partagés ne sont pas un contrôle — c'est un échec d'audit en sursis.",
          },
          {
            title: "Journaux d'audit immuables couvrant ingestion et recherche",
            whyItMatters:
              "Pour chaque document : qui l'a chargé, quand, chemin source, hash. Pour chaque requête : qui a demandé, ce qui a été demandé (si la base légale le permet), quels chunks ont été retournés, depuis quels document IDs, quelle réponse. Les journaux doivent être à preuve d'altération — append-only, signés, avec une rétention couvrant la fenêtre d'enquête de l'autorité de contrôle. Pour la traçabilité au niveau prompt — versionnement, changelog, rollback — voir [workflows de version control des prompts](/fr/prompt-engineering/prompt-version-control-workflows).",
          },
          {
            title: 'Chiffrement au repos et en transit',
            whyItMatters:
              "Chiffrement disque sur l'hôte, TLS pour tout appel service-à-service interne, gestion de clés qui survit au vol d'un laptop ou à la compromission d'un compte admin. Clés gérées par le client pour les déploiements cloud. Sans cela, un vol d'appareil devient une violation notifiable au titre de l'article 33.",
          },
          {
            title: 'Traçabilité déterministe du chunk vers la source',
            whyItMatters:
              "Chaque chunk retourné doit remonter à son document source, sa page, sa section et sa version. C'est ce qui permet (a) de vérifier la réponse, (b) d'honorer une demande de suppression, (c) de défendre le système en justice quand un résumé généré est contesté. \"On ne peut pas reproduire quel chunk a produit quelle réponse\" n'est pas une réponse acceptable face à une autorité de contrôle.",
          },
          {
            title: "Parcours de suppression écrit incluant l'index vectoriel et les embeddings en cache",
            whyItMatters:
              "Une demande de droit à l'effacement doit se propager du stockage source, à travers l'index vectoriel, jusqu'aux embeddings en cache et à la rétention des journaux de recherche. La plupart des déploiements gèrent proprement la suppression source et oublient le reste. Documentez le runbook de suppression avant la mise en production ; répétez-le sur des données synthétiques.",
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: "Air-gap et contrôle de l'egress",
        content:
          "**Air-gap signifie que l'hôte n'a aucun chemin réseau sortant ; le contrôle d'egress signifie qu'il en a un strictement allowlisté.** Les deux sont acceptables ; choisissez le modèle le plus fort que votre exploitation peut soutenir.",
        items: [
          "**Vrai air-gap** — pas de DHCP, pas de résolution DNS vers des destinations publiques, pas de TCP sortant. Les mises à jour passent par des supports signés qu'un administrateur connecte physiquement. C'est le bon modèle pour les travaux classifiés, certains réseaux hospitaliers et tout déploiement dont le modèle de menace inclut une dépendance malveillante.",
          "**Allowlist d'egress** — le réseau sortant n'est autorisé qu'à une courte liste de destinations nommées (serveurs de mise à jour de modèle, fournisseur d'identité, forwarders de logs vers des collecteurs internes). Tout autre trafic est rejeté au pare-feu. C'est le défaut pratique pour la plupart des déploiements départementaux régulés.",
          '**Ce qu\'il faut vérifier sur la plateforme** : zéro télémétrie par défaut, aucun appel sortant pendant l\'inférence, aucun CDN de polices dans l\'UI, aucun crash reporter qui expédie des payloads. Vérifiez avec une capture de paquets ou un outil comme Little Snitch sur le banc d\'essai avant promotion en production.',
          "**Gouvernance des mises à jour** — poids du modèle, poids de l'embedder, code applicatif et patches OS passent tous par une fenêtre de mise à jour contrôlée. L'administrateur qui promeut une mise à jour signe par écrit ; le changement est journalisé.",
          '**Cassure d\'air-gap classique :** un SDK d\'analytique fourni avec un composant UI tiers, une référence CDN de polices dans le chrome de l\'application, ou une sonde "vérifier les mises à jour" qui s\'exécute au démarrage. C\'est pourquoi l\'étape de vérification compte — ne supposez rien à propos des défauts.',
        ],
        callouts: [
          {
            type: 'tip',
            text: "Lancez une capture de paquets de 24 heures sur l'hôte avec l'application ouverte et au repos. Tout ce qui sort sans être sur l'allowlist est un constat. Recommencez à chaque mise à jour applicative — les release notes sous-estiment systématiquement les nouveaux appels sortants.",
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: "Journaux d'audit qui tiennent face à un contrôle",
        content:
          "**Le journal d'audit est l'artefact qu'une autorité de contrôle lira en premier.** Il doit répondre à deux questions pour chaque recherche : qui a demandé, et qu'a livré le système. Sans cela, vous argumentez avec des mots ; avec un journal correct, vous montrez des reçus.",
        items: [
          "**Événements d'ingestion** : document ID, hash (SHA-256), nom de fichier, chemin source, chargé par, horodatage, tag de classification, taille, nombre de pages, groupe propriétaire, classe de rétention. Classifiez chaque document à l'ingestion — la classification rétroactive de gros corpus est laborieuse et rarement complète.",
          "**Événements de recherche** : query ID, user ID, horodatage, chunk IDs retournés (et les document IDs d'origine), scores de retrieval, hash de la réponse finale, identifiant du modèle, identifiant de l'embedder, top-K utilisé. Le texte de la requête lui-même est sensible — ne le journalisez que si la finalité du traitement le couvre ; sinon, journalisez le hash et l'horodatage.",
          "**Événements administratifs** : promotion de modèle, changement d'embedder, reconstruction d'index, modifications utilisateurs/groupes, modifications d'ACL, modifications de politique d'accès. Chaque événement signé par l'administrateur responsable.",
          "**Preuve d'altération** : journal append-only, chaîne de hashs (chaque entrée référence le hash de la précédente), clé de signature out-of-band, rapprochements réguliers avec une copie distincte conservée par un autre administrateur ou sur un support write-once.",
          "**Rétention** : alignée sur la fenêtre d'enquête de l'autorité — au minimum la durée de rétention du dossier ; communément six à sept ans dans les industries régulées ; plus longue selon les règles sectorielles.",
          "**Pipeline** : l'application émet des événements structurés ; un forwarder les expédie vers un store de logs séparé et restreint en écriture. Le serveur applicatif ne doit jamais avoir le droit de supprimer ou réécrire des entrées de log — c'est la séparation des fonctions qui rend le journal crédible.",
        ],
        callouts: [
          {
            type: 'note',
            text: "Journaliser le texte de la requête introduit sa propre question RGPD — une requête peut elle-même contenir des données personnelles (par exemple « résumer l'historique médical du patient X »). Décidez à la conception si la finalité du traitement couvre la journalisation des requêtes ; sinon, journalisez uniquement les métadonnées requises pour l'audit et la diagnostic opérationnel.",
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Traçabilité du chunk à la source',
        content:
          "**La traçabilité est l'épine dorsale de tous les autres contrôles.** Sans elle, les demandes de suppression échouent, la vérification des réponses devient impossible et la piste d'audit s'effondre. Construisez la traçabilité dès la première ingestion, pas après.",
        items: [
          "**Traçabilité au niveau document** : chaque document a un ID interne stable, un hash de contenu, un horodatage d'ingestion, un propriétaire, une classification et une classe de rétention. Le fichier original reste sur le store source ; le système RAG détient une référence, pas le maître.",
          "**Traçabilité au niveau chunk** : chaque chunk référence son document parent, sa page (PDF), sa section (documents structurés), son offset caractère, sa longueur et la version de la stratégie de chunking. Quand vous re-chunkez (vous le ferez), les anciens chunks sont marqués tombstoned, pas supprimés in place — pour que les anciens journaux de recherche restent résolvables.",
          "**Traçabilité au niveau embedding** : chaque vecteur d'embedding référence son chunk ID et l'identifiant de l'embedder. Quand vous changez d'embedder, les anciens vecteurs sont conservés jusqu'à ce que les nouveaux soient validés et que tout dossier les ayant référencés soit clos ; alors seulement ils sont purgés.",
          "**Traçabilité au niveau réponse** : chaque réponse générée référence les chunk IDs qui l'ont produite, l'identifiant du modèle, la version du template de prompt et l'horodatage. Quand un utilisateur demande « d'où vient cette réponse », le système résout chunk → document → page en un clic.",
          "**Réindexation sans casser la traçabilité** : les reconstructions préservent les document IDs et incrémentent les versions de la stratégie de chunking. Les anciens chunk IDs restent résolvables dans les journaux de recherche même après que l'index live a changé.",
        ],
        callouts: [
          {
            type: 'tip',
            text: "Testez la chaîne de traçabilité chaque trimestre. Choisissez au hasard une recherche dans le journal d'audit et remontez : chunk ID → document ID → fichier original sur le store source → classe de rétention. Si une étape est cassée, corrigez le schéma avant la prochaine inspection — pas pendant.",
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: "Chiffrement et contrôle d'accès",
        content:
          "**Chiffrement au repos, chiffrement en transit et contrôle d'accès qui s'aligne sur votre fournisseur d'identité existant.** Ces contrôles sont bien compris ; le mode d'échec consiste à oublier l'une des trois couches, pas à mal implémenter celle choisie.",
        items: [
          "**Chiffrement au repos** — chiffrement disque complet sur l'hôte (LUKS sous Linux, BitLocker sous Windows, FileVault sous macOS pour les laptops). Sur les serveurs, chiffrez aussi les partitions du store vectoriel et de la zone de staging d'ingestion. Clés gérées par le client pour tout déploiement cloud, avec rotation selon votre politique.",
          '**Chiffrement en transit** — TLS pour chaque saut service-à-service, même sur localhost. Politique de chiffrement alignée sur votre baseline sectorielle. Mutual TLS quand le modèle de menace le justifie — typiquement serveur-à-serveur en cloud.',
          "**Authentification** — SSO contre votre fournisseur d'identité existant (OIDC, SAML). Pas de comptes locaux en production. MFA appliqué pour tout utilisateur ayant un accès administrateur ou à des collections sensibles.",
          "**Autorisation** — accès par groupe au niveau collection ; ACL au niveau document quand le dossier le justifie (salles M&A, enquêtes RH). Le pipeline de retrieval doit appliquer les ACL au moment de la requête — pas seulement l'UI. Un utilisateur qui ne doit pas voir un document ne doit pas non plus recevoir ses chunks.",
          "**Accès administratif** — gestion des accès privilégiés pour tout compte capable de lire ou reconstruire des index, voir les journaux d'audit ou changer les ACL. Élévation just-in-time avec justification journalisée plutôt que droits admin permanents.",
          "**Sécurité des endpoints** — appareils gérés pour les déploiements laptop (enrôlés MDM, chiffrés, verrouillage écran imposé). Un laptop solo avec le store documentaire déchiffré laissé sans surveillance dans un café est la violation RGPD que vous ne voulez pas avoir à signaler.",
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Modèle laptop mono-utilisateur',
        content:
          "**Le laptop mono-utilisateur est le modèle le plus facile à air-gapper et le plus difficile à mettre à l'échelle.** Adapté pour les solos et les revues ponctuelles ; inadapté à tout ce qui doit survivre à un seul utilisateur ou à son départ.",
        items: [
          '**Matériel** — un laptop classe workstation avec chiffrement disque complet, GPU dédié (ou machine récente à mémoire unifiée) et au moins 32 Go de RAM. Le modèle et l\'embedder doivent tenir en mémoire avec le cache du store vectoriel. Pour les besoins matériels et la sélection par VRAM, voir le [guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide-2026).',
          "**Logiciel** — application RAG desktop autonome qui tourne en local ; LLM open source dont les poids sont téléchargés une fois et figés sur un hash ; embedder open source ; store vectoriel local sur le disque chiffré. Pour une comparaison de modèles open source adaptés au RAG local, voir [meilleurs modèles open source pour Ollama](/fr/local-llms/top-open-source-models-ollama).",
          "**Posture réseau** — air-gappé pendant le travail ; reconnecté uniquement pour des mises à jour signées explicites. Configurez le pare-feu OS pour rejeter par défaut toutes les connexions sortantes et créez des exceptions explicites pour le workflow de mise à jour.",
          '**Manipulation des documents** — documents source sur le disque chiffré ; arborescence par dossier dédié à chaque dossier ; sauvegardes hebdomadaires chiffrées sur disque externe stocké dans un autre lieu.',
          "**Posture d'audit** — le journal d'audit OS (login, accès fichiers, événements périphériques) est la base. Les événements applicatifs sont plus simples sur on-prem ; pour le laptop, traitez le log OS comme l'enregistrement primaire et complétez avec des notes manuelles dossier par dossier.",
          "**Limites** — un laptop mono-utilisateur n'est pas une plateforme multi-utilisateurs. Partager le laptop, partager les comptes ou copier le store documentaire sur la machine d'un collègue casse la posture d'audit et l'analyse de base légale.",
        ],
        callouts: [
          {
            type: 'tip',
            text: "Pour les solos sur dossiers confidentiels, le modèle laptop mono-utilisateur est réellement la meilleure posture de confidentialité disponible — meilleure qu'un cloud et plus solide que beaucoup de déploiements on-prem. Le compromis est opérationnel : quand le laptop tombe, le dossier hérite du temps de récupération de votre discipline de sauvegarde.",
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'Modèle serveur on-prem',
        content:
          '**Le serveur on-prem est le modèle de bête de somme du RAG départemental régulé.** Il monte à 5–50 utilisateurs et quelques milliers de documents, supporte un audit logging correct et reste dans votre périmètre physique. Le prix : un vrai travail de production IT.',
        items: [
          "**Matériel** — un serveur avec une à deux GPU entreprise (les GPU workstation sont acceptables pour des corpus plus petits), disques redondants, mémoire ECC et onduleur. Prévoyez 2 à 4× le stockage de votre corpus brut pour couvrir vecteurs, index, journaux et sauvegardes.",
          '**Réseau** — VLAN dédié derrière le pare-feu d\'entreprise ; allowlist d\'egress ou air-gap complet selon le modèle de menace. Accès interne uniquement via le réseau d\'entreprise, aucun ingress public.',
          "**Stack logicielle** — plateforme RAG auto-hébergée (image serveur autonome ou déploiement conteneurisé), LLM open source en modèle de chat, embedder open source et store vectoriel adapté à la taille du corpus. Le serveur applicatif, le store vectoriel et le forwarder de logs tournent en processus séparés avec des comptes de service séparés.",
          "**Identité** — fédéré contre le fournisseur d'identité d'entreprise ; appartenance aux groupes pilote l'accès aux collections. Les collections sensibles sont protégées par des workflows d'approbation supplémentaires.",
          "**Sauvegarde et reprise** — sauvegardes incrémentales nocturnes du store documentaire et de l'index vectoriel ; sauvegardes complètes hebdomadaires ; copie hors site conservée par l'IT. Runbook de restauration documenté testé au moins annuellement.",
          "**Exploitation** — fenêtre de patch selon politique de change management ; revues d'accès trimestrielles ; runbook de suppression rodé pour les demandes de droit à l'effacement ; chemin d'upgrade documenté pour modèles et embedders qui préserve la traçabilité.",
          '**Capacité** — quelques milliers de documents et 5–50 utilisateurs concurrents tiennent confortablement sur un serveur GPU mid-range. Au-delà, prévoyez un hôte plus costaud ou le passage au modèle cloud privé.',
        ],
        callouts: [
          {
            type: 'note',
            text: "Le RAG on-prem est le modèle qui échoue le plus souvent pour des raisons non techniques : une sauvegarde jamais restaurée, un compte admin partagé entre plusieurs IT, un onduleur que personne n'a testé, un forwarder de logs qui jette silencieusement des événements depuis deux mois. Les contrôles techniques sont plus faciles que l'hygiène opérationnelle.",
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Bases vectorielles pour RAG on-prem',
        content:
          "**Le choix du store vectoriel décide rarement de la conformité — mais il façonne le coût opérationnel, le plafond de scaling et la propreté du runbook de suppression.** La plupart des déploiements régulés choisissent l'une de ces six options.",
        columns: ['Base vectorielle', 'Type', 'Auto-hébergement EU', 'Idéal pour'],
        rows: [
          {
            'Base vectorielle': '**Chroma**',
            'Type': 'Open source, léger',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'Laptop + petit on-prem',
          },
          {
            'Base vectorielle': '**Qdrant**',
            'Type': 'Open source, performant',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'Serveur on-prem, filtrage intensif',
          },
          {
            'Base vectorielle': '**Weaviate**',
            'Type': 'Open source, complet',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'On-prem + recherche hybride',
          },
          {
            'Base vectorielle': '**Milvus**',
            'Type': 'Open source, entreprise',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'On-prem à grande échelle',
          },
          {
            'Base vectorielle': '**pgvector**',
            'Type': 'Extension PostgreSQL',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'Équipes déjà sous Postgres',
          },
          {
            'Base vectorielle': '**Pinecone**',
            'Type': 'SaaS managé',
            'Auto-hébergement EU': '⚠️ Hébergé US',
            'Idéal pour': 'Cloud privé EU uniquement (avec réserves)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Modèle cloud privé EU',
        content:
          "**Le modèle cloud privé EU utilise un fournisseur cloud à région souveraine, clés gérées par le client, résidence EU et clause contractuelle anti-entraînement IA sur les données client.** C'est la bonne réponse pour les déploiements multi-entités, les exigences de résilience multi-régions et les équipes sans capacité opérationnelle pour un vrai on-prem.",
        items: [
          "**Sélection du fournisseur** — l'offre souveraine EU d'un hyperscaler ou un fournisseur cloud européen. Le DPA doit lister chaque sous-traitant ; les mécanismes de transfert doivent être adressés si un sous-traitant est hors EEE. Une analyse d'impact transfert type Schrems II reste au dossier même si le sous-traitant immédiat est EU.",
          "**Région** — EU uniquement, avec garanties explicites de résidence. Réplication cross-region uniquement vers d'autres régions EU. Pas de région US comme failover, même temporairement, même pour les sauvegardes.",
          "**Chiffrement** — clés gérées par le client avec rotation ; bring-your-own-key où le fournisseur le supporte ; les événements d'accès aux clés sont journalisés séparément des logs opérationnels du fournisseur.",
          "**Réseau** — VPC privé sans ingress public ; accès uniquement via connectivité privée (lien dédié ou VPN) depuis votre réseau d'entreprise ; allowlist d'egress pour toute dépendance sortante.",
          "**Identité** — fédéré contre votre IdP d'entreprise ; IAM cloud-natif lié aux identités utilisateur, pas à des comptes de service partagés ; ACL par collection appliquées dans le pipeline de retrieval.",
          "**Logging** — log d'audit cloud-natif injecté dans votre SIEM existant ; ingestion séparée pour les événements d'audit applicatifs ; rétention à preuve d'altération qui satisfait les attentes du superviseur.",
          "**Contrats** — le DPA doit être conforme à l'article 28, lister les sous-traitants, adresser les CCT si nécessaire et inclure une clause anti-entraînement explicite couvrant les poids LLM et tout service annexe (recherche, télémétrie, support).",
        ],
        callouts: [
          {
            type: 'tip',
            text: "Le modèle cloud privé EU paraît plus permissif que l'on-prem parce qu'il implique un sous-traitant tiers — mais avec région souveraine, clés gérées par le client, clause anti-entraînement et contrôle d'egress sérieux, il égale ou bat l'on-prem en disponibilité et en posture d'audit. Le dossier conformité est plus épais ; le risque opérationnel est plus faible.",
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: "Classification AI Act : risque limité vs haut risque",
        content:
          "**La plupart des RAG locaux sont des systèmes IA à risque limité au titre de l'AI Act — mais dès que la recherche alimente une décision automatisée affectant une personne, la classification bascule en haut risque et les obligations se multiplient.** Classifiez avant de construire.",
        items: [
          "**Risque limité (la plupart des RAG locaux)** — le système retourne et résume des documents pour assister un humain ; l'humain décide. Les obligations sont surtout de transparence : les utilisateurs doivent savoir qu'ils interagissent avec une IA, le contenu généré doit être identifiable, pas de design manipulateur ou trompeur.",
          "**Haut risque** — la recherche alimente une décision automatisée dans les domaines listés par l'Act : scoring crédit, sélection à l'emploi, admissions éducatives, services publics essentiels, application de la loi, migration, justice, identification biométrique, infrastructures critiques. Un RAG d'aide à la décision clinique recommandant des traitements est haut risque ; un RAG qui résume des protocoles cliniques pour aider un médecin à lire plus vite ne l'est pas.",
          '**Obligations haut risque** — système de gestion des risques sur le cycle de vie, gouvernance des données (entraînement, validation, test documentés), documentation technique, journalisation automatique, transparence et information aux utilisateurs, supervision humaine, mesures de précision et de robustesse, évaluation de conformité avant mise sur le marché, surveillance post-marché.',
          "**IA à usage général** — utiliser un LLM à usage général (open source ou non) ne transfère pas les obligations haut risque au fournisseur du modèle. Le déployeur (votre organisation) porte les obligations haut risque pour le système que vous bâtissez avec ce modèle.",
          "**Pratiques interdites** — scoring social, scraping massif d'images de visages, reconnaissance d'émotions sur les lieux de travail et à l'école, certaines catégorisations biométriques en temps réel. Hors-jeu, peu importe l'aspect local du déploiement.",
          "**La documentation comme artefact d'audit** — le dossier technique requis pour les systèmes haut risque n'est pas un livrable ponctuel ; c'est un document vivant. Liez-le à votre processus de change management pour que chaque promotion de modèle, chaque changement d'embedder et chaque modification d'ACL s'y reflète.",
        ],
        callouts: [
          {
            type: 'note',
            text: "La frontière haut risque vs risque limité est tracée par l'usage, pas par la technologie. Le même store vectoriel et le même modèle peuvent être risque limité dans un déploiement assistant de recherche et haut risque dans un déploiement de tri RH. Classifiez par cas d'usage, pas par plateforme.",
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'Exigences PIA (Article 35)',
        content:
          "**Une analyse d'impact relative à la protection des données (article 35) est obligatoire pour tout traitement susceptible d'engendrer un risque élevé pour les droits et libertés des personnes.** La plupart des RAG locaux régulés entrent dans le périmètre. Traitez la PIA comme un document de conception, pas un artefact de conformité a posteriori.",
        items: [
          "**Quand obligatoire** — évaluation systématique et étendue incluant profilage à effet juridique ; traitement à grande échelle de données sensibles (santé, juridique, biométrique, raciale, politique, religieuse, syndicale) ; surveillance systématique de zones publiques. Les autorités nationales publient des listes d'opérations qui imposent toujours une PIA — vérifiez la vôtre.",
          '**Périmètre de la PIA** — finalité et base légale ; description des opérations de traitement ; nécessité et proportionnalité ; analyse de risque pour les personnes ; mesures et risque résiduel ; consultation du DPO et (si le risque résiduel reste élevé) de l\'autorité de contrôle avant le début du traitement.',
          '**Risques spécifiques au RAG** à traiter : ré-identification de personnes à partir des chunks ; génération d\'informations inexactes affectant une personne ; fuite via journaux ou sauvegardes ; complétude de la suppression sur droit à l\'effacement ; contamination cross-collection ; accès trop larges pour les power users.',
          "**Mesures à documenter** — les six contrôles ci-dessus, plus expurgation/pseudonymisation au niveau chunk quand la base légale est consentement ou intérêt légitime ; runbook de suppression avec preuve de répétition ; revues d'accès à cadence définie.",
          "**Reviewers** — le DPO valide ; l'autorité de contrôle est consultée si le risque résiduel reste élevé après mesures. La PIA signée va au dossier technique avec la documentation de conformité AI Act si le système est aussi haut risque.",
          '**Document vivant** — refaites la PIA quand le corpus s\'étend significativement, quand le modèle ou l\'embedder change, quand les frontières d\'accès changent ou comme baseline annuelle. Liez-la à votre processus de change management.',
        ],
        callouts: [
          {
            type: 'tip',
            text: "Une PIA écrite en semaine 2 d'un projet est un outil de planification. Une PIA écrite en semaine 10 est un document défensif. Le premier est nettement plus utile et fait souvent émerger des changements de design qui réduisent le risque résiduel final. Démarrez la PIA avant la décision d'achat, pas après le déploiement.",
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: "Notes pour la juridiction allemande (Datenschutz) et contexte CNIL",
        content:
          "**La pratique allemande de protection des données superpose le BDSG-Neu, des règles sectorielles, les fiches BSI-Grundschutz et la cogestion du comité d'entreprise au socle RGPD.** Un déploiement RAG conforme RGPD générique peut échouer à une revue allemande si ces points sont manqués.",
        items: [
          "**Cogestion du Betriebsrat** — au titre du §87 BetrVG, tout système surveillant la performance ou le comportement des salariés exige un accord du comité d'entreprise avant déploiement. Un RAG sur du contenu rédigé par les salariés (e-mails, documents internes) déclenche typiquement cette obligation. Impliquez le Betriebsrat dès la conception ; l'accord (Betriebsvereinbarung) entre dans le dossier de base légale.",
          '**Confidentialité sectorielle** — le §203 StGB pénalise la violation du secret professionnel (avocats, médecins, conseillers fiscaux, auditeurs). Un déploiement RAG exposant des données client/patient protégées à du personnel non astreint au secret ou à des sous-traitants externes peut être une infraction pénale, pas seulement civile. On-prem ou air-gappé est le choix le plus sûr dans ces secteurs.',
          "**Telemediengesetz et TTDSG** — la télémétrie sortante touchant des terminaux d'utilisateurs finaux est régulée non seulement par le RGPD mais aussi par le TTDSG. L'air-gap retire la question ; les déploiements à egress contrôlé doivent vérifier que tout appel sortant est consenti, nécessaire ou strictement technique.",
          "**Fiches BSI-Grundschutz** — pour les administrations et opérateurs KRITIS, le compendium BSI-Grundschutz fournit le référentiel. Même dans le mid-market, des fiches comme OPS.1.2.4 (usage cloud), OPS.2.1 (outsourcing) et APP.4.4 (applications web) sont des références utiles pour le dossier d'architecture.",
          "**Autorités de contrôle (Bund et Länder)** — le contrôle des données du secteur privé est organisé par Land. Adressez-vous au Landesbeauftragte für Datenschutz compétent quand une consultation au titre de l'article 36 est requise.",
          "**Contexte CNIL pour la francophonie** — la CNIL recommande explicitement le recours à l'IA traitée localement pour les données professionnelles sensibles (financières, médicales, juridiques) lorsque le secret professionnel ou la souveraineté justifient d'écarter un sous-traitant cloud. Un RAG local satisfait l'esprit de la position CNIL par construction.",
          "**Langue de la documentation** — les autorités allemandes acceptent la documentation en anglais, mais les artefacts utilisateur clés (mentions d'information, déclarations de transparence, accords avec le Betriebsrat) doivent être rédigés en allemand pour des raisons légales et pratiques.",
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Checklist conformité avant la mise en production',
        content:
          "**Parcourez cette liste de bout en bout avant tout déploiement en production.** Chaque entrée est un mode de défaillance réel issu d'un audit réel ; la liste est volontairement courte pour qu'elle soit effectivement utilisée.",
        items: [
          '☐ **Base légale documentée** pour chaque catégorie de données source — consentement, contrat, obligation légale, intérêt vital, mission de service public, ou intérêt légitime avec test de mise en balance au dossier.',
          '☐ **PIA validée** par le DPO, avec runbook de suppression rodé en pièce jointe.',
          '☐ **Registre de traitements (Article 30)** mis à jour pour inclure le RAG, les catégories de données, la rétention, les destinataires et les mécanismes de transfert (en général aucun pour le RAG local).',
          "☐ **Six contrôles vérifiés bout-à-bout** : air-gap ou allowlist d'egress, RBAC, journaux d'audit, chiffrement, traçabilité, parcours de suppression.",
          '☐ **Capture de paquets sortante** propre sur 24 h ; répétée après chaque mise à jour applicative.',
          "☐ **Intégration fournisseur d'identité** testée avec un vrai utilisateur de chaque palier d'accès ; les collections sensibles exigent une élévation séparée.",
          '☐ **Sauvegardes prises et restauration vraiment testée** sur matériel isolé, pas seulement vérifiée dans un panneau de statut.',
          "☐ **Runbook droit à l'effacement rodé** sur données synthétiques couvrant store source, index vectoriel, embeddings en cache et rétention des journaux.",
          "☐ **Classification AI Act** confirmée (risque limité vs haut risque) ; dossier technique en place si haut risque.",
          '☐ **Contrats fournisseurs (le cas échéant) revus** : DPA conforme à l\'article 28, sous-traitants listés, clause anti-entraînement couvrant les données client.',
          '☐ **Accord avec le Betriebsrat** en place quand du contenu rédigé par les salariés est dans le périmètre (Allemagne ; règles européennes similaires ailleurs).',
          "☐ **Mention de transparence** rédigée en langage utilisateur expliquant l'assistance IA, le human-in-the-loop et le flux de données.",
          "☐ **Runbook de réponse à incident** mis à jour pour couvrir les scénarios spécifiques RAG : fuite d'index, manipulation de log, échec de suppression, swap de modèle cassant la traçabilité.",
          '☐ **Revue d\'accès trimestrielle** planifiée et assignée ; première revue calée avant la mise en production.',
          '☐ **Rafraîchissement annuel de la PIA** planifié et lié au processus de change management.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes',
        items: [
          "**Erreur 1 : Traiter \"local\" comme synonyme de \"conforme\".** Le on-prem résout transfert et sous-traitants ; il ne résout pas base légale, PIA, audit logging ou droits des personnes. La conformité est un programme en couches, pas un choix de déploiement.",
          '**Erreur 2 : Sauter la PIA parce que le système est "juste un outil de recherche".** Un outil de recherche qui ingère des données sensibles à grande échelle est exactement ce que couvre l\'article 35. Sauter la PIA, c\'est sauter sa défense en cas d\'audit.',
          "**Erreur 3 : Journaliser le texte de requête sans vérifier la base légale.** Les requêtes elles-mêmes sont des données personnelles quand elles désignent des individus. Décidez à la conception si la finalité couvre la journalisation des requêtes ; sinon, journalisez seulement le hash et les métadonnées.",
          "**Erreur 4 : Oublier les embeddings en cache dans le runbook de suppression.** La suppression source marche. La reconstruction d'index marche. La couche cache ajoutée par votre plateforme pour la performance, les empreintes d'embeddings dans le journal de retrieval et l'historique des réponses dans le store de chat sont les parties oubliées.",
          '**Erreur 5 : Laisser les power users contourner les ACL de collection.** "Les admins voient tout" est commode et très répandu ; c\'est aussi la première cause d\'audits qui se passent mal. L\'accès privilégié doit lui-même être contrôlé, borné dans le temps et justifié par usage.',
          "**Erreur 6 : Réutiliser un même workspace pour plusieurs dossiers ou clients.** La contamination croisée des citations et du contexte est un échec de confidentialité avant même qu'une partie externe ne le voie. Un dossier ou un client par collection ; ACL séparées ; rétention séparée.",
          "**Erreur 7 : Acheter un air-gap et brancher un téléphone perso pour tester.** Le périmètre air-gap doit inclure les personnes capables de transporter les données. La politique des endpoints fait partie du contrôle, pas un sujet à part.",
          '**Erreur 8 : Traiter le choix du modèle et de l\'embedder comme "set and forget".** Chaque upgrade est un événement de change management avec implications PIA, traçabilité et audit. Planifiez le workflow d\'upgrade avant le premier déploiement en production.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Texte intégral du RGPD (Officiel)](https://gdpr-info.eu/) — Texte complet du Règlement Général sur la Protection des Données avec commentaire article par article.',
          "[Texte intégral de l'AI Act](https://artificialintelligenceact.eu/) — Texte réglementaire complet avec cadre de classification des risques.",
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Cadre fédéral US applicable à l\'évaluation des risques IA.',
          '[BDSG-Neu (loi fédérale allemande)](https://www.gesetze-im-internet.de/bdsg_2018/) — Transposition allemande du RGPD avec ajouts sectoriels.',
          '[Lignes directrices EDPB sur la PIA](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — Guide du Comité européen de la protection des données sur quand et comment mener une PIA.',
          '[CNIL — Recommandations IA](https://www.cnil.fr/) — Plans et fiches de la CNIL sur le déploiement IA, traitement local et données sensibles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Faire tourner un RAG en local satisfait-il automatiquement le RGPD ?',
            a: "Non. L'hébergement local résout la question du transfert transfrontalier et réduit la liste des sous-traitants, mais les principes RGPD de l'article 5 (licéité, loyauté, transparence, limitation des finalités, minimisation, exactitude, limitation de la conservation, intégrité et confidentialité, responsabilité) restent applicables. Les articles 25 (protection dès la conception et par défaut), 30 (registre des traitements), 32 (sécurité du traitement) et 35 (PIA) s'appliquent indépendamment de l'endroit où tourne le modèle. Le RAG local est un point de départ solide, pas une posture conformité finie.",
          },
          {
            q: "Que faut-il pour la conformité AI Act d'un déploiement RAG local ?",
            a: "Classifiez le cas d'usage en risque limité ou haut risque. La plupart des déploiements assistant de recherche sont à risque limité et exigent des obligations de transparence : les utilisateurs doivent savoir qu'ils interagissent avec une IA, le contenu généré doit être identifiable. Dès que la recherche alimente une décision automatisée dans un domaine listé (crédit, emploi, éducation, services publics, application de la loi, migration, justice, biométrie, infrastructures critiques), le déploiement est haut risque et l'ensemble des obligations s'applique : système de gestion des risques, gouvernance des données, documentation technique, journalisation automatique, transparence, supervision humaine, précision et robustesse, évaluation de conformité, surveillance post-marché.",
          },
          {
            q: 'Ai-je besoin d\'une PIA pour le RAG local ?',
            a: "Une PIA au titre de l'article 35 est obligatoire pour tout traitement susceptible d'engendrer un risque élevé pour les droits et libertés des personnes — ce qui inclut le traitement à grande échelle de données sensibles (santé, juridique, biométrique, raciale, politique, religieuse, syndicale) et le profilage systématique à effet juridique. La plupart des RAG locaux régulés (juridique, médical, financier, enquêtes RH) entrent dans le périmètre. Lancez la PIA tôt, traitez-la comme un document de conception et répétez les mesures — particulièrement le runbook de suppression — avant la mise en production.",
          },
          {
            q: 'Puis-je partager un déploiement RAG local entre plusieurs services ?',
            a: "Oui, avec précaution. Contrôle d'accès au niveau collection, authentification par utilisateur contre un fournisseur d'identité unique et base légale claire pour l'usage de chaque service sont le plancher. La PIA doit couvrir l'ensemble le plus large des finalités ; si un service a besoin d'une base légale différente (par exemple enquêtes RH au titre de l'intérêt légitime alors que les soignants opèrent en mission de service public), des collections séparées et des groupes d'accès séparés sont plus faciles à défendre qu'une collection unique avec ACL élaborées.",
          },
          {
            q: "Comment auditer qui a accédé à quel document ?",
            a: "Journalisez chaque recherche avec user ID, horodatage, chunk IDs retournés et les document IDs d'origine. Faites suivre les événements vers un store de logs séparé, restreint en écriture, sous un contrôle administratif différent du serveur applicatif (séparation des fonctions). Utilisez du stockage append-only avec chaîne de hashs pour rendre toute altération détectable. La rétention doit s'aligner sur la fenêtre d'enquête de l'autorité et les règles sectorielles — six à sept ans est commun dans les industries régulées.",
          },
          {
            q: "Les modèles d'embeddings open source sont-ils utilisables dans le respect du RGPD ?",
            a: "En principe oui, à trois conditions. Premièrement, les poids sont téléchargés une fois et figés sur un hash, pour que vous puissiez prouver ce qui tournait. Deuxièmement, l'inférence est entièrement locale sans télémétrie ni appel sortant — vérifiez par capture de paquets, ne vous fiez pas à la documentation seule. Troisièmement, la fiche modèle et la licence sont relues pour toute clause incompatible avec un usage métier confidentiel (certaines licences open weight imposent des restrictions sur les types de données ou cas d'usage). Le défaut pratique pour les déploiements régulés : allowlister un petit nombre d'embedders validés et les revérifier à chaque mise à jour.",
          },
          {
            q: "Qu'en est-il de la traçabilité pour les sorties générées par IA ?",
            a: "Chaque réponse générée doit référencer les chunk IDs qui l'ont produite, l'identifiant du modèle, la version du template de prompt et l'horodatage. Les chunks remontent ensuite à des document IDs, qui remontent aux documents source. Cette chaîne est ce qui permet de vérifier la réponse, la défendre face à une contestation, honorer une demande de suppression et reproduire le résultat plus tard. Sans elle, « l'IA l'a dit » est la défense d'audit — et ce n'est aucune défense.",
          },
          {
            q: 'Puis-je utiliser un RAG local pour les documents confidentiels clients ?',
            a: "Souvent oui, parfois non. De nombreuses conventions d'avocat externe, NDA M&A et contrats sur données patient autorisent la revue assistée par IA dès lors que les données ne quittent pas un périmètre défini et que certains contrôles sont en place. Le RAG local satisfait l'exigence de périmètre par construction ; la liste de contrôles spécifique au contrat (chiffrement, accès, audit, rétention, notification de violation) doit toujours être respectée. Quand le contrat interdit tout traitement IA, aucun modèle de déploiement ne corrige cela — l'interdiction s'applique que l'IA soit locale ou distante.",
          },
          {
            q: 'Quel logging est requis pour la conformité ?',
            a: "Événements d'ingestion (document ID, hash, source, chargeur, horodatage, classification), événements de recherche (user ID, métadonnées ou hash de la requête, chunk IDs retournés, référence de la réponse, identifiant modèle/embedder), événements administratifs (promotion de modèle, changement d'embedder, changement d'ACL, changement utilisateur/groupe) et événements opérationnels (sauvegarde, restauration, rotation de clé). Tous les événements sont expédiés vers un store de logs séparé, append-only, à chaîne de hashs, retenus selon vos exigences dossier et secteur.",
          },
          {
            q: "Comment gérer les demandes de droit à l'effacement dans un RAG ?",
            a: "Avec un runbook documenté qui mène la suppression à travers chaque couche : store de documents source, index vectoriel, embeddings en cache, rétention des journaux de recherche (quand la base légale autorise la suppression de l'entrée de log) et toutes les réponses stockées dans l'historique de chat. La suppression source est directe ; la reconstruction d'index est bien comprise ; les embeddings en cache et l'historique des réponses sont les parties que la plupart des déploiements oublient. Répétez le runbook sur données synthétiques, documentez la répétition et liez le runbook à votre processus de réponse à incident, pour qu'une demande réelle déclenche la séquence rodée et non de l'improvisation.",
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI : meilleur RAG local](/fr/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — quelles plateformes auto-hébergées pour quelle posture conformité, avec notes télémétrie et licence.',
          '[Agents IA locaux pour workflows métier et conformité EU](/fr/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — sujet adjacent quand la recherche alimente des étapes de workflow automatisées plutôt qu\'un lecteur humain.',
          "[Automatisation e-mail et calendrier par LLM local](/fr/power-local-llm/local-llm-email-and-calendar-automation) — schémas d'automatisation métier où le même jeu de contrôles s'applique.",
          '[RAG local sur vos PDF étape par étape](/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step) — guide pratique pour les modèles on-prem et laptop.',
          '[Discuter avec 1 000 PDF localement](/fr/power-local-llm/chat-with-1000-pdfs-locally) — guide opérationnel pour les corpus plus volumineux qui poussent contre le plafond on-prem.',
          '[Power Local LLM Hub](/fr/power-local-llm) — bibliothèque complète des guides de déploiement LLM auto-hébergés.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: '業務データ向けローカルRAG：機密文書のためのGDPR準拠AI（2026年版）',
    seoTitle: 'GDPR準拠ローカルRAG：機密文書向け（2026）',
    intro:
      '法務、医療、金融の各チームには共通の課題があります。AIで検索する価値が最も高い文書こそが、社外に出せない文書です。本記事は、GDPR、EU AI Act、HIPAA、ドイツのDatenschutz要件を満たすセルフホスト型RAGの、アーキテクチャ・統制セット・展開パターンの判断マトリクスです。コンプライアンス担当者がIT部門に1つの文書を渡せば、何を構築すべきか伝わるよう書かれています。',
    metaDescription:
      'GDPR準拠ローカルRAG：法務・医療・金融チーム向け。アーキテクチャ、監査ログ、DPIA範囲、3つの展開パターンを比較。',
    twitterDescription:
      'GDPRおよびEU AI Actに対応するローカルRAG。Air-Gap、監査ログ、データ系統、DPIA範囲、3つの展開パターン — EUコンプライアンス担当者がIT部門に共有する記事。',
    audience:
      'EUおよびDACH圏のコンプライアンス担当者、DPO、法務、機密文書（契約書、患者記録、監査ファイル、M&Aデータルーム、規制当局との通信）に対するセルフホストRAG構築を担うITアーキテクト。',
    readTime: '15分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: 'GDPR準拠ローカルRAG',
    targetKeywords: [
      'gdpr 準拠 rag',
      'ローカル rag 業務データ',
      'eu ai act rag',
      '機密文書 プライベート rag',
      'on-premise rag 展開',
      'datenschutz rag',
      'dpia ローカル rag',
    ],
    leadAnswerBlock:
      '**セルフホスト型RAGがGDPRおよびEU AI Actの要件を満たすには、初日から6つの統制が組み込まれている必要があります：Air-Gapまたは厳格にegress制御されたホスティング、ロールベースの文書アクセスを伴うユーザー単位認証、ingestおよびretrievalをカバーする改ざん防止監査ログ、保存時および転送時のend-to-end暗号化、chunkからソース文書まで遡れる決定論的データ系統、そしてソースストアからベクトルインデックス、キャッシュ済みembeddingまで伝播する文書化された削除パス。展開パターン（単一ユーザーラップトップ、On-Premサーバー、プライベートEUクラウド）は、どの統制が容易でどれが手間かを決めるだけで、統制が必要かどうかは決めません。**',
    quickAnswerTop: {
      en: {
        question:
          'ローカルRAGはデフォルトでGDPR準拠ですか？規制対象チームはどの展開パターンを選ぶべきですか？',
        answer:
          'ローカルRAGはデフォルトではGDPR準拠ではありません。On-Premでモデルを動かすことで越境データ移転の問題は解消し、processorリストは縮小しますが、GDPR第5、25、30、32、35条は依然として適用されます：適法性、データ最小化、監査ログ、処理の安全性、特別カテゴリの個人データを大規模に処理するシステムにおけるDPIA。単独のプロフェッショナルや単発の案件レビューには単一ユーザーラップトップ、5〜50ユーザーで数千件の文書を扱う部門単位のナレッジベースにはOn-Premサーバー、複数部門・複数法人にまたがる展開で完全Air-Gapより耐障害性を重視する場合はプライベートEUクラウド（ソブリンクラウド、顧客管理鍵、EU限定リージョン）を選んでください。どれを選んでも上記の6統制は同じで、変わるのは実装コストだけです。',
        bullets: [
          'ローカルホスティングは越境移転（第44〜49条）を解消しprocessorリストを縮小しますが、適法性、DPIA、データ主体の権利は単独では解決しません。',
          '単一ユーザーラップトップ — 単独の弁護士、医師、監査人、単発の案件レビューに最適。スケール時の監査が困難ですが、Air-Gapは最も簡単です。',
          'On-Premサーバー — 5〜50ユーザーの部門単位展開に最適。本格的な監査ログ、RBAC、バックアップ、災害復旧。IT負荷は最大です。',
          'プライベートEUクラウド — 耐障害性が必要な複数法人展開に最適。ソブリンリージョン+顧客管理鍵+顧客データを学習に使わない契約条項が必須です。',
          'GDPR第35条のDPIAは、特別カテゴリの個人データを大規模に処理する場合は展開パターンを問わず必須です。',
          '忘れられる権利の請求は、ソース文書、ベクトルインデックス、キャッシュ済みembeddingまで伝播させる必要があります。請求が来てからではなく、本番化前に削除パスを設計してください。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '展開パターン比較', anchor: '#deployment-comparison' },
      { label: '展開パターンの選択', anchor: '#which-deployment' },
      { label: 'なぜ機密データにローカルRAGか', anchor: '#why-local-rag' },
      { label: '6つの必須統制', anchor: '#required-controls' },
      { label: 'Air-Gapとegress制御', anchor: '#air-gap' },
      { label: '監査に耐えるaudit logging', anchor: '#audit-logging' },
      { label: 'chunkからソースまでのデータ系統', anchor: '#data-lineage' },
      { label: '暗号化とアクセス制御', anchor: '#encryption-access' },
      { label: '単一ユーザーラップトップパターン', anchor: '#laptop-pattern' },
      { label: 'On-Premサーバーパターン', anchor: '#on-prem-pattern' },
      { label: 'ベクトルデータベース選択肢', anchor: '#vector-db-comparison' },
      { label: 'プライベートEUクラウドパターン', anchor: '#private-cloud-pattern' },
      { label: 'EU AI Actの分類', anchor: '#eu-ai-act' },
      { label: 'DPIA要件（第35条）', anchor: '#dpia-requirements' },
      { label: 'ドイツ固有の留意点（Datenschutz）', anchor: '#germany-datenschutz' },
      { label: '本番化前コンプライアンスチェックリスト', anchor: '#compliance-checklist' },
      { label: 'よくある誤り', anchor: '#common-mistakes' },
      { label: '出典', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**ローカルホスティングは必要だが十分ではありません。** 自社ハードウェア上でモデルとベクトルストアを動かすことで越境移転は解消しprocessorリストは縮小しますが、GDPR第5、25、30、32、35条は依然として適用されます。データが社内に留まっても、適法性、データ最小化、監査ログ、処理の安全性、DPIAは任意になりません。',
          '**展開パターンを問わず6つの統制は妥協できません：**Air-Gapまたは厳格なegress制御、ロールベースアクセスを伴うユーザー単位認証、改ざん防止監査ログ、保存時および転送時の暗号化、chunkからソース文書まで遡れる決定論的データ系統、ベクトルインデックスとキャッシュ済みembeddingを含む文書化された削除パス。',
          '**3つの展開パターンが規制対象ユースケースのほとんどをカバーします。** 単独プロフェッショナルや案件レビューには単一ユーザーラップトップ、5〜50ユーザーの部門単位ナレッジベースにはOn-Premサーバー、完全Air-Gapより耐障害性が重要な複数法人展開にはプライベートEUクラウド（ソブリンリージョン、顧客管理鍵）。',
          '**EU AI Actはほとんどのローカル RAGを「限定リスク」システムに分類します** — ただしretrievalが自動化された決定（信用スコアリング、雇用スクリーニング、給付資格判定）に供される瞬間、展開は高リスクに移行し、完全な適合性評価、市場投入後のモニタリング、人間の監督義務が発生します。',
          '**第35条のDPIAは必須です** — 特別カテゴリの個人データ（医療、法的、生体、政治、組合員）を大規模に取り込むRAG、または法的効果を持つ自動化決定を生成するシステムには。DPIAをスキップすれば、監査時の防御もスキップしたことになります。',
          '**忘れられる権利は、ほとんどの展開が落ちる削除テストです。** ソース文書は容易です。ベクトルインデックスは再構築可能です。キャッシュ済みembedding、retrievalログ、チャット履歴に保存された回答 — これらが見落とされる箇所であり、規制当局が必ず尋ねる箇所です。',
          '**Open-source embeddingモデルは原則としてGDPRセーフですが**、3条件付きです：(a)モデル重みを一度ダウンロードしてハッシュにピン留め、(b)inferenceは完全にローカルでテレメトリなし、(c)モデルカードとライセンスを確認し、機密業務利用と矛盾する条項がないことを確かめる。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**6つの必須統制：** Air-Gap、RBAC、監査ログ、暗号化、データ系統、削除パス。',
          '**3つの展開パターン：** 単一ユーザーラップトップ（単独プロフェッショナル）、On-Premサーバー（5〜50ユーザー）、プライベートEUクラウド（複数法人）。',
          '**DPIAは第35条で必須：** 特別カテゴリの個人データ（医療、法的、生体）を大規模に処理する場合。',
          '**EU AI Act：** ほとんどのローカルRAGは限定リスク。retrievalが自動化決定（信用、雇用、給付）に供されると高リスクに昇格。',
          '**忘れられる権利：** ソース文書、ベクトルインデックス、キャッシュ済みembedding、回答履歴まで伝播必須。',
          '**METIのAIガバナンス2024**は、機微情報を扱う日本企業に対しデータ主権を確保する展開を推奨。ローカル推論はその要件を構造的に満たします。',
          '**Open-source embeddingモデル**：重みのピン留め、完全ローカルinference、ライセンス確認の3条件下でのみGDPR準拠。',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: '展開パターン比較',
        content:
          'どのパターンもGDPR準拠にできます。変わるのは統制のコストと、何かが起きたときの故障モードです。ユーザー数、文書の機密度、耐障害性要件に合う最もシンプルなパターンを選んでください。',
        columns: ['統制', '単一ユーザーラップトップ', 'On-Premサーバー', 'プライベートEUクラウド'],
        rows: [
          {
            '統制': 'Air-Gap（外向き通信なし）',
            '単一ユーザーラップトップ': '簡単 — ネットワーク無効化',
            'On-Premサーバー': '可能 — VLAN+ファイアウォール',
            'プライベートEUクラウド': '困難 — egressのallowlistのみ',
          },
          {
            '統制': '監査ログ（誰が、何を、いつ）',
            '単一ユーザーラップトップ': '手動 — OSレベルのみ',
            'On-Premサーバー': '強力 — 集中ログパイプライン',
            'プライベートEUクラウド': '強力 — クラウドネイティブlogging',
          },
          {
            '統制': 'データ系統（chunk → ソース）',
            '単一ユーザーラップトップ': 'ローカルファイルのみ',
            'On-Premサーバー': '完全に追跡可能',
            'プライベートEUクラウド': '完全 — リージョン横断',
          },
          {
            '統制': 'EUデータレジデンシー',
            '単一ユーザーラップトップ': '本質的 — 物理所在地',
            'On-Premサーバー': '本質的 — 物理所在地',
            'プライベートEUクラウド': '構成 — ソブリンリージョン必須',
          },
          {
            '統制': 'ユーザー別RBAC',
            '単一ユーザーラップトップ': '単一ユーザー — 該当なし',
            'On-Premサーバー': 'IDプロバイダ+グループ',
            'プライベートEUクラウド': 'IAM+SSO+コレクション別ACL',
          },
          {
            '統制': 'バックアップとDR',
            '単一ユーザーラップトップ': '暗号化外付けディスク',
            'On-Premサーバー': 'テープまたはオフサイトバックアップ',
            'プライベートEUクラウド': 'クロスAZレプリケーション',
          },
          {
            '統制': '初期コスト',
            '単一ユーザーラップトップ': 'ハードのみ — 低',
            'On-Premサーバー': 'サーバー+統合 — 中',
            'プライベートEUクラウド': 'サブスク+セットアップ — 中',
          },
          {
            '統制': '継続コスト',
            '単一ユーザーラップトップ': 'なし — sysadmin工数',
            'On-Premサーバー': 'IT運用+電力+冷却',
            'プライベートEUクラウド': '月次経常',
          },
          {
            '統制': '最適なケース',
            '単一ユーザーラップトップ': '単独プロフェッショナル、案件レビュー',
            'On-Premサーバー': '5〜50ユーザー、部門ナレッジベース',
            'プライベートEUクラウド': '複数法人、耐障害性展開',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: '展開パターンの選択',
        content:
          '**正しい選択は、ユーザー数、文書の機密度、監査対応の緊迫度、社内のIT能力に依存します。** 以下の判断ショートカットがほとんどの実シナリオをカバーします。',
        columns: ['状況', '推奨'],
        rows: [
          {
            '状況': '案件を1件ずつレビューする単独の弁護士、医師、監査人',
            '推奨': '単一ユーザーラップトップ',
          },
          {
            '状況': '指名された3〜5名のレビュアーと終了日が決まったM&Aデータルーム',
            '推奨': '単一ユーザーラップトップまたはOn-Prem（文書量に応じて）',
          },
          {
            '状況': '規制当局通信アーカイブを共有する10〜30名のコンプライアンスチーム',
            '推奨': 'On-Premサーバー',
          },
          {
            '状況': '50名向けの臨床プロトコルアシスタントを構築する病院部門',
            '推奨': 'On-Premサーバー',
          },
          {
            '状況': '複数EU諸国の子会社にまたがる単一RAGを必要とするマルチエンティティグループ',
            '推奨': 'プライベートEUクラウド（ソブリンリージョン+顧客管理鍵）',
          },
          {
            '状況': '24/7稼働要件とDR計画を持つ保険会社',
            '推奨': 'プライベートEUクラウド',
          },
          {
            '状況': '機密または取扱制限データを持つ官公庁',
            '推奨': 'Air-Gapped On-Premのみ — クラウドは対象外',
          },
          {
            '状況': '6週間以内の規制当局向け監査防御',
            '推奨': 'On-Premサーバー（統制を実証する最速ルート）',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'なぜ機密データにローカルRAGか',
        content:
          '**クラウドLLM-as-a-Serviceに対するローカルRAGの優位はイデオロギーではなく、GDPRリスクアセスメントの形そのものです。** クラウドRAGは多くのユースケースで実用的ですが、機密業務データに対しては、ローカルRAGが構造的に排除する5つのリスクを追加します。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルRAGは機密文書を自社ハードウェアに留めたままチームにAI検索を提供します — データは社外に出ず、第三者processorは触れず、越境移転の論点も生じません。',
          },
          {
            type: 'plain-terms',
            text: '法務チームが10,000件の案件ファイルを自然言語で検索できると想像してください — ただし文書はサーバルームを離れません。それがローカルRAGです：AIはあなたのハードウェア上で文書を読み、あなたのハードウェア上で質問に答え、何もどこにも送られません。コンプライアンス上の利点は機能ではなく、アーキテクチャです。',
          },
        ],
        items: [
          '**越境移転（第44〜49条）。** 個人データをEU域外のprocessorに送るには標準契約条項、移転影響評価、受領管轄に召喚権限が及ぶかという確かな回答が必要です。ローカルRAGはデータを移転しないため、論点が発生しません。',
          '**Sub-processorの増殖（第28条）。** クラウドLLMプロバイダはhyperscalerインフラ、コンテンツモデレーション、observabilityベンダーに依存しがちです。それぞれがリストアップ、契約、監査を要するsub-processorです。ローカルRAGはデフォルトでsub-processorが0です。',
          '**学習データ漏洩。** 多くのクラウドLLM規約は、有償のエンタープライズ枠で学習除外条項が確認されない限り、顧客プロンプトをモデル改善に使う権利を留保します。ローカルRAGは自社で重みを管理するモデルを動かし、ホストから何も出ません。',
          '**クライアント契約の機密保持条項。** 外部弁護士契約、M&A NDA、患者データ契約は、保護対象を第三者processorに送ることをしばしば禁じます。ローカルRAGは条項を完全に回避します。',
          '**召喚および司法手続によるエクスポージャ。** クラウドプロバイダに保管された文書はプロバイダ宛ての法的手続で強制提出され得て、controllerが事前通知を受けない場合もあります。社外に出ない文書は、あなた自身に対してしか強制できません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ローカルRAGがすべてのワークロードに適しているわけではありません。公開情報のリサーチ、マーケティング草稿の生成、オープンソースリポジトリへのコード補助 — これらはGDPRエクスポージャが低くモデル品質差が効くため、通常クラウドLLMの方が良い結果になります。本記事の主張は、機密業務データ（法務、医療、金融、人事、規制当局通信、企業秘密）に特化したものです。',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: '6つの必須統制',
        content:
          '**この6統制が床面です。** 規制対象の展開はすべて6つを必要とし、展開パターンは実装方法だけを変えます。1つでも省くと、監査が悪化する最も多い原因になります。',
        numberedItems: [
          {
            title: 'Air-Gapまたは厳格なegress制御',
            whyItMatters:
              '文書とembeddingが外向き通信で漏れないことを確認します — テレメトリSDK、モデル更新プローブ、クラッシュレポーター、コンテンツモデレーションコールバック、フォントの第三者CDNなど。ネットワークアクセスを完全に無効化（真のAir-Gap）するか、署名付き更新サーバーのみ許可するegress allowlistを運用してください。',
          },
          {
            title: 'ロールベースアクセスを伴うユーザー単位認証',
            whyItMatters:
              '「誰がどの文書にアクセスしたか」を、規制当局が尋ねる前に答えられる必要があります。IDプロバイダに対するSSO、グループベースのコレクションアクセス、案件で必要なら文書単位のACL。共有アカウントは統制ではなく、起こるのを待つ監査失敗です。',
          },
          {
            title: 'ingestおよびretrievalをカバーする改ざん防止監査ログ',
            whyItMatters:
              '各文書について：誰がアップロードしたか、いつ、ソースパス、ハッシュ。各クエリについて：誰が尋ねたか、何を尋ねたか（ロギングポリシーが許す場合）、どのchunkがretrieveされ、どの文書IDから来たか、どの回答が返ったか。ログは改ざん検知可能（append-only、署名、規制当局の調査ウィンドウをカバーする保管期間）でなければなりません。プロンプトレベルの監査トレイル — バージョン管理、変更履歴、ロールバック — については[プロンプトのバージョン管理ワークフロー](/ja/prompt-engineering/prompt-version-control-workflows)を参照してください。',
          },
          {
            title: '保存時および転送時の暗号化',
            whyItMatters:
              'ホストのディスク暗号化、内部のサービス間通信のTLS、盗難ラップトップや侵害された管理者アカウントを生き延びる鍵管理。クラウド展開では顧客管理鍵。これがないと、デバイス紛失が第33条の通知義務違反に転じます。',
          },
          {
            title: 'chunkからソースまでの決定論的データ系統',
            whyItMatters:
              'retrieveされた各chunkは、ソース文書、ページ、セクション、バージョンに遡れる必要があります。これにより(a)回答の検証、(b)削除請求の履行、(c)生成された要約が法廷で問われたときの防御が可能になります。「どのchunkがどの回答を生んだか再現できない」は規制当局への許容回答ではありません。',
          },
          {
            title: 'ベクトルインデックスおよびキャッシュ済みembeddingを含む文書化された削除パス',
            whyItMatters:
              '忘れられる権利の請求は、ソースストアからベクトルインデックス、キャッシュ済みembedding、retrievalログの保管まで伝播する必要があります。多くの展開はソース削除はきちんと処理しますが、残りを忘れます。本番化前に削除runbookを文書化し、合成データでリハーサルしてください。',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-Gapとegress制御',
        content:
          '**Air-Gapはホストに外向き経路がないこと、egress制御は厳格にallowlistされた経路があることを意味します。** どちらも許容ですが、運用が支えられる最強モデルを選んでください。',
        items: [
          '**真のAir-Gap** — DHCPなし、公的宛先へのDNS解決なし、外向きTCPなし。更新は管理者が物理的に接続する署名付きメディア経由。機密業務、特定の病院ネットワーク、悪意ある依存関係を脅威モデルに含む展開に最適です。',
          '**Egress allowlist** — 外向き通信は名前付き宛先の小リスト（モデル更新サーバー、IDプロバイダ、内部コレクタへのログフォワーダ）にのみ許可。それ以外はファイアウォールでドロップ。規制対象の部門展開のほとんどでは、これが現実的なデフォルトです。',
          '**プラットフォームで確認すべき点：** デフォルトのテレメトリゼロ、inference中の外向き呼び出しなし、UIにフォントCDNなし、ペイロードを送るクラッシュレポーターなし。Little Snitch等のツールやパケットキャプチャでテストベンチで検証してから本番昇格してください。',
          '**更新ガバナンス** — モデル重み、embedder重み、アプリケーションコード、OSパッチはすべて統制された更新ウィンドウを通ります。更新を昇格する管理者が書面でサインオフし、変更がログに残ります。',
          '**よくあるAir-Gap破れ：** 第三者UIコンポーネントに同梱されたanalytics SDK、アプリケーションchromeのフォントCDN参照、起動時に走る「アップデート確認」プローブ。だから検証ステップが重要です — デフォルトを信用してはいけません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'アプリケーションを開いたまま24時間のパケットキャプチャをホストで実行してください。allowlistにない外向きはすべて指摘事項です。アプリ更新のたびに繰り返してください — リリースノートは新しい外向き呼び出しを過小報告するのが常です。',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: '監査に耐えるaudit logging',
        content:
          '**監査ログは規制当局が最初に読む成果物です。** retrieveのたびに2つの問いに答える必要があります：誰が尋ねたか、システムが何を返したか。それなしでは言葉で議論することになります。適切なロギングがあれば、領収書を見せられます。',
        items: [
          '**Ingestイベント：** 文書ID、ハッシュ（SHA-256）、ファイル名、ソースパス、アップロード者、タイムスタンプ、分類タグ、サイズ、ページ数、所有グループ、保管クラス。ingest時に各文書をタグ付けしてください — 大規模コーパスの遡及分類は困難で完全になることは稀です。',
          '**Retrievalイベント：** クエリID、ユーザーID、タイムスタンプ、retrieveされたchunk ID（およびその由来文書ID）、retrievalスコア、最終回答ハッシュ、モデル識別子、embedder識別子、使用したtop-K。クエリテキストそのものは機微 — 処理の目的が許す場合のみログし、そうでなければハッシュとタイムスタンプのみログしてください。',
          '**管理イベント：** モデル昇格、embedder変更、インデックス再構築、ユーザー/グループ変更、ACL変更、アクセスポリシー変更。各イベントは責任ある管理者によって署名されます。',
          '**改ざん耐性：** append-onlyログ、ハッシュチェーン（各エントリは前エントリのハッシュを参照）、out-of-band署名鍵、別管理者または書込専用メディアに保管された別コピーとの定期的整合確認。',
          '**保管期間：** 規制当局の調査ウィンドウに整合 — 最低でも案件の保管期間、規制業界では一般的に6〜7年、業界規則がある場合はそれ以上。',
          '**パイプライン：** アプリケーションは構造化イベントを発し、forwarderが書込制限された別ログストアへ送ります。アプリケーションサーバーはログエントリを削除・書換できる権限を絶対に持つべきではありません — 職務分離がログを信頼性のあるものにします。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'クエリテキストのロギングは独自のGDPR論点を生みます — クエリ自体が個人データを含み得ます（例：「患者Xの病歴を要約せよ」）。設計時に、処理の目的がクエリロギングをカバーするか決めてください。カバーしない場合は、監査と運用診断に必要なメタデータのみログします。',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'chunkからソースまでのデータ系統',
        content:
          '**データ系統は他のすべての統制の背骨です。** 系統がなければ削除請求は失敗し、回答検証は不可能、監査トレイルは崩壊します。最初のingestから組み込んでください、後付けではなく。',
        items: [
          '**文書レベルの系統：** 各文書は安定した内部ID、コンテンツハッシュ、ingestタイムスタンプ、所有者、分類、保管クラスを持ちます。原本ファイルはソースストアに留まり、RAGシステムは参照のみを保持します。',
          '**chunkレベルの系統：** 各chunkは親文書ID、ページ（PDF）、セクション（構造化文書）、文字オフセット、長さ、chunking戦略バージョンを参照します。再chunkするとき（必ず行います）、古いchunkはin-place削除ではなくtombstoneにし、古いretrievalログが解決可能なまま保ちます。',
          '**embeddingレベルの系統：** 各embeddingベクトルはchunk IDとembedder識別子を参照します。embedderを変えるとき、新しいembeddingが検証され、それを参照する案件がクローズされるまで古いベクトルを保持し、その後にパージします。',
          '**回答レベルの系統：** 各生成回答は、それを生んだchunk ID、モデル識別子、プロンプトテンプレートバージョン、タイムスタンプを参照します。「この回答はどこから来たか」をユーザーが尋ねたとき、システムはchunk → 文書 → ページを1クリックで解決します。',
          '**系統を壊さない再インデックス：** 再構築は文書IDを保持し、chunking戦略バージョンをインクリメントします。古いchunk IDはretrievalログ内で解決可能なまま残り、ライブインデックスが進んでも問題ありません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '系統チェーンを四半期ごとにテストしてください。監査ログからランダムにretrievalを選び、chunk ID → 文書ID → ソースストアの原本 → 保管クラス、と遡ります。どこかが壊れていれば、次の規制当局検査の前にスキーマを直してください — 検査中ではなく。',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: '暗号化とアクセス制御',
        content:
          '**保存時暗号化、転送時暗号化、既存のIDプロバイダにマップするアクセス制御。** よく理解された統制です。失敗モードは選んだ層を雑に実装することではなく、3層のうち1つを忘れることです。',
        items: [
          '**保存時暗号化** — ホストのフルディスク暗号化（Linux：LUKS、Windows：BitLocker、macOS：FileVaultはラップトップ向け）。サーバーではベクトルストアやingestステージング領域のパーティションも暗号化してください。クラウド展開には顧客管理鍵を、ポリシーに従い鍵ローテーション。',
          '**転送時暗号化** — サービス間ホップごとにTLS、localhost上でも。業界ベースラインに合わせた暗号スイート方針。脅威モデルが正当化する場合はMutual TLS — クラウド展開のサーバー間が典型例。',
          '**認証** — 既存IDプロバイダ（OIDC、SAML）に対するSSO。本番にはローカルアカウントなし。管理権限または機微コレクションへのアクセスを持つユーザーにはMFAを強制。',
          '**認可** — コレクションレベルのグループベースアクセス、案件で必要な場合は文書レベルACL（M&Aデータルーム、雇用調査など）。retrievalパイプラインはクエリ時にACLを強制する必要があります — UIだけではダメです。文書を見られないユーザーにはchunkも返ってはいけません。',
          '**管理アクセス** — インデックスを読む・再構築する、監査ログを見る、ACLを変える権限を持つアカウントには特権アクセス管理（PAM）。常時管理者権限より、ログ付き正当化を伴うjust-in-time昇格が優れています。',
          '**エンドポイントセキュリティ** — ラップトップ展開には管理デバイス（MDM登録、暗号化、画面ロックポリシー強制）。文書ストアが復号されたまま無人でカフェに置かれた単独プロフェッショナルのラップトップは、書きたくないGDPR違反です。',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: '単一ユーザーラップトップパターン',
        content:
          '**単一ユーザーラップトップは最もAir-Gap化しやすく、最もスケールしにくいパターンです。** 単独プロフェッショナルや単発の案件レビューに最適、単一ユーザーを超えて存続する必要のあるものや退職に耐える必要のあるものには不適です。',
        items: [
          '**ハードウェア** — フルディスク暗号化、専用GPU（または近年のunified-memoryマシン）、最低32 GBのRAMを備えたワークステーションクラスのラップトップ。モデルとembedderはベクトルストアキャッシュとともにメモリに収まる必要があります。VRAMによるハード要件とモデル選択については[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide-2026)を参照してください。',
          '**ソフトウェア** — ローカルで動く自己完結型のデスクトップRAGアプリ、重みを一度ダウンロードしハッシュにピン留めしたOpen-source LLM、Open-source embedder、暗号化ディスク上のローカルベクトルストア。ローカルRAGに適したオープンソースモデルの比較は[Ollama向けトップオープンソースモデル](/ja/local-llms/top-open-source-models-ollama)を参照してください。',
          '**ネットワークposture** — 業務中はAir-Gap、明示的な署名付き更新時のみ再接続。OSファイアウォールをデフォルトで全外向きdrop、更新ワークフロー用に明示的例外を作成してください。',
          '**文書の取り扱い** — 暗号化ディスク上のソース文書、案件ごとの分離フォルダ構造、別場所保管の外付けディスクへの週次暗号化バックアップ。',
          '**監査posture** — OSレベルの監査ログ（ログイン、ファイルアクセス、周辺機器イベント）が床面。アプリケーションレベルイベントはOn-Premパターンの方が容易ですが、ラップトップパターンではOSログを主記録として扱い、案件ごとの手書き記録で補完します。',
          '**限界** — 単一ユーザーラップトップはマルチユーザープラットフォームではありません。ラップトップやアカウントを共有する、文書ストアを同僚のマシンにコピーするのは、監査postureと適法性評価の両方を壊します。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '機密案件を扱う単独プロフェッショナルにとって、単一ユーザーラップトップパターンは利用可能な最強のプライバシーpostureです — どのクラウドより良く、多くのOn-Prem展開より強固です。トレードオフは運用面：ラップトップが故障すると、案件はバックアップ規律の復旧時間を継承します。',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'On-Premサーバーパターン',
        content:
          '**On-Premサーバーは規制対象の部門単位RAGの主役パターンです。** 5〜50ユーザーと数千件の文書にスケールし、適切な監査ロギングをサポートし、物理的境界内に留まります。代償は本物のIT運用作業です。',
        items: [
          '**ハードウェア** — エンタープライズGPU 1〜2基（小規模コーパスならワークステーションGPUも可）、冗長化ディスク、ECCメモリ、UPS搭載のサーバー。生コーパスの2〜4倍のストレージを、ベクトル、インデックス、ログ、バックアップ向けに見込んでください。',
          '**ネットワーク** — 企業ファイアウォール背後の専用VLAN、脅威モデルに応じてegress allowlistまたは完全Air-Gap。社内アクセスは企業ネットワーク経由のみ、公的ingressなし。',
          '**ソフトウェアスタック** — セルフホスト型RAGプラットフォーム（スタンドアロンのサーバーイメージかコンテナ化展開）、チャットモデルとしてのOpen-source LLM、Open-source embedder、コーパスサイズに応じたベクトルストア。アプリケーションサーバー、ベクトルストア、ログforwarderは別プロセス・別サービスアカウントで動作させます。',
          '**ID** — 企業IDプロバイダに対するフェデレーション、グループメンバシップがコレクションアクセスを駆動。機微コレクションは追加承認ワークフローでゲートします。',
          '**バックアップとDR** — 文書ストアとベクトルインデックスの夜次インクリメンタルバックアップ、週次フルバックアップ、ITが保持するオフサイトコピー。文書化された復元runbookを少なくとも年1回テスト。',
          '**運用** — 変更管理ポリシーに従ったパッチウィンドウ、四半期アクセスレビュー、忘れられる権利の請求向けに練習済み削除runbook、系統を保持するモデル・embedderアップグレードパスの文書化。',
          '**容量計画** — 数千件の文書と5〜50同時ユーザーは、単一のmid-range GPUサーバーで快適に収まります。それを超えるなら、より高性能なホストかプライベートクラウドパターンへの移行を計画してください。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'On-Prem RAGは非技術的理由で最も失敗しやすいパターンです：一度も復元されたことのないバックアップ、IT職員間で共有される管理者アカウント、誰もテストしていないUPS、2か月静かにイベントを落としているログforwarder。技術的統制は運用衛生より易しいのです。',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'On-Prem RAG向けベクトルデータベース選択肢',
        content:
          '**ベクトルストアの選択がコンプライアンスを決めることはまれですが、運用コスト、スケール上限、削除runbookのクリーンさを左右します。** 規制対象展開のほとんどはこの6つのいずれかを選びます。',
        columns: ['ベクトルDB', 'タイプ', 'EUセルフホスト', '最適なRAGパターン'],
        rows: [
          {
            'ベクトルDB': '**Chroma**',
            'タイプ': 'オープンソース、軽量',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': 'ラップトップ+小規模On-Prem',
          },
          {
            'ベクトルDB': '**Qdrant**',
            'タイプ': 'オープンソース、高性能',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': 'On-Premサーバー、フィルタリング重視',
          },
          {
            'ベクトルDB': '**Weaviate**',
            'タイプ': 'オープンソース、フル機能',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': 'On-Prem+ハイブリッドサーチ',
          },
          {
            'ベクトルDB': '**Milvus**',
            'タイプ': 'オープンソース、エンタープライズ',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': '大規模On-Prem',
          },
          {
            'ベクトルDB': '**pgvector**',
            'タイプ': 'PostgreSQL拡張',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': 'すでにPostgresを使うチーム',
          },
          {
            'ベクトルDB': '**Pinecone**',
            'タイプ': 'マネージドSaaS',
            'EUセルフホスト': '⚠️ US-hosted',
            '最適なRAGパターン': 'プライベートEUクラウドのみ（留保あり）',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'プライベートEUクラウドパターン',
        content:
          '**プライベートEUクラウドパターンは、ソブリンリージョンクラウドプロバイダ、顧客管理鍵、EU限定データレジデンシー、顧客データへのAI学習禁止の契約条項を採用します。** 複数法人展開、複数リージョンの耐障害性要件、真のOn-Prem運用能力を持たないチームに最適です。',
        items: [
          '**プロバイダ選定** — hyperscalerのEUソブリンオファリングか欧州系クラウドプロバイダ。DPAは全sub-processorをリストアップ必須、EEA外のsub-processorがいる場合は移転メカニズムを示す必要があります。Schrems II型の移転影響評価は、直接のprocessorがEU所在でもファイルに含めます。',
          '**リージョン** — EU限定、明示的なデータレジデンシー保証付き。クロスリージョンレプリケーションは他のEUリージョンのみ。バックアップ目的でも一時的でもUSリージョンへのfailoverは不可。',
          '**暗号化** — ローテーション付き顧客管理鍵、プロバイダがサポートする場合はbring-your-own-key、鍵アクセスイベントはクラウドプロバイダの運用ログとは別に記録。',
          '**ネットワーク** — 公的ingressなしのプライベートVPC、企業ネットワークからの専用接続またはVPN経由のみアクセス、外向き依存にはegress allowlist。',
          '**ID** — 企業IdPに対するフェデレーション、共有サービスアカウントではなくユーザーIDに紐付くクラウドネイティブIAM、retrievalパイプラインで強制されるコレクション別ACL。',
          '**Logging** — クラウドネイティブの監査ログを既存SIEMに供給、アプリケーション監査イベントは別取込、規制当局期待に応える改ざん耐性保管。',
          '**契約** — DPAは第28条準拠、sub-processor列挙、必要に応じてSCCs対処、LLM重みおよび付随サービス（検索、テレメトリ、サポート）をカバーする明示的な学習禁止条項を含む必要があります。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'プライベートEUクラウドパターンは第三者processorを使うため On-Premより寛容に見えます — しかしソブリンリージョン、顧客管理鍵、契約上の学習禁止条項、適切なegress制御を備えれば、可用性と監査postureの両面でOn-Premに匹敵または上回ります。コンプライアンスファイルは厚くなりますが、運用リスクは小さくなります。',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'EU AI Actの分類：限定リスク vs 高リスク',
        content:
          '**ほとんどのローカルRAG展開はEU AI Act上の限定リスクAIシステムです — しかしretrievalが人に影響する自動化決定に供される瞬間、分類は高リスクへスライドし、義務が倍増します。** 構築前に分類してください。',
        items: [
          '**限定リスク（ほとんどのローカルRAG）** — 文書をretrieve・要約して人を補助し、人が判断します。義務は主に透明性：ユーザーはAIと対話していることを認識する必要があり、生成コンテンツはそのことが識別可能で、操作的・欺瞞的設計は禁止。',
          '**高リスク** — retrievalがActで列挙された領域（信用スコアリング、雇用スクリーニング、教育入学、必須公的サービス、法執行、移民、司法、生体識別、重要インフラ）の自動化決定に供されるケース。治療を推奨する臨床意思決定支援RAGは高リスク。臨床プロトコル要約RAGで医師がガイドラインを速く読むのを助けるものは高リスクではありません。',
          '**高リスクの義務** — ライフサイクルにわたるリスクマネジメントシステム、データガバナンス（学習・検証・テストデータの文書化）、技術文書、自動イベントロギング、ユーザーへの透明性と情報、人間の監督、精度と頑健性、上市前の適合性評価、市場投入後モニタリング。',
          '**汎用AIの考慮** — 汎用LLM（オープンソース問わず）の利用は、高リスク義務をモデルプロバイダに移しません。デプロイヤ（あなたの組織）が、そのモデルで構築するシステムの高リスク義務を負います。',
          '**禁止行為** — 社会スコアリング、無差別な顔画像スクレイピング、職場・学校での感情認識、特定のリアルタイム生体カテゴリ化。どれだけローカルで動かそうと、これらは対象外です。',
          '**監査成果物としての文書** — 高リスクシステムに必要な技術ファイルは一度きりの納品物ではなく、生きた文書です。変更管理プロセスと連動させ、モデル昇格、embedder変更、ACL変更ごとに反映させてください。',
        ],
        callouts: [
          {
            type: 'note',
            text: '高リスクと限定リスクの境界はユースケースが引き、技術ではありません。同じベクトルストアと同じモデルが、研究アシスタント展開では限定リスクで、HRスクリーニング展開では高リスクになり得ます。プラットフォーム単位ではなくユースケース単位で分類してください。',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'DPIA要件（第35条）',
        content:
          '**データ保護影響評価（第35条）は、データ主体に高リスクをもたらす可能性のある処理に対して必須です。** 規制対象のローカルRAGのほとんどが範囲内です。DPIAをコンプライアンスの後付け成果物ではなく、設計ドキュメントとして扱ってください。',
        items: [
          '**必須となるとき** — 法的効果を伴うプロファイリングを含む系統的かつ広範な評価、特別カテゴリの個人データ（医療、法的、生体、人種、政治、宗教、組合）の大規模処理、公的領域の系統的監視。各国規制当局がDPIAを必ず要する処理リストを公表しています — 自分のものを確認してください。',
          '**DPIAの範囲** — 目的および適法性、処理活動の記述、必要性と比例性、データ主体へのリスク評価、緩和策と残存リスク、DPOとの協議、残存リスクが高い場合は処理開始前に規制当局と協議。',
          '**RAG固有のリスク：** retrieveされたchunkからの個人再識別、人に影響する不正確な情報の生成、ログやバックアップ経由の漏洩、忘れられる権利の削除完全性、コレクション間の汚染、power userへの過大なアクセス。',
          '**文書化すべき緩和策** — 上記の6統制、加えて適法性が同意または正当な利益の場合のchunkレベルの黒塗り・仮名化、リハーサル証拠付き削除runbook、定義されたケイデンスのアクセスレビュー。',
          '**レビュアー** — DPOが承認、緩和後の残存リスクが高いままなら規制当局と協議。署名されたDPIAは、システムが高リスクでもある場合はEU AI Act適合文書とともに技術ファイルへ。',
          '**生きた文書** — コーパスが大きく拡張するとき、モデルやembedderが変わるとき、アクセス境界が変わるとき、またはベースラインとして毎年DPIAを再実施。変更管理プロセスに連動させてください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'プロジェクト2週目に書かれるDPIAは計画ツールです。10週目に書かれるDPIAは防御文書です。前者の方がはるかに有用で、最終残存リスクを下げる設計変更を浮上させがちです。デプロイ後ではなく、調達決定前にDPIAを始めてください。',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'ドイツ固有の留意点（Datenschutz）',
        content:
          '**ドイツのデータ保護実務は、GDPRベースラインの上にBDSG-Neu、業界別規則、BSI-Grundschutzバウシュタイン、Betriebsratの共同決定権を重ねます。** 一般的なGDPRを満たすRAG展開でも、これらを見落とすとドイツのレビューで落ちることがあります。',
        items: [
          '**Betriebsratの共同決定** — §87 BetrVGにより、従業員のパフォーマンスや行動を監視するシステムは、展開前にBetriebsratとの合意を要します。従業員作成コンテンツ（メール、社内文書）に対するRAGは典型的にこれを発動させます。設計時にBetriebsratを巻き込み、合意（Betriebsvereinbarung）を適法性ファイルに含めてください。',
          '**業界別の守秘** — §203 StGBは職業上の守秘義務違反（弁護士、医師、税理士、監査人）を犯罪化します。守秘義務に拘束されないスタッフや外部processorに保護対象クライアントデータをさらすRAG展開は、民事ではなく刑事問題になり得ます。これらの業界ではOn-PremまたはAir-Gappedパターンが安全な選択です。',
          '**TelemediengesetzおよびTTDSG** — エンドユーザーデバイスに触れる外向きテレメトリはGDPRだけでなくTTDSGにも規律されます。Air-Gapはこの問いを取り除きます。egress制御展開では、外向き呼び出しが同意済み、必要、または厳格に技術的なものであることを検証する必要があります。',
          '**BSI-Grundschutzバウシュタイン** — 行政機関やKRITIS事業者には、BSI-Grundschutz-Kompendiumが拘束的な基準を提供します。中堅企業でも、OPS.1.2.4（クラウド利用）、OPS.2.1（アウトソーシング）、APP.4.4（Webアプリ）等のバウシュタインはアーキテクチャ文書の有用な参照になります。',
          '**監督機関（連邦・州レベル）** — 民間部門のデータ保護監督は州レベルで組織されます。第36条に基づく協議が必要なら、所管のLandesbeauftragte für Datenschutzに相談してください。',
          '**文書言語** — ドイツの監督機関は英語の文書を受け付けますが、主要なユーザー向け成果物（プライバシー通知、透明性開示、Betriebsrat合意）は法的・実務的理由からドイツ語で書くべきです。',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: '本番化前のコンプライアンスチェックリスト',
        content:
          '**本番ロールアウト前にこのリストを最後まで歩いてください。** 各項目は実監査からの実故障モードです。実際に使われるよう意図的に短くしてあります。',
        items: [
          '☐ **適法性が文書化されている** — 各カテゴリのソースデータについて：同意、契約、法的義務、生命に関わる利益、公的任務、または比例衡量を伴う正当な利益。',
          '☐ **DPIAがDPOによって承認**、リハーサル済み削除runbookが添付されている。',
          '☐ **処理活動の記録（第30条）** が更新され、RAGシステム、データカテゴリ、保管、受信者、移転メカニズム（ローカルRAGでは典型的になし）を含む。',
          '☐ **6統制がエンド・ツー・エンドで検証** — Air-Gapまたはegress allowlist、RBAC、監査ログ、暗号化、系統、削除パス。',
          '☐ **外向きパケットキャプチャ** が24時間soakテストでクリーン、アプリ更新ごとに繰り返される。',
          '☐ **IDプロバイダ統合** が各アクセス層の実ユーザーでテスト済み、機微コレクションアクセスは別の昇格を要する。',
          '☐ **バックアップが取得され、復元が実際にテスト** されている — ステータスパネルでの確認だけでなく分離ハードでの実テスト。',
          '☐ **忘れられる権利runbookがリハーサル済み** — 合成データでソースストア、ベクトルインデックス、キャッシュ済みembedding、retrievalログ保管をカバー。',
          '☐ **EU AI Act分類** 確認済み（限定リスク vs 高リスク）、高リスクなら技術ファイル準備済み。',
          '☐ **ベンダー契約（あれば）レビュー済み** — DPAが第28条準拠、sub-processor列挙、顧客データをカバーする学習禁止条項。',
          '☐ **Betriebsrat合意** が、従業員作成コンテンツが範囲に含まれる場合に存在する（ドイツ、類似のEUルールが他国にも）。',
          '☐ **透明性通知** がユーザー向け平易な言葉で起草され、AI支援、human-in-the-loop、データフローを説明。',
          '☐ **インシデント対応runbook** がRAG固有シナリオを含めて更新 — インデックス漏洩、ログ改ざん、削除失敗、下流系統を壊すモデル交換。',
          '☐ **四半期アクセスレビュー** がスケジュール・割当済み、本番化前に最初のレビューがカレンダーに。',
          '☐ **年次DPIAリフレッシュ** がスケジュール済み、変更管理プロセスに連動。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある誤り',
        items: [
          '**誤り1：「ローカル」を「準拠」の同義語として扱う。** On-Prem運用は移転とprocessorの問いを解きますが、適法性、DPIA、監査ロギング、データ主体権は解きません。コンプライアンスは多層プログラムであり、展開選択ではありません。',
          '**誤り2：システムが「ただの検索ツール」だからとDPIAをスキップする。** 特別カテゴリの個人データを大規模にingestする検索ツールこそが第35条の対象です。DPIAをスキップすれば監査時の防御もスキップしたことになります。',
          '**誤り3：適法性を確認せずにクエリテキストをログする。** クエリは個人を参照すれば自身が個人データです。設計時に処理目的がクエリロギングをカバーするか決め、カバーしないならハッシュとメタデータのみログしてください。',
          '**誤り4：削除runbookでキャッシュ済みembeddingを忘れる。** ソース削除は機能します。ベクトルインデックス再構築も機能します。プラットフォームがパフォーマンス目的で追加したキャッシュ層、retrievalログ内のembedding指紋、チャットストアの回答履歴は見落とされる箇所です。',
          '**誤り5：power userにコレクションACLのバイパスを許す。**「管理者は全部見える」は便利でとても一般的ですが、監査が悪化する単独最大の理由でもあります。特権アクセス自体がアクセス制御され、時間制限され、利用ごとに正当化される必要があります。',
          '**誤り6：複数案件・クライアントで1ワークスペースを使い回す。** 引用とコンテキストの相互汚染は、外部に見られる前から守秘失敗です。1ワークスペース1案件・1クライアント、ACL分離、保管分離。',
          '**誤り7：Air-Gapを買って、テストに私物スマホを差す。** Air-Gap境界はデータを越境させ得る人を含む必要があります。エンドポイントポリシーは統制の一部であり、別件ではありません。',
          '**誤り8：モデルとembedderの選択を「設定して放置」と扱う。** すべてのアップグレードはDPIA、系統、監査トレイルへの含意を持つ変更管理イベントです。最初の本番展開前にアップグレードワークフローを計画してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GDPR全文（公式）](https://gdpr-info.eu/) — 一般データ保護規則の完全テキスト、条文ごとの注釈付き。',
          '[EU AI Act全文](https://artificialintelligenceact.eu/) — リスク分類フレームワークを含む完全な規則テキスト。',
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — AIリスク評価に適用可能な米連邦ガバナンスフレームワーク。',
          '[BDSG-Neu（ドイツ連邦データ保護法）](https://www.gesetze-im-internet.de/bdsg_2018/) — 業界別追加を含むGDPRのドイツでの実装。',
          '[EDPBによるDPIAガイドライン](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — DPIAをいつ・どう実施するかに関する欧州データ保護理事会の指針。',
          '[METI AI事業者ガイドライン](https://www.meti.go.jp/) — 経済産業省のAIガバナンス指針、日本企業のAI展開に対するベストプラクティス。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'RAGをローカルで動かせば自動的にGDPRを満たしますか？',
            a: 'いいえ。ローカルホスティングは越境移転の問いを解きprocessorリストを縮小しますが、第5条のGDPR原則（適法性、公正性、透明性、目的制限、データ最小化、正確性、保管制限、完全性と機密性、説明責任）は依然適用されます。第25条（データ保護バイデザインおよびバイデフォルト）、第30条（処理活動記録）、第32条（処理の安全性）、第35条（DPIA）はモデルがどこで動くかに関係なく適用されます。ローカルRAGは強力な出発点であって、完成したコンプライアンスpostureではありません。',
          },
          {
            q: 'ローカルRAG展開のEU AI Act準拠には何が必要ですか？',
            a: 'ユースケースを限定リスクか高リスクに分類してください。ほとんどのretrievalアシスタント展開は限定リスクで、透明性義務（ユーザーがAIとの対話を認識、生成コンテンツが識別可能）を要します。retrievalが列挙領域（信用、雇用、教育、公的サービス、法執行、移民、司法、生体、重要インフラ）の自動化決定に供される瞬間、展開は高リスクとなり、完全な義務（リスクマネジメントシステム、データガバナンス、技術文書、自動イベントロギング、透明性、人間の監督、精度と頑健性、適合性評価、市場投入後モニタリング）が適用されます。',
          },
          {
            q: 'ローカルRAGにDPIAは必要ですか？',
            a: '第35条のDPIAは、データ主体に高リスクをもたらす可能性のある処理に必須です — 特別カテゴリの個人データ（医療、法的、生体、人種、政治、宗教、組合）の大規模処理や、法的効果を伴う系統的プロファイリングを含みます。規制対象のローカルRAG（法務、医療、金融、HR調査）のほとんどが範囲です。早期にDPIAを実施し、設計ドキュメントとして扱い、緩和策 — 特に削除runbook — を本番化前にリハーサルしてください。',
          },
          {
            q: 'ローカルRAG展開を部門間で共有できますか？',
            a: 'はい、注意して。コレクションレベルのアクセス制御、単一IDプロバイダに対するユーザー単位認証、各部門の利用に明確な適法性が床面です。DPIAは最も広い処理目的セットをカバーする必要があります。ある部門が異なる適法性を要する場合（例：HR調査が正当な利益で、臨床スタッフが公的任務で運用するとき）、別コレクション・別アクセスグループの方が、複雑なACLを持つ単一コレクションより防衛しやすいです。',
          },
          {
            q: '誰がどの文書にアクセスしたかをどう監査しますか？',
            a: '各retrievalをユーザーID、タイムスタンプ、retrieveされたchunk ID、その由来文書IDとともにログします。イベントを、アプリケーションサーバーとは別の管理下にある書込制限ログストアへ転送します（職務分離）。改ざん検知のためにハッシュチェーン付きappend-onlyストレージを使用します。保管期間は規制当局の調査ウィンドウと業界別ルールに整合させます — 規制業界では6〜7年が一般的です。',
          },
          {
            q: 'Open-source embeddingモデルはGDPRセーフに使えますか？',
            a: '原則として可能、3条件付きで。第一に、重みは一度ダウンロードしてハッシュにピン留めし、何が動いていたか証明できるように。第二に、inferenceはテレメトリや外向き呼び出しなく完全にローカル — 文書だけでなくパケットキャプチャで検証してください。第三に、モデルカードとライセンスをレビューし、機密業務利用と矛盾する条項（一部のopen-weightライセンスはデータ種別やユースケースに制限を付けます）がないことを確認します。規制対象展開の現実的なデフォルトは、検証済みembedderの小リストをallowlistし、アップグレードごとに再レビューすることです。',
          },
          {
            q: 'AI生成出力のデータ系統はどうなりますか？',
            a: '各生成回答は、それを生んだchunk ID、モデル識別子、プロンプトテンプレートバージョン、タイムスタンプを参照する必要があります。chunkはさらに文書IDへ、文書IDはソース文書へ解決されます。このチェーンが、回答の検証、異議に対する防御、削除請求の履行、後の結果再現を可能にします。それなしでは「AIがそう言った」が監査時の防御となり、それは防御ではありません。',
          },
          {
            q: 'クライアント機密文書にローカルRAGを使えますか？',
            a: 'しばしば可、時に不可。多くの外部弁護士契約、M&A NDA、患者データ契約は、データが定義された境界を越えず特定の統制が満たされる限り、AI支援レビューを許可します。ローカルRAGは構造的に境界要件を満たします。契約固有の統制リスト（暗号化、アクセス、監査、保管、違反通知）は引き続き遵守する必要があります。契約がAI処理を完全に禁じる場合、どの展開パターンも修復できません — 禁止はAIがローカルかリモートかを問わず適用されます。',
          },
          {
            q: 'コンプライアンスにはどのloggingが必要ですか？',
            a: 'Ingestイベント（文書ID、ハッシュ、ソース、アップロード者、タイムスタンプ、分類）、Retrievalイベント（ユーザーID、クエリメタデータまたはハッシュ、retrieveされたchunk ID、回答参照、モデル/embedder識別子）、管理イベント（モデル昇格、embedder変更、ACL変更、ユーザー/グループ変更）、運用イベント（バックアップ、復元、鍵ローテーション）。すべてのイベントを別ログストアへ転送、append-only、ハッシュチェーン化、案件・業界要件に従って保管。',
          },
          {
            q: 'RAGで忘れられる権利の請求にどう対応しますか？',
            a: '各層を通して削除を導く文書化されたrunbookで：ソース文書ストア、ベクトルインデックス、キャッシュ済みembedding、retrievalログ保管（適法性がログエントリ削除を許す場合）、チャット履歴に保存された回答。ソース削除は単純、ベクトルインデックス再構築はよく理解されています。キャッシュ済みembeddingと回答履歴がほとんどの展開が見落とす箇所です。runbookを合成データでリハーサルし、リハーサルを文書化し、runbookをインシデント対応プロセスに連動させて、実請求がリハーサル済みシーケンスを発動し即興にならないようにしてください。',
          },
          {
            q: 'ローカルLLMデプロイメントでMETI AIガバナンス2024をどう適用しますか？',
            a: '経済産業省の「AI事業者ガイドライン（2024年）」は、AI開発者・AI提供者・AI利用者に対し、リスクベースアプローチ、データガバナンス、人間中心の意思決定、説明責任、適切なログ管理を求めます。ローカルRAG展開は構造的にこのガイドラインのいくつかの推奨を満たしやすい設計です：データが社外に出ないため越境移転リスクが除外され、自社ハードウェア上のログ保管によりトレーサビリティが確保され、組織内権限管理によりアクセス統制が明確になります。実務上のステップは：(1)RAGの「AI利用者」としての位置付けを明確化、(2)社内AIガバナンス文書（基本方針、リスク管理プロセス、責任者の任命）を整備、(3)上記の6統制を実装してMETIガイドラインの「説明可能性」「監査可能性」を満たす、(4)機微情報（個人情報保護法上の要配慮個人情報、不正競争防止法上の営業秘密）を扱うコレクションには厳格なRBACとアクセスログを適用、(5)モデル・embedder変更ごとに影響評価を実施。GDPRと併存する場合、両方の最も厳格な要件を採ることでメティとEU両当局に対する防御が成立します。',
          },
          {
            q: '日本企業のエンタープライズ展開で、ローカル推論で機微情報のセキュリティをどう確保しますか？',
            a: '日本のエンタープライズ展開では、On-Premまたは国内データセンター内のプライベートクラウドが現実的な選択肢です。具体的には：(1)ハードウェア — 国内ベンダーのGPUサーバー（NVIDIA H100/L40S搭載モデル等）または国内DCホスティングを採用し、物理的データレジデンシーを確保、(2)認証 — 既存のActive Directory、Keycloak、Microsoft Entra IDとフェデレーション、MFAを必須化、(3)ネットワーク — 専用VLAN内に閉じ、egress allowlistでモデル更新サーバー以外を遮断、(4)監査 — 既存のSIEM（Splunk、Microsoft Sentinel等）に統合、改ざん検知のためのハッシュチェーン付きログを実装、(5)業界別準拠 — 金融機関ならFISC安全対策基準、医療なら3省2ガイドライン（厚労省・経産省・総務省の医療情報安全管理関連ガイドライン）、政府なら政府情報システムのためのセキュリティ評価制度（ISMAP）に整合させる、(6)サプライチェーン — モデル重みのハッシュピン留めと、embedder・LLMのライセンス確認（Apache 2.0、MIT等の業務利用可ライセンスを優先）、(7)組織体制 — DPO相当の責任者を任命、四半期アクセスレビューを実施。典型的な中堅・大企業展開は、エンタープライズGPU 2基のオンプレサーバー、Active Directory連携、Qdrant/Weaviate/pgvectorのいずれかをベクトルストアとして採用、Splunk/Sentinelへのログ集約という構成で、8〜12週間で本番化可能です。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI：最良のローカルRAG](/ja/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — どのセルフホストプラットフォームがどのコンプライアンスpostureに合うか、テレメトリとライセンスに関する注釈付き。',
          '[業務ワークフローとEUコンプライアンスのためのローカルAIエージェント](/ja/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — retrievalが人間の読者ではなく自動化ワークフローステップを供給するときの隣接コンプライアンス話題。',
          '[ローカルLLMでのメール・カレンダー自動化](/ja/power-local-llm/local-llm-email-and-calendar-automation) — 同じ統制セットが適用される隣接業務自動化パターン。',
          '[ローカルRAGでPDFをステップバイステップ](/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step) — On-Premとラップトップパターンの実践的な実装ウォークスルー。',
          '[1,000件のPDFとローカルでチャット](/ja/power-local-llm/chat-with-1000-pdfs-locally) — On-Prem上限を押し上げる大規模コーパスの運用ガイダンス。',
          '[Power Local LLMハブ](/ja/power-local-llm) — セルフホストLLM展開の完全なガイドライブラリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: '面向业务数据的本地 RAG：合规处理机密文档的 AI 架构（2026）',
    seoTitle: '本地 RAG 处理机密业务文档：合规与架构指南 (2026)',
    intro:
      '法务、医疗和金融团队都面临同一个难题：最值得用 AI 检索的文档，恰恰是不能离开内部网络的那些。本文给出一套自托管 RAG 的架构、控制集与部署模式决策矩阵，覆盖 GDPR、欧盟 AI 法案、HIPAA 与德国 Datenschutz 要求 — 写给希望把一份文档交给 IT 团队、并让他们立刻知道该如何落地的合规负责人。',
    metaDescription:
      '面向法务、医疗、金融团队的本地 RAG 合规架构。涵盖审计日志、DPIA 范围与三种部署模式对比，可直接交付 IT 团队。',
    twitterDescription:
      '满足 GDPR 与欧盟 AI 法案的本地 RAG。空气隔离、审计日志、数据血缘、DPIA 范围与三种部署模式 — 合规官交给 IT 的那篇文章。',
    audience:
      '在欧盟与中国境内、负责机密文档（合同、病历、审计档案、并购数据室、监管通信）自托管 RAG 建设的合规负责人、数据保护官、法务顾问与 IT 架构师。',
    readTime: '阅读约15分钟',
    educationalLevel: 'Advanced',
    primaryTerm: '合规本地 RAG',
    targetKeywords: [
      'gdpr 合规 rag',
      '本地 rag 业务数据',
      'eu ai act rag',
      '机密文档 私有 rag',
      'on-premise rag 部署',
      '数据安全法 rag',
      'dpia 本地 rag',
    ],
    leadAnswerBlock:
      '**自托管 RAG 要满足 GDPR 与欧盟 AI 法案要求，必须从第一天就内置六项控制：空气隔离或严格出站控制；按用户认证并启用基于角色的文档访问；覆盖入库与检索的不可篡改审计日志；静态与传输全程加密；从分块到源文档的确定性数据血缘；以及覆盖向量索引和缓存嵌入的书面删除路径。部署模式（单用户笔记本、本地服务器、私有欧盟云）决定哪些控制易实施、哪些需要工作量 — 而不是这些控制是否必要。**',
    quickAnswerTop: {
      en: {
        question:
          '本地 RAG 默认就符合 GDPR 吗？受监管团队应选择哪种部署模式？',
        answer:
          '本地 RAG 默认并不符合 GDPR。把模型搬到本地解决了跨境数据传输问题、缩短了处理者清单，但 GDPR 第 5、25、30、32 与 35 条仍然适用：合法性基础、数据最小化、审计日志、处理安全性，以及对大规模处理特殊类别数据的系统进行 DPIA。建议组合：单独律师/医生/审计师与一次性案件评审用单用户笔记本；5–50 名用户、几千份文档的部门级知识库用本地服务器；多部门或多法人部署、需要多区域容灾时用私有欧盟云（主权区域、客户管理密钥、仅 EU 区域）。无论选择哪种，六项控制保持不变 — 仅实施成本不同。',
        bullets: [
          '本地托管解决跨境传输（第 44–49 条）并缩短处理者清单 — 但单凭它无法解决合法性基础、DPIA 与数据主体权利。',
          '单用户笔记本 — 适合独立律师、医生、审计师与单次案件评审。规模化审计困难；空气隔离最容易。',
          '本地服务器 — 适合 5–50 名用户的部门级部署。完整审计日志、RBAC、备份与灾难恢复。IT 投入最大。',
          '私有欧盟云 — 适合需要容灾的多法人部署。主权区域 + 客户管理密钥 + 不在客户数据上训练的合同条款必备。',
          '只要大规模处理特殊类别数据，第 35 条 DPIA 即为强制要求 — 与部署模式无关。',
          '被遗忘权请求必须传播到源文档、向量索引和缓存嵌入 — 上线前就要设计删除路径，而非等请求到来后再补。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '部署模式对比', anchor: '#deployment-comparison' },
      { label: '选择部署模式', anchor: '#which-deployment' },
      { label: '为何为机密数据选本地 RAG', anchor: '#why-local-rag' },
      { label: '六项必备控制', anchor: '#required-controls' },
      { label: '空气隔离与出站控制', anchor: '#air-gap' },
      { label: '能经受审查的审计日志', anchor: '#audit-logging' },
      { label: '从分块到源文档的数据血缘', anchor: '#data-lineage' },
      { label: '加密与访问控制', anchor: '#encryption-access' },
      { label: '单用户笔记本模式', anchor: '#laptop-pattern' },
      { label: '本地服务器模式', anchor: '#on-prem-pattern' },
      { label: '向量数据库选择', anchor: '#vector-db-comparison' },
      { label: '私有欧盟云模式', anchor: '#private-cloud-pattern' },
      { label: '欧盟 AI 法案分级', anchor: '#eu-ai-act' },
      { label: 'DPIA 要求（第 35 条）', anchor: '#dpia-requirements' },
      { label: '德国地区注意事项（Datenschutz）', anchor: '#germany-datenschutz' },
      { label: '上线前合规清单', anchor: '#compliance-checklist' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '引用来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**本地托管必要但不充分。** 在自有硬件上运行模型与向量库解决了跨境传输与处理者数量问题，但 GDPR 第 5、25、30、32、35 条仍然适用。合法性基础、数据最小化、审计日志、处理安全性与 DPIA 不会因为数据留在内部就变为可选项。',
          '**六项控制不可妥协**，与部署模式无关：空气隔离或严格出站控制、按用户认证并启用基于角色的访问、不可篡改审计日志、静态与传输加密、从分块回溯到源文档的确定性血缘，以及覆盖向量索引和缓存嵌入的书面删除路径。',
          '**三种部署模式覆盖大部分受监管场景。** 独立专业人员与案件评审用单用户笔记本；5–50 用户的部门级知识库用本地服务器；多法人部署、容灾优先于完全空气隔离时用私有欧盟云（主权区域、客户管理密钥）。',
          '**欧盟 AI 法案将大多数本地 RAG 归为有限风险** — 但一旦检索结果被自动决策（信用评分、招聘筛选、福利资格判定）使用，部署立刻滑入高风险，触发完整合规评估、上市后监测与人工监督义务。',
          '**第 35 条 DPIA 是强制的**：只要 RAG 大规模摄入特殊类别数据（健康、法律、生物特征、政治、工会信息），或系统产生具有法律效力的自动决策。跳过 DPIA 等于跳过审计辩护。',
          '**被遗忘权是大多数部署失败的删除测试。** 源文档简单；向量索引可重建；缓存嵌入、检索日志和聊天历史中的回答 — 这些是被忽略的部分，也是监管机构必问的部分。',
          '**开源嵌入模型原则上符合 GDPR**，但需满足三个条件：(a) 权重一次性下载并固定到哈希；(b) 推理完全本地、无遥测；(c) 模型卡和许可经过审查，没有与机密业务使用相冲突的条款。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**6 项强制控制：** 空气隔离、RBAC、审计日志、加密、数据血缘、删除路径。',
          '**3 种部署模式：** 单用户笔记本（独立专业人员）、本地服务器（5–50 用户）、私有欧盟云（多法人）。',
          '**DPIA 强制（第 35 条）：** 大规模处理特殊类别数据（健康、法律、生物特征）时。',
          '**欧盟 AI 法案：** 大多数本地 RAG = 有限风险；检索喂给自动决策（信用、招聘、福利）即为高风险。',
          '**中国《数据安全法》(2021)** 与《个人信息保护法》(PIPL) 要求重要数据本地化处理；本地 RAG 天然满足该结构性要求。',
          '**被遗忘权 / 删除请求** 必须覆盖源文档、向量索引、缓存嵌入与回答历史。',
          '**开源嵌入模型** 仅在权重固定、推理完全本地、许可审查通过后才符合 GDPR。',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: '部署模式对比',
        content:
          '每种模式都可以做到合规；变化的是控制成本与故障模式。请选择匹配用户数、文档敏感度与容灾需求的最简单模式。',
        columns: ['控制', '单用户笔记本', '本地服务器', '私有欧盟云'],
        rows: [
          {
            '控制': '空气隔离（无出站网络）',
            '单用户笔记本': '简单 — 关闭网络',
            '本地服务器': '可行 — VLAN + 防火墙',
            '私有欧盟云': '困难 — 仅出站白名单',
          },
          {
            '控制': '审计日志（谁、什么、何时）',
            '单用户笔记本': '手动 — 仅 OS 级别',
            '本地服务器': '强 — 集中式日志管道',
            '私有欧盟云': '强 — 云原生日志',
          },
          {
            '控制': '数据血缘（分块 → 源）',
            '单用户笔记本': '仅本地文件',
            '本地服务器': '管道完全可追溯',
            '私有欧盟云': '完整 — 跨区域',
          },
          {
            '控制': 'EU 数据驻留',
            '单用户笔记本': '本质 — 物理位置',
            '本地服务器': '本质 — 物理位置',
            '私有欧盟云': '配置 — 需主权区域',
          },
          {
            '控制': '按用户 RBAC',
            '单用户笔记本': '单用户 — 不适用',
            '本地服务器': '身份提供者 + 群组',
            '私有欧盟云': 'IAM + SSO + 集合级 ACL',
          },
          {
            '控制': '备份与灾难恢复',
            '单用户笔记本': '加密外置磁盘',
            '本地服务器': '磁带或异地备份',
            '私有欧盟云': '跨可用区复制',
          },
          {
            '控制': '初始成本',
            '单用户笔记本': '仅硬件 — 低',
            '本地服务器': '服务器 + 集成 — 中',
            '私有欧盟云': '订阅 + 部署 — 中',
          },
          {
            '控制': '持续成本',
            '单用户笔记本': '无 — 系统管理工时',
            '本地服务器': 'IT 运维 + 电力 + 散热',
            '私有欧盟云': '按月持续',
          },
          {
            '控制': '最佳适用',
            '单用户笔记本': '独立专业人员、案件评审',
            '本地服务器': '5–50 用户、部门 KB',
            '私有欧盟云': '多法人、需容灾的部署',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: '选择部署模式',
        content:
          '**正确选择取决于用户数、文档敏感度、审计就绪压力以及内部 IT 容量。** 下面这张速查表覆盖大多数实际情况。',
        columns: ['您的情况', '建议'],
        rows: [
          {
            '您的情况': '一次处理一个案件的独立律师、医生或审计师',
            '建议': '单用户笔记本',
          },
          {
            '您的情况': '3–5 名指定评审人、有固定结束日期的并购数据室',
            '建议': '单用户笔记本或本地（按文档量决定）',
          },
          {
            '您的情况': '10–30 人合规团队共享监管通信档案',
            '建议': '本地服务器',
          },
          {
            '您的情况': '医院科室为 50 名医务人员构建临床指南助手',
            '建议': '本地服务器',
          },
          {
            '您的情况': '在多个欧盟国家的子公司间运行同一套 RAG 的多法人集团',
            '建议': '私有欧盟云（主权区域 + 客户管理密钥）',
          },
          {
            '您的情况': '需 24/7 可用性与灾备方案的保险公司',
            '建议': '私有欧盟云',
          },
          {
            '您的情况': '处理涉密或受限数据的政府机构',
            '建议': '仅空气隔离的本地部署 — 云不在范围内',
          },
          {
            '您的情况': '6 周内要应对监管审计辩护',
            '建议': '本地服务器（最快展示出已掌控）',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: '为何为机密数据选本地 RAG',
        content:
          '**本地 RAG 优于云 LLM-as-a-Service 不是立场，而是 GDPR 风险评估的形态决定的。** 云 RAG 在很多场景可行；处理机密业务数据时，它额外引入五类风险，而本地 RAG 通过架构本身就消除了它们。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地 RAG 让机密文档保留在自有硬件上，同时为团队提供 AI 驱动的检索 — 数据不出大楼、第三方处理者不接触、跨境传输问题不存在。',
          },
          {
            type: 'plain-terms',
            text: '想象一下：法务团队可以用自然语言检索 1 万份案件档案 — 但文档从未离开机房。这就是本地 RAG：AI 在您的硬件上读取文档，在您的硬件上回答问题，没有任何东西被发送出去。合规优势不是功能，而是架构本身。',
          },
        ],
        items: [
          '**跨境传输（第 44–49 条）。** 把个人数据发往非欧盟处理者需要标准合同条款、传输影响评估，并能回答接收司法辖区是否有可触及该数据的传唤权力。本地 RAG 不传输数据 — 问题不出现。',
          '**子处理者扩散（第 28 条）。** 云 LLM 提供商通常依赖超大规模云基础设施、内容审核服务与可观察性供应商。每一个都是子处理者，必须列示、签约并审计。本地 RAG 默认零子处理者。',
          '**训练数据泄露。** 许多云 LLM 条款保留使用客户提示进行模型改进的权利，除非购买付费企业版并核实"不训练"条款。本地 RAG 运行您自己控制权重的模型；没有任何东西离开主机。',
          '**客户合同中的保密条款。** 外部律师协议、并购 NDA 与患者数据合同往往禁止把受保护材料传输给第三方处理者。本地 RAG 直接绕开此类条款。',
          '**司法传唤与法律程序暴露。** 存于云的文档可被针对云提供商的司法程序强制提交，且数据控制者可能无法及时获悉披露义务。从未离开您内部的文档，只能从您处获取。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本地 RAG 不是所有工作负载的正确答案。公开信息研究、营销草稿生成、对开源代码库的代码助手 — 这些通常用云 LLM 更合适，因为 GDPR 暴露低、模型质量差距重要。本文的论点专门针对机密业务数据：法务、医疗、金融、人力资源、监管通信与商业秘密。',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: '六项必备控制',
        content:
          '**这六项控制是底线。** 任何受监管的部署都需要全部六项；部署模式只改变实施方式。漏掉任意一项，是审计失败最常见的原因。',
        numberedItems: [
          {
            title: '空气隔离或严格出站控制',
            whyItMatters:
              '确认文档与嵌入不会通过出站调用泄漏 — 遥测 SDK、模型更新探针、崩溃报告、内容审核回调、字体第三方 CDN。要么完全禁用网络访问（真正空气隔离），要么仅允许签名更新服务器的出站白名单。',
          },
          {
            title: '按用户认证 + 基于角色的访问',
            whyItMatters:
              '在监管机构追问之前，您必须能回答"谁访问了哪份文档"。SSO 对接身份提供者、按群组管理集合访问、按案件需要细化到文档级 ACL。共享账号不是控制，是等待发生的审计失败。',
          },
          {
            title: '覆盖入库与检索的不可篡改审计日志',
            whyItMatters:
              '每份文档：谁上传、何时、源路径、哈希。每次查询：谁问的、问了什么（如允许）、检索到哪些分块、来自哪些文档 ID、返回的回答是什么。日志须防篡改 — 仅追加、签名、保留期至少覆盖监管机构调查窗口。提示级别的审计追踪 — 版本控制、变更日志、回滚 — 见[提示版本控制工作流](/zh/prompt-engineering/prompt-version-control-workflows)。',
          },
          {
            title: '静态与传输加密',
            whyItMatters:
              '主机磁盘加密、内部服务间调用 TLS、能扛住笔记本被盗或管理员账号被攻陷的密钥管理。云部署使用客户管理密钥。否则一次设备失窃就会变成第 33 条下的可通报数据泄露。',
          },
          {
            title: '从分块到源文档的确定性数据血缘',
            whyItMatters:
              '每个被检索的分块都必须能回溯到其源文档、页面、章节和版本。这才让您能 (a) 验证回答；(b) 履行删除请求；(c) 在生成摘要被质询时进行法律辩护。"我们无法重现哪个分块产生了哪个回答"对监管机构不可接受。',
          },
          {
            title: '覆盖向量索引与缓存嵌入的书面删除路径',
            whyItMatters:
              '被遗忘权请求必须从源系统传播到向量索引、缓存嵌入与检索日志保留。多数部署能干净地处理源端删除，却忘了其余环节。上线前就要文档化删除剧本，并用合成数据演练。',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: '空气隔离与出站控制',
        content:
          '**空气隔离意味着主机没有出站网络路径；出站控制意味着只允许严格白名单。** 两者都可接受；选择您运维能持续支撑的最强模式。',
        items: [
          '**真正空气隔离** — 无 DHCP、不解析公网 DNS、无出站 TCP。更新通过管理员物理接入的签名介质完成。适合涉密工作、特定医院网络以及威胁模型包含恶意依赖的部署。',
          '**出站白名单** — 仅允许出站到一小串命名目标（模型更新服务器、身份提供者、内部日志收集器）。其余流量在防火墙丢弃。这是大多数受监管部门级部署的实用默认。',
          '**平台需检查项：** 默认零遥测、推理过程无出站调用、UI 无字体 CDN、无发送负载的崩溃报告。在测试台用抓包或类似 Little Snitch 的工具验证后再上生产。',
          '**更新治理** — 模型权重、嵌入器权重、应用代码与 OS 补丁都要通过受控更新窗口。批准更新的管理员书面签字、变更入日志。',
          '**常见空气隔离破坏：** 第三方 UI 组件捆绑的分析 SDK；应用界面的字体 CDN；启动时执行的"检查更新"探针。所以才需要验证步骤 — 不要默认相信任何默认值。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在主机上对开启且空闲的应用做 24 小时抓包。任何不在白名单上的出站都是发现项。每次应用更新都重做 — 发布说明常常低估新增的出站调用。',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: '能经受审查的审计日志',
        content:
          '**审计日志是监管机构最先翻看的产物。** 它必须就每次检索回答两个问题：谁问了，系统给了什么。否则您只能用言辞辩论；有了正确日志，您就能拿出凭据。',
        items: [
          '**入库事件：** 文档 ID、哈希（SHA-256）、文件名、源路径、上传者、时间戳、分类标签、大小、页数、所属群组、保留类。入库时即打标 — 大型语料的回溯分类既艰苦又少能完整。',
          '**检索事件：** 查询 ID、用户 ID、时间戳、检索到的分块 ID（及其来源文档 ID）、检索得分、最终回答哈希、模型标识、嵌入器标识、使用的 top-K。查询文本本身敏感 — 仅在处理目的覆盖时记录；否则只记哈希与时间戳。',
          '**管理事件：** 模型晋升、嵌入器变更、索引重建、用户/群组变更、ACL 变更、访问策略变更。每条事件由责任管理员签名。',
          '**防篡改：** 仅追加日志、哈希链（每条引用前一条的哈希）、带外签名密钥、定期与不同管理员或一次写介质上的副本核对。',
          '**保留期：** 与监管机构调查窗口对齐 — 至少覆盖案件保留期；受监管行业常见 6–7 年；行业规则更长则更长。',
          '**管道：** 应用产出结构化事件；转发器送至独立、写入受限的日志库。应用服务器永远不应有删除或重写日志条目的权限 — 职责分离才让日志可信。',
        ],
        callouts: [
          {
            type: 'note',
            text: '记录查询文本本身就是 GDPR 议题 — 查询本身可能含个人数据（如"汇总患者 X 的病史"）。设计阶段决定您的处理目的是否覆盖查询日志；不覆盖则只记审计与运维诊断所需的元数据。',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: '从分块到源文档的数据血缘',
        content:
          '**血缘是其他控制的脊梁。** 没有它，删除请求会失败，回答验证不可能，审计追踪崩塌。从首次入库就构建血缘，不要事后补。',
        items: [
          '**文档级血缘：** 每份文档有稳定的内部 ID、内容哈希、入库时间戳、所属、分类、保留类。原文件留在源系统，RAG 系统持有引用而非主拷贝。',
          '**分块级血缘：** 每个分块引用其父文档 ID、页码（PDF）、章节（结构化文档）、字符偏移、长度与分块策略版本。重新分块时（您一定会做），旧分块墓碑标记而非原地删除 — 让旧检索日志仍可解析。',
          '**嵌入级血缘：** 每条嵌入向量引用其分块 ID 和嵌入器标识。更换嵌入器时，旧向量保留至新向量验证完成且引用过它们的案件结案，方可清除。',
          '**回答级血缘：** 每条生成回答引用产出它的分块 ID、模型标识、提示模板版本与时间戳。当用户问"这个回答从哪来"，系统一键解析 分块 → 文档 → 页码。',
          '**重建索引而不破坏血缘：** 重建保留文档 ID 并递增分块策略版本。即使在线索引更新了，旧分块 ID 在检索日志中仍可解析。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '每季度测试血缘链。从审计日志随机选一次检索，逐级回溯：分块 ID → 文档 ID → 源系统中的原文件 → 保留类。任何环节断裂，应在下次监管检查前修复 — 而非检查中。',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: '加密与访问控制',
        content:
          '**静态加密、传输加密，以及对接现有身份提供者的访问控制。** 这些都是成熟控制；失败模式是漏掉三层中的某一层，而非把选定的层做差。',
        items: [
          '**静态加密** — 主机全盘加密（Linux 上 LUKS、Windows 上 BitLocker、macOS 上 FileVault 用于笔记本）。服务器还要加密承载向量库与入库暂存的分区。云部署用客户管理密钥并按策略轮换。',
          '**传输加密** — 任何服务间跳转都要 TLS，包括 localhost。密码套件策略对齐行业基线。威胁模型需要时启用 mTLS — 通常云部署的服务到服务间。',
          '**身份认证** — 对接现有身份提供者（OIDC、SAML）的 SSO。生产环境无本地账号。具备管理或敏感集合访问权限的用户强制 MFA。',
          '**授权** — 集合级群组访问；案件需要时启用文档级 ACL（并购数据室、雇佣调查等）。检索流水线必须在查询时强制 ACL — 不是仅 UI。看不到文档的用户也不应拿到其分块。',
          '**管理员访问** — 任何能读或重建索引、查看审计日志、修改 ACL 的账号都要纳入特权访问管理。带审计理由的即时提权优于长期管理员权限。',
          '**端点安全** — 笔记本部署须用受管理设备（MDM 注册、加密、强制锁屏策略）。文档库已解密、无人值守留在咖啡馆的独立专业人员笔记本，是您不愿提交的 GDPR 泄露。',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: '单用户笔记本模式',
        content:
          '**单用户笔记本是最容易做到空气隔离、最难规模化的模式。** 适合独立专业人员与单次案件评审；不适合任何需要超越单一用户或抗用户离职的场景。',
        items: [
          '**硬件** — 工作站级笔记本，具备全盘加密、独立 GPU（或近年的统一内存机型）、至少 32 GB 内存。模型与嵌入器要与向量库缓存共驻内存。按 VRAM 选择硬件与模型可参考 [本地 LLM 硬件指南](/zh/local-llms/local-llm-hardware-guide-2026)。',
          '**软件** — 自包含的桌面 RAG 应用本地运行；权重一次性下载并固定哈希的开源 LLM；开源嵌入器；运行在加密磁盘上的本地向量库。适合本地 RAG 的开源模型对比见 [Ollama 顶级开源模型](/zh/local-llms/top-open-source-models-ollama)。',
          '**网络姿态** — 工作时空气隔离；仅在显式签名更新时重新连接。把 OS 防火墙配置为默认拒绝所有出站，并为更新流程开放显式例外。',
          '**文档处置** — 源文档放加密磁盘；按案件分目录；每周加密备份到异地外置驱动器。',
          '**审计姿态** — OS 级审计日志（登录、文件访问、外设事件）作为底层。应用级事件在本地服务器模式更易；笔记本模式以 OS 日志为主，并以案件级人工记录补充。',
          '**限制** — 单用户笔记本不是多用户平台。共享笔记本、共享账号或把文档库拷给同事，会同时破坏审计姿态与合法性基础。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对处理机密案件的独立专业人员，单用户笔记本模式确实是最强的隐私姿态 — 优于任何云、强于许多本地部署。代价是运维：笔记本损坏时，案件继承您备份纪律的恢复时长。',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: '本地服务器模式',
        content:
          '**本地服务器是受监管部门级 RAG 的主力模式。** 可扩展到 5–50 用户与几千份文档，支持完整审计日志，留在物理边界内。代价是真实的 IT 运维投入。',
        items: [
          '**硬件** — 配备 1–2 块企业级 GPU（小语料工作站级 GPU 也可）、冗余磁盘、ECC 内存与 UPS 的服务器。规划存储为原始语料的 2–4 倍，覆盖向量、索引、日志与备份。',
          '**网络** — 企业防火墙后的专用 VLAN；按威胁模型决定出站白名单或完全空气隔离。仅企业网内部访问，无公网入站。',
          '**软件栈** — 自托管 RAG 平台（独立服务器镜像或容器化部署）、开源 LLM 作为聊天模型、开源嵌入器、按语料规模选择的向量库。应用服务器、向量库与日志转发器以独立进程独立服务账号运行。',
          '**身份** — 与企业身份提供者联邦；群组成员驱动集合访问；敏感集合走附加审批流。',
          '**备份与灾备** — 每晚增量备份文档库与向量索引；每周全量；IT 保管异地副本。文档化恢复剧本至少每年演练。',
          '**运维** — 按变更管理策略制定补丁窗口；季度访问评审；为被遗忘权请求演练删除剧本；记录可保留血缘的模型与嵌入器升级路径。',
          '**容量规划** — 几千份文档与 5–50 并发用户在单台中端 GPU 服务器上运行良好。再多就规划更强主机或迁移到私有云模式。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本地 RAG 最常因非技术原因失败：从未验证过的备份；IT 共享的管理员账号；没人测过的 UPS；两个月静默丢事件的日志转发器。技术控制比运维卫生更易做到位。',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: '本地 RAG 的向量数据库选择',
        content:
          '**向量库选择鲜少决定合规 — 但塑造运维成本、规模上限以及删除剧本能否干净落地。** 大多数受监管部署在以下六者中选择。',
        columns: ['向量数据库', '类型', 'EU 自托管', '最佳 RAG 模式'],
        rows: [
          {
            '向量数据库': '**Chroma**',
            '类型': '开源、轻量',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '笔记本 + 小型本地',
          },
          {
            '向量数据库': '**Qdrant**',
            '类型': '开源、高性能',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '本地服务器，过滤密集',
          },
          {
            '向量数据库': '**Weaviate**',
            '类型': '开源、功能完整',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '本地 + 混合搜索',
          },
          {
            '向量数据库': '**Milvus**',
            '类型': '开源、企业级',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '大规模本地部署',
          },
          {
            '向量数据库': '**pgvector**',
            '类型': 'PostgreSQL 扩展',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '已使用 Postgres 的团队',
          },
          {
            '向量数据库': '**Pinecone**',
            '类型': '托管 SaaS',
            'EU 自托管': '⚠️ 美国托管',
            '最佳 RAG 模式': '仅私有欧盟云（有保留意见）',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: '私有欧盟云模式',
        content:
          '**私有欧盟云模式使用主权区域云提供商、客户管理密钥、仅 EU 数据驻留，并签订不在客户数据上训练 AI 的合同条款。** 适合多法人部署、需多区域容灾、以及缺乏完整本地运维能力的团队。',
        items: [
          '**提供商选择** — 超大规模云的欧盟主权产品或欧洲云提供商。DPA 必须列出每个子处理者；若任一子处理者在 EEA 之外，须处理传输机制。即使直接处理者位于欧盟，Schrems II 类传输影响分析仍要纳入档案。',
          '**区域** — 仅 EU，并提供明确的数据驻留承诺。跨区复制仅至其他 EU 区域。即使临时、即使是备份，也不得故障切换至美国区域。',
          '**加密** — 客户管理密钥并定期轮换；提供商支持时启用自带密钥；密钥访问事件与云提供商运维日志分离记录。',
          '**网络** — 私有 VPC、无公网入站；仅通过私有连接（专线或 VPN）从企业网访问；任何出站依赖纳入白名单。',
          '**身份** — 与企业 IdP 联邦；云原生 IAM 绑定到用户身份，不绑定共享服务账号；检索流水线在集合层强制 ACL。',
          '**日志** — 云原生审计日志接入既有 SIEM；应用审计事件单独摄入；防篡改保留期满足监管期望。',
          '**合同** — DPA 须符合第 28 条，列出子处理者，必要时处理 SCCs，并包含明确的不在客户数据上训练的条款（覆盖 LLM 权重及检索、遥测、支持等周边服务）。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '私有欧盟云模式因引入第三方处理者，看起来不如本地严格 — 但配合主权区域、客户管理密钥、合同性"不训练"条款与适当出站控制，可在可用性与审计姿态上匹敌甚至超过本地。合规档案更厚；运维风险更小。',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: '欧盟 AI 法案分级：有限风险 vs 高风险',
        content:
          '**大多数本地 RAG 在欧盟 AI 法案下属于有限风险 — 但只要检索结果被自动决策影响人类，分级即升至高风险，义务成倍增加。** 在动手前先分级。',
        items: [
          '**有限风险（多数本地 RAG）** — 系统检索并汇总文档以辅助人类，由人做决策。义务以透明性为主：用户须知正在与 AI 交互、生成内容须可识别、不得有操纵或欺骗性设计。',
          '**高风险** — 检索喂给法案列举领域的自动决策：信用评分、招聘筛选、教育录取、关键公共服务、执法、移民、司法、生物识别、关键基础设施。推荐治疗的临床决策辅助 RAG 是高风险；帮医生更快读指南的临床指南摘要 RAG 不是。',
          '**高风险义务** — 全生命周期风险管理体系、数据治理（训练/验证/测试数据文档化）、技术文档、自动事件日志、对用户的透明与告知、人工监督、准确性与稳健性、上市前合规评估、上市后监测。',
          '**通用 AI 考量** — 使用通用 LLM（开源或其他）不会把高风险义务转嫁给模型提供方。部署方（贵组织）承担用该模型构建之系统的高风险义务。',
          '**禁止行为** — 社会评分、未经定向的人脸图像爬取、工作场所与学校的情绪识别、特定的实时生物特征分类。无论部署多么本地，这些都不可触碰。',
          '**文档作为审计产物** — 高风险系统所需技术档案不是一次性交付，而是活文档。绑定到变更管理流程，让每次模型晋升、嵌入器变更、ACL 修改都反映其中。',
        ],
        callouts: [
          {
            type: 'note',
            text: '高风险与有限风险的边界由用例划，不由技术划。同一向量库与同一模型，在研究助手部署中是有限风险，在 HR 筛选部署中即为高风险。按用例分级，不按平台分级。',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'DPIA 要求（第 35 条）',
        content:
          '**数据保护影响评估（第 35 条）针对可能给数据主体带来高风险的处理强制执行。** 多数受监管的本地 RAG 在范围内。把 DPIA 当作设计文档，而非事后合规材料。',
        items: [
          '**何时强制** — 包含具有法律效力之画像的系统性、广泛评估；大规模处理特殊类别数据（健康、法律、生物特征、种族、政治、宗教、工会）；公共区域的系统性监控。各国监管机构会发布始终需要 DPIA 的处理清单 — 请核对您所在国。',
          '**DPIA 范围** — 目的与合法性基础；处理操作描述；必要性与比例性；对数据主体的风险评估；缓解措施与剩余风险；与 DPO 协商；剩余风险高时，开展处理前与监管机构协商。',
          '**RAG 特定风险** 须处理：从检索分块对个人再识别；产生影响个人的不准确信息；通过日志或备份泄露；被遗忘权删除完整性；跨集合污染；高权限用户访问范围过宽。',
          '**应文档化的缓解措施** — 上述六项控制；合法性基础为同意或正当利益时进行分块级脱敏或假名化；带演练证据的删除剧本；约定节奏的访问评审。',
          '**评审者** — DPO 签字；缓解后剩余风险仍高时与监管机构协商。已签字的 DPIA 与欧盟 AI 法案合规文档一并归入技术档案（若系统也属高风险）。',
          '**活文档** — 语料显著扩展、模型或嵌入器变更、访问边界变更，或每年作为基线时，重新执行 DPIA。绑定到变更管理流程。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '项目第二周写的 DPIA 是规划工具；第十周写的是辩护文件。前者更有用，且常浮现降低最终剩余风险的设计变更。在采购决策之前启动 DPIA，而非部署之后。',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: '德国地区注意事项（Datenschutz）与中国合规对照',
        content:
          '**德国数据保护实务在 GDPR 基线之上叠加 BDSG-Neu、行业规则、BSI-Grundschutz 模块以及职工委员会的共决权。** 满足通用 GDPR 的 RAG 部署，在德国评审中仍可能因下列点被驳回。',
        items: [
          '**职工委员会（Betriebsrat）共决** — 根据 §87 BetrVG，凡监控员工绩效或行为的系统在部署前需职工委员会同意。覆盖员工撰写内容（邮件、内部文档）的 RAG 通常触发该条。设计阶段就让职工委员会介入；协议（Betriebsvereinbarung）成为合法性基础档案的一部分。',
          '**行业保密** — §203 StGB 将违反职业保密义务（律师、医生、税务顾问、审计师）入罪。把客户/患者保护数据暴露给非保密义务人员或外部处理者，可能不仅是民事问题，而是刑事问题。这些行业更安全的选择是本地或空气隔离模式。',
          '**Telemediengesetz（TTDSG）与遥测** — 触及终端用户设备的出站遥测不仅受 GDPR 规制，也受 TTDSG。空气隔离让该问题不存在；出站受控部署须验证每次出站调用都已同意、必要或纯技术。',
          '**BSI-Grundschutz 模块** — 对于政府机构与 KRITIS 运营者，BSI-Grundschutz-Kompendium 提供约束性基准。即便在中型企业，OPS.1.2.4（云使用）、OPS.2.1（外包）与 APP.4.4（Web 应用）等模块仍是架构文档的有用参考。',
          '**监管机关（联邦与各州）** — 私营部门数据保护监管按州组织。在第 36 条协商必要时联系所属州数据保护专员（Landesbeauftragte für Datenschutz）。',
          '**中国本地化对照** — 对于在中国境内运营或处理境内数据的部署，《数据安全法》(2021)、《个人信息保护法》(PIPL) 与 CAC 规则要求重要数据本地化、跨境数据传输安全评估。本地 RAG 通过架构本身满足"重要数据存储于境内"原则；同时建议参考国家标准 GB/T 35273（个人信息安全规范）与等保 2.0 三级标准（涉及金融、医疗、政府场景时通常为强制要求）。',
          '**文档语言** — 德国监管机关接受英文文档，但关键的面向用户的产物（隐私通知、透明度声明、职工委员会协议）出于法律与实务考虑应以德文编写。',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: '上线前合规清单',
        content:
          '**任何生产环境上线前，端到端走完此清单。** 每一项都是真实审计中的真实失败模式；清单刻意保持简短，以便真正被使用。',
        items: [
          '☐ **合法性基础已记录** — 每类源数据：同意、合同、法定义务、生命利益、公共任务，或带利益衡量测试的正当利益。',
          '☐ **DPO 已签署 DPIA**，并附演练过的删除剧本。',
          '☐ **处理活动记录（第 30 条）** 已更新，纳入 RAG 系统、数据类别、保留、接收方与传输机制（本地 RAG 通常无）。',
          '☐ **六项控制端到端验证**：空气隔离或出站白名单、RBAC、审计日志、加密、血缘、删除路径。',
          '☐ **出站抓包** 在 24 小时浸泡测试中干净；每次应用更新后重做。',
          '☐ **身份提供者集成** 用每个访问层的真实用户测试通过；敏感集合访问需独立提权。',
          '☐ **备份已生成、恢复已实测** — 在隔离硬件上真实测试，不是只看状态面板。',
          '☐ **被遗忘权剧本演练** — 用合成数据覆盖源系统、向量索引、缓存嵌入与检索日志保留。',
          '☐ **欧盟 AI 法案分级** 已确认（有限风险 vs 高风险）；高风险则技术档案就位。',
          '☐ **供应商合同（如有）已审阅**：DPA 符合第 28 条、列出子处理者、含覆盖客户数据的"不训练"条款。',
          '☐ **职工委员会协议** 在涉及员工撰写内容时已就绪（德国；其他欧盟国家有相似规则）。',
          '☐ **透明度通知** 用面向用户的语言说明 AI 辅助、人在回路与数据流。',
          '☐ **应急响应剧本** 已更新，覆盖 RAG 特有场景：索引泄露、日志篡改、删除失败、模型替换破坏下游血缘。',
          '☐ **季度访问评审** 已排期与指派；上线前完成首次评审。',
          '☐ **年度 DPIA 复评** 已排期，并绑定到变更管理流程。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**错误 1：把"本地"等同于"合规"。** 本地解决传输与处理者问题，但解决不了合法性基础、DPIA、审计日志或数据主体权。合规是分层项目，不是一个部署选择。',
          '**错误 2：因为"只是搜索工具"就跳过 DPIA。** 大规模摄入特殊类别数据的搜索工具正是第 35 条所覆盖。跳过 DPIA 等于跳过审计辩护。',
          '**错误 3：未审合法性基础就记录查询文本。** 当查询提及个体时，查询本身就是个人数据。设计阶段决定处理目的是否覆盖查询日志；不覆盖则只记哈希与元数据。',
          '**错误 4：删除剧本里漏掉缓存嵌入。** 源端删除可行；向量索引重建可行。平台为性能加的缓存层、检索日志中的嵌入指纹、聊天库中的回答历史 — 这些是被忽略之处。',
          '**错误 5：允许高权限用户绕过集合 ACL。** "管理员能看到一切"既方便又常见；也是审计失败最大的单一原因。特权访问本身必须受访问控制、限时与按使用合理化。',
          '**错误 6：一个工作区复用于多个案件或客户。** 引用与上下文交叉污染在外人尚未看到时就已是保密失败。一个集合一个案件或客户；ACL 分离；保留分离。',
          '**错误 7：买了空气隔离，却把私人手机插上来测试。** 空气隔离边界必须包含能跨越它的人。终端策略是控制的一部分，不是单独议题。',
          '**错误 8：把模型与嵌入器选择当成"一次到位"。** 每次升级都是带 DPIA、血缘与审计影响的变更管理事件。在首次生产部署前规划升级流程。',
        ],
      },
      sources: {
        id: 'sources',
        title: '引用来源',
        items: [
          '[GDPR 全文（官方）](https://gdpr-info.eu/) — 通用数据保护条例完整条文，含逐条注释。',
          '[欧盟 AI 法案全文](https://artificialintelligenceact.eu/) — 含风险分级框架的完整法规文本。',
          '[NIST AI 风险管理框架](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — 适用于 AI 风险评估的美国联邦治理框架。',
          '[BDSG-Neu（德国联邦数据保护法）](https://www.gesetze-im-internet.de/bdsg_2018/) — 在 GDPR 基础上叠加行业规则的德国实施法。',
          '[EDPB DPIA 指南](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — 欧洲数据保护委员会关于何时与如何开展 DPIA 的指引。',
          '[中国《数据安全法》(2021)](http://www.npc.gov.cn/) — 全国人大常委会关于数据安全的基础法律，含重要数据保护与跨境传输规定。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '在本地运行 RAG 是否自动满足 GDPR？',
            a: '不会。本地托管解决跨境传输并缩短处理者清单，但 GDPR 第 5 条原则（合法、公平、透明、目的限制、数据最小化、准确性、存储限制、完整性与保密性、问责）仍然适用。第 25 条（设计与默认的数据保护）、第 30 条（处理活动记录）、第 32 条（处理安全性）和第 35 条（DPIA）无论模型在哪里运行都适用。本地 RAG 是稳固起点，不是已完工的合规姿态。',
          },
          {
            q: '本地 RAG 部署的欧盟 AI 法案合规需要什么？',
            a: '把用例归类为有限风险或高风险。多数检索助手部署属于有限风险，需透明义务：用户须知正在与 AI 交互、生成内容须可识别。一旦检索喂给已列举领域（信用、招聘、教育、公共服务、执法、移民、司法、生物特征、关键基础设施）的自动决策，部署即为高风险，需履行完整义务：风险管理体系、数据治理、技术文档、自动事件日志、透明度、人工监督、准确性与稳健性、合规评估、上市后监测。',
          },
          {
            q: '我需要为本地 RAG 做 DPIA 吗？',
            a: '第 35 条 DPIA 在可能给数据主体带来高风险的处理上是强制的 — 包括大规模处理特殊类别数据（健康、法律、生物特征、种族、政治、宗教、工会）以及有法律效力的系统性画像。多数受监管的本地 RAG（法务、医疗、金融、HR 调查）在范围内。尽早启动 DPIA、把它视作设计文档、并在上线前演练缓解措施 — 尤其是删除剧本。',
          },
          {
            q: '本地 RAG 部署能否跨部门共享？',
            a: '可以，但需谨慎。集合级访问控制、对单一身份提供者的按用户认证、为每个部门用途明确合法性基础 — 这是底线。DPIA 须覆盖最广的处理目的；若某部门需另一种合法性基础（如 HR 调查走正当利益、临床人员走公共任务），分集合分访问群组比单集合配复杂 ACL 更易守。',
          },
          {
            q: '如何审计谁访问了哪份文档？',
            a: '记录每次检索的用户 ID、时间戳、检索到的分块 ID 与其来源文档 ID。把事件转发到与应用服务器不同管理员管控、写入受限的独立日志库（职责分离）。使用仅追加存储与哈希链使篡改可检测。保留期与监管机构调查窗口及行业规则对齐 — 受监管行业常见 6–7 年。',
          },
          {
            q: '开源嵌入模型用得是否符合 GDPR？',
            a: '原则上可以，需三个条件。第一，权重一次性下载并固定哈希，可证明运行中是什么。第二，推理完全本地、无遥测或出站调用 — 用抓包验证，不要只信文档。第三，审阅模型卡与许可，排除与机密业务用途冲突的条款（部分 open-weight 许可对数据类型或用例附加限制）。受监管部署的实用默认是把白名单收敛到少数已审核嵌入器，并在每次升级时重新审核。',
          },
          {
            q: 'AI 生成输出的数据血缘怎么处理？',
            a: '每条生成回答必须引用产出它的分块 ID、模型标识、提示模板版本与时间戳。分块再解析到文档 ID，文档 ID 再解析到源文档。这条链让您能验证回答、在质询下辩护、履行删除请求并稍后重现结果。没有它，"AI 这么说"就成为审计辩护 — 而那不是辩护。',
          },
          {
            q: '可以用本地 RAG 处理客户机密文档吗？',
            a: '常常可以，有时不能。许多外部律师协议、并购 NDA 与患者数据合同允许在数据不离开既定边界并满足某些控制时进行 AI 辅助评审。本地 RAG 通过架构满足边界要求；合同特定的控制清单（加密、访问、审计、保留、泄露通知）仍须遵守。当合同完全禁止 AI 处理时，任何部署模式都修不了 — 禁止令对本地或远程 AI 同样适用。',
          },
          {
            q: '为合规需要什么样的日志？',
            a: '入库事件（文档 ID、哈希、来源、上传者、时间戳、分类）、检索事件（用户 ID、查询元数据或哈希、分块 ID、回答引用、模型/嵌入器标识）、管理事件（模型晋升、嵌入器变更、ACL 变更、用户/群组变更）与运维事件（备份、恢复、密钥轮换）。所有事件转发到独立日志库、仅追加、哈希链化，并按案件与行业要求保留。',
          },
          {
            q: '如何在 RAG 中处理被遗忘权请求？',
            a: '用一份贯穿各层的文档化剧本：源文档库、向量索引、缓存嵌入、检索日志保留（合法性基础允许删除日志条目时）以及聊天历史中的所有回答。源端删除直接；向量索引重建已被理解；缓存嵌入与回答历史是多数部署遗漏之处。用合成数据演练剧本、记录演练，并把剧本绑定到应急响应流程，让真实请求触发已演练序列、而非临场发挥。',
          },
          {
            q: '使用本地 RAG 需要遵守中国《数据安全法》和《个人信息保护法》吗？',
            a: '需要，且本地 RAG 在结构上对二者尤为友好。《数据安全法》(2021) 第 21 条建立数据分类分级制度，要求对"重要数据"采取强化保护；第 31 条规定"重要数据"的境内存储原则；跨境传输须经安全评估。《个人信息保护法》(PIPL) 第 38–40 条对个人信息出境提出严格条件（安全评估、认证或标准合同备案）。本地 RAG 把模型推理与向量库都留在境内基础设施上，从架构层面满足"重要数据存储于境内"与"避免不必要跨境传输"的原则。落地建议：(1) 完成数据分类分级，将敏感个人信息（如医疗、金融、生物识别）和重要数据明确标记并隔离；(2) 部署符合等级保护 2.0 的安全控制（金融、医疗、政府场景通常对应三级，关键信息基础设施可能对应四级）；(3) 与个人信息保护影响评估（PIPIA）联动 — 类似 DPIA，须在处理特殊类型个人信息或自动化决策前完成；(4) 对接 CAC（国家网信办）的合规框架，包括关键信息基础设施识别、年度风险评估、跨境数据出境申报；(5) 文档语言以中文为主，关键告知与同意条款须本地化；(6) 与 GDPR 并行时，取两者中更严格的要求作为统一基线，可同时满足中国与欧盟监管诉求。',
          },
          {
            q: '本地推理如何满足中国大型企业的合规要求？',
            a: '中国大型企业的合规要求通常涵盖三层：法律合规（数据安全法、PIPL、网络安全法、行业监管）、技术合规（等保 2.0、密评、信创要求）以及行业合规（金融业的 JR/T 0223、医疗业的 HIE 标准、央国企的国产化目录）。本地 RAG 部署的典型落地路径：(1) 硬件 — 优先选用国产 GPU（华为昇腾、海光、寒武纪等）或合规进口 GPU，部署在境内 IDC 或私有云；金融/政务客户通常要求双活或异地灾备；(2) 模型 — 选用国产开源模型（Qwen、DeepSeek、ChatGLM、Yi、Baichuan 等系列）或经过备案的境内模型，避免使用未备案的境外模型；(3) 身份与访问 — 对接企业现有 OIDC/SAML 身份源（华为云 IAM、腾讯云 CAM、阿里云 RAM 等），强制 MFA，敏感集合走二次审批；(4) 网络 — 私有 VLAN、白名单出站、对接企业 SOC 与 SIEM（如奇安信、深信服、绿盟）；(5) 审计与日志 — 满足等保 2.0 6 个月日志保留最低要求，敏感行业通常 1–3 年；与 SOC 联动实时告警；(6) 行业特定 — 金融场景遵循"两地三中心"灾备、JR/T 0223 加密评估，医疗场景遵循《医疗机构网络安全管理办法》与三级等保，央国企遵循信创化和国密算法（SM2/SM3/SM4）要求；(7) 数据出境 — 若涉及跨境业务，对接国家网信办申报通道，签订标准合同或申请安全评估。典型大型企业项目周期为 12–20 周，从基础设施选型、模型适配、安全集成、合规备案到上线试运行，比纯云方案的 2–4 周显著长，但拿到的是可通过监管审计与等保测评的稳定架构。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI：最佳本地 RAG](/zh/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — 不同自托管平台对应不同合规姿态，附遥测与许可注释。',
          '[面向业务流程与欧盟合规的本地 AI 智能体](/zh/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — 当检索喂给自动化工作流而非人类读者时的合规话题。',
          '[本地 LLM 邮件与日历自动化](/zh/power-local-llm/local-llm-email-and-calendar-automation) — 同一控制集适用的相邻业务自动化模式。',
          '[一步步在 PDF 上做本地 RAG](/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step) — 本地与笔记本模式的实操实现走读。',
          '[本地与 1,000 份 PDF 对话](/zh/power-local-llm/chat-with-1000-pdfs-locally) — 触及本地上限的较大语料运维指引。',
          '[Power Local LLM 中心](/zh/power-local-llm) — 自托管 LLM 部署完整指南库。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'RAG local para datos empresariales: IA conforme al RGPD para documentos sensibles (2026)',
    seoTitle: 'RAG local conforme al RGPD para documentos sensibles (2026)',
    intro:
      'Los equipos jurídicos, médicos y financieros se enfrentan al mismo problema: los documentos que más valor aportaría buscar con IA son precisamente los que no pueden salir de la organización. Este artículo recoge la arquitectura, el conjunto de controles y la matriz de decisión de patrones de despliegue para un RAG autoalojado que cumple el RGPD, la Ley de IA de la UE, HIPAA y las expectativas del Datenschutz alemán — redactado para el responsable de cumplimiento que necesita enviar un único documento a su equipo de TI y que este sepa qué construir.',
    metaDescription:
      'RAG local conforme al RGPD para equipos jurídicos, médicos y financieros: arquitectura, registro de auditoría, alcance de la EIPD y 3 patrones de despliegue.',
    twitterDescription:
      'RAG local que cumple el RGPD y la Ley de IA de la UE. Air-gap, registros de auditoría, trazabilidad de datos, alcance de la EIPD y 3 patrones de despliegue — el artículo que los responsables de cumplimiento envían a TI.',
    audience:
      'Responsables de cumplimiento de la UE, delegados de protección de datos (DPD), asesores jurídicos y arquitectos de TI responsables de construir RAG autoalojados sobre documentos confidenciales — contratos, historiales de pacientes, archivos de auditoría, salas de datos de M&A, correspondencia con reguladores.',
    readTime: '15 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'RAG local conforme al RGPD',
    targetKeywords: [
      'rag conforme rgpd',
      'rag local datos empresariales',
      'ley ia ue rag',
      'rag privado documentos confidenciales',
      'despliegue rag on-premise',
      'datenschutz rag',
      'eipd rag local',
    ],
    leadAnswerBlock:
      '**Un despliegue RAG autoalojado cumple el RGPD y la Ley de IA de la UE solo cuando seis controles se integran desde el primer día: alojamiento en air-gap o con egress estrictamente controlado, autenticación por usuario con acceso a documentos basado en roles, registros de auditoría inmutables que cubran la ingesta y la recuperación, cifrado de extremo a extremo en reposo y en tránsito, trazabilidad determinista del chunk hasta la fuente, y un procedimiento de eliminación por escrito que se propague desde el almacén de origen a través del índice vectorial y cualquier embedding en caché. El patrón de despliegue (portátil de un solo usuario, servidor on-prem, nube privada en la UE) determina qué controles son sencillos y cuáles requieren trabajo — no si los controles son obligatorios.**',
    quickAnswerTop: {
      en: {
        question: '¿El RAG local cumple el RGPD por defecto y qué patrón de despliegue deben elegir los equipos regulados?',
        answer:
          'El RAG local no cumple el RGPD por defecto. Ejecutar un modelo on-premise resuelve el problema de la transferencia transfronteriza de datos y reduce la lista de encargados del tratamiento, pero los artículos 5, 25, 30, 32 y 35 del RGPD siguen siendo aplicables: base jurídica, minimización de datos, registro de auditoría, seguridad del tratamiento y una EIPD para cualquier sistema que ingiera datos de categorías especiales a gran escala. Elige el patrón de portátil de un solo usuario para profesionales individuales y revisiones puntuales; un servidor on-prem para bases de conocimiento departamentales de hasta unos miles de documentos y 5–50 usuarios; una nube privada en la UE (nube soberana, claves gestionadas por el cliente, región exclusiva en la UE) para despliegues multi-entidad donde la resiliencia multiregional importa más que un air-gap completo. Independientemente del que elijas, los seis controles son los mismos — solo cambia el coste de implementación.',
        bullets: [
          'El alojamiento local resuelve la transferencia transfronteriza (artículos 44–49) y reduce la lista de encargados del tratamiento — no resuelve por sí solo la base jurídica, la EIPD ni los derechos de los interesados.',
          'Portátil de un solo usuario — ideal para abogados, médicos, auditores individuales y revisiones puntuales. Difícil de auditar a escala; el air-gap más sencillo.',
          'Servidor on-prem — ideal para despliegues departamentales de 5–50 usuarios. Registros de auditoría reales, RBAC, copias de seguridad y recuperación ante desastres. Mayor esfuerzo de TI.',
          'Nube privada en la UE — ideal para despliegues multi-entidad que necesitan resiliencia. Región soberana + claves gestionadas por el cliente + cláusulas de no entrenamiento de IA con datos del cliente, obligatorias.',
          'Una EIPD es obligatoria en virtud del artículo 35 cuando se ingieren datos de categorías especiales a gran escala, independientemente del patrón de despliegue.',
          'Las solicitudes de derecho al olvido deben propagarse a los documentos de origen, los índices vectoriales y los embeddings en caché — diseña el procedimiento de eliminación antes de la puesta en producción, no tras recibir la primera solicitud.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Comparación de patrones de despliegue', anchor: '#deployment-comparison' },
      { label: 'Elegir un patrón de despliegue', anchor: '#which-deployment' },
      { label: 'Por qué RAG local para datos sensibles', anchor: '#why-local-rag' },
      { label: 'Los seis controles que todo despliegue necesita', anchor: '#required-controls' },
      { label: 'Air-gap y control de egress', anchor: '#air-gap' },
      { label: 'Registro de auditoría que supere una revisión', anchor: '#audit-logging' },
      { label: 'Trazabilidad de datos del chunk a la fuente', anchor: '#data-lineage' },
      { label: 'Cifrado y control de acceso', anchor: '#encryption-access' },
      { label: 'Patrón de portátil de un solo usuario', anchor: '#laptop-pattern' },
      { label: 'Patrón de servidor on-prem', anchor: '#on-prem-pattern' },
      { label: 'Opciones de bases de datos vectoriales', anchor: '#vector-db-comparison' },
      { label: 'Patrón de nube privada en la UE', anchor: '#private-cloud-pattern' },
      { label: 'Clasificación según la Ley de IA de la UE', anchor: '#eu-ai-act' },
      { label: 'Requisitos de la EIPD', anchor: '#dpia-requirements' },
      { label: 'Notas específicas para Alemania (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Lista de verificación de cumplimiento', anchor: '#compliance-checklist' },
      { label: 'Errores frecuentes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**El alojamiento local es necesario pero no suficiente.** Ejecutar el modelo y el almacén vectorial en tu propio hardware resuelve la transferencia transfronteriza de datos y reduce la lista de encargados del tratamiento, pero los artículos 5, 25, 30, 32 y 35 del RGPD siguen siendo aplicables. La base jurídica, la minimización de datos, el registro de auditoría, la seguridad del tratamiento y las EIPD no se vuelven opcionales solo porque los datos permanezcan en las instalaciones.',
          '**Seis controles son innegociables** independientemente del patrón de despliegue: air-gap o control de egress estricto, autenticación por usuario con acceso basado en roles, registros de auditoría inmutables, cifrado en reposo y en tránsito, trazabilidad determinista del chunk hasta el documento de origen, y un procedimiento de eliminación por escrito que incluya el índice vectorial y cualquier embedding en caché.',
          '**Tres patrones de despliegue cubren la mayoría de los casos de uso regulados.** Portátil de un solo usuario para profesionales individuales y revisiones puntuales; servidor on-prem para bases de conocimiento departamentales de 5–50 usuarios; nube privada en la UE (región soberana, claves gestionadas por el cliente) para despliegues multi-entidad donde la resiliencia importa más que el air-gap completo.',
          '**La Ley de IA de la UE clasifica la mayoría de los RAG locales como sistemas de riesgo limitado** — pero en el momento en que la recuperación alimenta una decisión automatizada (puntuación de solvencia, selección de personal, elegibilidad a prestaciones), el despliegue pasa a ser de alto riesgo y activa la evaluación de conformidad completa, la supervisión post-comercialización y las obligaciones de supervisión humana.',
          '**Una EIPD es obligatoria en virtud del artículo 35** para cualquier RAG que ingiera datos de categorías especiales (salud, datos jurídicos, biométricos, políticos, de afiliación sindical) a gran escala, o cualquier sistema que produzca decisiones automatizadas con efectos jurídicos. Saltarse la EIPD significa saltarse la defensa en auditoría.',
          '**El derecho al olvido es la prueba de eliminación que más despliegues suspenden.** Los documentos de origen son fáciles. Los índices vectoriales se pueden reconstruir. Los embeddings en caché, los registros de recuperación y las respuestas almacenadas en el historial de chat son las partes que se pasan por alto — y las que un regulador preguntará.',
          '**Los modelos de embedding de código abierto son seguros para el RGPD en principio**, pero solo si (a) los pesos del modelo se descargan una vez y se fijan a un hash, (b) la inferencia se ejecuta íntegramente en hardware local sin telemetría, y (c) la ficha del modelo y la licencia se revisan para detectar cláusulas que entren en conflicto con el uso empresarial confidencial.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**6 controles obligatorios** para cualquier RAG regulado: air-gap, RBAC, registros de auditoría, cifrado, trazabilidad de datos, procedimiento de eliminación.',
          '**3 patrones de despliegue:** portátil de un solo usuario (profesionales individuales), servidor on-prem (5–50 usuarios), nube privada en la UE (multi-entidad).',
          '**La EIPD es obligatoria** en virtud del artículo 35 cuando se ingieren datos de categorías especiales (salud, jurídicos, biométricos) a gran escala.',
          '**Ley de IA de la UE:** la mayoría de los RAG locales = riesgo limitado; pasa a alto riesgo cuando la recuperación alimenta decisiones automatizadas (crédito, empleo, prestaciones).',
          '**El derecho al olvido** debe propagarse a documentos de origen, índices vectoriales, embeddings en caché Y el historial de respuestas.',
          '**Co-determinación del comité de empresa (Betriebsrat)** en virtud del §87 BetrVG requerida para cualquier RAG sobre contenido generado por empleados en Alemania.',
          '**Los modelos de embedding de código abierto** solo son conformes al RGPD si los pesos están fijados, la inferencia es completamente local y la licencia ha sido revisada.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Comparación de patrones de despliegue',
        content:
          'Cada patrón puede hacerse conforme al RGPD; lo que cambia es el coste de los controles y los modos de fallo cuando algo sale mal. Elige el patrón más sencillo que se ajuste al número de usuarios, la sensibilidad de los documentos y el requisito de resiliencia.',
        columns: ['Control', 'Portátil de un solo usuario', 'Servidor on-prem', 'Nube privada en la UE'],
        rows: [
          {
            'Control': 'Air-gap (sin red de salida)',
            'Portátil de un solo usuario': 'Trivial — desactivar la red',
            'Servidor on-prem': 'Alcanzable — VLAN + cortafuegos',
            'Nube privada en la UE': 'Difícil — solo lista de egress permitido',
          },
          {
            'Control': 'Registro de auditoría (quién, qué, cuándo)',
            'Portátil de un solo usuario': 'Manual — solo a nivel de SO',
            'Servidor on-prem': 'Sólido — pipeline de logs centralizado',
            'Nube privada en la UE': 'Sólido — logging nativo en la nube',
          },
          {
            'Control': 'Trazabilidad de datos (chunk → fuente)',
            'Portátil de un solo usuario': 'Solo archivos locales',
            'Servidor on-prem': 'Pipeline completamente trazable',
            'Nube privada en la UE': 'Completa — pero abarca regiones',
          },
          {
            'Control': 'Residencia de datos en la UE',
            'Portátil de un solo usuario': 'Inherente — ubicación física',
            'Servidor on-prem': 'Inherente — ubicación física',
            'Nube privada en la UE': 'Configurada — región soberana requerida',
          },
          {
            'Control': 'RBAC por usuario',
            'Portátil de un solo usuario': 'Un solo usuario — N/A',
            'Servidor on-prem': 'Proveedor de identidad + grupos',
            'Nube privada en la UE': 'IAM + SSO + ACL por colección',
          },
          {
            'Control': 'Copia de seguridad y recuperación ante desastres',
            'Portátil de un solo usuario': 'Disco externo cifrado',
            'Servidor on-prem': 'Cinta o copia de seguridad externa',
            'Nube privada en la UE': 'Replicación multi-AZ',
          },
          {
            'Control': 'Coste inicial',
            'Portátil de un solo usuario': 'Solo hardware — bajo',
            'Servidor on-prem': 'Servidor + integración — medio',
            'Nube privada en la UE': 'Suscripción + configuración — medio',
          },
          {
            'Control': 'Coste continuo',
            'Portátil de un solo usuario': 'Ninguno — tiempo de sysadmin',
            'Servidor on-prem': 'Operaciones de TI + electricidad + refrigeración',
            'Nube privada en la UE': 'Mensualidad recurrente',
          },
          {
            'Control': 'Ideal para',
            'Portátil de un solo usuario': 'Profesionales individuales, revisiones puntuales',
            'Servidor on-prem': '5–50 usuarios, bases de conocimiento departamentales',
            'Nube privada en la UE': 'Multi-entidad, despliegues resilientes',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Elegir un patrón de despliegue',
        content:
          '**La elección correcta depende del número de usuarios, la sensibilidad de los documentos, la presión de auditoría y la capacidad interna de TI.** Este atajo de decisión cubre la mayoría de las situaciones reales.',
        columns: ['Tu situación', 'Elige'],
        rows: [
          {
            'Tu situación': 'Abogado, médico o auditor individual que revisa un asunto cada vez',
            'Elige': 'Portátil de un solo usuario',
          },
          {
            'Tu situación': 'Sala de datos de M&A con 3–5 revisores nominados y fecha de cierre definida',
            'Elige': 'Portátil de un solo usuario o on-prem (según el volumen de documentos)',
          },
          {
            'Tu situación': 'Equipo de cumplimiento de 10–30 personas que comparte un archivo de correspondencia con reguladores',
            'Elige': 'Servidor on-prem',
          },
          {
            'Tu situación': 'Departamento hospitalario que construye un asistente de protocolos clínicos para 50 empleados',
            'Elige': 'Servidor on-prem',
          },
          {
            'Tu situación': 'Grupo multi-entidad que necesita un RAG compartido entre filiales en varios países de la UE',
            'Elige': 'Nube privada en la UE (región soberana + claves gestionadas por el cliente)',
          },
          {
            'Tu situación': 'Aseguradora con requisito de disponibilidad 24/7 y plan de recuperación ante desastres',
            'Elige': 'Nube privada en la UE',
          },
          {
            'Tu situación': 'Organismo público con datos clasificados o restringidos',
            'Elige': 'Solo on-prem con air-gap — la nube queda fuera de alcance',
          },
          {
            'Tu situación': 'Defensa de auditoría ante regulador en menos de 6 semanas',
            'Elige': 'Servidor on-prem (el más rápido para demostrar control)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Por qué RAG local para datos sensibles',
        content:
          '**El argumento a favor del RAG local frente al LLM-as-a-service en la nube no es ideología — es la forma que adopta la evaluación de riesgos del RGPD.** El RAG en la nube es viable para muchos casos de uso; para datos empresariales sensibles añade cinco riesgos que el RAG local elimina por construcción.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'El RAG local mantiene tus documentos sensibles en tu propio hardware mientras proporciona a tu equipo búsqueda potenciada por IA — ningún dato sale del edificio, ningún encargado del tratamiento externo los toca, y no surge ninguna pregunta sobre transferencia transfronteriza.',
          },
          {
            type: 'plain-terms',
            text: 'Imagina que tu equipo jurídico pudiera buscar en 10.000 expedientes haciendo preguntas en lenguaje natural — pero los documentos nunca salieran de la sala de servidores. Eso es el RAG local: la IA lee tus documentos en tu hardware, responde tus preguntas en tu hardware, y nada se envía a ningún sitio. La ventaja de cumplimiento no es una característica — es la arquitectura.',
          },
        ],
        items: [
          '**Transferencia transfronteriza (artículos 44–49).** Enviar datos personales a un encargado del tratamiento fuera de la UE requiere cláusulas contractuales tipo, una evaluación del impacto de la transferencia y una respuesta creíble sobre si la jurisdicción receptora tiene poderes de citación que alcancen esos datos. El RAG local no transfiere datos — la pregunta no surge.',
          '**Proliferación de subencargados del tratamiento (artículo 28).** Los proveedores de LLM en la nube suelen depender de infraestructura de hiperescalador, servicios de moderación de contenido y proveedores de observabilidad. Cada uno es un subencargado que debe ser listado, contratado y auditado. El RAG local tiene cero subencargados por defecto.',
          '**Filtración de datos de entrenamiento.** Muchos términos de LLM en la nube se reservan el derecho de usar los prompts de los clientes para mejorar el modelo, a menos que se use un nivel enterprise de pago y se verifique la cláusula de no entrenamiento. El RAG local ejecuta modelos con pesos que tú controlas; nada sale del host.',
          '**Cláusulas de confidencialidad en contratos con clientes.** Los acuerdos con asesoría externa, los NDA de M&A y los acuerdos sobre datos de pacientes frecuentemente prohíben la transmisión del material protegido a encargados del tratamiento externos. El RAG local sortea la cláusula por completo.',
          '**Exposición a citaciones judiciales y procesos legales.** Los documentos almacenados con un proveedor en la nube pueden ser requeridos mediante un proceso legal dirigido al proveedor, con obligaciones de divulgación de las que el responsable del tratamiento puede ni siquiera ser notificado a tiempo. Los documentos que nunca salen de tus instalaciones solo pueden ser requeridos a ti.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El RAG local no es la respuesta correcta para todas las cargas de trabajo. La investigación de información pública, la generación de borradores de marketing, la asistencia de código en repositorios de código abierto — todo esto suele funcionar mejor con LLM en la nube porque la exposición al RGPD es baja y la brecha de calidad del modelo importa. El argumento de este artículo es específicamente para datos empresariales confidenciales: jurídicos, médicos, financieros, de RRHH, correspondencia con reguladores y secretos comerciales.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'Los seis controles que todo despliegue necesita',
        content:
          '**Estos seis controles son el suelo mínimo.** Todo despliegue regulado necesita los seis; el patrón de despliegue solo cambia cómo los implementas. Omitir cualquiera de ellos es la razón más frecuente por la que las auditorías salen mal.',
        numberedItems: [
          {
            title: 'Air-gap o control de egress estricto',
            whyItMatters:
              'Confirma que los documentos y embeddings no pueden filtrarse mediante llamadas salientes — SDK de telemetría, sondas de actualización del modelo, informadores de fallos, callbacks de moderación de contenido, CDN de terceros para fuentes. O bien deshabilita el acceso a la red por completo (air-gap real) o ejecuta una lista de egress permitido que solo autorice servidores de actualización firmados.',
          },
          {
            title: 'Autenticación por usuario con acceso basado en roles',
            whyItMatters:
              'Necesitas poder responder "quién accedió a qué documento" antes de que un regulador lo pregunte. Inicio de sesión único contra un proveedor de identidad, acceso por grupos a colecciones y ACL por documento donde el asunto lo requiera. Las cuentas compartidas no son un control — son un fallo de auditoría esperando a suceder.',
          },
          {
            title: 'Registros de auditoría inmutables que cubran la ingesta y la recuperación',
            whyItMatters:
              'Para cada documento: quién lo subió, cuándo, ruta de origen, hash. Para cada consulta: quién preguntó, qué se preguntó (si el logging lo permite), qué chunks se recuperaron, de qué IDs de documentos procedían, qué respuesta se devolvió. Los registros deben ser a prueba de manipulaciones — solo de adición, firmados, con una retención suficiente para cubrir la ventana de investigación de la autoridad supervisora. Para el rastro de auditoría a nivel de prompt — control de versiones, registros de cambios y reversiones — consulta [flujos de trabajo de control de versiones de prompts](https://www.promptquorum.com/es/prompt-engineering/prompt-version-control-workflows).',
          },
          {
            title: 'Cifrado en reposo y en tránsito',
            whyItMatters:
              'Cifrado de disco completo en el host, TLS para cualquier llamada interna entre servicios, y gestión de claves que sobreviva a un portátil robado o una cuenta de administrador comprometida. Claves gestionadas por el cliente para despliegues en la nube. Sin estas medidas, el robo de un dispositivo se convierte en una violación de datos notificable en virtud del artículo 33.',
          },
          {
            title: 'Trazabilidad determinista de datos del chunk a la fuente',
            whyItMatters:
              'Cada chunk recuperado debe rastrearse hasta su documento de origen, página, sección y versión. Esto es lo que permite (a) verificar la respuesta, (b) atender una solicitud de eliminación, (c) defender el sistema ante un tribunal cuando se cuestiona un resumen generado. "No podemos reproducir qué chunk causó qué respuesta" no es una respuesta aceptable para una autoridad supervisora.',
          },
          {
            title: 'Procedimiento de eliminación por escrito que incluya el índice vectorial y los embeddings en caché',
            whyItMatters:
              'Una solicitud de derecho al olvido debe propagarse desde el almacén de origen, a través del índice vectorial, hasta cualquier embedding en caché, y a través de la retención de registros de recuperación. La mayoría de los despliegues gestionan la eliminación del origen correctamente y olvidan el resto. Documenta el procedimiento de eliminación antes de la puesta en producción; practícalo con datos sintéticos.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-gap y control de egress',
        content:
          '**Air-gap significa que el host no tiene ruta de red de salida; el control de egress significa que tiene una estrictamente permitida.** Ambas son aceptables; elige el modelo más sólido que tus operaciones puedan sostener.',
        items: [
          '**Air-gap real** — sin DHCP, sin resolución DNS a destinos públicos, sin TCP de salida. Las actualizaciones se realizan mediante medios firmados que un administrador conecta físicamente. Este es el modelo correcto para trabajo clasificado, determinadas redes hospitalarias y cualquier despliegue cuyo modelo de amenazas incluya una dependencia maliciosa.',
          '**Lista de egress permitido** — la red de salida solo se permite a una pequeña lista de destinos nombrados (servidores de actualización del modelo, tu proveedor de identidad, reenviadores de logs a colectores internos). Todo el demás tráfico se descarta en el cortafuegos. Este es el valor predeterminado práctico para la mayoría de los despliegues departamentales regulados.',
          '**Qué buscar en la plataforma**: cero telemetría por defecto, sin llamadas de salida durante la inferencia, sin CDN de fuentes en la interfaz de usuario, sin informadores de fallos que envíen cargas útiles. Verifica con una captura de paquetes o una herramienta como Little Snitch en el banco de pruebas antes de pasar a producción.',
          '**Gobernanza de actualizaciones** — los pesos del modelo, los pesos del embedder, el código de la aplicación y los parches del SO pasan todos por una ventana de actualización controlada. El administrador que promueve una actualización lo firma por escrito; el cambio se registra.',
          '**Ruptura de air-gap frecuente:** un SDK de analítica incluido con un componente de interfaz de terceros, una referencia a CDN de fuentes en el chrome de la aplicación, o una sonda de "comprobar actualizaciones" que se ejecuta al iniciar. Por eso el paso de verificación importa — no asumas nada sobre los valores predeterminados.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Realiza una captura de paquetes de 24 horas en el host con la aplicación abierta y en reposo. Cualquier tráfico de salida que no esté en la lista permitida es un hallazgo. Repite esto cada vez que se actualice la aplicación — las notas de versión suelen subestimar qué nuevas llamadas de salida se han añadido.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'Registro de auditoría que supere una revisión',
        content:
          '**El registro de auditoría es el artefacto que una autoridad supervisora leerá primero.** Debe responder dos preguntas para cada recuperación: quién preguntó y qué le dio el sistema. Sin eso estás argumentando con palabras; con un logging adecuado, estás presentando recibos.',
        items: [
          '**Eventos de ingesta**: ID de documento, hash (SHA-256), nombre de archivo, ruta de origen, subido por, marca de tiempo, etiqueta de clasificación, tamaño, número de páginas, grupo propietario, clase de retención. Etiqueta cada documento en la ingesta — la clasificación retroactiva de corpus grandes es difícil y rara vez está completa.',
          '**Eventos de recuperación**: ID de consulta, ID de usuario, marca de tiempo, IDs de chunks recuperados (e IDs de documentos de los que proceden), puntuaciones de recuperación, hash de la respuesta final, identificador del modelo, identificador del embedder, top-K utilizado. El texto de la consulta en sí es sensible — regístralo solo si tu base jurídica de tratamiento lo cubre; de lo contrario, registra el hash y la marca de tiempo.',
          '**Eventos administrativos**: promoción del modelo, cambio de embedder, reconstrucción del índice, cambios de usuario/grupo, cambios de ACL, cambios de política de acceso. Cada evento firmado por el administrador responsable.',
          '**Resistencia a manipulaciones**: registro de solo adición, cadena de hashes (cada entrada hace referencia al hash de la entrada anterior), clave de firma fuera de banda, reconciliación periódica con una copia separada mantenida por un administrador diferente o en un medio de escritura única.',
          '**Retención**: se alinea con la ventana de investigación de la autoridad supervisora — como mínimo el período de retención del asunto; comúnmente seis a siete años para industrias reguladas; más donde se apliquen normas sectoriales.',
          '**Pipeline**: la aplicación emite eventos estructurados; un reenviador los envía a un almacén de logs separado con acceso de escritura restringido. El servidor de aplicaciones nunca debe tener permiso para eliminar o reescribir entradas de logs — la separación de funciones es lo que hace que el log sea creíble.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Registrar el texto de la consulta introduce su propia pregunta sobre el RGPD — una consulta puede contener en sí misma datos personales (p. ej., "resume el historial médico del paciente X"). Decide en el momento del diseño si tu base jurídica de tratamiento cubre el registro de consultas, y si no lo hace, registra solo los metadatos necesarios para auditoría y diagnóstico operativo.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Trazabilidad de datos del chunk a la fuente',
        content:
          '**La trazabilidad es la columna vertebral de todos los demás controles.** Sin ella, las solicitudes de eliminación fallan, la verificación de respuestas es imposible y el rastro de auditoría se derrumba. Integra la trazabilidad desde la primera ingesta, no después.',
        items: [
          '**Trazabilidad a nivel de documento**: cada documento tiene un ID interno estable, un hash de contenido, una marca de tiempo de ingesta, un propietario, una clasificación y una clase de retención. El archivo original permanece en el almacén de origen; el sistema RAG mantiene una referencia, no el original.',
          '**Trazabilidad a nivel de chunk**: cada chunk hace referencia a su ID de documento padre, página (para PDFs), sección (para documentos estructurados), desplazamiento de caracteres, longitud y versión de la estrategia de chunking. Cuando vuelvas a hacer chunking (lo harás), los chunks antiguos se marcan como obsoletos, no se eliminan in situ — para que los logs de recuperación antiguos sigan siendo resolubles.',
          '**Trazabilidad a nivel de embedding**: cada vector de embedding hace referencia a su ID de chunk e identificador de embedder. Cuando cambies de embedder, los vectores antiguos se conservan hasta que los nuevos sean validados y cualquier asunto que los referenciara esté cerrado; solo entonces se purgan.',
          '**Trazabilidad a nivel de respuesta**: cada respuesta generada hace referencia a los IDs de chunks que la produjeron, el identificador del modelo, la versión de la plantilla de prompt y la marca de tiempo. Cuando un usuario pregunta "¿de dónde vino esta respuesta?", el sistema resuelve chunk → documento → página con un clic.',
          '**Reindexación sin romper la trazabilidad**: las reconstrucciones preservan los IDs de documentos e incrementan las versiones de la estrategia de chunking. Los IDs de chunks antiguos siguen siendo resolubles en los registros de recuperación incluso después de que el índice activo haya avanzado.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Prueba la cadena de trazabilidad trimestralmente. Elige una recuperación aleatoria del registro de auditoría y recórrela hacia atrás: ID de chunk → ID de documento → archivo original en el almacén de origen → clase de retención. Si algún paso está roto, corrige el esquema antes de la próxima inspección supervisora — no durante ella.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'Cifrado y control de acceso',
        content:
          '**Cifrado en reposo, cifrado en tránsito y control de acceso que se mapea a tu proveedor de identidad existente.** Estos son controles bien entendidos; el modo de fallo es olvidar una de las tres capas, no implementar mal la capa elegida.',
        items: [
          '**Cifrado en reposo** — cifrado de disco completo en el host (LUKS en Linux, BitLocker en Windows, FileVault en macOS para portátiles). Para servidores, cifra también las particiones que alojan el almacén vectorial y la etapa de ingesta. Claves gestionadas por el cliente para cualquier despliegue en la nube, con rotación de claves según tu política.',
          '**Cifrado en tránsito** — TLS para cualquier salto entre servicios, incluso en localhost. Política de cifrado alineada con tu línea base sectorial. TLS mutuo donde el modelo de amenazas lo justifique — típicamente servidor a servidor en despliegues en la nube.',
          '**Autenticación** — inicio de sesión único contra tu proveedor de identidad existente (OIDC, SAML). Sin cuentas locales en producción. MFA obligatorio para cualquier usuario con acceso administrativo o a colecciones sensibles.',
          '**Autorización** — acceso basado en grupos a nivel de colección; ACL a nivel de documento donde el asunto lo requiera (p. ej., salas de datos de M&A, investigaciones de empleo). El pipeline de recuperación debe aplicar las ACL en el momento de la consulta — no solo la interfaz de usuario. Un usuario que no puede ver un documento tampoco debe recibir sus chunks en la respuesta.',
          '**Acceso administrativo** — gestión de acceso privilegiado para cualquier cuenta que pueda leer o reconstruir índices, ver registros de auditoría o cambiar ACL. La elevación justo a tiempo con justificación registrada supera a los derechos de administrador permanentes.',
          '**Seguridad de endpoint** — dispositivos gestionados para despliegues con portátil (registrados en MDM, cifrados, política de bloqueo de pantalla aplicada). Un portátil de profesional individual con el almacén de documentos descifrado y desatendido en una cafetería es la violación del RGPD que no quieres reportar.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Patrón de portátil de un solo usuario',
        content:
          '**El portátil de un solo usuario es el patrón más fácil de hacer con air-gap y el más difícil de escalar.** Adecuado para profesionales individuales y revisiones puntuales; inadecuado para cualquier cosa que deba sobrevivir a un solo usuario o a su salida.',
        items: [
          '**Hardware** — un portátil de categoría workstation con cifrado de disco completo, una GPU discreta (o una máquina reciente de memoria unificada) y al menos 32 GB de RAM. El modelo y el embedder deben caber en memoria junto con la caché del almacén vectorial. Para requisitos de hardware y selección de modelos por VRAM, consulta la [guía de hardware para LLM locales](https://www.promptquorum.com/local-llms/local-llm-hardware-guide-2026).',
          '**Software** — una aplicación RAG de escritorio autocontenida que se ejecuta localmente; un LLM de código abierto con pesos descargados una vez y fijados a un hash; un embedder de código abierto; un almacén vectorial local en el disco cifrado. Para una comparación de modelos de código abierto adecuados para RAG local, consulta [los mejores modelos de código abierto para Ollama](https://www.promptquorum.com/local-llms/top-open-source-models-ollama).',
          '**Postura de red** — con air-gap durante el trabajo; reconectado solo para actualizaciones firmadas explícitas. Configura el cortafuegos del SO para descartar todas las conexiones de salida por defecto y crea excepciones explícitas para el flujo de actualización.',
          '**Manejo de documentos** — documentos de origen en el disco cifrado; una estructura de carpetas por asunto; copias de seguridad semanales cifradas en un disco externo almacenado en un lugar diferente.',
          '**Postura de auditoría** — el registro de auditoría a nivel del SO (inicio de sesión, acceso a archivos, eventos de periféricos) es el suelo mínimo. Los eventos a nivel de aplicación son más sencillos con el patrón de servidor on-prem; para el patrón de portátil, trata el log del SO como el registro principal y complementa con notas manuales por asunto.',
          '**Limitaciones** — un portátil de un solo usuario no es una plataforma multiusuario. Compartir el portátil, compartir cuentas o copiar el almacén de documentos al portátil de un compañero rompe la postura de auditoría y la evaluación de la base jurídica.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para profesionales individuales que trabajan asuntos confidenciales, el patrón de portátil de un solo usuario es genuinamente la postura de privacidad más sólida disponible — mejor que cualquier nube y más sólida que muchos despliegues on-prem. La contrapartida es operativa: cuando el portátil falla, el asunto hereda el tiempo de recuperación de tu disciplina de copias de seguridad.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'Patrón de servidor on-prem',
        content:
          '**El servidor on-prem es el patrón de trabajo habitual para RAG departamental regulado.** Escala a 5–50 usuarios y unos pocos miles de documentos, admite registros de auditoría adecuados y permanece dentro de tu perímetro físico. El coste es trabajo real de operaciones de TI.',
        items: [
          '**Hardware** — un servidor con una o dos GPU de nivel empresarial (las GPU de categoría workstation son aceptables para corpus más pequeños), discos redundantes, memoria ECC y un SAI. Planifica 2–4× el almacenamiento de tu corpus de documentos sin procesar para cubrir vectores, índices, logs y copias de seguridad.',
          '**Red** — una VLAN dedicada detrás del cortafuegos corporativo; lista de egress permitido o air-gap completo según el modelo de amenazas. Acceso interno solo a través de la red corporativa, sin ingreso público.',
          '**Pila de software** — una plataforma RAG autoalojada (una imagen de servidor independiente o un despliegue en contenedores), un LLM de código abierto como modelo de chat, un embedder de código abierto y un almacén vectorial apropiado para el tamaño del corpus. El servidor de aplicaciones, el almacén vectorial y el reenviador de logs se ejecutan como procesos separados con cuentas de servicio separadas.',
          '**Identidad** — federada con el proveedor de identidad corporativo; la pertenencia a grupos controla el acceso a las colecciones. Las colecciones sensibles requieren flujos de aprobación adicionales.',
          '**Copia de seguridad y recuperación ante desastres** — copias de seguridad incrementales nocturnas del almacén de documentos y el índice vectorial; copias de seguridad completas semanales; copia externa mantenida por TI. Procedimiento de restauración documentado y probado al menos anualmente.',
          '**Operaciones** — ventana de parcheo según la política de gestión de cambios; revisiones de acceso trimestrales; procedimiento de eliminación para solicitudes de derecho al olvido ensayado; ruta documentada de actualización del modelo y el embedder que preserve la trazabilidad.',
          '**Planificación de capacidad** — unos pocos miles de documentos y 5–50 usuarios concurrentes caben cómodamente en un servidor GPU de gama media. Más allá de eso, planifica un host más potente o pasar al patrón de nube privada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El RAG on-prem es el patrón que con más frecuencia falla por razones no técnicas: una copia de seguridad que nunca se ha restaurado, una cuenta de administrador compartida entre el personal de TI, un SAI que nadie ha probado, un reenviador de logs que ha estado descartando eventos silenciosamente durante dos meses. Los controles técnicos son más fáciles que la higiene operativa.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Opciones de bases de datos vectoriales para RAG on-prem',
        content:
          '**La elección del almacén vectorial rara vez determina el cumplimiento — pero sí da forma al coste operativo, el techo de escala y la limpieza con que puede implementarse el procedimiento de eliminación.** La mayoría de los despliegues regulados eligen una de estas seis opciones.',
        columns: ['Base de datos vectorial', 'Tipo', 'Autoalojamiento en la UE', 'Mejor patrón de RAG'],
        rows: [
          {
            'Base de datos vectorial': '**Chroma**',
            'Tipo': 'Código abierto, ligero',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'Portátil + on-prem pequeño',
          },
          {
            'Base de datos vectorial': '**Qdrant**',
            'Tipo': 'Código abierto, alto rendimiento',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'Servidor on-prem, filtrado intensivo',
          },
          {
            'Base de datos vectorial': '**Weaviate**',
            'Tipo': 'Código abierto, completo',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'On-prem + búsqueda híbrida',
          },
          {
            'Base de datos vectorial': '**Milvus**',
            'Tipo': 'Código abierto, empresarial',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'On-prem a gran escala',
          },
          {
            'Base de datos vectorial': '**pgvector**',
            'Tipo': 'Extensión de PostgreSQL',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'Equipos que ya usan Postgres',
          },
          {
            'Base de datos vectorial': '**Pinecone**',
            'Tipo': 'SaaS gestionado',
            'Autoalojamiento en la UE': '⚠️ Alojado en EE.UU.',
            'Mejor patrón de RAG': 'Solo nube privada en la UE (con reservas)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Patrón de nube privada en la UE',
        content:
          '**El patrón de nube privada en la UE utiliza un proveedor de nube en región soberana con claves gestionadas por el cliente, residencia de datos exclusivamente en la UE y una cláusula contractual de no entrenamiento de IA que cubra los datos del cliente.** Es la respuesta correcta para despliegues multi-entidad, requisitos de resiliencia multiregional y equipos que carecen de capacidad operativa para un on-prem real.',
        items: [
          '**Selección del proveedor** — la oferta soberana en la UE de un hiperescalador o un proveedor de nube europeo. El DPA debe listar cada subencargado del tratamiento; los mecanismos de transferencia deben abordarse si algún subencargado está fuera del EEE. El análisis del impacto de la transferencia al estilo Schrems II forma parte del expediente incluso cuando el encargado inmediato tiene sede en la UE.',
          '**Región** — exclusivamente en la UE, con garantías explícitas de residencia de datos. Replicación entre regiones solo hacia otras regiones de la UE. Sin región de EE.UU. como failover, ni siquiera temporalmente, ni siquiera para copias de seguridad.',
          '**Cifrado** — claves gestionadas por el cliente con rotación; bring-your-own-key donde el proveedor lo admita; eventos de acceso a claves registrados separadamente de los logs operativos del proveedor de nube.',
          '**Red** — VPC privada sin ingreso público; acceso solo a través de conectividad privada (enlace dedicado o VPN) desde tu red corporativa; lista de egress permitido para cualquier dependencia de salida.',
          '**Identidad** — federada con tu IdP corporativo; IAM nativo de la nube vinculado a identidades de usuario, no a cuentas de servicio compartidas; ACL por colección aplicadas en el pipeline de recuperación.',
          '**Logging** — log de auditoría nativo de la nube alimentado en tu SIEM existente; ingesta separada para eventos de auditoría de la aplicación; retención a prueba de manipulaciones que cumpla las expectativas del supervisor.',
          '**Contratos** — el DPA debe cumplir el artículo 28, listar subencargados, abordar las cláusulas contractuales tipo donde sea necesario e incluir una cláusula explícita de no entrenamiento con datos del cliente que cubra tanto los pesos del LLM como cualquier servicio auxiliar (búsqueda, telemetría, soporte).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El patrón de nube privada en la UE parece más permisivo que el on-prem porque utiliza un encargado del tratamiento externo — pero con región soberana, claves gestionadas por el cliente, cláusula contractual de no entrenamiento y control de egress adecuado, puede igualar o superar al on-prem en disponibilidad y postura de auditoría. El expediente de cumplimiento es más voluminoso; el riesgo operativo es menor.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'Clasificación según la Ley de IA de la UE: riesgo limitado frente a alto riesgo',
        content:
          '**La mayoría de los despliegues de RAG local son sistemas de IA de riesgo limitado según la Ley de IA de la UE — pero en el momento en que la recuperación alimenta una decisión automatizada que afecta a una persona, la clasificación pasa a alto riesgo y las obligaciones se multiplican.** Clasifica antes de construir.',
        items: [
          '**Riesgo limitado (la mayoría de los RAG locales)** — el sistema recupera y resume documentos para asistir a un humano; el humano toma la decisión. Las obligaciones son principalmente de transparencia: los usuarios deben saber que están interactuando con una IA, el contenido generado debe ser identificable como tal, y sin diseño manipulador o engañoso.',
          '**Alto riesgo** — la recuperación alimenta una decisión automatizada en dominios que la Ley enumera: puntuación de solvencia, selección de personal, admisiones educativas, servicios públicos esenciales, aplicación de la ley, migración, justicia, identificación biométrica, infraestructura crítica. Un RAG de apoyo a la decisión clínica que recomienda tratamientos es de alto riesgo; un RAG que resume protocolos clínicos para ayudar a un médico a leer directrices más rápido no lo es.',
          '**Obligaciones de alto riesgo** — sistema de gestión de riesgos a lo largo del ciclo de vida, gobernanza de datos (datos de entrenamiento, validación y prueba documentados), documentación técnica, registro automático de eventos, transparencia e información a los usuarios, supervisión humana, medidas de precisión y robustez, evaluación de conformidad antes de la comercialización, supervisión post-comercialización.',
          '**Consideraciones sobre la IA de propósito general** — usar un LLM de propósito general (de código abierto o no) no transfiere las obligaciones de alto riesgo al proveedor del modelo. El implantador (tu organización) lleva las obligaciones de alto riesgo para el sistema que construyes con ese modelo.',
          '**Prácticas prohibidas** — puntuación social, rastreo no selectivo de imágenes faciales, reconocimiento de emociones en lugares de trabajo y centros educativos, determinada categorización biométrica en tiempo real. Estas quedan descartadas independientemente de lo localmente que las ejecutes.',
          '**Documentación como artefacto de auditoría** — el expediente técnico requerido para sistemas de alto riesgo no es un entregable único; es un documento vivo. Vincúlalo a tu proceso de gestión de cambios para que cada promoción de modelo, cambio de embedder y cambio de ACL quede reflejado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La línea entre alto riesgo y riesgo limitado la traza el caso de uso, no la tecnología. El mismo almacén vectorial y el mismo modelo pueden ser de riesgo limitado en un despliegue de asistente de investigación y de alto riesgo en un despliegue de selección de personal de RRHH. Clasifica por caso de uso, no por plataforma.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'Requisitos de la EIPD',
        content:
          '**Una Evaluación de Impacto sobre la Protección de Datos (artículo 35) es obligatoria para el tratamiento que pueda suponer un alto riesgo para los derechos y libertades de los interesados.** La mayoría de los RAG locales regulados están en el ámbito de aplicación. Trata la EIPD como el documento de diseño, no como un artefacto de cumplimiento a posteriori.',
        items: [
          '**Cuándo es obligatoria** — evaluación sistemática y exhaustiva que incluya elaboración de perfiles con efectos jurídicos; tratamiento a gran escala de datos de categorías especiales (salud, datos jurídicos, biométricos, raciales, políticos, religiosos, sindicales); monitoreo sistemático de zonas de acceso público. Las autoridades supervisoras nacionales publican listas de operaciones que siempre requieren una EIPD — consulta la tuya.',
          '**Alcance de la EIPD** — finalidad y base jurídica; descripción de las operaciones de tratamiento; evaluación de necesidad y proporcionalidad; evaluación de riesgos para los interesados; mitigaciones y riesgo residual; consulta con el DPD y (donde el riesgo residual sea alto) con la autoridad supervisora antes de iniciar el tratamiento.',
          '**Riesgos específicos del RAG** a abordar: reidentificación de individuos a partir de chunks recuperados; generación de información inexacta que afecte a una persona; filtración a través de logs o copias de seguridad; completitud de la eliminación en solicitudes de derecho al olvido; contaminación cruzada entre colecciones; acceso demasiado amplio para usuarios con muchos privilegios.',
          '**Mitigaciones a documentar** — los seis controles anteriores, más redacción o seudonimización a nivel de chunk donde la base jurídica sea el consentimiento o el interés legítimo; procedimiento de eliminación con evidencia de ensayo; revisiones de acceso en una cadencia establecida.',
          '**Revisores** — el DPD lo aprueba; la autoridad supervisora es consultada donde el riesgo residual tras la mitigación siga siendo alto. La EIPD firmada va en el expediente técnico junto con la documentación de conformidad con la Ley de IA de la UE si el sistema también es de alto riesgo.',
          '**Documento vivo** — vuelve a ejecutar la EIPD cuando el corpus se amplíe materialmente, cuando el modelo o el embedder cambie, cuando los límites de acceso cambien, o anualmente como base. Vincula esto a tu proceso de gestión de cambios.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Una EIPD redactada en la semana dos del proyecto es una herramienta de planificación. Una EIPD redactada en la semana diez es un documento defensivo. La primera es mucho más útil y tiende a sacar a la luz cambios de diseño que reducen el riesgo residual final. Comienza la EIPD antes de la decisión de adquisición, no después del despliegue.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'Notas específicas para Alemania (Datenschutz)',
        content:
          '**La práctica alemana de protección de datos superpone el BDSG-Neu, las normas sectoriales y la co-determinación del comité de empresa sobre la línea de base del RGPD.** Un despliegue de RAG que satisface el RGPD genérico puede aún así no superar una revisión alemana si se pasan por alto estos puntos.',
        items: [
          '**Co-determinación del comité de empresa (Betriebsrat)** — en virtud del §87 BetrVG, cualquier sistema que monitoree el rendimiento o el comportamiento de los empleados requiere un acuerdo del comité de empresa antes del despliegue. Un RAG sobre contenido generado por empleados (correos electrónicos, documentos internos) típicamente lo activa. Involucra al comité de empresa en el momento del diseño; el acuerdo (Betriebsvereinbarung) pasa a formar parte del expediente de base jurídica.',
          '**Confidencialidad sectorial** — el §203 StGB penaliza la violación de la confidencialidad profesional (abogados, médicos, asesores fiscales, auditores). Desplegar un RAG de forma que exponga datos de clientes protegidos a personal no vinculado o a encargados del tratamiento externos puede constituir un delito penal, no solo un asunto civil. El patrón on-prem o con air-gap es la opción más segura en estos sectores.',
          '**Telemediengesetz (TTDSG) y telemetría** — la telemetría de salida que toca los dispositivos de los usuarios finales está regulada no solo por el RGPD sino también por el TTDSG. El air-gap elimina la cuestión; los despliegues con control de egress deben verificar que cualquier llamada de salida esté consentida, sea necesaria o sea estrictamente técnica.',
          '**Expectativas de transparencia** — las normas de transparencia federales y estatales ocasionalmente requieren la divulgación de la toma de decisiones asistida por IA a los interesados. Incluso donde no sea estrictamente requerido, la divulgación en lenguaje claro de que la recuperación es asistida por IA y que el revisor humano sigue siendo responsable de la decisión es el valor predeterminado defendible.',
          '**Aufsichtsbehörden (autoridades supervisoras estatales)** — la supervisión del Datenschutz está organizada a nivel estatal para el sector privado. Contacta con el Landesbeauftragte für Datenschutz relevante donde se necesite consulta en virtud del artículo 36. Los documentos de posición de los principales Landesbeauftragte sobre herramientas de IA son insumos útiles para la EIPD.',
          '**Idioma de la documentación** — las autoridades supervisoras alemanas aceptan documentación en inglés, pero los artefactos clave dirigidos a los usuarios (avisos de privacidad, divulgaciones de transparencia, acuerdos del comité de empresa) deben estar en alemán por razones tanto legales como prácticas.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Lista de verificación de cumplimiento antes de la puesta en producción',
        content:
          '**Recorre esta lista de principio a fin antes de cualquier despliegue en producción.** Cada elemento es un modo de fallo real de una auditoría real; la lista es intencionadamente corta para que realmente se use.',
        items: [
          '☐ **Base jurídica documentada** para cada categoría de datos de origen — consentimiento, contrato, obligación legal, interés vital, tarea pública o interés legítimo con una prueba de ponderación en el expediente.',
          '☐ **EIPD aprobada por el DPD**, con un procedimiento de eliminación ensayado adjunto.',
          '☐ **Registro de actividades de tratamiento (artículo 30)** actualizado para incluir el sistema RAG, las categorías de datos, la retención, los destinatarios y los mecanismos de transferencia (típicamente ninguno para RAG local).',
          '☐ **Seis controles verificados de extremo a extremo**: air-gap o lista de egress permitido, RBAC, registros de auditoría, cifrado, trazabilidad, procedimiento de eliminación.',
          '☐ **Captura de paquetes de salida** limpia durante una prueba de saturación de 24 horas; repetida tras cada actualización de la aplicación.',
          '☐ **Integración del proveedor de identidad** probada con un usuario real de cada nivel de acceso; el acceso a colecciones sensibles requiere elevación separada.',
          '☐ **Copias de seguridad realizadas y una restauración realmente probada** en hardware aislado, no solo verificada en un panel de estado.',
          '☐ **Procedimiento de derecho al olvido ensayado** con datos sintéticos que cubra el almacén de origen, el índice vectorial, los embeddings en caché y la retención del registro de recuperación.',
          '☐ **Clasificación según la Ley de IA de la UE** confirmada (riesgo limitado frente a alto riesgo); expediente técnico en su lugar si es de alto riesgo.',
          '☐ **Contratos de proveedores (si los hay) revisados**: DPA conforme al artículo 28, subencargados listados, cláusula de no entrenamiento que cubra los datos del cliente.',
          '☐ **Acuerdo del comité de empresa** establecido donde el contenido generado por empleados esté en el ámbito de aplicación (Alemania; normas similares en otros lugares de la UE).',
          '☐ **Aviso de transparencia** redactado en lenguaje comprensible para el usuario que explique la asistencia de IA, el humano en el bucle y el flujo de datos.',
          '☐ **Procedimiento de respuesta a incidentes** actualizado para incluir escenarios específicos del RAG: filtración del índice, manipulación de logs, fallo de eliminación, cambio de modelo con ruptura de trazabilidad posterior.',
          '☐ **Revisión de acceso trimestral** programada y asignada; primera revisión en el calendario antes de la puesta en producción.',
          '☐ **Actualización anual de la EIPD** programada y vinculada al proceso de gestión de cambios.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores frecuentes',
        items: [
          '**Error 1: Tratar "local" como sinónimo de "conforme".** Ejecutar on-prem resuelve las preguntas de transferencia y de encargado del tratamiento; no resuelve la base jurídica, la EIPD, el registro de auditoría ni los derechos de los interesados. El cumplimiento es un programa por capas, no una elección de despliegue.',
          '**Error 2: Saltarse la EIPD porque el sistema es "solo una herramienta de búsqueda".** Una herramienta de búsqueda que ingiere datos de categorías especiales a gran escala es exactamente lo que cubre el artículo 35. Saltarse la EIPD significa saltarse la defensa en auditoría.',
          '**Error 3: Registrar el texto de la consulta sin verificar la base jurídica.** Las propias consultas son datos personales cuando hacen referencia a individuos. Decide en el momento del diseño si tu base jurídica de tratamiento cubre el registro de consultas; si no, registra solo el hash y los metadatos.',
          '**Error 4: Olvidar los embeddings en caché en el procedimiento de eliminación.** La eliminación del origen funciona. La reconstrucción del índice vectorial funciona. La capa de caché que tu plataforma añadió para el rendimiento, las huellas de embedding en el registro de recuperación y el historial de respuestas en el almacén de chat son las partes que se pasan por alto.',
          '**Error 5: Permitir a los usuarios con muchos privilegios saltarse las ACL de colección.** "Los administradores pueden verlo todo" es conveniente y muy común; también es la razón más frecuente por la que las auditorías salen mal. El acceso privilegiado debe estar a su vez controlado, limitado en el tiempo y justificado por uso.',
          '**Error 6: Reutilizar un espacio de trabajo para varios asuntos o clientes.** La contaminación cruzada de citas y contexto es un fallo de confidencialidad incluso antes de que ninguna parte externa lo vea. Un asunto o cliente por colección; ACL separadas; retención separada.',
          '**Error 7: Comprar air-gap y luego conectar un teléfono personal para las pruebas.** El perímetro de air-gap debe incluir a las personas que pueden transportar datos a través de él. La política de endpoints es parte del control, no una preocupación separada.',
          '**Error 8: Tratar la elección de modelo y embedder como "configurar y olvidar".** Cada actualización es un evento de gestión de cambios con implicaciones para la EIPD, la trazabilidad y el rastro de auditoría. Planifica el flujo de trabajo de actualización antes del primer despliegue en producción.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Texto completo del RGPD (Oficial)](https://gdpr-info.eu/) — Texto completo del Reglamento General de Protección de Datos con comentario artículo por artículo.',
          '[Texto completo de la Ley de IA de la UE](https://artificialintelligenceact.eu/) — Texto completo del reglamento con el marco de clasificación de riesgos.',
          '[Marco de Gestión de Riesgos de IA del NIST](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Marco de gobernanza federal de EE.UU. aplicable a la evaluación de riesgos de IA.',
          '[BDSG-Neu (Ley Federal Alemana de Protección de Datos)](https://www.gesetze-im-internet.de/bdsg_2018/) — Implementación alemana del RGPD con adiciones sectoriales.',
          '[Directrices del CEPD sobre EIPD](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — Orientación del Comité Europeo de Protección de Datos sobre cuándo y cómo realizar EIPDs.',
          '[BfDI (Comisionado Federal Alemán para la Protección de Datos)](https://www.bfdi.bund.de/) — Documentos de posición del Comisionado Federal Alemán para la Protección de Datos sobre despliegues de IA.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Ejecutar RAG localmente cumple automáticamente el RGPD?',
            a: 'No. El alojamiento local resuelve la pregunta sobre la transferencia transfronteriza y reduce la lista de encargados del tratamiento, pero los principios del RGPD en el artículo 5 (licitud, lealtad, transparencia, limitación de la finalidad, minimización de datos, exactitud, limitación del plazo de conservación, integridad y confidencialidad, responsabilidad proactiva) siguen siendo aplicables. El artículo 25 (protección de datos desde el diseño y por defecto), el artículo 30 (registro de actividades de tratamiento), el artículo 32 (seguridad del tratamiento) y el artículo 35 (EIPD) se aplican independientemente de dónde se ejecute el modelo. El RAG local es un punto de partida sólido, no una postura de cumplimiento completa.',
          },
          {
            q: '¿Qué se requiere para el cumplimiento de la Ley de IA de la UE en un despliegue de RAG local?',
            a: 'Clasifica el caso de uso como riesgo limitado o alto riesgo. La mayoría de los despliegues de asistente de recuperación son de riesgo limitado y requieren obligaciones de transparencia: los usuarios deben saber que están interactuando con una IA, el contenido generado debe ser identificable. En el momento en que la recuperación alimenta una decisión automatizada en un dominio enumerado (crédito, empleo, educación, servicios públicos, aplicación de la ley, migración, justicia, biometría, infraestructura crítica), el despliegue es de alto riesgo y se aplican las obligaciones completas: sistema de gestión de riesgos, gobernanza de datos, documentación técnica, registro automático de eventos, transparencia, supervisión humana, precisión y robustez, evaluación de conformidad y supervisión post-comercialización.',
          },
          {
            q: '¿Necesito una EIPD para el RAG local?',
            a: 'Una EIPD en virtud del artículo 35 es obligatoria para el tratamiento que pueda suponer un alto riesgo para los derechos y libertades de los interesados — lo que incluye el tratamiento a gran escala de datos de categorías especiales (salud, datos jurídicos, biométricos, raciales, políticos, religiosos, sindicales) y la elaboración de perfiles sistemática con efectos jurídicos. La mayoría del RAG local regulado (jurídico, médico, financiero, investigaciones de RRHH) está en el ámbito de aplicación. Ejecuta la EIPD pronto, trátala como el documento de diseño y ensaya las mitigaciones — especialmente el procedimiento de eliminación — antes de la puesta en producción.',
          },
          {
            q: '¿Puedo compartir un despliegue de RAG local entre departamentos?',
            a: 'Sí, con cuidado. El control de acceso a nivel de colección, la autenticación por usuario contra un único proveedor de identidad y una base jurídica clara para el uso de cada departamento son el suelo mínimo. La EIPD debe cubrir el conjunto más amplio de finalidades de tratamiento; si algún departamento necesita una base jurídica diferente (p. ej., investigaciones de RRHH bajo interés legítimo mientras el personal clínico opera bajo tarea pública), las colecciones separadas y los grupos de acceso separados son más fáciles de defender que una sola colección con ACL elaboradas.',
          },
          {
            q: '¿Cómo audito quién accedió a qué documento?',
            a: 'Registra cada recuperación con ID de usuario, marca de tiempo, IDs de chunks recuperados y los IDs de documentos de los que proceden. Reenvía los eventos a un almacén de logs separado con acceso de escritura restringido bajo diferente control administrativo del servidor de aplicaciones (separación de funciones). Usa almacenamiento de solo adición con una cadena de hashes para que la manipulación sea detectable. La retención debe alinearse con la ventana de investigación de la autoridad supervisora y cualquier norma sectorial — seis a siete años es frecuente en industrias reguladas.',
          },
          {
            q: '¿Los modelos de embedding de código abierto son seguros para el RGPD?',
            a: 'En principio sí, con tres condiciones. Primero, los pesos se descargan una vez y se fijan a un hash para poder demostrar qué estaba ejecutándose. Segundo, la inferencia es completamente local sin telemetría ni llamadas de salida — verifica con una captura de paquetes, no te fíes solo de la documentación. Tercero, la ficha del modelo y la licencia se revisan para detectar cláusulas que entren en conflicto con el uso empresarial confidencial (algunas licencias de pesos abiertos adjuntan restricciones sobre tipos de datos o casos de uso). El valor predeterminado práctico para despliegues regulados es incluir en la lista permitida un pequeño número de embedders validados y revisarlos en cada actualización.',
          },
          {
            q: '¿Qué hay de la trazabilidad de datos para los resultados generados por IA?',
            a: 'Cada respuesta generada debe hacer referencia a los IDs de chunks que la produjeron, el identificador del modelo, la versión de la plantilla de prompt y la marca de tiempo. Los chunks se resuelven entonces a IDs de documentos, que se resuelven a documentos de origen. Esta cadena es lo que permite verificar la respuesta, defenderla ante un cuestionamiento, atender una solicitud de eliminación y reproducir el resultado más tarde. Sin ella, "la IA lo dijo" es la defensa de auditoría — lo que no es defensa alguna.',
          },
          {
            q: '¿Puedo usar RAG local para documentos confidenciales de clientes?',
            a: 'A menudo sí, a veces no. Muchos acuerdos con asesoría externa, NDA de M&A y contratos de datos de pacientes permiten la revisión asistida por IA siempre que los datos no salgan de un límite definido y se cumplan ciertos controles. El RAG local cumple el requisito de límite por construcción; la lista de controles específica del contrato (cifrado, acceso, auditoría, retención, notificación de violaciones) debe seguir siendo respetada. Donde el contrato prohíbe por completo el tratamiento mediante IA, ningún patrón de despliegue lo soluciona — la prohibición se aplica tanto si la IA es local como remota.',
          },
          {
            q: '¿Qué registro es necesario para el cumplimiento?',
            a: 'Eventos de ingesta (ID de documento, hash, origen, cargador, marca de tiempo, clasificación), eventos de recuperación (ID de usuario, metadatos de consulta o hash, IDs de chunks recuperados, referencia de respuesta, identificador de modelo/embedder), eventos administrativos (promoción del modelo, cambio de embedder, cambio de ACL, cambio de usuario/grupo) y eventos operativos (copia de seguridad, restauración, rotación de claves). Todos los eventos reenviados a un almacén de logs separado, de solo adición, con cadena de hashes y retenidos según tus requisitos de asunto y sector.',
          },
          {
            q: '¿Cómo gestiono las solicitudes de derecho al olvido en RAG?',
            a: 'Con un procedimiento documentado que recorra la eliminación a través de cada capa: almacén de documentos de origen, índice vectorial, embeddings en caché, retención del registro de recuperación (donde la base jurídica permita la eliminación de la entrada del log) y cualquier respuesta almacenada en el historial de chat. La eliminación del origen es sencilla; la reconstrucción del índice vectorial está bien entendida; los embeddings en caché y el historial de respuestas son las partes que la mayoría de los despliegues pasan por alto. Ensaya el procedimiento con datos sintéticos, documenta el ensayo y vincula el procedimiento a tu proceso de respuesta a incidentes para que una solicitud real active la secuencia ensayada y no la improvisación.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: el mejor RAG local](/es/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — qué plataformas autoalojadas se adaptan a cada postura de cumplimiento, con notas sobre telemetría y licencias.',
          '[Agentes de IA locales para flujos de trabajo empresariales y cumplimiento en la UE](/es/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — tema de cumplimiento adyacente cuando la recuperación alimenta pasos de flujo de trabajo automatizados en lugar de un lector humano.',
          '[Automatización local de correo electrónico y calendario con LLM](/es/power-local-llm/local-llm-email-and-calendar-automation) — patrones de automatización empresarial adyacentes donde se aplica el mismo conjunto de controles.',
          '[RAG local en tus PDFs paso a paso](/es/power-local-llm/local-rag-on-your-pdfs-step-by-step) — guía de implementación práctica para los patrones on-prem y de portátil.',
          '[Chatea con 1.000 PDFs localmente](/es/power-local-llm/chat-with-1000-pdfs-locally) — orientación operativa para corpus más grandes que presionan el techo del on-prem.',
          '[Hub de Power Local LLM](/es/power-local-llm) — la biblioteca completa de guías para despliegues de LLM autoalojados.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RAG local para datos empresariales: IA conforme al RGPD para documentos sensibles (2026)',
      description: 'RAG local conforme al RGPD para equipos jurídicos, médicos y financieros. Arquitectura, registro de auditoría, alcance de la EIPD y 3 patrones de despliegue comparados.',
      url: 'https://www.promptquorum.com/es/es/power-local-llm/local-rag-for-private-business-data',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'RAG local para dados empresariais: IA em conformidade com LGPD/GDPR para documentos sensíveis (2026)',
    seoTitle: 'RAG local em conformidade com LGPD/GDPR para documentos sensíveis (2026)',
    intro:
      'As equipes jurídicas, médicas e financeiras enfrentam o mesmo problema: os documentos que mais valor agregariam buscar com IA são precisamente os que não podem sair da organização. Este artigo reúne a arquitetura, o conjunto de controles e a matriz de decisão de padrões de implantação para um RAG auto-hospedado que cumpre LGPD, GDPR, EU AI Act, HIPAA e as expectativas do Datenschutz alemão — redigido para o responsável por conformidade que precisa enviar um único documento para sua equipe de TI e que esta saiba o que construir.',
    metaDescription:
      'RAG local em conformidade com LGPD/GDPR para equipes jurídicas, médicas e financeiras: arquitetura, log de auditoria, escopo da DPIA e 3 padrões de implantação.',
    twitterDescription:
      'RAG local que cumpre LGPD/GDPR e EU AI Act. Air-gap, logs de auditoria, rastreabilidade de dados, escopo da DPIA e 3 padrões de implantação — o artigo que os responsáveis por conformidade enviam ao TI.',
    audience:
      'Responsáveis por conformidade da UE e Brasil, Encarregados de Proteção de Dados (DPO/ANPD), conselheiros jurídicos e arquitetos de TI responsáveis por construir RAG auto-hospedado sobre documentos confidenciais — contratos, prontuários de pacientes, arquivos de auditoria, salas de dados de M&A, correspondência com reguladores.',
    readTime: '15 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'RAG local em conformidade com LGPD/GDPR',
    targetKeywords: [
      'rag conforme lgpd gdpr',
      'rag local dados empresariais',
      'lei ia ue rag',
      'rag privado documentos confidenciais',
      'implantação rag on-premise',
      'dpia rag local',
      'anpd rag local',
    ],
    leadAnswerBlock:
      '**Uma implantação RAG auto-hospedada está em conformidade com LGPD/GDPR e EU AI Act apenas quando seis controles são integrados desde o primeiro dia: hospedagem em air-gap ou com egresso estritamente controlado, autenticação por usuário com acesso a documentos baseado em funções, logs de auditoria imutáveis que cobrem a ingestão e a recuperação, criptografia de ponta a ponta em repouso e em trânsito, rastreabilidade determinista do chunk até a fonte, e um procedimento de exclusão por escrito que se propaga do armazenamento de origem pelo índice vetorial e quaisquer embeddings em cache.**',
    quickAnswerTop: {
      pt: {
        question: 'O RAG local cumpre LGPD/GDPR por padrão e qual padrão de implantação as equipes reguladas devem escolher?',
        answer:
          'O RAG local não cumpre LGPD/GDPR por padrão. Executar um modelo on-premise resolve o problema da transferência transfronteiriça de dados e reduz a lista de sub-processadores, mas os artigos 5, 25, 30, 32 e 35 do GDPR / os artigos correspondentes da LGPD continuam sendo aplicáveis: base jurídica, minimização de dados, log de auditoria, segurança do tratamento e uma DPIA/RIPD para qualquer sistema que ingira dados de categorias especiais em larga escala. Escolha o padrão de notebook de usuário único para profissionais individuais e revisões pontuais; um servidor on-premise para bases de conhecimento departamentais com até alguns milhares de documentos e 5–50 usuários; uma nuvem privada na UE (nuvem soberana, chaves gerenciadas pelo cliente, região exclusiva na UE) para implantações multi-entidade onde a resiliência multirregional importa mais do que um air-gap completo. Independentemente da escolha, os seis controles são os mesmos — apenas o custo de implementação muda.',
        bullets: [
          'A hospedagem local resolve a transferência transfronteiriça (arts. 44–49 GDPR) e reduz a lista de sub-processadores — não resolve por si só a base jurídica, a DPIA nem os direitos dos titulares.',
          'Notebook de usuário único — ideal para advogados, médicos, auditores individuais e revisões pontuais.',
          'Servidor on-premise — ideal para implantações departamentais de 5–50 usuários.',
          'Nuvem privada na UE — ideal para implantações multi-entidade que precisam de resiliência.',
          'Uma DPIA/RIPD é obrigatória sob o artigo 35 GDPR / artigo 38 LGPD quando dados de categorias especiais são ingeridos em larga escala.',
          'As solicitações de direito ao esquecimento devem se propagar para os documentos de origem, os índices vetoriais e os embeddings em cache — projete o procedimento de exclusão antes da produção, não após receber a primeira solicitação.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Principais destaques', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Comparação de padrões de implantação', anchor: '#deployment-comparison' },
      { label: 'Escolher um padrão de implantação', anchor: '#which-deployment' },
      { label: 'Por que RAG local para dados sensíveis', anchor: '#why-local-rag' },
      { label: 'Os seis controles que toda implantação precisa', anchor: '#required-controls' },
      { label: 'Air-gap e controle de egresso', anchor: '#air-gap' },
      { label: 'Log de auditoria que resiste a uma revisão', anchor: '#audit-logging' },
      { label: 'Rastreabilidade de dados do chunk à fonte', anchor: '#data-lineage' },
      { label: 'Criptografia e controle de acesso', anchor: '#encryption-access' },
      { label: 'Padrão de notebook de usuário único', anchor: '#laptop-pattern' },
      { label: 'Padrão de servidor on-premise', anchor: '#on-prem-pattern' },
      { label: 'Opções de bancos de dados vetoriais', anchor: '#vector-db-comparison' },
      { label: 'Padrão de nuvem privada na UE', anchor: '#private-cloud-pattern' },
      { label: 'Classificação segundo a Lei de IA da UE', anchor: '#eu-ai-act' },
      { label: 'Requisitos da DPIA/RIPD', anchor: '#dpia-requirements' },
      { label: 'LGPD e ANPD: notas específicas para o Brasil', anchor: '#germany-datenschutz' },
      { label: 'Lista de verificação de conformidade', anchor: '#compliance-checklist' },
      { label: 'Erros frequentes', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**A hospedagem local é necessária, mas não suficiente.** Executar o modelo e o armazenamento vetorial no seu próprio hardware resolve a transferência transfronteiriça de dados e reduz a lista de sub-processadores, mas os artigos 5, 25, 30, 32 e 35 do GDPR / artigos correspondentes da LGPD continuam se aplicando.',
          '**Seis controles são inegociáveis** independentemente do padrão de implantação: air-gap ou controle de egresso estrito, autenticação por usuário com acesso baseado em funções, logs de auditoria imutáveis, criptografia em repouso e em trânsito, rastreabilidade determinista do chunk até o documento de origem, e um procedimento de exclusão por escrito que inclua o índice vetorial e quaisquer embeddings em cache.',
          '**Três padrões de implantação cobrem a maioria dos casos de uso regulados.** Notebook de usuário único para profissionais individuais e revisões pontuais; servidor on-premise para bases de conhecimento departamentais de 5–50 usuários; nuvem privada na UE (região soberana, chaves gerenciadas pelo cliente) para implantações multi-entidade onde a resiliência importa mais do que o air-gap completo.',
          '**A Lei de IA da UE classifica a maioria dos RAGs locais como sistemas de risco limitado** — mas no momento em que a recuperação alimenta uma decisão automatizada (pontuação de crédito, seleção de pessoal, elegibilidade a benefícios), a implantação passa a ser de alto risco e aciona a avaliação de conformidade completa.',
          '**Uma DPIA/RIPD é obrigatória** para qualquer RAG que ingerir dados de categorias especiais (saúde, dados jurídicos, biométricos, políticos, de filiação sindical) em larga escala, ou qualquer sistema que produza decisões automatizadas com efeitos jurídicos.',
          '**O direito ao esquecimento é o teste de exclusão que mais implantações reprovam.** Os documentos de origem são fáceis. Os índices vetoriais podem ser reconstruídos. Os embeddings em cache, os registros de recuperação e as respostas armazenadas no histórico de chat são as partes que são esquecidas.',
          '**Os modelos de embedding de código aberto são seguros para LGPD/GDPR em princípio**, mas apenas se (a) os pesos do modelo são baixados uma vez e fixados a um hash, (b) a inferência é executada inteiramente em hardware local sem telemetria, e (c) a ficha do modelo e a licença são revisadas para detectar cláusulas que conflitem com o uso empresarial confidencial.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**6 controles obrigatórios** para qualquer RAG regulado: air-gap, RBAC, logs de auditoria, criptografia, rastreabilidade de dados, procedimento de exclusão.',
          '**3 padrões de implantação:** notebook de usuário único (profissionais individuais), servidor on-premise (5–50 usuários), nuvem privada na UE (multi-entidade).',
          '**A DPIA/RIPD é obrigatória** quando dados de categorias especiais (saúde, jurídicos, biométricos) são ingeridos em larga escala.',
          '**Lei de IA da UE:** a maioria dos RAGs locais = risco limitado; passa a alto risco quando a recuperação alimenta decisões automatizadas (crédito, emprego, benefícios).',
          '**O direito ao esquecimento** deve se propagar para documentos de origem, índices vetoriais, embeddings em cache E o histórico de respostas.',
          '**LGPD e ANPD (Brasil):** o relatório de impacto à proteção de dados pessoais (RIPD) é o equivalente brasileiro da DPIA; a ANPD é a autoridade supervisora nacional.',
          '**Os modelos de embedding de código aberto** só são conformes com LGPD/GDPR se os pesos estiverem fixados, a inferência for completamente local e a licença tiver sido revisada.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Comparação de padrões de implantação',
        content:
          'Cada padrão pode ser feito em conformidade com LGPD/GDPR; o que muda é o custo dos controles e os modos de falha quando algo dá errado. Escolha o padrão mais simples que se encaixe no número de usuários, na sensibilidade dos documentos e no requisito de resiliência.',
        columns: ['Controle', 'Notebook de usuário único', 'Servidor on-premise', 'Nuvem privada na UE'],
        rows: [
          {
            'Controle': 'Air-gap (sem rede de saída)',
            'Notebook de usuário único': 'Trivial — desativar a rede',
            'Servidor on-premise': 'Alcançável — VLAN + firewall',
            'Nuvem privada na UE': 'Difícil — apenas lista de egresso permitido',
          },
          {
            'Controle': 'Log de auditoria (quem, o quê, quando)',
            'Notebook de usuário único': 'Manual — apenas no nível do SO',
            'Servidor on-premise': 'Sólido — pipeline de logs centralizado',
            'Nuvem privada na UE': 'Sólido — logging nativo na nuvem',
          },
          {
            'Controle': 'Rastreabilidade de dados (chunk → fonte)',
            'Notebook de usuário único': 'Apenas arquivos locais',
            'Servidor on-premise': 'Pipeline completamente rastreável',
            'Nuvem privada na UE': 'Completa — mas abrange regiões',
          },
          {
            'Controle': 'Residência de dados na UE/Brasil',
            'Notebook de usuário único': 'Inerente — localização física',
            'Servidor on-premise': 'Inerente — localização física',
            'Nuvem privada na UE': 'Configurada — região soberana obrigatória',
          },
          {
            'Controle': 'RBAC por usuário',
            'Notebook de usuário único': 'Usuário único — N/A',
            'Servidor on-premise': 'Provedor de identidade + grupos',
            'Nuvem privada na UE': 'IAM + SSO + ACL por coleção',
          },
          {
            'Controle': 'Backup e recuperação de desastres',
            'Notebook de usuário único': 'Disco externo criptografado',
            'Servidor on-premise': 'Fita ou backup externo',
            'Nuvem privada na UE': 'Replicação multi-AZ',
          },
          {
            'Controle': 'Custo inicial',
            'Notebook de usuário único': 'Apenas hardware — baixo',
            'Servidor on-premise': 'Servidor + integração — médio',
            'Nuvem privada na UE': 'Assinatura + configuração — médio',
          },
          {
            'Controle': 'Custo contínuo',
            'Notebook de usuário único': 'Nenhum — tempo de sysadmin',
            'Servidor on-premise': 'Operações de TI + eletricidade + resfriamento',
            'Nuvem privada na UE': 'Mensalidade recorrente',
          },
          {
            'Controle': 'Ideal para',
            'Notebook de usuário único': 'Profissionais individuais, revisões pontuais',
            'Servidor on-premise': '5–50 usuários, bases de conhecimento departamentais',
            'Nuvem privada na UE': 'Multi-entidade, implantações resilientes',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Escolher um padrão de implantação',
        content:
          '**A escolha correta depende do número de usuários, da sensibilidade dos documentos, da pressão de auditoria e da capacidade interna de TI.**',
        columns: ['Sua situação', 'Escolha'],
        rows: [
          {
            'Sua situação': 'Advogado, médico ou auditor individual que revisa um caso por vez',
            'Escolha': 'Notebook de usuário único',
          },
          {
            'Sua situação': 'Sala de dados de M&A com 3–5 revisores nomeados e data de fechamento definida',
            'Escolha': 'Notebook de usuário único ou on-premise (conforme o volume de documentos)',
          },
          {
            'Sua situação': 'Equipe de conformidade de 10–30 pessoas que compartilha um arquivo de correspondência com reguladores',
            'Escolha': 'Servidor on-premise',
          },
          {
            'Sua situação': 'Departamento hospitalar construindo um assistente de protocolos clínicos para 50 funcionários',
            'Escolha': 'Servidor on-premise',
          },
          {
            'Sua situação': 'Grupo multi-entidade que precisa de um RAG compartilhado entre filiais em vários países da UE',
            'Escolha': 'Nuvem privada na UE (região soberana + chaves gerenciadas pelo cliente)',
          },
          {
            'Sua situação': 'Seguradora com requisito de disponibilidade 24/7 e plano de recuperação de desastres',
            'Escolha': 'Nuvem privada na UE',
          },
          {
            'Sua situação': 'Órgão público com dados classificados ou restritos',
            'Escolha': 'Apenas on-premise com air-gap — a nuvem está fora de alcance',
          },
          {
            'Sua situação': 'Defesa de auditoria perante regulador em menos de 6 semanas',
            'Escolha': 'Servidor on-premise (o mais rápido para demonstrar controle)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Por que RAG local para dados sensíveis',
        content:
          '**O argumento a favor do RAG local versus LLM-as-a-service na nuvem não é ideologia — é a forma que assume a avaliação de riscos LGPD/GDPR.** O RAG na nuvem é viável para muitos casos de uso; para dados empresariais sensíveis, ele adiciona cinco riscos que o RAG local elimina por construção.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O RAG local mantém seus documentos sensíveis no seu próprio hardware enquanto fornece à sua equipe busca potenciada por IA — nenhum dado sai do edifício, nenhum sub-processador externo os toca, e nenhuma questão de transferência transfronteiriça surge.',
          },
          {
            type: 'plain-terms',
            text: 'Imagine que sua equipe jurídica pudesse pesquisar em 10.000 processos fazendo perguntas em linguagem natural — mas os documentos nunca saíssem da sala de servidores. É isso que o RAG local faz: a IA lê seus documentos no seu hardware, responde suas perguntas no seu hardware, e nada é enviado a lugar nenhum. A vantagem de conformidade não é uma funcionalidade — é a arquitetura.',
          },
        ],
        items: [
          '**Transferência transfronteiriça (arts. 44–49 GDPR / arts. LGPD sobre transferências internacionais).** Enviar dados pessoais a um sub-processador fora da UE/Brasil requer cláusulas contratuais padrão, uma avaliação do impacto da transferência e uma resposta crível sobre se a jurisdição receptora tem poderes de intimação que alcancem esses dados. O RAG local não transfere dados — a questão não surge.',
          '**Proliferação de sub-processadores (art. 28 GDPR / art. 37 LGPD).** Os provedores de LLM na nuvem frequentemente dependem de infraestrutura de hiperescalador, serviços de moderação de conteúdo e provedores de observabilidade. Cada um é um sub-processador que deve ser listado, contratado e auditado. O RAG local tem zero sub-processadores por padrão.',
          '**Vazamento de dados de treinamento.** Muitos termos de LLM na nuvem se reservam o direito de usar os prompts dos clientes para melhorar o modelo, a menos que seja usado um nível enterprise pago e a cláusula de não treinamento seja verificada. O RAG local executa modelos com pesos que você controla; nada sai do host.',
          '**Cláusulas de confidencialidade em contratos com clientes.** Os acordos com consultoria externa, NDAs de M&A e acordos sobre dados de pacientes frequentemente proíbem a transmissão do material protegido a sub-processadores externos. O RAG local contorna a cláusula completamente.',
          '**Exposição a intimações judiciais e processos legais.** Os documentos armazenados com um provedor na nuvem podem ser requeridos via processo legal dirigido ao provedor, com obrigações de divulgação das quais o controlador pode nem ser notificado a tempo. Os documentos que nunca saem das suas instalações só podem ser requeridos a você.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O RAG local não é a resposta correta para todas as cargas de trabalho. A pesquisa de informações públicas, a geração de rascunhos de marketing, a assistência de código em repositórios de código aberto — tudo isso geralmente funciona melhor com LLM na nuvem porque a exposição LGPD/GDPR é baixa e a lacuna de qualidade do modelo importa. O argumento deste artigo é especificamente para dados empresariais confidenciais: jurídicos, médicos, financeiros, de RH, correspondência com reguladores e segredos comerciais.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'Os seis controles que toda implantação precisa',
        content:
          '**Esses seis controles são o piso mínimo.** Toda implantação regulada precisa dos seis; o padrão de implantação apenas muda como você os implementa.',
        numberedItems: [
          {
            title: 'Air-gap ou controle de egresso estrito',
            whyItMatters:
              'Confirme que os documentos e embeddings não podem vazar via chamadas de saída — SDKs de telemetria, sondas de atualização do modelo, relatores de falhas, callbacks de moderação de conteúdo, CDN de terceiros para fontes. Ou desative o acesso à rede completamente (air-gap real) ou execute uma lista de egresso permitido que só autorize servidores de atualização assinados.',
          },
          {
            title: 'Autenticação por usuário com acesso baseado em funções',
            whyItMatters:
              'Você precisa conseguir responder "quem acessou qual documento" antes que um regulador pergunte. Login único contra um provedor de identidade, acesso por grupos a coleções e ACL por documento onde o caso o exige. Contas compartilhadas não são um controle — são uma falha de auditoria esperando para acontecer.',
          },
          {
            title: 'Logs de auditoria imutáveis que cobrem a ingestão e a recuperação',
            whyItMatters:
              'Para cada documento: quem o enviou, quando, caminho de origem, hash. Para cada consulta: quem perguntou, o que foi perguntado (se o logging permitir), quais chunks foram recuperados, de quais IDs de documentos vieram, qual resposta foi retornada. Os logs devem ser à prova de adulteração — somente de adição, assinados, com uma retenção suficiente para cobrir a janela de investigação da autoridade supervisora.',
          },
          {
            title: 'Criptografia em repouso e em trânsito',
            whyItMatters:
              'Criptografia de disco completo no host, TLS para qualquer chamada interna entre serviços, e gerenciamento de chaves que sobreviva a um notebook roubado ou uma conta de administrador comprometida. Chaves gerenciadas pelo cliente para implantações na nuvem.',
          },
          {
            title: 'Rastreabilidade determinista de dados do chunk à fonte',
            whyItMatters:
              'Cada chunk recuperado deve ser rastreado até seu documento de origem, página, seção e versão. Isso é o que permite (a) verificar a resposta, (b) atender uma solicitação de exclusão, (c) defender o sistema perante um tribunal quando um resumo gerado é questionado.',
          },
          {
            title: 'Procedimento de exclusão por escrito que inclua o índice vetorial e os embeddings em cache',
            whyItMatters:
              'Uma solicitação de direito ao esquecimento deve se propagar do armazenamento de origem, pelo índice vetorial, até quaisquer embeddings em cache, e pela retenção de registros de recuperação. A maioria das implantações gerencia a exclusão da origem corretamente e esquece o restante.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-gap e controle de egresso',
        content:
          '**Air-gap significa que o host não tem rota de rede de saída; o controle de egresso significa que ele tem uma estritamente permitida.** Ambos são aceitáveis; escolha o modelo mais robusto que suas operações consigam sustentar.',
        items: [
          '**Air-gap real** — sem DHCP, sem resolução DNS para destinos públicos, sem TCP de saída. As atualizações são realizadas via mídia assinada que um administrador conecta fisicamente.',
          '**Lista de egresso permitido** — o tráfego de saída só é permitido para uma pequena lista de destinos nomeados (servidores de atualização do modelo, seu provedor de identidade, encaminhadores de logs para coletores internos).',
          '**O que verificar na plataforma:** zero telemetria por padrão, sem chamadas de saída durante a inferência, sem CDN de fontes na UI, sem relatores de falhas que enviem payloads. Verifique com uma captura de pacotes ou uma ferramenta como Little Snitch no banco de testes antes de ir para produção.',
          '**Governança de atualizações** — os pesos do modelo, os pesos do embedder, o código do aplicativo e os patches do SO passam todos por uma janela de atualização controlada. O administrador que promove uma atualização a assina por escrito; a mudança é registrada.',
          '**Ruptura de air-gap frequente:** um SDK de análise incluído com um componente de interface de terceiros, uma referência a CDN de fontes no chrome do aplicativo, ou uma sonda de "verificar atualizações" que roda na inicialização.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Realize uma captura de pacotes de 24 horas no host com o aplicativo aberto e em repouso. Qualquer tráfego de saída que não esteja na lista permitida é uma descoberta. Repita isso toda vez que o aplicativo for atualizado.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'Log de auditoria que resiste a uma revisão',
        content:
          '**O log de auditoria é o artefato que uma autoridade supervisora (ANPD no Brasil, DPA na UE) lerá primeiro.** Ele deve responder duas perguntas para cada recuperação: quem perguntou e o que o sistema lhe deu.',
        items: [
          '**Eventos de ingestão:** ID de documento, hash (SHA-256), nome de arquivo, caminho de origem, enviado por, timestamp, rótulo de classificação, tamanho, número de páginas, grupo proprietário, classe de retenção.',
          '**Eventos de recuperação:** ID de consulta, ID de usuário, timestamp, IDs de chunks recuperados (e IDs de documentos dos quais vieram), pontuações de recuperação, hash da resposta final, identificador do modelo, identificador do embedder, top-K utilizado.',
          '**Eventos administrativos:** promoção do modelo, troca de embedder, reconstrução do índice, mudanças de usuário/grupo, mudanças de ACL.',
          '**Resistência a adulterações:** log de somente adição, encadeamento de hashes (cada entrada referencia o hash da entrada anterior), chave de assinatura fora de banda, reconciliação periódica com uma cópia separada.',
          '**Retenção:** se alinha com a janela de investigação da autoridade supervisora — no mínimo o período de retenção do caso; comumente seis a sete anos para setores regulados; mais onde normas setoriais se aplicam.',
          '**Pipeline:** o aplicativo emite eventos estruturados; um encaminhador os envia a um armazenamento de logs separado com acesso de escrita restrito. O servidor de aplicativo nunca deve ter permissão para excluir ou reescrever entradas de logs.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Registrar o texto da consulta introduz sua própria questão de LGPD/GDPR — uma consulta pode conter em si mesma dados pessoais (ex.: "resuma o histórico médico do paciente X"). Decida no momento do design se sua base jurídica de tratamento cobre o logging de consultas, e se não cobrir, registre apenas os metadados necessários para auditoria e diagnóstico operacional.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Rastreabilidade de dados do chunk à fonte',
        content:
          '**A rastreabilidade é a espinha dorsal de todos os outros controles.** Sem ela, as solicitações de exclusão falham, a verificação de respostas é impossível e o rastro de auditoria desmorona.',
        items: [
          '**Rastreabilidade no nível do documento:** cada documento tem um ID interno estável, um hash de conteúdo, um timestamp de ingestão, um proprietário, uma classificação e uma classe de retenção.',
          '**Rastreabilidade no nível do chunk:** cada chunk referencia seu ID de documento pai, página (para PDFs), seção (para documentos estruturados), offset de caractere, comprimento e versão da estratégia de chunking.',
          '**Rastreabilidade no nível do embedding:** cada vetor de embedding referencia seu ID de chunk e identificador de embedder.',
          '**Rastreabilidade no nível da resposta:** cada resposta gerada referencia os IDs de chunks que a produziram, o identificador do modelo, a versão do template de prompt e o timestamp.',
          '**Reindexação sem quebrar a rastreabilidade:** as reconstruções preservam os IDs de documentos e incrementam as versões da estratégia de chunking.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Teste a cadeia de rastreabilidade trimestralmente. Escolha uma recuperação aleatória do log de auditoria e percorra-a de volta: ID de chunk → ID de documento → arquivo original no armazenamento de origem → classe de retenção. Se qualquer etapa estiver quebrada, corrija o esquema antes da próxima inspeção supervisora — não durante ela.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'Criptografia e controle de acesso',
        content:
          '**Criptografia em repouso, criptografia em trânsito e controle de acesso que se mapeia ao seu provedor de identidade existente.** O modo de falha é esquecer uma das três camadas, não implementar mal a camada escolhida.',
        items: [
          '**Criptografia em repouso** — criptografia de disco completo no host (LUKS no Linux, BitLocker no Windows, FileVault no macOS para notebooks). Para servidores, criptografe também as partições que hospedam o armazenamento vetorial e o estágio de ingestão.',
          '**Criptografia em trânsito** — TLS para qualquer salto entre serviços, mesmo no localhost. TLS mútuo onde o modelo de ameaças justificar.',
          '**Autenticação** — login único contra seu provedor de identidade existente (OIDC, SAML). Sem contas locais em produção. MFA obrigatório para qualquer usuário com acesso administrativo ou a coleções sensíveis.',
          '**Autorização** — acesso baseado em grupos no nível da coleção; ACL no nível do documento onde o caso o exigir. O pipeline de recuperação deve aplicar as ACL no momento da consulta — não apenas a interface de usuário.',
          '**Acesso administrativo** — gerenciamento de acesso privilegiado para qualquer conta que possa ler ou reconstruir índices, ver logs de auditoria ou alterar ACLs.',
          '**Segurança de endpoint** — dispositivos gerenciados para implantações com notebook (registrados em MDM, criptografados, política de bloqueio de tela aplicada).',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Padrão de notebook de usuário único',
        content:
          '**O notebook de usuário único é o padrão mais fácil de fazer com air-gap e o mais difícil de escalar.** Adequado para profissionais individuais e revisões pontuais.',
        items: [
          '**Hardware** — um notebook de categoria workstation com criptografia de disco completo, uma GPU discreta (ou uma máquina recente de memória unificada) e pelo menos 32 GB de RAM.',
          '**Software** — um aplicativo RAG de desktop autocontido que roda localmente; um LLM de código aberto com pesos baixados uma vez e fixados a um hash; um embedder de código aberto; um armazenamento vetorial local no disco criptografado.',
          '**Postura de rede** — com air-gap durante o trabalho; reconectado apenas para atualizações assinadas explícitas.',
          '**Manuseio de documentos** — documentos de origem no disco criptografado; uma estrutura de pastas por caso; backups semanais criptografados em um disco externo armazenado em local diferente.',
          '**Postura de auditoria** — o log de auditoria no nível do SO é o piso mínimo para o padrão de notebook.',
          '**Limitações** — um notebook de usuário único não é uma plataforma multiusuário. Compartilhar o notebook, compartilhar contas ou copiar o armazenamento de documentos para o notebook de um colega quebra a postura de auditoria.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para profissionais individuais que trabalham com casos confidenciais, o padrão de notebook de usuário único é genuinamente a postura de privacidade mais sólida disponível — melhor do que qualquer nuvem e mais sólida do que muitas implantações on-premise. A contrapartida é operacional: quando o notebook falha, o caso herda o tempo de recuperação da sua disciplina de backup.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'Padrão de servidor on-premise',
        content:
          '**O servidor on-premise é o padrão de trabalho habitual para RAG departamental regulado.** Escala para 5–50 usuários e alguns milhares de documentos, suporta logs de auditoria adequados e permanece dentro do seu perímetro físico.',
        items: [
          '**Hardware** — um servidor com uma ou duas GPUs de nível empresarial, discos redundantes, memória ECC e um no-break. Planeje 2–4× o armazenamento do seu corpus de documentos bruto para cobrir vetores, índices, logs e backups.',
          '**Rede** — uma VLAN dedicada atrás do firewall corporativo; lista de egresso permitido ou air-gap completo conforme o modelo de ameaças.',
          '**Stack de software** — uma plataforma RAG auto-hospedada, um LLM de código aberto como modelo de chat, um embedder de código aberto e um armazenamento vetorial apropriado para o tamanho do corpus.',
          '**Identidade** — federada com o provedor de identidade corporativo; a associação a grupos controla o acesso às coleções.',
          '**Backup e recuperação de desastres** — backups incrementais noturnos; backups completos semanais; cópia externa mantida pelo TI.',
          '**Operações** — janela de correção segundo a política de gerenciamento de mudanças; revisões de acesso trimestrais; procedimento de exclusão para solicitações de direito ao esquecimento testado; rota de atualização do modelo e do embedder documentada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O RAG on-premise frequentemente falha por razões não técnicas: um backup que nunca foi restaurado, uma conta de administrador compartilhada entre o pessoal de TI, um no-break que ninguém testou. Os controles técnicos são mais fáceis do que a higiene operacional.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Opções de bancos de dados vetoriais para RAG on-premise',
        content:
          '**A escolha do armazenamento vetorial raramente determina a conformidade — mas dá forma ao custo operacional, ao teto de escala e à limpeza com que o procedimento de exclusão pode ser implementado.**',
        columns: ['Banco de dados vetorial', 'Tipo', 'Auto-hospedagem na UE/Brasil', 'Melhor padrão de RAG'],
        rows: [
          {
            'Banco de dados vetorial': '**Chroma**',
            'Tipo': 'Código aberto, leve',
            'Auto-hospedagem na UE/Brasil': '✅',
            'Melhor padrão de RAG': 'Notebook + on-premise pequeno',
          },
          {
            'Banco de dados vetorial': '**Qdrant**',
            'Tipo': 'Código aberto, alto desempenho',
            'Auto-hospedagem na UE/Brasil': '✅',
            'Melhor padrão de RAG': 'Servidor on-premise, filtragem intensiva',
          },
          {
            'Banco de dados vetorial': '**Weaviate**',
            'Tipo': 'Código aberto, completo',
            'Auto-hospedagem na UE/Brasil': '✅',
            'Melhor padrão de RAG': 'On-premise + busca híbrida',
          },
          {
            'Banco de dados vetorial': '**Milvus**',
            'Tipo': 'Código aberto, enterprise',
            'Auto-hospedagem na UE/Brasil': '✅',
            'Melhor padrão de RAG': 'On-premise em grande escala',
          },
          {
            'Banco de dados vetorial': '**pgvector**',
            'Tipo': 'Extensão do PostgreSQL',
            'Auto-hospedagem na UE/Brasil': '✅',
            'Melhor padrão de RAG': 'Equipes que já usam Postgres',
          },
          {
            'Banco de dados vetorial': '**Pinecone**',
            'Tipo': 'SaaS gerenciado',
            'Auto-hospedagem na UE/Brasil': '⚠️ Hospedado nos EUA',
            'Melhor padrão de RAG': 'Apenas nuvem privada na UE (com ressalvas)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Padrão de nuvem privada na UE',
        content:
          '**O padrão de nuvem privada na UE utiliza um provedor de nuvem em região soberana com chaves gerenciadas pelo cliente, residência de dados exclusivamente na UE e uma cláusula contratual de não treinamento de IA que cubra os dados do cliente.**',
        items: [
          '**Seleção do provedor** — a oferta soberana na UE de um hiperescalador ou um provedor de nuvem europeu. O DPA deve listar cada sub-processador; os mecanismos de transferência devem ser abordados se algum sub-processador estiver fora do EEE.',
          '**Região** — exclusivamente na UE, com garantias explícitas de residência de dados. Replicação entre regiões apenas para outras regiões da UE. Sem região dos EUA como failover, nem mesmo temporariamente.',
          '**Criptografia** — chaves gerenciadas pelo cliente com rotação; bring-your-own-key onde o provedor admitir; eventos de acesso a chaves registrados separadamente.',
          '**Rede** — VPC privada sem ingresso público; acesso apenas via conectividade privada (link dedicado ou VPN) da sua rede corporativa.',
          '**Contratos** — o DPA deve cumprir o art. 28 GDPR, listar sub-processadores, abordar as cláusulas contratuais padrão onde necessário e incluir uma cláusula explícita de não treinamento com dados do cliente que cubra tanto os pesos do LLM quanto qualquer serviço auxiliar.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O padrão de nuvem privada na UE parece mais permissivo do que o on-premise porque utiliza um sub-processador externo — mas com região soberana, chaves gerenciadas pelo cliente, cláusula contratual de não treinamento e controle de egresso adequado, pode igualar ou superar o on-premise em disponibilidade e postura de auditoria.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'Classificação segundo a Lei de IA da UE: risco limitado vs. alto risco',
        content:
          '**A maioria das implantações de RAG local são sistemas de IA de risco limitado segundo a Lei de IA da UE — mas no momento em que a recuperação alimenta uma decisão automatizada que afeta uma pessoa, a classificação passa a alto risco e as obrigações se multiplicam.**',
        items: [
          '**Risco limitado (a maioria dos RAGs locais)** — o sistema recupera e resume documentos para assistir a um humano; o humano toma a decisão. As obrigações são principalmente de transparência.',
          '**Alto risco** — a recuperação alimenta uma decisão automatizada em domínios que a Lei enumera: pontuação de crédito, seleção de pessoal, admissões educacionais, serviços públicos essenciais, aplicação da lei, migração, justiça, identificação biométrica, infraestrutura crítica.',
          '**Obrigações de alto risco** — sistema de gestão de riscos ao longo do ciclo de vida, governança de dados documentada, documentação técnica, registro automático de eventos, transparência, supervisão humana, medidas de precisão e robustez, avaliação de conformidade pré-comercialização.',
          '**Práticas proibidas** — pontuação social, rastreamento não seletivo de imagens faciais, reconhecimento de emoções em locais de trabalho e centros educacionais, determinada categorização biométrica em tempo real.',
          '**Documentação como artefato de auditoria** — o expediente técnico exigido para sistemas de alto risco não é um entregável único; é um documento vivo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A linha entre alto risco e risco limitado é traçada pelo caso de uso, não pela tecnologia. O mesmo armazenamento vetorial e o mesmo modelo podem ser de risco limitado em uma implantação de assistente de pesquisa e de alto risco em uma implantação de seleção de pessoal de RH.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'Requisitos da DPIA (GDPR) / RIPD (LGPD)',
        content:
          '**Uma Avaliação de Impacto sobre a Proteção de Dados (DPIA — art. 35 GDPR) ou Relatório de Impacto à Proteção de Dados Pessoais (RIPD — art. 38 LGPD) é obrigatória para o tratamento que possa acarretar alto risco aos direitos e liberdades dos titulares.** A maioria dos RAGs locais regulados está no escopo. Trate a DPIA/RIPD como o documento de design, não como um artefato de conformidade posterior.',
        items: [
          '**Quando é obrigatória (GDPR/LGPD)** — avaliação sistemática e exaustiva que inclua elaboração de perfis com efeitos jurídicos; tratamento em larga escala de dados de categorias especiais (saúde, dados jurídicos, biométricos, raciais, políticos, religiosos, sindicais); monitoramento sistemático de zonas de acesso público.',
          '**Escopo da DPIA/RIPD** — finalidade e base jurídica; descrição das operações de tratamento; avaliação de necessidade e proporcionalidade; avaliação de riscos para os titulares; mitigações e risco residual; consulta ao DPO/encarregado.',
          '**Riscos específicos do RAG** a abordar: reidentificação de indivíduos a partir de chunks recuperados; geração de informação imprecisa que afete uma pessoa; vazamento via logs ou backups; completude da exclusão em solicitações de direito ao esquecimento; contaminação cruzada entre coleções.',
          '**Documento vivo** — reexecute a DPIA/RIPD quando o corpus se ampliar materialmente, quando o modelo ou o embedder mudar, quando os limites de acesso mudarem, ou anualmente como linha de base.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Uma DPIA/RIPD redigida na semana dois do projeto é uma ferramenta de planejamento. Uma DPIA/RIPD redigida na semana dez é um documento defensivo. A primeira é muito mais útil e tende a revelar mudanças de design que reduzem o risco residual final.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'LGPD e ANPD: notas específicas para o Brasil',
        content:
          '**A Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018) e a Autoridade Nacional de Proteção de Dados (ANPD) adicionam camadas específicas ao Brasil que os guias internacionais frequentemente ignoram.** Um RAG que satisfaz o GDPR genérico pode ainda não passar em uma revisão brasileira se esses pontos forem negligenciados.',
        items: [
          '**ANPD (Autoridade Nacional de Proteção de Dados).** A ANPD é a autoridade supervisora brasileira equivalente às DPAs europeias. As diretrizes e resoluções da ANPD são a referência operativa para conformidade LGPD. Monitore o site da ANPD (gov.br/anpd) para orientações sobre sistemas de IA e RAG.',
          '**Encarregado de Proteção de Dados (artigo 41 LGPD).** Toda organização que realiza tratamento de dados pessoais deve indicar um encarregado (equivalente ao DPO europeu). O encarregado deve ser informado e consultado antes da implantação de sistemas de RAG que tratem dados pessoais.',
          '**RIPD (Relatório de Impacto à Proteção de Dados Pessoais — art. 38 LGPD).** Equivalente funcional da DPIA europeia. A ANPD pode exigi-lo mediante solicitação. Para RAGs que tratem dados sensíveis (art. 5, II LGPD) em larga escala, a elaboração preventiva do RIPD é a postura defensável.',
          '**Dados sensíveis (artigo 11 LGPD).** A LGPD eleva a proteção de dados de saúde, biométricos, genéticos, sobre convicção religiosa, opinião política, filiação sindical ou a organização de caráter religioso, filosófico ou político, referentes à vida sexual ou orientação sexual e dados de crianças e adolescentes. Para RAGs que ingerem esses dados, a base jurídica é mais restrita do que para dados pessoais comuns.',
          '**Transferência internacional de dados (artigo 33 LGPD).** A LGPD restringe a transferência de dados pessoais para países ou organismos internacionais que não proporcionem nível de proteção adequado. O RAG local elimina essa preocupação por construção — os dados nunca saem do território nacional.',
          '**Registro das operações de tratamento.** Organizações que realizam tratamento em larga escala devem manter um registro das atividades de tratamento (artigo 37 LGPD), incluindo os sistemas de RAG que tratem dados pessoais.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Para empresas com operações tanto no Brasil quanto na UE: a LGPD e o GDPR têm estrutura semelhante mas diferem em detalhes como as bases jurídicas, os prazos de notificação de violações (72 horas para GDPR vs. prazo razoável para LGPD) e os poderes sancionatórios da ANPD vs. das DPAs europeias. A arquitetura local de air-gap cobre ambas as regulamentações; a documentação deve referenciar as bases jurídicas de cada lei separadamente.',
          },
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Lista de verificação de conformidade antes da produção',
        content:
          '**Percorra esta lista de ponta a ponta antes de qualquer implantação em produção.** Cada item é um modo de falha real de uma auditoria real.',
        items: [
          '☐ **Base jurídica documentada** para cada categoria de dados de origem — consentimento, contrato, obrigação legal, interesse vital, tarefa pública ou interesse legítimo com um teste de ponderação no expediente.',
          '☐ **DPIA/RIPD aprovada pelo DPO/encarregado**, com um procedimento de exclusão testado em anexo.',
          '☐ **Registro de atividades de tratamento (art. 30 GDPR / art. 37 LGPD)** atualizado para incluir o sistema RAG.',
          '☐ **Seis controles verificados de ponta a ponta:** air-gap ou lista de egresso permitido, RBAC, logs de auditoria, criptografia, rastreabilidade, procedimento de exclusão.',
          '☐ **Captura de pacotes de saída** limpa durante um teste de saturação de 24 horas; repetida após cada atualização do aplicativo.',
          '☐ **Integração do provedor de identidade** testada com um usuário real de cada nível de acesso.',
          '☐ **Backups realizados e uma restauração realmente testada** em hardware isolado.',
          '☐ **Procedimento de direito ao esquecimento testado** com dados sintéticos cobrindo o armazenamento de origem, o índice vetorial, os embeddings em cache e a retenção do log de recuperação.',
          '☐ **Classificação segundo a Lei de IA da UE** confirmada (risco limitado vs. alto risco); expediente técnico em vigor se for de alto risco.',
          '☐ **Contratos de fornecedores (se houver) revisados:** DPA conforme o art. 28 GDPR, sub-processadores listados, cláusula de não treinamento cobrindo os dados do cliente.',
          '☐ **Aviso de transparência** redigido em linguagem compreensível para o usuário explicando a assistência de IA, o humano no loop e o fluxo de dados.',
          '☐ **Procedimento de resposta a incidentes** atualizado para incluir cenários específicos do RAG.',
          '☐ **Revisão de acesso trimestral** programada e atribuída.',
          '☐ **Atualização anual da DPIA/RIPD** programada e vinculada ao processo de gerenciamento de mudanças.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros frequentes',
        items: [
          '**Erro 1: tratar "local" como sinônimo de "em conformidade".** Executar on-premise resolve as questões de transferência e de sub-processador; não resolve a base jurídica, a DPIA/RIPD, o log de auditoria nem os direitos dos titulares.',
          '**Erro 2: pular a DPIA/RIPD porque o sistema é "apenas uma ferramenta de busca".** Uma ferramenta de busca que ingere dados de categorias especiais em larga escala é exatamente o que o art. 35 GDPR / art. 38 LGPD cobre.',
          '**Erro 3: registrar o texto da consulta sem verificar a base jurídica.** As próprias consultas são dados pessoais quando fazem referência a indivíduos.',
          '**Erro 4: esquecer os embeddings em cache no procedimento de exclusão.** A exclusão da origem funciona. A reconstrução do índice vetorial funciona. A camada de cache que sua plataforma adicionou para desempenho, as pegadas de embedding no log de recuperação e o histórico de respostas no armazenamento de chat são as partes que são esquecidas.',
          '**Erro 5: permitir a usuários com muitos privilégios contornar as ACLs de coleção.** "Os administradores podem ver tudo" é conveniente e muito comum; também é a razão mais frequente por que as auditorias saem mal.',
          '**Erro 6: reutilizar um workspace para vários casos ou clientes.** A contaminação cruzada de citações e contexto é uma falha de confidencialidade mesmo antes de qualquer parte externa vê-la.',
          '**Erro 7: comprar air-gap e depois conectar um telefone pessoal para os testes.** O perímetro de air-gap deve incluir as pessoas que podem transportar dados por ele.',
          '**Erro 8: tratar a escolha de modelo e embedder como "configurar e esquecer".** Cada atualização é um evento de gerenciamento de mudanças com implicações para a DPIA/RIPD, a rastreabilidade e o rastro de auditoria.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Texto completo do GDPR (gdpr-info.eu)](https://gdpr-info.eu/) — Texto completo do Regulamento Geral de Proteção de Dados com comentário artigo por artigo.',
          '[Texto completo do EU AI Act](https://artificialintelligenceact.eu/) — Texto completo do regulamento com o framework de classificação de riscos.',
          '[Lei Geral de Proteção de Dados — LGPD (planalto.gov.br)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) — Texto completo da LGPD brasileira.',
          '[ANPD — Autoridade Nacional de Proteção de Dados (gov.br/anpd)](https://www.gov.br/anpd/) — Diretrizes, resoluções e orientações da autoridade supervisora brasileira.',
          '[Framework de Gestão de Risco de IA do NIST](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Framework de governança federal dos EUA aplicável à avaliação de riscos de IA.',
          '[Diretrizes do EDPB sobre DPIA](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — Orientação do Comitê Europeu de Proteção de Dados sobre quando e como realizar DPIAs.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Executar RAG localmente cumpre automaticamente o LGPD/GDPR?',
            a: 'Não. A hospedagem local resolve a questão da transferência transfronteiriça e reduz a lista de sub-processadores, mas os princípios do GDPR no art. 5 e os da LGPD no art. 6 continuam se aplicando. O art. 25 (proteção de dados desde o design), o art. 30 GDPR / art. 37 LGPD (registro de atividades de tratamento), o art. 32 (segurança do tratamento) e o art. 35 GDPR / art. 38 LGPD (DPIA/RIPD) se aplicam independentemente de onde o modelo é executado.',
          },
          {
            q: 'O que é exigido para conformidade com a Lei de IA da UE em uma implantação de RAG local?',
            a: 'Classifique o caso de uso como risco limitado ou alto risco. A maioria das implantações de assistente de recuperação são de risco limitado e requerem obrigações de transparência: os usuários devem saber que estão interagindo com IA, o conteúdo gerado deve ser identificável. Quando a recuperação alimenta uma decisão automatizada em um domínio enumerado (crédito, emprego, educação, serviços públicos, aplicação da lei, migração, justiça, biometria, infraestrutura crítica), a implantação é de alto risco e se aplicam as obrigações completas.',
          },
          {
            q: 'Preciso de uma DPIA/RIPD para o RAG local?',
            a: 'Uma DPIA/RIPD é obrigatória para o tratamento que possa acarretar alto risco — o que inclui o tratamento em larga escala de dados de categorias especiais (saúde, dados jurídicos, biométricos, raciais, políticos, religiosos, sindicais) e a elaboração de perfis sistemática com efeitos jurídicos. A maioria do RAG local regulado (jurídico, médico, financeiro, investigações de RH) está no escopo. Execute a DPIA/RIPD cedo, trate-a como o documento de design e ensaie as mitigações — especialmente o procedimento de exclusão — antes da produção.',
          },
          {
            q: 'Como a LGPD difere do GDPR para implantações de RAG?',
            a: 'A LGPD segue a mesma estrutura conceitual do GDPR: base jurídica para tratamento, direitos dos titulares, encarregado (equivalente ao DPO), RIPD (equivalente à DPIA) e notificação de incidentes à ANPD. As principais diferenças práticas são: a ANPD é o órgão regulador no Brasil; o conceito de "dados sensíveis" (art. 11 LGPD) abrange categorias similares ao art. 9 GDPR; as transferências internacionais de dados são reguladas pelo art. 33 LGPD. A arquitetura local — sem egresso de dados, log de auditoria imutável, RIPD antes da implantação — funciona igualmente para LGPD e GDPR.',
          },
          {
            q: 'Como audito quem acessou qual documento?',
            a: 'Registre cada recuperação com ID de usuário, timestamp, IDs de chunks recuperados e os IDs de documentos dos quais vieram. Encaminhe os eventos a um armazenamento de logs separado com acesso de escrita restrito sob controle administrativo diferente do servidor de aplicativo (separação de funções). Use armazenamento de somente adição com encadeamento de hashes para que a adulteração seja detectável.',
          },
          {
            q: 'Os modelos de embedding de código aberto são seguros para LGPD/GDPR?',
            a: 'Em princípio sim, com três condições. Primeiro, os pesos são baixados uma vez e fixados a um hash para que você possa demonstrar o que estava em execução. Segundo, a inferência é completamente local sem telemetria nem chamadas de saída — verifique com uma captura de pacotes. Terceiro, a ficha do modelo e a licença são revisadas para detectar cláusulas que conflitem com o uso empresarial confidencial.',
          },
          {
            q: 'Como gerencio as solicitações de direito ao esquecimento no RAG?',
            a: 'Com um procedimento documentado que percorra a exclusão por cada camada: armazenamento de documentos de origem, índice vetorial, embeddings em cache, retenção do log de recuperação (onde a base jurídica permitir a exclusão da entrada do log) e quaisquer respostas armazenadas no histórico de chat. A exclusão da origem é simples; a reconstrução do índice vetorial está bem compreendida; os embeddings em cache e o histórico de respostas são as partes que a maioria das implantações esquece. Ensaie o procedimento com dados sintéticos, documente o ensaio e vincule o procedimento ao seu processo de resposta a incidentes.',
          },
          {
            q: 'Posso usar RAG local para documentos confidenciais de clientes?',
            a: 'Frequentemente sim, às vezes não. Muitos acordos com consultoria externa, NDAs de M&A e contratos de dados de pacientes permitem a revisão assistida por IA desde que os dados não saiam de um limite definido e certos controles sejam atendidos. O RAG local cumpre o requisito de limite por construção; a lista de controles específicos do contrato deve continuar sendo respeitada.',
          },
          {
            q: 'Que registro é necessário para conformidade?',
            a: 'Eventos de ingestão (ID de documento, hash, origem, enviador, timestamp, classificação), eventos de recuperação (ID de usuário, metadados de consulta ou hash, IDs de chunks recuperados, referência de resposta, identificador de modelo/embedder), eventos administrativos (promoção do modelo, troca de embedder, mudança de ACL) e eventos operacionais (backup, restauração, rotação de chaves). Todos os eventos encaminhados a um armazenamento de logs separado, de somente adição, com encadeamento de hashes e retidos conforme seus requisitos de caso e setor.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: o melhor RAG local](/pt/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — quais plataformas auto-hospedadas se adaptam a cada postura de conformidade.',
          '[Agentes de IA locais para fluxos de trabalho empresariais e conformidade na UE](/pt/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — tema de conformidade adjacente quando a recuperação alimenta etapas de fluxo de trabalho automatizados.',
          '[Automação local de e-mail e calendário com LLM](/pt/power-local-llm/local-llm-email-and-calendar-automation) — padrões de automação empresarial adjacentes onde o mesmo conjunto de controles se aplica.',
          '[RAG local nos seus PDFs passo a passo](/pt/power-local-llm/local-rag-on-your-pdfs-step-by-step) — guia de implementação prática para os padrões on-premise e de notebook.',
          '[Converse com 1.000 PDFs localmente](/pt/power-local-llm/chat-with-1000-pdfs-locally) — orientação operacional para corpus maiores que pressionam o teto do on-premise.',
          '[Hub de Power Local LLM](/pt/power-local-llm) — a biblioteca completa de guias para implantações de LLM auto-hospedados.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RAG local para dados empresariais: IA em conformidade com LGPD/GDPR para documentos sensíveis (2026)',
      description: 'RAG local em conformidade com LGPD/GDPR para equipes jurídicas, médicas e financeiras. Arquitetura, log de auditoria, escopo da DPIA/RIPD e 3 padrões de implantação comparados.',
      url: 'https://www.promptquorum.com/pt/pt/power-local-llm/local-rag-for-private-business-data',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'RAG المحلي لبيانات الأعمال: ذكاء اصطناعي متوافق مع اللائحة الأوروبية لحماية البيانات للمستندات الحساسة (2026)',
    seoTitle: 'RAG محلي متوافق مع اللائحة الأوروبية لحماية البيانات للمستندات الحساسة (2026)',
    intro:
      'تواجه الفرق القانونية والطبية والمالية المشكلة ذاتها: إن المستندات الأكثر قيمةً للبحث فيها بالذكاء الاصطناعي هي بالضبط تلك التي لا يُسمح بإخراجها من المؤسسة. تتناول هذه المقالة البنية المعمارية ومجموعة الضوابط ومصفوفة اتخاذ القرار لأنماط النشر لنظام RAG مستضاف ذاتياً يلتزم باللائحة الأوروبية لحماية البيانات (GDPR) وقانون الذكاء الاصطناعي الأوروبي وقانون HIPAA ومتطلبات قانون حماية البيانات الألماني (Datenschutz) — مكتوبةً لمسؤول الامتثال الذي يحتاج إلى إرسال وثيقة واحدة إلى فريق تقنية المعلومات ليعرف ماذا يبني.',
    metaDescription:
      'نظام RAG محلي متوافق مع اللائحة الأوروبية لحماية البيانات للفرق القانونية والطبية والمالية. البنية المعمارية وسجلات التدقيق ونطاق تقييم أثر حماية البيانات وثلاثة أنماط نشر مقارنة.',
    twitterDescription:
      'RAG محلي يلتزم باللائحة الأوروبية لحماية البيانات وقانون الذكاء الاصطناعي الأوروبي. العزل الهوائي وسجلات التدقيق وسلسلة بيانات الأصل ونطاق تقييم الأثر وثلاثة أنماط نشر — المقالة التي يرسلها مسؤولو الامتثال إلى فرق تقنية المعلومات.',
    audience:
      'مسؤولو الامتثال ومسؤولو حماية البيانات والمستشارون القانونيون ومعماريو تقنية المعلومات في الاتحاد الأوروبي المسؤولون عن بناء أنظمة RAG مستضافة ذاتياً على المستندات السرية — العقود وسجلات المرضى وملفات التدقيق وغرف بيانات عمليات الاندماج والاستحواذ والمراسلات مع الجهات التنظيمية.',
    readTime: '15 دقيقة قراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'RAG محلي متوافق مع اللائحة الأوروبية لحماية البيانات',
    targetKeywords: [
      'rag متوافق مع gdpr',
      'rag محلي بيانات الأعمال',
      'قانون الذكاء الاصطناعي الأوروبي rag',
      'rag خاص للمستندات السرية',
      'نشر rag on-premise',
      'حماية البيانات rag',
      'تقييم أثر حماية البيانات rag محلي',
    ],
    leadAnswerBlock:
      '**لا يلتزم نظام RAG المستضاف ذاتياً بمتطلبات اللائحة الأوروبية لحماية البيانات وقانون الذكاء الاصطناعي الأوروبي إلا حين تُدمَج ستة ضوابط منذ اليوم الأول: استضافة معزولة هوائياً أو ذات تحكم صارم بالبيانات الصادرة، مصادقة لكل مستخدم مع وصول إلى المستندات قائم على الأدوار، سجلات تدقيق غير قابلة للتغيير تشمل الاستيعاب والاسترجاع، تشفير شامل للبيانات في حالة السكون وأثناء النقل، سلسلة بيانات أصل حتمية من القطعة إلى المصدر، ومسار حذف موثق خطياً يمتد من مخزن المصدر عبر الفهرس المتجهي وأي تضمينات مخزنة مؤقتاً. نمط النشر (حاسوب محمول لمستخدم واحد، خادم محلي، سحابة خاصة أوروبية) يحدد أي الضوابط سهل التطبيق وأيها يستلزم جهداً — لا يحدد ما إذا كانت الضوابط مطلوبة أصلاً.**',
    quickAnswerTop: {
      ar: {
        question: 'هل نظام RAG المحلي متوافق مع اللائحة الأوروبية لحماية البيانات بشكل افتراضي، وأي نمط نشر يجب أن تختاره الفرق الخاضعة للتنظيم؟',
        answer:
          'نظام RAG المحلي ليس متوافقاً مع اللائحة الأوروبية لحماية البيانات بشكل افتراضي. تشغيل النموذج محلياً يحل مشكلة نقل البيانات عبر الحدود ويقلص قائمة المعالجين، لكن المواد 5 و25 و30 و32 و35 من اللائحة لا تزال سارية: الأساس القانوني وتقليل البيانات وسجل التدقيق وأمن المعالجة وتقييم أثر حماية البيانات لأي نظام يستوعب بيانات الفئات الخاصة على نطاق واسع. اختر نمط الحاسوب المحمول لمستخدم واحد للمهنيين الأفراد والمراجعات العرضية؛ واختر خادماً محلياً لقواعد المعرفة الإدارية بما يصل إلى بضعة آلاف من المستندات وخمسة إلى خمسين مستخدماً؛ واختر سحابة خاصة أوروبية (سحابة ذات سيادة، مفاتيح يديرها العميل، منطقة أوروبية حصراً) للنشر متعدد الكيانات حيث تكون مرونة تعدد المناطق أهم من العزل الهوائي الكامل. أياً كان اختيارك، فالضوابط الستة ذاتها تنطبق — يتغير فقط تكلفة التطبيق.',
        bullets: [
          'الاستضافة المحلية تحل نقل البيانات عبر الحدود (المواد 44–49) وتقلص قائمة المعالجين — لكنها لا تحل وحدها مسألة الأساس القانوني أو تقييم الأثر أو حقوق أصحاب البيانات.',
          'الحاسوب المحمول لمستخدم واحد — الأنسب للمحامين والأطباء والمدققين الأفراد والمراجعات العرضية. يصعب التدقيق فيه على نطاق واسع؛ أسهل عزل هوائي.',
          'الخادم المحلي — الأنسب للنشر على مستوى الأقسام (5–50 مستخدماً). سجلات تدقيق حقيقية والتحكم في الوصول القائم على الأدوار والنسخ الاحتياطي والتعافي من الكوارث. أعلى جهد تقني.',
          'السحابة الخاصة الأوروبية — الأنسب للنشر متعدد الكيانات الذي يحتاج مرونة. منطقة ذات سيادة + مفاتيح يديرها العميل + بنود تحظر تدريب الذكاء الاصطناعي على بيانات العميل، جميعها مطلوبة.',
          'تقييم أثر حماية البيانات إلزامي بموجب المادة 35 عند استيعاب بيانات الفئات الخاصة على نطاق واسع، بصرف النظر عن نمط النشر.',
          'طلبات الحق في النسيان يجب أن تنتشر إلى مستندات المصدر والفهارس المتجهية والتضمينات المخزنة مؤقتاً — صمم مسار الحذف قبل الإطلاق لا بعد وصول الطلب الأول.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'مقارنة أنماط النشر', anchor: '#deployment-comparison' },
      { label: 'اختيار نمط النشر', anchor: '#which-deployment' },
      { label: 'لماذا RAG المحلي للبيانات الحساسة', anchor: '#why-local-rag' },
      { label: 'الضوابط الستة التي يحتاجها كل نشر', anchor: '#required-controls' },
      { label: 'العزل الهوائي والتحكم في البيانات الصادرة', anchor: '#air-gap' },
      { label: 'سجل تدقيق يصمد أمام المراجعة', anchor: '#audit-logging' },
      { label: 'سلسلة بيانات الأصل من القطعة إلى المصدر', anchor: '#data-lineage' },
      { label: 'التشفير والتحكم في الوصول', anchor: '#encryption-access' },
      { label: 'نمط الحاسوب المحمول لمستخدم واحد', anchor: '#laptop-pattern' },
      { label: 'نمط الخادم المحلي', anchor: '#on-prem-pattern' },
      { label: 'خيارات قواعد البيانات المتجهية', anchor: '#vector-db-comparison' },
      { label: 'نمط السحابة الخاصة الأوروبية', anchor: '#private-cloud-pattern' },
      { label: 'التصنيف بموجب قانون الذكاء الاصطناعي الأوروبي', anchor: '#eu-ai-act' },
      { label: 'متطلبات تقييم أثر حماية البيانات', anchor: '#dpia-requirements' },
      { label: 'ملاحظات خاصة بألمانيا (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'قائمة مراجعة الامتثال', anchor: '#compliance-checklist' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**الاستضافة المحلية ضرورية لكنها غير كافية.** تشغيل النموذج ومخزن المتجهات على بنيتك التحتية الخاصة يحل نقل البيانات عبر الحدود ويقلص قائمة المعالجين، لكن المواد 5 و25 و30 و32 و35 من اللائحة الأوروبية لا تزال سارية. الأساس القانوني وتقليل البيانات وسجل التدقيق وأمن المعالجة وتقييمات الأثر لا تصبح اختياريةً فقط لأن البيانات تبقى داخل المنشأة.',
          '**ستة ضوابط غير قابلة للتفاوض** بصرف النظر عن نمط النشر: عزل هوائي أو تحكم صارم في البيانات الصادرة، مصادقة لكل مستخدم مع وصول قائم على الأدوار، سجلات تدقيق غير قابلة للتغيير، تشفير في حالة السكون وأثناء النقل، سلسلة بيانات أصل حتمية من القطعة إلى مستند المصدر، ومسار حذف موثق خطياً يشمل الفهرس المتجهي وأي تضمينات مخزنة مؤقتاً.',
          '**ثلاثة أنماط نشر تغطي معظم حالات الاستخدام الخاضعة للتنظيم.** الحاسوب المحمول لمستخدم واحد للمهنيين الأفراد والمراجعات العرضية؛ الخادم المحلي لقواعد معرفة الأقسام (5–50 مستخدماً)؛ السحابة الخاصة الأوروبية (منطقة ذات سيادة، مفاتيح يديرها العميل) للنشر متعدد الكيانات حيث تكون المرونة أهم من العزل الهوائي الكامل.',
          '**يصنف قانون الذكاء الاصطناعي الأوروبي معظم أنظمة RAG المحلية كأنظمة محدودة المخاطر** — لكن ما إن يُغذي الاسترجاع قراراً آلياً (تسجيل الجدارة الائتمانية أو فرز الموظفين أو أهلية الاستحقاقات) ينتقل النشر إلى فئة المخاطر العالية ويستوجب التقييم الكامل للمطابقة ومراقبة ما بعد الطرح في السوق والتزامات الرقابة البشرية.',
          '**تقييم أثر حماية البيانات إلزامي بموجب المادة 35** لأي نظام RAG يستوعب بيانات الفئات الخاصة (الصحة والقانون والبيومترية والسياسة والانتماء النقابي) على نطاق واسع، أو أي نظام يصدر قرارات آلية ذات آثار قانونية. تخطي التقييم يعني تخطي دفاع التدقيق.',
          '**الحق في النسيان هو اختبار الحذف الذي تفشل فيه معظم عمليات النشر.** مستندات المصدر سهلة. يمكن إعادة بناء الفهارس المتجهية. التضمينات المخزنة مؤقتاً وسجلات الاسترجاع والإجابات المحفوظة في سجل المحادثة هي الأجزاء التي يُغفلها الجميع — وهي الأجزاء التي سيسأل عنها المنظم.',
          '**نماذج التضمين مفتوحة المصدر آمنة من حيث مبدأ اللائحة الأوروبية**، لكن فقط إذا (أ) تُنزَّل أوزان النموذج مرةً واحدةً وتُثبَّت بقيمة تجزئة، (ب) تعمل الاستدلال بالكامل على أجهزة محلية بدون قياس عن بُعد، و(ج) تُراجَع بطاقة النموذج والترخيص بحثاً عن أي بنود تتعارض مع الاستخدام التجاري السري.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**6 ضوابط إلزامية** لأي نظام RAG خاضع للتنظيم: العزل الهوائي والتحكم في الوصول القائم على الأدوار وسجلات التدقيق والتشفير وسلسلة بيانات الأصل ومسار الحذف.',
          '**3 أنماط نشر:** الحاسوب المحمول لمستخدم واحد (المهنيون الأفراد)، الخادم المحلي (5–50 مستخدماً)، السحابة الخاصة الأوروبية (متعدد الكيانات).',
          '**تقييم أثر حماية البيانات إلزامي** بموجب المادة 35 عند استيعاب بيانات الفئات الخاصة (الصحة والقانون والبيومترية) على نطاق واسع.',
          '**قانون الذكاء الاصطناعي الأوروبي:** معظم أنظمة RAG المحلية = مخاطر محدودة؛ يصبح مخاطر عالية حين يُغذي الاسترجاع قرارات آلية (الائتمان والتوظيف والاستحقاقات).',
          '**الحق في النسيان** يجب أن ينتشر عبر مستندات المصدر والفهارس المتجهية والتضمينات المخزنة مؤقتاً وسجل الإجابات أيضاً.',
          '**المشاركة في صنع القرار للمجلس العمالي (Betriebsrat)** بموجب §87 BetrVG مطلوبة لأي نظام RAG على محتوى يؤلفه الموظفون في ألمانيا.',
          '**نماذج التضمين مفتوحة المصدر** متوافقة مع اللائحة الأوروبية فقط إذا كانت الأوزان مثبتة والاستدلال محلياً بالكامل والترخيص مراجَعاً.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'مقارنة أنماط النشر',
        content:
          'يمكن جعل كل نمط متوافقاً مع اللائحة الأوروبية؛ ما يتغير هو تكلفة الضوابط وأوضاع الفشل حين يسوء الأمر. اختر أبسط نمط يناسب عدد المستخدمين وحساسية المستندات ومتطلب المرونة.',
        columns: ['الضابط', 'الحاسوب المحمول لمستخدم واحد', 'الخادم المحلي', 'السحابة الخاصة الأوروبية'],
        rows: [
          {
            'الضابط': 'العزل الهوائي (بلا شبكة صادرة)',
            'الحاسوب المحمول لمستخدم واحد': 'بسيط — تعطيل الشبكة',
            'الخادم المحلي': 'ممكن — شبكة VLAN + جدار ناري',
            'السحابة الخاصة الأوروبية': 'صعب — قائمة السماح فقط',
          },
          {
            'الضابط': 'سجل التدقيق (من وماذا ومتى)',
            'الحاسوب المحمول لمستخدم واحد': 'يدوي — مستوى نظام التشغيل فقط',
            'الخادم المحلي': 'قوي — خط أنابيب سجلات مركزي',
            'السحابة الخاصة الأوروبية': 'قوي — تسجيل أصلي سحابي',
          },
          {
            'الضابط': 'سلسلة بيانات الأصل (قطعة → مصدر)',
            'الحاسوب المحمول لمستخدم واحد': 'ملفات محلية فقط',
            'الخادم المحلي': 'خط أنابيب كامل قابل للتتبع',
            'السحابة الخاصة الأوروبية': 'كاملة — لكن تمتد عبر مناطق',
          },
          {
            'الضابط': 'إقامة البيانات في الاتحاد الأوروبي',
            'الحاسوب المحمول لمستخدم واحد': 'ضمنية — الموقع الجغرافي',
            'الخادم المحلي': 'ضمنية — الموقع الجغرافي',
            'السحابة الخاصة الأوروبية': 'مُهيَّأة — منطقة ذات سيادة مطلوبة',
          },
          {
            'الضابط': 'التحكم في الوصول القائم على الأدوار لكل مستخدم',
            'الحاسوب المحمول لمستخدم واحد': 'مستخدم واحد — لا ينطبق',
            'الخادم المحلي': 'مزود هوية + مجموعات',
            'السحابة الخاصة الأوروبية': 'IAM + SSO + قوائم تحكم الوصول لكل مجموعة',
          },
          {
            'الضابط': 'النسخ الاحتياطي والتعافي من الكوارث',
            'الحاسوب المحمول لمستخدم واحد': 'قرص خارجي مشفر',
            'الخادم المحلي': 'شريط أو نسخ خارجية',
            'السحابة الخاصة الأوروبية': 'نسخ متكرر عبر مناطق التوافر',
          },
          {
            'الضابط': 'التكلفة الأولية',
            'الحاسوب المحمول لمستخدم واحد': 'الأجهزة فقط — منخفضة',
            'الخادم المحلي': 'خادم + تكامل — متوسطة',
            'السحابة الخاصة الأوروبية': 'اشتراك + إعداد — متوسطة',
          },
          {
            'الضابط': 'التكلفة الجارية',
            'الحاسوب المحمول لمستخدم واحد': 'لا شيء — وقت مسؤول النظام',
            'الخادم المحلي': 'عمليات تقنية المعلومات + طاقة + تبريد',
            'السحابة الخاصة الأوروبية': 'رسوم شهرية متكررة',
          },
          {
            'الضابط': 'الأنسب لـ',
            'الحاسوب المحمول لمستخدم واحد': 'المهنيون الأفراد، المراجعات العرضية',
            'الخادم المحلي': '5–50 مستخدماً، قواعد معرفة الأقسام',
            'السحابة الخاصة الأوروبية': 'متعدد الكيانات، النشر المرن',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'اختيار نمط النشر',
        content:
          '**الاختيار الصحيح يعتمد على عدد المستخدمين وحساسية المستندات وضغط التدقيق وقدرة تقنية المعلومات الداخلية.** يغطي هذا الاختصار معظم الحالات الفعلية.',
        columns: ['وضعك', 'الاختيار'],
        rows: [
          {
            'وضعك': 'محامٍ أو طبيب أو مدقق يراجع ملفاً واحداً في كل مرة',
            'الاختيار': 'الحاسوب المحمول لمستخدم واحد',
          },
          {
            'وضعك': 'غرفة بيانات اندماج واستحواذ مع 3–5 مراجعين مُعيَّنين بالاسم وتاريخ انتهاء محدد',
            'الاختيار': 'الحاسوب المحمول لمستخدم واحد أو الخادم المحلي (حسب حجم المستندات)',
          },
          {
            'وضعك': 'فريق امتثال من 10–30 شخصاً يتشارك أرشيف مراسلات مع الجهات التنظيمية',
            'الاختيار': 'الخادم المحلي',
          },
          {
            'وضعك': 'قسم مستشفى يبني مساعد بروتوكولات سريرية لـ 50 موظفاً',
            'الاختيار': 'الخادم المحلي',
          },
          {
            'وضعك': 'مجموعة متعددة الكيانات تحتاج نظام RAG مشتركاً عبر فروع في دول أوروبية متعددة',
            'الاختيار': 'السحابة الخاصة الأوروبية (منطقة ذات سيادة + مفاتيح يديرها العميل)',
          },
          {
            'وضعك': 'شركة تأمين تشترط توافر 24/7 وخطة تعافي من الكوارث',
            'الاختيار': 'السحابة الخاصة الأوروبية',
          },
          {
            'وضعك': 'جهة حكومية تتعامل مع بيانات سرية أو مقيدة',
            'الاختيار': 'خادم محلي معزول هوائياً فقط — السحابة خارج النطاق',
          },
          {
            'وضعك': 'دفاع تدقيق أمام جهة تنظيمية خلال أقل من 6 أسابيع',
            'الاختيار': 'الخادم المحلي (الأسرع في إثبات السيطرة)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'لماذا RAG المحلي للبيانات الحساسة',
        content:
          '**الحجة لصالح RAG المحلي على LLM-as-a-service السحابي ليست أيديولوجيا — إنها شكل تقييم المخاطر الخاص باللائحة الأوروبية.** يصلح RAG السحابي للعديد من حالات الاستخدام؛ لبيانات الأعمال الحساسة يضيف خمسة مخاطر يلغيها RAG المحلي بحكم تصميمه.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يُبقي نظام RAG المحلي مستنداتك الحساسة على أجهزتك الخاصة بينما يمنح فريقك بحثاً مدعوماً بالذكاء الاصطناعي — لا تغادر البيانات المبنى، ولا يلمسها أي معالج خارجي، ولا يُطرح أي سؤال حول النقل عبر الحدود.',
          },
          {
            type: 'plain-terms',
            text: 'تخيل أن فريقك القانوني يستطيع البحث في 10,000 ملف قضائي بأسئلة بلغة طبيعية — لكن المستندات لا تغادر غرفة الخوادم أبداً. هذا هو RAG المحلي: الذكاء الاصطناعي يقرأ مستنداتك على أجهزتك، ويجيب على أسئلتك على أجهزتك، ولا يُرسَل شيء لأي مكان. ميزة الامتثال ليست ميزةً إضافية — إنها البنية المعمارية ذاتها.',
          },
        ],
        items: [
          '**النقل عبر الحدود (المواد 44–49).** إرسال البيانات الشخصية إلى معالج خارج الاتحاد الأوروبي يستلزم بنوداً تعاقدية قياسية وتقييم أثر النقل وإجابة موثوقة عن ما إذا كانت الجهة القضائية المتلقية تملك صلاحيات الاستدعاء التي تطال تلك البيانات. نظام RAG المحلي لا ينقل البيانات — لا يُطرح السؤال أصلاً.',
          '**تضخم قائمة المعالجين الفرعيين (المادة 28).** يعتمد مزودو LLM السحابي عادةً على بنية تحتية لمزودي الخدمات الضخمة وخدمات الإشراف على المحتوى ومزودي مراقبة الأداء. كل منهم معالج فرعي يجب إدراجه وتعاقده ومراجعته. نظام RAG المحلي لا يمتلك أي معالج فرعي افتراضياً.',
          '**تسرب بيانات التدريب.** تحتفظ شروط كثير من LLM السحابية بحق استخدام موجهات العملاء لتحسين النموذج ما لم يُستخدم مستوى مؤسسي مدفوع وتُتحقق بنود عدم التدريب. نظام RAG المحلي يشغّل نماذج بأوزان تتحكم أنت فيها؛ لا شيء يغادر المضيف.',
          '**بنود السرية في عقود العملاء.** تحظر اتفاقيات المحامين الخارجيين وعقود عدم الإفصاح الخاصة بالاندماج والاستحواذ وعقود بيانات المرضى في الغالب نقل المواد المحمية إلى معالجين خارجيين. يتحاشى نظام RAG المحلي هذه البنود كلياً.',
          '**التعرض للاستدعاء والإجراءات القانونية.** يمكن للمستندات المخزنة لدى مزود سحابي أن تُطلَب عبر إجراءات قانونية موجهة للمزود، مع التزامات إفصاح قد لا يُبلَّغ عنها مسؤول المعالجة في الوقت المناسب. المستندات التي لا تغادر مقرك لا يمكن طلبها إلا منك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'نظام RAG المحلي ليس الإجابة الصحيحة لكل حمل عمل. البحث في المعلومات العامة وتوليد مسودات التسويق ومساعدة الكود في المستودعات المفتوحة المصدر — هذه كلها تعمل عادةً بشكل أفضل مع LLM السحابي لأن التعرض لمخاطر اللائحة الأوروبية منخفض وفجوة جودة النموذج مهمة. الحجة في هذه المقالة خاصة ببيانات الأعمال السرية: القانونية والطبية والمالية والموارد البشرية والمراسلات مع الجهات التنظيمية والأسرار التجارية.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'الضوابط الستة التي يحتاجها كل نشر',
        content:
          '**هذه الضوابط الستة هي الحد الأدنى.** كل نشر خاضع للتنظيم يحتاج الستة جميعاً؛ نمط النشر يغير فقط كيفية تطبيقها. إغفال أي منها هو السبب الأكثر شيوعاً لفشل عمليات التدقيق.',
        numberedItems: [
          {
            title: 'عزل هوائي أو تحكم صارم في البيانات الصادرة',
            whyItMatters:
              'يؤكد أن المستندات والتضمينات لا يمكن تسريبها عبر استدعاءات صادرة — حزم SDK للقياس عن بُعد، فحوصات تحديث النموذج، مُبلِّغو الأعطال، استدعاءات الإشراف على المحتوى، شبكات CDN لجهات خارجية للخطوط. إما تعطيل الوصول إلى الشبكة كلياً (عزل هوائي حقيقي) أو تشغيل قائمة سماح للبيانات الصادرة تسمح فقط لخوادم التحديث الموقعة.',
          },
          {
            title: 'مصادقة لكل مستخدم مع وصول قائم على الأدوار',
            whyItMatters:
              'تحتاج إلى القدرة على الإجابة عن "من وصل إلى أي مستند" قبل أن يسأل المنظم. تسجيل دخول موحد مقابل مزود هوية، وصول قائم على المجموعات على مستوى المجموعات، وقوائم تحكم وصول على مستوى المستند حيث يستلزم الملف ذلك. الحسابات المشتركة ليست ضابطاً — إنها فشل تدقيق ينتظر حدوثه.',
          },
          {
            title: 'سجلات تدقيق غير قابلة للتغيير تشمل الاستيعاب والاسترجاع',
            whyItMatters:
              'لكل مستند: من رفعه ومتى ومسار المصدر وقيمة التجزئة. لكل استعلام: من سأل وماذا سُئل (إن سمح التسجيل) وأي قطع استُرجعت وأي معرفات مستندات جاءت منها وأي إجابة أُعيدت. يجب أن تكون السجلات محمية من التلاعب — قابلة للإضافة فقط وموقعة وبفترة احتفاظ كافية لتغطية نافذة التحقيق لدى السلطة الإشرافية. لتتبع تدقيق مستوى الموجهات — الإصدارات وسجلات التغييرات والرجوع للإصدارات السابقة — راجع [سير عمل التحكم في إصدارات الموجهات](/ar/prompt-engineering/prompt-version-control-workflows).',
          },
          {
            title: 'التشفير في حالة السكون وأثناء النقل',
            whyItMatters:
              'تشفير القرص الكامل على المضيف، وبروتوكول TLS لأي استدعاء داخلي بين الخدمات، وإدارة مفاتيح تصمد أمام سرقة حاسوب محمول أو اختراق حساب مسؤول. مفاتيح يديرها العميل لعمليات النشر السحابية. بدون ذلك، يتحول سرقة جهاز إلى اختراق بيانات يستوجب الإبلاغ بموجب المادة 33.',
          },
          {
            title: 'سلسلة بيانات أصل حتمية من القطعة إلى المصدر',
            whyItMatters:
              'يجب أن تتتبع كل قطعة مستردة إلى مستند مصدرها وصفحتها وقسمها وإصدارها. هذا ما يتيح (أ) التحقق من الإجابة، (ب) تنفيذ طلب الحذف، (ج) الدفاع عن النظام أمام المحكمة حين يُشكك أحد في ملخص مُولَّد. "لا نستطيع إعادة إنتاج أي قطعة تسببت في أي إجابة" ليست إجابةً مقبولةً لسلطة إشرافية.',
          },
          {
            title: 'مسار حذف موثق خطياً يشمل الفهرس المتجهي والتضمينات المخزنة مؤقتاً',
            whyItMatters:
              'طلب الحق في النسيان يجب أن ينتشر من مخزن المصدر عبر الفهرس المتجهي إلى أي تضمينات مخزنة مؤقتاً وعبر احتفاظ سجلات الاسترجاع. معظم عمليات النشر تتعامل مع حذف المصدر بنظافة وتنسى الباقي. وثّق دليل تشغيل الحذف قبل الإطلاق؛ درّب عليه باستخدام بيانات اصطناعية.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'العزل الهوائي والتحكم في البيانات الصادرة',
        content:
          '**العزل الهوائي يعني أن المضيف لا يملك مساراً للشبكة الصادرة؛ والتحكم في البيانات الصادرة يعني أنه يملك مساراً مقيداً بدقة بقائمة سماح.** كلاهما مقبول؛ اختر أقوى نموذج يمكن لعملياتك الحفاظ عليه.',
        items: [
          '**عزل هوائي حقيقي** — لا DHCP ولا تحليل DNS لوجهات عامة ولا TCP صادر. التحديثات تتم عبر وسائط موقعة يوصلها المسؤول فيزيائياً. هذا هو النموذج الصحيح للعمل السري وشبكات المستشفيات المعينة وأي نشر يشمل نموذج التهديد فيه تبعية خبيثة.',
          '**قائمة سماح للبيانات الصادرة** — تُسمح شبكة الإخراج فقط لقائمة صغيرة من الوجهات المسماة (خوادم تحديث النموذج، مزود هويتك، محوِّلو السجلات إلى مُجمِّعات داخلية). يُسقط جدار الناري كل الحركة الأخرى. هذا هو الإعداد الافتراضي العملي لمعظم عمليات النشر الإدارية الخاضعة للتنظيم.',
          '**ما تبحث عنه في المنصة**: قياس عن بُعد صفري افتراضياً، بلا استدعاءات صادرة أثناء الاستدلال، بلا شبكات CDN للخطوط في واجهة المستخدم، بلا مُبلِّغو أعطال يرسلون حمولات. تحقق بلقطة حزم أو أداة مثل Little Snitch على منصة الاختبار قبل الترقية للإنتاج.',
          '**حوكمة التحديثات** — أوزان النموذج وأوزان أداة التضمين ورمز التطبيق وترقيعات نظام التشغيل، جميعها تمر عبر نافذة تحديث خاضعة للرقابة. المسؤول الذي يُقرّ التحديث يوقع خطياً؛ يُسجَّل التغيير.',
          '**خرق شائع للعزل الهوائي:** حزمة SDK تحليلية مُدمجة مع مكون واجهة مستخدم تابع لجهة خارجية، أو مرجع CDN لخطوط في واجهة التطبيق، أو فحص "التحقق من التحديثات" يعمل عند الإطلاق. لهذا يهم خطوة التحقق — لا تفترض شيئاً عن الإعدادات الافتراضية.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'شغّل لقطة حزم لمدة 24 ساعة على المضيف مع فتح التطبيق وتشغيله خاملاً. أي بيانات صادرة غير موجودة في قائمة السماح تُعد نتيجة تدقيق. كرر ذلك في كل مرة يُحدَّث التطبيق — ملاحظات الإصدار تُقلل عادةً من ذكر الاستدعاءات الصادرة الجديدة التي أُضيفت.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'سجل تدقيق يصمد أمام المراجعة',
        content:
          '**سجل التدقيق هو الأثر الذي ستقرأه السلطة الإشرافية أولاً.** يجب أن يُجيب عن سؤالين لكل عملية استرجاع: من سأل وماذا أعطاه النظام. أي شيء أقل من ذلك وأنت تتجادل بالكلمات؛ مع التسجيل السليم أنت تعرض إيصالات.',
        items: [
          '**أحداث الاستيعاب**: معرف المستند، قيمة التجزئة (SHA-256)، اسم الملف، مسار المصدر، مَن رفعه، الطابع الزمني، وسم التصنيف، الحجم، عدد الصفحات، مجموعة المالك، فئة الاحتفاظ. صنّف كل مستند عند الاستيعاب — التصنيف بأثر رجعي لمجموعات بيانات ضخمة صعب ونادراً ما يكتمل.',
          '**أحداث الاسترجاع**: معرف الاستعلام، معرف المستخدم، الطابع الزمني، معرفات القطع المستردة (ومعرفات المستندات التي جاءت منها)، درجات الاسترجاع، تجزئة الإجابة النهائية، معرف النموذج، معرف أداة التضمين، قيمة Top-K المستخدمة. نص الاستعلام نفسه حساس — سجّله فقط إذا كان غرض معالجتك يشمل ذلك؛ وإلا سجّل التجزئة والطابع الزمني.',
          '**الأحداث الإدارية**: ترقية النموذج، تغيير أداة التضمين، إعادة بناء الفهرس، تغييرات المستخدمين والمجموعات، تغييرات قوائم تحكم الوصول، تغييرات سياسة الوصول. كل حدث موقَّع من المسؤول المعني.',
          '**مقاومة التلاعب**: سجل قابل للإضافة فقط، سلسلة تجزئة (كل إدخال يُشير إلى تجزئة الإدخال السابق)، مفتاح توقيع خارج النطاق، تسوية دورية مقابل نسخة منفصلة يحتفظ بها مسؤول آخر أو وسيط WORM.',
          '**الاحتفاظ**: يتوافق مع نافذة التحقيق لدى السلطة الإشرافية — بحد أدنى فترة احتفاظ الملف؛ عادةً ست إلى سبع سنوات للصناعات الخاضعة للتنظيم؛ أطول حيثما تنطبق قواعد القطاع.',
          '**خط الأنابيب**: يُصدر الخادم أحداثاً منظمة؛ يرسلها محوِّل إلى مخزن سجلات منفصل بصلاحيات كتابة مقيدة. لا ينبغي أبداً أن يملك خادم التطبيق صلاحية حذف إدخالات السجل أو إعادة كتابتها — الفصل بين الوظائف هو ما يجعل السجل موثوقاً.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تسجيل نص الاستعلام يطرح سؤاله الخاص بموجب اللائحة الأوروبية — قد يحتوي الاستعلام في حد ذاته على بيانات شخصية (مثل: "لخّص التاريخ الطبي للمريض X"). قرر عند التصميم ما إذا كان غرض معالجتك يشمل تسجيل الاستعلامات؛ وإن لم يكن كذلك، فسجّل فقط البيانات الوصفية اللازمة للتدقيق والتشخيص التشغيلي.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'سلسلة بيانات الأصل من القطعة إلى المصدر',
        content:
          '**سلسلة بيانات الأصل هي العمود الفقري لكل الضوابط الأخرى.** بدونها تفشل طلبات الحذف ويستحيل التحقق من الإجابات وتنهار سلسلة التدقيق. ابنِ سلسلة بيانات الأصل من أول عملية استيعاب لا بعدها.',
        items: [
          '**سلسلة بيانات الأصل على مستوى المستند**: لكل مستند معرف داخلي ثابت وتجزئة محتوى وطابع زمني للاستيعاب ومالك وتصنيف وفئة احتفاظ. يبقى الملف الأصلي في مخزن المصدر؛ يحتفظ نظام RAG بمرجع لا بالنسخة الأصلية.',
          '**سلسلة بيانات الأصل على مستوى القطعة**: تُشير كل قطعة إلى معرف مستند أبيها والصفحة (للمستندات PDF) والقسم (للمستندات المهيكلة) وإزاحة الحرف والطول وإصدار استراتيجية التقطيع. حين تُعيد التقطيع (وستفعل)، تُوسَم القطع القديمة بعلامة "محذوفة" ولا تُحذف في مكانها — حتى تظل سجلات الاسترجاع القديمة قابلة للتحليل.',
          '**سلسلة بيانات الأصل على مستوى التضمين**: يُشير كل متجه تضمين إلى معرف قطعته ومعرف أداة التضمين. حين تغير أداة التضمين، تحتفظ بالمتجهات القديمة حتى تُتحقق الجديدة وتُغلق أي ملفات أشارت إليها؛ ثم فقط تُحذف.',
          '**سلسلة بيانات الأصل على مستوى الإجابة**: تُشير كل إجابة مُولَّدة إلى معرفات القطع التي أنتجتها ومعرف النموذج وإصدار قالب الموجه والطابع الزمني. حين يسأل مستخدم "من أين جاءت هذه الإجابة؟"، يحل النظام القطعة → المستند → الصفحة بنقرة واحدة.',
          '**إعادة الفهرسة بدون كسر سلسلة بيانات الأصل**: تُحافظ عمليات إعادة البناء على معرفات المستندات وتزيد من إصدارات استراتيجية التقطيع. تظل معرفات القطع القديمة قابلة للتحليل في سجلات الاسترجاع حتى بعد تقدم الفهرس الحي.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'اختبر سلسلة بيانات الأصل ربع سنوياً. اختر استرجاعاً عشوائياً من سجل التدقيق وتتبعه للخلف: معرف القطعة → معرف المستند → الملف الأصلي في مخزن المصدر → فئة الاحتفاظ. إن كُسر أي خطوة، أصلح المخطط قبل التفتيش الإشرافي القادم — لا أثناءه.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'التشفير والتحكم في الوصول',
        content:
          '**التشفير في حالة السكون والتشفير أثناء النقل والتحكم في الوصول المرتبط بمزود هويتك الحالي.** هذه ضوابط مفهومة جيداً؛ وضع الفشل فيها هو نسيان أحد الطبقات الثلاث لا سوء تطبيق الطبقة المختارة.',
        items: [
          '**التشفير في حالة السكون** — تشفير قرص كامل على المضيف (LUKS على Linux، BitLocker على Windows، FileVault على macOS للحواسيب المحمولة). للخوادم، شفّر أيضاً الأقسام التي تحوي مخزن المتجهات ومرحلة الاستيعاب. مفاتيح يديرها العميل لأي نشر سحابي مع دوران للمفاتيح وفق سياستك.',
          '**التشفير أثناء النقل** — TLS لأي قفزة بين خدمة وأخرى حتى على localhost. سياسة تشفير متوافقة مع خط الأساس القطاعي لديك. TLS المتبادل حيث يستوجبه نموذج التهديد — عادةً اتصالات خادم-خادم في عمليات النشر السحابية.',
          '**المصادقة** — تسجيل دخول موحد مقابل مزود هويتك الحالي (OIDC أو SAML). بلا حسابات محلية في الإنتاج. مصادقة متعددة العوامل مُطبَّقة على أي مستخدم يملك وصولاً إدارياً أو إلى مجموعات حساسة.',
          '**التفويض** — وصول قائم على المجموعات على مستوى المجموعة؛ قوائم تحكم وصول على مستوى المستند حيث يستلزم الملف ذلك (مثل غرف بيانات الاندماج والاستحواذ وتحقيقات التوظيف). يجب أن يُطبّق خط أنابيب الاسترجاع قوائم تحكم الوصول وقت الاستعلام — لا الواجهة فقط. المستخدم الذي لا يستطيع رؤية مستند يجب ألا تُعاد إليه قطعه أيضاً.',
          '**الوصول الإداري** — إدارة الوصول المتميز لأي حساب يستطيع قراءة الفهارس أو إعادة بنائها أو عرض سجلات التدقيق أو تغيير قوائم تحكم الوصول. الترفيع في الوقت المناسب مع مبرر مسجل أفضل من حقوق مسؤول دائمة.',
          '**أمن نقطة النهاية** — أجهزة مُدارة لعمليات نشر الحاسوب المحمول (مُسجَّلة في MDM ومشفرة وسياسة قفل الشاشة مُطبَّقة). الحاسوب المحمول للمهني الفرد مع مخزن المستندات مفكوك التشفير ومتروك بلا مراقبة في مقهى هو اختراق البيانات الذي لا تريد الإبلاغ عنه.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'نمط الحاسوب المحمول لمستخدم واحد',
        content:
          '**الحاسوب المحمول لمستخدم واحد هو النمط الأسهل للعزل الهوائي والأصعب للتوسع.** مناسب للمهنيين الأفراد والمراجعات العرضية؛ غير مناسب لأي شيء يحتاج البقاء بعد مستخدم واحد أو الصمود بعد مغادرته.',
        items: [
          '**الأجهزة** — حاسوب محمول من فئة محطة العمل مع تشفير القرص الكامل ومعالج رسومي منفصل (أو آلة حديثة ذات ذاكرة موحدة) و32 غيغابايت على الأقل من الذاكرة العشوائية. يجب أن يتسع النموذج وأداة التضمين في الذاكرة إلى جانب ذاكرة مخزن المتجهات. لمتطلبات الأجهزة واختيار النماذج حسب ذاكرة الفيديو VRAM، راجع [دليل أجهزة LLM المحلية](/ar/local-llms/local-llm-hardware-guide-2026).',
          '**البرمجيات** — تطبيق RAG سطح مكتب مكتفٍ بذاته يعمل محلياً؛ نموذج LLM مفتوح المصدر بأوزان مُنزَّلة مرة واحدة ومثبتة بقيمة تجزئة؛ أداة تضمين مفتوحة المصدر؛ مخزن متجهات محلي على القرص المشفر. لمقارنة النماذج مفتوحة المصدر المناسبة لـ RAG المحلي، راجع [أفضل النماذج مفتوحة المصدر لبرنامج Ollama](/ar/local-llms/top-open-source-models-ollama).',
          '**وضع الشبكة** — معزول هوائياً أثناء العمل؛ يُعاد الاتصال فقط للتحديثات الموقعة الصريحة. اضبط جدار ناري نظام التشغيل لإسقاط كل الاتصالات الصادرة افتراضياً وأنشئ استثناءات صريحة لسير عمل التحديث.',
          '**التعامل مع المستندات** — مستندات المصدر على القرص المشفر؛ بنية مجلدات منفصلة لكل ملف؛ نسخ احتياطية مشفرة أسبوعية على قرص خارجي مُخزَّن في موقع مختلف.',
          '**وضع التدقيق** — سجل التدقيق على مستوى نظام التشغيل (تسجيل الدخول والوصول إلى الملفات وأحداث الأجهزة الطرفية) هو الحد الأدنى. أحداث مستوى التطبيق أسهل في نمط الخادم المحلي؛ لنمط الحاسوب المحمول، عامل سجل نظام التشغيل كالسجل الأساسي واستكمله بملاحظات يدوية لكل ملف.',
          '**القيود** — الحاسوب المحمول لمستخدم واحد ليس منصة متعددة المستخدمين. مشاركة الحاسوب أو مشاركة الحسابات أو نسخ مخزن المستندات إلى جهاز زميل يكسر وضع التدقيق وتقييم الأساس القانوني.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للمهنيين الأفراد الذين يعملون على ملفات سرية، يُعد نمط الحاسوب المحمول لمستخدم واحد حقاً أقوى وضع خصوصية متاح — أفضل من أي سحابة وأقوى من كثير من عمليات النشر المحلية. المقايضة تشغيلية: حين يعطب الحاسوب المحمول، يرث الملف وقت التعافي المحدد بانضباط نسخك الاحتياطية.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'نمط الخادم المحلي',
        content:
          '**الخادم المحلي هو النمط العملي لـ RAG الإداري الخاضع للتنظيم.** يتوسع ليشمل 5–50 مستخدماً وبضعة آلاف من المستندات، ويدعم سجلات تدقيق سليمة، ويبقى داخل محيطك المادي. التكلفة هي عمل عمليات تقنية معلومات حقيقي.',
        items: [
          '**الأجهزة** — خادم بمعالجَي رسوميَّين من فئة المؤسسات (معالجات الرسوميات من فئة محطة العمل مقبولة للمجموعات الأصغر)، وأقراص متكررة، وذاكرة ECC، ومزوّد طاقة غير منقطعة. خطط لتخزين يعادل 2–4 أضعاف حجم مجموعة المستندات الخام لتغطية المتجهات والفهارس والسجلات والنسخ الاحتياطية.',
          '**الشبكة** — شبكة VLAN مخصصة خلف جدار ناري الشركة؛ قائمة سماح للبيانات الصادرة أو عزل هوائي كامل حسب نموذج التهديد. وصول داخلي عبر شبكة الشركة فقط، بلا دخول عام.',
          '**مجموعة البرمجيات** — منصة RAG مستضافة ذاتياً (صورة خادم مستقلة أو نشر في حاويات)، نموذج LLM مفتوح المصدر كنموذج للمحادثة، أداة تضمين مفتوحة المصدر، ومخزن متجهات مناسب لحجم المجموعة. يعمل خادم التطبيق ومخزن المتجهات ومحوِّل السجلات كعمليات منفصلة بحسابات خدمة منفصلة.',
          '**الهوية** — مُدمجة مع مزود هوية الشركة؛ عضوية المجموعة تتحكم في وصول المجموعات. المجموعات الحساسة مُؤمَّنة بسير عمل موافقة إضافية.',
          '**النسخ الاحتياطي والتعافي من الكوارث** — نسخ احتياطية تزايدية ليلية لمخزن المستندات والفهرس المتجهي؛ نسخ احتياطية كاملة أسبوعية؛ نسخة خارجية تحتفظ بها تقنية المعلومات. دليل استرداد موثق ومُختبر سنوياً على الأقل.',
          '**العمليات** — نافذة ترقيع وفق سياسة إدارة التغيير؛ مراجعات وصول ربع سنوية؛ دليل حذف مُدرَّب عليه لطلبات الحق في النسيان؛ مسار ترقية موثق للنموذج وأداة التضمين يُحافظ على سلسلة بيانات الأصل.',
          '**تخطيط السعة** — بضعة آلاف من المستندات و5–50 مستخدماً متزامناً يتناسبون بيُسر مع خادم GPU متوسط الرتبة. ما وراء ذلك، خطط إما لمضيف أقوى أو الانتقال إلى نمط السحابة الخاصة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'نظام RAG المحلي هو النمط الأكثر عرضة للفشل لأسباب غير تقنية: نسخة احتياطية لم تُستردّ قط، حساب مسؤول مُشترَك بين موظفي تقنية المعلومات، مزوّد طاقة غير منقطعة لم يختبره أحد، محوِّل سجلات كان يُسقط الأحداث بصمت لشهرين. الضوابط التقنية أسهل من النظافة التشغيلية.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'خيارات قواعد البيانات المتجهية لـ RAG المحلي',
        content:
          '**اختيار مخزن المتجهات نادراً ما يُحدد الامتثال — لكنه يُشكّل التكلفة التشغيلية وسقف التوسع ومدى نظافة تطبيق دليل تشغيل الحذف.** معظم عمليات النشر الخاضعة للتنظيم تختار إحدى هذه الخيارات الست.',
        columns: ['قاعدة البيانات المتجهية', 'النوع', 'الاستضافة الذاتية في الاتحاد الأوروبي', 'أفضل نمط RAG'],
        rows: [
          {
            'قاعدة البيانات المتجهية': '**Chroma**',
            'النوع': 'مفتوح المصدر، خفيف الوزن',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'الحاسوب المحمول + الخادم المحلي الصغير',
          },
          {
            'قاعدة البيانات المتجهية': '**Qdrant**',
            'النوع': 'مفتوح المصدر، عالي الأداء',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'الخادم المحلي، كثيف التصفية',
          },
          {
            'قاعدة البيانات المتجهية': '**Weaviate**',
            'النوع': 'مفتوح المصدر، متكامل الميزات',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'الخادم المحلي + البحث الهجين',
          },
          {
            'قاعدة البيانات المتجهية': '**Milvus**',
            'النوع': 'مفتوح المصدر، مستوى المؤسسات',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'الخادم المحلي واسع النطاق',
          },
          {
            'قاعدة البيانات المتجهية': '**pgvector**',
            'النوع': 'امتداد PostgreSQL',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'الفرق التي تستخدم Postgres مسبقاً',
          },
          {
            'قاعدة البيانات المتجهية': '**Pinecone**',
            'النوع': 'SaaS مُدار',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '⚠️ مستضاف في الولايات المتحدة',
            'أفضل نمط RAG': 'السحابة الخاصة الأوروبية فقط (مع تحفظات)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'نمط السحابة الخاصة الأوروبية',
        content:
          '**يستخدم نمط السحابة الخاصة الأوروبية مزود سحابة في منطقة ذات سيادة مع مفاتيح يديرها العميل وإقامة بيانات حصرياً في الاتحاد الأوروبي وبنود تعاقدية تحظر تدريب الذكاء الاصطناعي على بيانات العميل.** هو الإجابة الصحيحة للنشر متعدد الكيانات ومتطلبات المرونة متعددة المناطق والفرق التي تفتقر إلى القدرة التشغيلية للخادم المحلي الحقيقي.',
        items: [
          '**اختيار المزود** — عرض ذو سيادة أوروبية من مزود خدمات ضخم أو مزود سحابة أوروبي. يجب أن يدرج اتفاق معالجة البيانات كل معالج فرعي؛ يجب معالجة آليات النقل إذا كان أي معالج فرعي خارج المنطقة الاقتصادية الأوروبية. تحليل أثر النقل على غرار Schrems II جزء من الملف حتى حين يكون المعالج المباشر مُقيماً في الاتحاد الأوروبي.',
          '**المنطقة** — أوروبية حصراً مع ضمانات صريحة لإقامة البيانات. النسخ المتكرر عبر المناطق إلى مناطق أوروبية أخرى فقط. بلا منطقة أمريكية كخيار احتياطي حتى مؤقتاً حتى للنسخ الاحتياطية.',
          '**التشفير** — مفاتيح يديرها العميل مع الدوران؛ إحضار مفتاحك الخاص حيث يدعمه المزود؛ أحداث الوصول إلى المفاتيح مُسجَّلة بصورة منفصلة عن السجلات التشغيلية لمزود السحابة.',
          '**الشبكة** — شبكة VPC خاصة بلا دخول عام؛ وصول فقط عبر اتصال خاص (رابط مخصص أو VPN) من شبكة شركتك؛ قائمة سماح للبيانات الصادرة لأي تبعية خارجية.',
          '**الهوية** — مُدمجة مع مزود هوية الشركة؛ IAM أصلي سحابي مرتبط بهويات المستخدمين لا بحسابات خدمة مشتركة؛ قوائم تحكم وصول لكل مجموعة مُطبَّقة في خط أنابيب الاسترجاع.',
          '**التسجيل** — سجل تدقيق أصلي سحابي مُغذَّى في نظام SIEM الحالي لديك؛ استيعاب منفصل لأحداث تدقيق التطبيق؛ احتفاظ محمي من التلاعب يلتزم بتوقعات الجهة الإشرافية.',
          '**العقود** — يجب أن يكون اتفاق معالجة البيانات متوافقاً مع المادة 28 ويُدرج المعالجين الفرعيين ويُعالج البنود التعاقدية القياسية حيثما لزم ويتضمن بنداً صريحاً لعدم التدريب على بيانات العميل يشمل أوزان النموذج وأي خدمات مساعدة (بحث، قياس عن بُعد، دعم).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'يبدو نمط السحابة الخاصة الأوروبية أكثر تساهلاً من الخادم المحلي لأنه يستخدم معالجاً خارجياً — لكن بمنطقة ذات سيادة ومفاتيح يديرها العميل وبند تعاقدي لعدم التدريب وتحكم سليم في البيانات الصادرة، يستطيع مجاراة الخادم المحلي أو التفوق عليه في التوافر ووضع التدقيق. الملف الامتثالي أضخم؛ المخاطر التشغيلية أصغر.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'التصنيف بموجب قانون الذكاء الاصطناعي الأوروبي: مخاطر محدودة مقابل مخاطر عالية',
        content:
          '**معظم عمليات نشر RAG المحلي هي أنظمة ذكاء اصطناعي محدودة المخاطر بموجب قانون الذكاء الاصطناعي الأوروبي — لكن ما إن يُغذي الاسترجاع قراراً آلياً يؤثر على شخص، ينتقل التصنيف إلى المخاطر العالية وتتضاعف الالتزامات.** صنّف قبل أن تبني.',
        items: [
          '**مخاطر محدودة (معظم RAG المحلي)** — يسترجع النظام المستندات ويُلخصها لمساعدة إنسان؛ يتخذ الإنسان القرار. الالتزامات تتعلق أساساً بالشفافية: يجب أن يعلم المستخدمون أنهم يتفاعلون مع ذكاء اصطناعي، ويجب أن يكون المحتوى المُولَّد قابلاً للتمييز، ولا تصاميم مُضلِّلة أو مُلاعِبة.',
          '**مخاطر عالية** — يُغذي الاسترجاع قراراً آلياً في مجالات يُعددها القانون: تسجيل الجدارة الائتمانية وفرز الموظفين وقبول الطلاب والخدمات العامة الأساسية وإنفاذ القانون والهجرة والقضاء والتعرف البيومتري والبنية التحتية الحيوية. نظام RAG لدعم القرار السريري الذي يوصي بعلاجات يُصنَّف عالي المخاطر؛ نظام RAG يُلخص بروتوكولات سريرية لمساعدة طبيب على القراءة الأسرع ليس كذلك.',
          '**التزامات المخاطر العالية** — نظام إدارة مخاطر عبر دورة الحياة، حوكمة البيانات (بيانات التدريب والتحقق والاختبار موثقة)، توثيق تقني، تسجيل أحداث تلقائي، شفافية ومعلومات للمستخدمين، رقابة بشرية، تدابير الدقة والمتانة، تقييم المطابقة قبل الطرح في السوق، رصد ما بعد الطرح.',
          '**اعتبارات الذكاء الاصطناعي للأغراض العامة** — استخدام نموذج LLM للأغراض العامة (مفتوح المصدر أو غيره) لا ينقل التزامات المخاطر العالية إلى مزود النموذج. المُنتشر (مؤسستك) يتحمل التزامات المخاطر العالية للنظام الذي تبنيه بذلك النموذج.',
          '**الممارسات المحظورة** — التسجيل الاجتماعي والكشط غير المستهدف لصور الوجه والتعرف على المشاعر في أماكن العمل والمدارس وبعض أشكال التصنيف البيومتري في الوقت الفعلي. هذه خارجة عن النطاق بصرف النظر عن مدى محلية التشغيل.',
          '**التوثيق كأثر تدقيق** — الملف التقني المطلوب للأنظمة عالية المخاطر ليس تسليمة لمرة واحدة؛ إنه وثيقة حية. اربطه بعملية إدارة التغيير حتى تنعكس كل ترقية نموذج وكل تغيير لأداة تضمين وكل تغيير في قوائم تحكم الوصول.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الخط الفاصل بين المخاطر العالية والمحدودة يُرسمه حالة الاستخدام لا التقنية. المخزن المتجهي ذاته والنموذج ذاته يمكن أن يكون محدود المخاطر في نشر مساعد بحثي وعالي المخاطر في نشر فرز موظفين في الموارد البشرية. صنّف لكل حالة استخدام لا لكل منصة.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'متطلبات تقييم أثر حماية البيانات',
        content:
          '**تقييم أثر حماية البيانات (المادة 35) إلزامي للمعالجة التي من المرجح أن تُفضي إلى مخاطر عالية لحقوق وحريات أصحاب البيانات.** معظم RAG المحلي الخاضع للتنظيم يقع في النطاق. عامل التقييم كوثيقة تصميم لا كأثر امتثال تقوم به بأثر رجعي.',
        items: [
          '**متى يكون إلزامياً** — التقييم المنهجي الشامل الذي يشمل التنميط ذا الآثار القانونية؛ المعالجة واسعة النطاق لبيانات الفئات الخاصة (الصحة والقانون والبيومترية والعرق والسياسة والدين والنقابة)؛ الرصد المنهجي للمناطق العامة. تنشر السلطات الإشرافية الوطنية قوائم العمليات التي تستلزم دائماً تقييماً — راجع السلطة المختصة لديك.',
          '**نطاق التقييم** — الغرض والأساس القانوني؛ وصف عمليات المعالجة؛ تقييم الضرورة والتناسب؛ تقييم المخاطر على أصحاب البيانات؛ تدابير التخفيف والمخاطر المتبقية؛ استشارة مسؤول حماية البيانات و(حيثما ظلت المخاطر المتبقية عالية) السلطة الإشرافية قبل بدء المعالجة.',
          '**المخاطر الخاصة بـ RAG** الواجب معالجتها: إعادة تعريف الأفراد من القطع المستردة؛ توليد معلومات غير دقيقة تؤثر على شخص؛ تسريب عبر السجلات أو النسخ الاحتياطية؛ اكتمال الحذف في طلبات الحق في النسيان؛ التلوث المتقاطع بين المجموعات؛ وصول مفرط الاتساع للمستخدمين ذوي الامتيازات.',
          '**تدابير التخفيف الواجب توثيقها** — الضوابط الستة أعلاه، وإخفاء البيانات أو إخفاء الهوية على مستوى القطعة حيث يكون الأساس القانوني موافقةً أو مصلحةً مشروعة؛ دليل تشغيل الحذف مع دليل على التدريب؛ مراجعات الوصول بإيقاع محدد.',
          '**المراجعون** — يوافق مسؤول حماية البيانات؛ تُستشار السلطة الإشرافية حيثما ظلت المخاطر المتبقية عالية بعد التخفيف. يذهب التقييم الموقَّع في الملف التقني إلى جانب وثائق مطابقة قانون الذكاء الاصطناعي الأوروبي إذا كان النظام عالي المخاطر أيضاً.',
          '**وثيقة حية** — أعد التقييم حين يتوسع مجموعة البيانات توسعاً جوهرياً، وحين يتغير النموذج أو أداة التضمين، وحين تتغير حدود الوصول، أو سنوياً كخط أساس. اربط ذلك بعملية إدارة التغيير.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'تقييم أثر حماية البيانات المكتوب في الأسبوع الثاني من المشروع أداة تخطيط. والمكتوب في الأسبوع العاشر وثيقة دفاعية. الأول أكثر نفعاً ويميل إلى الكشف عن تغييرات تصميم تُخفض المخاطر المتبقية النهائية. ابدأ التقييم قبل قرار الشراء لا بعد النشر.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'ملاحظات خاصة بألمانيا (Datenschutz)',
        content:
          '**تُضيف ممارسة حماية البيانات الألمانية قانون BDSG-Neu والقواعد القطاعية والمشاركة في صنع القرار للمجلس العمالي فوق الخط الأساسي للائحة الأوروبية.** نشر RAG يُلبي متطلبات اللائحة الأوروبية العامة قد يفشل مراجعةً ألمانية إن أُغفلت هذه النقاط.',
        items: [
          '**المشاركة في صنع القرار للمجلس العمالي (Betriebsrat)** — بموجب §87 BetrVG، يستلزم أي نظام يراقب أداء الموظفين أو سلوكهم اتفاقية مع المجلس العمالي قبل النشر. نظام RAG على محتوى يؤلفه الموظفون (رسائل البريد الإلكتروني والمستندات الداخلية) يُفعّل ذلك عادةً. أشرك المجلس العمالي في مرحلة التصميم؛ يصبح الاتفاق (Betriebsvereinbarung) جزءاً من ملف الأساس القانوني.',
          '**السرية القطاعية** — يُجرّم §203 StGB انتهاك السرية المهنية (المحامون والأطباء والمستشارون الضريبيون والمراجعون). نشر RAG بطريقة تُعرّض بيانات العملاء المحمية لموظفين غير مُلزَمين أو معالجين خارجيين قد يُشكل جريمة جنائية لا مسألة مدنية فحسب. نمط الخادم المحلي أو المعزول هوائياً هو الخيار الأكثر أماناً في هذه القطاعات.',
          '**قانون وسائل التواصل (TTDSG) وقياس الأداء عن بُعد** — قياس الأداء عن بُعد الصادر الذي يمس أجهزة المستخدمين النهائيين يخضع لا للائحة الأوروبية فحسب بل لقانون TTDSG أيضاً. العزل الهوائي يُزيل السؤال؛ عمليات النشر ذات التحكم في البيانات الصادرة يجب أن تتحقق من أن كل استدعاء صادر مُوافَق عليه أو ضروري أو تقني بحت.',
          '**توقعات الشفافية** — تستلزم قواعد الشفافية الفيدرالية والولائية أحياناً الإفصاح عن اتخاذ القرارات المدعوم بالذكاء الاصطناعي لأصحاب البيانات. حتى حين لا يكون مطلوباً صراحةً، الإفصاح بلغة واضحة بأن الاسترجاع مدعوم بالذكاء الاصطناعي وأن المراجع البشري لا يزال مسؤولاً عن القرار هو الخيار الافتراضي القابل للدفاع.',
          '**Aufsichtsbehörden (السلطات الإشرافية الولائية)** — تُنظَّم الرقابة على حماية البيانات على المستوى الولائي للقطاع الخاص. تواصل مع المفوض المختص للمنطقة (Landesbeauftragter für Datenschutz) حيثما لزمت استشارة بموجب المادة 36. وثائق المواقف الصادرة عن كبار المفوضين الولائيين بشأن أدوات الذكاء الاصطناعي هي مدخلات مفيدة للتقييم.',
          '**لغة التوثيق** — تقبل السلطات الإشرافية الألمانية الوثائق الإنجليزية، لكن الأثار الرئيسية الموجهة للمستخدمين (إشعارات الخصوصية وإفصاحات الشفافية واتفاقيات المجلس العمالي) ينبغي أن تكون بالألمانية لأسباب قانونية وعملية.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'قائمة مراجعة الامتثال قبل الإطلاق',
        content:
          '**اطرح هذه القائمة كاملةً قبل أي نشر إنتاجي.** كل بند وضع فشل حقيقي من تدقيق حقيقي؛ القائمة قصيرة عمداً حتى تُستخدم فعلاً.',
        items: [
          '☐ **الأساس القانوني موثق** لكل فئة من بيانات المصدر — موافقة أو عقد أو التزام قانوني أو مصلحة حيوية أو مهمة عامة أو مصلحة مشروعة مع اختبار موازنة في الملف.',
          '☐ **تقييم أثر حماية البيانات معتمد** من مسؤول حماية البيانات مع دليل تشغيل حذف مُدرَّب عليه مُرفَق.',
          '☐ **سجل أنشطة المعالجة (المادة 30)** مُحدَّث ليشمل نظام RAG وفئات البيانات والاحتفاظ والمستلمين وآليات النقل (عادةً لا يوجد في RAG المحلي).',
          '☐ **الضوابط الستة مُتحقَّق منها من البداية للنهاية**: العزل الهوائي أو قائمة السماح والتحكم في الوصول القائم على الأدوار وسجلات التدقيق والتشفير وسلسلة بيانات الأصل ومسار الحذف.',
          '☐ **لقطة الحزمة الصادرة** نظيفة خلال اختبار نقع 24 ساعة؛ مُكرَّرة بعد كل تحديث للتطبيق.',
          '☐ **تكامل مزود الهوية** مُختبَر مع مستخدم حقيقي من كل مستوى وصول؛ يستلزم الوصول إلى المجموعات الحساسة ترفيعاً منفصلاً.',
          '☐ **نسخ احتياطية منجزة واسترداد مُختبَر فعلياً** على أجهزة معزولة لا مُتحقَّق منه في لوحة حالة فحسب.',
          '☐ **دليل تشغيل الحق في النسيان مُدرَّب عليه** ببيانات اصطناعية يشمل مخزن المصدر والفهرس المتجهي والتضمينات المخزنة مؤقتاً واحتفاظ سجل الاسترجاع.',
          '☐ **تصنيف قانون الذكاء الاصطناعي الأوروبي مُأكَّد** (مخاطر محدودة مقابل مخاطر عالية)؛ ملف تقني جاهز إن كانت المخاطر عالية.',
          '☐ **عقود الموردين (إن وجدت) مُراجَعة**: اتفاق معالجة البيانات متوافق مع المادة 28، المعالجون الفرعيون مُدرَجون، بند عدم التدريب يشمل بيانات العميل.',
          '☐ **اتفاقية المجلس العمالي** موضوعة حيثما كان المحتوى الذي يؤلفه الموظفون ضمن النطاق (ألمانيا؛ قواعد مماثلة في أماكن أخرى من الاتحاد الأوروبي).',
          '☐ **إشعار الشفافية** مُعدّ بلغة مفهومة للمستخدم يشرح مساعدة الذكاء الاصطناعي والإنسان في الحلقة وتدفق البيانات.',
          '☐ **دليل تشغيل الاستجابة للحوادث** مُحدَّث ليشمل سيناريوهات خاصة بـ RAG: تسريب الفهرس، التلاعب بالسجلات، فشل الحذف، تبديل النموذج مع كسر سلسلة بيانات الأصل اللاحق.',
          '☐ **مراجعة الوصول الربع سنوية** مُجدوَلة ومُعيَّنة؛ المراجعة الأولى في التقويم قبل الإطلاق.',
          '☐ **التحديث السنوي لتقييم أثر حماية البيانات** مُجدوَل ومرتبط بعملية إدارة التغيير.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**خطأ 1: معاملة "المحلي" مرادفاً لـ "المتوافق".** التشغيل المحلي يحل أسئلة النقل والمعالج؛ لكنه لا يحل الأساس القانوني أو تقييم الأثر أو سجل التدقيق أو حقوق أصحاب البيانات. الامتثال برنامج متعدد الطبقات لا خيار نشر.',
          '**خطأ 2: تخطي تقييم أثر حماية البيانات لأن النظام "مجرد أداة بحث".** أداة بحث تستوعب بيانات الفئات الخاصة على نطاق واسع هي بالضبط ما تغطيه المادة 35. تخطي التقييم يعني تخطي دفاع التدقيق.',
          '**خطأ 3: تسجيل نص الاستعلام دون التحقق من الأساس القانوني.** الاستعلامات نفسها بيانات شخصية حين تُشير إلى أفراد. قرر عند التصميم ما إذا كان غرض معالجتك يشمل تسجيل الاستعلامات؛ إن لم يكن كذلك، فسجّل التجزئة والبيانات الوصفية فقط.',
          '**خطأ 4: نسيان التضمينات المخزنة مؤقتاً في دليل تشغيل الحذف.** حذف المصدر يعمل. إعادة بناء الفهرس المتجهي تعمل. طبقة الذاكرة المؤقتة التي أضافتها منصتك للأداء، وبصمات التضمين في سجل الاسترجاع، وسجل الإجابات في مخزن المحادثة هي الأجزاء التي يُغفلها الجميع.',
          '**خطأ 5: السماح للمستخدمين ذوي الامتيازات بتجاوز قوائم تحكم وصول المجموعات.** "المسؤولون يستطيعون رؤية كل شيء" مريح وشائع جداً؛ وهو أيضاً السبب الوحيد الأكثر شيوعاً لفشل عمليات التدقيق. يجب أن يكون الوصول المتميز هو بدوره خاضعاً للتحكم ومحدداً بوقت ومُبرَّراً لكل استخدام.',
          '**خطأ 6: إعادة استخدام مساحة عمل لعدة ملفات أو عملاء.** التلوث المتقاطع للاستشهادات والسياق إخفاق في السرية حتى قبل أن يراه أي طرف خارجي. ملف أو عميل واحد لكل مجموعة؛ قوائم تحكم وصول منفصلة؛ احتفاظ منفصل.',
          '**خطأ 7: شراء عزل هوائي ثم توصيل هاتف شخصي للاختبار.** محيط العزل الهوائي يجب أن يشمل الأشخاص القادرين على نقل البيانات عبره. سياسة نقاط النهاية جزء من الضابط لا شاغل منفصل.',
          '**خطأ 8: معاملة اختيار النموذج وأداة التضمين كـ "اضبط وانسَ".** كل ترقية حدث إدارة تغيير يحمل انعكاسات على تقييم الأثر وسلسلة بيانات الأصل وسلسلة التدقيق. خطط لسير عمل الترقية قبل أول نشر إنتاجي.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[النص الكامل للائحة GDPR (رسمي)](https://gdpr-info.eu/) — النص الكامل للائحة الأوروبية العامة لحماية البيانات مع تعليق لكل مادة.',
          '[النص الكامل لقانون الذكاء الاصطناعي الأوروبي](https://artificialintelligenceact.eu/) — النص الكامل للتشريع مع إطار تصنيف المخاطر.',
          '[إطار NIST لإدارة مخاطر الذكاء الاصطناعي](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — الإطار الفيدرالي الأمريكي المنطبق على تقييم مخاطر الذكاء الاصطناعي.',
          '[BDSG-Neu (قانون حماية البيانات الفيدرالي الألماني)](https://www.gesetze-im-internet.de/bdsg_2018/) — التطبيق الألماني للائحة الأوروبية مع إضافات قطاعية.',
          '[مبادئ توجيهية EDPB بشأن تقييم الأثر](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — توجيهات المجلس الأوروبي لحماية البيانات حول متى وكيف تُجري تقييم أثر حماية البيانات.',
          '[BfDI (المفوض الفيدرالي الألماني لحماية البيانات)](https://www.bfdi.bund.de/) — وثائق مواقف المفوض الفيدرالي الألماني بشأن نشر الذكاء الاصطناعي.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل تشغيل RAG محلياً يلتزم تلقائياً باللائحة الأوروبية لحماية البيانات؟',
            a: 'لا. الاستضافة المحلية تحل سؤال النقل عبر الحدود وتُقلص قائمة المعالجين، لكن مبادئ اللائحة الأوروبية في المادة 5 (المشروعية والإنصاف والشفافية وتحديد الغرض وتقليل البيانات والدقة وتحديد فترة التخزين والنزاهة والسرية والمساءلة) لا تزال سارية. المادة 25 (حماية البيانات بالتصميم وبالإعداد الافتراضي) والمادة 30 (سجل أنشطة المعالجة) والمادة 32 (أمن المعالجة) والمادة 35 (تقييم الأثر) جميعها تنطبق بصرف النظر عن مكان تشغيل النموذج. RAG المحلي نقطة بداية قوية لا وضع امتثال مكتمل.',
          },
          {
            q: 'ما المطلوب للامتثال لقانون الذكاء الاصطناعي الأوروبي في نشر RAG محلي؟',
            a: 'صنّف حالة الاستخدام كمخاطر محدودة أو عالية. معظم عمليات نشر المساعد الاسترجاعي محدودة المخاطر وتستلزم التزامات الشفافية: يجب أن يعلم المستخدمون أنهم يتفاعلون مع ذكاء اصطناعي ويجب أن يكون المحتوى المُولَّد قابلاً للتمييز. ما إن يُغذي الاسترجاع قراراً آلياً في مجال مُعدَّد (الائتمان والتوظيف والتعليم والخدمات العامة وإنفاذ القانون والهجرة والقضاء والبيومترية والبنية التحتية الحيوية)، يُصبح النشر عالي المخاطر وتنطبق الالتزامات الكاملة: نظام إدارة المخاطر وحوكمة البيانات والتوثيق التقني وتسجيل الأحداث التلقائي والشفافية والرقابة البشرية والدقة والمتانة وتقييم المطابقة والرصد بعد الطرح.',
          },
          {
            q: 'هل أحتاج تقييم أثر حماية البيانات لـ RAG المحلي؟',
            a: 'تقييم أثر حماية البيانات بموجب المادة 35 إلزامي للمعالجة التي من المرجح أن تُفضي إلى مخاطر عالية لحقوق وحريات أصحاب البيانات — وهو يشمل المعالجة واسعة النطاق لبيانات الفئات الخاصة (الصحة والقانون والبيومترية والعرق والسياسة والدين والنقابة) والتنميط المنهجي ذا الآثار القانونية. معظم RAG المحلي الخاضع للتنظيم (القانوني والطبي والمالي وتحقيقات الموارد البشرية) يقع في النطاق. أجرِ التقييم مبكراً وعامله كوثيقة تصميم وتدرّب على التدابير التخفيفية — خاصةً دليل تشغيل الحذف — قبل الإطلاق.',
          },
          {
            q: 'هل يمكنني مشاركة نشر RAG محلي عبر الأقسام؟',
            a: 'نعم، بعناية. التحكم في الوصول على مستوى المجموعة والمصادقة لكل مستخدم مقابل مزود هوية واحد وأساس قانوني واضح لاستخدام كل قسم هي الحد الأدنى. يجب أن يغطي تقييم الأثر أوسع مجموعة من أغراض المعالجة؛ إذا احتاج أي قسم أساساً قانونياً مختلفاً (مثل تحقيقات الموارد البشرية بموجب المصلحة المشروعة بينما يعمل الموظفون السريريون بموجب المهمة العامة)، فإن المجموعات المنفصلة ومجموعات الوصول المنفصلة أسهل في الدفاع من مجموعة واحدة بقوائم تحكم وصول مُعقَّدة.',
          },
          {
            q: 'كيف أُدقق في من وصل إلى أي مستند؟',
            a: 'سجّل كل عملية استرجاع بمعرف المستخدم والطابع الزمني ومعرفات القطع المستردة ومعرفات المستندات التي جاءت منها. أعِد توجيه الأحداث إلى مخزن سجلات منفصل بصلاحيات كتابة مقيدة تحت سيطرة إدارية مختلفة عن خادم التطبيق (فصل الوظائف). استخدم تخزيناً قابلاً للإضافة فقط مع سلسلة تجزئة حتى يكون التلاعب قابلاً للاكتشاف. يجب أن يتوافق الاحتفاظ مع نافذة التحقيق لدى السلطة الإشرافية وأي قواعد قطاعية — ست إلى سبع سنوات شائعة في الصناعات الخاضعة للتنظيم.',
          },
          {
            q: 'هل نماذج التضمين مفتوحة المصدر آمنة للاستخدام بموجب اللائحة الأوروبية؟',
            a: 'من حيث المبدأ نعم، بثلاثة شروط. أولاً، تُنزَّل الأوزان مرةً واحدةً وتُثبَّت بقيمة تجزئة حتى تتمكن من إثبات ما كان يعمل. ثانياً، الاستدلال محلي بالكامل بلا قياس عن بُعد أو استدعاءات صادرة — تحقق بلقطة حزم لا تثق بالوثائق فقط. ثالثاً، تُراجَع بطاقة النموذج والترخيص بحثاً عن أي بنود تتعارض مع الاستخدام التجاري السري (بعض تراخيص الأوزان المفتوحة تُرفق قيوداً على أنواع البيانات أو حالات الاستخدام). الخيار الافتراضي العملي لعمليات النشر الخاضعة للتنظيم هو إدراج عدد صغير من أدوات التضمين المُتحقَّق منها في قائمة السماح وإعادة المراجعة عند كل ترقية.',
          },
          {
            q: 'ما حال سلسلة بيانات الأصل للمخرجات المُولَّدة بالذكاء الاصطناعي؟',
            a: 'يجب أن تُشير كل إجابة مُولَّدة إلى معرفات القطع التي أنتجتها ومعرف النموذج وإصدار قالب الموجه والطابع الزمني. تُحلَّل القطع بعد ذلك إلى معرفات مستندات تُحلَّل بدورها إلى مستندات مصدر. هذه السلسلة هي ما يُتيح التحقق من الإجابة والدفاع عنها عند الطعن وتنفيذ طلب الحذف وإعادة إنتاج النتيجة لاحقاً. بدونها، "الذكاء الاصطناعي قال ذلك" هو دفاع التدقيق — وهو لا دفاع على الإطلاق.',
          },
          {
            q: 'هل يمكنني استخدام RAG المحلي للمستندات السرية للعملاء؟',
            a: 'في الغالب نعم، وأحياناً لا. كثير من اتفاقيات المحامين الخارجيين وعقود عدم الإفصاح الخاصة بالاندماج والاستحواذ وعقود بيانات المرضى تُجيز المراجعة المدعومة بالذكاء الاصطناعي شريطة ألا تتجاوز البيانات حدوداً محددة وأن تتوفر ضوابط معينة. نظام RAG المحلي يلتزم بشرط الحدود بحكم تصميمه؛ يجب مع ذلك الالتزام بقائمة الضوابط الخاصة بالعقد (تشفير ووصول وتدقيق واحتفاظ وإشعار بالاختراق). حيثما يحظر العقد معالجة الذكاء الاصطناعي كلياً، لا يُصلح ذلك أي نمط نشر — الحظر ينطبق سواء كان الذكاء الاصطناعي محلياً أم بعيداً.',
          },
          {
            q: 'ما التسجيل المطلوب للامتثال؟',
            a: 'أحداث الاستيعاب (معرف المستند والتجزئة والمصدر والرافع والطابع الزمني والتصنيف)، وأحداث الاسترجاع (معرف المستخدم وبيانات الاستعلام الوصفية أو التجزئة ومعرفات القطع المستردة ومرجع الإجابة ومعرف النموذج/أداة التضمين)، والأحداث الإدارية (ترقية النموذج وتغيير أداة التضمين وتغيير قوائم تحكم الوصول وتغيير المستخدمين/المجموعات)، والأحداث التشغيلية (النسخ الاحتياطي والاسترداد ودوران المفاتيح). جميع الأحداث مُوجَّهة إلى مخزن سجلات منفصل قابل للإضافة فقط بسلسلة تجزئة ومُحتفَظ به وفق متطلبات الملف والقطاع.',
          },
          {
            q: 'كيف أتعامل مع طلبات الحق في النسيان في RAG؟',
            a: 'من خلال دليل تشغيل موثق يسير الحذف عبر كل طبقة: مخزن مستندات المصدر والفهرس المتجهي والتضمينات المخزنة مؤقتاً واحتفاظ سجل الاسترجاع (حيث يُجيز الأساس القانوني حذف الإدخال في السجل) وأي إجابات مخزنة في سجل المحادثة. حذف المصدر مباشر؛ إعادة بناء الفهرس المتجهي مفهومة جيداً؛ التضمينات المخزنة مؤقتاً وسجل الإجابات هي الأجزاء التي تُغفلها معظم عمليات النشر. تدرّب على دليل التشغيل ببيانات اصطناعية ووثّق التدريب واربط دليل التشغيل بعملية الاستجابة للحوادث حتى يُطلق طلب حقيقي التسلسل المُدرَّب عليه لا الارتجال.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[AnythingLLM مقابل PrivateGPT مقابل Open WebUI: أفضل RAG محلي](/ar/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — أي المنصات المستضافة ذاتياً تناسب كل وضع امتثال مع ملاحظات حول القياس عن بُعد والتراخيص.',
          '[وكلاء الذكاء الاصطناعي المحليون لسير عمل الأعمال والامتثال الأوروبي](/ar/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — موضوع امتثال مجاور حين يُغذي الاسترجاع خطوات سير عمل آلية بدلاً من قارئ بشري.',
          '[أتمتة البريد الإلكتروني والتقويم بـ LLM المحلي](/ar/power-local-llm/local-llm-email-and-calendar-automation) — أنماط أتمتة الأعمال المجاورة التي ينطبق عليها مجموعة الضوابط ذاتها.',
          '[RAG محلي على ملفات PDF خطوة بخطوة](/ar/power-local-llm/local-rag-on-your-pdfs-step-by-step) — دليل تطبيقي عملي لأنماط الخادم المحلي والحاسوب المحمول.',
          '[تحدّث إلى 1,000 ملف PDF محلياً](/ar/power-local-llm/chat-with-1000-pdfs-locally) — توجيه تشغيلي للمجموعات الأكبر التي تضغط على سقف الخادم المحلي.',
          '[مركز Power Local LLM](/ar/power-local-llm) — المكتبة الكاملة من الأدلة لعمليات نشر LLM المستضافة ذاتياً.',
        ],
      },
    },
  },
}
