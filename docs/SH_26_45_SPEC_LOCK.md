# Smart Home Cluster Expansion — SH-26–45 Spec Lock

Phase 0 audit + Phase 1 hub wiring done (see commits `2d38875df`, `59e92174b`,
`37881ce35` on `feat/smart-home-expansion-20`). This is the frozen spec for
Phase 2 drafting. No article bodies exist yet — `articles-barrel.ts` and
`published.ts` are untouched (still 30 entries each); `slugs.ts` and
`categories.ts` are pre-registered so hub links resolve to "Coming Soon"
instead of 404ing.

All 20 articles: `freshness_tier: 'semi_annual'`, matching this cluster's
established convention (every existing SH-01–30 article that references
specific models/hardware/protocol versions uses `semi_annual` + a year in
the title, even when the slug itself has no year — e.g.
`best-hardware-for-local-smart-home` has "(2026)" in the title only).
`next_refresh_due` is left as **TBD — set to (actual publishDate + 6 months)
at Phase 2 draft time**, since the real publish date isn't known yet.

Legend: **⚠️ PRICE/PRODUCT — VERIFY LIVE** flags any forecast-era claim that
must be checked against real, current retailer/spec data before writing —
per house rule, forecast figures are never carried into a draft unverified.

---

## Category 5 — Energy & Solar Integration (SH-26–29)

### SH-26 — `local-smart-home-energy-management-2027`
- **Title (draft):** Local Smart Home Energy Management (2027)
- **Brief:** How a local-first smart home manages energy without sending usage data to a cloud dashboard: Home Assistant's Energy dashboard as the hub, local device-level monitoring via smart plugs/CT clamps, and automations that shift load to cheap/solar hours. Positions this as the conceptual overview article that the other 3 Category-5 articles narrow into (inverter/heat-pump integration, the HA dashboard how-to, and microgrid setups). Explains why cloud energy-monitoring services (utility apps, some smart-plug vendor apps) leak granular usage patterns, and how local monitoring avoids that.
- **Target query:** "smart home energy management local" / "local energy monitoring home assistant"
- **Internal links (smart-home):** → `home-assistant-energy-dashboard-guide` (SH-28, the how-to spoke), `best-hardware-for-local-smart-home` (SH-11), `best-energy-monitoring-smart-plugs-2027` (SH-45)
- **Cross-cluster links:** → `/balcony-solar/what-is-balcony-solar`, `/balcony-solar/connect-balcony-solar-home-assistant-local` (per your Phase 0 note: SH-26–29 are the ones that should cross-link balcony-solar)
- **Freshness tier:** semi_annual

### SH-27 — `matter-solar-inverter-heat-pump-integration`
- **Title (draft):** Matter Integration for Solar Inverters and Heat Pumps (2027)
- **Brief:** Covers Matter's device-type support for energy hardware — inverters, heat pumps, EV chargers — as first-class local-control device classes rather than cloud-bridged integrations. Distinct from balcony-solar's existing inverter content (which is monitoring/dashboard-focused, not Matter-protocol-focused, per Phase 0 overlap check). Explains what "Matter Energy Management" device types expose locally, current real-world support gaps by manufacturer, and how this differs from vendor-cloud inverter apps.
- **Target query:** "matter smart home inverter heat pump" / "matter energy management device types"
- **Internal links:** → `matter-local-control-guide` (SH-14), `matter-2-0-explained` (SH-30)
- **Cross-cluster links:** → `/balcony-solar/best-balcony-solar-microinverters`, `/balcony-solar/home-assistant-balcony-solar-no-cloud` — **explicit "different angle" framing required in the intro** per Phase 0 finding (this is Matter-protocol integration, not the monitoring/dashboard angle balcony-solar already owns)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** which inverter/heat-pump manufacturers actually ship Matter support as of the real writing date — this is a fast-moving, currently-thin market; do not assume forecast vendor-support claims without checking current manufacturer spec sheets.
- **Freshness tier:** semi_annual

### SH-28 — `home-assistant-energy-dashboard-guide`
- **Title (draft):** Home Assistant Energy Dashboard: Complete Setup Guide (2027)
- **Brief:** Step-by-step setup of HA's built-in Energy dashboard: adding grid/solar/battery/individual-device sensors, configuring cost tracking, and reading the dashboard's charts. The how-to spoke of SH-26. Differentiate explicitly from `home-assistant-getting-started` (SH-08), which is general first-install/first-automation content — this is Energy-dashboard-specific.
- **Target query:** "home assistant energy dashboard setup" / "how to configure HA energy dashboard"
- **Internal links:** → `home-assistant-getting-started` (SH-08), `local-smart-home-energy-management-2027` (SH-26)
- **Cross-cluster links:** → `/balcony-solar/connect-balcony-solar-home-assistant-local`
- **Freshness tier:** semi_annual

### SH-29 — `home-as-energy-microgrid-2027`
- **Title (draft):** Turning Your Home Into an Energy Microgrid (2027)
- **Brief:** The most speculative of the 20 — covers home battery + solar + smart-load-shedding as a local "microgrid," operating independently during grid outages. Flagged in Phase 0 as needing a premise check: confirm this reflects an actual consumer-accessible setup (battery + inverter + HA automation) rather than true islanded-microgrid engineering, which is a different (commercial/utility) topic. Scope narrowly to home battery backup + local automation, not grid-scale microgrid theory.
- **Target query:** "home energy microgrid setup" / "whole home battery backup automation"
- **Internal links:** → `local-smart-home-energy-management-2027` (SH-26), `best-hardware-for-local-smart-home` (SH-11)
- **Cross-cluster links:** → `/balcony-solar/best-balcony-solar-home-battery-us-2026`, `/balcony-solar/do-you-need-a-battery-balcony-solar`
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** any battery capacity/price figures — battery pricing moves fast and the balcony-solar cluster already tracks current battery pricing; reuse/verify against those articles rather than forecasting independently.
- **Freshness tier:** semi_annual

---

## Category 6 — 2027 Protocols & Regulation (SH-30–33)

### SH-30 — `matter-2-0-explained`
- **Title (draft):** Matter 2.0 Explained: What's New (2027)
- **Brief:** Confirmed genuinely new in Phase 0 (not a rename of SH-04/SH-14). Covers the Matter 2.0 spec revision itself — new device types, energy management support (ties to SH-27), and backward compatibility with 1.x devices. Cross-link explicitly to SH-04 (`smart-home-protocols-explained`, the general Matter/Thread/Zigbee/Z-Wave primer) and SH-14 (`matter-local-control-guide`, local-commissioning focus) so the three don't compete for the same "what is Matter" query — this one owns "what changed in the 2.0 spec update."
- **Target query:** "matter 2.0 smart home" / "what is new in matter 2.0"
- **Internal links:** → `smart-home-protocols-explained` (SH-04), `matter-local-control-guide` (SH-14), `matter-solar-inverter-heat-pump-integration` (SH-27)
- **⚠️ SPEC/VERSION — VERIFY LIVE:** confirm the actual current Matter spec version number and shipped feature set at write time — do not assume "2.0" is still the current designation by the real writing date; the CSA's versioning and release cadence should be checked fresh.
- **Freshness tier:** semi_annual

### SH-31 — `thread-14-wifi-7-routers-guide`
- **Title (draft):** Thread 1.4 and Wi-Fi 7 Routers for Smart Homes (2027)
- **Brief:** Covers Thread border router requirements and Wi-Fi 7 router selection for smart-home networking — bandwidth/latency needs for camera streams and voice, and which router features actually matter for a local-first setup (vs. marketing-driven Wi-Fi 7 features that don't).
- **Target query:** "thread border router wifi 7" / "best router for smart home 2027"
- **Internal links:** → `matter-local-control-guide` (SH-14), `smart-home-protocols-explained` (SH-04)
- **⚠️ SPEC/VERSION — VERIFY LIVE:** confirm Thread's actual current spec version at write time (forecast "1.4" may not match reality by then) and which router chipsets/models genuinely ship Wi-Fi 7 + Thread border router support — do not carry forward specific router model/price recommendations from the forecast without checking current retail listings.
- **Freshness tier:** semi_annual

### SH-32 — `eu-data-act-smart-home-2027`
- **Title (draft):** The EU Data Act and Your Smart Home (2027)
- **Brief:** Explains the EU Data Act's implications for connected-device data portability and interoperability, specifically for smart-home hardware sold in the EU. Distinct from `private-smart-home-gdpr` (SH-12), which covers GDPR/data-residency — this is a different regulation (device data-sharing/portability rights, not personal-data processing).
- **Target query:** "eu data act smart home" / "data act connected devices"
- **Internal links:** → `private-smart-home-gdpr` (SH-12)
- **⚠️ LEGAL/REGULATORY — VERIFY LIVE:** confirm actual EU Data Act enforcement timeline and current applicability to smart-home hardware at write time — regulatory implementation dates shift; do not publish enforcement-date claims without checking the current official timeline. Recommend the same legal-review process used for the balcony-solar cluster's country-specific legal articles (see `docs/german-legal-review.md`).
- **Freshness tier:** semi_annual

### SH-33 — `ikea-matter-ecosystem-guide-2027`
- **Title (draft):** IKEA's Matter Ecosystem: Complete Guide (2027)
- **Brief:** Covers IKEA's Matter-compatible device lineup (hub, sensors, lighting) as a budget-friendly local-first entry point, positioned as an alternative to Home Assistant Green/Yellow for readers who want off-the-shelf hardware.
- **Target query:** "ikea matter smart home" / "ikea dirigera matter devices"
- **Internal links:** → `best-smart-home-devices-2026` (SH-05), `best-smart-home-hubs-2027` (SH-43)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** IKEA's Matter/Dirigera product lineup and pricing — confirm current SKUs and prices at write time, do not carry forward forecast product names.
- **Freshness tier:** semi_annual

---

## Category 7 — Advanced Local AI (SH-34–38)

### SH-34 — `local-small-language-models-smart-home`
- **Title (draft):** Small Language Models for Smart Home Control (2027) *(year added to title per convention — not in slug)*
- **Brief:** Explains why smart-home voice/automation control favors small (1–4B parameter), fast, function-calling models over large general-purpose LLMs — latency, on-device feasibility, and cost. Explicitly scoped to differentiate from SH-19 (`best-local-llm-models-smart-home`, a model-picks shortlist): SH-34 is the "why small models, how they work, what SLM architecture trade-offs matter" explainer; SH-19 stays the buyer-facing shortlist. Cross-link both directions.
- **Target query:** "small language models smart home" / "SLM home assistant control"
- **Internal links:** → `best-local-llm-models-smart-home` (SH-19), `local-llm-smart-home-complete-guide` (SH-15)
- **Cross-cluster links:** → `/power-local-llm/mobile-llm-models-phi4-gemma-smollm` (per your Phase 1 instruction — SLM content already exists there for mobile; cross-link rather than duplicate the general SLM explainer)
- **Freshness tier:** semi_annual

### SH-35 — `radar-presence-sensing-no-camera`
- **Title (draft):** Radar Presence Sensing: Room Occupancy Without a Camera (2027)
- **Brief:** Covers mmWave radar sensors (e.g., Aqara FP2-class devices) for camera-free presence/occupancy detection — privacy advantage over cameras, accuracy trade-offs, and Home Assistant integration for presence-based automations.
- **Target query:** "radar presence sensor smart home" / "mmwave occupancy sensor no camera"
- **Internal links:** → `local-ai-security-camera` (SH-20, contrast camera-based vs. camera-free detection), `smart-home-privacy-risks` (SH-07)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** specific radar sensor models/prices — this is a narrow, fast-evolving product category; verify current models exist and are still sold at write time.
- **Freshness tier:** semi_annual

### SH-36 — `reducing-llm-hallucinations-home-automation`
- **Title (draft):** Reducing LLM Hallucinations in Home Automation (2027)
- **Brief:** Narrows general hallucination-reduction advice (already covered generically in prompt-engineering's `ai-hallucinations-how-to-stop`) to the smart-home failure mode specifically: an LLM triggering the wrong device, misreading a sensor state, or inventing a device/entity that doesn't exist. Covers grounding techniques (function-calling schemas, entity-list constraints) specific to Home Assistant's conversation agent.
- **Target query:** "llm hallucination home automation" / "ai automation wrong device triggered"
- **Internal links:** → `ai-automations-local-llm` (SH-15/18), `home-assistant-ollama-integration` (SH-16)
- **Cross-cluster links:** → `/prompt-engineering/ai-hallucinations-how-to-stop` (per your Phase 1 instruction) — cross-link rather than re-explain general hallucination causes, per Phase 0 finding
- **Freshness tier:** semi_annual

### SH-37 — `sensor-fusion-smart-home-2027`
- **Title (draft):** Sensor Fusion in the Smart Home (2027)
- **Brief:** Explains combining multiple sensor types (motion, radar, contact, camera, audio) into a single automation decision to reduce false positives/negatives — e.g., "occupied" requires radar + motion agreement, not either alone. Ties directly to SH-35 (radar) as a prerequisite concept.
- **Target query:** "sensor fusion home automation" / "combine sensors smart home accuracy"
- **Internal links:** → `radar-presence-sensing-no-camera` (SH-35), `ai-automations-local-llm` (SH-18)
- **Freshness tier:** semi_annual

### SH-38 — `home-digital-twin-explained`
- **Title (draft):** Home Digital Twin Explained (2027)
- **Brief:** Explains the "digital twin" concept applied to a smart home — a live software model of the home's state (device states, occupancy, energy flow) that automations and an LLM can reason over, vs. today's simpler entity-by-entity state model. Positions this as a forward-looking/conceptual piece; keep concrete implementation claims modest since this is an emerging pattern, not an established product category.
- **Target query:** "smart home digital twin" / "digital twin home automation"
- **Internal links:** → `local-llm-smart-home-complete-guide` (SH-15), `sensor-fusion-smart-home-2027` (SH-37)
- **Freshness tier:** semi_annual

---

## Category 8 — Buyer's Guides (SH-39–45)

All 7 confirmed to reuse the existing affiliate mechanism exactly — **no new pattern**:
- `affiliateDisclosure: true` set once per language block (9 times per file, one per locale)
- Per-item `affiliateLinks: [{ label, url, productName, productCategory }]` inside each `sections.{key}` object
- URLs point to official manufacturer pages by default (established convention per the 2026-06-05 link-verification pass), not Amazon affiliate tags, unless you direct otherwise at draft time

### SH-39 — `best-local-security-cameras-2027`
- **Title (draft):** Best Local Security Cameras (2027)
- **Brief:** Product roundup of cameras with genuine local/on-device processing (no mandatory cloud subscription for basic recording/detection). Explicitly scoped as hardware-buying content, differentiated from SH-20 (`local-ai-security-camera`, the how-to-build-a-Frigate-system guide) per Phase 0 finding — cross-link both directions with clear framing ("which camera to buy" vs. "how to build the detection pipeline").
- **Target query:** "best local security cameras no cloud" / "local storage security camera 2027"
- **Internal links:** → `local-ai-security-camera` (SH-20)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** all camera models/prices — verify current SKUs, local-processing capability claims, and pricing at write time; camera lineups refresh yearly.
- **Freshness tier:** semi_annual

### SH-40 — `best-smart-locks-local-control-2027`
- **Title (draft):** Best Smart Locks With Local Control (2027)
- **Brief:** Roundup of smart locks that support local control (Zigbee/Z-Wave/Matter-over-Thread) without requiring a cloud account for basic lock/unlock, contrasted with cloud-dependent lock brands.
- **Target query:** "best smart lock local control no cloud" / "zigbee smart lock 2027"
- **Internal links:** → `smart-home-protocols-explained` (SH-04), `best-smart-home-devices-2026` (SH-05)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** all lock models/prices and their actual current local-control support (some vendors have removed local APIs in firmware updates — verify current firmware behavior, not just launch-era specs).
- **Freshness tier:** semi_annual

### SH-41 — `best-smart-thermostats-local-ai-2027`
- **Title (draft):** Best Smart Thermostats for Local AI Control (2027)
- **Brief:** Roundup of thermostats with local API/integration support for Home Assistant, enabling LLM-driven climate automation without cloud round-trips.
- **Target query:** "best smart thermostat home assistant local" / "local ai thermostat control"
- **Internal links:** → `local-llm-smart-home-complete-guide` (SH-15), `home-assistant-getting-started` (SH-08)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** thermostat models/prices and local-API availability — several major thermostat brands are cloud-only; verify which models genuinely expose local control before recommending.
- **Freshness tier:** semi_annual

### SH-42 — `best-zigbee-thread-dongles-2027`
- **Title (draft):** Best Zigbee and Thread USB Dongles (2027)
- **Brief:** Buyer's guide to USB radio dongles for Home Assistant (Zigbee coordinators, Thread border routers) — chipset differences, range, and which to pair with a mini-PC hub vs. a Raspberry Pi.
- **Target query:** "best zigbee dongle home assistant" / "thread border router usb dongle"
- **Internal links:** → `best-hardware-for-local-smart-home` (SH-11), `smart-home-protocols-explained` (SH-04)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** dongle models/chipsets/prices — verify current SKUs (this category has frequent silent chipset revisions under the same product name).
- **Freshness tier:** semi_annual

### SH-43 — `best-smart-home-hubs-2027`
- **Title (draft):** Best Smart Home Hubs for Local Control (2027)
- **Brief:** Hardware buyer's guide comparing dedicated hub SKUs (Home Assistant Green, Hubitat, Homey) rather than DIY mini-PC/Pi builds. Confirmed distinct from SH-03 (`smart-home-ecosystems-compared`, software/platform comparison) and needs explicit differentiation from SH-11 (`best-hardware-for-local-smart-home`, broader DIY hardware guide) per Phase 0 finding — frame this one narrowly as "off-the-shelf hub appliances," pointing to SH-11 for the DIY mini-PC/Pi path.
- **Target query:** "best smart home hub 2027" / "home assistant green vs hubitat vs homey"
- **Internal links:** → `smart-home-ecosystems-compared` (SH-03), `best-hardware-for-local-smart-home` (SH-11), `ikea-matter-ecosystem-guide-2027` (SH-33)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** hub SKU availability and prices — Home Assistant Yellow was already discontinued per SH-11's current content; confirm which hub SKUs are still sold at write time before repeating any from the forecast.
- **Freshness tier:** semi_annual

### SH-44 — `nvidia-jetson-orin-nano-smart-home-review`
- **Title (draft):** NVIDIA Jetson Orin Nano for Smart Home AI: Review (2027)
- **Brief:** Single-product review, same format as the 5 existing mini-PC reviews. Confirmed in Phase 0/re-audit as a genuinely distinct hardware class (GPU-inference edge board vs. the existing x86 general-purpose mini-PCs) — not a 6th entry for the `best-mini-pc-home-assistant-local-ai` roundup. Scope to CUDA/TensorRT-accelerated local LLM + Frigate inference specifically, the buyer intent a Jetson attracts (edge-AI enthusiasts) vs. general HA-hub buyers.
- **Target query:** "jetson orin nano home assistant" / "jetson orin nano local llm review"
- **Internal links:** → `best-mini-pc-home-assistant-local-ai` (SH-23, cross-link as "the x86 alternative"), `best-local-llm-models-smart-home` (SH-19)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** Jetson Orin Nano current price/SKU/specs and current JetPack/CUDA software-stack compatibility with Ollama-class tooling — this hardware class's software support has moved fast; verify current state, don't carry forward forecast specs.
- **Freshness tier:** semi_annual

### SH-45 — `best-energy-monitoring-smart-plugs-2027`
- **Title (draft):** Best Energy-Monitoring Smart Plugs (2027)
- **Brief:** Buyer's guide to smart plugs with local energy-monitoring (wattage/kWh) reporting into Home Assistant, contrasted with plugs that only report to a vendor cloud app.
- **Target query:** "best energy monitoring smart plug home assistant" / "local energy monitoring smart plug 2027"
- **Internal links:** → `home-assistant-energy-dashboard-guide` (SH-28), `local-smart-home-energy-management-2027` (SH-26)
- **⚠️ PRICE/PRODUCT — VERIFY LIVE:** plug models/prices and confirm local-reporting capability isn't cloud-gated by firmware at write time.
- **Freshness tier:** semi_annual

---

## Summary of ⚠️ items requiring live verification before Phase 2 drafting

10 of 20 articles carry at least one forecast claim that must be checked against real current data, not carried forward as-is: SH-27, SH-29, SH-30, SH-31, SH-32, SH-33, SH-35, SH-39, SH-40, SH-41, SH-42, SH-43, SH-44, SH-45 (all 7 Buyer's-Guide articles plus 3 Protocols/Regulation articles plus SH-27/29/35). Pattern: anything with a specific spec-version number (Matter 2.0, Thread 1.4), a regulatory date (EU Data Act), or a product/price (all 7 affiliate guides) needs a fresh check at actual write time — none of these should be drafted straight from this forecast spec without that check.
