# SH-26–45 Consolidated Live-Verification List

Compiled at the end of Phase 2 (all 20 English drafts written, `feat/smart-home-expansion-20`).
120 inline `[VERIFY: ...]` tags total across the 20 articles — grouped here by article and by
type of claim, since checking is faster in batches by category than one at a time. Nothing
below was asserted as fact in the drafts; each is written as a hedge in the article body/FAQ.

## How to use this list

For each row: check the current real-world answer, then either (a) replace the `[VERIFY: ...]`
span with the confirmed fact, or (b) if still unconfirmed/moving, leave the hedge but tighten
the wording. Search each file for the literal string `[VERIFY:` to find every instance in place.

## By category

### Spec/version numbers (structural — check once, likely reusable across articles)
- **Current Matter specification version and ratification date** — referenced in `matter-2-0-explained` (title/body assumes "2.0" as a placeholder), `matter-solar-inverter-heat-pump-integration`. If the real current version differs, the title itself needs updating, not just body hedges.
- **Current Thread specification version** — `thread-14-wifi-7-routers-guide` (title assumes "1.4" as placeholder — same as Matter, check before Phase 3, this affects the title).
- **Current Wi-Fi generation standard relevant to smart home** — `thread-14-wifi-7-routers-guide` (kept as "Wi-Fi 7" in title, more likely to still be accurate than the Thread version number, but confirm).

### Regulatory (check once against official EU sources)
- **EU Data Act enforcement timeline and confirmed scope for smart home device categories** — `eu-data-act-smart-home-2027` (multiple instances — this is the single highest-stakes item in the batch, since it's a legal/compliance claim, not just a product spec).

### Manufacturer/product support claims (check per device category)
- **Which inverter/heat-pump manufacturers ship Matter energy-management support** — `matter-solar-inverter-heat-pump-integration` (heaviest-flagged article, 11 tags — this is a thin, fast-moving market per the article's own framing).
- **IKEA's current Matter-compatible product lineup and pricing (hub model, Matter certification status)** — `ikea-matter-ecosystem-guide-2027`.
- **Battery capacity/pricing for home backup sizing** — `home-as-energy-microgrid-2027` (deliberately did not carry forward any specific number from the balcony-solar cluster's own battery articles — cross-check against whatever those articles currently say, since they may have more current figures than this one assumed).

### Buyer's-guide product/pricing (all 7 SH-39–45 articles — no specific SKUs or affiliateLinks were included in any of them)
This is the biggest open item for Phase 3/pre-launch, not just a wording fix:
- **best-local-security-cameras-2027** — no camera models named; needs real current product picks + `affiliateLinks` entries added.
- **best-smart-locks-local-control-2027** — no lock models named; same.
- **best-smart-thermostats-local-ai-2027** — no thermostat models named; same.
- **best-zigbee-thread-dongles-2027** — no dongle models named; same (this category specifically has a history of silent chipset revisions under the same product name — verify chipset, not just product name, when sourcing picks).
- **best-smart-home-hubs-2027** — no hub SKUs named (Home Assistant Green-class/Hubitat/Homey referenced generically, not as specific current models); same.
- **nvidia-jetson-orin-nano-smart-home-review** — no price/exact specs given; also needs current JetPack/CUDA compatibility with Ollama-class tooling checked specifically (13 tags, most-flagged article in the batch).
- **best-energy-monitoring-smart-plugs-2027** — no plug models named; same.

None of these 7 have `affiliateLinks` populated yet (unlike SH-05/SH-11/SH-23 and the 5 mini-PC
reviews, which do). `affiliateDisclosure: true` is set on all 7 per convention, ready for
links once products are sourced — this mirrors the same open status SH-05/SH-11/SH-23 already
carry ("real product picks... not blocking launch" per `published.ts`'s existing comment).

### Narrower hardware/software specifics (lower stakes, check opportunistically)
- **Radar presence sensor current models/pricing** — `radar-presence-sensing-no-camera`.
- **Home Assistant's current support status for new Matter device types** — `matter-2-0-explained` FAQ.
- **Frigate hardware-acceleration support for Jetson vs. the established Hailo M.2 path** — `nvidia-jetson-orin-nano-smart-home-review`.

## Articles with zero VERIFY tags (no forecast claims flagged)
`local-smart-home-energy-management-2027`, `home-assistant-energy-dashboard-guide`,
`local-small-language-models-smart-home`, `reducing-llm-hallucinations-home-automation`,
`sensor-fusion-smart-home-2027`, `home-digital-twin-explained` — these 6 are conceptual/
how-to articles whose claims are structural rather than time-sensitive, matching the Phase 0
spec-lock prediction.

## Suggested check order for Phase 3 prep
1. EU Data Act timeline (legal risk, single article, check first)
2. Matter/Thread current spec version numbers (affects 2 titles + cascades into 3 articles)
3. The 7 Buyer's-Guide product picks (biggest lift — needs actual sourcing, not just a fact check)
4. Manufacturer support claims (Matter energy devices, IKEA lineup) — moderate effort, narrower scope
5. Remaining narrower hardware specifics (radar sensors, Jetson/Frigate compatibility)
