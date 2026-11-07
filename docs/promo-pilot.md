# Promo slots pilot: how it runs and how to read it

Owner: Hans. Brief: `handoffs/promo-slots-pilot-brief-2026-11-07.md` (v3). Config: `src/lib/promo/pilot.ts`. Check: `npm run test:promo-pilot`.

## Switches
| Switch | Effect |
|---|---|
| `NEXT_PUBLIC_PROMO_PILOT=true` | Pilot slots render on the 25 groups (all 9 locales). Unset/false: nothing renders anywhere. |
| `NEXT_PUBLIC_ASK_HANS_ENABLED=true` | Needed for the Ask Hans / Power Mode slots (they hide without it). |
| `PROMO_PROVIDER` in `src/lib/promo/config.ts` | `house` today; `ad-tag` renders an empty reserved box (`data-ad-slot`) for a third-party tag later. |

Both env vars are build-time (`NEXT_PUBLIC_*`): changing them needs a deploy. Run length: 21 days (brief). Deploy stays on demand.

## What is measured
**Umami events** (props on every event: `target`, `placement`, `variant`, `cluster`, `locale`, `page`, `device`):
- `promo_view`: once per page view when >= 50% of the slot is visible for >= 1 s.
- `promo_click`: CTA click, all four targets.
- `promo_open`: Ask Hans / Power Mode window actually opened by a slot (props `target`, `placement`, `source`, `cluster`, `page`, `device`). Counted for every visitor, whatever their Ask Hans consent choice.

**Downstream**
| Target | Where to read it |
|---|---|
| Ask Hans / Power Mode (in place) | **Primary:** Umami `promo_open`. **Secondary:** Redis daily counters of the Ask Hans event route (CONSENT-ONLY, so they undercount: a first-time visitor who opens the tool from a banner sees the consent step first and is not counted; the ~17/day baseline may or may not share this filter, so compare lift with care): `askhans:day:<date>` field `open_src:promo_<target>_<placement>` (e.g. `open_src:promo_ask_hans_p2`, `open_src:promo_power_mode_p1`) next to `total_opens`. Then questions (`q:*`) and Power Mode reports (`power:*`, `total_power`). The counters are per day, not per session: "open-to-use" is read as promo opens vs. questions/reports on the same days (an estimate, not a per-session join; no visitor ID is stored for opens). |
| Directory / MCP (links) | Link carries `?via=promo_<target>_<placement>` (e.g. `via=promo_directory_p3`). In Umami filter pageviews by URL query `via`. Umami normally records the landing URL with its query string (not yet verified on this proxy setup). |
| MCP server hits | Server-side hits on `/api/mcp` and `/mcp.json`: NOT verified as accessible. Check Vercel runtime logs before relying on it. |

## Metrics
| Metric | Definition |
|---|---|
| Slot CTR | `promo_click / promo_view` by target x placement x locale x device |
| Open-to-use | promo opens (`open_src:*`) that lead to a question or report / promo opens (daily-level estimate, see above) |
| Ask Hans lift | opens per day in the pilot vs. the baseline (~17/day over the 7 days to 2026-11-07, 122 opens since 2026-11-01). State the baseline window used. |
| Downstream rate | Directory/MCP sessions with `via=promo_*` / `promo_view` |
| Page health | engagement and Core Web Vitals, pilot vs. control |
| SEO health | GSC clicks/impressions, pilot vs. control, 28 days before vs. after |

Report by locale only where a cell has >= 100 views; pool and flag the rest.

## Controls
60 matched article groups without a slot: `PILOT_CONTROLS` in `src/lib/promo/pilot.ts` (paired by cluster and impressions). The pilot has 65 groups: 60 articles (15 per placement P1-P4) + the 5 hubs. It started at 25 groups and was tripled on request (hubs cannot be tripled, there are only 5).
**The 5 hubs have no matched control** (they are all the non-excluded hubs). Default until Hans decides otherwise: compare each hub with its own 28 days before launch, and read hub results as before/after, not pilot/control.

## Decision rule (fixed before launch)
Scale a placement or target if its CTR is clearly above the pilot median and page health shows no regression. Otherwise change placement or creative, not the metric.

## Known limits
- **Confounded cells.** The brief's cluster/target table ties targets to clusters: Ask Hans runs only on prompt-engineering pages, MCP only on power-local-llm pages, Power Mode only on local-llms pages. Per placement that leaves MCP 1-2 groups and Ask Hans 3. Placement can be judged cleanly only for Directory; for the other targets, product effect and topic effect cannot be separated. Compare within cluster x target x placement and pool thin cells.
- The second wave of 40 groups reaches deeper into the GSC list; the prompt-engineering pool is thin (some pages ~500 impressions per 28 days), so many locale cells will be below the 100-view rule.
- Automated checks against the live site can trip Vercel's bot protection ("Security Checkpoint", 403). Do not poll the site in loops; use the Vercel API for deploy status.
- MCP banners link to `/mcp-stats` (the MCP server page). The copy-paste setup panel lives on `/directory#mcp-connect-heading`, which `/mcp-stats` links to with a Connect button.
- P2 is placed by section count (after section `round(0.4 n)`), not by text length.
- P4 is a sticky side rail only at >= 1360 px width; narrower screens show the same slot at the P2 spot and report it as P2 (`device` separates mobile).
- The Discuss-with-AI bar (`AiDiscussBar`) shows on `/local-llms`, `/power-local-llm` and `/directory` at the bottom of the page; the P5 slot sits under the hero, far from it.
- `/directory` is rendered as an article page; its P5 slot sits before the article body, below the interactive hub.
- Hardware Selector cannot be preselected from a Power Mode slot (the UI has no such option); Power Mode just opens.
- Slot text is checked against the live `/askhans` page (2026-11-07). Re-check before launch.
