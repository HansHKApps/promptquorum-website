# GSC tracking — content plan of 2026-10-18

Baselines are taken from manual GSC exports (Performance on Search, Web, all countries) downloaded 2026-10-17, not from the API (no API credentials exist).
Windows: `28d` = "Last 28 days", `3mo` = "Last 3 months". Both are top-1000 sheets, so rows missing here have fewer impressions than the sheet cut-off; "not in top-1000" is not zero.

Re-pull plan: on day 14 and day 28 after merge, export the same two sheets and compare per URL/locale and per query against these CSVs.
Metadata fixes on `locally-uncensored-review` and `sillytavern-vs-agnai-vs-risuai-roleplay` shipped on branch `session/gsc-metadata-fixes` (commit 99a8eaf21); the deploy date is the day-0 for CTR comparison.
