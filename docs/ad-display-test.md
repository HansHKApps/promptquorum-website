# Ad display test (our own ads on the uncensored pages)

Owner: Hans (2026-11-27). Question: **how often is an ad really displayed per page view?** Clicks are a side number. It simulates what advertising could be worth, with no ad network, contract, payment account or third-party code. Separate from the promo pilot and the affiliate banner pilot.

## Setup
| Item | Value |
|---|---|
| Pages | `/power-local-llm/uncensored-local-llm-creative-writing-ethics` and `/power-local-llm/uncensored-llm-models`, all 9 locales. `locally-uncensored-review` is left out: it is a control page of the promo pilot. |
| Ads | Ask Hans, Directory, Academy, in the page language, each labelled "Test ad · PromptQuorum's own offer" (localized). Texts are the existing promo slot texts. |
| Positions | P1 after the intro (slim strip), P2 after ~40% of the sections (card), P3 before related reading (card) |
| Rotation | One of 3 orders at random per page view (in memory only). Every view has all 3 ads once; over time each ad is equally often in each position. |
| Measurement share | 25% of page views send request and impression events (`AD_TEST_MEASURE_SHARE`). Everyone sees the ads. Clicks are always sent. |
| Switch | `NEXT_PUBLIC_AD_TEST=true` (build time, needs a deploy). Also needs the server variables `ASK_HANS_ENABLED=true` and `ACADEMY_ENABLED=true` (next.config.ts derives the public flags from them). Unset: nothing renders. |
| Duration | 28 full days from the day after the deploy. Do not change positions, texts or sample share inside the window. |

## Events (Umami, cookieless, no storage)
| Event | Meaning | Props |
|---|---|---|
| `adtest_request` | measured page view requested its ads (= 3 ad opportunities) | `page`, `locale`, `device`, `rotation` |
| `adtest_impression` | ad **displayed**: at least 50% in the viewport for at least 1 s, tab visible and the ad's centre not covered (e.g. by the cookie dialog), once per page view | `position`, `creative`, `cell`, `page`, `locale`, `device` |
| `adtest_click` | button clicked | same as impression |

Cost estimate: with S measured views, about S x (1 + displayed ads per view) events; at most 4 x S.

Pilot isolation: no `*_promo_*` event fires from a test ad. Links carry `?via=adtest_<ad>_<position>`, and Ask Hans / Academy opens use the same source name, which the pilot counters ignore. Opens and usage of the tools still count in the tools' own totals.

## Reading the result
1. Umami, exact window, filter to the two paths in all locales: **page views** (sum).
2. Same window: number of `adtest_request` events; `adtest_impression` broken down by property `cell`; `adtest_click` by `cell`.
3. Write `counts.json`:
```json
{ "days": 28, "measureShare": 0.25, "pageviews": 0, "requests": 0,
  "impressions": { "P1:ask-hans": 0, "P1:directory": 0, "P1:academy": 0, "P2:ask-hans": 0, "P2:directory": 0, "P2:academy": 0, "P3:ask-hans": 0, "P3:directory": 0, "P3:academy": 0 },
  "clicks": {} }
```
4. `npm run adtest:report -- --input counts.json [--adblock 0.2]`

Per language or device: filter Umami by the locale paths (or the `locale` / `device` property) and run the report again with those counts. Small locales will be thin.

| Number | Definition |
|---|---|
| Tracking coverage | requests / (page views x 0.25). Expected near 100%; outside 85-115% the report flags it. |
| Display rate | impressions / requests, per position and per ad |
| Displayed per page view | sum of position rates for 1 (P1), 2 (P1+P2) or 3 ads |
| Simulator | monthly page views x displayed per view x fill rate (70/85/95%) x CPM (€1/2/3/5) / 1000, minus the optional `--adblock` share. **A model, not revenue.** |

## Limits
- Visitors who block Umami are in neither number. `adblock_check` (docs/adblock-measurement.md) gives a lower bound for `--adblock`.
- Own, same-origin ads are blocked less than a real network's.
- Fill rate and CPM cannot be measured here. Networks may restrict or pay less on "uncensored" pages; check a network's content rules before trusting any CPM.
- The creative-writing page carries most of the cluster's search traffic. Compare its Umami bounce rate and visit duration, and Search Console clicks, with the 28 days before. Stop (flag off + deploy) if they clearly get worse.
- The result describes these pages only; do not extrapolate it to the whole site.

Check: `npm run test:ad-display`.
