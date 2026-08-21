# Next instructions — verify the big diff, then open PRs

Good catch on the `a97113f50` ancestry contamination. That would have shipped a
gated feature.

Three problems with the push plan as written, fixed below.

---

## Step 1 — verify the 45,468 deletions BEFORE anything else

`fix/local-llms-schema-parity` shows **74 files changed, 1,367 insertions,
45,468 deletions**. That is almost certainly `content.original.ts` plus the Wave 1
dead files — but "almost certainly" is not the standard for a branch that
auto-deploys on merge.

```bash
git diff --stat origin/main fix/local-llms-schema-parity | sort -t'|' -k2 -rn | head -15
git diff --numstat origin/main fix/local-llms-schema-parity | sort -k2 -rn | head -15
```

Report the top deletions by file. **If the deletions are not concentrated in the
known dead files (`content.original.ts`, `index.css`, `App.css`, the three
`.backup` files), stop and tell me before going further.**

Also confirm no article content files show large net deletions — the schema
extraction should be roughly net-neutral on those, not subtractive.

---

## Step 2 — the checkout in your push plan will fail

`git branch -vv` shows `+ fix/local-llms-schema-parity` — the `+` means it is
checked out in the linked worktree at `/Users/hanskuepper/pq-worktree-local-llms-schema`.
`git checkout fix/local-llms-schema-parity` from the main checkout errors with
"already checked out at…".

You don't need the checkout. Pushing a ref works from any worktree. Drop the
`git fetch` / `git rebase` safety lines too — nothing is landing concurrently,
and they are what triggers the collision.

---

## Step 3 — open PRs, don't hand Hans direct pushes to main

`git push origin <branch>:main` bypasses the PR CI gate (PR #39) and skips the
Vercel preview deployment. Given how many premises turned out wrong this session,
the preview is worth more than the saved step — it lets the local-llms schema fix
be **verified before** production sees it, not after.

You cannot push to `main`, but pushing feature branches and opening PRs is fine.
Do that:

```bash
git push origin deploy-robots-fix
git push origin fix/local-llms-schema-parity
git push origin fix/image-schema-integrity
git push origin feature/preferred-source-link-clean

gh pr create --base main --head deploy-robots-fix \
  --title "fix: unblock /download and /_next/static in robots.txt"
gh pr create --base main --head fix/local-llms-schema-parity \
  --title "fix: emit full article schema on non-EN local-llms routes"
gh pr create --base main --head fix/image-schema-integrity \
  --title "fix: image schema integrity, validator, and Wave 1 cleanup"
gh pr create --base main --head feature/preferred-source-link-clean \
  --title "feat: add Google preferred source link to footer (9 locales)" --draft
```

Body for each: what it fixes, files touched, verification performed. For
`fix/image-schema-integrity`, state explicitly in the body that it must merge
**after** `fix/local-llms-schema-parity` and why.

Open the preferred-source PR as a **draft** — it stays gated on Hans's
signed-in check that Google recognises the domain.

Report the four PR numbers.

---

## Step 4 — run verification against the Vercel PREVIEW, not production

This is the point of using PRs. Once the `fix/local-llms-schema-parity` preview
deployment is up, run your `post-deploy-verify.sh` against the **preview URL**.

Baseline, measured live on production today (post-hydration, so best case):

```
/de/local-llms/troubleshooting-local-llm-setup  → Organization, WebSite, SoftwareApplication, BreadcrumbList
/ko/local-llms/best-beginner-local-llm-models   → Organization, WebSite, SoftwareApplication, BreadcrumbList
```

On the preview, both should additionally show `TechArticle`, `FAQPage` and
`HowTo` **in raw HTML** (`curl`, no JS execution). That is the whole point of the
fix — production doesn't produce these even after hydration.

Also check on the preview:

```bash
curl -sI <preview>/de/ | grep -i x-vercel-cache   # HIT on repeat request
curl -s  <preview>/de/ | grep '<html'             # unchanged from today is fine, this PR doesn't touch it
```

**Report the preview results.** Hans merges on that evidence, not on the build
passing.

---

## Step 5 — clean up the stale branch

`feature/preferred-source-link` (`e357c27fa`) is superseded. Do not delete it
yourself. Confirm to Hans that `feature/preferred-source-link-clean` contains the
same Footer.tsx change and nothing else, so he can delete the original once the
clean one is merged.

---

## Report back

1. Deletion breakdown from Step 1 — top 15 files, and confirmation nothing
   unexpected is being removed.
2. The four PR numbers.
3. Preview verification output for `fix/local-llms-schema-parity`, showing
   `TechArticle` / `FAQPage` / `HowTo` in raw HTML.
4. Anything that contradicts the above.

Then stop. `[locale]` refactor, `BlogPostClient.tsx` CTA, and the Korean webfont
decision all remain gated on Hans.
