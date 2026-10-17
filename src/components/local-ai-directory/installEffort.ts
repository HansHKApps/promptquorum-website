// Presentation constants for ToolRecord.installEffort — one place for the badge colours and the
// i18n keys, so the card, table, drawer and filter panel can never disagree about a tier.

import type { InstallEffortKey, OSKey, ToolRecord } from '@/lib/power-local-llm/apps/types'
import type { DirUiKey } from './directory-i18n'

export const INSTALL_EFFORT_UI: Record<InstallEffortKey, { label: DirUiKey; tip: DirUiKey; badge: string }> = {
  installer: { label: 'installInstaller', tip: 'installInstallerTip', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  'one-command': { label: 'installOneCommand', tip: 'installOneCommandTip', badge: 'bg-sky-50 text-sky-700 border-sky-200' },
  'terminal-setup': { label: 'installTerminal', tip: 'installTerminalTip', badge: 'bg-amber-50 text-amber-800 border-amber-200' },
  hosted: { label: 'installHosted', tip: 'installHostedTip', badge: 'bg-slate-50 text-slate-600 border-slate-200' },
}

// OS product names stay identical across locales, same as the platform chips elsewhere in the directory.
const OS_NAME: Record<OSKey, string> = { mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web' }

/**
 * " · Windows" when the install tier only holds on some of the tool's platforms (ToolRecord.installOn),
 * else "". Appended to the badge so a Mac user is never told "Download & run" for a Windows-only installer.
 */
export function installOnSuffix(app: Pick<ToolRecord, 'installOn' | 'platforms'>): string {
  if (!app.installOn || app.installOn.length === 0) return ''
  const on = app.installOn
  if (app.platforms && app.platforms.every((p) => on.includes(p))) return ''
  return ` · ${on.map((o) => OS_NAME[o]).join(', ')}`
}
