# Refactor Baselines

This directory contains manifests and sitemaps captured before
content.ts refactors, used as reference for safety gates 6/7/8 in
`docs/plans/content-refactor-2026-04.md`.

## Files

| File | Purpose |
|---|---|
| `pe-pre-refactor-manifest.json` | Manifest of 920 URLs snapshotted before PE refactor |
| `pe-pre-refactor-sitemap.xml` | Sitemap.xml byte-snapshot before PE refactor |

The full HTML/JSON-LD captures are too large for git
(87 MB) and live in `/tmp/baseline-pre-refactor-pe/` during
the refactor. Re-capture if needed with:

    node scripts/snapshot-routes.mjs --out /tmp/baseline-pre-refactor-pe

The manifest here is the persistent record of what was captured.
