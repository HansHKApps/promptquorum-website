// Client-side companion to directory-i18n.ts's `t()` / `getMachineLabels()` /
// `getDeviceCategoryLabels()` / `getWantLabels()`.
//
// Bundle-size fix (Item 3, directory/power-local-llm shared chunk): the
// functions below take an already-resolved, single-language `ui:
// Record<DirUiKey, string>` object (built server-side via
// `resolveAll(lang)` in directory-i18n.ts, called only from page-helpers.tsx)
// instead of a `lang` code + the full 9-language dictionary. Importing only
// `DirUiKey` as a type here (erased at compile time) means this module never
// pulls directory-i18n.ts's ~700-line DIR_UI object into a client bundle —
// that object stays server-side, in the RSC payload that produced `ui`.
//
// Phase 1 scope (see bundle plan Item 3): only the components that were
// direct children of DirectoryClient.tsx switch to this shim — ToolCard.tsx,
// ToolTable.tsx, CompatibilityBadge.tsx, ArticlesBlock.tsx, StatsBar.tsx, and
// LastUpdatedBadge.tsx (shared with ToolCard.tsx) still import `t` from
// directory-i18n.ts directly and are an explicit phase-2 fast-follow.

import type { DirUiKey } from './directory-i18n'
import type { MachineCategory, MachineType } from './types'
import type { UseCaseKey } from '@/lib/power-local-llm/apps/types'

export type DirUi = Record<DirUiKey, string>

/** Same lookup + `{token}` interpolation behavior as directory-i18n.ts's `t()`, minus the lang fallback (already resolved into `ui`). */
export function t(key: DirUiKey, ui: DirUi, vars?: Record<string, string | number>): string {
  let text = ui[key]
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.split(`{${k}}`).join(String(v))
    }
  }
  return text
}

export function machineLabelsFromUi(ui: DirUi): Record<MachineType, string> {
  return {
    dgpu: ui.machineDgpu,
    apple: ui.machineApple,
    ios: ui.machineIos,
    android: ui.machineAndroid,
    cpu: ui.machineCpu,
  }
}

export function deviceCategoryLabelsFromUi(ui: DirUi): Record<MachineCategory, string> {
  return {
    desktop: ui.deviceCategoryDesktop,
    mobile: ui.deviceCategoryMobile,
  }
}

export function wantLabelsFromUi(ui: DirUi): Record<UseCaseKey, string> {
  return {
    chat: ui.wantChat,
    code: ui.wantCode,
    agent: ui.wantAgent,
    docs: ui.wantDocs,
    image: ui.wantImage,
    audio: ui.wantAudio,
    phone: ui.wantPhone,
    build: ui.wantBuild,
    serve: ui.wantServe,
  }
}
