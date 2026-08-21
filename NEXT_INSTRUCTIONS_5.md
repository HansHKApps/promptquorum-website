# Next instructions — read NEXT_INSTRUCTIONS_4.md first, then this

## 0. You are holding for data that no longer exists

Your last report said you're "waiting on Speed Insights/Clarity export." Stop
waiting. **Wave 3 is cancelled.**

`NEXT_INSTRUCTIONS_4.md` is in the repo root and you haven't read it. Read it now
before anything else. Summary of what changed:

- CrUX field data via PageSpeed Insights (28-day, "many samples", origin level):
  **mobile LCP 1.6s / INP 73ms / CLS 0; desktop LCP 1.3s / INP 37ms / CLS 0.
  Core Web Vitals assessment: Passed.**
- The "INP 256ms / LCP 2.46–2.57s" premise came from Microsoft Clarity *means*,
  not p75. Clarity's own overview reported 28.67s LCP — an outlier artifact.
- Do not touch the analytics stack. Do not remove Clarity. Do not restructure
  client components for performance. Nothing to fix.

---

## 1. Branch accounting — report this before doing anything else

I've lost track of what's where. Produce an exact inventory:

```bash
git branch -vv
git log --oneline origin/main..HEAD
```

For **each** unmerged branch, report: name, head SHA, commit count, files
touched, and whether it's ready to merge or still has open work.

Specifically account for:

- `deploy-robots-fix`
- `fix/local-llms-schema-parity`
- `fix/image-schema-integrity`
- `feature/preferred-source-link`
- **the 5 Wave 1 commits** (dead files, `llms.txt`, `sameAs` strip,
  `validate-sameas-links.mjs`, `Language`/`Lang` consolidation) — I don't know
  which branch these landed on. Find them.

If any branch has drifted from `origin/main` far enough to conflict, say so.

---

## 2. Prepare for merge — do not push

Hans pushes; your classifier won't. Your job is to make each merge a one-command
operation for him.

For each ready branch:

1. Rebase or merge `origin/main` in, resolve conflicts, confirm the full
   validator suite and `npm run build` still pass afterwards.
2. Produce the exact command Hans should run, one per branch, in the order they
   should land. Recommended order:
   1. `deploy-robots-fix` — one line, unblocks crawler JS/CSS fetching
   2. `fix/local-llms-schema-parity` — highest value, fixes the one defect
      hydration cannot repair
   3. `fix/image-schema-integrity` + Wave 1 commits
   4. `feature/preferred-source-link` — only after Hans confirms Google
      recognises the domain
3. State any ordering dependency between them explicitly.

Give him a single copy-pasteable block of push commands at the end.

---

## 3. Post-deploy verification — write it now, run it after he pushes

Prepare a script or command list that verifies each fix landed in production.
At minimum:

```bash
# robots.txt
curl -s https://www.promptquorum.com/robots.txt | grep -E '_next/static|/download'   # expect no Disallow for either

# local-llms article schema, post-deploy (raw HTML)
curl -s https://www.promptquorum.com/de/local-llms/troubleshooting-local-llm-setup | grep -o 'TechArticle\|FAQPage\|HowTo' | sort -u
curl -s https://www.promptquorum.com/ko/local-llms/best-beginner-local-llm-models  | grep -o 'TechArticle\|FAQPage\|HowTo' | sort -u
```

Baseline, measured live against production today (post-hydration, so this is the
best case, not raw HTML): both URLs return only `Organization`, `WebSite`,
`SoftwareApplication`, `BreadcrumbList`. Anything more than that after deploy is
the fix working.

Also spot-check 5 of the migrated image URLs across different locales and
confirm 200.

---

## 4. Then stop

After the branch inventory and merge prep, do not start new work. Remaining
items are all either gated on Hans or deliberately deferred:

- `[locale]` refactor — Phase 1 plan gated on Hans's approval. Now correctly
  scoped as an **AI-crawler** fix, not a Google fix: live probe confirms
  `lang="de"`, footer present, and complete hreflang after hydration, so Google
  (which renders JS) already sees all three correctly.
- `BlogPostClient.tsx` hardcoded English CTA — needs its own scoping pass.
- Korean webfont decision — Hans's call, unchanged.

---

## Report back

1. Full branch inventory per section 1, including where the Wave 1 commits live.
2. The ordered push command block for Hans.
3. Confirmation the post-deploy verification commands are written and ready.
4. Confirmation you've read `NEXT_INSTRUCTIONS_4.md`.
