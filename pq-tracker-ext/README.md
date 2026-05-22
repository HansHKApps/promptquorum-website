# PromptQuorum Outbound Tracker — Chrome Extension

A real-time event debugger for PromptQuorum's outbound-click tracking. Intercepts events from **Umami**, **Google Analytics 4 (GA4)**, and **Vercel Analytics** and displays them as toast notifications + a popup event log.

## Installation

1. Clone or download this folder to your machine
2. Open Chrome: `chrome://extensions`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the `pq-tracker-ext/` folder
6. ✅ Extension installed

You'll see a blue "PQ" icon in your toolbar.

## Usage

### Test on Local Dev Server

```bash
# Terminal 1: Start the dev server
npm run dev
# Opens on http://localhost:3000

# Terminal 2: Open Chrome and navigate to
# http://localhost:3000/local-llms/eu-cloud-gpu-gdpr-2026
```

### Click an Outbound Link

1. Find a tracked link (any external link on an article page)
2. **Click the Hetzner / Ollama / Anthropic link**
3. **Toast appears** (bottom right) showing:
   - Source: Umami, GA4, or Vercel (colored pill)
   - Vendor: `hetzner`, `ollama`, `anthropic`, etc.
   - Article: slug of the page
   - Language: `en`, `de`, `fr`, `ja`, `zh`

### View Event Log

- Click the **blue PQ extension icon** → popup opens
- Shows a table of all captured events (max 20)
- "Clear" button to reset the log

### Test Multiple Sources

Each click fires **3 events** (one per analytics provider). You should see 3 toasts per click:
- 🟣 **Umami** (purple)
- 🟠 **GA4** (orange)
- ⬛ **Vercel** (black)

## How It Works

### content.js
Runs on every page load and wraps three global functions:
- `window.umami.track()` → intercepts and logs
- `window.gtag()` → intercepts GA4 events
- `window.__vercel_insights_track()` → intercepts Vercel analytics

Each interception calls `logEvent(source, name, props)` which:
1. Stores to `chrome.storage.session` (ring buffer, max 20 events)
2. Injects a toast DOM element
3. Notifies the popup to update

### popup.html / popup.js
Reads `chrome.storage.session` on open and renders a table. Polls every 500ms for new events while the popup is open.

## Verification Checklist

- [ ] Extension loads in `chrome://extensions` (blue PQ icon visible)
- [ ] Open `localhost:3000/local-llms/eu-cloud-gpu-gdpr-2026`
- [ ] Click "Hetzner Cloud GPU" link
- [ ] Toast appears with `vendor: hetzner`
- [ ] Click popup → event appears in table
- [ ] Try 3 different articles → all track correctly
- [ ] Try `?lang=de` → `lang: de` in event payload
- [ ] Push to production, test on live URL → works there too

## Troubleshooting

**"Extension loaded but no toasts appear"**
- Check that links have `onClick` handlers (inspect in DevTools)
- Check that `window.umami` / `window.gtag` exist (Console → `window.umami`)
- If Vercel Analytics not intercepted, wait 2 seconds (it loads async)

**"Popup shows no events"**
- Make sure `chrome.storage.session` permissions exist in manifest.json ✅
- Click a link again
- Check popup's console for errors (`Ctrl+Shift+J` on popup.html)

**"Works on localhost, not on production"**
- Ensure manifest.json matches statement includes the production domain:
  ```json
  "matches": [
    "*://*.promptquorum.com/*",
    "*://localhost:3000/*"
  ]
  ```

## Files

```
pq-tracker-ext/
├── manifest.json      # Extension config + content script
├── content.js         # Intercepts analytics calls + shows toast
├── popup.html         # Popup UI (table layout)
├── popup.js           # Reads chrome.storage.session, renders table
└── README.md          # This file
```

## Notes

- Extension only works on `*.promptquorum.com` and `localhost:3000`
- Events are stored in `chrome.storage.session` (cleared when you close Chrome)
- Toast duration: 4 seconds (auto-dismiss)
- Event log cap: 20 events (ring buffer)
- No data is sent anywhere — everything stays local in Chrome storage

---

**Last updated:** 2026-05-22
