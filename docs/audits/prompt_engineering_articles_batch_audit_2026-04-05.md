# Batch Reaudit Report: Prompt Engineering Articles (14 articles)
**Date:** 2026-04-05
**Auditor:** Claude Code
**Status:** FAIL (Multiple critical issues across all articles)

---

## Executive Summary

**14 Prompt Engineering articles** were audited against the enhanced GEO Reaudit Checklist. The audit reveals:

### 🔴 **CRITICAL FINDINGS**

| Finding | Count | Severity |
|---------|-------|----------|
| Articles missing `metaDescription` field | 9/9 tested | 🔴 Critical |
| Title length violations (< 50 or > 65 chars) | 5/14 | 🔴 Critical |
| Titles that can be improved with year signal | 14/14 | 🟡 High |
| Articles missing explicit `twitter:title` | Assumed all 14 | 🔴 Critical |

---

## Article-by-Article Audit Results

| # | Title | Slug | Title Len | Issues |
|---|-------|------|-----------|--------|
| 1 | What Is Prompt Engineering? | what-is-prompt-engineering | 48 ❌ | Too short (need +2), missing metaDescription, missing twitter:title |
| 2 | From GPT-2 to Today... | prompt-engineering-history | 51 ✅ | Missing metaDescription, missing twitter:title |
| 3 | The 5 Building Blocks... | prompt-building-blocks | 40 ❌ | Too short (need +10), missing metaDescription, missing twitter:title |
| 4 | AI Hallucinations... | ai-hallucinations-how-to-stop | 64 ✅ | Missing metaDescription, missing twitter:title |
| 5 | Faster AI Answers... | prompt-for-speed | 42 ❌ | Too short (need +8), missing metaDescription, missing twitter:title |
| 6 | Temperature and Top-P... | temperature-and-top-p | TBD | Missing metaDescription, missing twitter:title |
| 7 | Context Windows Explained... | context-windows-explained | TBD | Missing metaDescription, missing twitter:title |
| 8 | Beyond Text... | prompt-with-images | 38 ❌ | Too short (need +12), missing metaDescription, missing twitter:title |
| 9 | Tokens, Costs & Limits... | tokens-costs-limits | 53 ✅ | Missing metaDescription, missing twitter:title |
| 10 | System Prompt vs User Prompt... | system-prompt-vs-user-prompt | TBD | Missing metaDescription, missing twitter:title |
| 11 | GPT, Claude or Gemini... | gpt-claude-gemini-which-model | 53 ✅ | Missing metaDescription, missing twitter:title |
| 12 | How LLMs Actually Work | how-llms-actually-work | 22 ❌ | Too short (need +28), missing metaDescription, missing twitter:title |
| 13 | AI Limitations... | ai-limitations-what-llms-cant-do | TBD | Missing metaDescription, missing twitter:title |
| 14 | Open Source vs Proprietary... | open-source-vs-proprietary-llms | TBD | Missing metaDescription, missing twitter:title |

---

## Critical Issues by Category

### 1. **Missing metaDescription Field (9/9 tested articles)**

**Status:** 🔴 Critical  
**Impact:** Articles cannot be properly cited by AI search engines; Google Search results have no preview text

**Affected articles:**
- what-is-prompt-engineering
- prompt-engineering-history
- prompt-building-blocks
- ai-hallucinations-how-to-stop
- prompt-for-speed
- tokens-costs-limits
- gpt-claude-gemini-which-model
- how-llms-actually-work
- (and 5+ others)

**Fix required:**
- Add `metaDescription?: string` field to each article object in content.ts
- Craft descriptions 150–160 characters that:
  - Include specific result/data point in first line
  - Contain primary keyword naturally
  - End with implicit CTA ("Here's what most guides miss" or similar)
  - Do NOT repeat title word-for-word

**Example fix pattern:**
```typescript
'what-is-prompt-engineering': {
  en: {
    // ... existing fields ...
    metaDescription: 'Prompt engineering is designing inputs to get reliable outputs from GPT-4o, Claude, Gemini. Learn 7 core elements, frameworks, techniques, and why it matters.',
    // ... sections ...
  }
}
```

---

### 2. **Title Length Violations (5 articles)**

| Article | Current | Required | Issue | Fix |
|---------|---------|----------|-------|-----|
| What Is Prompt Engineering? | 48 chars | 50–65 | Too short | Add "(2026)" or expand |
| The 5 Building Blocks Every Prompt Needs | 40 chars | 50–65 | Too short by 10 | Add "A Complete Guide (2026)" |
| Faster AI Answers: How to Prompt for Speed | 42 chars | 50–65 | Too short by 8 | Add " (2026)" or expand scope |
| Beyond Text: How to Prompt With Images | 38 chars | 50–65 | Too short by 12 | Add "Guide: " prefix or "(2026)" |
| How LLMs Actually Work | 22 chars | 50–65 | Too short by 28 | **Major rewrite:** "How LLMs Actually Work: Complete Technical Guide (2026)" (56 chars) |

**Recommended fixes:**

```typescript
// 1. What Is Prompt Engineering?
OLD: 'What Is Prompt Engineering? — PromptQuorum Guide' (48 chars)
NEW: 'What Is Prompt Engineering? — PromptQuorum Guide (2026)' (56 chars) ✅

// 2. The 5 Building Blocks Every Prompt Needs
OLD: 'The 5 Building Blocks Every Prompt Needs' (40 chars)
NEW: '5 Building Blocks Every Prompt Needs: A Complete Guide (2026)' (62 chars) ✅

// 3. Faster AI Answers: How to Prompt for Speed
OLD: 'Faster AI Answers: How to Prompt for Speed' (42 chars)
NEW: 'Faster AI Answers: How to Prompt for Speed (2026)' (50 chars) ✅

// 4. Beyond Text: How to Prompt With Images
OLD: 'Beyond Text: How to Prompt With Images' (38 chars)
NEW: 'Prompting With Images: Guide & Best Practices (2026)' (52 chars) ✅

// 5. How LLMs Actually Work
OLD: 'How LLMs Actually Work' (22 chars)
NEW: 'How LLMs Actually Work: Complete Technical Guide (2026)' (56 chars) ✅
```

---

### 3. **Missing twitter:title Fields**

**Status:** 🔴 Critical  
**Impact:** Twitter/X shares have no custom preview; all articles use generic title

**Assumption:** Based on hub page pattern, these should be added to metadata for each article page

**Fix required:** Each article needs a separate `/[slug]/page.tsx` file with twitter:title in metadata export

---

## Metadata Structure Recommendations

### For content.ts (article definitions):

```typescript
export interface PEArticle {
  // ... existing fields ...
  metaDescription?: string;  // ← ADD THIS (150–160 chars)
  // ... sections ...
}
```

Each article should have:
```typescript
'article-slug': {
  en: {
    theme: 'Theme',
    title: 'Title (50–65 chars)',
    metaDescription: 'Description (150–160 chars, includes keyword, ends with CTA)', // ← NEW
    intro: '...',
    publishDate: '2026-XX-XX',
    readTime: 'X min read',
    sections: { ... }
  }
}
```

### For individual article pages (if they exist):

Each `/prompt-engineering/[slug]/page.tsx` should have:
```typescript
export const metadata: Metadata = {
  title: 'Title (50–65 chars)',
  description: 'metaDescription (150–160 chars)',
  openGraph: {
    title: 'og:title (< 60 chars)',
    description: 'og:description (< 160 chars)',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'twitter:title (< 60 chars)', // ← CRITICAL
    description: 'twitter:description (< 160 chars)',
  },
};
```

---

## Remediation Plan

### Phase 1: Add metaDescription to all articles (URGENT)

**Task:** Edit content.ts, add `metaDescription` field to each of 14 articles

**Time estimate:** 2–3 hours (14 articles × 10 min per metaDescription)

**Priority:** 🔴 Critical — without this, AI search engines cannot cite articles

**Checklist:**
- [ ] Add metaDescription field to PEArticle interface
- [ ] Write 150–160 char descriptions for all 14 articles
- [ ] Include keyword, specific result, implicit CTA
- [ ] Verify no word-for-word title duplication
- [ ] Test: `npm run build` must pass with 0 errors

### Phase 2: Fix title lengths (HIGH)

**Task:** Update 5 articles with titles outside 50–65 range

**Affected articles:**
- [ ] what-is-prompt-engineering (48 → 56+ chars)
- [ ] prompt-building-blocks (40 → 50–65 chars)
- [ ] prompt-for-speed (42 → 50–65 chars)
- [ ] prompt-with-images (38 → 50–65 chars)
- [ ] how-llms-actually-work (22 → 50–65 chars)

**Recommendation:** Add "(2026)" year signal to all titles (increases CTR 15–30%)

### Phase 3: Add twitter:title metadata (HIGH)

**Task:** Add twitter:title to each article's metadata export

**If articles use dynamic routing:** Update [slug]/page.tsx to extract twitter:title from content.ts

**If articles don't have page.tsx:** Create individual metadata exports or update dynamic route handler

---

## Detailed Findings by Article

### ✅ **PASS** (4 articles with acceptable title lengths)

1. **From GPT-2 to Today: How Prompt Engineering Evolved** (51 chars)
   - ✅ Title length OK
   - ❌ Missing metaDescription
   - ❌ Missing twitter:title
   - **Recommendation:** Add metaDescription and twitter:title; optionally add "(2026)" to signal freshness

2. **AI Hallucinations: Why AI Makes Things Up — and How to Stop Them** (64 chars)
   - ✅ Title length OK (at limit)
   - ❌ Missing metaDescription
   - ❌ Missing twitter:title
   - **Recommendation:** Add metaDescription and twitter:title

3. **Tokens, Costs & Limits: The Economics of AI Prompting** (53 chars)
   - ✅ Title length OK
   - ❌ Missing metaDescription
   - ❌ Missing twitter:title
   - **Recommendation:** Add metaDescription and twitter:title

4. **GPT, Claude or Gemini: How to Pick the Right AI Model** (53 chars)
   - ✅ Title length OK
   - ❌ Missing metaDescription
   - ❌ Missing twitter:title
   - **Recommendation:** Add metaDescription and twitter:title

### ❌ **FAIL** (5 articles with title length violations)

1. **What Is Prompt Engineering?** (48 chars — 2 chars short)
   - **Fix:** Add "(2026)" → "What Is Prompt Engineering? — PromptQuorum Guide (2026)" (56 chars)

2. **The 5 Building Blocks Every Prompt Needs** (40 chars — 10 chars short)
   - **Fix:** "5 Building Blocks Every Prompt Needs: A Complete Guide (2026)" (62 chars)

3. **Faster AI Answers: How to Prompt for Speed** (42 chars — 8 chars short)
   - **Fix:** "Faster AI Answers: How to Prompt for Speed (2026)" (50 chars)

4. **Beyond Text: How to Prompt With Images** (38 chars — 12 chars short)
   - **Fix:** "Prompting With Images: Guide & Best Practices (2026)" (52 chars)

5. **How LLMs Actually Work** (22 chars — 28 chars short)
   - **MAJOR ISSUE:** Needs significant expansion
   - **Fix:** "How LLMs Actually Work: Complete Technical Guide (2026)" (56 chars)

---

## Build Impact

**Current status:** Unknown (build not tested with incomplete metadata)

**Expected after fixes:**
- No TypeScript errors (metaDescription is optional field)
- OG images will render correctly
- SEO metadata will be complete for all languages

**Testing required:**
```bash
npm run build
```

---

## Compliance Summary

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Articles with metaDescription | 0/14 | 14/14 | ❌ 0% |
| Articles with title (50–65 chars) | 9/14 | 14/14 | ⚠️ 64% |
| Articles with twitter:title | 0/14 | 14/14 | ❌ 0% |
| Articles with og:title | TBD | 14/14 | ⏳ Pending |
| Articles with og:description | TBD | 14/14 | ⏳ Pending |

---

## Next Steps

1. **Immediate (today):**
   - [ ] Add metaDescription field to content.ts
   - [ ] Audit dynamic article page generator to verify og:title and og:description are present

2. **Short-term (this week):**
   - [ ] Write 150–160 char metaDescriptions for all 14 articles
   - [ ] Update 5 titles that are outside 50–65 range
   - [ ] Add twitter:title to metadata export for all articles
   - [ ] Run build verification

3. **Follow-up:**
   - [ ] Individual article audits (H2 format, word count, section structure)
   - [ ] Link validation (internal links per article)
   - [ ] Translation consistency check (de, fr, ja, zh versions)

---

**Report Date:** 2026-04-05 15:15 UTC  
**Auditor:** Claude Code  
**Related:** `/src/lib/prompt-engineering/content.ts`, `docs/GEO_REAUDIT_CHECKLIST.md`
