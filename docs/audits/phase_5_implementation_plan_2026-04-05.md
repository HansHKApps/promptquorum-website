# Phase 5 Implementation Plan: Internal Linking
**Date:** 2026-04-05
**Status:** Implementation Strategy Defined

---

## Critical Finding

**Only 1 of 14 articles uses proper markdown internal linking `[text](/path)`**

### Current State

| Category | Count | Articles |
|----------|-------|----------|
| ✅ Compliant (5–10 links) | 1 | prompt-with-images (6 links) |
| ❌ Missing links (0) | 7 | what-is-prompt-engineering, prompt-engineering-history, prompt-building-blocks, context-windows-explained, how-llms-actually-work, ai-limitations-what-llms-cant-do, open-source-vs-proprietary-llms |
| ⚠️ Above target (>10) | 6 | ai-hallucinations-how-to-stop (51), prompt-for-speed (15), temperature-and-top-p (15), tokens-costs-limits (45), system-prompt-vs-user-prompt (32), gpt-claude-gemini-which-model (35) |

**Total:** 199 markdown links across 14 articles (average 14/article, but heavily weighted to 6 articles)

---

## Key Finding

**Most articles describe related content in text but don't implement as clickable markdown links.**

Example from `prompt-building-blocks`:
```
❌ Current: "see [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved]"
✅ Should be: "see [How Prompt Engineering Evolved](/prompt-engineering/prompt-engineering-history)"
```

---

## Two-Path Strategy

### Path 1: Minimal (High-Priority Only)
**Effort:** 3–4 hours  
**Impact:** Get 7 zero-link articles to minimum compliance (5 links each)

**Articles to fix:**
1. what-is-prompt-engineering — Add 5 links
2. prompt-engineering-history — Add 5 links
3. prompt-building-blocks — Add 5 links
4. context-windows-explained — Add 5 links
5. how-llms-actually-work — Add 5 links
6. ai-limitations-what-llms-cant-do — Add 5 links
7. open-source-vs-proprietary-llms — Add 5 links

**Result:** All 14 articles would have at least 5 internal links

### Path 2: Comprehensive
**Effort:** 6–8 hours  
**Impact:** All 14 articles optimized (5–10 links, well-distributed)

**Would include:**
- Fix 7 zero-link articles (add 5+ each)
- Consolidate 6 over-linked articles (reduce to 10 or move to Related Reading)
- Ensure links are body-text anchors, not schema-based

---

## Recommended Links per Article

### Articles Needing Links

1. **what-is-prompt-engineering**
   - Link 1: `[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting)`
   - Link 2: `[RAG Explained](/prompt-engineering/rag-explained)`
   - Link 3: `[Few-Shot vs Zero-Shot](/prompt-engineering/zero-shot-vs-few-shot)`
   - Link 4: `[Prompt Frameworks](/prompt-engineering/which-framework-to-use)`
   - Link 5: `[Structured Output](/prompt-engineering/structured-output-json-mode)`

2. **prompt-engineering-history**
   - Link 1: `[What is Prompt Engineering](/prompt-engineering/what-is-prompt-engineering)`
   - Link 2: `[GPT-2 vs Modern Models](/prompt-engineering/gpt-claude-or-gemini)`
   - Link 3: `[Chain-of-Thought](/prompt-engineering/chain-of-thought-prompting)`
   - Link 4: `[RAG](/prompt-engineering/rag-explained)`
   - Link 5: `[Prompt Frameworks](/prompt-engineering/best-prompt-frameworks)`

3. **prompt-building-blocks**
   - Link 1: `[CRAFT Framework](/prompt-engineering/craft-framework)`
   - Link 2: `[CO-STAR Framework](/prompt-engineering/co-star-framework)`
   - Link 3: `[Zero-Shot vs Few-Shot](/prompt-engineering/zero-shot-vs-few-shot)`
   - Link 4: `[System Prompt vs User Prompt](/prompt-engineering/system-prompt-vs-user-prompt)`
   - Link 5: `[Structured Output](/prompt-engineering/structured-output-json-mode)`

4. **context-windows-explained**
   - Link 1: `[How LLMs Work](/prompt-engineering/how-llms-actually-work)`
   - Link 2: `[Token Costs & Limits](/prompt-engineering/tokens-costs-limits)`
   - Link 3: `[RAG for Context Extension](/prompt-engineering/rag-explained)`

5. **how-llms-actually-work**
   - Link 1: `[What is Prompt Engineering](/prompt-engineering/what-is-prompt-engineering)`
   - Link 2: `[Temperature Control](/prompt-engineering/temperature-and-top-p)`
   - Link 3: `[Tokens, Costs & Limits](/prompt-engineering/tokens-costs-limits)`
   - Link 4: `[Context Windows](/prompt-engineering/context-windows-explained)`
   - Link 5: `[Chain-of-Thought](/prompt-engineering/chain-of-thought-prompting)`

6. **ai-limitations-what-llms-cant-do**
   - Link 1: `[Hallucinations Prevention](/prompt-engineering/ai-hallucinations-how-to-stop)`
   - Link 2: `[RAG for Knowledge Update](/prompt-engineering/rag-explained)`
   - Link 3: `[Fine-Tuning](/prompt-engineering/prompt-engineering-vs-fine-tuning)`
   - Link 4: `[How LLMs Actually Work](/prompt-engineering/how-llms-actually-work)`
   - Link 5: `[Local LLMs](/local-llms/what-are-local-llms)`

7. **open-source-vs-proprietary-llms**
   - Link 1: `[Local LLMs](/local-llms/what-are-local-llms)`
   - Link 2: `[How to Install Ollama](/local-llms/how-to-install-ollama)`
   - Link 3: `[GPT vs Claude vs Gemini](/prompt-engineering/gpt-claude-or-gemini)`
   - Link 4: `[Model Comparison](/prompt-engineering/gpt-claude-gemini-which-model)`
   - Link 5: `[Cost Optimization](/prompt-engineering/tokens-costs-limits)`

---

## Implementation Approach

### Step 1: Add Markdown Links to Zero-Link Articles
For each of the 7 articles, find relevant content sections and inject markdown links using proper format:
```typescript
'content': [
  '**Important context:** For detailed explanation, see [Related Article Title](/prompt-engineering/slug).',
  'Additional text mentioning [Another Article](/path)...',
]
```

### Step 2: Test Build
```bash
npm run build
```
Verify no errors and schema validation passes.

### Step 3: Commit Changes
```bash
git commit -m "feat: Add internal markdown links to 7 prompt engineering articles

Add proper markdown internal linking [text](/path) to articles currently
missing clickable references to related content.

Articles updated:
- what-is-prompt-engineering: +5 links
- prompt-engineering-history: +5 links
- prompt-building-blocks: +5 links
- context-windows-explained: +5 links
- how-llms-actually-work: +5 links
- ai-limitations-what-llms-cant-do: +5 links
- open-source-vs-proprietary-llms: +5 links

Result: All 14 articles now have at minimum 5 internal links for SEO
authority distribution and user navigation.

Build verification: PASSED"
```

---

## Timeline

- **Phase 5a (Minimal):** 3–4 hours
  - Add links to 7 zero-link articles
  - Test and commit
  - All articles meet 5-link minimum

- **Phase 5b (Consolidation):** 2–3 hours additional
  - Review 6 over-linked articles
  - Move excess links to Related Reading section
  - Ensure proper 5–10 distribution

- **Phase 5c (Automated Validation):** 1 hour
  - Create Python script for future link validation
  - Test against all 14 articles

---

## Success Criteria

- [ ] All 14 articles have 5+ proper markdown links
- [ ] No article has more than 10 body-text links (excess in Related Reading)
- [ ] All links use proper markdown format: `[text](/path)`
- [ ] All links point to valid article slugs
- [ ] Build passes with 0 errors
- [ ] Links are semantically relevant (not forced)

---

## Recommendation

**Proceed with Path 1 (Minimal)** to get all articles to compliance (5 links minimum).
This ensures all articles contribute to site-wide SEO authority distribution.

**Time commitment:** 3–4 hours for implementation + testing + commit

---

**Status:** Ready to implement Phase 5a (Add links to zero-link articles)
**Next step:** Decide Path 1 vs Path 2, then proceed with implementation

**Date:** 2026-04-05  
**Auditor:** Claude Code
