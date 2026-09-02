/**
 * Shared constants, copy, and tracking for the "set PromptQuorum as a Google
 * preferred source" flow. Three surfaces point users at this same action —
 * GooglePreferredSourcesCard (30s auto-popup), Footer (persistent button),
 * and BetaFloatingCta (beta download flyout) — and all three funnel through
 * PreferredSourceConfirmDialog so they share one event taxonomy under the
 * `pref_source_*` prefix, distinguished only by `surface`.
 */
import type { Language } from '@/lib/geo-schema'

export const PREFERRED_SOURCE_URL = 'https://google.com/preferences/source?q=promptquorum.com'

export type PrefSourceSurface = 'popup_card' | 'footer' | 'beta_fab'

type ConfirmCopy = {
  confirmTitle: string
  confirmBody: string
  confirmCta: string
  confirmDismiss: string
}

export const PREFERRED_SOURCE_CONFIRM_COPY: Record<Language, ConfirmCopy> = {
  en: {
    confirmTitle: 'Set PromptQuorum as a preferred source?',
    confirmBody: "This will open Google's settings page where you can confirm adding PromptQuorum to your preferred sources. Your future searches will prioritize our content.",
    confirmCta: 'Continue to Google',
    confirmDismiss: 'Cancel',
  },
  de: {
    confirmTitle: 'PromptQuorum als bevorzugte Quelle festlegen?',
    confirmBody: 'Dies öffnet Googles Einstellungsseite, auf der Sie PromptQuorum zu Ihren bevorzugten Quellen hinzufügen können. Zukünftige Suchen werden unsere Inhalte priorisieren.',
    confirmCta: 'Zu Google weiterleiten',
    confirmDismiss: 'Abbrechen',
  },
  fr: {
    confirmTitle: 'Définir PromptQuorum comme source préférée?',
    confirmBody: "Ceci ouvrira la page de paramètres de Google où vous pourrez confirmer l'ajout de PromptQuorum à vos sources préférées. Vos futures recherches prioriseront notre contenu.",
    confirmCta: 'Continuer vers Google',
    confirmDismiss: 'Annuler',
  },
  es: {
    confirmTitle: '¿Establecer PromptQuorum como fuente preferida?',
    confirmBody: 'Esto abrirá la página de configuración de Google donde puedes confirmar agregar PromptQuorum a tus fuentes preferidas. Tus futuras búsquedas priorizarán nuestro contenido.',
    confirmCta: 'Continuar a Google',
    confirmDismiss: 'Cancelar',
  },
  pt: {
    confirmTitle: 'Definir PromptQuorum como fonte preferida?',
    confirmBody: 'Isso abrirá a página de configurações do Google onde você pode confirmar adicionar PromptQuorum às suas fontes preferidas. Suas futuras buscas priorizarão nosso conteúdo.',
    confirmCta: 'Continuar para Google',
    confirmDismiss: 'Cancelar',
  },
  ja: {
    confirmTitle: 'PromptQuorum を優先ソースに設定しますか?',
    confirmBody: 'Google の設定ページが開きます。ここで PromptQuorum を優先ソースに追加することを確認できます。今後の検索では当社のコンテンツが優先されます。',
    confirmCta: 'Google に進む',
    confirmDismiss: 'キャンセル',
  },
  zh: {
    confirmTitle: '将 PromptQuorum 设为优先来源?',
    confirmBody: '这将打开 Google 设置页面，您可以在其中确认将 PromptQuorum 添加到您的优先来源。您的未来搜索将优先显示我们的内容。',
    confirmCta: '继续前往 Google',
    confirmDismiss: '取消',
  },
  ko: {
    confirmTitle: 'PromptQuorum을 선호 소스로 설정하시겠습니까?',
    confirmBody: 'Google 설정 페이지가 열리며, 여기서 PromptQuorum을 선호 소스에 추가하는 것을 확인할 수 있습니다. 향후 검색 결과에서 당사의 콘텐츠가 우선 표시됩니다.',
    confirmCta: 'Google로 계속',
    confirmDismiss: '취소',
  },
  ar: {
    confirmTitle: 'تعيين PromptQuorum كمصدر مفضل؟',
    confirmBody: 'سيؤدي هذا إلى فتح صفحة إعدادات Google حيث يمكنك تأكيد إضافة PromptQuorum إلى مصادرك المفضلة. ستعطي عمليات البحث المستقبلية الأولوية لمحتوانا.',
    confirmCta: 'المتابعة إلى Google',
    confirmDismiss: 'إلغاء',
  },
}

type PrefSourceEvent =
  | 'shown'
  | 'dismissed'
  | 'cta_clicked'
  | 'confirm_shown'
  | 'confirmed'
  | 'cancelled'

/** Fires `pref_source_<event>` via Umami. Every call site passes `surface` so all
 * three entry points land in one funnel, filterable by origin. */
export function trackPrefSource(event: PrefSourceEvent, params: Record<string, unknown>) {
  try {
    window.umami?.track(`pref_source_${event}`, params)
  } catch {
    // silent
  }
}
