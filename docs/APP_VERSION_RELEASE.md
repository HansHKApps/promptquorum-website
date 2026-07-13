# Releasing a New App Version (website side)

The desktop app fetches **`https://promptquorum.com/version.json`** on launch and, if a
newer version exists, notifies the user and points them at **`https://promptquorum.com/download`**.
Two files on this website control that flow.

## 1. `public/version.json`

Served publicly at the site root (`/version.json`) with `Content-Type: application/json`,
`Access-Control-Allow-Origin: *`, and a **5-minute cache** (`Cache-Control: public, max-age=300`)
configured in `next.config.ts` → `headers()`. The short TTL means version bumps go live within minutes.

```json
{
  "currentVersion": "0.1.0",
  "minimumSupportedVersion": "0.1.0",
  "downloadUrl": "https://promptquorum.com/download",
  "message": {
    "en": "A newer free version of PromptQuorum is available.",
    "de": "Eine neuere kostenlose Version von PromptQuorum ist verfügbar."
  }
}
```

- **`currentVersion`** — the latest build. Raise this on every release so up-to-date apps stop nagging.
- **`minimumSupportedVersion`** — raise this to *firmly retire* old/buggy builds (apps below it should
  treat the update as required, not optional). Leave equal to `currentVersion` only if every older build
  must upgrade.
- **`message.{en,de}`** — the notification copy. Keep it short and honest.

## 2. `src/components/DownloadClient.tsx`

Rendered by `src/app/download/page.tsx` — the `/download` page users are routed to. On each release, update:

- **`APP_VERSION`** — drives the version badge.
- **`FILES`** — the exact filenames as uploaded to wherever the installers are hosted (currently a
  shared Google Drive folder for the private beta). These are **not** a fixed electron-builder
  pattern — they're ad-hoc per-batch names (e.g. `PromptQuorum 0.1.0 - Apple Silicon (M1-M5)
  (July13-final).dmg`). Update by hand to match whatever filenames actually exist in the current
  upload batch; a mismatch here just means the displayed "File:" text won't match what testers see
  when they open the folder — copy the names verbatim from the host.
- **`INSTALLER_URLS`** — currently all five point at the same shared Google Drive link
  (`GOOGLE_DRIVE_URL`) since Drive doesn't give distinct public per-file URLs without per-file
  sharing setup; testers pick the right file once inside the folder. Swap to distinct real URLs
  once installers are hosted individually (`[[INSTALLER_URL_MACOS_ARM64]]`-style placeholders would
  render a disabled "Download link pending" card instead of a broken link, if reintroduced for a
  given platform).

### Where to host the installers
Installers are large (~122–218 MB). Pick one:
- **Vercel static** — drop them in `public/` (mind the 1 TB/mo Pro bandwidth; fine for beta volumes).
- **GitHub Release assets** — link to the release release download URLs.
- **External file host** — link out.
- **Google Drive (current interim)** — a single shared folder link for all files; fine for a small
  beta cohort, not for public scale (no CDN, no bandwidth guarantees).

Then update `FILES` (exact names) and `INSTALLER_URLS` (real URLs) in `DownloadClient.tsx`.

## Release checklist
1. Bump `currentVersion` (and `minimumSupportedVersion` if retiring old builds) in `public/version.json`.
2. Bump `APP_VERSION`, update `FILES` to the exact new filenames, and set the real `INSTALLER_URLS`
   in `src/components/DownloadClient.tsx`.
3. Commit + land to `main` → Vercel deploys.
4. Verify `https://promptquorum.com/version.json` returns the new JSON (`Content-Type: application/json`,
   short cache) and `https://promptquorum.com/download` shows the new version + working download links.

Changes propagate within ~5 minutes thanks to the short `version.json` cache TTL.
