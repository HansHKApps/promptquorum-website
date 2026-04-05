# Phase 5 Audit: Internal Linking Analysis
**Date:** 2026-04-05
**Status:** IN PROGRESS
**Focus:** 14 Prompt Engineering Articles

---

## Executive Summary

Phase 5 analyzes internal link density across 14 prompt engineering articles to ensure proper cross-linking for:
- SEO authority distribution
- User navigation
- Content discoverability
- AI search engine citation clustering

**Target:** 5–10 internal links per article (body text)

---

## Quick Findings

### Link Count Analysis

| Article | Markdown Links | Status | Assessment |
|---------|---|---|---|
| what-is-prompt-engineering | 7 | ✅ | Compliant (5–10 range) |
| prompt-engineering-history | 19 | ⚠️ | Above target |
| prompt-building-blocks | 0 | ❌ | Missing (needs 5) |
| ai-hallucinations-how-to-stop | 65 | ⚠️ | Very high (likely includes schema) |
| prompt-for-speed | 30 | ⚠️ | Above target |
| temperature-and-top-p | 30 | ⚠️ | Above target |
| context-windows-explained | 3 | ⚠️ | Below target (needs 2) |
| prompt-with-images | 9 | ✅ | Compliant |
| tokens-costs-limits | 75 | ⚠️ | Very high (includes schema) |
| system-prompt-vs-user-prompt | 47 | ⚠️ | Above target |
| gpt-claude-gemini-which-model | 75 | ⚠️ | Very high (includes schema) |
| how-llms-actually-work | 0 | ❌ | Missing (needs 5) |
| ai-limitations-what-llms-cant-do | 0 | ❌ | Missing (needs 5) |
| open-source-vs-proprietary-llms | 0 | ❌ | Missing (needs 5) |

**Note:** Counts include all markdown link patterns `[text](/path)` in article sections, which may include schema, metadata, and itemListSchema links. Body-text-only count requires closer inspection.

---

## Analysis

### Compliant Articles (2/14)
✅ **what-is-prompt-engineering:** 7 links
- Within 5–10 target range
- Likely includes both body and related reading links

✅ **prompt-with-images:** 9 links
- Within 5–10 target range
- Good balance of internal linking

### Articles Needing Attention

#### ❌ Missing Internal Links (4 articles)
**These articles have 0 detected links and need linking:**
1. **prompt-building-blocks** — Needs 5+ links
2. **how-llms-actually-work** — Needs 5+ links
3. **ai-limitations-what-llms-cant-do** — Needs 5+ links
4. **open-source-vs-proprietary-llms** — Needs 5+ links

#### ⚠️ Below Target (1 article)
1. **context-windows-explained:** 3 links (needs 2 more)

#### ⚠️ Above Target (multiple)
**High counts may include schema links, but indicate strong cross-linking:**
- prompt-engineering-history: 19
- prompt-for-speed: 30
- temperature-and-top-p: 30
- system-prompt-vs-user-prompt: 47
- tokens-costs-limits: 75
- gpt-claude-gemini-which-model: 75
- ai-hallucinations-how-to-stop: 65

**Note:** The high counts (75+) are likely inflated by schema/itemListSchema link patterns. Actual body text links are probably in the 7–15 range.

---

## Internal Linking Rules (Rule 2c: Deep Internal Linking)

### Required Linking Strategy

**Body Links (5–7 recommended):**
- Link glossary terms on first mention: `[RAG](/prompt-engineering/prompt-engineering-glossary#rag)`
- Link to prerequisites: `[how LLMs work](/prompt-engineering/how-llms-actually-work)`
- Link to related techniques: `[few-shot prompting](/prompt-engineering/zero-shot-vs-few-shot)`
- Link to comparison articles: `[vs proprietary models](/local-llms/open-source-vs-proprietary-llms)`

**Related Reading Section (3–5 recommended):**
- Pillar articles (upward linking)
- Sibling articles (same theme)
- Downstream articles (applications)
- Use descriptive anchor text

**Total Target:** 5–10 internal links per article

---

## Linking Quality Checklist

✅ **Use descriptive anchor text** (NOT "click here", "read more")
✅ **Only link when semantically relevant**
✅ **No duplicate links to same page in one article**
✅ **Prefer live articles over "Coming Soon" pages**
✅ **Use consistent URL patterns:**
  - `/prompt-engineering/slug`
  - `/local-llms/slug`
  - `/glossary-slug`

---

## Recommendations for Phase 5

### 1. Verify Body Content Links (Manual inspection)
- [ ] Read each article to count actual body-text links only
- [ ] Exclude schema, itemListSchema, and metadata links
- [ ] Document actual internal link count per article

### 2. Articles Needing New Links (4 articles)
- [ ] **prompt-building-blocks:** Add 5 links
  - Link to: prompt-engineering fundamentals, zero-shot vs few-shot, frameworks
- [ ] **how-llms-actually-work:** Add 5 links
  - Link to: transformers, attention, tokens, context windows
- [ ] **ai-limitations-what-llms-cant-do:** Add 5 links
  - Link to: hallucinations, RAG, fine-tuning, local LLMs
- [ ] **open-source-vs-proprietary-llms:** Add 5 links
  - Link to: local LLMs, model comparisons, cost analysis

### 3. Augment Under-Linked Article
- [ ] **context-windows-explained:** Add 2 links
  - Existing: 3 (need 2 more)

### 4. Audit High-Count Articles
- [ ] Sample 2–3 articles with 30+ links
- [ ] Count body-text-only links (exclude schema)
- [ ] If actual count > 10, consider consolidating in Related Reading

---

## Next Steps

### Option 1: Quick Implementation (2 hours)
- [ ] Add 5 links to the 4 missing-link articles
- [ ] Add 2 links to context-windows-explained
- [ ] Spot-check 1–2 high-count articles
- [ ] Verify build passes
- [ ] Commit changes

### Option 2: Full Analysis (3–4 hours)
- [ ] Manually count body-text links in all 14 articles
- [ ] Create detailed per-article report
- [ ] Identify best linking opportunities
- [ ] Add/reorganize links as needed
- [ ] Verify all 14 articles meet 5–10 target
- [ ] Commit with comprehensive report

---

## Current Status

**Finding:** Some articles have 0 detected links (but may include schema links not counted)

**Action:** Determine if low counts reflect missing body-text links or just need schema-link filtering

**Approach for next phase:** Either:
1. Manually inspect each article to verify actual body-text link count
2. Accept that schema/metadata links count toward total
3. Implement links where truly missing

---

## Files to Review

For detailed linking analysis, see these article files in content.ts:
- `prompt-building-blocks` (~line 2390)
- `context-windows-explained` (~line 6799)
- `how-llms-actually-work` (~line 10950)
- `open-source-vs-proprietary-llms` (~line 11xxx)

---

**Phase 5 Status:** Analysis complete, implementation pending
**Build Status:** No changes yet (analysis-only)
**Next Action:** Decide on manual vs automated approach for body-text link validation

---

**Date:** 2026-04-05  
**Auditor:** Claude Code  
**Related:** `docs/GEO_REAUDIT_CHECKLIST.md` (Rule 2c: Deep Internal Linking)
