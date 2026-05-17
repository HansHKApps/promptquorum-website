# Claude Code Instruction: Build AFFILIATE_MANAGER.md (FINAL)

**Date:** 2026-05-17
**Repo:** promptquorum-website
**Risk:** Low — documentation only

---

## What this does

Creates or replaces `AFFILIATE_MANAGER.md` at the repo root with the complete master strategy document for affiliate + direct sponsor revenue across 10 planned pages × 5 languages.

## Step 1 — Back up existing file if present

```bash
if [ -f "AFFILIATE_MANAGER.md" ]; then
  cp AFFILIATE_MANAGER.md AFFILIATE_MANAGER_backup_2026-05-17.md
  echo "Existing file backed up"
fi
```

## Step 2 — Create the new file

Create `AFFILIATE_MANAGER.md` at the repo root with the exact content between the `---FILE START---` and `---FILE END---` markers below.

---FILE START---

# PromptQuorum Affiliate Manager
Last updated: 2026-05-17
Owner: Hans Küpper (solo operator)

## Strategic Model

PromptQuorum is a one-person operation by deliberate choice. Affiliate strategy
must reflect solo execution capacity: selectivity over scale, premium pricing
over volume, no team coordination.

### Two-wave content approach

**WAVE 1 (May — September 2026):** Write each affiliate page once in English.
Translate to DE/FR/JA/ZH with light language adaptation. All 5 versions
publish together. Goal: rank the underlying topic in all 5 languages with
minimal incremental effort.

**WAVE 2 (October 2026 onward, page-by-page):** When a non-English version
reaches 10K+ monthly impressions for 3 consecutive months, fork it into a
language-localized version. Replace English-default examples with local
market examples. Add local providers, local retailers, local pricing in
EUR/JPY/CNY. The German page becomes a German-market guide, not a translation.

### Two revenue streams per page per language

Every affiliate page in every language has TWO revenue paths:

**Stream 1 — Affiliate commission** (active from publication)
- 1-20% commission depending on program
- Per-language affiliate links where programs support it (Amazon DE for /de/,
  Amazon FR for /fr/, etc.)

**Stream 2 — Direct sponsorship** (post-maturity per language)
- Trigger: page in a specific language hits 10K+ monthly impressions for 3
  consecutive months
- Pre-mapped 2-3 sponsors per language per page
- Higher rates in non-English versions due to content scarcity
- One sponsor per language version maximum (exclusivity drives premium pricing)

### Solo-operator economics

Realistic sales capacity for a one-person business:
- Maximum 5-8 active sponsor deals at any given time
- 1-2 new sponsor deals closed per month at maturity (Q1 2027+)
- Renewal management is most of the ongoing effort
- Better to have 5 sponsors paying $3K than 20 sponsors paying $750

Target steady state by end of 2027:
- 5-8 active sponsors across all pages and languages
- $15-25K/month from direct sponsorships
- Combined with affiliate ($8-15K/month) + AdSense ($1-2K) + app revenue
- Total: $40-60K/month, no employees, no coordination overhead

---

## Why Non-English Versions Command Premium Pricing

**Content supply in AI/local LLM space, by language:**

| Language | Competing technical content sites | Sponsor premium vs EN |
|---|---|---|
| English | Hundreds (oversaturated) | 1.0× (baseline) |
| German | ~5-10 (Heise, t3n, Golem — surface-level) | 2-3× |
| French | ~3-5 (Numerama, Frandroid — light coverage) | 2-3× |
| Japanese | ~3-5 (ITmedia, AINOW, individual blogs) | 2-4× |
| Chinese (global) | ~5-10 (36Kr, Jiqizhixin — fragmented) | 1.5-2× |

A German company wanting to reach German developers researching local LLMs
in German has approximately three options:
1. German AdSense placement — low intent, weak conversion
2. Heise/t3n display ads — broad tech, not local LLM specific
3. PromptQuorum German pages — direct, high-intent, native-language

When the third option is essentially unique, the premium follows.

**Window estimate:** 12-18 months before competitors translate their English
content too. Execute now.

---

## CATEGORY A: Cloud GPU & AI Inference Platforms

### Page A1: Best Cloud GPU Rental for Local LLM Testing 2026
- **URL:** /local-llms/best-cloud-gpu-rental-llm-2026
- **Status:** Planned
- **Target queries:** "best cloud gpu rental", "runpod vs vast.ai"
- **Maturity estimate:** 50-80K imps/month combined all languages
- **Device target:** desktop

**Affiliate programs:**
- RunPod (Partnerstack) — 3-5% standard, 10% after 25 paying refs
- Vast.ai (vast.ai/referral)
- Lambda Labs (direct partnership)

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | RunPod (marketing@runpod.io) | Vast.ai | Lambda Labs (partnerships@lambdal.com) | $1,500-2,500 |
| DE | Hetzner GPU (partner@hetzner.com) | Nebius EU | STACKIT (partnerships@stackit.cloud) | $3,000-5,000 |
| FR | Scaleway (partnerships@scaleway.com) | OVHcloud | Mistral La Plateforme | $2,500-4,000 |
| JA | Sakana AI (business@sakana.ai) | Preferred Networks | NTT Smart Data Science | $3,000-5,500 |
| ZH | Alibaba Cloud International | DeepSeek API (business@deepseek.com) | Zhipu AI | $2,000-3,500 |

**Combined ceiling at maturity:** $12,000-20,000/month

---

### Page A2: RunPod vs Modal vs Together.ai: Cloud GPU Provider Comparison
- **URL:** /local-llms/runpod-vs-modal-vs-together-ai
- **Status:** Planned
- **Target queries:** "modal vs runpod", "together ai pricing"
- **Maturity estimate:** 25-40K imps/month combined
- **Device target:** desktop

**Affiliate programs:**
- Modal (hello@modal.com — direct)
- Together.ai (direct partnerships)
- Replicate (direct)

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | Modal | Together.ai | Replicate | $1,500-3,000 |
| DE | Aleph Alpha (Heidelberg) | Black Forest Labs | DeepL (Cologne) | $3,000-5,000 |
| FR | Mistral AI | LightOn | Hugging Face | $3,500-6,000 |
| JA | Sakana AI | Stockmark | Rakuten AI | $2,500-4,500 |
| ZH | Qwen team (Alibaba) | MiniMax | 01.AI (Yi models) | $2,000-3,500 |

**Combined ceiling:** $12,500-22,000/month

---

### Page A3: EU Cloud GPU GDPR-compliant: Hetzner vs Scaleway vs OVHcloud
- **URL:** /local-llms/eu-cloud-gpu-gdpr-2026
- **Status:** Planned — HIGH PRIORITY (EU positioning moat)
- **Target queries:** "hetzner gpu", "scaleway llm", "eu cloud gpu gdpr"
- **Maturity estimate:** 20-35K imps/month combined
- **Device target:** desktop
- **Note:** German + French versions command exceptional premium. JA/ZH have weaker fit; consider EN+DE+FR only.

**Affiliate programs:**
- Hetzner — Program ENDING June 15, 2026. Skip directly to direct sponsorship.
- Scaleway (scaleway.com/en/partner-program)
- OVHcloud (affiliate.ovh.com)
- Nebius (direct partnerships)
- Mistral La Plateforme (direct)

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | Nebius EU | Scaleway | OVHcloud | $2,000-3,500 |
| DE | Hetzner (home market) | STACKIT (Schwarz Group) | IONOS (1&1) | $4,000-7,000 |
| FR | Scaleway (home market) | OVHcloud (home market) | Mistral La Plateforme | $4,000-6,500 |
| JA | (limited fit — EU page) | — | — | $0-1,500 |
| ZH | (limited fit — EU page) | — | — | $0-1,000 |

**Combined ceiling EU-focused:** $10,000-18,000/month

---

### Page A4: Cloud GPU Pricing Compared: H100, A100, RTX 4090 Across 8 Providers
- **URL:** /local-llms/cloud-gpu-pricing-comparison-2026
- **Status:** Planned
- **Target queries:** "h100 cloud price", "a100 hourly rate"
- **Maturity estimate:** 35-50K imps/month combined
- **Device target:** desktop
- **Strategy note:** Monthly pricing table updates = canonical reference, gets cited from Reddit/HN. Highest organic-link page in this category.

**Affiliate programs:**
- CoreWeave (enterprise partnership)
- Crusoe (direct)
- Paperspace/DigitalOcean (Impact)
- DataCrunch (direct)
- All A1/A2/A3 programs also relevant

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | CoreWeave (partnerships@coreweave.com) | Crusoe | Paperspace | $3,000-6,000 |
| DE | Hetzner | STACKIT | Bechtle Cloud | $4,500-7,000 |
| FR | Scaleway | OVHcloud | Mistral | $3,500-5,500 |
| JA | Sakana AI partner | NTT Cloud | SoftBank AI | $3,500-6,000 |
| ZH | Alibaba Cloud | Tencent Cloud Intl | Huawei Cloud | $2,500-4,500 |

**Combined ceiling:** $17,000-28,500/month

---

## CATEGORY B: Local LLM Hardware

### Page B1: Best Mini PC for Local LLM 2026
- **URL:** /local-llms/best-mini-pc-local-llm-2026
- **Status:** Planned
- **Target queries:** "mini pc local llm", "aoostar gem10", "minisforum llm"
- **Maturity estimate:** 25-45K imps/month combined
- **Device target:** mixed

**Affiliate programs:**
- Minisforum (Webgains, 1-3%, store.minisforum.com/pages/affiliate-program)
- AOOSTAR (direct, aoostar.com/pages/affiliate-marketing)
- Beelink (no public program — email beelink@bee-link.com)
- Amazon Associates US/DE/UK/FR/JP
- GMKtec (direct outreach)

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | Minisforum (marketing@minisforum.com) | AOOSTAR (marketing@aoostar.com) | Beelink (beelink@bee-link.com) | $1,000-2,500 |
| DE | Minisforum DE | Mindfactory.de | Caseking.de (partner@caseking.de) | $2,500-4,500 |
| FR | Materiel.net | LDLC | Topachat | $1,500-3,000 |
| JA | Minisforum JP | Amazon Japan partners | Tsukumo/Dospara | $2,000-4,000 |
| ZH | AOOSTAR (Shenzhen home market) | Minisforum (Shenzhen) | JD/Tmall channel | $1,500-3,000 |

**Combined ceiling:** $8,500-17,000/month

---

### Page B2: Apple Silicon for Local LLM: M5 Pro vs M5 Max vs Mac Studio
- **URL:** /local-llms/apple-silicon-m5-local-llm
- **Status:** Planned — HIGH PRIORITY (M5 launched March 2026, first-mover advantage)
- **Target queries:** "m5 pro local llm", "mac studio llm", "apple silicon ai"
- **Maturity estimate:** 30-55K imps/month combined
- **Device target:** desktop

**Affiliate programs:**
- Amazon Associates (all regions)
- Apple Affiliate Program (declining but active)
- OWC (marketing@owc.com) — direct, high commission on Mac accessories
- B&H Photo Video (affiliate)
- MacSales (OWC parent)

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | OWC | LumaFusion (creator apps) | iMazing | $1,000-2,500 |
| DE | Gravis (German Apple reseller) | MacTrade | Cyberport (Apple) | $1,500-3,000 |
| FR | iConcept | LDLC (Apple section) | Boulanger Apple | $1,500-2,500 |
| JA | Apple Japan partners | Yodobashi/Bic Camera | LumaFusion JP | $2,000-3,500 |
| ZH | Apple Asia partners | Pacific Direct (HK/TW) | — | $1,000-2,000 |

**Combined ceiling:** $7,000-13,500/month

---

### Page B3: Best Desktop GPU Under €800 for Local LLM (Europe 2026)
- **URL:** /local-llms/best-eu-gpu-under-800-euro
- **Status:** Planned — HIGH PRIORITY (EU first-mover)
- **Target queries:** "best gpu under 800 euro llm", "günstige gpu llm"
- **Maturity estimate:** 15-25K imps/month combined
- **Device target:** mixed
- **Strategy note:** Already EU-focused. JA/ZH versions may underperform — consider EN+DE+FR only.

**Affiliate programs:**
- Amazon DE/FR/UK/IT/ES (Amazon Associates regional)
- Mindfactory.de (NO public program — direct deal only)
- Alternate.de (Belboon, 3-5%)
- Caseking.de (direct partner@caseking.de)
- Notebooksbilliger.de (AWIN, 2-4%)
- LDLC (FR — direct)
- Materiel.net (FR — direct)

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | (limited fit — EU-focused page) | — | — | $500-1,500 |
| DE | Mindfactory.de | Caseking.de | Notebooksbilliger.de | $2,500-5,000 |
| FR | LDLC | Materiel.net | Topachat | $1,500-3,000 |
| JA | (skip — not EU relevant) | — | — | $0 |
| ZH | (skip — not EU relevant) | — | — | $0 |

**Combined ceiling EU-focused:** $4,500-9,500/month

---

## CATEGORY C: AI Developer Tools

### Page C1: Cursor vs Continue.dev vs Cody: Best AI Coding Assistant 2026
- **URL:** /local-llms/best-ai-coding-assistant-local-llm
- **Status:** Planned
- **Target queries:** "cursor vs continue.dev", "best ai coding assistant"
- **Maturity estimate:** 25-40K imps/month combined
- **Device target:** desktop

**Affiliate programs:**
- Cursor — NO affiliate program (confirmed). Direct sponsor only.
- Continue.dev (direct outreach to ty@continue.dev)
- Tabnine (Impact, 20% commission — best rate in dev tools)
- Windsurf/Codeium (direct, no public affiliate)
- Sourcegraph Cody (partner program)

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | Cursor (hi@cursor.com) | Continue.dev | Tabnine | $2,000-5,000 |
| DE | Tabnine DE | JetBrains AI (Munich office) | Codecks | $2,500-4,500 |
| FR | Mistral Code (when launched) | Dust | Poolside | $2,500-4,500 |
| JA | Code AI Japan partners | Preferred Networks dev tools | Sakana coding | $2,500-4,500 |
| ZH | Qwen Coder team | DeepSeek Coder | 01.AI | $1,500-3,000 |

**Combined ceiling:** $11,000-21,500/month

---

### Page C2: Best Local LLM Server for Teams: Ollama vs vLLM vs LM Studio Server
- **URL:** /local-llms/best-team-local-llm-server-2026
- **Status:** Planned
- **Target queries:** "vllm vs ollama", "team local llm server"
- **Maturity estimate:** 15-25K imps/month combined
- **Device target:** desktop

**Affiliate programs:**
- BentoML (direct, hello@bentoml.com)
- Anyscale (partnerships@anyscale.com)
- Modal (already covered)
- Baseten (hello@baseten.co)

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | BentoML | Anyscale | Baseten | $1,500-3,500 |
| DE | Aleph Alpha enterprise | STACKIT | German enterprise AI consultancies | $2,500-4,500 |
| FR | Mistral enterprise | Dust | Adaptive ML | $2,000-3,500 |
| JA | Preferred Networks | Sakana enterprise | NTT Data | $2,500-4,500 |
| ZH | Zhipu enterprise | MiniMax | Baichuan | $1,500-3,000 |

**Combined ceiling:** $10,000-19,000/month

---

### Page C3: Best Vector Databases for Local RAG: Qdrant vs Chroma vs Weaviate
- **URL:** /local-llms/best-vector-database-local-rag
- **Status:** Planned
- **Target queries:** "qdrant vs chroma", "best vector db rag"
- **Maturity estimate:** 15-25K imps/month combined
- **Device target:** desktop

**Affiliate programs:**
- Qdrant Cloud (PartnerStack)
- Pinecone (Impact)
- Weaviate (direct partner)
- Zilliz/Milvus (direct)

**Direct-sale buyers by language:**

| Lang | Sponsor 1 | Sponsor 2 | Sponsor 3 | Est. value/mo |
|---|---|---|---|---|
| EN | Qdrant (hello@qdrant.tech) | Pinecone | Weaviate | $1,500-3,000 |
| DE | Qdrant (Berlin HQ — premium!) | Aleph Alpha embeddings | German vector DB startups | $2,500-4,500 |
| FR | Weaviate Paris partners | Adaptive ML | French RAG consultancies | $2,000-3,500 |
| JA | Zilliz JP | Japanese ML consultancies | — | $1,500-3,000 |
| ZH | Zilliz China | Alibaba PAI | Tencent Cloud Vector | $1,500-3,000 |

**Combined ceiling:** $9,000-17,000/month

---

## Aggregated Revenue Ceiling

**Theoretical ceiling if every page filled every language slot:**
$100,000-176,000/month from direct sponsorships alone

**Realistic ceiling for solo operator (5-8 active sponsors at any time):**
- Direct sponsorships: $15,000-30,000/month
- Affiliate revenue: $5,000-12,000/month
- AdSense baseline: $1,000-2,500/month
- App revenue (PromptQuorum SaaS/API/white-label): $5,000-20,000/month
- **Combined steady-state target by end of 2027: $30,000-65,000/month**

---

## Affiliate Program Application Tracker

| Program | Region/Lang | Network | Commission | Status | Applied | Notes |
|---------|-------------|---------|-----------|--------|---------|-------|
| Amazon Associates US | EN | Amazon | 1-4.5% | Not applied | — | Required for EN pages |
| Amazon Associates UK | EN | Amazon UK | 1-4.5% | Not applied | — | — |
| Amazon Associates DE | DE | Amazon DE | 1-4.5% | Not applied | — | Required for /de/ pages |
| Amazon Associates FR | FR | Amazon FR | 1-4.5% | Not applied | — | Required for /fr/ pages |
| Amazon Associates JP | JA | Amazon JP | 1-4.5% | Not applied | — | Required for /ja/ pages |
| RunPod | All | Partnerstack | 10% after 25 refs | Not applied | — | Start referral first |
| Minisforum | All | Webgains | 1-3% | Not applied | — | — |
| AOOSTAR | All | Direct | TBD | Not applied | — | — |
| Tabnine | All | Impact | 20% | Not applied | — | Best dev tools rate |
| Qdrant Cloud | All | PartnerStack | TBD | Not applied | — | — |
| Modal | All | Direct | TBD | Not applied | — | Direct outreach |
| Together.ai | All | Direct | TBD | Not applied | — | — |
| Replicate | All | Direct | TBD | Not applied | — | — |
| Scaleway | EN/FR | Direct | TBD | Not applied | — | — |
| OVHcloud | EN/FR | affiliate.ovh.com | TBD | Not applied | — | — |
| Pinecone | All | Impact | TBD | Not applied | — | — |
| BentoML | All | Direct | TBD | Not applied | — | — |
| Anyscale | All | Direct | TBD | Not applied | — | — |
| Apple Affiliate | All | Performance | 1-7% | Not applied | — | Declining but active |
| OWC | EN | Direct | TBD | Not applied | — | High Mac accessory commission |
| Alternate.de | DE | Belboon | 3-5% | Not applied | — | — |
| Caseking.de | DE | Direct | TBD | Not applied | — | partner@caseking.de |
| Notebooksbilliger.de | DE | AWIN | 2-4% | Not applied | — | — |
| LDLC | FR | Direct | TBD | Not applied | — | — |
| Materiel.net | FR | Direct | TBD | Not applied | — | — |
| Continue.dev | All | Direct | TBD | Not applied | — | ty@continue.dev |
| Sourcegraph Cody | All | Partner | Custom | Not applied | — | B2B |
| Vast.ai | All | Direct | TBD | Not applied | — | — |
| Lambda Labs | All | Direct | Custom | Not applied | — | Enterprise partnership |
| CoreWeave | All | Enterprise | Custom | Not applied | — | — |
| Crusoe | All | Direct | TBD | Not applied | — | — |
| Paperspace | All | Impact | TBD | Not applied | — | — |
| Weaviate | All | Direct partner | TBD | Not applied | — | — |
| Zilliz | All | Direct | TBD | Not applied | — | — |
| Baseten | All | Direct | TBD | Not applied | — | — |

**Programs with NO public affiliate — direct sponsor only:**
- Hetzner (program ending June 15, 2026)
- Cursor
- Mindfactory.de
- Beelink

---

## Wave 1 Execution Plan (May — September 2026)

**Month 1 (May 2026)**
- [ ] Apply to Amazon Associates US/DE/UK/FR/JP (do all 5 — slowest approval)
- [ ] Apply to 5 affiliate programs: RunPod, Minisforum, AOOSTAR, Tabnine, Qdrant
- [ ] Write Page A1 (Cloud GPU rental) in English

**Month 2 (June 2026)**
- [ ] Translate A1 to DE/FR/JA/ZH and publish all 5 versions
- [ ] Apply to 5 more programs: Modal, Together.ai, Replicate, Scaleway, Pinecone
- [ ] Write Page B1 (Mini PC) in English
- [ ] Translate and publish B1 in all 5 languages

**Month 3 (July 2026)**
- [ ] Write Pages A3 (EU Cloud GPU) and C1 (AI Coding Assistant)
- [ ] Translate and publish in all 5 languages
- [ ] Begin compiling media kit for Q4 sponsor outreach

**Month 4 (August 2026)**
- [ ] Write Pages A4 (Cloud GPU pricing) and B2 (Apple Silicon)
- [ ] Translate and publish
- [ ] App launches — drives brand awareness boost

**Month 5 (September 2026)**
- [ ] Write Pages B3 (EU GPU), C2 (Team LLM server), C3 (Vector DB)
- [ ] Translate and publish remaining pages
- [ ] Final 10-page set complete in all 5 languages
- [ ] Media kit finalized

---

## Wave 2 Execution Plan (October 2026 onward — per-page basis)

When a non-English version hits 10K+ imps for 3 consecutive months:

1. **Localize content** — Replace English-default examples with local market examples
2. **Update language-specific affiliate links** — Amazon DE for /de/, Amazon FR for /fr/
3. **Begin sponsor outreach** in that specific language version
4. **Set sponsor pricing** at 2-4× English-language rate
5. **One sponsor per language version maximum** — exclusivity drives premium

---

## Solo Operator Discipline Rules

**Do:**
- Close 1-2 high-value sponsor deals per month at maturity
- Maintain 5-8 active sponsors maximum
- Renew aggressively at year 2 (relationship is the moat)
- Say no to deals under $1,500/month unless strategic
- Use the language-scarcity premium — don't undersell non-English placements
- Reject ad networks that pay $200-500/month — coordination overhead exceeds revenue

**Don't:**
- Hire a sales team
- Hire a content team
- Accept 20 small sponsors when 5 large ones generate the same revenue
- Localize Wave 2 pages until traffic justifies effort (10K+ imps × 3 months)
- Promise sponsors more pages than you can write (1 page/2 weeks max sustainable)
- Compete on price — compete on audience uniqueness

---

## Status Tracking Table

Update monthly using GSC data filtered by language URL prefix.

| Page × Lang | Status | Imps/mo | CTR | Affiliate Live | Wave 2 Triggered | Sponsor |
|---|---|---|---|---|---|---|
| A1 × EN | Planned | 0 | — | No | No | — |
| A1 × DE | Planned | 0 | — | No | No | — |
| A1 × FR | Planned | 0 | — | No | No | — |
| A1 × JA | Planned | 0 | — | No | No | — |
| A1 × ZH | Planned | 0 | — | No | No | — |
| A2 × EN | Planned | 0 | — | No | No | — |
| A2 × DE | Planned | 0 | — | No | No | — |
| A2 × FR | Planned | 0 | — | No | No | — |
| A2 × JA | Planned | 0 | — | No | No | — |
| A2 × ZH | Planned | 0 | — | No | No | — |
| A3 × EN | Planned | 0 | — | No | No | — |
| A3 × DE | Planned | 0 | — | No | No | — |
| A3 × FR | Planned | 0 | — | No | No | — |
| A3 × JA | Planned | 0 | — | No | No | — |
| A3 × ZH | Planned | 0 | — | No | No | — |
| A4 × EN | Planned | 0 | — | No | No | — |
| A4 × DE | Planned | 0 | — | No | No | — |
| A4 × FR | Planned | 0 | — | No | No | — |
| A4 × JA | Planned | 0 | — | No | No | — |
| A4 × ZH | Planned | 0 | — | No | No | — |
| B1 × EN | Planned | 0 | — | No | No | — |
| B1 × DE | Planned | 0 | — | No | No | — |
| B1 × FR | Planned | 0 | — | No | No | — |
| B1 × JA | Planned | 0 | — | No | No | — |
| B1 × ZH | Planned | 0 | — | No | No | — |
| B2 × EN | Planned | 0 | — | No | No | — |
| B2 × DE | Planned | 0 | — | No | No | — |
| B2 × FR | Planned | 0 | — | No | No | — |
| B2 × JA | Planned | 0 | — | No | No | — |
| B2 × ZH | Planned | 0 | — | No | No | — |
| B3 × EN | Planned | 0 | — | No | No | — |
| B3 × DE | Planned | 0 | — | No | No | — |
| B3 × FR | Planned | 0 | — | No | No | — |
| B3 × JA | Skip | — | — | — | — | EU page |
| B3 × ZH | Skip | — | — | — | — | EU page |
| C1 × EN | Planned | 0 | — | No | No | — |
| C1 × DE | Planned | 0 | — | No | No | — |
| C1 × FR | Planned | 0 | — | No | No | — |
| C1 × JA | Planned | 0 | — | No | No | — |
| C1 × ZH | Planned | 0 | — | No | No | — |
| C2 × EN | Planned | 0 | — | No | No | — |
| C2 × DE | Planned | 0 | — | No | No | — |
| C2 × FR | Planned | 0 | — | No | No | — |
| C2 × JA | Planned | 0 | — | No | No | — |
| C2 × ZH | Planned | 0 | — | No | No | — |
| C3 × EN | Planned | 0 | — | No | No | — |
| C3 × DE | Planned | 0 | — | No | No | — |
| C3 × FR | Planned | 0 | — | No | No | — |
| C3 × JA | Planned | 0 | — | No | No | — |
| C3 × ZH | Planned | 0 | — | No | No | — |

---

## Outreach Email Templates

### English (Cloud GPU / SaaS)

Subject: PromptQuorum — your [product] mentioned to XX,XXX monthly developers

Hi [Name],

I run PromptQuorum, a technical content site focused on AI infrastructure
and local LLMs.

Page: [URL]
Monthly impressions in GSC: [X]
Audience: developers and ML engineers
Geography: EU 60%, US 25%, Asia 15%

Your platform is featured in the comparison and we're seeing strong
click-through to your signup flow.

I'd like to propose a featured sponsor arrangement:
- Top-of-page sponsor card
- Editorial paragraph
- 30-day exclusivity on competing-vendor placements
- $2,000-4,000/month depending on tier

Or, if you have an existing affiliate/partner program I can enroll in,
that works too.

Media kit attached with GSC data, conversion benchmarks, and demographics.

Best,
Hans Küpper
PromptQuorum.com

### German (Cloud / Hardware)

Betreff: PromptQuorum — Direktwerbung für [Produkt] bei XX.XXX deutschsprachigen Entwicklern

Sehr geehrte/r [Name],

ich betreibe PromptQuorum (promptquorum.com), eine technische Plattform
für KI-Infrastruktur und Local LLMs mit Schwerpunkt auf den deutsch-
sprachigen Markt.

Seite: [URL]
Monatliche Impressionen (GSC): [X]
Zielgruppe: deutschsprachige Entwickler und ML-Engineers
Geografie: DE 65%, AT/CH 15%, weitere DACH 10%, sonstige 10%

Ihr Produkt ist im Vergleich prominent platziert. Wir verzeichnen
starke Klickraten zu Ihrer Plattform.

Ich biete Ihnen folgendes Sponsoring-Modell:
- Hervorgehobene Sponsor-Karte oben auf der Seite
- Redaktioneller Abschnitt
- 30-Tage-Exklusivität gegenüber Wettbewerbsplatzierungen
- 3.000-5.000 EUR/Monat je nach Tier

Das deutschsprachige Publikum ist hochqualifiziert: technische
Entscheidungsträger im Recherche-Modus für Anschaffungen zwischen
500-3.000 EUR. Mediadaten gerne auf Anfrage.

Mit freundlichen Grüßen,
Hans Küpper
PromptQuorum.com

### French / Japanese / Chinese

Use professional translation service. Structure follows DE template:
- Subject line with product/audience mention
- Brief credentials (URL, GSC impressions, demographics)
- Pitch (3-line bulleted offer)
- Closing with media kit availability

Native-language pitches close better than English pitches in non-English markets.

---

## Annual Review

Every 6 months review:
- Which language versions generate sponsor interest
- Which buyer categories renewed vs. churned
- Whether Wave 2 localization effort paid off per page
- Whether to drop underperforming language versions

Next review: November 17, 2026

---FILE END---

## Step 3 — Verify

```bash
ls -la AFFILIATE_MANAGER.md
wc -l AFFILIATE_MANAGER.md
head -5 AFFILIATE_MANAGER.md
```

Expected: file exists, ~450-500 lines, first line is `# PromptQuorum Affiliate Manager`.

## Step 4 — Commit

```
docs: AFFILIATE_MANAGER.md complete strategy document

10 affiliate pages × 5 languages = 50 page-language combinations.
Each page has 2-3 pre-mapped direct sponsor buyers per language.
Two-wave content approach: translate first (Wave 1), localize when
traffic justifies (Wave 2).

Solo operator model: 5-8 active sponsors max, $30-65K/month combined
revenue target by end of 2027.

Non-English versions command 2-4× sponsor premium due to content
scarcity in DE/FR/JA markets.

Includes outreach templates (EN + DE), program application tracker,
status tracking table for all 50 page-language combinations, Wave 1
execution plan May-September 2026.
```

End of instruction.
