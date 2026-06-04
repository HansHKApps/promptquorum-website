'use client'

import { useLang } from '@/hooks/useLang'

const PRIMARY = '#6750A4'
const SECONDARY = '#E8DEF8'
const TEXT = '#1C1B1F'

const LABELS: Record<string, { cloudTitle: string; paid: string; fast: string; dataCloud: string; localTitle: string; free: string; variable: string; private: string; ariaLabel: string; svgTitle: string; svgDesc: string }> = {
  en: { cloudTitle: '☁️ Cloud AI', paid: 'Paid (per request)', fast: 'Fast responses', dataCloud: 'Data in cloud', localTitle: '🖥️ Local LLM', free: 'Free (1x download)', variable: 'Variable by hardware', private: '100% private, offline', ariaLabel: 'Cloud AI vs Local LLM comparison: speed, cost, privacy', svgTitle: 'Cloud AI vs Local LLM Comparison', svgDesc: 'A split-panel diagram comparing cloud-based AI services (left) with local LLMs (right) across speed, cost, and privacy dimensions.' },
  de: { cloudTitle: '☁️ Cloud-KI', paid: 'Kostenpflichtig (pro Anfrage)', fast: 'Schnelle Antworten', dataCloud: 'Daten in der Cloud', localTitle: '🖥️ Lokales LLM', free: 'Kostenlos (1x Download)', variable: 'Variabel je Hardware', private: '100% privat, offline', ariaLabel: 'Cloud-KI vs Lokales LLM: Geschwindigkeit, Kosten, Datenschutz', svgTitle: 'Cloud-KI vs Lokales LLM Vergleich', svgDesc: 'Geteiltes Diagramm: Cloud-KI-Dienste (links) vs. lokale LLMs (rechts) nach Geschwindigkeit, Kosten und Datenschutz.' },
  fr: { cloudTitle: '☁️ IA Cloud', paid: 'Payant (par requête)', fast: 'Réponses rapides', dataCloud: 'Données dans le cloud', localTitle: '🖥️ LLM local', free: 'Gratuit (1 téléchargement)', variable: 'Variable selon matériel', private: '100% privé, hors ligne', ariaLabel: 'IA cloud vs LLM local : vitesse, coût, confidentialité', svgTitle: 'Comparaison IA cloud vs LLM local', svgDesc: 'Diagramme comparant les services IA cloud (gauche) aux LLMs locaux (droite) en termes de vitesse, coût et confidentialité.' },
  ja: { cloudTitle: '☁️ クラウドAI', paid: '有料（リクエスト単位）', fast: '高速な応答', dataCloud: 'クラウドにデータ保存', localTitle: '🖥️ ローカルLLM', free: '無料（1回ダウンロード）', variable: 'ハードウェアによって異なる', private: '100%プライベート・オフライン', ariaLabel: 'クラウドAIとローカルLLMの比較：速度・コスト・プライバシー', svgTitle: 'クラウドAI対ローカルLLM比較', svgDesc: 'クラウドAIサービス（左）とローカルLLM（右）を速度・コスト・プライバシーで比較した分割図。' },
  zh: { cloudTitle: '☁️ 云端AI', paid: '付费（按请求计费）', fast: '快速响应', dataCloud: '数据存于云端', localTitle: '🖥️ 本地LLM', free: '免费（一次下载）', variable: '速度因硬件而异', private: '100%私密・离线', ariaLabel: '云端AI与本地LLM对比：速度、成本、隐私', svgTitle: '云端AI对比本地LLM', svgDesc: '对比云端AI服务（左）与本地LLM（右）在速度、成本和隐私方面的分割图。' },
  es: { cloudTitle: '☁️ IA en la nube', paid: 'De pago (por solicitud)', fast: 'Respuestas rápidas', dataCloud: 'Datos en la nube', localTitle: '🖥️ LLM local', free: 'Gratis (1 descarga)', variable: 'Variable según hardware', private: '100% privado, offline', ariaLabel: 'IA en la nube vs LLM local: velocidad, coste, privacidad', svgTitle: 'Comparación IA cloud vs LLM local', svgDesc: 'Diagrama comparativo de servicios IA cloud (izquierda) con LLMs locales (derecha) en velocidad, coste y privacidad.' },
  pt: { cloudTitle: '☁️ IA na Nuvem', paid: 'Pago (por requisição)', fast: 'Respostas rápidas', dataCloud: 'Dados na nuvem', localTitle: '🖥️ LLM Local', free: 'Grátis (1 download)', variable: 'Variável por hardware', private: '100% privado, offline', ariaLabel: 'IA na nuvem vs LLM local: velocidade, custo, privacidade', svgTitle: 'Comparação IA na Nuvem vs LLM Local', svgDesc: 'Diagrama comparando serviços de IA na nuvem (esquerda) com LLMs locais (direita) em velocidade, custo e privacidade.' },
}

export function LLMCloudVsLocal() {
  const rawLang = useLang()
  const t = LABELS[rawLang] ?? LABELS['en']
  return (
    <div className="flex justify-center my-8">
      <svg
        viewBox="0 0 900 300"
        className="w-full max-w-2xl h-auto"
        role="img"
        aria-label={t.ariaLabel}
      >
        <title>{t.svgTitle}</title>
        <desc>{t.svgDesc}</desc>

        {/* Left panel: Cloud */}
        <rect x="50" y="40" width="350" height="240" rx="10" fill={SECONDARY} opacity="0.3" stroke={PRIMARY} strokeWidth="2" />

        <text x="225" y="70" textAnchor="middle" fontSize="16" fontWeight="700" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-ui">
          {t.cloudTitle}
        </text>

        {/* Cloud features */}
        <g>
          {/* Cost: $ */}
          <circle cx="100" cy="110" r="20" fill={PRIMARY} opacity="0.2" />
          <text x="100" y="118" textAnchor="middle" fontSize="24">
            💰
          </text>
          <text x="150" y="120" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
            {t.paid}
          </text>

          {/* Speed: fast */}
          <circle cx="100" cy="160" r="20" fill={PRIMARY} opacity="0.2" />
          <text x="100" y="168" textAnchor="middle" fontSize="24">
            ⚡
          </text>
          <text x="150" y="170" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
            {t.fast}
          </text>

          {/* Privacy: no lock */}
          <circle cx="100" cy="210" r="20" fill={PRIMARY} opacity="0.2" />
          <text x="100" y="218" textAnchor="middle" fontSize="24">
            📤
          </text>
          <text x="150" y="220" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
            {t.dataCloud}
          </text>
        </g>

        {/* Right panel: Local */}
        <rect x="500" y="40" width="350" height="240" rx="10" fill={SECONDARY} opacity="0.5" stroke={PRIMARY} strokeWidth="3" />

        <text x="675" y="70" textAnchor="middle" fontSize="16" fontWeight="700" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-us">
          {t.localTitle}
        </text>

        {/* Local features */}
        <g>
          {/* Cost: free */}
          <circle cx="550" cy="110" r="20" fill={PRIMARY} opacity="0.3" />
          <text x="550" y="118" textAnchor="middle" fontSize="24">
            🆓
          </text>
          <text x="600" y="120" fontSize="12" fontWeight="600" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-ui">
            {t.free}
          </text>

          {/* Speed: variable */}
          <circle cx="550" cy="160" r="20" fill={PRIMARY} opacity="0.3" />
          <text x="550" y="168" textAnchor="middle" fontSize="24">
            🎯
          </text>
          <text x="600" y="170" fontSize="12" fontWeight="600" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-ui">
            {t.variable}
          </text>

          {/* Privacy: lock */}
          <circle cx="550" cy="210" r="20" fill={PRIMARY} opacity="0.3" />
          <text x="550" y="218" textAnchor="middle" fontSize="24">
            🔒
          </text>
          <text x="600" y="220" fontSize="12" fontWeight="600" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-ui">
            {t.private}
          </text>
        </g>
      </svg>
    </div>
  )
}
