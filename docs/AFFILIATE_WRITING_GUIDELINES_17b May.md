# AFFILIATE_WRITING_GUIDELINES.md

**Version:** 3.0  
**Last updated:** 2026-05-17  
**Companion document:** GEO_WRITING_GUIDELINES.md (required reading first)

---

## What Changed from v2

**v3 is honest about how content is actually produced on this site.**

PromptQuorum's affiliate articles are produced via AI-assisted content generation, not hands-on lab testing. v2 contained voice and evidence rules that implied first-hand product testing for every reviewed product. That created two bad outcomes: either articles never get published, or they fabricate testing credibility. Neither acceptable.

v3 fixes this by:
- Removing all requirements for original screenshots, benchmarks, queue captures, terminal output
- Splitting voice into two registers: **practitioner voice** (for tools you actually use) and **analyst voice** (for everything else) — never blur the line
- Adding **differentiation requirements** that come from synthesis, frameworks, and analysis rather than personal testing
- Adding **structured product data spec** for future scalability
- Adding **honest contrarian take** requirement (replaces fake "I was wrong about..." personal anecdotes)
- Consolidating decision-density rules to a single source of truth
- Documenting **deferred rules** (KPI dashboards, refresh scoring, block library) so future-you knows what's coming after first 5 articles

What stayed: 7-part structure, marker system (/buy/ URLs + content.ts fields), 4-location affiliate link rule, disclosure requirements, FAQ formats, schema specs, anti-patterns list.

---

## How This Guide Relates to GEO_WRITING_GUIDELINES.md

**This guide does NOT replace GEO_WRITING_GUIDELINES.md.** It extends it.

Affiliate articles must follow GEO rules first, affiliate-specific rules second. Where rules conflict, the affiliate-specific rule wins for affiliate pages.

**Read this guide alongside GEO, not instead of it.**

### Inheritance map

The following GEO rules apply UNCHANGED to affiliate articles:

| GEO Rule | What it covers | Why it still applies |
|---|---|---|
| Rule 1 | H2 bold opener | Affiliate sections still answer questions first |
| Rule 2 | Structure & paragraph length (max 3 sentences) | Scannability matters more, not less |
| Rule 2a | Hardware/constraint specificity (exact numbers) | Critical for product comparisons |
| Rule 2b | Facts only — every number verifiable | Pricing data integrity depends on this |
| Rule 2c | Internal linking strategy (5-10 links) | Affiliate articles need educational article backlinks |
| Rule 3 | Delete vague superlatives | "Industry-leading" kills affiliate trust |
| Rule 4, 4a, 4b | Entity naming standards | Product names must be exact |
| Rule 5 | Schema markup baseline | Plus affiliate-specific schemas (see AFF-3) |
| Rule 6a | Link to specific articles, not hubs | Same |
| Rule 11 | Visible last-updated date with `<time>` element | Critical for affiliate pricing trust |
| Rule 12 | LLM snippet blocks | Definitions still needed |
| Rule 16 | Markdown tables for comparisons | Comparison tables are central to affiliate |
| Rule 17 | Callout boxes (5/8/10+ based on length) | Plus affiliate-specific callouts |
| Rule 22, 22a, 22b, 22c | Answer-first, decision framework | Affiliate articles ARE decision content |
| Rule 28 | Inline "As of [Month Year]" date references | Critical for pricing freshness |
| Rule 29 | Audience & difficulty level | Same |
| Rule 30.1 | Top byline with credentials | Same — trust matters more |
| Rule 32 | Mandatory keyword identification | Plus commercial-intent keyword rules |
| Rule 33 | CTR-first opening block | Same |
| Rule 34 | Multilingual title calibration | Same — adapted per market |
| Rule 35 | SERP differentiation check | Even more critical (competing for buying queries) |
| Rule 36 | First screen must answer + decide | Affiliate version: must show recommendation |
| Rule 38 | AI citation blocks | Same |
| Rule 39 | Anchor text intent | Plus buy-intent anchor rules |
| Rule 40 | Explanation compression | Same |
| Rule 41 | Scroll pattern (bold + list + decision per screen) | Same |
| Rule 42 | ToC anchor ↔ section ID matching | Same |
| Freshness Tier Classification | Evergreen / semi-annual / annual | Affiliate articles default to `semi_annual` |
| Regional Context | EU/Japan/China sections on /local-llms/* | Same applies for affiliate articles in those clusters |
| Sources & Further Reading | Min 3 sources with real URLs | Same |
| Common Mistakes Format | Bullet format, not H3 subheadings | Same |

### Affiliate-specific rules (this document)

- **AFF-1:** Affiliate article identification (marker system)
- **AFF-2:** Affiliate article structure (7-part template)
- **AFF-3:** Affiliate-specific schema (Product, Review)
- **AFF-4:** Pricing data integrity rules
- **AFF-5:** Affiliate link placement (4-location rule)
- **AFF-6:** Disclosure requirements (GDPR/EU)
- **AFF-7:** Voice register — practitioner vs analyst (UPDATED v3)
- **AFF-8:** Anti-patterns specific to affiliate content
- **AFF-9:** Decision density (consolidated single source of truth — UPDATED v3)
- **AFF-10:** Competitor analysis pre-write
- **AFF-11:** PromptQuorum conflict-of-interest rules
- **AFF-12:** Quarterly refresh cycle
- **AFF-13:** Pre-publish checklist
- **AFF-14:** Differentiation requirement (NEW v3)
- **AFF-15:** Structured product data spec (NEW v3)
- **AFF-16:** Honest contrarian take requirement (NEW v3)

### Deferred rules (documented, not yet implemented)

- **AFF-17 (Q3 2026):** KPI dashboard + measurement system. Defer until first 5 articles published and producing real data.
- **AFF-18 (Q3 2026):** Refresh prioritization scoring. Defer until 8+ articles exist requiring prioritized maintenance.
- **AFF-19 (Q4 2026):** Block library + versioned templates. Defer until 5+ articles reveal which patterns work.
- **AFF-20 (Q4 2026):** Programmatic comparison database. Build on top of AFF-15 structured data once 10+ products are documented.

---

═══════════════════════════════════════════════════════════════
RULE AFF-1: AFFILIATE ARTICLE IDENTIFICATION (Marker System)
═══════════════════════════════════════════════════════════════

Affiliate articles must be unambiguously identifiable so the correct guide is applied when editing or updating them. Every affiliate article carries **four redundant signals**.

### Signal 1: content.ts metadata fields (MANDATORY)

```typescript
{
  // === AFFILIATE MARKERS (mandatory) ===
  contentType: 'affiliate',
  writingGuide: 'AFFILIATE',
  
  // === AFFILIATE OPERATIONAL METADATA (mandatory) ===
  affiliate_meta: {
    programs_to_apply: ['amazon-us', 'amazon-de', 'runpod', 'together-ai'],
    affiliate_links_active: false,
    last_pricing_check: '2026-05-17',
    products_compared: ['RunPod', 'Vast.ai', 'Lambda Labs', 'Modal', 'Together AI', 'Replicate', 'Hyperbolic', 'Hetzner'],
    target_query_primary: 'best cloud gpu for ai inference 2026',
    target_queries_secondary: ['cheapest cloud gpu llm', 'runpod vs vast ai'],
    estimated_commission_model: 'recurring_10_20_percent',
    estimated_avg_commission: '$15/month recurring per customer',
    voice_register: 'analyst',  // 'practitioner' | 'analyst' | 'mixed' (see AFF-7)
  },
  
  // === STRUCTURED PRODUCT DATA (see AFF-15) ===
  product_database: { /* per-product structured fields */ },
  
  // === DIFFERENTIATION DOCUMENTATION (see AFF-14) ===
  differentiation: {
    type: 'framework',  // 'framework' | 'synthesis' | 'cost_math' | 'regional_angle' | 'contrarian_analysis'
    description: 'EU compliance scoring matrix across 8 cloud GPU providers, synthesized from each vendor\'s data residency docs',
    why_competitors_miss_this: 'Top 5 ranking articles are US-focused and ignore GDPR Article 44 cross-border transfer implications',
  },
  
  // === STANDARD FIELDS (from GEO guide) ===
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-11-17',
  educationalLevel: 'Intermediate',
  audience: 'Developers evaluating cloud GPU options for LLM inference',
  targetKeywords: [...],
}
```

### Signal 2: URL pattern (MANDATORY)

Affiliate URLs MUST include `/buy/` segment:

```
✅ /local-llms/buy/best-cloud-gpu-for-ai-inference-2026
✅ /de/local-llms/buy/best-cloud-gpu-for-ai-inference-2026
❌ /local-llms/best-cloud-gpu-for-ai-inference-2026
❌ /affiliate/cloud-gpu (too explicit, hurts CTR)
```

### Signal 3: CLAUDE.md project instructions (MANDATORY)

Top-level `CLAUDE.md` must contain:

```markdown
## Affiliate Article Identification

Articles are AFFILIATE TARGETS when ANY of these are true:
1. `contentType: 'affiliate'` field present in content.ts
2. URL contains `/buy/` segment
3. `writingGuide: 'AFFILIATE'` field present

When editing affiliate articles, ALWAYS:
- Read AFFILIATE_WRITING_GUIDELINES.md FIRST (before GEO_WRITING_GUIDELINES.md)
- Check `voice_register` field — apply practitioner or analyst voice accordingly
- Update `last_pricing_check` and Update Log if any prices changed
- Verify affiliate disclosure box is still present
- Never remove "(affiliate link)" notations even if links are inactive

When in doubt: AFFILIATE rules override GEO rules for affiliate articles.
```

### Signal 4: Development banner (recommended)

```typescript
{process.env.NODE_ENV === 'development' && contentType === 'affiliate' && (
  <div className="affiliate-dev-banner">
    🛒 AFFILIATE — voice: {affiliate_meta.voice_register} | 
    Last priced: {affiliate_meta.last_pricing_check} | 
    Refresh due: {next_refresh_due} | 
    Links active: {affiliate_meta.affiliate_links_active ? '✅' : '⏳'}
  </div>
)}
```

### Enforcement (build validator)

Build should FAIL when:
- File in `/content/*/buy/` lacks `contentType: 'affiliate'`
- File with `contentType: 'affiliate'` lacks complete `affiliate_meta` object
- `affiliate_meta` missing any mandatory sub-field including `voice_register`
- `last_pricing_check` older than 90 days (warning, not fail)
- File has `voice_register: 'practitioner'` for a product not in the approved authentic-experience list (see AFF-7)

---

═══════════════════════════════════════════════════════════════
RULE AFF-2: AFFILIATE ARTICLE STRUCTURE (7-Part Template)
═══════════════════════════════════════════════════════════════

Overrides GEO Rule 8c for affiliate articles.

### Top-of-page sequence

```
1. H1 title (with year, per GEO Rule 2d)
2. Byline + credentials (per GEO Rule 30.1)
3. Affiliate disclosure box (AFF-6, mandatory, before any other content)
4. Voice register indicator (AFF-7, mandatory) — discloses analyst vs practitioner voice
5. Lead Answer Block (GEO Rule 31) — names top pick in first 10 words
6. CTR-First Opening Block (GEO Rule 33) — tension or surprising insight
7. Verdict Box (AFF-2.1, mandatory) — three picks with badges
8. Key Takeaways (5-7 bullets, GEO standard)
9. Quick Comparison Table (AFF-2.2, mandatory) — second screen
10. Table of Contents
11. Last Updated date with <time> element (GEO Rule 11)
12. Methodology section (AFF-2.3, mandatory)
13. Per-product deep dives (AFF-2.4)
14. Differentiation section (AFF-14, mandatory) — the unique angle
15. Decision Matrix (AFF-2.5, mandatory)
16. FAQ (AFF-2.6) — buying-intent questions
17. Update Log (AFF-2.7, mandatory)
18. Sources (GEO standard)
19. Related Reading (with affiliate-specific link patterns — AFF-5)
```

### AFF-2.1: Verdict Box

Must appear in first 600 vertical pixels on mobile.

```markdown
## 🏆 Editor's Picks for [Category] in 2026

**[Top Pick]** is the best [category] for most users in 2026. **[Alternative]** 
for [condition]. **[Budget Pick]** if cost matters.

### 🏆 Editor's Choice: [Product Name]
[1 sentence: why this won]
**Best for:** [specific use case]  
**Price:** [current pricing] | [check current price →]

### 💰 Best Value: [Product Name]
[1 sentence: why this won on value]
**Best for:** [specific use case]  
**Price:** [current pricing] | [check current price →]

### 🚀 Best for [Specific Use Case]: [Product Name]
[1 sentence: why this won for this use case]
**Best for:** [specific niche]  
**Price:** [current pricing] | [check current price →]
```

### AFF-2.2: Quick Comparison Table

Mobile-responsive (max 4 columns on mobile):

```markdown
| Product | Best For | Price | Verdict |
|---------|----------|-------|---------|
| RunPod | Hobbyists, flexible pricing | $0.39/hr (RTX 4090) | 🏆 Top pick |
| Vast.ai | Lowest cost | $0.22/hr (RTX 4090) | 💰 Cheapest |
| Lambda Labs | Production reliability | $0.50/hr (RTX 4090) | 🚀 Best for prod |
| Modal | Serverless workflows | $0.000164/sec | Different category |
```

Verdict column: 1-3 words. Each row links to deeper section below.

### AFF-2.3: Methodology section

200-300 words explaining HOW you evaluated. Must be honest about method.

For analyst-voice articles, mention:
- Public sources reviewed (vendor docs, pricing pages, community forums, GitHub issues, Reddit threads)
- Synthesis approach (e.g., "compared each vendor's pricing page against 5 common workload sizes")
- Time period of research
- What you DID NOT do (e.g., "We did not run hands-on benchmarks — see [Source X] for independent benchmarks")
- Why your perspective adds value (EU compliance angle, cost math others miss, etc.)

For practitioner-voice articles, mention:
- What you actually used and for how long
- Specific configurations you ran
- What you tested vs what you didn't

**Do not blur the two.** If half the products were analyzed and half were used, say so explicitly: "Sections on [Product A] and [Product B] are based on hands-on use; sections on remaining products are analyst syntheses of public information."

### AFF-2.4: Per-product deep dive

Each compared product gets an H2 section:

```markdown
## [Product Name]: [Tagline]

**Verdict:** [1-2 sentence summary with opinion]  
**Best for:** [Specific use case]  
**Avoid if:** [Specific situation]  
**Price:** [Current price + date retrieved]  
**Voice basis:** [Hands-on use | Public research | Mixed]

[200-400 words of analysis-driven review]

### Strengths
- [Specific benefit with public-source citation OR personal experience marker]
- [Specific benefit with public-source citation OR personal experience marker]

### Limitations
- [Specific limitation with public-source citation OR personal experience marker]
- [Specific limitation with public-source citation OR personal experience marker]

### Pricing breakdown
[Table or list of pricing tiers with dates and source citations]

[CTA: "Check current price at [Vendor] →"]
```

Each section: 400-700 words. 8 products = 3,200-5,600 words for product sections alone.

### AFF-2.5: Decision Matrix (conversion section)

```markdown
## 🎯 Which [Category] Should You Choose?

**If you have $X budget:** → [Product] ([check pricing →])  
**If you're running [workload Y]:** → [Product] ([check pricing →])  
**If you care most about [criterion Z]:** → [Product] ([check pricing →])  
**If you need EU compliance:** → [Product] ([check pricing →])  
**If you're a beginner:** → [Product] ([check pricing →])  
**If you're scaling production:** → [Product] ([check pricing →])  
**If unsure, start with:** → [Safest default option] ([check pricing →])
```

### AFF-2.6: FAQ (8-12 questions, buying-intent only)

Required types (3+ of these 5):
1. Pricing comparison
2. Migration questions
3. Integration questions
4. Free tier gotchas
5. Why-cheaper questions

Each answer: 50-120 words. FAQPage schema mandatory.

### AFF-2.7: Update Log

```markdown
## Update Log

- **2026-05-17:** Initial publication
- **2026-06-15:** Updated RunPod pricing ($0.39 → $0.42/hr); added Hetzner section
```

---

═══════════════════════════════════════════════════════════════
RULE AFF-3: AFFILIATE-SPECIFIC SCHEMA (extends GEO Rule 5)
═══════════════════════════════════════════════════════════════

Affiliate articles require ALL standard GEO schema PLUS:

### Product schema (one block per product reviewed)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "RunPod",
  "brand": {"@type": "Brand", "name": "RunPod, Inc."},
  "description": "[1-2 sentence description]",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0.39",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://runpod.io"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {"@type": "Rating", "ratingValue": "4.5", "bestRating": "5"},
    "author": {"@type": "Person", "name": "Hans Kuepper"},
    "reviewBody": "[your specific review text, 100+ words]"
  }
}
```

### Review schema (article-level)

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {"@type": "Thing", "name": "Cloud GPU Rental Services for AI Inference"},
  "reviewBody": "[abstract of the comparison]",
  "author": {"@type": "Person", "name": "Hans Kuepper", "url": "https://www.promptquorum.com/about"},
  "datePublished": "2026-05-17",
  "publisher": {"@type": "Organization", "name": "PromptQuorum"}
}
```

Skip Speakable schema (buying decisions aren't voice queries).

Validation: Test at https://search.google.com/test/rich-results. Affiliate pages must show: Review, Product, ItemList, FAQPage, Article, BreadcrumbList.

---

═══════════════════════════════════════════════════════════════
RULE AFF-4: PRICING DATA INTEGRITY
═══════════════════════════════════════════════════════════════

1. **Every price includes retrieved date:** `"$0.39/hour (RunPod official pricing, retrieved 2026-05-17)"`
2. **Monthly review cadence:** First Monday of each month
3. **Update `last_pricing_check` field** when verified, even if unchanged
4. **Update `dateModified` in schema** when prices change
5. **DO NOT change `publishDate`** on price updates (Google penalizes fake fresh dates)
6. **Currency by language version:**
   - EN: USD primary
   - DE: EUR primary, USD secondary
   - FR: EUR primary
   - JA: JPY primary, USD secondary
   - ZH: USD primary
7. **Price ranges acceptable** when exact varies: "$0.30-0.50/hour"
8. **Never invent prices.** If vendor says "contact sales," say so.
9. **Pricing source must be public.** Vendor pricing pages, public terms, archived versions if vendor hides current pricing. Never guess.

### Pricing change protocol

When a price changes:
- Update the article immediately
- Add Update Log entry
- Update `affiliate_meta.last_pricing_check`
- Update schema `dateModified`
- Do NOT update `publishDate`
- Do NOT update `freshness_tier` or `next_refresh_due`

---

═══════════════════════════════════════════════════════════════
RULE AFF-5: AFFILIATE LINK PLACEMENT (4-Location Rule)
═══════════════════════════════════════════════════════════════

Each product gets affiliate links in EXACTLY these four locations:

1. Verdict Box at top
2. Comparison Table
3. Per-Product Section CTA
4. Decision Matrix

**Maximum 4 affiliate links per product per article.**

### CTA wording

Use:
- "Check current price at [Vendor]"
- "See latest pricing on [Vendor]"
- "Try [Product] free trial"
- "Visit [Vendor] →"

Avoid:
- "Click here", "Learn more", "Buy now"

### Anchor text rules (extends GEO Rule 39)

Add buying intent to topic + intent:

```
✅ "check current RunPod GPU pricing"
✅ "review RunPod's free credit offer"
✅ "visit Hetzner for EU-compliant GPU servers"
❌ "RunPod" (no intent)
❌ "click here" (banned)
```

### Internal linking patterns

**Educational → /buy/ (up-funnel):**
Educational articles link to ONE relevant /buy/ article each.

**/buy/ → educational (context):**
When explaining product features, link to educational content for justification.

**/buy/ → /buy/ (cross-sell):**
1-2 cross-sell links per affiliate article to adjacent buying journeys.

---

═══════════════════════════════════════════════════════════════
RULE AFF-6: DISCLOSURE REQUIREMENTS (GDPR/EU Mandatory)
═══════════════════════════════════════════════════════════════

### Three required disclosure points

**1. Top of article disclosure box:**

```markdown
> 💡 **Affiliate Disclosure:** This article contains affiliate links. We may 
> earn a commission if you purchase through these links at no extra cost to 
> you. Our recommendations are based on independent research — see the 
> [methodology section](#methodology) for details.
```

Note: Says "independent research" not "testing" — honest for analyst-voice articles.

**2. Near each affiliate link:**

```
Check current price at RunPod → *(affiliate link)*
```

**3. Permanent /affiliate-disclosure page:** Linked from sidebar/footer.

### When links are NOT yet active

Even with `affiliate_links_active: false`:
- Keep the top disclosure box (says "may contain")
- Skip inline "(affiliate link)" notations until links go live
- Keep methodology section

### Localized disclosure (DE/FR/JA/ZH)

German:
```markdown
> 💡 **Affiliate-Hinweis:** Dieser Artikel enthält Affiliate-Links. Wir erhalten 
> möglicherweise eine Provision, wenn Sie über diese Links einkaufen — ohne 
> Mehrkosten für Sie. Unsere Empfehlungen basieren auf unabhängiger Recherche.
```

French:
```markdown
> 💡 **Divulgation d'affiliation :** Cet article contient des liens d'affiliation. 
> Nous pouvons percevoir une commission si vous effectuez un achat via ces liens, 
> sans frais supplémentaires pour vous. Nos recommandations reposent sur des 
> recherches indépendantes.
```

---

═══════════════════════════════════════════════════════════════
RULE AFF-7: VOICE REGISTER — PRACTITIONER vs ANALYST (UPDATED v3)
═══════════════════════════════════════════════════════════════

**Critical rule:** Every affiliate article declares its voice register, and never blurs the two.

The two registers exist because content is produced via AI-assisted workflow. Most products in most articles will not be hands-on tested. Pretending otherwise destroys trust when readers detect it.

### The two registers

**Practitioner voice** — Used ONLY when you have authentic hands-on experience.
- "I've used Claude Code daily for 9 months building PromptQuorum"
- "On my M5 Pro with 64GB RAM, LM Studio loaded DeepSeek-Coder-v2 in 12 seconds"
- "After running PromptQuorum's backend through Together AI for the past month..."

**Analyst voice** — Used when content is synthesized from public sources.
- "Comparing RunPod's pricing page against the typical Llama 70B workload..."
- "Multiple Reddit threads and HN discussions point to Vast.ai's queue issues during peak hours"
- "RunPod's docs claim X, but their community forum shows users hitting Y"
- "The math on tokens-per-dollar across these 6 APIs reveals..."

### Voice register field (mandatory in content.ts)

```typescript
affiliate_meta: {
  voice_register: 'practitioner' | 'analyst' | 'mixed',
  
  // If 'practitioner' or 'mixed', list products with authentic experience:
  hands_on_products: ['Claude Code', 'LM Studio', 'Ollama', 'PromptQuorum'],
  
  // If 'mixed', specify which sections use which voice:
  voice_mixing_notes: 'Claude Code and LM Studio sections use practitioner voice; remaining products use analyst voice. Methodology section discloses this split.'
}
```

### Authentic experience list (the practitioner-voice whitelist)

Products and tools you can authentically write practitioner-voice about, based on actual use:

- **Claude Code** (daily use, 9+ months)
- **LM Studio** with DeepSeek-Coder-v2-Lite-16B (configured and used)
- **Ollama** (used for local LLM testing)
- **PromptQuorum** itself (your own product)
- **Apple Silicon hardware** (M5 Pro 64GB, extensive benchmarking)
- **VS Code** with Claude Code integration
- **GitHub** (daily use)
- **Vercel** (PromptQuorum hosting)
- **Google Search Console** (operational use)
- **Resend** (email infrastructure for PromptQuorum)

For ANY product not on this list: analyst voice only. If you add new tools to your workflow, expand this list — but never silently.

### Voice register disclosure (mandatory in article)

Insert immediately after byline, before Lead Answer Block:

```markdown
> 📊 **How we evaluated:** This comparison is based on independent research 
> of public documentation, pricing pages, community discussions, and 
> third-party benchmarks. We did not run hands-on benchmarks on most 
> products reviewed. See [methodology](#methodology) for details.
```

For practitioner-voice articles:

```markdown
> 🔧 **How we evaluated:** Sections on Claude Code and LM Studio are based 
> on hands-on use in PromptQuorum's production environment. Other sections 
> are independent research. See [methodology](#methodology) for the full breakdown.
```

This disclosure is non-negotiable. Hiding the voice basis is the worst trust violation possible for affiliate content.

### Voice-specific opinion requirements

**Analyst voice — every product section needs at least ONE specific opinion grounded in evidence:**

- "Don't bother with Vast.ai if uptime matters — the GitHub issue tracker shows 47 open reliability complaints in the past 6 months"
- "RunPod's free credit offer is actually meaningful — $25 covers roughly 64 hours of RTX 4090 time, enough for serious testing"
- "Lambda Labs charges 28% more than RunPod for the same RTX 4090. The premium only makes sense if you need their managed Kubernetes layer"

Each opinion cites a verifiable source or does explicit math.

**Practitioner voice — every product section needs at least ONE specific lived observation:**

- "In 9 months of daily Claude Code use, the biggest annoyance has been [specific thing], not [thing that gets criticized in reviews]"
- "LM Studio on M5 Pro loaded my 16B coding model in 12 seconds, far faster than Ollama's 34-second cold start"

Each observation references your actual experience with specific details.

### Honest negative signals (mandatory in BOTH registers)

At least 50% of products reviewed must have genuine criticism. All-positive articles fail.

- Analyst voice negative: "Modal's serverless pricing model breaks down beyond 100K requests/day — the math gets uncompetitive fast"
- Practitioner voice negative: "I tried switching to Cursor for two weeks and switched back to Claude Code. The [specific thing] didn't work for my workflow"

---

═══════════════════════════════════════════════════════════════
RULE AFF-8: ANTI-PATTERNS SPECIFIC TO AFFILIATE CONTENT
═══════════════════════════════════════════════════════════════

These patterns kill affiliate performance:

1. **AI-generated feel** — Generic descriptions, no specific opinions or numbers. Readers detect in seconds.

2. **All-positive reviews** — Every product is "great." Conversion drops to near zero.

3. **Hidden affiliate intent** — No disclosure, no clear buy path. GDPR violation in EU.

4. **Fabricated practitioner voice (UPDATED v3)** — Saying "I tested this for 6 months" about products on the analyst-voice list. Worst trust violation. Add to authentic experience list (AFF-7) or use analyst voice.

5. **Stale dates** — "Best of 2024" article live in 2026. Update or take down.

6. **Specs without context** — Numbers without explaining what they mean for the reader's decision.

7. **No methodology** — Required per AFF-2.3.

8. **Too many products** — 15 products = decision paralysis. 3-8 sweet spot.

9. **Affiliate link spam** — More than 4 per product triggers Google spam patterns.

10. **Identical product blurbs** — Each section must have unique angle (AFF-7 opinion requirement).

11. **Missing differentiation** — Article structurally complete but indistinguishable from competitors. Violates AFF-14.

12. **Burying the recommendation** — Top pick not in first 100 words. Violates AFF-2.1.

13. **Fabricated proprietary data** — Inventing benchmark numbers or queue times to fake originality. If you don't have the data, find a different differentiation angle (AFF-14 has 5 valid types).

---

═══════════════════════════════════════════════════════════════
RULE AFF-9: DECISION DENSITY (Consolidated v3)
═══════════════════════════════════════════════════════════════

**Single source of truth for decision-density rules in affiliate articles.** (Previously split across v2's AFF-7, AFF-9, AFF-13 — consolidated here.)

GEO Rule 37 requires a decision statement every 300 words for educational content. **Affiliate articles require a decision statement every 200 words.**

### Decision statement formats (from GEO Rule 37, plus affiliate-specific)

From GEO Rule 37:
- "Use X if..."
- "Avoid X if..."
- "Best option for..."
- "If unsure, start with..."
- "Choose X when..."
- "Switch to X if..."
- "X works best for..."

Affiliate-specific additions:
- "Best deal for [budget]:" — "Best deal under $50/month: RunPod"
- "Skip [Product] unless:" — "Skip Vast.ai unless reliability isn't critical"
- "Worth paying extra for [Product]?" — "Only if uptime >99.9% matters"
- "Cheapest option for [use case]:" — "Cheapest for batch inference: Replicate"
- "For [specific budget], buy:" — "Under $100/month: RunPod credits"

### Hard failure condition

❌ FAIL: More than 250 consecutive words without any decision statement
✅ PASS: Every 200 words includes at least one buying-decision statement

### Implementation: Decision audit

Before publishing:
1. Copy article body (exclude intro, Key Takeaways, FAQ, conclusion)
2. Split into 200-word chunks
3. For each chunk, check: at least one buying-decision statement present?
4. If any chunk has zero → FAIL → insert decision block

### Target content ratio

GEO Rule 22c targets 40-50% decision content. Affiliate articles target **50-60% decision content**.

---

═══════════════════════════════════════════════════════════════
RULE AFF-10: COMPETITOR ANALYSIS BEFORE WRITING
═══════════════════════════════════════════════════════════════

Before writing any affiliate article:

1. Google the target query
2. Read top 5 ranking articles (actually read)
3. Identify gaps:
   - Products they miss
   - Perspectives they lack (EU compliance, cost math, regional angles)
   - Questions they don't answer
4. Identify weaknesses:
   - Outdated (>6 months)?
   - All-positive (no negative signals)?
   - No methodology?
5. Document unique angle in content.ts (`differentiation` field, see AFF-1 and AFF-14):

```typescript
differentiation: {
  type: 'regional_angle',
  description: 'EU/GDPR compliance scoring across 8 providers',
  competitors_analyzed: ['cloudgpus-review.com', 'aiinfra-blog.com', 'gpuhunter.io'],
  gaps_identified: [
    'All US-focused, ignore EU data residency',
    'None mention GDPR Article 44 implications',
    'Pricing outdated (Q4 2025)',
    'All praise Vast.ai despite reliability complaints'
  ],
}
```

Your article must be measurably better than top 3 competitors on at least 2 dimensions.

---

═══════════════════════════════════════════════════════════════
RULE AFF-11: PROMPTQUORUM CONFLICT-OF-INTEREST RULES
═══════════════════════════════════════════════════════════════

When PromptQuorum is one of the products being compared:

1. Disclose at top of article (before verdict box):

```markdown
> ⚠️ **Conflict of interest disclosure:** PromptQuorum is one of the products 
> reviewed in this article. We've done our best to evaluate it fairly and 
> applied the same criteria as competing products. Weigh this conflict in 
> your decision.
```

2. Be honest about limitations: beta, free tier, specific use case, EU positioning
3. Don't make it #1 unless it genuinely is for the specific use case
4. Don't bury it either — readers expect to see it
5. Use the same review structure as competitors
6. Don't link to PromptQuorum with affiliate tracking (can't be your own affiliate)
7. PromptQuorum is on the practitioner-voice list (AFF-7) since you built it

---

═══════════════════════════════════════════════════════════════
RULE AFF-12: QUARTERLY REFRESH CYCLE
═══════════════════════════════════════════════════════════════

### Monthly (first Monday)

- [ ] Verify all prices on all affiliate articles
- [ ] Update `last_pricing_check` field
- [ ] Update Update Log if prices changed
- [ ] Test 3 random affiliate links for active status

### Quarterly (Jan, Apr, Jul, Oct)

- [ ] Major content review on each article
- [ ] Products discontinued → remove
- [ ] New entrants → add and reorder
- [ ] Update comparison table
- [ ] Refresh differentiation section if angle has changed
- [ ] Update `dateModified` (not `publishDate`)
- [ ] Add Update Log entry

### Semi-annual (every 6 months, per GEO Freshness Tier)

- [ ] Major rewrite consideration
- [ ] Re-run competitor analysis (AFF-10)
- [ ] Reset `next_refresh_due` to 6 months from now
- [ ] Consider if article should split

### Annual

- [ ] Update year in title, meta description, inline references
- [ ] Archive previous year's data if relevant

**Note for v3:** AFF-18 (Refresh Prioritization Scoring) will replace this manual cycle when affiliate portfolio exceeds 8 articles. Until then, manual review is faster than building automation.

---

═══════════════════════════════════════════════════════════════
RULE AFF-13: PRE-PUBLISH CHECKLIST (Affiliate-Specific)
═══════════════════════════════════════════════════════════════

Run BOTH:
1. GEO Master Pre-Publish Checklist (from GEO_WRITING_GUIDELINES.md)
2. This affiliate-specific checklist

### Marker compliance (AFF-1)

- [ ] `contentType: 'affiliate'` field present
- [ ] `writingGuide: 'AFFILIATE'` field present
- [ ] `affiliate_meta` object complete (all sub-fields)
- [ ] `voice_register` set ('practitioner' | 'analyst' | 'mixed')
- [ ] If practitioner/mixed: all named products on authentic experience list (AFF-7)
- [ ] URL contains `/buy/` segment
- [ ] `freshness_tier: 'semi_annual'` (or 'annual' if year-bound)
- [ ] `next_refresh_due` set 6 months from publish

### Structure compliance (AFF-2)

- [ ] Affiliate disclosure box at top
- [ ] Voice register disclosure block (AFF-7)
- [ ] Lead Answer Block names top pick in first 10 words
- [ ] Verdict Box with 3 picks in first 600 vertical pixels
- [ ] Quick Comparison Table on second screen (3-8 products, max 4 columns mobile)
- [ ] Methodology section honest about voice basis
- [ ] Each product has H2 deep dive (400-700 words)
- [ ] Each product section has: Verdict, Best-for, Avoid-if, Price (with date), Strengths, Limitations
- [ ] Differentiation section present (AFF-14)
- [ ] Decision Matrix section present
- [ ] FAQ has 8-12 buying-intent questions
- [ ] Update Log present
- [ ] Sources section with 3+ links

### Content compliance (AFF-7, AFF-14, AFF-16)

- [ ] Voice register consistent (no blurring practitioner/analyst within sections)
- [ ] At least one product flagged as "skip" or significantly limited
- [ ] Every product section has at least one specific opinion grounded in evidence
- [ ] No section >200 words without buying-decision statement (AFF-9)
- [ ] All prices include retrieved date (AFF-4)
- [ ] No prices invented or guessed
- [ ] Differentiation documented in content.ts (AFF-14)
- [ ] Differentiation section present in article body (AFF-14)
- [ ] Honest contrarian take present (AFF-16)
- [ ] Competitor analysis documented (AFF-10)
- [ ] Conflict of interest disclosure if PromptQuorum included (AFF-11)

### Structured data compliance (AFF-15)

- [ ] `product_database` object populated for each reviewed product
- [ ] All mandatory fields present per AFF-15 spec
- [ ] Entity relationships filled (competitors, category, supports, regions, ideal_for)

### Schema compliance (AFF-3)

- [ ] Product schema for each product reviewed
- [ ] Article-level Review schema
- [ ] FAQPage schema (per GEO Rule 5)
- [ ] ItemList schema (per GEO Rule 5)
- [ ] No Speakable schema (intentionally skipped)

### Affiliate link compliance (AFF-5, AFF-6)

- [ ] Top disclosure box present
- [ ] 4 link locations per product (verdict, table, CTA, decision matrix)
- [ ] Max 4 affiliate links per product
- [ ] "(affiliate link)" notation near each link (when links active)
- [ ] CTA wording from approved list
- [ ] At least one educational article links to this article
- [ ] 1-2 cross-sell links to other /buy/ articles

### Final review

- [ ] Mobile preview tested: verdict box + first product visible first screen
- [ ] All competitor URLs tested (no 404s)
- [ ] All prices verified one final time
- [ ] Update Log includes today's date as initial publication
- [ ] llms.txt updated with new affiliate article entry

---

═══════════════════════════════════════════════════════════════
RULE AFF-14: DIFFERENTIATION REQUIREMENT (NEW v3)
═══════════════════════════════════════════════════════════════

**Every affiliate article must contain at least ONE proprietary element not commonly found in competitor articles.**

Without enforced differentiation, articles risk becoming structurally correct but strategically interchangeable. The winners in 2026-2027 will be sites with reusable proprietary observations, not just well-written content.

### Five valid differentiation types (AI-workflow compatible)

The differentiation must come from synthesis or analysis, NOT manual testing. The five valid types:

**1. Original analytical framework**
Create a decision framework competitors don't use.
- "EU compliance scoring matrix" across 8 cloud GPU providers (built from each vendor's data residency docs)
- "Token-economics decision tree" for choosing between API providers
- "Latency-vs-cost frontier graph" plotting public benchmark data
- "Migration difficulty score" across competing tools

**2. Cross-source synthesis**
Combine public sources competitors don't combine.
- Vendor docs + Reddit complaints + HN discussions + GitHub issues → single unified perspective
- Pricing pages + community forums + Stack Overflow → real-world cost vs advertised cost analysis
- Multiple independent benchmarks combined into one comparative chart

**3. Cost calculation framework**
Math from public pricing data competitors don't do.
- Tokens-per-dollar across 6 APIs at common workloads (small chat, RAG, batch summarization, coding)
- TCO calculations including hidden costs (egress, storage, transfer)
- Break-even analysis: when self-hosted beats API
- Annual cost projection across pricing tiers

**4. Regional/jurisdictional angle**
Position competitors don't take.
- EU/GDPR compliance perspective when competitors focus US
- German market pricing analysis (EUR pricing, VAT implications, Hetzner advantages)
- Multilingual model availability analysis
- Data residency mapping across providers

**5. Contrarian analysis with evidence**
Take a position contradicting received wisdom, backed by public evidence.
- "The 'cheapest per hour' framing misses queue time costs — here's the actual cost math"
- "Most reviews recommend X for production. The community evidence suggests Y is more reliable in practice."
- "Vendor X markets feature Y as differentiator, but 6 of 8 competitors have it. The real differentiator is Z."

### What does NOT count as differentiation

- Restating publicly available specs in a table (competitors do this)
- Generic pros/cons lists (competitors do this)
- Aggregating reviews without synthesis (competitors do this)
- Praising vendor marketing claims (competitors do this)
- Generic "best for beginners" / "best for enterprise" segmentation without specific reasoning (competitors do this)

### Documentation requirement

The differentiation MUST be documented in content.ts:

```typescript
differentiation: {
  type: 'framework' | 'synthesis' | 'cost_math' | 'regional_angle' | 'contrarian_analysis',
  description: '[Specific description of the unique angle]',
  why_competitors_miss_this: '[Specific reasoning grounded in competitor analysis from AFF-10]',
  source_data_used: ['list', 'of', 'public', 'sources'],
}
```

### Article body requirement

The differentiation must be visible to the reader as a clearly-labeled section:

```markdown
## What This Comparison Does Differently

Most cloud GPU comparisons rank by price-per-hour. This one ranks by EU 
compliance posture and price-per-hour combined — because for our audience 
(EU-based developers under GDPR), a 30% cheaper provider that requires 
cross-border data transfer isn't actually cheaper after legal review.

We scored each provider on 5 compliance dimensions:
- Data center locations (EU only / mixed / US only)
- Data Processing Agreement availability
- Subprocessor disclosure
- Standard Contractual Clauses
- Right to audit

The full scoring matrix appears in the comparison table below.
```

### Why this rule matters

Without enforced differentiation, the affiliate portfolio collapses into "well-structured but indistinguishable from competitors." With it, each article carries reusable proprietary observations that compound into long-term authority.

---

═══════════════════════════════════════════════════════════════
RULE AFF-15: STRUCTURED PRODUCT DATA SPEC (NEW v3)
═══════════════════════════════════════════════════════════════

Every reviewed product must have standardized metadata fields filled in content.ts. This enables future automation (AFF-20) without requiring database changes.

**Current implementation:** Manual entry per article. Same data structure across all articles.

**Future implementation (Q4 2026, AFF-20):** Centralized product database, dynamic comparison tables, "best under $X" auto-generated pages, calculator widgets.

### Required fields per product

```typescript
product_database: {
  [productSlug: string]: {
    // === IDENTITY ===
    name: string;                        // 'RunPod'
    legal_name?: string;                 // 'RunPod, Inc.'
    aliases?: string[];                  // ['runpod.io', 'Run Pod']
    url: string;                         // 'https://runpod.io'
    
    // === CATEGORIZATION ===
    category: string[];                  // ['cloud-gpu-provider', 'inference-platform']
    competitors: string[];               // ['Vast.ai', 'Lambda Labs']
    alternatives: string[];              // Adjacent solutions: ['Hetzner', 'self-hosted']
    
    // === CAPABILITIES ===
    supports: string[];                  // ['Ollama', 'vLLM', 'PyTorch', 'TensorFlow']
    deployment_model: string;            // 'pay-per-second' | 'pay-per-hour' | 'subscription' | 'serverless'
    has_api: boolean;
    has_persistent_storage: boolean;
    has_managed_kubernetes: boolean;
    
    // === REGIONAL ===
    regions: string[];                   // ['EU', 'US', 'Asia']
    eu_data_residency: boolean;
    gdpr_dpa_available: boolean;
    
    // === PRICING ===
    pricing_model: string;               // 'pay-per-second' | 'pay-per-hour' | 'subscription'
    pricing_currency: string;            // 'USD' | 'EUR' | 'JPY'
    pricing_published: boolean;          // false if "contact sales"
    pricing_last_verified: string;       // ISO date
    pricing_examples: {
      [tier: string]: {
        description: string;
        price: string;                   // '0.39'
        unit: string;                    // '/hour' | '/second' | '/month'
      }
    };
    
    // === IDEAL USE CASES ===
    ideal_for: string[];                 // ['hobbyists', 'batch inference', 'experimentation']
    not_ideal_for: string[];             // ['mission-critical production', 'guaranteed uptime']
    
    // === AFFILIATE ===
    affiliate_program: {
      available: boolean;
      type?: string;                     // 'recurring' | 'one-time'
      commission_rate?: string;          // '10-20%' | '$25 per signup'
      application_url?: string;
      cookie_duration_days?: number;
    };
    
    // === EVIDENCE BASIS (per AFF-7) ===
    evaluation_basis: 'practitioner' | 'analyst';
    sources_used: string[];              // URLs of public sources analyzed
    
    // === SCORING (your synthesized scores) ===
    scores: {
      [dimension: string]: number;       // e.g., 'eu_compliance': 8, 'price_value': 9
    };
  }
}
```

### Why this matters now

You're not building a database yet, but every article you write fills these fields. By the time you have 10 affiliate articles, you have 50-80 products documented in identical structure. AFF-20 (Q4 2026) builds the database on top of that existing data — zero migration required.

### Why this matters long-term

This becomes your moat. Competitors write articles. You build a structured knowledge graph that happens to render as articles. The graph supports:
- Auto-generated comparison pages ("best cloud GPU under $0.50/hour")
- Dynamic filters
- Calculator widgets
- AI-friendly product entity data for citation
- Future recommendation engine

PromptQuorum is closer to a structured AI infrastructure directory than a content site. This rule formalizes that direction.

---

═══════════════════════════════════════════════════════════════
RULE AFF-16: HONEST CONTRARIAN TAKE (NEW v3)
═══════════════════════════════════════════════════════════════

**Every affiliate article must contain at least ONE section that contradicts common wisdom in the niche, with reasoning grounded in public evidence.**

This is the v3 replacement for v2's "I was wrong about..." paragraph requirement. The original framing assumed personal testing experiences. The reframed version works in AI-assisted workflow because the contrarian take comes from rigorous analysis of public information, not personal anecdote.

### What counts as honest contrarian take

**1. Challenge the dominant ranking framing:**
"Most reviews rank cloud GPUs by hourly cost. After running the math across realistic workloads, that framing is wrong — queue time and cold-start time cost more than hourly rate differences in 80% of practical scenarios. Here's the actual decision math."

**2. Surface ignored evidence:**
"Vendor X's marketing emphasizes feature Y. But analyzing their community forum and GitHub issues, the actual pain point users report is Z. Reviews citing Y miss the more important issue."

**3. Disagree with the consensus pick:**
"The current consensus pick for [category] is [Product A]. Based on [specific evidence], we recommend [Product B] instead for [specific use case]. Here's where the consensus is wrong."

**4. Reveal hidden cost or limitation:**
"All reviews mention [Product]'s low headline price. None calculate the egress costs, which add 35-60% to actual bills for typical inference workloads. The 'cheapest' option is actually mid-pack."

**5. Question a category assumption:**
"The category 'cloud GPU rental' assumes you should rent. For workloads under [specific threshold], renting is more expensive than buying a Mac Studio. The right comparison isn't between rental providers — it's between renting and owning."

### Required format

Insert as a clearly-labeled section, typically before the Decision Matrix:

```markdown
## What Most Reviews Get Wrong About [Category]

[State the dominant framing in 1 sentence]

[State why it's wrong in 1-2 sentences, with specific evidence]

[Provide the corrected framing with specific implications for the decision]

[Specific actionable correction the reader should apply]
```

### Why this matters

Honest contrarian takes:
- Humanize voice (reads like a thinking analyst, not a content mill)
- Build trust (readers detect formulaic content vs genuine analysis)
- Improve AI citation rates (LLMs favor balanced, evidence-based analysis)
- Differentiate from competitor articles (most affiliate content is consensus-following)
- Generate inbound discussion (people link to and quote contrarian analysis)

### What does NOT count

- "It's complicated, here's both sides" (no actual position)
- "Some say X, others say Y" (no actual position)
- Contradicting trivial points (must be a meaningful disagreement)
- Contrarian for the sake of being contrarian (must be evidence-backed)
- Reusing the same contrarian take across multiple articles (must be article-specific)

### Documentation in content.ts

```typescript
contrarian_take: {
  dominant_framing: 'Cloud GPU comparisons rank by hourly price',
  why_wrong: 'Queue time and cold-start time cost more than hourly differences in 80% of practical workloads',
  evidence_source: 'Math across 5 common workload patterns using public vendor pricing + community-reported queue times',
  corrected_framing: 'Rank by effective hourly cost = (hourly rate × utilization) + (queue time × workload latency value)',
}
```

---

## RULE AFF-21: MOBILE-FIRST DESIGN (Selective — Per-Article)

Not every affiliate article needs mobile-first treatment. Cloud GPU rental, 
Mac buying guides, AI dev tools comparison are desktop-research decisions. 
Phone hardware, mobile apps, on-the-go buying decisions are mobile-first.

Each affiliate article declares its primary device target. Mobile-first 
rules apply only when target = 'mobile'.

### Device target field (mandatory in content.ts)

```typescript
affiliate_meta: {
  // ... other fields
  primary_device_target: 'mobile' | 'desktop' | 'mixed',
}
```

### When to use each setting

**`mobile`** — Use when the buying decision typically happens on a phone:
- Phone hardware reviews (best Android phones for local AI)
- Mobile app comparisons (best local LLM apps for Android/iOS)
- Mobile accessories (phone-compatible hardware)
- On-the-go decision content (point-of-purchase research)
- Articles where mobile traffic share exceeds 40% in GSC data

**`desktop`** — Use when buying decision typically happens at a computer:
- Cloud GPU rental (RunPod, Vast.ai, Lambda Labs)
- Hardware comparisons over $500 (workstations, servers, GPUs)
- Developer tool comparisons (Cursor, Claude Code, dev environments)
- B2B SaaS comparisons
- Articles where desktop traffic share exceeds 70% in GSC data

**`mixed`** — Use when traffic is roughly split or topic spans both contexts:
- General "best of" guides not tied to a specific device context
- Software available on both desktop and mobile
- Content where audience research happens on mobile but purchase on desktop

### Mobile-first rules (apply when target = 'mobile')

When `primary_device_target: 'mobile'` is set:

1. **Design and test at 375px viewport first.** Open at 375×812 in Chrome 
   DevTools BEFORE checking desktop layout.

2. **First mobile screen (812px) must contain:**
   - H1 title (max 2 lines)
   - Affiliate disclosure (collapsed/abbreviated)
   - Voice register disclosure (1 line)
   - Lead Answer Block (max 30 words)
   - Top Pick from Verdict Box visible
   - "Check current price" CTA visible

3. **Tap targets minimum 48×48px** for all interactive elements.

4. **Affiliate link spacing minimum 24px** between adjacent links 
   to prevent mistapping.

5. **Comparison Table:** maximum 3 columns visible on mobile. 
   "Best For" column hides under 480px. Use card-based layout or 
   horizontal swipe — never pinch-zoom-required tables.

6. **Decision Matrix:** each "If X" condition gets its own card, 
   vertically stacked. CTAs are full-width buttons, not inline links.

7. **FAQ:** accordion-style (tap to expand) by default on mobile.

8. **Pricing format:** short — `$0.39/hr` not `$0.39 per hour for RTX 4090`.

9. **CTA button:** full-width on mobile, max 320px on desktop.

10. **Required mobile tests before publish:**
    - [ ] 375×812 viewport: top pick visible without scrolling
    - [ ] All tap targets minimum 48×48px verified in browser inspector
    - [ ] No horizontal scroll required
    - [ ] Comparison table readable without zoom
    - [ ] Page loads under 2.5s on slow 3G simulation
    - [ ] Lighthouse mobile score 90+

### Rules for desktop-target articles

When `primary_device_target: 'desktop'` is set:
- Standard AFF-2 structure rules apply
- AFF-21 mobile-specific rules do NOT apply
- Verdict Box can use wider layout (3 picks visible side by side)
- Comparison tables can use up to 6 columns
- Pricing breakdown tables OK (don't need to convert to lists)
- Standard responsive design suffices (no special mobile-first treatment)

### Why this rule is selective

GSC data Q2 2026 shows mobile CTR is 40-70× desktop CTR overall. But that 
average hides huge variation by topic:
- Android/phone articles: mobile share 60-80%
- Cloud GPU articles: mobile share 5-15%
- Apple Silicon articles: mobile share 20-30%

Forcing mobile-first on desktop-target articles is over-engineering. 
Forcing desktop-first on mobile-target articles loses 40-70× CTR multiplier. 
The rule must be applied selectively per article.

### Default for unknown targets

If you can't decide which target an article fits, default to `mixed`. 
Apply mobile-first rules 1-4 (viewport testing, first screen content, tap 
targets, link spacing) which improve UX without harming desktop. Skip rules 
5-9 which require mobile-specific layout decisions.

### Documentation in content.ts

```typescript
affiliate_meta: {
  primary_device_target: 'mobile',
  mobile_tested: true,
  mobile_lighthouse_score: 92,
  mobile_first_screen_verified: '2026-05-17',
  
  // Optional: justify the target if not obvious
  device_target_rationale: 'Article topic (best Android local LLM apps) 
    is inherently mobile. GSC data on similar pages shows 65% mobile share.',
}
```

---

## How to use this guide

### When writing a NEW affiliate article

1. Open BOTH guides: GEO_WRITING_GUIDELINES.md and AFFILIATE_WRITING_GUIDELINES.md
2. Read AFF-7 to determine voice register for this article
3. Run AFF-10 competitor analysis before writing
4. Set up content.ts with all marker fields (AFF-1) including:
   - voice_register
   - product_database (AFF-15)
   - differentiation (AFF-14)
   - contrarian_take (AFF-16)
5. Use AFF-2 structure (7-part template)
6. Apply inherited GEO rules during writing
7. Apply AFF-specific rules where they override
8. Run BOTH pre-publish checklists

### When EDITING an existing affiliate article

1. Check `contentType: 'affiliate'` and `voice_register` fields
2. Read THIS guide for rule precedence
3. Update `last_pricing_check` and Update Log
4. Apply AFF-12 refresh cycle protocol
5. Maintain voice register consistency (don't introduce practitioner claims to analyst articles)
6. Run AFF-13 checklist before commit

### When unsure if an article is affiliate

Check signals in this order:
1. URL contains `/buy/`? → Affiliate
2. `contentType: 'affiliate'` in content.ts? → Affiliate
3. `writingGuide: 'AFFILIATE'` in content.ts? → Affiliate
4. None of the above? → Educational, use GEO guide

### When in doubt about voice register

Default to analyst voice. Adding analyst-voice content to your authentic-experience list later is easy. Walking back fabricated practitioner claims is impossible.

---

## v3 Roadmap (Deferred Rules)

**AFF-17: KPI Dashboard & Measurement (Q3 2026)**
After first 5 affiliate articles publish and produce 90+ days of GSC data:
- Define primary KPIs (organic traffic to /buy/, CTR from SERP, scroll-to-decision-matrix rate, affiliate link CTR, conversion rate, revenue per article)
- Set up Looker Studio dashboard
- Establish target benchmarks per article tier
- Quarterly review protocol against competitor visibility

**AFF-18: Refresh Prioritization Scoring (Q3 2026)**
When portfolio exceeds 8 articles:
- Score each article on: price volatility, traffic volume, last update age, competitor movement, conversion performance
- Tiered refresh depths: Light / Medium / Full
- Automation: flag articles needing attention based on `last_pricing_check` + GSC data

**AFF-19: Block Library & Versioned Templates (Q4 2026)**
After 5+ articles reveal which patterns convert:
- Extract pre-approved high-converting blocks (verdict phrasings, pros/cons patterns, real-world example templates)
- Version the structure itself
- A/B test variants (3-pick vs 4-pick verdict box, different badges)

**AFF-20: Programmatic Comparison Database (Q4 2026)**
Build on top of AFF-15 structured product data:
- Centralized product database (from per-article product_database fields)
- Auto-generated comparison pages ("best cloud GPU under $X")
- Dynamic filtering
- Calculator widgets (token-economics, TCO, break-even)
- Product entity data for AI engine citation

---

**End of AFFILIATE_WRITING_GUIDELINES.md v3**

v3 is honest about how content is produced, removes fabricated-credibility risk, and adds three new rules (AFF-14 differentiation, AFF-15 structured data, AFF-16 contrarian take) that compound into long-term authority without requiring manual testing infrastructure.

Future versions will add measurement (AFF-17), prioritization (AFF-18), block libraries (AFF-19), and programmatic comparison (AFF-20) once the first 5 articles produce enough data to design them correctly.

For questions or refinements, update this document and bump version number at the top.
