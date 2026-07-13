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

- **`APP_VERSION`** — drives the version badge and the installer filenames
  (`PromptQuorum-<version>-arm64.dmg`, `PromptQuorum-<version>.dmg`, `PromptQuorum Setup <version>.exe`,
  `PromptQuorum-<version>.AppImage`, `PromptQuorum-<version>-arm64.AppImage`).
- **`INSTALLER_URLS`** — currently TODO placeholders (`[[INSTALLER_URL_MACOS_ARM64]]`,
  `[[INSTALLER_URL_MACOS_INTEL]]`, `[[INSTALLER_URL_WINDOWS]]`, `[[INSTALLER_URL_LINUX_X64]]`,
  `[[INSTALLER_URL_LINUX_ARM64]]`). Replace with the real hosted installer URLs. Until they are
  real (not starting with `[[`), the page shows a disabled "Download link pending" state instead
  of a broken link.

### Where to host the installers
Installers are large (~122–218 MB). Pick one:
- **Vercel static** — drop them in `public/` (mind the 1 TB/mo Pro bandwidth; fine for beta volumes).
- **GitHub Release assets** — link to the release download URLs.
- **External file host** — link out.

Then paste those URLs into `INSTALLER_URLS`.

## Release checklist
1. Bump `currentVersion` (and `minimumSupportedVersion` if retiring old builds) in `public/version.json`.
2. Bump `APP_VERSION` and set the real `INSTALLER_URLS` in `src/app/download/page.tsx`.
3. Commit + land to `main` → Vercel deploys.
4. Verify `https://promptquorum.com/version.json` returns the new JSON (`Content-Type: application/json`,
   short cache) and `https://promptquorum.com/download` shows the new version + working download links.

Changes propagate within ~5 minutes thanks to the short `version.json` cache TTL.
