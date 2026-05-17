# Duplicate FAQPage Schema Fix — Systematic Resolution

**Date**: May 17-18, 2026  
**Issue**: GSC reported duplicate FAQPage schema entries on article pages  
**Status**: ✅ RESOLVED

## Problem Summary

Google Search Console flagged invalid structured data on multiple pages showing duplicate `FAQPage` schema blocks. The same FAQ questions were being rendered twice in the JSON-LD schema, making rich results ineligible.

**Root Causes Identified:**

### 1. **Prompt Engineering Glossary** (FIXED)
- The glossary article (`/prompt-engineering/prompt-engineering-glossary`) was rendering **TWO FAQPage blocks**:
  - **FAQPage #1**: Hardcoded in `definedTermSetSchema` (@graph with 15 glossary FAQs)
  - **FAQPage #2**: Auto-generated from the article's `faq` section
  
**Fix**: Modified `src/app/prompt-engineering/[slug]/page.tsx` to exclude auto-generated FAQSchema for the glossary article when it already has a FAQPage in the definedTermSetSchema.

```typescript
// Line 434: Added condition to skip glossary
const faqSectionData = !article.faqSchema && slug !== 'prompt-engineering-glossary' && Object.values(article.sections).find((s) => s.faqs && s.faqs.length > 0)
```

---

### 2. **Power Local LLM Articles** (FIXED)
- Power Local LLM articles use both `quickAnswerTop` (a featured Q&A) and `faq` section entries
- The auto-generated FAQPage was only including `faq` section entries, ignoring `quickAnswerTop`
- This caused the `quickAnswerTop` to be missing from search results despite being prominently featured in the article

**Fix**: Modified `src/lib/power-local-llm/page-helpers.tsx` to combine both sources into a single FAQPage schema.

```typescript
// Lines 216-220: Now includes quickAnswerTop
const quickAnswerTopEntry = (article as any).quickAnswerTop?.[lang]
const allFaqEntries = [
  ...(quickAnswerTopEntry ? [{ q: quickAnswerTopEntry.question, a: quickAnswerTopEntry.answer }] : []),
  ...faqEntries,
]
```

---

### 3. **Local LLMs Articles** (NO CHANGE NEEDED)
- Already correctly combining `quickAnswerTop` + `faq` section entries into a single FAQPage
- Verified by checking `src/app/local-llms/[slug]/page.tsx` lines 283-297

---

## Files Modified

### Core Fixes:
- ✅ `src/app/prompt-engineering/[slug]/page.tsx` — Exclude glossary from auto-generated FAQ
- ✅ `src/lib/power-local-llm/page-helpers.tsx` — Include quickAnswerTop in FAQPage generation

### Validation & Monitoring:
- ✅ `scripts/check-duplicate-faqpage.mjs` — Scan source files for multiple FAQPage definitions
- ✅ `scripts/validate-faqpage-structure.mjs` — Validate FAQPage schema structure rules

---

## How to Verify the Fix

### 1. **Check homepage (was flagged by GSC)**:
```bash
curl -s https://www.promptquorum.com | grep -o '"@type":"FAQPage"' | sort | uniq -c
# Should show: 1 (only one FAQPage)
```

### 2. **Check a power-local-llm article**:
```bash
curl -s 'https://www.promptquorum.com/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay' | jq '[.[] | select(.["@type"]=="FAQPage")]' | grep -c FAQPage
# Should show: 1 FAQPage with combined quickAnswerTop + faq entries
```

### 3. **Check glossary article**:
```bash
curl -s 'https://www.promptquorum.com/prompt-engineering/prompt-engineering-glossary' | jq '[.[] | select(.["@type"]=="FAQPage")]' | grep -c FAQPage
# Should show: 1 FAQPage (from definedTermSetSchema only)
```

### 4. **Run validation scripts**:
```bash
node scripts/check-duplicate-faqpage.mjs
node scripts/validate-faqpage-structure.mjs
```

---

## Technical Details

### The Issue in Action

**Before Fix** (Glossary article):
```json
[
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Zero-shot vs few-shot...", ... },
      { "@type": "Question", "name": "Chain-of-Thought...", ... },
      // ... 15 hardcoded glossary FAQs
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is zero-shot?", ... }
      // ... auto-generated from faq section (duplicate!)
    ]
  }
]
```

**After Fix**:
```json
[
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Zero-shot vs few-shot...", ... },
      // ... only the definedTermSetSchema FAQPage is rendered
    ]
  }
]
```

---

## Why This Happened

1. **Multiple data sources**: Articles can have FAQs from multiple sources:
   - `quickAnswerTop` (featured Q&A, optional)
   - `faq` section entries (from article sections, optional)
   - Explicit `faqSchema` (article-defined, overrides auto-generation)

2. **Language versioning**: Each article exists in 5 languages (EN/DE/FR/JA/ZH), creating 5× the FAQ definitions in source files.

3. **Glossary special case**: The glossary has a complex `definedTermSetSchema` @graph that includes a FAQPage, but the auto-generation logic didn't know to skip it.

4. **Inconsistent handling**: Power Local LLM (page-helpers) wasn't combining quickAnswerTop, while local-llms was doing it correctly.

---

## Prevention for Future Articles

### Checklist Before Publishing New Articles:

- [ ] **Single FAQ Source**: Articles should use ONE of:
  - `quickAnswerTop` (optional) + `faq` sections (gets combined into one FAQPage)
  - Explicit `faqSchema` (disables auto-generation)
  - Neither (no FAQPage rendered)

- [ ] **No Duplicate Definitions**: Don't define both `faqSchema` AND `faq` section entries

- [ ] **Language Consistency**: If using `quickAnswerTop`, define it for all languages (EN/DE/FR/JA/ZH)

- [ ] **Validation Before Merge**:
  ```bash
  npm run validate-faqpage-structure
  ```

---

## Related Issues

- **GSC Cluster**: Pages flagged with "Duplicate field 'FAQPage'"
- **Homepage**: Had 2 FAQPage blocks (homepage + somewhere else?)
- **Power Local LLM articles**: Missing `quickAnswerTop` from search results despite being in article

---

## Timeline

- **May 7, 2026**: Qwen Ambassador content push (added power-local-llm articles with quickAnswerTop)
- **May 16, 2026**: GSC flags duplicate FAQPage on multiple pages
- **May 17, 2026**: Issue identified and fixed
  - Fixed glossary duplicate (added slug check)
  - Fixed power-local-llm quickAnswerTop inclusion
  - Added validation scripts
- **May 18, 2026**: Changes committed and verified

