// Local AI App Directory — KServe (layer: model serving on Kubernetes)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'kserve',
  name: 'KServe',
  categories: ['api-servers', 'inference-engines'],
  interfaces: ['cli', 'library'],
  locality: 'local', // deploys on the user's own Kubernetes cluster/hardware — verified 2026-09-18
  platforms: ['linux'], // Kubernetes CRD-based platform, Linux clusters only — verified 2026-09-18
  worksWith: ['Kubernetes', 'Istio', 'Knative', 'vLLM', 'TensorRT'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // a Kubernetes serving/orchestration layer — the real hardware floor is set by the cluster nodes and models deployed, not a fixed tool attribute, verified 2026-09-18
  stars: 5952, // github.com/kserve/kserve, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/kserve/kserve',
  tagline: {
    en: 'Self-hosted, standardized model-serving platform for deploying generative and predictive AI models at scale on Kubernetes',
    de: 'Selbst gehostete, standardisierte Modell-Serving-Plattform zum skalierten Bereitstellen generativer und prädiktiver KI-Modelle auf Kubernetes',
    fr: "Plateforme de service de modèles standardisée et auto-hébergée pour déployer à l'échelle des modèles d'IA générative et prédictive sur Kubernetes",
    ja: 'Kubernetes上で生成AI・予測AIモデルをスケールさせて配信する、標準化されたセルフホスト型モデルサービングプラットフォーム',
    zh: '自托管、标准化的模型服务平台，可在Kubernetes上大规模部署生成式与预测式AI模型',
    es: 'Plataforma autoalojada y estandarizada de servicio de modelos para desplegar a escala modelos de IA generativa y predictiva en Kubernetes',
    pt: 'Plataforma auto-hospedada e padronizada de serving de modelos para implantar em escala modelos de IA generativa e preditiva no Kubernetes',
    ar: 'منصة مستضافة ذاتيًا وموحدة لخدمة النماذج، لنشر نماذج الذكاء الاصطناعي التوليدية والتنبؤية على نطاق واسع باستخدام Kubernetes',
    ko: 'Kubernetes 위에서 생성형 및 예측형 AI 모델을 대규모로 배포하는 표준화된 셀프호스팅 모델 서빙 플랫폼',
  },
  reviewSlug: 'kserve-review', // dedicated PromptQuorum review — added 2026-09-19
  lastVerifiedDate: '2026-09-18',
}
