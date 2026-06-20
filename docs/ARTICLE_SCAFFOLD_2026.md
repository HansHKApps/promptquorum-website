# Article Scaffold Reference (2026)

Canonical reference: `src/lib/local-llms/articles/galaxy-s26-local-ai-on-device-2026.ts`

New articles in all clusters must include every field in this order. Fields marked **[required]** will cause build/audit failures if missing.

---

## Top-Level Fields (per locale block)

```typescript
en: {
  // ── Freshness ──────────────────────────────────────────────────────────
  freshness_tier: 'monthly' | 'semi_annual' | 'evergreen' | 'annual', // [required] — build fails if missing
  next_refresh_due: 'YYYY-MM-DD',       // required for monthly + semi_annual
  last_full_refresh: 'YYYY-MM-DD',      // optional but recommended
  current_hardware_mentioned: [...],    // optional — hardware/model list for refresh tracking

  // ── Taxonomy ───────────────────────────────────────────────────────────
  theme: 'Hardware & Performance',      // must match other locale blocks exactly
  title: '...',                         // semi_annual must include year; evergreen must not
  seoTitle: '...',                      // ≤60 chars; drop "| PromptQuorum" if title >45 chars

  // ── Content Fields ─────────────────────────────────────────────────────
  intro: '...',
  metaDescription: '...',              // 140–160 chars
  publishDate: 'YYYY-MM-DD',
  dateModified: 'YYYY-MM-DD',
  readTime: '10 min read',
  educationalLevel: 'Beginner' | 'Intermediate' | 'Advanced',
  audience: '...',                     // plain-text, free-form
  primaryTerm: '...',
  targetKeywords: [...],

  // ── AEO / GEO Fields ──────────────────────────────────────────────────
  leadAnswerBlock: '**Bold answer...**', // [required] — lead paragraph, answer-first
  quickAnswerTop: {
    en: { question, answer, bullets: [...], updatedDate },
    de: { ... },
    // one sub-block per locale present in the article
  },
  snippetBlocks: [
    { type: 'one-sentence', content: '...' },
    { type: 'plain-terms',  content: '...' },
  ],

  // ── Schema ─────────────────────────────────────────────────────────────
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',            // NOT 'NewsArticle' or 'Article'
    'headline': '...',
    'description': '...',
    'datePublished': 'YYYY-MM-DD',
    'dateModified': 'YYYY-MM-DD',
    'author': {
      '@type': 'Person',
      'name': 'Hans Kuepper',
      'sameAs': 'https://www.linkedin.com/in/hanskuepper/', // exactly this URL
    },
    'publisher': { ... },
    'url': 'https://promptquorum.com/{cluster}/{slug}',  // NO /pt/pt/ doubled prefix
    'speakable': { '@type': 'SpeakableSpecification', ... },
    'educationalLevel': 'Intermediate',
    'proficiencyLevel': 'Intermediate', // [required] — must match educationalLevel
    'audience': { '@type': 'Audience', 'audienceType': '...' },
    'about': [...],
    'mainEntityOfPage': { ... },
  },

  // ── Content Sections ───────────────────────────────────────────────────
  sections: {
    tldr: { id: 'tldr', isTldr: true, ... },
    faqSection: {
      id: 'faq',                       // [required] — needed for FAQPage anchor
      title: 'Frequently Asked Questions', // NOT 'FAQ' (banned)
      faqs: [
        { q: '...', a: '...' },        // minimum 8 Q&A pairs per locale
        ...
      ],
    },
    // other sections...
  },
}
```

---

## Common Defects Fixed in June 2026 Audit (do not repeat)

| Defect | Wrong | Correct |
|--------|-------|---------|
| C2: `author.sameAs` URL | `'promptquorum.com/...'` | `'https://www.linkedin.com/in/hanskuepper/'` |
| C3: missing `proficiencyLevel` | absent | add `'proficiencyLevel': 'VALUE'` after `'educationalLevel'` inside schema |
| C12: `faqSection.title` | `'FAQ'` | locale-specific string (see table below) |
| C13: `faqSection` missing `id` | `faqSection: { title: ...` | `faqSection: { id: 'faq', title: ...` |
| C21: doubled locale prefix | `/pt/pt/` in schema `url:` | `/pt/` |

## Localized FAQ Titles

| Locale | Title |
|--------|-------|
| `en` | Frequently Asked Questions |
| `de` | Häufig gestellte Fragen |
| `fr` | Questions fréquemment posées |
| `ja` | よくある質問 |
| `zh` | 常见问题 |
| `es` | Preguntas frecuentes |
| `pt` | Perguntas frequentes |
| `ar` | الأسئلة الشائعة |
| `ko` | 자주 묻는 질문 |

---

## Validation Commands

```bash
npm run validate-translations       # checks theme/slug/type consistency
npm run validate-seo               # SEO field completeness
node scripts/geo-audit-scan.mjs    # full 22-defect GEO audit, outputs geo-audit-report.csv
npm run build                      # runs validate-freshness-tier + full build + noindex test
```
