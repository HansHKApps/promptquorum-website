# REFRESH_BRIEF_TEMPLATE.md — Ready-to-Paste Agent Briefs

Two templates below. Copy the appropriate one, fill in the blanks marked `<like this>`, and send it to the agent. Do not omit any section — an agent that does not receive the gates will not apply them.

---

## TEMPLATE A — Writer Brief

---

### Your task

You are a writing agent for PromptQuorum. Refresh the pages listed below following the full page-updater protocol in `docs/PAGE_UPDATER.md`. You will commit after every page and report when done.

### Worktree and port

- **Directory:** `<full absolute path to your worktree, e.g. /Users/hanskuepper/pq-sessions/refresh-X>`
- **Port:** `<allocated port, e.g. 3442>`
- **Dev server (if needed):** `npx next dev --webpack --port <port>` — `npm run dev` is broken
- **Builds:** `scripts/with-build-lock.sh npm run build` — never bare `npm run build`
- **Never push.** `session.sh finish` is the owner's step.

### Pages to refresh

| Slug | File path | What to change |
|---|---|---|
| `<slug>` | `src/lib/<cluster>/articles/<slug>.ts` | `<brief description, e.g. "update year references, re-tier, add LGPD disclaimer">` |
| `<slug>` | … | … |

### Mandatory reading (read before touching any file)

1. `CLAUDE.md` — skim for the gates that apply to this run
2. `docs/PAGE_UPDATER.md` — the full protocol; pay special attention to Step 5.7 and §Batch and Delegated Refresh Runs
3. `docs/geo-translation.md` — **open and read it in this session** before writing any non-EN text
4. `docs/GEO_WRITING_GUIDELINES.md` — headings only, then the sections relevant to your page type

### Per-page steps (repeat for every page)

1. Read the entire file top to bottom. Note every specific reference (models, prices, numbers, dates).
2. Pull GSC data: `mcp__gsc__page_stats` for the EN URL `https://www.promptquorum.com/<cluster>/<slug>`, 28 days, top 20 queries. If <500 impressions, use 90 days.
3. Edit. Apply the full-depth refresh process (Steps 0–6 in PAGE_UPDATER.md). Include all 9 locale blocks.
4. Run validators before committing:
   ```bash
   npm run check:page-updater
   node scripts/validate-month-drift.mjs
   node scripts/validate-freshness-tier.mjs
   node scripts/validate-edit-history-phrases.mjs
   ```
5. Commit with explicit paths:
   ```bash
   git commit --only src/lib/<cluster>/articles/<slug>.ts \
     -m "feat(content): refresh <slug>"
   ```
   Add `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` at the bottom of every commit message. Never put `[force-deploy]` in a commit message.

### Risk-pattern checklist (from Step 5.7, 2026-11-20)

Check every locale block for these patterns before committing a page:

| Pattern | Fix |
|---|---|
| "certified" / "compliant" / "designed-to-meet" for third-party products | Attribute to vendor with source URL |
| Ownership, manufacturing, insolvency, or listing claims | Dated primary source or explicit hedge; apply the same hedge on sibling pages |
| Privacy absolutes ("nothing leaves your device", "fully offline") | Use mechanism wording ("prompts are sent to the model on your own machine") |
| Unsourced numbers and prices | Add date + source, or remove |
| Circular citations (a PromptQuorum page cited as the source) | Use the primary source the page cited |
| Month-snapshot dates in body prose ("as of November 2026", "checked November 2026") | Remove — `dateModified` + "Last updated" badge carries the signal |
| Superlatives without attribution ("first", "only", "best", "leader") | Attribute to source with URL, or remove |
| Quotes altered inside `"…"` | Use verbatim text; use [bracketed interpolations] only |
| SVG/image text nobody reviewed | Grep `alt` and SVG `<text>` / `<tspan>` elements |
| Personal email addresses | Use `hello@promptquorum.com` only |
| Legal or electrical topics without inline disclaimer in every locale | Add `{ type: 'note', text: '…not legal or electrical advice…' }` in all 9 locales |
| Comparison about a named third party | Attributed, dated, neutral; include one criterion where the other party is a better fit |
| Unverified product self-claims (account required, checksums, build reproducibility) | Verify against the project's repo or official site |

### Translation gate

Before writing ANY non-EN text — a whole section, a single FAQ entry, or a one-sentence update — open `docs/geo-translation.md` and apply its per-language table (register, decimals, currency, never-translate identifiers, RTL handling for `ar`). Your report MUST contain the line `geo-translation: APPLIED`. A report without it is incomplete.

### Freshness tier (re-decide per page)

Apply the 3-tier test honestly:

- **`evergreen`** — timeless concept, no year/model/hardware refs. Workflow and process pages qualify even if they mention tools as examples. Must not contain model names, years, or "latest/current" phrases.
- **`semi_annual`** — specific models, pricing, rankings, or benchmarks with year in title. Set `next_refresh_due` to 6 months out.
- **`annual`** — year-specific event or timeline. Set `specific_year`. Year in title only — never in the slug.

If a page has drifted from its declared tier (e.g. an `evergreen` article now names specific models), re-tier it in this run.

### Commit rules

- One commit per page — not one commit for the whole batch.
- Use `git commit --only <exact file paths>`.
- Include `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`.
- Never `[force-deploy]`. Never push. Never `git add .` or `git add -A`.

### Report format (one block per page)

```
## Refresh report: <slug>
- Risk gate: [PASS n/10 / REVIEW — HIGH items listed / BLOCK → fixed and re-run PASS]
- geo-translation: APPLIED — read docs/geo-translation.md this session
- GSC data: [window, impressions, clicks, top queries used]
- Freshness tier: [old tier] → [new tier]; next_refresh_due: <date>
- Sections updated: [list]
- Sections unchanged: [list with reason]
- Open questions: [anything you could not verify — be explicit]
- Commit: <hash>
```

---

## TEMPLATE B — Independent Reviewer Brief

---

### Your task

You are an independent reviewer. The pages listed below have been refreshed by a writing agent. Your job is to audit them for legal and reputational risk. You do **not** edit any source file. You return findings to the writer.

### Pages to review

| Slug | File path |
|---|---|
| `<slug>` | `src/lib/<cluster>/articles/<slug>.ts` |
| … | … |

### Mandatory reading

1. `docs/PAGE_UPDATER.md` Step 5.7 — the risk gate rule and the risk-pattern table
2. `docs/GEO_WRITING_GUIDELINES.md` Rule 35b — the owner rule on running (not imitating) the risk-checker

### Your steps (per file)

1. **Run the risk-checker skill** on each file:
   ```
   Skill tool: risk-checker
   Args: src/lib/<cluster>/articles/<slug>.ts
   ```
   The skill invokes its own procedure. Do not substitute a manual rubric. Do not write "PASS (manual)". If the skill cannot be invoked, say so — the run is INCOMPLETE.

2. **Grep-confirm every finding** before reporting it. Every finding you return to the writer must include the verbatim text from the file and the exact line/field where it appears. A finding you cannot locate with `grep -n` is not confirmed and must be noted as "unconfirmed — cannot locate".

3. **Claims you could not independently verify** — list them explicitly. The owner decides whether to hedge or remove; do not silently accept or silently drop them.

### Report format (one table per file)

```
## Review: <slug>
Risk gate: [PASS / REVIEW / BLOCK] — score from skill

| Severity | File | Field | Verbatim text (truncated) | Fix required |
|---|---|---|---|---|
| CRITICAL | … | … | "…" | … |
| HIGH | … | … | "…" | … |
| MEDIUM | … | … | "…" | … |
| LOW | … | … | "…" | … |

Claims not independently verified:
- <list>

Confirmed clear (no finding):
- <locale blocks or sections that were checked and had no findings>
```

Return this report to the writer. Do not commit anything.

---

*Template maintained in `docs/REFRESH_BRIEF_TEMPLATE.md`. Update the risk-pattern table whenever Step 5.7 in PAGE_UPDATER.md gains a new entry.*
