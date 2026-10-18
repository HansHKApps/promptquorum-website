# Hub Template (new hub-page design)

Shared layout for content hub pages. Used by the Balcony Solar hub (`src/lib/balcony-solar/hub-template.tsx`) and the Smart Home hub
(`src/lib/smart-home/hub-template.tsx`), both in all 9 languages (`*_HUB_TEMPLATE_LANGS`; per-language strings in `HUB_TEMPLATE_COPY` in each
adapter and `HUB_EXPLORE_LABELS` in `src/components/hub-template/labels.ts`). The other 4 clusters still use their old hub components.
Smart Home has no company profiles, so all 8 category tiles are plain guide tiles and the intro count is simply the number of listed pages.
RTL: use logical Tailwind classes (`ps-`, `ms-`, `text-start`), never `pl-`/`ml-`/`text-left`.

## Where it lives
- `src/components/hub-template/` — the generic design. Server component `HubTemplate.tsx`; only `HubExplore.tsx` hydrates.
  - `types.ts` data shapes (HubTile, HubItem, HubStartCard, HubLatestCard, HubLink, HubFaqItem, HubFlowColumn)
  - `palette.ts` tones (`HubTone`) -> Tailwind classes; colour tokens are `--hub-*` in `src/app/globals.css`
  - `emphasis.tsx` `**bold**` rendering in copy; `labels.ts` + `HubIcon.tsx`
- `src/lib/balcony-solar/hub-template.tsx` — the cluster adapter: builds props from categories/articles. Holds the per-language
  copy (`HUB_TEMPLATE_COPY`, `HUB_EXPLORE_LABELS`). `profile-meta.ts` holds profile role badges + facts.

## Page sections (top to bottom)
hero (pill, title + `titleHighlight`, intro, 2 CTAs, summary cards, "content last reviewed" badge) -> flow diagram -> jump bar ->
start cards ("what do you want to do") -> Explore by topic (tiles open an in-place panel) -> "why" band -> latest ->
other hubs ("deeper") -> optional overview iframe -> FAQ.

## Rules
- One component for every hub and language; supply content via props, pick an accent. Do not fork per language.
- All links are in the server HTML; no client-only content.
- Explore tiles = one per category; the long-tail category splits into guides and company profiles (profiles listed A-Z).
- Card/tile tones cycle by position through `HUB_CYCLE` (violet, azure, indigo, orchid, rose); orange/blue/olive/amber/cyan are hub accents.
- Every Tailwind class is written out in full in `palette.ts` (no string building).
- Reviewed badge is indigo, not green.

## Counts (why the numbers differ)
- Intro "N Anleitungen" = pages minus company profiles, computed by `withComputedGuideCount` (the literal `33` in
  `page-helpers.tsx` HUB_COPY is a stale fallback; it is overwritten at render for template languages).
- Explore intro: `{tiles}` Themen, `{pages}` Seiten (`{guides}` Anleitungen und `{profiles}` Firmenprofile) — all computed.

## Adding a hub / language
1. Add copy + explore labels for the language in the cluster adapter; add it to the template-languages set.
2. Build tiles from the cluster's categories; use `HubTile`/`HubItem`.
3. Run the build; check the page renders in a worktree dev server (`npx next dev --webpack`).
