'use client'

import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'

// Current shipping build. Bump this (and public/version.json) on each release.
const APP_VERSION = '0.1.0'

// Exact filenames as uploaded to the shared beta Google Drive folder — must
// match verbatim so testers can find the right file inside it. NOT the
// electron-builder default naming; update by hand whenever the Drive folder
// contents change (these are ad-hoc per-batch names, not a fixed pattern).
const FILES = {
  macArm: 'PromptQuorum 0.1.0 - Apple Silicon (M1-M5) (July13-final).dmg',
  macIntel: 'PromptQuorum 0.1.0 - Apple Intel Chip (July13-final).dmg',
  win: 'PromptQuorum 0.1.0 - Windows 10 and 11 (July13-final).zip',
  linuxX64: 'PromptQuorum 0.1.0 - Linux (Ubuntu and other distros) (July13-final).AppImage',
  linuxArm64: 'PromptQuorum 0.1.0 - Linux ARM64 (Raspberry Pi 5 etc) (July13-final).AppImage',
}

// Interim distribution: a single shared Google Drive folder containing every
// platform's installer (Drive doesn't give distinct per-file public URLs
// without per-file sharing setup). All platform buttons point here until
// installers are hosted individually. See docs/APP_VERSION_RELEASE.md.
const GOOGLE_DRIVE_URL = 'https://tnpvzv.s.gy/vx3ueD'

// TODO(Hans): swap these for distinct per-file URLs once installers are
// hosted individually (Vercel static / GitHub Release assets / etc.).
const INSTALLER_URLS = {
  macArm: GOOGLE_DRIVE_URL,
  macIntel: GOOGLE_DRIVE_URL,
  win: GOOGLE_DRIVE_URL,
  linuxX64: GOOGLE_DRIVE_URL,
  linuxArm64: GOOGLE_DRIVE_URL,
}

type Copy = {
  heading: string
  tagline: string
  beta: string
  versionLabel: string
  macArm: string
  macIntel: string
  win: string
  linuxX64: string
  linuxArm64: string
  fileLabel: string
  download: string
  betaNote: string
  unsignedHeading: string
  unsignedIntro: string
  macStep: string
  winStep: string
  linuxStep: string
  backHome: string
}

// EN + DE authored in full; the other locales fall back to EN for this beta
// download page (page metadata is still localized in all 9 languages).
const COPY: Record<string, Copy> = {
  en: {
    heading: 'Download PromptQuorum',
    tagline:
      'Dispatch one prompt to many AI models, compare their answers, and run consensus analysis — on macOS, Windows, and Linux.',
    beta: 'Beta',
    versionLabel: 'Current version',
    macArm: 'macOS — Apple Silicon (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64 (Intel/AMD)',
    linuxArm64: 'Linux — ARM64 (Raspberry Pi 5, etc.)',
    fileLabel: 'File',
    download: 'Download',
    betaNote:
      'PromptQuorum is in private beta. All installers are hosted in one shared folder — pick the button for your platform above.',
    unsignedHeading: 'Opening the app on a beta (unsigned) build',
    unsignedIntro:
      'PromptQuorum is in beta and not yet code-signed, so your operating system may warn you the first time you open it. This is expected — the app is safe to run.',
    macStep:
      'macOS: right-click (or Control-click) the app and choose "Open", then confirm "Open" in the dialog. If you double-click and see "unidentified developer", use right-click → Open instead.',
    winStep:
      'Windows: if SmartScreen shows "Windows protected your PC" / "unknown publisher", click "More info" → "Run anyway".',
    linuxStep:
      'Linux: make the AppImage executable first — chmod +x [filename].AppImage — then run it directly, no installation needed. If Ubuntu blocks it, launch from a terminal with --no-sandbox.',
    backHome: '← Back to Home',
  },
  de: {
    heading: 'PromptQuorum herunterladen',
    tagline:
      'Senden Sie einen Prompt an viele KI-Modelle, vergleichen Sie die Antworten und führen Sie eine Konsensanalyse durch — für macOS, Windows und Linux.',
    beta: 'Beta',
    versionLabel: 'Aktuelle Version',
    macArm: 'macOS — Apple Silicon (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64 (Intel/AMD)',
    linuxArm64: 'Linux — ARM64 (z. B. Raspberry Pi 5)',
    fileLabel: 'Datei',
    download: 'Herunterladen',
    betaNote:
      'PromptQuorum befindet sich in der privaten Beta. Alle Installer liegen in einem gemeinsamen Ordner — wählen Sie oben die Schaltfläche für Ihre Plattform.',
    unsignedHeading: 'Die App aus einem Beta-Build (unsigniert) öffnen',
    unsignedIntro:
      'PromptQuorum befindet sich in der Beta-Phase und ist noch nicht code-signiert. Ihr Betriebssystem zeigt beim ersten Öffnen möglicherweise eine Warnung an. Das ist normal — die App kann sicher ausgeführt werden.',
    macStep:
      'macOS: Klicken Sie mit der rechten Maustaste (oder Ctrl-Klick) auf die App und wählen Sie „Öffnen", dann im Dialog erneut „Öffnen". Bei einem Doppelklick erscheint „nicht verifizierter Entwickler" — nutzen Sie stattdessen Rechtsklick → Öffnen.',
    winStep:
      'Windows: Zeigt SmartScreen „Der Computer wurde durch Windows geschützt" / „unbekannter Herausgeber", klicken Sie auf „Weitere Informationen" → „Trotzdem ausführen".',
    linuxStep:
      'Linux: Machen Sie die AppImage-Datei zuerst ausführbar — chmod +x [Dateiname].AppImage — und starten Sie sie direkt, ohne Installation. Blockiert Ubuntu den Start, starten Sie sie im Terminal mit --no-sandbox.',
    backHome: '← Zurück zur Startseite',
  },
}

function PlatformCard({
  name,
  file,
  href,
  fileLabel,
  download,
}: {
  name: string
  file: string
  href: string
  fileLabel: string
  download: string
}) {
  // A real URL lights up a download button; placeholders show none.
  const isPlaceholder = href.startsWith('[[')
  return (
    <div className="flex flex-col rounded-lg border border-primary/15 bg-surface-elevated p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-text-primary">{name}</h3>
      <p className="mt-2 text-sm text-text-secondary">
        <span className="text-text-muted">{fileLabel}:</span>{' '}
        <span className="font-mono text-[13px] text-text-primary break-all">{file}</span>
      </p>
      {!isPlaceholder && (
        <div className="mt-auto pt-5">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {download}
          </a>
        </div>
      )}
    </div>
  )
}

export function DownloadClient({ initialLang }: { initialLang?: Lang }) {
  const lang = useLang(initialLang)
  const c = COPY[lang] ?? COPY.en
  const dir = lang === 'ar' ? 'rtl' : undefined
  const homeHref = lang === 'en' ? '/' : `/?lang=${lang}`

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6" dir={dir}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              {c.beta}
            </span>
            <span className="text-sm font-medium text-text-muted">
              {c.versionLabel}: <span className="font-mono text-text-secondary">v{APP_VERSION}</span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">{c.heading}</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">{c.tagline}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PlatformCard name={c.macArm} file={FILES.macArm} href={INSTALLER_URLS.macArm} fileLabel={c.fileLabel} download={c.download} />
          <PlatformCard name={c.macIntel} file={FILES.macIntel} href={INSTALLER_URLS.macIntel} fileLabel={c.fileLabel} download={c.download} />
          <PlatformCard name={c.win} file={FILES.win} href={INSTALLER_URLS.win} fileLabel={c.fileLabel} download={c.download} />
          <PlatformCard name={c.linuxX64} file={FILES.linuxX64} href={INSTALLER_URLS.linuxX64} fileLabel={c.fileLabel} download={c.download} />
          <PlatformCard name={c.linuxArm64} file={FILES.linuxArm64} href={INSTALLER_URLS.linuxArm64} fileLabel={c.fileLabel} download={c.download} />
        </div>

        <div className="mt-8 rounded-lg border border-primary/15 bg-surface p-8 text-center">
          <p className="mx-auto max-w-2xl text-sm text-text-secondary">{c.betaNote}</p>
        </div>

        <div className="mt-8 rounded-lg border border-tertiary/25 bg-surface p-6">
          <h2 className="text-base font-semibold text-text-primary">{c.unsignedHeading}</h2>
          <p className="mt-2 text-sm text-text-secondary">{c.unsignedIntro}</p>
          <ul className="mt-3 space-y-2 text-sm text-text-secondary">
            <li className="flex gap-2">
              <span aria-hidden className="text-tertiary">•</span>
              <span>{c.macStep}</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-tertiary">•</span>
              <span>{c.winStep}</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-tertiary">•</span>
              <span>{c.linuxStep}</span>
            </li>
          </ul>
        </div>

        <p className="mt-14 text-center">
          <a href={homeHref} className="text-primary hover:text-primary/80">
            {c.backHome}
          </a>
        </p>
      </div>
    </div>
  )
}
