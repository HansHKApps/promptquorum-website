# Are the page views real? (ad display test)

Owner: Hans (2026-11-27). **Purpose:** advertising pays per page view, so check whether the page views are real. Our own ads on two pages are counted by **our own counter** and compared with **Google Search Console** and with **Umami**. Not a click test, not a revenue model. No ad network, contract, payment account or third-party code.

The counter is deliberately not Umami: counting with Umami would check Umami against itself.

## Setup
| Item | Value |
|---|---|
| Pages | `/power-local-llm/uncensored-local-llm-creative-writing-ethics` and `/power-local-llm/uncensored-llm-models`, all 9 locales. `locally-uncensored-review` is left out: it is a control page of the promo pilot. |
| Ads | Ask Hans, Directory, Academy, in the page language, each labelled "Test ad" (localized). Texts are the existing promo slot texts. |
| Positions | P1 after the intro (strip), P2 after ~40% of the sections, P3 before related reading. The 3 ads rotate at random per page view. |
| Measured | **Every** page view (no sampling) |
| Duration | 28 full Pacific-Time days after the deploy; change nothing inside the window |
| Isolation | No Umami event and no `*_promo_*` event. Links carry `?via=adtest_<ad>_<position>`; Ask Hans / Academy opens use the same source name, which the pilot counters ignore (they still count in the tools' own totals). |

## Switching it on (build time, needs a deploy)
| Variable | Value |
|---|---|
| `NEXT_PUBLIC_AD_TEST` | `true` (anything else: nothing renders, the counter returns 404) |
| `ASK_HANS_ENABLED`, `ACADEMY_ENABLED` | `true` (next.config.ts derives the public flags from them) |
| `PV_CHECK_REDIS_URL`, `PV_CHECK_REDIS_TOKEN` | the counter's own Upstash database. Without them the shared database is used, which was over its 500,000 request limit on 2026-11-27: **nothing would be counted.** |
| `PV_CHECK_REPORT_KEY` | a long random string; protects the export |

Cost: one Redis command per counted event, at most 6 per page view (plus clicks).

**After the deploy, check the same day** that the export shows counts. A failed write is logged as `[pv-check] count failed` and the event is lost.

## What is counted (daily totals, Pacific Time like GSC)
| Count | Meaning |
|---|---|
| `load` | the page was opened and its script ran |
| `first` | at least one ad was really shown in this page view |
| `human` | ad shown **and** a real input (mouse move or press, wheel, touch, key) |
| `ad:<position>:<ad>` | one ad shown: at least 50% in the viewport for at least 1 s, tab visible, centre not covered (e.g. cookie dialog) |
| `click:<position>:<ad>` | button clicked |

Each is split by source (`google`, `search` = other search engines, `site`, `internal`, `direct`, `repeat` = reload or back, `auto` = automated browser or crawler), language and page. No IP address, ID, cookie or browser storage. The server uses a salted IP hash in memory for one minute to limit request rates. Kept 120 days. **Privacy policy:** check whether this counter needs a sentence before the deploy (legal text is owner-reviewed, not edited here).

## Running the report
1. Wait 3 days after the last day (GSC delay).
2. Counter: open `/api/pv-check?key=<PV_CHECK_REPORT_KEY>&from=YYYY-MM-DD&to=YYYY-MM-DD`, save as `counter.json`.
3. GSC: query with dimensions `date`, `page` (in that order), `page_contains` = `uncensored-l`, same dates, search type web; save the result as `gsc.json`.
4. Umami: page views of the two paths in all locales, **exactly the compared days**, with the Umami time zone set to America/Los_Angeles.
5. `npm run adtest:report -- --counter counter.json --gsc gsc.json --umami <number>`

## Reading the result
| Comparison | What it tells you |
|---|---|
| Counted from Google vs GSC clicks | Whether the clicks Google reports arrive as opened pages. Expect somewhat below 100%: some people leave before the script runs, some browsers hide the referrer (those show up as `direct`). Far below or above 100% needs an explanation. |
| Ad shown / ad shown with human input, vs GSC clicks | How many of those arrivals would be a displayed ad, and how many showed a sign of a person |
| Counter page views vs Umami | Whether Umami reports about what a second, independent count sees. Umami far above the counter is a warning sign. |
| `human` share, by source and language | A source or language with many loads and almost no human input is suspicious |

No pass or fail threshold is set in advance by this tool. `human` is a lower bound for people (someone who reads the top and leaves without touching anything is not counted) and **not proof**: a bot can fake input and a referrer. This is not an ad network's invalid-traffic filter; a network will apply its own and may count fewer views. GSC covers only Google web search, so non-Google traffic has no outside reference. The result describes these two pages, not the whole site.

Check: `npm run test:ad-display`.
