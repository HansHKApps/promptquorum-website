# Task: locale schema-parity validator

The last site instruction. Everything else is gated on Hans.

## Why this exists

Three full technical reviews over two months missed the `local-llms` schema
fork. It was invisible to source-level review because each of the nine
`page.tsx` copies reads correctly on its own — the defect lived in the
*difference* between them, and nobody diffs nine locale copies during a review.

It only surfaced when someone parsed JSON-LD off production and compared EN
against JA.

A report doesn't survive the next commit. This check does. It is the
generalisation of the biggest finding of the session, and it is what makes a
fourth review unnecessary.

## The invariant

> For every article, all 9 locales emit the same multiset of JSON-LD `@type`
> graphs.

Not the same content — the same *shape*. A German article legitimately has
different text, different image captions, and a different number of `HowToStep`
entries than the Korean one. What is never legitimate is EN emitting
`TechArticle` + `FAQPage` + `HowTo` while JA emits only `BreadcrumbList`.

## Design — validate built output, not source

**Run it in `postbuild`, against the generated HTML in `.next`, not against
`src/`.**

This is the whole point. Source analysis is exactly what failed for two months:
`src/app/ja/local-llms/[slug]/page.tsx` looks like a valid file. Only the
rendered output reveals that it produces a different graph than its EN sibling.

Read the prerendered HTML directly off disk — no server needed for statically
generated routes. `scripts/test-cluster-noindex.mjs` already runs in `postbuild`
and reads built output; follow its conventions for locating files.

## Implementation

`scripts/validate-locale-schema-parity.mjs`

1. **Enumerate article routes** from the built output, grouped by
   `(cluster, slug)` with one entry per locale. Derive the locale list from
   `ALL_LANGS` in `src/lib/i18n/constants.ts` — do not hardcode nine.
2. **Parse every `<script type="application/ld+json">`** in each page. Flatten
   `@graph` arrays. Collect the multiset of `@type` values.
   - **Deduplicate the RSC hydration payload.** You already hit this: Next.js
     emits the JSON-LD string twice, once in the real `<script>` tag and once in
     the RSC payload. Parse only actual `<script type="application/ld+json">`
     elements; do not substring-match the raw HTML.
3. **Compare each locale's multiset against the EN baseline** for the same
   `(cluster, slug)`.
4. **Fail the build** on any mismatch, printing: cluster, slug, locale, types
   present in EN but missing in the locale, and types present in the locale but
   not EN. Both directions — a locale emitting something EN doesn't is also
   drift.

## Exceptions — explicit allowlist, no silent skips

Some routes are legitimately not 9-way. `/impressum` is single-canonical German
legal text with no per-locale route. There may be others.

Put them in a declared `PARITY_EXCEPTIONS` constant at the top of the script,
each with a one-line comment saying why. An undeclared asymmetry must fail. If
you find a route that needs an exception and you cannot justify it in one line,
it is a bug, not an exception — report it instead of adding it.

## Rollout — do not wire to BLOCK on day one

1. Build the script. Run it against current `main` **after PRs #215–#217 have
   merged**.
2. **Report what it finds before wiring it in.** If it comes back clean, say so.
   If it finds more forks in other clusters, that is the point of the exercise —
   report them, do not fix them in the same pass.
3. Only once it is green, or once every finding has a merged fix or a declared
   exception, wire it into `postbuild` in BLOCK mode.

Wiring a red validator into the build is how you end up with
`--no-verify` as a habit.

## Fail-safe semantics

This one reads local files only — no network — so the fail-safe concern that bit
`validate-sameas-links.mjs` on the GitHub runner does not apply. Keep it that
way: **no network calls in this script.** If you find yourself wanting to fetch
production to compare, that is a separate diagnostic tool, not a build gate.

## Header comment

Same discipline as `validate-image-schema.mjs`: state explicitly what the script
checks and what it does not. At minimum, note that it validates graph *shape*
only, not content, and that content-level translation integrity is covered by
`validate-translation-integrity.mjs`.

## Report back

1. What the script finds on current `main` after the merges — clean, or a list
   of forks by cluster and locale.
2. The exceptions you had to declare, with justifications.
3. Confirmation it is wired into `postbuild` in BLOCK mode, or an explanation of
   what is blocking that.
