# Sections moved out of CLAUDE.md (2026-11-20)

Verbatim text trimmed from CLAUDE.md to keep it under 40k characters. Rules still apply; CLAUDE.md keeps a summary + pointer.

## File Structure

```
src/
  app/               # Next.js App Router pages
    api/
      og/[slug]/     # Dynamic og:image generation route for all articles (all 5 languages)
    page.tsx         # Home page
    blog/            # Blog listing + individual posts
    compare/         # Model comparison page
    features/        # Features page
    how-it-works/    # How it works page
    faq/             # FAQ page
    about/           # About page
    not-found.tsx    # Custom 404 page
    layout.tsx       # Root layout with shared header/footer
  components/        # Reusable UI components
    HeaderClient.tsx # Navigation with language switcher
    Footer.tsx       # Site footer
    LanguageSwitcherWrapper.tsx
  hooks/
    useLang.ts       # Reads ?lang= query param for language routing
  lib/
    blog/
      blogContent.ts # All blog post content (5000+ lines)
  locales/           # Translation strings per language
public/
  logo.svg
  llms.txt           # GEO: machine-readable site description for AI crawlers
docs/
  GEO_WRITING_GUIDELINES.md  # Full GEO content rules (read before writing anything)
```


## Presentation Skill (/gamma) — gammaDescription Requirement

When implementing a new `/gamma` presentation for a prompt-engineering article:

**MANDATORY:** Add `gammaDescription` for ALL 5 languages (en, de, fr, ja, zh) immediately after `gammaEmbedUrl` in `src/lib/prompt-engineering/content.ts`.

**Why:** Without `gammaDescription`, presentations are invisible to Google, Perplexity, ChatGPT Browse, and other AI search engines. The `gammaDescription` is the plain-text summary that lives above the presentation iframe and is 100% indexable for SEO/GEO purposes.

**What to include in gammaDescription (2-3 sentences):**
1. **Opening:** "The slide deck below covers:" or language equivalent
2. **Specific topics:** Name exact slide content (e.g., "7 hallucination types with detection patterns", "temperature 0.0–2.0 range", "nucleus sampling")
3. **CTA:** "Download the PDF as a [Topic] reference card."

**Example (EN):**
> "The slide deck below covers: why LLMs hallucinate (probabilistic token prediction, not comprehension), 7 hallucination types with detection patterns, prompt techniques that reduce hallucination, and a comparison of model behavior. Download the PDF as a hallucination reduction reference card."

**Enforcement:**
- Use the full `/gamma` workflow from `docs/GAMMA_SKILL_UPDATES.md` (Step 0.5 is mandatory)
- Pre-write `gammaDescription` for all 5 languages before running Step 4
- Verify build passes with 0 TypeScript errors
- All 5 languages must be present before committing

**Reference:** `docs/GAMMA_SKILL_UPDATES.md` contains the updated `/gamma` skill specification with full Step 0.5 and GEO indexability requirements.


## Comparison Tables — Column & Cell Content Rules

**MANDATORY for all `columns` and `rows` in article comparison tables** (vsAlternatives, tradeOffs, platforms, etc.):

1. **Column headers** — MUST be ≤25 characters. If longer, abbreviate or rephrase:
   - ❌ "Simultaneous dispatch to all models at once"  
   - ✅ "Simultaneous dispatch"
   - ❌ "The number of models available in the curated library"
   - ✅ "Model flexibility"

2. **Cell content** — MUST be ≤60 characters per cell. Break into multiple short lines using `/` separator:
   - ❌ "Supports advanced quantization formats like OmniQuant and GPTQ with full control over model parameters"  
   - ✅ "OmniQuant & GPTQ / Full control"
   - ❌ "Available on iPhone, iPad, Mac, Android, and Windows with consistent experience across all five platforms"
   - ✅ "iPhone/iPad/Mac/Android/Windows (5 platforms)"

3. **Technical terms** — Keep abbreviated and consistent:
   - "API key control" → "API keys" (shorter, equally clear)
   - "Local LLM" → "Local LLM" (standard abbreviation)
   - "GPU/CPU" (not "Graphics processor / CPU")

4. **Numbers & units** — Keep compact:
   - ✅ "140+ models" (not "over one hundred and forty models")
   - ✅ "~$9.90/month" (not "approximately nine dollars and ninety cents per month")
   - ✅ "2–5 GB" (not "between two and five gigabytes")

5. **Avoid explanations in cells** — Put nuance in prose before or after the table:
   - ❌ Table cell: "Requires you to bring your own API keys from OpenAI, Anthropic, Google, and Mistral, which means your data stays private but you manage billing directly"
   - ✅ Table cell: "API keys" + explain trade-offs in surrounding text

6. **If the content genuinely needs full sentences, do not force it into a `<table>` at all** — set `itemHeadings: true` on that section instead. That mode (already supported by `SmartHomePostClient.tsx` and `PowerLocalLLMPostClient.tsx`) renders each row as its own card: first column becomes an `<h3>`, remaining columns render as a wrapping definition list. It never needs horizontal scroll, so paragraph-length "benefit vs. limitation," "per-platform notes," or "app vs. app" comparisons belong here, not in a table you're trying to compress under 60 characters. See `loci-ai-review-offline-local-ai.ts` (`tradeOffs`, `platforms`, `vsAlternatives`) for the reference pattern — those three sections originally shipped as `<table>`s with cells up to ~400 characters, which no viewport width or CSS fix could make readable; switching them to `itemHeadings: true` was the actual fix, not a wider table.

7. **Never give a table both an identifier column and a separate `Link`/`Lien`/`Enlace`/`リンク`/`链接`/`الرابط`/`링크` column** (the "App vs. Alternatives" pattern used across `power-local-llm` reviews). That's a wasted column that pushes everything else — including the actual differentiator, often the last column — further right, making it more likely to sit past the fold on the horizontal scroll. Fold the URL into the identifier cell as a markdown link instead:
   - ❌ `columns: ['App', 'Link', 'Platforms', ...]`, row `{ 'App': 'Hanoki', 'Link': '[hanoki.app](https://hanoki.app)', ... }`
   - ✅ `columns: ['App', 'Platforms', ...]`, row `{ 'App': '[Hanoki](https://hanoki.app)', ... }`
   - This is specifically about the redundant identifier+Link pair, not a blanket column-count cap — plenty of legitimate data tables (GPU pricing grids, battery spec sheets) genuinely need 6-9 columns and are fine as-is. Still, when a table's most important column is getting pushed past the horizontal-scroll fold, that's a signal to combine two closely related columns (e.g. "Local inference" + "Cloud models" → "Model access") or switch to `itemHeadings: true` per rule 6 — not to add more columns.
   - Fixed 2026-09-04: this exact `App`+`Link` pattern existed in 15 article files (each with 9 language blocks) — `hanoki-review-2026.ts` was corrected as the first fix; the rest are backlog, not yet swept.

**Why:** On mobile (375px width), tables scroll horizontally. Long headers and cell content break line-wrapping, create unusable scroll regions, and cut off text (reported Aug 2026, recurred Aug 2026 on the Loci AI review with full-sentence cells — see rule 6 above). Compact cells scale predictably across all viewports and 9 languages. Rule 7 addresses a distinct failure mode from the same root cause: a table can pass the <=25/<=60 per-cell budget and *still* be unreadable on a normal desktop viewport if a wasted column pushes the important content off-screen — the `hanoki-review-2026.ts` "vs. Alternatives" table was flagged this way (screenshot showed the last column, `Branching/forking` — the whole point of the comparison — cut off at the browser edge) despite every header and cell being within the character limits.

**Testing:** Before committing, run `npm run dev` and test at 375px width in Chrome DevTools. Scroll the table horizontally — all headers and cell content should remain visible and readable without wrapping beyond cell bounds. Also check the full desktop-width render (no DevTools throttling) — rule 7's column-count failure only shows up there, not on the mobile pass.

**Enforcement (added Aug 2026 after this rule was violated silently):**
- `npm run validate-table-cells` audits every `columns`/`rows` table in the repo against the real <=25/<=60 limits above and reports violations — informational only, does not block (there is a large pre-existing backlog this predates).
- `.git/hooks/pre-commit` runs `node scripts/validate-table-cell-length.mjs --staged` on every commit and **blocks** it if a staged article file has a table header >40 chars or cell >110 chars (i.e. an unambiguous full-sentence violation, not a few characters over target) and that section doesn't have `itemHeadings: true`. Fix by shortening the content or setting `itemHeadings: true`, per rule 6.
- This hook is local to `.git/hooks/` (not tracked by git) — if you're on a fresh clone and it isn't firing, check `.git/hooks/pre-commit` exists and is executable.
- `npm run validate-table-cells` (default mode) and `--staged` (pre-commit) also flag rule 7's specific App+Link redundancy — informational only, same as the length checks, so it surfaces without blocking a commit. It intentionally does not flag column count in general (see rule 7's note on legitimate wide data tables).


### Pre-commit Enforcement (Evergreen Article Validation)

**Before every commit**, a git pre-commit hook runs `scripts/validate-evergreen-articles.mjs` which automatically validates all articles tagged as `freshness_tier: 'evergreen'` and rejects commits that contain:

- **Concrete LLM model names** (GPT-4o, Claude, Gemini, Llama, Mistral, Qwen, DeepSeek, Command, PaLM, etc.)
- **Version numbers** (1.0, 2.0, 3.5, etc.)
- **Years** (2024, 2025, 2026, 2027, etc.)
- **Time-sensitive phrases** (latest, newest, current, recently, just came, just released, etc.)

**If validation fails, the commit is blocked with an error like:**
```
❌ FRESHNESS TIER VALIDATION FAILED

Evergreen articles must not contain:
  • Concrete LLM model names (GPT-4o, Claude, Gemini, etc.)
  • Version numbers (2.0, 3.5, etc.)
  • Years (2024, 2025, 2026, etc.)
  • Time-sensitive phrases (latest, current, newest, etc.)

pattern violations (N):
  [file]:[line]
    Found: "[match]"
    Line: [content preview]
```

**To fix and commit:**

1. **Change the tier** (if article needs model/version refs): Change `freshness_tier` to `'semi_annual'` (set `next_refresh_due`) or `'annual'` (set `specific_year`)
2. **Rewrite for timelessness** (recommended): Remove concrete refs and use generic language:
   - ❌ "GPT-4o performs best for code generation"
   - ✅ "Large proprietary models excel at code generation"
   - ❌ "Latest LLMs have improved reasoning"
   - ✅ "Modern LLMs have improved reasoning"
   - ❌ "As of 2026, Llama 3.2 leads open source"
   - ✅ "Leading open-source models provide cost-effective performance"

3. **Use `git commit --no-verify` only as a last resort** (not recommended — defeats the purpose)

**Exceptions:** The validation skips:
- Code blocks and code examples (references in schema, imports, codeBlock fields are allowed)
- Comments within code
- Any field marked as `codeBlock` or `codeLanguage`

The goal: Keep evergreen content truly timeless, preventing the pattern where framework articles reference specific models that become stale and require re-updating every quarter.

