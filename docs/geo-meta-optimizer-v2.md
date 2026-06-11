# /geo-meta-optimizer — v2 — Interactive & Batch Meta Tag Optimization

Audit and optimize SEO meta tags (`seoTitle`, `metaDescription`) and schema markup across
**all 8 languages** in one session — single-article (interactive) or whole-site (batch).

**Languages — 6 ACTIVE on disk:** `en` `de` `fr` `ja` `zh` `es`
**2 RESERVED (type allows, 0 files yet):** `pt` `ar` — the `Language` type permits these but no article block exists. The optimizer is READY for them; it does NOT invent content. Only optimize `pt`/`ar` AFTER their blocks are created by the content/translation process. Until then, treat missing `pt`/`ar` as 'not yet authored', NOT as a gap to fix here.

> ⚠️ **VERIFY-ONCE block (repo structure):** This spec assumes the CURRENT repo layout:
> inline-multilingual single files (all languages in one file) under
> `src/lib/<cluster>/articles/` across **4 clusters**:
> `local-llms`, `prompt-engineering`, `power-local-llm`, `prompt-bites`
> (plus `blog` if present). If your paths differ, fix ONLY the "Source Map" section below —
> everything else is path-independent. Confirm this once before first run.

---

## Usage

```
/geo-meta-optimizer <url>                  # one article, all 8 languages
/geo-meta-optimizer <url>?lang=de          # one article, context = de (still audits all 8)
/geo-meta-optimizer --audit-all            # BATCH: scan every article, report violations, fix none
/geo-meta-optimizer --audit-all --cluster=prompt-bites   # batch, one cluster
/geo-meta-optimizer --fix-all --cluster=local-llms       # BATCH fix one cluster (gated, confirm per cluster)
/geo-meta-optimizer --lang=ar <url>        # single language only
```

- **No flag** → single article, all 8 languages.
- **`--audit-all`** → READ-ONLY whole-site scan. Reports every violation as a table. Fixes nothing.
- **`--fix-all --cluster=X`** → batch fix ONE cluster at a time (never all clusters in one run),
  with the hard length-gate applied and a confirm-before-commit step.

---

## Source Map  ← CONFIRMED from repo (do not target content.ts — it is a barrel)

```
Articles live ONE FILE PER SLUG (inline-multilingual) under <cluster>/articles/:
  local-llms         → src/lib/local-llms/articles/*.ts          (113 files, indent 4)
  prompt-engineering → src/lib/prompt-engineering/articles/*.ts  (78 files,  indent 4)
  power-local-llm    → src/lib/power-local-llm/articles/*.ts      (62 files,  indent 2)
  prompt-bites       → src/lib/prompt-bites/articles/*.ts         (66 files,  indent 2)  [not in CLAUDE.md — include it]
  blog               → src/lib/blog/blogContent.ts                (single monolith, keyed by postId → language sub-objects)

NEVER target content.ts — it is a 3–4 line re-export barrel:
  export { llmContent } from './articles-barrel';  // (and ./types)
  prompt-bites has NO content.ts at all.

Article object shape (split-file clusters):
  export const article: Partial<Record<Language, LLMArticle>> = {
    en: { ... }, de: { ... }, fr: {...}, ja: {...}, zh: {...}, es: {...}
  }

INDENT VARIES BY CLUSTER — detect per file, do NOT hardcode:
  local-llms, prompt-engineering = 4-space language-block indent
  power-local-llm, prompt-bites   = 2-space language-block indent
Slice each language block by its detected indent. NEVER regex the first "}" (breaks inline-multilingual files).

Language type allows: 'en'|'de'|'fr'|'ja'|'zh'|'es'|'pt'|'ar'
  ACTIVE (populated): en, de, fr, ja, zh, es
  RESERVED (0 files): pt, ar  → ready but unpopulated; do not fabricate.

GATE-FIELD ASYMMETRY: the en: block carries fields the translated blocks usually OMIT —
  freshness_tier, leadAnswerBlock, dateModified, audience, next_refresh_due, specific_year.
  Read freshness_tier (Step 0) from the EN block. Do NOT expect it in de/fr/ja/zh/es/pt/ar blocks.
  Translated blocks typically start at `theme` and skip those gate fields — that is normal, not a defect.

generateMetadata routes (og/twitter auto-derived):
  src/app/<cluster>/[slug]/page.tsx
```

---

## Per-Language Length Targets  ← (calibrated; this fixes the German-overflow problem)

| Lang | Script | seoTitle target | seoTitle HARD max | metaDescription target | metaDesc HARD max | metaDesc MIN | note |
|------|--------|-----------------|-------------------|------------------------|-------------------|--------------|
| en   | Latin  | 50–58 | 60 | 145–155 | 160 | 70 |
| de   | Latin  | **48–56** (compound headroom) | 60 | **135–150** | 160 | 70 |
| fr   | Latin  | 50–58 | 60 | 140–155 | 160 | 70 |
| es   | Latin  | 50–58 | 60 | 140–155 | 160 | 70 |
| pt   | Latin  | 50–58 | 60 | 140–155 | 160 | 70 | *(reserved — no files yet)* |
| ja   | CJK    | 30–40 CJK | 40 CJK | 80–120 CJK | 155 raw | 80 CJK |
| zh   | CJK    | 28–38 CJK | 40 CJK | 70–110 CJK | 155 raw | 70 CJK |
| ko   | CJK/Hangul | 28–38 CJK | 40 CJK | 70–110 CJK | 155 raw | 70 CJK | *(reserved — Language type not yet extended)* |
| ar   | RTL/Arabic | 40–52 | 55 | 120–145 | 150 | 70 | *(reserved — no files yet)* |

**Why per-language:** German compounds and Arabic glyphs consume SERP pixel-width faster than
English; CJK glyphs are wider so fewer characters fill the snippet. Uniform char limits (the v1
flaw) let German/Arabic overflow and JA/ZH run empty. These targets reflect display width, not raw count.

---

## HARD GATE (automated — the v1 fix for accumulated overflow)

After generating OR before writing ANY value, enforce mechanically — do NOT rely on a human checklist:

```
REJECT and regenerate if:
  - seoTitle  > HARD max for that language
  - metaDescription > HARD max OR < MIN for that language
  - value is identical to the EN value in the same file (untranslated leftover)
  - value duplicates another file's seoTitle/metaDescription (cross-file dup)
  - value contains markup, HTML, or emoji
Loop until the value passes. Never write or propose a value that fails the gate.
```

---

## Workflow

### Step 0 — Freshness Tier Check (unchanged, still required)
Read `freshness_tier` from the EN block. Enforce in proposals:
- `evergreen` → reject any year reference ("2026", "2025") in title/description.
- `semi_annual` → require year in seoTitle (🔴 if missing). Show `next_refresh_due`.
- `annual` → require year in seoTitle + must match `specific_year`.
Confirm tier before proceeding.

### Step 1 — Parse & Read
Parse url/flags → cluster, slug, lang scope, mode (single | audit-all | fix-all).
Map via Source Map. Read the article object(s), slicing each language block by detected indent.

### Step 2 — Audit Table (per article, all 8 languages)
```
| Lang | seoTitle | Chars | vs target | MetaDesc | Chars | vs target | Angle | Schema url ?lang | inLanguage | Schemas | EN-copy? |
```
Status keys: ✅ in target / ⚠️ borderline / 🔴 over HARD max, < MIN, missing, or EN-copy.
**Angle** (uniqueness): ✅ Question / Comparison / Outcome / Use-case · 🔴 Generic.

### Step 3 — Generate Proposals (per targeted language)
Rules:
- Hit the per-language target; pass the HARD GATE before showing.
- seoTitle: benefit/outcome-led, unique angle, "2026" only where tier allows. Raw value only —
  do NOT include " | PromptQuorum" (template appends it when raw ≤ 45 chars).
- metaDescription: open with a specific fact/number, native-sounding for the locale.
- Preserve verbatim: `ollama`, `llama.cpp`, `Q4_K_M`, `VRAM`, model names, CLI commands, benchmark numbers.
- Keyword at the FRONT; never sacrifice the head keyword to hit length.
- Plain text only (no markup/HTML/emoji).

### Step 3.5 — Schema Audit (per language)
- `schema.url` ends with `?lang=XX` (incl. `?lang=pt`, `?lang=ar` once those exist).
- `schema.inLanguage` = ISO code (en, de, fr, ja, zh, es; **pt**, **ar** once authored).
- `dateModified` present.
- `itemListSchema` if page has a ranked table; `numberOfItems` = exact row count.
- `howToSchema` if title/H1 starts with "How to" (≥4 steps, `totalTime` ISO 8601).

### Step 4 — Confirmation
`Approve? (yes / no / edit [lang] [field] "text")`. In single-lang or per-cluster batch, scope
the confirmation accordingly. In `--fix-all`, confirm ONE cluster at a time.

### Step 5 — Implement (field-scoped)
Edit ONLY `seoTitle`, `metaDescription`, and schema `url`/`inLanguage`/`dateModified` inside each
language block. Do NOT touch `title`, `theme`, `sections`, `educationalLevel`, `headline`, og/twitter
(auto-derived), or any other language than targeted. Use enough surrounding context to target the
exact block. og/twitter auto-derive from seoTitle/metaDescription — no manual edit.

### Step 6 — Verify
`npm run build 2>&1 | tail -20` → 0 TS errors. Then run Step 6.5.

### Step 6.5 — Automated Verification (not a human checklist — assert and fail loudly)
For every targeted language, assert: seoTitle within HARD max; metaDescription within [MIN, HARD max];
schema.url has `?lang=XX`; inLanguage correct; no EN-copy; no cross-file dup. If any fails →
fix immediately and re-assert. Only report completion when all assertions pass.

### Step 7 — Batch reporting (`--audit-all`)
Output per cluster: file | lang | field | issue | char count. Grand totals by issue type
(over-max / under-min / missing / EN-copy / dup / schema-gap). READ-ONLY: fix nothing.
This is the coverage-gap detector — run it periodically so leftovers can't silently accumulate.

---

## Language-Specific Localization Notes
- **EN** — American spelling (optimize, recognize).
- **DE** — native German; DSGVO/Datenschutz where relevant; mind compound length (shorter forms: DSGVO not Datenschutz-Grundverordnung).
- **FR** — native French, accents preserved; RGPD where relevant.
- **ES** — native Spanish (neutral/LatAm-safe); ES text runs ~20–35% longer than EN — budget for it.
- **PT** (reserved, code `pt`) — when authored, target **Brazilian** Portuguese (não pt-PT): BR vocabulary/spelling (e.g. "arquivo" not "ficheiro"), LGPD where relevant (Brazil's data-privacy law, the BR analogue to GDPR).
- **JA** — native Japanese; katakana for foreign terms (オラマ for Ollama); METI guidance if relevant; CJK width rules above.
- **ZH** — Simplified Chinese (本地LLM, 量化); CJK width rules above.
- **KO** (reserved, code `ko`) — when authored, target South Korean Korean (한국어); Hangul glyphs are information-dense (CJK-width class), use KO CJK length targets; keep Latin technical terms (ollama, VRAM, Q4_K_M) verbatim; Korean data-protection framing (PIPA — Personal Information Protection Act) where relevant. Language type extension required before files can be authored.
- **AR** — Modern Standard Arabic; **RTL** — keep Latin technical terms (ollama, VRAM, Q4_K_M) LTR within RTL text; Arabic glyphs are visually wide, use the AR length targets (shorter than Latin); Gulf data-sovereignty framing where relevant.

---

## Constraints (unchanged core + v2 additions)
- 🔴 Optimize ALL targeted languages every run; never skip a language or field; never skip stub
  languages (metadata must be complete even if `sections: {}`).
- Field-scoped: ONLY seoTitle, metaDescription, schema url/inLanguage/dateModified. Never `title`,
  `theme`, `sections`, `educationalLevel`, other languages, og/twitter.
- HARD GATE is mandatory and automated — no value that fails it may be written or proposed.
- Preserve technical terms and numeric benchmarks verbatim. Plain text only.
- Avoid generic title patterns ("Complete Guide", "Everything You Need") — enforce unique angle.
- Batch `--fix-all` runs ONE cluster per invocation; commit per cluster; confirm git log after push.

---

## Examples
1. `/geo-meta-optimizer <url>` → audits + proposes all 8, gate-checked, confirm, implement, verify.
2. `/geo-meta-optimizer --audit-all` → whole-site read-only violation report (coverage-gap sweep).
3. `/geo-meta-optimizer --fix-all --cluster=local-llms` → gated batch fix of one cluster, per-cluster commit.
4. `/geo-meta-optimizer --lang=ar <url>` → Arabic only (RTL rules, AR length targets).

## Related
- GEO Writing Guidelines: `docs/GEO_WRITING_GUIDELINES.md`
- Content files: `src/lib/<cluster>/articles/*.ts` (verify in Source Map)
- generateMetadata: `src/app/<cluster>/[slug]/page.tsx` (og/twitter derive from seoTitle/metaDescription)
