'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { llmThemes, type LLMTheme } from '@/lib/local-llms/themes'
import { COMING_SOON_SLUGS } from '@/lib/local-llms/comingSoon'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { LazySection } from './hub/LazySection'
import type { LLMHubData } from '@/lib/local-llms/hub-data'

const NEW_LABEL: Record<string, string> = { en: 'NEW', de: 'NEU', fr: 'NOUVEAU', ja: '新着', zh: '新', es: 'NUEVO', pt: 'NOVO', ar: 'جديد', ko: '새글' }
const UPDATED_LABEL: Record<string, string> = { en: 'UPDATED', de: 'AKTUALISIERT', fr: 'MIS À JOUR', ja: '更新', zh: '已更新', es: 'ACTUALIZADO', pt: 'ATUALIZADO', ar: 'محدث', ko: '업데이트' }

function navHref(path: string, lang: string) {
  if (lang === 'en') return path
  if (path === '/') return `/${lang}`
  return `/${lang}${path}`
}

function getImagePath(basePath: string, lang: string): string {
  const supportedLangs = ['es', 'de', 'fr', 'ja', 'zh', 'pt']
  if (!supportedLangs.includes(lang)) return basePath
  const dotIndex = basePath.lastIndexOf('.')
  return basePath.slice(0, dotIndex) + `-${lang}` + basePath.slice(dotIndex)
}

function renderDescription(text: string, lang: Language): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/)
    if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      const href = lang !== 'en' ? `/${lang}${linkMatch[2]}` : linkMatch[2]
      return <Link key={i} href={href} className="text-primary hover:underline">{linkMatch[1]}</Link>
    }
    return part
  })
}

const HUB_HERO_TITLE: Record<string, string> = {
  en: 'Best Local LLMs June 2026: Ollama, LM Studio, Hardware & VRAM Guide',
  de: 'Beste Lokale LLMs Juni 2026: Ollama, LM Studio, Hardware & VRAM Guide',
  fr: 'Meilleurs LLMs Locaux Juin 2026 : Ollama, LM Studio & Guide VRAM',
  ja: '2026年6月最高のローカルLLM：Ollama・LM Studio・VRAMガイド',
  zh: '2026年6月最佳本地LLM：Ollama、LM Studio与VRAM硬件指南',
  es: 'Mejores LLMs Locales Junio 2026: Ollama, LM Studio, Hardware y Guía de VRAM',
  pt: 'Melhores LLMs Locais Junho 2026: Ollama, LM Studio, Hardware e Guia de VRAM',
  ko: '2026년 6월 최고의 로컬 LLM: Ollama, LM Studio, 하드웨어 및 VRAM 가이드',
}

const HUB_HERO_DESC: Record<string, string> = {
  en: 'Local LLMs are large language models that run entirely on your own computer — no internet connection, no API fees, and no data leaving your machine. If you are just starting, install Ollama and run Llama 3.2 3B or Qwen3 4B on 8 GB of RAM in under 10 minutes; the guides below rank the best models, GPUs, and tools for every budget as of June 2026.',
  de: 'Lokale LLMs sind große Sprachmodelle, die vollständig auf Ihrem eigenen Computer laufen — ohne Internetverbindung, ohne API-Gebühren und ohne dass Daten Ihr Gerät verlassen. Für den Einstieg installieren Sie Ollama und führen Llama 3.2 3B oder Qwen3 4B mit 8 GB RAM in unter 10 Minuten aus; die folgenden Leitfäden bewerten die besten Modelle, GPUs und Tools für jedes Budget (Stand Juni 2026).',
  fr: 'Les LLMs locaux sont de grands modèles de langage qui s\'exécutent entièrement sur votre propre ordinateur — sans connexion Internet, sans frais d\'API et sans qu\'aucune donnée ne quitte votre machine. Pour débuter, installez Ollama et exécutez Llama 3.2 3B ou Qwen3 4B avec 8 Go de RAM en moins de 10 minutes ; les guides ci-dessous classent les meilleurs modèles, GPU et outils pour chaque budget (juin 2026).',
  ja: 'ローカルLLMとは、インターネット接続・API料金・データ送信なしで、自分のパソコン上だけで動作する大規模言語モデルです。初めての方は、Ollamaをインストールして8GBのRAMでLlama 3.2 3BまたはQwen3 4Bを10分以内に実行できます。以下のガイドでは、2026年6月時点であらゆる予算に最適なモデル・GPU・ツールをランク付けしています。',
  zh: '本地LLM是完全在你自己的电脑上运行的大语言模型——无需联网、没有API费用，数据也不会离开你的设备。新手只需安装Ollama，用8GB内存即可在10分钟内运行Llama 3.2 3B或Qwen3 4B；以下指南按2026年6月的情况，为各种预算评选最佳模型、GPU和工具。',
  es: 'Los LLMs locales son grandes modelos de lenguaje que se ejecutan por completo en tu propio ordenador, sin conexión a Internet, sin tarifas de API y sin que ningún dato salga de tu máquina. Si empiezas, instala Ollama y ejecuta Llama 3.2 3B o Qwen3 4B con 8 GB de RAM en menos de 10 minutos; las guías siguientes clasifican los mejores modelos, GPUs y herramientas para cada presupuesto a junio de 2026.',
  pt: 'Os LLMs locais são grandes modelos de linguagem que rodam inteiramente no seu próprio computador — sem conexão à Internet, sem taxas de API e sem que nenhum dado saia da sua máquina. Se está a começar, instale o Ollama e rode o Llama 3.2 3B ou o Qwen3 4B com 8 GB de RAM em menos de 10 minutos; os guias abaixo classificam os melhores modelos, GPUs e ferramentas para cada orçamento em junho de 2026.',
  ko: '로컬 LLM은 인터넷 연결, API 요금, 데이터 전송 없이 전적으로 자신의 컴퓨터에서 실행되는 대규모 언어 모델입니다. 처음이라면 Ollama를 설치하고 8GB RAM으로 Llama 3.2 3B 또는 Qwen3 4B를 10분 이내에 실행할 수 있습니다. 아래 가이드는 2026년 6월 기준으로 모든 예산에 맞는 최고의 모델, GPU, 도구를 정리합니다.',
}

const HUB_START_HERE_TITLE: Record<string, string> = {
  en: 'Start Here: 5 Guides by What You Want to Do',
  de: 'Hier starten: 5 Guides nach Ihrem Ziel',
  fr: 'Commencez ici : 5 guides selon votre objectif',
  ja: 'ここから始める：目的別5つのガイド',
  zh: '从这里开始：按需求分类的5篇指南',
  es: 'Empieza aquí: 5 guías según lo que quieras hacer',
  pt: 'Comece aqui: 5 guias conforme o seu objetivo',
  ko: '여기서 시작: 목적별 5가지 가이드',
}

const HUB_START_HERE_ITEMS: Record<string, { emoji: string; label: string; desc: string; href: string }[]> = {
  en: [
    { emoji: '🚀', label: 'New to local LLMs?', desc: 'Install Ollama and run your first model in 10 minutes.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'Which model is best?', desc: 'Top open-source models on Ollama ranked (Qwen3, Llama 4, Gemma 3).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Coding with local LLMs', desc: 'The strongest local models for code generation and review.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: 'What hardware do I need?', desc: 'VRAM and RAM required for each model size, explained.', href: '/local-llms/local-llm-hardware-guide-2026' },
    { emoji: '💸', label: 'On a budget?', desc: 'Cheapest GPUs that run 7B–13B models smoothly.', href: '/local-llms/best-budget-gpus-local-llm' },
  ],
  de: [
    { emoji: '🚀', label: 'Neu bei lokalen LLMs?', desc: 'Ollama installieren und in 10 Minuten das erste Modell ausführen.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'Welches Modell ist das beste?', desc: 'Top-Open-Source-Modelle für Ollama im Ranking (Qwen3, Llama 4, Gemma 3).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Programmieren mit lokalen LLMs', desc: 'Die stärksten lokalen Modelle für Code-Generierung und Review.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: 'Welche Hardware brauche ich?', desc: 'VRAM und RAM je Modellgröße — verständlich erklärt.', href: '/local-llms/local-llm-hardware-guide-2026' },
    { emoji: '💸', label: 'Schmales Budget?', desc: 'Günstigste GPUs, die 7B–13B-Modelle flüssig ausführen.', href: '/local-llms/best-budget-gpus-local-llm' },
  ],
  fr: [
    { emoji: '🚀', label: 'Nouveau sur les LLMs locaux ?', desc: 'Installez Ollama et exécutez votre premier modèle en 10 minutes.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'Quel modèle choisir ?', desc: 'Les meilleurs modèles open source sur Ollama, classés (Qwen3, Llama 4, Gemma 3).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Coder avec des LLMs locaux', desc: 'Les modèles locaux les plus performants pour le code.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: 'Quel matériel faut-il ?', desc: 'VRAM et RAM nécessaires selon la taille du modèle, expliqués.', href: '/local-llms/local-llm-hardware-guide-2026' },
    { emoji: '💸', label: 'Petit budget ?', desc: 'Les GPU les moins chers qui font tourner les modèles 7B–13B.', href: '/local-llms/best-budget-gpus-local-llm' },
  ],
  ja: [
    { emoji: '🚀', label: 'ローカルLLMが初めて？', desc: 'Ollamaをインストールし、10分で最初のモデルを実行。', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'どのモデルが最適？', desc: 'Ollamaのおすすめオープンソースモデルをランキング（Qwen3・Llama 4・Gemma 3）。', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'ローカルLLMでコーディング', desc: 'コード生成・レビューに最も強いローカルモデル。', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: '必要なハードウェアは？', desc: 'モデルサイズ別に必要なVRAM・RAMを解説。', href: '/local-llms/local-llm-hardware-guide-2026' },
    { emoji: '💸', label: '予算重視？', desc: '7B〜13Bモデルを快適に動かせる最安GPU。', href: '/local-llms/best-budget-gpus-local-llm' },
  ],
  zh: [
    { emoji: '🚀', label: '第一次用本地LLM？', desc: '安装Ollama，10分钟内运行你的第一个模型。', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: '哪个模型最好？', desc: 'Ollama上的顶级开源模型排名（Qwen3、Llama 4、Gemma 3）。', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: '用本地LLM编程', desc: '代码生成与审查最强的本地模型。', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: '需要什么硬件？', desc: '按模型大小说明所需的VRAM和内存。', href: '/local-llms/local-llm-hardware-guide-2026' },
    { emoji: '💸', label: '预算有限？', desc: '能流畅运行7B–13B模型的最便宜显卡。', href: '/local-llms/best-budget-gpus-local-llm' },
  ],
  es: [
    { emoji: '🚀', label: '¿Nuevo en LLMs locales?', desc: 'Instala Ollama y ejecuta tu primer modelo en 10 minutos.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: '¿Qué modelo es el mejor?', desc: 'Mejores modelos open source en Ollama, clasificados (Qwen3, Llama 4, Gemma 3).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Programar con LLMs locales', desc: 'Los modelos locales más potentes para generar y revisar código.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: '¿Qué hardware necesito?', desc: 'VRAM y RAM necesarias según el tamaño del modelo, explicadas.', href: '/local-llms/local-llm-hardware-guide-2026' },
    { emoji: '💸', label: '¿Presupuesto ajustado?', desc: 'Las GPUs más baratas que ejecutan modelos 7B–13B con fluidez.', href: '/local-llms/best-budget-gpus-local-llm' },
  ],
  pt: [
    { emoji: '🚀', label: 'Novo em LLMs locais?', desc: 'Instale o Ollama e rode o seu primeiro modelo em 10 minutos.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'Qual modelo é o melhor?', desc: 'Melhores modelos open source no Ollama, classificados (Qwen3, Llama 4, Gemma 3).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Programar com LLMs locais', desc: 'Os modelos locais mais fortes para gerar e revisar código.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: 'De que hardware preciso?', desc: 'VRAM e RAM necessárias por tamanho de modelo, explicadas.', href: '/local-llms/local-llm-hardware-guide-2026' },
    { emoji: '💸', label: 'Orçamento apertado?', desc: 'As GPUs mais baratas que rodam modelos 7B–13B com fluidez.', href: '/local-llms/best-budget-gpus-local-llm' },
  ],
  ko: [
    { emoji: '🚀', label: '로컬 LLM이 처음인가요?', desc: 'Ollama를 설치하고 10분 안에 첫 모델을 실행하세요.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: '어떤 모델이 가장 좋나요?', desc: 'Ollama의 최고 오픈소스 모델 순위(Qwen3, Llama 4, Gemma 3).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: '로컬 LLM으로 코딩하기', desc: '코드 생성과 리뷰에 가장 강력한 로컬 모델.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: '어떤 하드웨어가 필요한가요?', desc: '모델 크기별로 필요한 VRAM과 RAM을 설명합니다.', href: '/local-llms/local-llm-hardware-guide-2026' },
    { emoji: '💸', label: '예산이 빠듯한가요?', desc: '7B–13B 모델을 원활하게 돌리는 가장 저렴한 GPU.', href: '/local-llms/best-budget-gpus-local-llm' },
  ],
}

const HUB_NEW_APRIL_HEADING: Record<string, string> = {
  en: 'New in May 2026',
  de: 'Neu im Mai 2026',
  fr: 'Nouveautés de mai 2026',
  ja: '2026年5月の新着情報',
  zh: '2026年5月新增内容',
  es: 'Novedades de mayo de 2026',
  pt: 'Novidades de maio de 2026',
  ko: '2026년 5월 신규 추가',
}

const HUB_NEW_APRIL_MODELS: Record<string, { name: string; pull: string; vram: string; note: string }[]> = {
  en: [
    { name: 'Llama 4 Scout 17B', pull: 'ollama pull llama4:scout', vram: '10 GB', note: 'Meta. Best overall quality on 12 GB VRAM' },
    { name: 'Qwen3 8B', pull: 'ollama pull qwen3:8b', vram: '5 GB', note: 'Alibaba. Top coding + multilingual, 8 GB GPU' },
    { name: 'Gemma 3 12B', pull: 'ollama pull gemma3:12b', vram: '8 GB', note: 'Google. Strong reasoning, runs on RTX 3060' },
    { name: 'DeepSeek-R2 8B', pull: 'ollama pull deepseek-r2:8b', vram: '5 GB', note: 'DeepSeek. Best for math and logic, 8 GB RAM' },
  ],
  de: [
    { name: 'Llama 4 Scout 17B', pull: 'ollama pull llama4:scout', vram: '10 GB', note: 'Meta. Beste Gesamtqualität auf 12 GB VRAM' },
    { name: 'Qwen3 8B', pull: 'ollama pull qwen3:8b', vram: '5 GB', note: 'Alibaba. Top Coding + mehrsprachig, 8 GB GPU' },
    { name: 'Gemma 3 12B', pull: 'ollama pull gemma3:12b', vram: '8 GB', note: 'Google. Starkes Reasoning, läuft auf RTX 3060' },
    { name: 'DeepSeek-R2 8B', pull: 'ollama pull deepseek-r2:8b', vram: '5 GB', note: 'DeepSeek. Beste für Mathe und Logik, 8 GB RAM' },
  ],
  fr: [
    { name: 'Llama 4 Scout 17B', pull: 'ollama pull llama4:scout', vram: '10 Go', note: 'Meta. Meilleure qualité globale sur 12 Go VRAM' },
    { name: 'Qwen3 8B', pull: 'ollama pull qwen3:8b', vram: '5 Go', note: 'Alibaba. Top code + multilingue, GPU 8 Go' },
    { name: 'Gemma 3 12B', pull: 'ollama pull gemma3:12b', vram: '8 Go', note: 'Google. Raisonnement puissant, compatible RTX 3060' },
    { name: 'DeepSeek-R2 8B', pull: 'ollama pull deepseek-r2:8b', vram: '5 Go', note: 'DeepSeek. Meilleur pour les maths et la logique, 8 Go RAM' },
  ],
  ja: [
    { name: 'Llama 4 Scout 17B', pull: 'ollama pull llama4:scout', vram: '10 GB', note: 'Meta。12 GB VRAMで最高の総合品質' },
    { name: 'Qwen3 8B', pull: 'ollama pull qwen3:8b', vram: '5 GB', note: 'Alibaba。コーディング+多言語トップ、8 GB GPU' },
    { name: 'Gemma 3 12B', pull: 'ollama pull gemma3:12b', vram: '8 GB', note: 'Google。強力な推論能力、RTX 3060で動作' },
    { name: 'DeepSeek-R2 8B', pull: 'ollama pull deepseek-r2:8b', vram: '5 GB', note: 'DeepSeek。数学・論理最強、8 GB RAM' },
  ],
  zh: [
    { name: 'Llama 4 Scout 17B', pull: 'ollama pull llama4:scout', vram: '10 GB', note: 'Meta。12 GB VRAM最佳综合质量' },
    { name: 'Qwen3 8B', pull: 'ollama pull qwen3:8b', vram: '5 GB', note: 'Alibaba。顶级代码+多语言，8 GB GPU' },
    { name: 'Gemma 3 12B', pull: 'ollama pull gemma3:12b', vram: '8 GB', note: 'Google。强大推理能力，RTX 3060可运行' },
    { name: 'DeepSeek-R2 8B', pull: 'ollama pull deepseek-r2:8b', vram: '5 GB', note: 'DeepSeek。数学逻辑最强，8 GB RAM' },
  ],
  es: [
    { name: 'Llama 4 Scout 17B', pull: 'ollama pull llama4:scout', vram: '10 GB', note: 'Meta. Mejor calidad global con 12 GB VRAM' },
    { name: 'Qwen3 8B', pull: 'ollama pull qwen3:8b', vram: '5 GB', note: 'Alibaba. Top código + multilingüe, GPU 8 GB' },
    { name: 'Gemma 3 12B', pull: 'ollama pull gemma3:12b', vram: '8 GB', note: 'Google. Razonamiento potente, compatible RTX 3060' },
    { name: 'DeepSeek-R2 8B', pull: 'ollama pull deepseek-r2:8b', vram: '5 GB', note: 'DeepSeek. Mejor para matemáticas y lógica, 8 GB RAM' },
  ],
  pt: [
    { name: 'Llama 4 Scout 17B', pull: 'ollama pull llama4:scout', vram: '10 GB', note: 'Meta. Melhor qualidade geral em 12 GB VRAM' },
    { name: 'Qwen3 8B', pull: 'ollama pull qwen3:8b', vram: '5 GB', note: 'Alibaba. Top em código + multilíngue, GPU de 8 GB' },
    { name: 'Gemma 3 12B', pull: 'ollama pull gemma3:12b', vram: '8 GB', note: 'Google. Raciocínio forte, roda na RTX 3060' },
    { name: 'DeepSeek-R2 8B', pull: 'ollama pull deepseek-r2:8b', vram: '5 GB', note: 'DeepSeek. Melhor para matemática e lógica, 8 GB RAM' },
  ],
  ko: [
    { name: 'Llama 4 Scout 17B', pull: 'ollama pull llama4:scout', vram: '10 GB', note: 'Meta. 12 GB VRAM에서 최고의 전반적 품질' },
    { name: 'Qwen3 8B', pull: 'ollama pull qwen3:8b', vram: '5 GB', note: 'Alibaba. 최고 코딩 + 다국어, 8 GB GPU' },
    { name: 'Gemma 3 12B', pull: 'ollama pull gemma3:12b', vram: '8 GB', note: 'Google. 강력한 추론, RTX 3060에서 실행' },
    { name: 'DeepSeek-R2 8B', pull: 'ollama pull deepseek-r2:8b', vram: '5 GB', note: 'DeepSeek. 수학 및 논리에 최고, 8 GB RAM' },
  ],
}

const HUB_NEW_APRIL_COLS: Record<string, string[]> = {
  en: ['Model', 'Pull Command', 'VRAM', 'Notes'],
  de: ['Modell', 'Pull-Befehl', 'VRAM', 'Hinweise'],
  fr: ['Modèle', 'Commande pull', 'VRAM', 'Notes'],
  ja: ['モデル', 'Pullコマンド', 'VRAM', 'メモ'],
  zh: ['模型', 'Pull命令', 'VRAM', '备注'],
  es: ['Modelo', 'Comando pull', 'VRAM', 'Notas'],
  pt: ['Modelo', 'Comando pull', 'VRAM', 'Notas'],
  ko: ['모델', 'Pull 명령어', 'VRAM', '비고'],
}

const HUB_COMPARISON_HEADING: Record<string, string> = {
  en: 'Ollama vs LM Studio vs Jan.ai: Which Should You Use?',
  de: 'Ollama vs LM Studio vs Jan.ai: Was sollten Sie verwenden?',
  fr: 'Ollama vs LM Studio vs Jan.ai : lequel utiliser ?',
  ja: 'Ollama vs LM Studio vs Jan.ai：どれを使うべきか？',
  zh: 'Ollama vs LM Studio vs Jan.ai：该用哪个？',
  es: 'Ollama vs LM Studio vs Jan.ai: ¿Cuál deberías usar?',
  pt: 'Ollama vs LM Studio vs Jan.ai: Qual você deve usar?',
  ko: 'Ollama vs LM Studio vs Jan.ai: 무엇을 사용해야 하나요?',
}

const HUB_COMPARISON_ROWS: Record<string, { feature: string; ollama: string; lmstudio: string; janai: string }[]> = {
  en: [
    { feature: 'Interface', ollama: 'Terminal (CLI)', lmstudio: 'Desktop GUI', janai: 'Desktop GUI + chat' },
    { feature: 'API endpoint', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Model browser', ollama: 'CLI only', lmstudio: 'Built-in', janai: 'Built-in' },
    { feature: 'Best for', ollama: 'Developers, automation', lmstudio: 'Beginners, GUI users', janai: 'Privacy-first chat' },
    { feature: 'Setup time', ollama: '2 min', lmstudio: '5 min', janai: '5 min' },
  ],
  de: [
    { feature: 'Oberfläche', ollama: 'Terminal (CLI)', lmstudio: 'Desktop-GUI', janai: 'Desktop-GUI + Chat' },
    { feature: 'API-Endpunkt', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Modell-Browser', ollama: 'Nur CLI', lmstudio: 'Eingebaut', janai: 'Eingebaut' },
    { feature: 'Geeignet für', ollama: 'Entwickler, Automatisierung', lmstudio: 'Einsteiger, GUI-Nutzer', janai: 'Privacy-first Chat' },
    { feature: 'Einrichtungszeit', ollama: '2 Min', lmstudio: '5 Min', janai: '5 Min' },
  ],
  fr: [
    { feature: 'Interface', ollama: 'Terminal (CLI)', lmstudio: 'GUI bureau', janai: 'GUI bureau + chat' },
    { feature: 'Endpoint API', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Navigateur modèles', ollama: 'CLI uniquement', lmstudio: 'Intégré', janai: 'Intégré' },
    { feature: 'Idéal pour', ollama: 'Développeurs, automation', lmstudio: 'Débutants, utilisateurs GUI', janai: 'Chat axé confidentialité' },
    { feature: 'Temps de setup', ollama: '2 min', lmstudio: '5 min', janai: '5 min' },
  ],
  ja: [
    { feature: 'インターフェース', ollama: 'ターミナル（CLI）', lmstudio: 'デスクトップGUI', janai: 'GUI＋チャット' },
    { feature: 'APIエンドポイント', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'モデルブラウザ', ollama: 'CLIのみ', lmstudio: '内蔵', janai: '内蔵' },
    { feature: '最適な用途', ollama: '開発者・自動化', lmstudio: '初心者・GUI利用者', janai: 'プライバシー重視チャット' },
    { feature: 'セットアップ時間', ollama: '2分', lmstudio: '5分', janai: '5分' },
  ],
  zh: [
    { feature: '界面', ollama: '终端（CLI）', lmstudio: '桌面GUI', janai: 'GUI + 聊天' },
    { feature: 'API端点', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: '模型浏览器', ollama: '仅CLI', lmstudio: '内置', janai: '内置' },
    { feature: '最适合', ollama: '开发者、自动化', lmstudio: '初学者、GUI用户', janai: '隐私优先聊天' },
    { feature: '设置时间', ollama: '2分钟', lmstudio: '5分钟', janai: '5分钟' },
  ],
  es: [
    { feature: 'Interfaz', ollama: 'Terminal (CLI)', lmstudio: 'GUI de escritorio', janai: 'GUI escritorio + chat' },
    { feature: 'Endpoint API', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Explorador de modelos', ollama: 'Solo CLI', lmstudio: 'Integrado', janai: 'Integrado' },
    { feature: 'Ideal para', ollama: 'Desarrolladores, automatización', lmstudio: 'Principiantes, usuarios GUI', janai: 'Chat enfocado en privacidad' },
    { feature: 'Tiempo de configuración', ollama: '2 min', lmstudio: '5 min', janai: '5 min' },
  ],
  pt: [
    { feature: 'Interface', ollama: 'Terminal (CLI)', lmstudio: 'GUI desktop', janai: 'GUI desktop + chat' },
    { feature: 'Endpoint da API', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Navegador de modelos', ollama: 'Apenas CLI', lmstudio: 'Integrado', janai: 'Integrado' },
    { feature: 'Ideal para', ollama: 'Desenvolvedores, automação', lmstudio: 'Iniciantes, usuários de GUI', janai: 'Chat com foco em privacidade' },
    { feature: 'Tempo de configuração', ollama: '2 min', lmstudio: '5 min', janai: '5 min' },
  ],
  ko: [
    { feature: '인터페이스', ollama: '터미널 (CLI)', lmstudio: '데스크탑 GUI', janai: '데스크탑 GUI + 채팅' },
    { feature: 'API 엔드포인트', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: '모델 브라우저', ollama: 'CLI 전용', lmstudio: '내장', janai: '내장' },
    { feature: '최적 용도', ollama: '개발자, 자동화', lmstudio: '초보자, GUI 사용자', janai: '개인 정보 보호 우선 채팅' },
    { feature: '설정 시간', ollama: '2분', lmstudio: '5분', janai: '5분' },
  ],
}

const HUB_COMPARISON_COLS: Record<string, string[]> = {
  en: ['Feature', 'Ollama', 'LM Studio', 'Jan.ai'],
  de: ['Merkmal', 'Ollama', 'LM Studio', 'Jan.ai'],
  fr: ['Fonctionnalité', 'Ollama', 'LM Studio', 'Jan.ai'],
  ja: ['機能', 'Ollama', 'LM Studio', 'Jan.ai'],
  zh: ['功能', 'Ollama', 'LM Studio', 'Jan.ai'],
  es: ['Característica', 'Ollama', 'LM Studio', 'Jan.ai'],
  pt: ['Recurso', 'Ollama', 'LM Studio', 'Jan.ai'],
  ko: ['기능', 'Ollama', 'LM Studio', 'Jan.ai'],
}

const HUB_CTA_TEXT: Record<string, string> = {
  en: 'PromptQuorum connects to your local LLM (Ollama, LM Studio, Jan AI) and dispatches your prompt to 25+ cloud models simultaneously — compare local vs cloud results in one view.',
  de: 'PromptQuorum verbindet sich mit Ihrem lokalen LLM (Ollama, LM Studio, Jan AI) und sendet Ihren Prompt gleichzeitig an 25+ Cloud-Modelle — lokale vs. Cloud-Ergebnisse in einer Ansicht.',
  fr: 'PromptQuorum se connecte à votre LLM local (Ollama, LM Studio, Jan AI) et envoie votre prompt simultanément à plus de 25 modèles cloud — comparez les résultats locaux vs cloud en une vue.',
  ja: 'PromptQuorumはあなたのローカルLLM（Ollama、LM Studio、Jan AI）に接続し、プロンプトを25以上のクラウドモデルに同時に送信します。ローカルとクラウドの結果を一画面で比較できます。',
  zh: 'PromptQuorum连接到您的本地LLM（Ollama、LM Studio、Jan AI），并同时将提示词发送给25+个云模型——在一个视图中比较本地与云端结果。',
  es: 'PromptQuorum se conecta a tu LLM local (Ollama, LM Studio, Jan AI) y envía tu prompt simultáneamente a más de 25 modelos cloud — compara resultados locales vs cloud en una sola vista.',
  pt: 'O PromptQuorum se conecta ao seu LLM local (Ollama, LM Studio, Jan AI) e envia seu prompt simultaneamente para mais de 25 modelos na cloud — compare os resultados locais vs cloud em uma única tela.',
  ko: 'PromptQuorum은 귀하의 로컬 LLM(Ollama, LM Studio, Jan AI)에 연결하여 프롬프트를 25개 이상의 클라우드 모델에 동시에 전송합니다. 로컬과 클라우드 결과를 한 화면에서 비교하세요.',
}

const HUB_CTA_BUTTON: Record<string, string> = {
  en: 'Try PromptQuorum free →',
  de: 'PromptQuorum kostenlos testen →',
  fr: 'Essayer PromptQuorum gratuitement →',
  ja: 'PromptQuorumを無料で試す →',
  zh: '免费试用PromptQuorum →',
  es: 'Probar PromptQuorum gratis →',
  pt: 'Experimente o PromptQuorum grátis →',
  ko: 'PromptQuorum 무료로 사용해 보기 →',
}

const HUB_NAV_HOME: Record<string, string> = {
  en: '← Home', de: '← Startseite', fr: '← Accueil', ja: '← ホーム', zh: '← 主页', es: '← Inicio', pt: '← Início', ko: '← 홈',
}

const THEME_LABELS: Record<string, Record<string, string>> = {
  'getting-started': {
    en: 'Getting Started: How Do You Run Your First Local LLM?',
    de: 'Erste Schritte: Wie starten Sie Ihr erstes lokales LLM?',
    fr: 'Premiers pas : Comment exécuter votre premier LLM local ?',
    ja: 'はじめに：最初のローカルLLMをどう実行するか？',
    zh: '入门：如何运行您的第一个本地LLM？',
    es: 'Primeros pasos: ¿Cómo ejecutar tu primer LLM local?',
    pt: 'Primeiros passos: Como executar seu primeiro LLM local?',
    ko: '시작하기: 첫 번째 로컬 LLM을 어떻게 실행하나요?',
  },
  'best-models': {
    en: 'Models by Use Case: Which Local LLM Should You Actually Use?',
    de: 'Modelle nach Anwendungsfall: Welches lokale LLM sollten Sie wirklich verwenden?',
    fr: 'Modèles par cas d\'usage : Quel LLM local devriez-vous vraiment utiliser ?',
    ja: 'ユースケース別モデル：実際にどのローカルLLMを使うべきか？',
    zh: '按用例分类的模型：您实际上应该使用哪个本地LLM？',
    es: 'Modelos por caso de uso: ¿Qué LLM local deberías usar?',
    pt: 'Modelos por caso de uso: Qual LLM local você deve realmente usar?',
    ko: '사용 사례별 모델: 실제로 어떤 로컬 LLM을 사용해야 하나요?',
  },
  'tools-interfaces': {
    en: 'Tools & Interfaces: Which Software Gets You Running Fastest?',
    de: 'Tools & Interfaces: Welche Software bringt Sie am schnellsten zum Start?',
    fr: 'Outils et interfaces : Quel logiciel vous fait démarrer le plus vite ?',
    ja: 'ツールとインターフェース：どのソフトウェアが最も速く起動できるか？',
    zh: '工具与界面：哪款软件让您启动最快？',
    es: 'Herramientas e interfaces: ¿Qué software te pone en marcha más rápido?',
    pt: 'Ferramentas e interfaces: Qual software coloca você em funcionamento mais rápido?',
    ko: '도구 및 인터페이스: 어떤 소프트웨어가 가장 빠르게 시작할 수 있나요?',
  },
  'hardware-performance': {
    en: 'Hardware & Performance: What Do You Actually Need to Run Local LLMs?',
    de: 'Hardware & Leistung: Was brauchen Sie wirklich für lokale LLMs?',
    fr: 'Matériel et performances : De quoi avez-vous vraiment besoin pour les LLMs locaux ?',
    ja: 'ハードウェアとパフォーマンス：ローカルLLMに本当に必要なものは？',
    zh: '硬件与性能：运行本地LLM您真正需要什么？',
    es: 'Hardware y rendimiento: ¿Qué necesitas realmente para LLMs locales?',
    pt: 'Hardware e desempenho: O que você realmente precisa para executar LLMs locais?',
    ko: '하드웨어 및 성능: 로컬 LLM 실행에 실제로 필요한 것은 무엇인가요?',
  },
  'advanced-techniques': {
    en: 'Advanced Techniques: How Do You Go Beyond Basic Chat?',
    de: 'Fortgeschrittene Techniken: Wie gehen Sie über einfachen Chat hinaus?',
    fr: 'Techniques avancées : Comment aller au-delà du chat de base ?',
    ja: '高度なテクニック：基本的なチャット以上のことをどうするか？',
    zh: '高级技术：如何超越基本聊天？',
    es: 'Técnicas avanzadas: ¿Cómo ir más allá del chat básico?',
    pt: 'Técnicas avançadas: Como ir além do chat básico?',
    ko: '고급 기법: 기본 채팅을 넘어 어떻게 활용하나요?',
  },
  enterprise: {
    en: 'Enterprise: How Do Organizations Deploy Local LLMs at Scale?',
    de: 'Enterprise: Wie setzen Organisationen lokale LLMs im großen Maßstab ein?',
    fr: 'Entreprise : Comment les organisations déploient-elles des LLMs locaux à grande échelle ?',
    ja: 'エンタープライズ：組織はローカルLLMをどのようにスケールデプロイするか？',
    zh: '企业：组织如何大规模部署本地LLM？',
    es: 'Empresas: ¿Cómo despliegan organizaciones LLMs locales a escala?',
    pt: 'Enterprise: Como as organizações implantam LLMs locais em escala?',
    ko: '엔터프라이즈: 조직에서 로컬 LLM을 대규모로 배포하는 방법은?',
  },
  'gpu-buying-guides': {
    en: 'GPU Buying Guides: Which GPU Should You Buy for Local LLMs?',
    de: 'GPU-Kaufratgeber: Welche GPU sollten Sie für lokale LLMs kaufen?',
    fr: 'Guides d\'achat de GPU : Quelle GPU devriez-vous acheter pour les LLMs locaux ?',
    ja: 'GPU購入ガイド：ローカルLLM用にどのGPUを購入すべきか？',
    zh: 'GPU购买指南：您应该为本地LLM购买哪个GPU？',
    es: 'Guías de compra de GPU: ¿Qué GPU comprar para LLMs locales?',
    pt: 'Guias de compra de GPU: Qual GPU você deve comprar para LLMs locais?',
    ko: 'GPU 구매 가이드: 로컬 LLM용으로 어떤 GPU를 구매해야 하나요?',
  },
  'hardware-setups': {
    en: 'Hardware Setups: What Computer Do You Need for Local LLMs?',
    de: 'Hardware-Setups: Welchen Computer brauchen Sie für lokale LLMs?',
    fr: 'Configurations matérielles : Quel ordinateur avez-vous besoin pour les LLMs locaux ?',
    ja: 'ハードウェアセットアップ：ローカルLLM用にどのコンピュータが必要か？',
    zh: '硬件设置：为本地LLM您需要什么计算机？',
    es: 'Configuraciones de hardware: ¿Qué equipo necesitas para LLMs locales?',
    pt: 'Configurações de hardware: Qual computador você precisa para LLMs locais?',
    ko: '하드웨어 설정: 로컬 LLM을 위해 어떤 컴퓨터가 필요한가요?',
  },
  'privacy-business': {
    en: 'Privacy & Business: How Do You Secure Local LLMs for Organizations?',
    de: 'Datenschutz & Unternehmen: Wie sichern Sie lokale LLMs für Organisationen?',
    fr: 'Confidentialité & Entreprise : Comment sécuriser les LLMs locaux pour les organisations ?',
    ja: 'プライバシーとビジネス：組織向けにローカルLLMをどのように保護するか？',
    zh: '隐私与业务：您如何为组织保护本地LLM？',
    es: 'Privacidad y empresa: ¿Cómo asegurar LLMs locales para organizaciones?',
    pt: 'Privacidade e negócios: Como proteger LLMs locais para organizações?',
    ko: '개인 정보 보호 및 비즈니스: 조직을 위해 로컬 LLM을 어떻게 보호하나요?',
  },
  'cost-comparisons': {
    en: 'Cost & Comparisons: Local vs Cloud vs Subscriptions—What\'s Cheaper?',
    de: 'Kosten & Vergleiche: Lokal vs Cloud vs Abos—Was ist günstiger?',
    fr: 'Coûts et comparaisons : Local vs Cloud vs Abonnements—Qu\'est-ce qui est moins cher ?',
    ja: 'コストと比較：ローカルvsクラウドvsサブスク—どれが安いか？',
    zh: '成本与比较：本地vs云vs订阅—哪个更便宜？',
    es: 'Costes y comparativas: Local vs cloud vs suscripciones — ¿qué es más barato?',
    pt: 'Custos e comparativos: Local vs cloud vs assinaturas — o que é mais barato?',
    ko: '비용 및 비교: 로컬 vs 클라우드 vs 구독 — 어떤 것이 더 저렴한가요?',
  },
}

const THEME_DESCRIPTIONS: Record<string, Record<string, string>> = {
  'getting-started': {
    en: 'Zero-to-running in under 10 minutes. OS-specific installation guides, first-model walkthroughs, and a privacy-first setup checklist for beginners. Ollama installs with a single command on macOS, Windows, and Linux. For 8 GB RAM, start with Llama 3.2 3B (Q4, ~2 GB) using `ollama pull llama3.2:3b`.',
    de: 'Von null zu lauffähig in unter 10 Minuten. OS-spezifische Installationsleitfäden, erste Schritte mit Modellen und eine Datenschutz-erste Checkliste für Anfänger. Ollama installiert sich mit einem einzigen Befehl auf macOS, Windows und Linux. Bei 8 GB RAM beginnen Sie mit Llama 3.2 3B (Q4, ~2 GB) mit dem Befehl `ollama pull llama3.2:3b`.',
    fr: 'De zéro à prêt en moins de 10 minutes. Guides d\'installation spécifiques à l\'OS, démarrage avec les premiers modèles et liste de contrôle de configuration respectueuse de la vie privée. Ollama s\'installe en une seule commande sur macOS, Windows et Linux. Pour 8 GB de RAM, commencez avec Llama 3.2 3B (Q4, ~2 GB).',
    ja: 'ゼロから起動まで10分以下。OS固有のインストールガイド、最初のモデルチュートリアル、プライバシーファースト設定チェックリスト。OllamaはmacOS、Windows、Linuxで1つのコマンドでインストールできます。8 GB RAMの場合、Llama 3.2 3B（Q4、約2 GB）から始めてください。',
    zh: '从零开始到运行，只需10分钟以内。提供特定操作系统的安装指南、首次模型演练和隐私优先的设置检查清单。Ollama可在macOS、Windows和Linux上用一条命令安装。8 GB RAM时，从Llama 3.2 3B（Q4，约2 GB）开始。',
    es: 'De cero a funcionando en menos de 10 minutos. Guías de instalación por sistema operativo, primeros pasos con modelos y lista de verificación de configuración orientada a la privacidad. Ollama se instala con un solo comando en macOS, Windows y Linux. Con 8 GB de RAM, empieza con Llama 3.2 3B (Q4, ~2 GB) usando `ollama pull llama3.2:3b`.',
    pt: 'Do zero ao funcionamento em menos de 10 minutos. Guias de instalação por sistema operacional, tutoriais do primeiro modelo e um checklist de configuração com foco em privacidade para iniciantes. O Ollama é instalado com um único comando no macOS, Windows e Linux. Com 8 GB de RAM, comece com o Llama 3.2 3B (Q4, ~2 GB) usando `ollama pull llama3.2:3b`.',
    ko: '10분 이내에 제로에서 실행까지. OS별 설치 가이드, 첫 모델 실행 안내, 초보자를 위한 개인 정보 보호 우선 설정 체크리스트. Ollama는 macOS, Windows, Linux에서 단 하나의 명령으로 설치됩니다. 8 GB RAM의 경우 `ollama pull llama3.2:3b`로 Llama 3.2 3B(Q4, ~2 GB)를 시작하세요.',
  },
  'best-models': {
    en: 'Model rankings, benchmark comparisons, and use-case winners. As of May 2026, the top locally-runnable models are Llama 4 Scout 17B (best overall, MoE architecture), Qwen3 (best coding), and Gemma 3 12B (best at 16 GB RAM). All ranked by MMLU, HumanEval, and real hardware tests.',
    de: 'Modellbewertungen, Benchmark-Vergleiche, Use-Case-Gewinner und Quantisierungsleitfäden für Llama 4 Scout, Qwen3, DeepSeek, Gemma 3 und 70B+-Modelle. Qwen3-Coder führt Code-Benchmarks an; Mistral 7B ist am schnellsten für RAM-begrenzte Setups. Jede Bewertung enthält exakte VRAM-Anforderungen und Benchmark-Scores gegenüber GPT-4o.',
    fr: 'Critiques de modèles, comparaisons de références, gagnants par cas d\'usage et guides de quantification pour Llama 4 Scout, Qwen3, DeepSeek, Gemma 3 et modèles 70B+. Qwen3-Coder domine les benchmarks de code ; Mistral 7B est le plus rapide pour les configurations RAM limitées. Chaque examen inclut les exigences VRAM exactes et les scores de benchmark par rapport à GPT-4o.',
    ja: 'Llama 4 Scout、Qwen3、DeepSeek、Gemma 3、70B+モデルのモデルレビュー、ベンチマーク比較、ユースケース勝者、量子化ガイド。Qwen3-Coderはコーディングベンチマークをリード；Mistral 7BはRAM制約されたセットアップで最速。各レビューには正確なVRAM要件とGPT-4oに対するベンチマークスコアが含まれます。',
    zh: 'Llama 4 Scout、Qwen3、DeepSeek、Gemma 3和70B+模型的模型评论、基准比较、使用案例获奖者和量化指南。Qwen3-Coder在编码基准中领先；Mistral 7B在RAM受限的设置中速度最快。每篇评论都包含确切的VRAM要求和与GPT-4o相比的基准分数。',
    es: 'Clasificaciones de modelos, comparativas de benchmarks y ganadores por caso de uso. A mayo de 2026, los principales modelos ejecutables localmente son Llama 4 Scout 17B (mejor global, arquitectura MoE), Qwen3 (mejor en código) y Gemma 3 12B (mejor con 16 GB RAM). Todos clasificados por MMLU, HumanEval y pruebas reales de hardware.',
    pt: 'Rankings de modelos, comparativos de benchmarks e vencedores por caso de uso. Em maio de 2026, os principais modelos executáveis localmente são Llama 4 Scout 17B (melhor geral, arquitetura MoE), Qwen3 (melhor em código) e Gemma 3 12B (melhor com 16 GB RAM). Todos classificados por MMLU, HumanEval e testes reais de hardware.',
    ko: '모델 순위, 벤치마크 비교, 사용 사례별 추천. 2026년 5월 기준 최고의 로컬 실행 모델은 Llama 4 Scout 17B(전반적 최고, MoE 아키텍처), Qwen3(코딩 최고), Gemma 3 12B(16 GB RAM에서 최고)입니다. 모두 MMLU, HumanEval, 실제 하드웨어 테스트로 순위가 매겨졌습니다.',
  },
  'tools-interfaces': {
    en: 'Ollama and LM Studio each run 200+ models on macOS, Windows, and Linux. Ollama is CLI-first with a production REST API; LM Studio provides a graphical interface with a built-in model browser. Guides cover both tools plus vLLM, llama.cpp, Open WebUI, and IDE integrations.',
    de: 'Software-Vergleiche, GUI-Vergleiche, API-Setups und Front-End-Leitfäden — Ollama, LM Studio, OpenWebUI, vLLM, llama.cpp und mehr. Ollama stellt eine OpenAI-kompatible REST-API unter `localhost:11434` bereit — vollständig Ersatz für Cloud-SDKs ohne Code-Änderungen. LM Studio fügt eine GUI und Modellbrowser für nicht-technische Benutzer hinzu.',
    fr: 'Comparaisons de logiciels, comparaisons d\'interface graphique, configurations d\'API et guides frontaux — Ollama, LM Studio, OpenWebUI, vLLM, llama.cpp, et plus. Ollama expose une API REST compatible avec OpenAI à `localhost:11434` — remplacement prêt à l\'emploi des SDK cloud sans modification de code. LM Studio ajoute une interface graphique et un navigateur de modèles pour les utilisateurs non techniques.',
    ja: 'ソフトウェアショーダウン、GUIの比較、APIセットアップ、フロントエンドガイド — Ollama、LM Studio、OpenWebUI、vLLM、llama.cpp、その他。OllamaはOpenAI互換のREST APIを`localhost:11434`で公開 — コード変更なしのクラウドSDKの置き換え。LM Studioは非技術ユーザー向けのGUIとモデルブラウザを追加します。',
    zh: '软件对比、GUI比较、API设置和前端指南 — Ollama、LM Studio、OpenWebUI、vLLM、llama.cpp等。Ollama在`localhost:11434`上公开OpenAI兼容的REST API — 无需代码更改即可替代云SDK。LM Studio为非技术用户添加GUI和模型浏览器。',
    es: 'Ollama y LM Studio ejecutan más de 200 modelos en macOS, Windows y Linux. Ollama es primero en CLI con una API REST de producción; LM Studio proporciona una interfaz gráfica con explorador de modelos integrado. Las guías cubren ambas herramientas, vLLM, llama.cpp, Open WebUI e integraciones con IDEs.',
    pt: 'O Ollama e o LM Studio executam mais de 200 modelos no macOS, Windows e Linux. O Ollama é CLI-first com uma API REST de produção; o LM Studio oferece uma interface gráfica com navegador de modelos integrado. Os guias cobrem as duas ferramentas, além de vLLM, llama.cpp, Open WebUI e integrações com IDEs.',
    ko: 'Ollama와 LM Studio는 각각 macOS, Windows, Linux에서 200개 이상의 모델을 실행합니다. Ollama는 프로덕션 REST API를 갖춘 CLI 우선 방식이고, LM Studio는 내장 모델 브라우저가 있는 그래픽 인터페이스를 제공합니다. 가이드는 두 도구, vLLM, llama.cpp, Open WebUI, IDE 통합을 다룹니다.',
  },
  'hardware-performance': {
    en: 'VRAM is the primary constraint for local LLMs. A 7B model at Q4_K_M needs 4.7 GB; a 70B model needs 40 GB. Guides cover GPU selection (RTX 4070 Ti to RTX 5090), Apple Silicon, budget builds, and VRAM calculation for any model. See also: **[Fastest Local LLMs for Low-End PCs](/local-llms/fastest-local-llms-low-end-pcs)** for CPU-only, 4 GB, and 8 GB VRAM speed benchmarks.',
    de: 'Echte Hardware-Empfehlungen, VRAM-Mathematik, GPU-Benchmarks, Quantisierungs-Trade-offs und Optimierungstricks für RTX 5090, 4090, Mac Silicon und Budget-Setups. RTX 4060 (8 GB VRAM, ~$300) führt 7B-Modelle mit 30+ Token/sec aus. Apple Silicon M2 verarbeitet 7B–13B nativ über Metal ohne dedizierte GPU.',
    fr: 'Recommandations matérielles réelles, mathématiques VRAM, benchmarks GPU, compromis de quantification et astuces d\'optimisation pour RTX 5090, 4090, Mac Silicon et configurations budget. RTX 4060 (8 GB VRAM, ~$300) exécute les modèles 7B à 30+ tokens/sec. Apple Silicon M2 gère 7B–13B nativement via Metal sans GPU discret requis.',
    ja: '実際のハードウェア推奨事項、VRAM数学、GPUベンチマーク、量子化トレードオフ、RTX 5090、4090、Mac Silicon、予算ビルドの最適化トリック。RTX 4060（8 GB VRAM、約$300）は7Bモデルを30+トークン/秒で実行します。Apple Silicon M2はMetal経由で7B–13Bをネイティブに処理し、ディスクリートGPUは不要です。',
    zh: '真实的硬件建议、VRAM数学、GPU基准、量化权衡以及RTX 5090、4090、Mac Silicon和预算构建的优化技巧。RTX 4060（8 GB VRAM，约$300）以30+个令牌/秒运行7B模型。Apple Silicon M2通过Metal本机处理7B–13B，无需独立GPU。',
    es: 'La VRAM es la restricción principal para LLMs locales. Un modelo 7B en Q4_K_M necesita 4,7 GB; un modelo 70B necesita 40 GB. Las guías cubren selección de GPU (RTX 4070 Ti a RTX 5090), Apple Silicon, builds económicos y cálculo de VRAM para cualquier modelo.',
    pt: 'A VRAM é a principal restrição para LLMs locais. Um modelo 7B em Q4_K_M precisa de 4.7 GB; um modelo 70B precisa de 40 GB. Os guias cobrem seleção de GPU (RTX 4070 Ti à RTX 5090), Apple Silicon, builds econômicos e cálculo de VRAM para qualquer modelo.',
    ko: 'VRAM은 로컬 LLM의 주요 제약 사항입니다. Q4_K_M의 7B 모델은 4.7 GB가 필요하고, 70B 모델은 40 GB가 필요합니다. 가이드는 GPU 선택(RTX 4070 Ti ~ RTX 5090), Apple Silicon, 예산 빌드, 모든 모델에 대한 VRAM 계산을 다룹니다.',
  },
  'advanced-techniques': {
    en: 'Fine-tuning, RAG pipelines, quantization deep-dives, distillation, model merging, and prompt optimization for production use. LoRA reduces fine-tuning VRAM requirements from 24 GB to 8 GB. QLoRA cuts it further to 4 GB. Local RAG workflows keep sensitive data on-premises while maintaining search quality.',
    de: 'Fine-Tuning, RAG-Pipelines, Quantisierungs-Deep-Dives, Destillation, Modell-Merging und Prompt-Optimierung für die Produktionsnutzung. LoRA reduziert Fine-Tuning VRAM-Anforderungen von 24 GB auf 8 GB. QLoRA reduziert es weiter auf 4 GB. Lokale RAG-Workflows halten sensible Daten vor Ort, während die Suchqualität erhalten bleibt.',
    fr: 'Fine-tuning, pipelines RAG, plongées approfondies de quantification, distillation, fusion de modèles et optimisation de prompts pour utilisation en production. LoRA réduit les besoins en VRAM du fine-tuning de 24 GB à 8 GB. QLoRA le réduit davantage à 4 GB. Les workflows RAG locaux maintiennent les données sensibles sur site tout en maintenant la qualité de la recherche.',
    ja: 'ファインチューニング、RAGパイプライン、量子化の深掘り、蒸留、モデルマージング、本番環境用のプロンプト最適化。LoRAはファインチューニングVRAM要件を24 GBから8 GBに削減します。QLоRAはさらに4 GBに削減します。ローカルRAGワークフローは、検索品質を維持しながら機密データをオンプレミスに保ちます。',
    zh: '微调、RAG管道、量化深度探讨、蒸馏、模型合并以及生产用途的提示词优化。LoRA将微调VRAM要求从24 GB降至8 GB。QLoRA进一步将其降至4 GB。本地RAG工作流在保持搜索质量的同时将敏感数据保留在本地。',
    es: 'Fine-tuning, pipelines RAG, análisis profundo de cuantización, destilación, fusión de modelos y optimización de prompts para uso en producción. LoRA reduce los requisitos de VRAM para fine-tuning de 24 GB a 8 GB. QLoRA los reduce aún más a 4 GB. Los flujos de trabajo RAG locales mantienen los datos sensibles en local sin perder calidad de búsqueda.',
    pt: 'Fine-tuning, pipelines RAG, análise profunda de quantização, destilação, fusão de modelos e otimização de prompts para uso em produção. O LoRA reduz os requisitos de VRAM para fine-tuning de 24 GB para 8 GB. O QLoRA reduz ainda mais, para 4 GB. Os fluxos de trabalho RAG locais mantêm os dados sensíveis no próprio ambiente sem perder qualidade de busca.',
    ko: '파인튜닝, RAG 파이프라인, 양자화 심화 분석, 증류, 모델 병합, 프로덕션 사용을 위한 프롬프트 최적화. LoRA는 파인튜닝 VRAM 요구 사항을 24 GB에서 8 GB로 줄입니다. QLoRA는 4 GB까지 더 줄입니다. 로컬 RAG 워크플로우는 검색 품질을 유지하면서 민감한 데이터를 온프레미스에 보관합니다.',
  },
  'enterprise': {
    en: 'Multi-GPU setups, inference optimization, model serving frameworks (vLLM, TensorRT-LLM), monitoring and observability, cost audits, and regulatory compliance. Local LLMs eliminate cross-border data transfer, satisfy GDPR Article 28, and reduce licensing costs 40–80% versus SaaS.',
    de: 'Multi-GPU-Setups, Rückschluss-Optimierung, Model-Serving-Frameworks (vLLM, TensorRT-LLM), Überwachung und Observabilität, Kostenaudits und behördliche Compliance. Lokale LLMs eliminieren grenzüberschreitende Datenübertragung, erfüllen DSGVO Artikel 28 und senken die Lizenzkosten um 40–80% gegenüber SaaS.',
    fr: 'Configurations multi-GPU, optimisation de l\'inférence, cadres de service de modèles (vLLM, TensorRT-LLM), surveillance et observabilité, audits de coûts et conformité réglementaire. Les LLMs locaux éliminent le transfert de données transfrontalières, satisfont l\'article 28 du RGPD et réduisent les coûts de licences de 40–80% par rapport à SaaS.',
    ja: 'マルチGPUセットアップ、推論最適化、モデル提供フレームワーク（vLLM、TensorRT-LLM）、監視と可観測性、コスト監査および規制準拠。ローカルLLMは国境を超えたデータ転送を排除し、GDPR第28条を満たし、SaaSと比較してライセンス費用を40–80%削減します。',
    zh: '多GPU设置、推理优化、模型服务框架（vLLM、TensorRT-LLM）、监控和可观测性、成本审计和法规合规。本地LLM消除跨境数据转移、满足GDPR第28条，并相比SaaS将许可成本降低40–80%。',
    es: 'Configuraciones multi-GPU, optimización de inferencia, frameworks de servicio de modelos (vLLM, TensorRT-LLM), monitorización y observabilidad, auditorías de costes y cumplimiento normativo. Los LLMs locales eliminan las transferencias de datos transfronterizas, cumplen el Artículo 28 del GDPR y reducen los costes de licencias un 40–80% frente a SaaS.',
    pt: 'Configurações multi-GPU, otimização de inferência, frameworks de serviço de modelos (vLLM, TensorRT-LLM), monitoramento e observabilidade, auditorias de custos e conformidade regulatória. Os LLMs locais eliminam a transferência de dados entre fronteiras, atendem ao Artigo 28 do GDPR e reduzem os custos de licenciamento em 40–80% em relação a SaaS.',
    ko: '멀티 GPU 설정, 추론 최적화, 모델 서빙 프레임워크(vLLM, TensorRT-LLM), 모니터링 및 관찰 가능성, 비용 감사, 규정 준수. 로컬 LLM은 국경 간 데이터 전송을 없애고, GDPR 제28조를 충족하며, SaaS 대비 라이선스 비용을 40–80% 절감합니다.',
  },
  'gpu-buying-guides': {
    en: 'GPU selection by budget and use case, cost per token, power efficiency, thermal design, second-hand marketplace comparisons, and warranty trade-offs. RTX 4090 (~$1600) handles 70B models; RTX 4080 (~$800) runs 13B–20B; RTX 4060 (~$300) is best value for 7B models.',
    de: 'GPU-Auswahl nach Budget und Anwendungsfall, Kosten pro Token, Energieeffizienz, thermisches Design, Vergleiche des Second-Hand-Marktes und Garantie-Trade-offs. RTX 4090 (~$1600) verarbeitet 70B-Modelle; RTX 4080 (~$800) führt 13B–20B aus; RTX 4060 (~$300) ist das beste Verhältnis für 7B-Modelle.',
    fr: 'Sélection GPU par budget et cas d\'usage, coût par token, efficacité énergétique, conception thermique, comparaisons du marché d\'occasion et compromis de garantie. RTX 4090 (~$1600) gère les modèles 70B ; RTX 4080 (~$800) exécute 13B–20B ; RTX 4060 (~$300) est le meilleur rapport pour les modèles 7B.',
    ja: '予算とユースケース別のGPU選択、トークンあたりのコスト、エネルギー効率、熱設計、中古市場の比較、保証トレードオフ。RTX 4090（~$1600）は70Bモデルを処理；RTX 4080（~$800）は13B–20Bを実行；RTX 4060（~$300）は7Bモデルに最適な値。',
    zh: '按预算和使用案例的GPU选择、每个令牌的成本、能源效率、热设计、二手市场比较和保修权衡。RTX 4090（~$1600）处理70B模型；RTX 4080（~$800）运行13B–20B；RTX 4060（~$300）是7B模型的最佳性价比。',
    es: 'Selección de GPU por presupuesto y caso de uso, coste por token, eficiencia energética, diseño térmico, comparativas del mercado de segunda mano y compromisos de garantía. RTX 4090 (~$1600) gestiona modelos 70B; RTX 4080 (~$800) ejecuta 13B–20B; RTX 4060 (~$300) es la mejor relación calidad-precio para modelos 7B.',
    pt: 'Seleção de GPU por orçamento e caso de uso, custo por token, eficiência energética, design térmico, comparativos do mercado de usados e trade-offs de garantia. A RTX 4090 (~$1600) lida com modelos 70B; a RTX 4080 (~$800) roda 13B–20B; a RTX 4060 (~$300) é o melhor custo-benefício para modelos 7B.',
    ko: '예산 및 사용 사례별 GPU 선택, 토큰당 비용, 전력 효율, 열 설계, 중고 시장 비교, 보증 트레이드오프. RTX 4090(~$1600)은 70B 모델을 처리하고, RTX 4080(~$800)은 13B–20B를 실행하며, RTX 4060(~$300)은 7B 모델에 최고의 가성비입니다.',
  },
  'hardware-setups': {
    en: 'Complete build guides for laptop, desktop, workstation, and server deployments. From single-GPU setups to multi-node clusters. Budget builds ($500–$1500), mid-range ($1500–$5000), and enterprise ($5000+) configurations with exact part lists and estimated throughput.',
    de: 'Vollständige Bauanleitungen für Laptop-, Desktop-, Workstation- und Server-Bereitstellungen. Von Single-GPU-Setups bis zu Multi-Node-Clustern. Budget-Builds ($500–$1500), Mid-Range ($1500–$5000) und Enterprise ($5000+) Konfigurationen mit exakten Teilelisten und geschätztem Durchsatz.',
    fr: 'Guides complets pour les déploiements portables, de bureau, de station de travail et de serveur. Des configurations GPU simples aux grappes multi-nœuds. Configurations budget ($500–$1500), milieu de gamme ($1500–$5000) et entreprise ($5000+) avec listes de pièces exactes et débit estimé.',
    ja: 'ラップトップ、デスクトップ、ワークステーション、サーバーデプロイメント用の完全な構築ガイド。シングルGPUセットアップからマルチノードクラスターまで。予算構築($500–$1500)、ミッドレンジ($1500–$5000)、エンタープライズ($5000+)構成、正確なパーツリストと推定スループット。',
    zh: '笔记本电脑、台式机、工作站和服务器部署的完整构建指南。从单GPU设置到多节点集群。预算构建（$500–$1500）、中档（$1500–$5000）和企业（$5000+）配置，附带精确的零件清单和估计吞吐量。',
    es: 'Guías completas para despliegues en portátil, escritorio, estación de trabajo y servidor. Desde configuraciones con una sola GPU hasta clústeres multinodo. Configuraciones de presupuesto ($500–$1500), gama media ($1500–$5000) y empresa ($5000+) con listas de piezas exactas y rendimiento estimado.',
    pt: 'Guias completos de build para implantações em notebook, desktop, workstation e servidor. De configurações com uma única GPU a clusters multinó. Builds econômicos ($500–$1500), intermediários ($1500–$5000) e enterprise ($5000+) com listas exatas de peças e throughput estimado.',
    ko: '노트북, 데스크탑, 워크스테이션, 서버 배포를 위한 완전한 빌드 가이드. 단일 GPU 설정부터 멀티 노드 클러스터까지. 정확한 부품 목록과 예상 처리량이 포함된 예산($500–$1500), 중간 범위($1500–$5000), 엔터프라이즈($5000+) 구성.',
  },
  'privacy-business': {
    en: 'On-premises deployment for compliance (GDPR, HIPAA, APPI, CAC). Zero-knowledge architecture, air-gapped setups, and access logging. Local LLMs eliminate API vendor lock-in, reduce compliance audit burden, and protect proprietary data from SaaS providers.',
    de: 'On-Premises-Bereitstellung für Compliance (DSGVO, HIPAA, APPI, CAC). Zero-Knowledge-Architektur, luftgekoppelte Setups und Zugriffsprotokolle. Lokale LLMs eliminieren API-Anbieter-Lock-in, reduzieren die Compliance-Audit-Belastung und schützen proprietäre Daten vor SaaS-Anbietern.',
    fr: 'Déploiement sur site pour la conformité (RGPD, HIPAA, APPI, CAC). Architecture zéro connaissance, configurations air-gap et journalisation des accès. Les LLMs locaux éliminent la dépendance aux fournisseurs d\'API, réduisent la charge d\'audit de conformité et protègent les données propriétaires des fournisseurs SaaS.',
    ja: 'コンプライアンス（GDPR、HIPAA、APPI、CAC）のためのオンプレミスデプロイ。ゼロナレッジアーキテクチャ、エアギャップセットアップ、アクセスログ。ローカルLLMはAPIベンダーロックインを排除し、コンプライアンス監査の負担を減らし、SaaSプロバイダーから専有データを保護します。',
    zh: '用于合规性（GDPR、HIPAA、APPI、CAC）的本地部署。零知识架构、隔离设置和访问日志。本地LLM消除API供应商锁定、减少合规审计负担并保护专有数据免受SaaS提供商影响。',
    es: 'Despliegue en local para cumplimiento normativo (GDPR, HIPAA, APPI, CAC). Arquitectura zero-knowledge, configuraciones air-gap y registro de accesos. Los LLMs locales eliminan la dependencia de proveedores de API, reducen la carga de auditoría de cumplimiento y protegen los datos propietarios frente a proveedores SaaS.',
    pt: 'Implantação on-premises para conformidade (GDPR, HIPAA, APPI, CAC). Arquitetura zero-knowledge, configurações air-gapped e registro de acessos. Os LLMs locais eliminam o vendor lock-in de API, reduzem a carga de auditoria de conformidade e protegem os dados proprietários dos provedores SaaS.',
    ko: '규정 준수(GDPR, HIPAA, APPI, CAC)를 위한 온프레미스 배포. 제로 지식 아키텍처, 에어갭 설정, 액세스 로그. 로컬 LLM은 API 공급업체 종속을 없애고, 규정 준수 감사 부담을 줄이며, SaaS 공급업체로부터 독점 데이터를 보호합니다.',
  },
  'cost-comparisons': {
    en: 'Break-even analysis: local vs cloud vs subscription models. Hidden SaaS costs: overage fees, enterprise seats, audit logs. Local hardware pays for itself in 6–18 months for heavy users. ROI calculators for different workload types.',
    de: 'Break-Even-Analyse: lokal vs Cloud vs Abonnementmodelle. Versteckte SaaS-Kosten: Überschussgebühren, Enterprise-Plätze, Audit-Protokolle. Lokale Hardware rechnet sich in 6–18 Monaten für Power-User. ROI-Rechner für verschiedene Workload-Typen.',
    fr: 'Analyse du seuil de rentabilité : local vs cloud vs modèles d\'abonnement. Coûts SaaS cachés : frais de dépassement, sièges entreprise, journaux d\'audit. Le matériel local s\'amortit en 6–18 mois pour les utilisateurs intensifs. Calculatrices ROI pour différents types de charges de travail.',
    ja: 'ブレークイーブン分析：ローカルvsクラウドvsサブスクリプションモデル。隠されたSaaSコスト：超過料金、エンタープライズシート、監査ログ。ローカルハードウェアは大量ユーザーにとって6–18ヶ月で投資を回収。異なるワークロードタイプのROI計算機。',
    zh: '损益平衡分析：本地vs云vs订阅模式。隐性SaaS成本：超额费用、企业席位、审计日志。本地硬件对于重度用户在6–18个月内回本。不同工作负载类型的ROI计算器。',
    es: 'Análisis de punto de equilibrio: local vs cloud vs modelos de suscripción. Costes ocultos de SaaS: cargos por exceso, plazas enterprise, registros de auditoría. El hardware local se amortiza en 6–18 meses para usuarios intensivos. Calculadoras de ROI para diferentes tipos de carga de trabajo.',
    pt: 'Análise de ponto de equilíbrio: local vs cloud vs modelos de assinatura. Custos ocultos de SaaS: taxas de excedente, assentos enterprise, logs de auditoria. O hardware local se paga em 6–18 meses para usuários intensivos. Calculadoras de ROI para diferentes tipos de carga de trabalho.',
    ko: '손익분기점 분석: 로컬 vs 클라우드 vs 구독 모델. 숨겨진 SaaS 비용: 초과 요금, 엔터프라이즈 좌석, 감사 로그. 로컬 하드웨어는 대용량 사용자의 경우 6–18개월 내에 비용을 회수합니다. 다양한 워크로드 유형의 ROI 계산기.',
  },
}

const HUB_COMING_SOON: Record<string, string> = {
  en: 'More guides coming soon.',
  de: 'Weitere Leitfäden folgen in Kürze.',
  fr: 'D\'autres guides arrivent bientôt.',
  ja: 'さらなるガイドが近日公開予定です。',
  zh: '更多指南即将推出。',
  es: 'Más guías próximamente.',
  pt: 'Mais guias em breve.',
  ko: '더 많은 가이드가 곧 추가됩니다.',
}

const HUB_PE_SIDEBAR_TITLE: Record<string, string> = {
  en: 'Improve Your Results',
  de: 'Verbessern Sie Ihre Ergebnisse',
  fr: 'Améliorez Vos Résultats',
  ja: '結果を改善する',
  zh: '改进您的结果',
  es: 'Mejora tus resultados',
  pt: 'Melhore seus resultados',
  ko: '결과 개선하기',
}

const HUB_PE_SIDEBAR_BODY: Record<string, string> = {
  en: 'Running a local model? Your output quality depends on how you prompt it. Learn systematic techniques to get better answers from any local LLM.',
  de: 'Führen Sie ein lokales Modell aus? Die Ausgabequalität hängt davon ab, wie Sie es prompten. Lernen Sie systematische Techniken, um bessere Antworten von jedem lokalen LLM zu erhalten.',
  fr: 'Vous utilisez un modèle local ? La qualité de sortie dépend de la manière dont vous le promptez. Apprenez des techniques systématiques pour obtenir de meilleures réponses de n\'importe quel LLM local.',
  ja: 'ローカルモデルを実行していますか？出力品質はプロンプト作成方法に依存します。ローカルLLMからより良い答えを得るための体系的な技法を学びます。',
  zh: '运行本地模型？输出质量取决于您如何提示它。学习系统化技术以从任何本地LLM获得更好的答案。',
  es: '¿Usas un modelo local? La calidad de los resultados depende de cómo lo prompts. Aprende técnicas sistemáticas para obtener mejores respuestas de cualquier LLM local.',
  pt: 'Está rodando um modelo local? A qualidade da sua saída depende de como você cria o prompt. Aprenda técnicas sistemáticas para obter respostas melhores de qualquer LLM local.',
  ko: '로컬 모델을 실행하고 계신가요? 출력 품질은 프롬프트 작성 방법에 따라 달라집니다. 모든 로컬 LLM에서 더 나은 답변을 얻기 위한 체계적인 기법을 배워 보세요.',
}

const HUB_PE_SIDEBAR_LINKS: Record<string, { label: string; href: string }[]> = {
  en: [
    { label: 'Prompt Engineering Guide', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'What Is Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Chain-of-Thought Prompting', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  de: [
    { label: 'Prompt Engineering Leitfaden', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'Was ist Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Chain-of-Thought-Prompting', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  fr: [
    { label: 'Guide du Prompt Engineering', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'Qu\'est-ce que le Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Chain-of-Thought Prompting', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  ja: [
    { label: 'プロンプトエンジニアリングガイド', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'プロンプトエンジニアリングとは', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'チェーン・オブ・ソート・プロンプティング', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  zh: [
    { label: '提示词工程指南', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: '什么是提示词工程', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: '链式推理提示词', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  es: [
    { label: 'Guía de Prompt Engineering', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: '¿Qué es el Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Prompting de Cadena de Pensamiento', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  pt: [
    { label: 'Guia de Prompt Engineering', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'O que é Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Prompting de Chain-of-Thought', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  ko: [
    { label: '프롬프트 엔지니어링 가이드', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: '프롬프트 엔지니어링이란?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: '사고의 사슬 프롬프팅', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
}

const HUB_GETTING_STARTED_LINK: Record<string, string> = {
  en: 'Start with Getting Started',
  de: 'Mit „Erste Schritte" beginnen',
  fr: 'Commencer par « Premiers pas »',
  ja: 'はじめにから始める',
  zh: '从"入门"开始',
  es: 'Comenzar con Primeros pasos',
  pt: 'Comece pelos Primeiros passos',
  ko: '시작하기로 시작하세요',
}

const HUB_TAKEAWAYS_TITLE: Record<string, string> = {
  en: 'Key Takeaways',
  de: 'Zusammenfassung',
  fr: 'Points clés',
  ja: 'ポイントまとめ',
  zh: '核心要点',
  es: 'Puntos clave',
  pt: 'Pontos principais',
  ko: '핵심 요점',
}

const HUB_TAKEAWAYS_BULLETS: Record<string, string[]> = {
  en: [
    '8 GB RAM is enough to run a 7B model locally (Ollama or LM Studio, under 10 min setup)',
    '40 GB VRAM runs 70B models (Llama 4 Scout, DeepSeek V3) at full quality',
    'Q4 quantization halves VRAM requirements with minimal quality loss — 7B model fits in 4–5 GB VRAM',
    'Llama 4 Scout, Qwen3, DeepSeek, and Mistral match GPT-4o mini on most coding and reasoning benchmarks',
    'Zero API costs after hardware purchase — no usage limits, no vendor lock-in',
    'All data stays on your machine — no telemetry, no cloud storage, GDPR-ready',
    'LoRA fine-tuning requires 500+ labeled examples and 24 GB+ VRAM (or cloud GPU for training)',
    '[Qwen Local Deployment Guide 2026](/local-llms/qwen-local-deployment-guide-2026) — one-command Ollama setup for Qwen2.5 7B–72B',
    '[Best GPU Under $500 for LLM Inference](/local-llms/best-gpu-for-llm-inference-under-500-2026) — RTX 4060 Ti 16 GB leads on value',
    '[DeepSeek vs Qwen: Local Comparison 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — benchmark head-to-head',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU cloud for the Chinese market',
    '[Local LLM Cost Calculator: Build vs Rent 2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3-year ROI calculator',
  ],
  de: [
    '8 GB RAM reichen aus, um ein 7B-Modell lokal auszuführen (Ollama oder LM Studio, unter 10 Minuten Einrichtung)',
    '40 GB VRAM führt 70B-Modelle (Llama 4 Scout, DeepSeek V3) in voller Qualität aus',
    'Q4-Quantisierung halbiert VRAM-Anforderungen mit minimalem Qualitätsverlust — 7B-Modell passt in 4–5 GB VRAM',
    'Llama 4 Scout, Qwen3, DeepSeek und Mistral entsprechen GPT-4o mini bei den meisten Code- und Reasoning-Benchmarks',
    'Null API-Kosten nach Hardware-Kauf — keine Nutzungsbegrenzungen, keine Anbieter-Lock-in',
    'Alle Daten bleiben auf Ihrer Maschine — keine Telemetrie, kein Cloud-Speicher, DSGVO-konform',
    'LoRA-Fine-Tuning erfordert 500+ gekennzeichnete Beispiele und 24 GB+ VRAM (oder Cloud-GPU zum Training)',
    '[Qwen lokaler Deployment-Leitfaden 2026](/de/local-llms/qwen-local-deployment-guide-2026) — Einzeilen-Ollama-Setup für Qwen2.5 7B–72B',
    '[Bestes GPU unter 500 $ für LLM-Inferenz](/de/local-llms/best-gpu-for-llm-inference-under-500-2026) — RTX 4060 Ti 16 GB führt beim Preis-Leistungs-Verhältnis',
    '[DeepSeek vs Qwen: Lokaler Vergleich 2026](/de/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — Benchmark-Kopf-an-Kopf',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/de/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU-Cloud für den chinesischen Markt',
    '[Lokaler LLM-Kostenrechner: Bauen vs. Mieten 2026](/de/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3-Jahres-ROI-Rechner',
  ],
  fr: [
    '8 GB de RAM suffisent pour exécuter un modèle 7B localement (Ollama ou LM Studio, moins de 10 min de configuration)',
    '40 GB VRAM exécute les modèles 70B (Llama 4 Scout, DeepSeek V3) en qualité complète',
    'La quantification Q4 réduit de moitié les besoins en VRAM avec une perte de qualité minimale — un modèle 7B tient en 4–5 GB VRAM',
    'Llama 4 Scout, Qwen3, DeepSeek et Mistral correspondent à GPT-4o mini sur la plupart des benchmarks de code et de raisonnement',
    'Zéro coût d\'API après achat du matériel — aucune limite d\'utilisation, aucun verrouillage fournisseur',
    'Toutes les données restent sur votre machine — pas de télémétrie, pas de stockage cloud, prêt pour le RGPD',
    'Le fine-tuning LoRA nécessite 500+ exemples étiquetés et 24 GB+ VRAM (ou GPU cloud pour l\'entraînement)',
    '[Guide de déploiement local Qwen 2026](/fr/local-llms/qwen-local-deployment-guide-2026) — Configuration Ollama en une commande pour Qwen2.5 7B–72B',
    '[Meilleur GPU à moins de 500 $ pour l\'inférence LLM](/fr/local-llms/best-gpu-for-llm-inference-under-500-2026) — RTX 4060 Ti 16 GB en tête sur la valeur',
    '[DeepSeek vs Qwen : comparaison locale 2026](/fr/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — benchmark face à face',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/fr/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU cloud pour le marché chinois',
    '[Calculateur de coût LLM local : Construire vs Louer 2026](/fr/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — calculateur ROI sur 3 ans',
  ],
  ja: [
    '8 GB RAMで7Bモデルをローカルで実行できます（Ollama または LM Studio、10分以内のセットアップ）',
    '40 GB VRAMで70Bモデル（Llama 4 Scout、DeepSeek V3）をフル品質で実行',
    'Q4量子化により、品質の低下を最小限に抑えながらVRAM要件を半分に削減 — 7BモデルはVRAM 4–5 GBに収まります',
    'Llama 4 Scout、Qwen3、DeepSeek、MistralはほとんどのコーディングおよびReasoningベンチマークでGPT-4o miniに対応',
    'ハードウェア購入後のAPIコストはゼロ — 使用制限なし、ベンダーロックインなし',
    'すべてのデータはマシン上に保たれます — テレメトリなし、クラウドストレージなし、GDPR対応',
    'LoRA微調整には500個以上のラベル付き例とVRAM 24 GB以上が必要です（またはトレーニング用のクラウドGPU）',
    '[Qwenローカルデプロイガイド2026](/ja/local-llms/qwen-local-deployment-guide-2026) — Qwen2.5 7B–72B向け1コマンドOllamaセットアップ',
    '[LLM推論向け500ドル以下ベストGPU](/ja/local-llms/best-gpu-for-llm-inference-under-500-2026) — RTX 4060 Ti 16 GBがコスパ首位',
    '[DeepSeek vs Qwen：ローカル比較2026](/ja/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — ベンチマーク対決',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/ja/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — 中国市場向けGPUクラウド',
    '[ローカルLLMコスト計算機：自作 vs レンタル2026](/ja/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3年間ROI計算機',
  ],
  zh: [
    '8 GB RAM足以在本地运行7B模型（Ollama或LM Studio，设置不到10分钟）',
    '40 GB VRAM以完整品质运行70B模型（Llama 4 Scout、DeepSeek V3）',
    'Q4量化在最小质量损失的情况下使VRAM要求减半 — 7B模型需要4–5 GB VRAM',
    'Llama 4 Scout、Qwen3、DeepSeek和Mistral在大多数编码和推理基准上与GPT-4o mini相匹配',
    '硬件购买后零API成本 — 无使用限制、无供应商锁定',
    '所有数据保留在您的机器上 — 无遥测、无云存储、GDPR就绪',
    'LoRA微调需要500多个标记示例和24 GB+ VRAM（或用于训练的云GPU）',
    '[Qwen本地部署指南2026](/zh/local-llms/qwen-local-deployment-guide-2026) — Qwen2.5 7B–72B的一键Ollama设置',
    '[500美元以下最佳LLM推理GPU](/zh/local-llms/best-gpu-for-llm-inference-under-500-2026) — RTX 4060 Ti 16 GB性价比领先',
    '[DeepSeek vs Qwen：本地对比2026](/zh/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — 基准测试对决',
    '[阿里云vs腾讯云GPU 2026](/zh/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — 中国市场GPU云服务',
    '[本地LLM成本计算器：自建vs租用2026](/zh/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3年ROI计算器',
  ],
  es: [
    '8 GB de RAM son suficientes para ejecutar un modelo 7B localmente (Ollama o LM Studio, configuración en menos de 10 min)',
    '40 GB VRAM ejecuta modelos 70B (Llama 4 Scout, DeepSeek V3) en calidad completa',
    'La cuantización Q4 reduce a la mitad los requisitos de VRAM con pérdida de calidad mínima — un modelo 7B cabe en 4–5 GB VRAM',
    'Llama 4 Scout, Qwen3, DeepSeek y Mistral igualan a GPT-4o mini en la mayoría de benchmarks de código y razonamiento',
    'Cero costes de API tras la compra del hardware — sin límites de uso, sin dependencia de proveedor',
    'Todos los datos permanecen en tu máquina — sin telemetría, sin almacenamiento cloud, listo para GDPR',
    'El fine-tuning con LoRA requiere 500+ ejemplos etiquetados y 24 GB+ VRAM (o GPU cloud para entrenamiento)',
    '[Guía de despliegue local de Qwen 2026](/es/local-llms/qwen-local-deployment-guide-2026) — configuración Ollama en un comando para Qwen2.5 7B–72B',
    '[Mejor GPU por menos de 500 $ para inferencia LLM](/es/local-llms/best-gpu-for-llm-inference-under-500-2026) — RTX 4060 Ti 16 GB lidera en valor',
    '[DeepSeek vs Qwen: comparativa local 2026](/es/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — benchmark cara a cara',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/es/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU cloud para el mercado chino',
    '[Calculadora de costes LLM local: construir vs alquilar 2026](/es/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — calculadora ROI a 3 años',
  ],
  pt: [
    '8 GB de RAM são suficientes para rodar um modelo 7B localmente (Ollama ou LM Studio, configuração em menos de 10 min)',
    '40 GB VRAM rodam modelos 70B (Llama 4 Scout, DeepSeek V3) em qualidade total',
    'A quantização Q4 reduz pela metade os requisitos de VRAM com perda mínima de qualidade — um modelo 7B cabe em 4–5 GB VRAM',
    'Llama 4 Scout, Qwen3, DeepSeek e Mistral igualam o GPT-4o mini na maioria dos benchmarks de código e raciocínio',
    'Zero custos de API após a compra do hardware — sem limites de uso, sem vendor lock-in',
    'Todos os dados permanecem na sua máquina — sem telemetria, sem armazenamento na cloud, pronto para o GDPR',
    'O fine-tuning com LoRA exige 500+ exemplos rotulados e 24 GB+ VRAM (ou GPU na cloud para treinamento)',
    '[Guia de implantação local do Qwen 2026](/pt/local-llms/qwen-local-deployment-guide-2026) — configuração Ollama em um comando para Qwen2.5 7B–72B',
    '[Melhor GPU abaixo de $500 para inferência de LLM](/pt/local-llms/best-gpu-for-llm-inference-under-500-2026) — RTX 4060 Ti 16 GB lidera em custo-benefício',
    '[DeepSeek vs Qwen: comparativo local 2026](/pt/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — benchmark frente a frente',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/pt/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU na cloud para o mercado chinês',
    '[Calculadora de custo de LLM local: construir vs alugar 2026](/pt/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — calculadora de ROI de 3 anos',
  ],
  ko: [
    '8 GB RAM으로 7B 모델을 로컬에서 실행할 수 있습니다(Ollama 또는 LM Studio, 10분 이내 설정)',
    '40 GB VRAM으로 70B 모델(Llama 4 Scout, DeepSeek V3)을 최고 품질로 실행',
    'Q4 양자화는 최소한의 품질 손실로 VRAM 요구 사항을 절반으로 줄입니다 — 7B 모델이 4–5 GB VRAM에 맞음',
    'Llama 4 Scout, Qwen3, DeepSeek, Mistral은 대부분의 코딩 및 추론 벤치마크에서 GPT-4o mini에 필적',
    '하드웨어 구입 후 API 비용 제로 — 사용 제한 없음, 공급업체 종속 없음',
    '모든 데이터가 귀하의 기기에 유지됩니다 — 텔레메트리 없음, 클라우드 저장소 없음, GDPR 준비',
    'LoRA 파인튜닝에는 500개 이상의 레이블이 지정된 예제와 24 GB+ VRAM이 필요합니다(또는 학습용 클라우드 GPU)',
    '[Qwen 로컬 배포 가이드 2026](/ko/local-llms/qwen-local-deployment-guide-2026) — Qwen2.5 7B–72B용 단일 명령 Ollama 설정',
    '[LLM 추론을 위한 $500 미만 최고의 GPU](/ko/local-llms/best-gpu-for-llm-inference-under-500-2026) — RTX 4060 Ti 16 GB가 가성비 선두',
    '[DeepSeek vs Qwen: 로컬 비교 2026](/ko/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — 벤치마크 직접 비교',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/ko/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — 중국 시장을 위한 GPU 클라우드',
    '[로컬 LLM 비용 계산기: 구축 vs 임대 2026](/ko/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3년 ROI 계산기',
  ],
}

const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
  'getting-started':    { badge: 'bg-blue-50 text-blue-700 border-blue-200',    dot: 'bg-blue-400' },
  'best-models':        { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400' },
  'tools-interfaces':   { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  'hardware-performance': { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
  'advanced-techniques': { badge: 'bg-rose-50 text-rose-700 border-rose-200',   dot: 'bg-rose-400' },
  enterprise:           { badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-400' },
  'gpu-buying-guides':  { badge: 'bg-red-50 text-red-700 border-red-200',     dot: 'bg-red-400' },
  'hardware-setups':    { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-400' },
  'privacy-business':   { badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',  dot: 'bg-cyan-400' },
  'cost-comparisons':   { badge: 'bg-teal-50 text-teal-700 border-teal-200',  dot: 'bg-teal-400' },
}

// Acronyms that must stay fully uppercase in slug-to-title fallbacks
const SLUG_ACRONYMS: Record<string, string> = {
  llms: 'LLMs',
  llm: 'LLM',
  ai: 'AI',
  api: 'API',
  gpu: 'GPU',
  cpu: 'CPU',
  vram: 'VRAM',
  ram: 'RAM',
  rag: 'RAG',
  lora: 'LoRA',
  vllm: 'vLLM',
}

const HUB_FAQ_TITLE: Record<string, string> = {
  en: 'Frequently Asked Questions',
  de: 'Häufig gestellte Fragen',
  fr: 'Questions fréquentes',
  ja: 'よくある質問',
  zh: '常见问题',
  es: 'Preguntas frecuentes',
  pt: 'Perguntas frequentes',
}

const HUB_FAQS: Record<string, {q:string, a:string}[]> = {
  en: [
    {
      q: 'What is a local LLM?',
      a: 'A large language model (e.g., Llama 4, Qwen3.5, DeepSeek) that runs on your own hardware instead of a cloud API. You get full privacy, offline capability, no usage limits, and zero API costs after hardware purchase.'
    },
    {
      q: 'How much VRAM do I need for a local LLM?',
      a: '8 GB VRAM runs 7B models at Q4 quantization. 16 GB handles 13B models comfortably. 40 GB+ (e.g., dual RTX 4090s or A100) is required for 70B models. Apple Silicon unified memory counts as VRAM.'
    },
    {
      q: 'What is the difference between Ollama and LM Studio?',
      a: 'Ollama is a CLI tool that runs models via simple terminal commands and exposes an OpenAI-compatible API at `localhost:11434`. LM Studio provides a desktop GUI, model browser, and built-in chat interface. Both support the same models.'
    },
    {
      q: 'Can local LLMs match cloud models like GPT-4o?',
      a: 'On coding and reasoning tasks, Llama 4 Scout, DeepSeek V3, and Qwen3 score within 5–10% of GPT-4o mini on standard benchmarks (MMLU, HumanEval). Claude Opus 4.8 and GPT-4o maintain an edge on complex multi-step tasks.'
    },
    {
      q: 'How do I fine-tune a local model?',
      a: 'Fine-tuning requires 500+ labeled training examples, the QLoRA framework (reduces VRAM requirement via 4-bit quantization), 24 GB+ VRAM (or a cloud GPU rental), and 1–4 hours of training time for a 7B model.'
    },
    {
      q: 'What is the minimum hardware to run a local LLM in 2026?',
      a: 'Minimum: 8 GB RAM and any modern CPU (runs 3B–7B models at 2–5 tokens/sec). Recommended: a GPU with 8 GB+ VRAM (RTX 3060 or newer) for 20–40 tokens/sec on 7B models.'
    },
    {
      q: 'Are local LLMs free to use?',
      a: 'Yes. Ollama and LM Studio are free and open-source. The models themselves (Llama, Mistral, Qwen, DeepSeek) are available under open-source licenses at no cost. The only cost is your hardware.'
    },
    {
      q: 'What is the best local LLM for coding in 2026?',
      a: 'Qwen3-Coder 7B is the top performer for code completion and review on consumer hardware (8 GB VRAM). DeepSeek-Coder V2 Lite is the strongest alternative. For CPU-only setups, Phi-3.5 Mini offers the best coding quality under 4 GB RAM.'
    },
    {
      q: 'Can I run a local LLM without a GPU?',
      a: 'Yes. Any modern CPU can run 3B–7B models at Q4 quantization using Ollama (CPU mode) or LM Studio. Typical CPU inference speed: 2–8 tokens/sec on a modern laptop CPU, compared to 20–50 tokens/sec on an RTX 4060. 7B Q4 requires ~5 GB RAM (not VRAM). For CPU-only setups, Phi-3.5 Mini (3.8B) and Llama 3.2 3B offer the best quality-to-speed ratio.'
    },
    {
      q: 'How do I update local LLM models when new versions are released?',
      a: 'Ollama: run `ollama pull <model-name>` again — it downloads only changed layers. LM Studio: open the model browser, find the updated version, and download it. Old GGUF files are not automatically removed — delete them manually from ~/.ollama/models (Ollama) or ~/Library/Application Support/LM Studio/models (macOS) to free disk space. Model updates from Meta, Alibaba, and Mistral typically arrive within 24–48 hours of official release.'
    },
    {
      q: 'What are the best Ollama models in May 2026?',
      a: 'Top Ollama models for May 2026: Llama 4 Scout 17B (best overall on 12 GB VRAM, `ollama pull llama4:scout`), Qwen3 8B (best coding, `ollama pull qwen3:8b`, 5 GB VRAM), Gemma 3 12B (strong reasoning on RTX 3060, 8 GB VRAM), and DeepSeek-R2 8B (best math/logic, 5 GB VRAM). Run any model with `ollama run <name>` after pulling.'
    },
    {
      q: 'What is the best local LLM for an RTX 3060 12 GB VRAM?',
      a: 'The RTX 3060 12 GB VRAM is an excellent local LLM GPU. Best choices: Llama 4 Scout 17B at Q4 (~10 GB VRAM, `ollama pull llama4:scout`), Gemma 3 12B (~8 GB VRAM), or Qwen3 14B (~9 GB VRAM). All run at 20–40 tokens/sec. The 12 GB VRAM puts you above the RTX 3060 Ti (8 GB) and opens up 13B-class and 17B MoE models at full quality.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai: which should I use?',
      a: 'Use Ollama if you want a CLI tool with an OpenAI-compatible API at localhost:11434 — best for developers and automation. Use LM Studio if you want a desktop GUI, built-in model browser, and chat interface — best for beginners. Use Jan.ai if you want a privacy-focused chat app with a built-in model store. All three support the same GGUF models. Setup time: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.'
    },
    {
      q: 'What are the best budget GPUs for local LLMs in 2026?',
      a: 'Best budget GPUs for local LLMs: RTX 3060 12 GB (~$250 used) runs 13B models at 20–30 tok/s. RTX 4060 8 GB (~$300 new) runs 7B at 35–45 tok/s. RTX 3080 10 GB (~$350 used) handles 13B comfortably. For sub-$200: RTX 2070 8 GB runs 7B models at 15–20 tok/s. AMD RX 6700 XT 12 GB (~$200 used) is comparable to RTX 3060 with ROCm on Linux. Minimum recommended: 8 GB VRAM for useful 7B inference.'
    },
  ],
  de: [
    {
      q: 'Was ist ein lokales LLM?',
      a: 'Ein großes Sprachmodell (z.B. Llama 4, Qwen3.5, DeepSeek), das auf Ihrer eigenen Hardware anstelle einer Cloud-API ausgeführt wird. Sie erhalten vollständige Privatsphäre, Offline-Funktionalität, keine Nutzungsbegrenzungen und null API-Kosten nach dem Hardware-Kauf.'
    },
    {
      q: 'Wie viel VRAM benötige ich für ein lokales LLM?',
      a: '8 GB VRAM führen 7B-Modelle bei Q4-Quantisierung aus. 16 GB verarbeiten 13B-Modelle komfortabel. 40 GB+ (z.B. dual RTX 4090 oder A100) sind erforderlich für 70B-Modelle. Apple-Silicon-Unified-Memory zählt als VRAM.'
    },
    {
      q: 'Was ist der Unterschied zwischen Ollama und LM Studio?',
      a: 'Ollama ist ein CLI-Tool, das Modelle über einfache Terminalcommands ausführt und eine OpenAI-kompatible API unter `localhost:11434` bereitstellt. LM Studio bietet eine Desktop-GUI, einen Modellbrowser und eine integrierte Chat-Oberfläche. Beide unterstützen die gleichen Modelle.'
    },
    {
      q: 'Können lokale LLMs Cloud-Modelle wie GPT-4o entsprechen?',
      a: 'Bei Coding- und Reasoning-Aufgaben erzielen Llama 4 Scout, DeepSeek V3 und Qwen3 bei Standard-Benchmarks (MMLU, HumanEval) Ergebnisse in 5–10% von GPT-4o mini. Claude Opus 4.8 und GPT-4o behaupten einen Vorteil bei komplexen mehrstufigen Aufgaben.'
    },
    {
      q: 'Wie fine-tunne ich ein lokales Modell?',
      a: 'Fine-Tuning erfordert 500+ gekennzeichnete Trainingsbeispiele, das QLoRA-Framework (reduziert VRAM-Anforderung durch 4-Bit-Quantisierung), 24 GB+ VRAM (oder Cloud-GPU-Vermietung) und 1–4 Stunden Trainingszeit für ein 7B-Modell.'
    },
    {
      q: 'Was ist die Mindest-Hardware zum Ausführen eines lokalen LLM im Jahr 2026?',
      a: 'Minimum: 8 GB RAM und eine beliebige moderne CPU (führt 3B–7B-Modelle mit 2–5 Token/Sek aus). Empfohlen: eine GPU mit 8 GB+ VRAM (RTX 3060 oder neuer) für 20–40 Token/Sek auf 7B-Modellen.'
    },
    {
      q: 'Sind lokale LLMs kostenlos nutzbar?',
      a: 'Ja. Ollama und LM Studio sind kostenlos und Open-Source. Die Modelle selbst (Llama, Mistral, Qwen, DeepSeek) sind unter Open-Source-Lizenzen kostenlos verfügbar. Die einzigen Kosten fallen für die Hardware an.'
    },
    {
      q: 'Was ist das beste lokale LLM für Coding im Jahr 2026?',
      a: 'Qwen3-Coder 7B ist der Top-Performer für Code-Completion und Review auf Consumer-Hardware (8 GB VRAM). DeepSeek-Coder V2 Lite ist die stärkste Alternative. Für CPU-only-Setups bietet Phi-3.5 Mini unter 4 GB VRAM die beste Code-Qualität.'
    },
    {
      q: 'Kann ich ein lokales LLM ohne GPU ausführen?',
      a: 'Ja. Jede moderne CPU kann 3B–7B-Modelle bei Q4-Quantisierung mit Ollama (CPU-Modus) oder LM Studio ausführen. Typische CPU-Rückschluss-Geschwindigkeit: 2–8 Token/Sek auf einer modernen Laptop-CPU, verglichen mit 20–50 Token/Sek auf einer RTX 4060. 7B Q4 erfordert etwa 5 GB RAM (nicht VRAM). Für CPU-only-Setups bieten Phi-3.5 Mini (3,8B) und Llama 3.2 3B das beste Qualitäts-Geschwindigkeits-Verhältnis.'
    },
    {
      q: 'Wie aktualisiere ich lokale LLM-Modelle, wenn neue Versionen freigegeben werden?',
      a: 'Ollama: Führen Sie `ollama pull <model-name>` erneut aus — es werden nur geänderte Layer heruntergeladen. LM Studio: Öffnen Sie den Modellbrowser, finden Sie die aktualisierte Version und laden Sie sie herunter. Alte GGUF-Dateien werden nicht automatisch entfernt — löschen Sie sie manuell aus ~/.ollama/models (Ollama) oder ~/Library/Application Support/LM Studio/models (macOS), um Speicherplatz freizugeben. Modell-Updates von Meta, Alibaba und Mistral sind normalerweise 24–48 Stunden nach der offiziellen Veröffentlichung verfügbar.'
    },
    {
      q: 'Muss ich bei lokalen LLMs die DSGVO beachten?',
      a: 'Lokale Verarbeitung bedeutet, dass kein Datenschutzabkommen (Art. 28 DSGVO) erforderlich ist, da Daten niemals die Maschine verlassen. Ollama bindet standardmäßig an `localhost` — keine externe Zugänglichkeit. Dies erfüllt DSGVO-Anforderungen für On-Premises-Deployment.'
    },
    {
      q: 'Welche lokalen LLM-Modelle eignen sich best für den deutschen Mittelstand?',
      a: 'Llama 4 und Qwen3.5 für allgemeine Verwendung, DeepSeek-Coder für Softwareentwicklung, beide sind BSI-kompatibel wenn On-Premises bereitgestellt. Diese Modelle ermöglichen DSGVO-konforme KI-Nutzung ohne Anbieter-Lock-in.'
    },
    {
      q: 'Was sind die besten Ollama-Modelle im Mai 2026?',
      a: 'Top Ollama-Modelle Mai 2026: Llama 4 Scout 17B (beste Gesamtqualität auf 12 GB VRAM, `ollama pull llama4:scout`), Qwen3 8B (bestes Coding, 5 GB VRAM), Gemma 3 12B (starkes Reasoning auf RTX 3060, 8 GB VRAM), DeepSeek-R2 8B (beste Mathe/Logik, 5 GB VRAM).'
    },
    {
      q: 'Welches lokale LLM eignet sich für eine RTX 3060 12 GB?',
      a: 'Die RTX 3060 12 GB VRAM ist eine hervorragende GPU für lokale LLMs. Beste Optionen: Llama 4 Scout 17B bei Q4 (~10 GB VRAM), Gemma 3 12B (~8 GB VRAM), Qwen3 14B (~9 GB VRAM). Alle laufen mit 20–40 Tokens/Sek.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai: Was sollte ich verwenden?',
      a: 'Verwenden Sie Ollama für CLI und OpenAI-kompatible API unter localhost:11434 — ideal für Entwickler. LM Studio für Desktop-GUI und Modellbrowser — ideal für Einsteiger. Jan.ai für datenschutzorientierten Chat mit eingebautem Modellspeicher. Einrichtungszeit: Ollama 2 Min, LM Studio 5 Min, Jan.ai 5 Min.'
    },
    {
      q: 'Was sind die besten Budget-GPUs für lokale LLMs 2026?',
      a: 'Beste Budget-GPUs: RTX 3060 12 GB (~250€ gebraucht) für 13B-Modelle mit 20–30 Tok/s. RTX 4060 8 GB (~300€ neu) für 7B mit 35–45 Tok/s. RTX 2070 8 GB (~150€) für 7B mit 15–20 Tok/s. AMD RX 6700 XT 12 GB (~200€) vergleichbar mit RTX 3060 unter ROCm/Linux. Minimum: 8 GB VRAM.'
    },
  ],
  fr: [
    {
      q: 'Qu\'est-ce qu\'un LLM local ?',
      a: 'Un grand modèle de langage (par exemple, Llama 4, Qwen3.5, DeepSeek) qui s\'exécute sur votre matériel personnel plutôt que sur une API cloud. Vous bénéficiez de confidentialité totale, d\'une capacité hors ligne, d\'aucune limite d\'utilisation et de zéro coût d\'API après l\'achat du matériel.'
    },
    {
      q: 'De combien de VRAM ai-je besoin pour un LLM local ?',
      a: '8 GB VRAM exécutent les modèles 7B en quantification Q4. 16 GB gèrent confortablement les modèles 13B. 40 GB+ (par exemple, dual RTX 4090 ou A100) sont requis pour les modèles 70B. La mémoire unifiée Apple Silicon compte comme VRAM.'
    },
    {
      q: 'Quelle est la différence entre Ollama et LM Studio ?',
      a: 'Ollama est un outil CLI qui exécute les modèles via des commandes simples et expose une API compatible OpenAI à `localhost:11434`. LM Studio fournit une GUI desktop, un navigateur de modèles et une interface de chat intégrée. Tous deux supportent les mêmes modèles.'
    },
    {
      q: 'Les LLMs locaux peuvent-ils rivaliser avec les modèles cloud comme GPT-4o ?',
      a: 'Sur les tâches de codage et de raisonnement, Llama 4 Scout, DeepSeek V3 et Qwen3 obtiennent des résultats à 5–10% de GPT-4o mini sur les benchmarks standard (MMLU, HumanEval). Claude Opus 4.8 et GPT-4o conservent un avantage sur les tâches multi-étapes complexes.'
    },
    {
      q: 'Comment affiner un modèle local ?',
      a: 'Le fine-tuning nécessite 500+ exemples d\'entraînement annotés, le framework QLoRA (réduit l\'exigence VRAM via quantification 4 bits), 24 GB+ VRAM (ou location GPU cloud) et 1–4 heures de temps d\'entraînement pour un modèle 7B.'
    },
    {
      q: 'Quel est le matériel minimum pour exécuter un LLM local en 2026 ?',
      a: 'Minimum : 8 GB RAM et tout CPU moderne (exécute les modèles 3B–7B à 2–5 tokens/sec). Recommandé : un GPU avec 8 GB+ VRAM (RTX 3060 ou plus récent) pour 20–40 tokens/sec sur les modèles 7B.'
    },
    {
      q: 'Les LLMs locaux sont-ils gratuits d\'utilisation ?',
      a: 'Oui. Ollama et LM Studio sont gratuits et open-source. Les modèles eux-mêmes (Llama, Mistral, Qwen, DeepSeek) sont disponibles gratuitement sous licences open-source. Seul le coût du matériel s\'applique.'
    },
    {
      q: 'Quel est le meilleur LLM local pour le codage en 2026 ?',
      a: 'Qwen3-Coder 7B est le meilleur performer pour la complétion et la révision de code sur matériel grand public (8 GB VRAM). DeepSeek-Coder V2 Lite est la meilleure alternative. Pour les configurations CPU uniquement, Phi-3.5 Mini offre la meilleure qualité de code sous 4 GB VRAM.'
    },
    {
      q: 'Puis-je exécuter un LLM local sans GPU ?',
      a: 'Oui. Tout CPU moderne peut exécuter les modèles 3B–7B en quantification Q4 avec Ollama (mode CPU) ou LM Studio. Vitesse d\'inférence CPU typique : 2–8 tokens/sec sur un CPU portable moderne, comparé à 20–50 tokens/sec sur une RTX 4060. 7B Q4 nécessite environ 5 GB RAM (pas VRAM). Pour les configurations CPU uniquement, Phi-3.5 Mini (3,8B) et Llama 3.2 3B offrent le meilleur rapport qualité/vitesse.'
    },
    {
      q: 'Comment mettre à jour les modèles LLM locaux lors de la sortie de nouvelles versions ?',
      a: 'Ollama : exécutez `ollama pull <model-name>` à nouveau — il télécharge uniquement les couches modifiées. LM Studio : ouvrez le navigateur de modèles, trouvez la version mise à jour et téléchargez-la. Les anciens fichiers GGUF ne sont pas supprimés automatiquement — supprimez-les manuellement de ~/.ollama/models (Ollama) ou ~/Library/Application Support/LM Studio/models (macOS) pour libérer de l\'espace disque. Les mises à jour de modèles de Meta, Alibaba et Mistral arrivent généralement 24–48 heures après la sortie officielle.'
    },
    {
      q: 'Quels sont les meilleurs modèles Ollama en mai 2026 ?',
      a: 'Top modèles Ollama mai 2026 : Llama 4 Scout 17B (meilleure qualité sur 12 Go VRAM, `ollama pull llama4:scout`), Qwen3 8B (meilleur code, 5 Go VRAM), Gemma 3 12B (raisonnement puissant sur RTX 3060, 8 Go VRAM), DeepSeek-R2 8B (maths/logique, 5 Go VRAM).'
    },
    {
      q: 'Quel est le meilleur LLM local pour une RTX 3060 12 Go ?',
      a: 'La RTX 3060 12 Go VRAM est un excellent GPU pour les LLMs locaux. Meilleurs choix : Llama 4 Scout 17B en Q4 (~10 Go VRAM), Gemma 3 12B (~8 Go VRAM), Qwen3 14B (~9 Go VRAM). Tous tournent à 20–40 tokens/sec.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai : lequel utiliser ?',
      a: 'Ollama pour CLI et API OpenAI-compatible sur localhost:11434 — idéal développeurs. LM Studio pour GUI desktop et navigateur de modèles — idéal débutants. Jan.ai pour chat axé confidentialité avec boutique de modèles intégrée. Temps de setup : Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.'
    },
    {
      q: 'Quels sont les meilleurs GPU économiques pour LLMs locaux en 2026 ?',
      a: 'Meilleurs GPU économiques : RTX 3060 12 Go (~250 € d\'occasion) pour modèles 13B à 20–30 tok/s. RTX 4060 8 Go (~300 € neuf) pour 7B à 35–45 tok/s. RTX 2070 8 Go (~150 €) pour 7B à 15–20 tok/s. AMD RX 6700 XT 12 Go (~200 €) comparable RTX 3060 sous ROCm/Linux. Minimum : 8 Go VRAM.'
    },
  ],
  ja: [
    {
      q: 'ローカルLLMとは何ですか？',
      a: 'クラウドAPIではなく、自分のハードウェア上で実行される大型言語モデル（例：Llama 4 Scout、Qwen3、DeepSeek）です。完全なプライバシー、オフライン機能、使用制限なし、およびハードウェア購入後のゼロAPIコストが得られます。'
    },
    {
      q: 'ローカルLLMにはどの程度のVRAMが必要ですか？',
      a: '8 GB VRAMはQ4量子化で7Bモデルを実行します。16 GBは13Bモデルを快適に処理します。40 GB+（デュアルRTX 4090またはA100など）は70Bモデルに必要です。Apple SiliconのUnified Memoryはメインメモリとしてカウントされます。'
    },
    {
      q: 'OllamaとLM Studioの違いは何ですか？',
      a: 'Ollamaはシンプルなターミナルコマンドでモデルを実行するCLIツールで、`localhost:11434`でOpenAI互換APIを公開します。LM Studioはデスクトップ GUI、モデルブラウザ、組み込みチャットインターフェースを提供します。どちらも同じモデルをサポートします。'
    },
    {
      q: 'ローカルLLMはGPT-4oなどのクラウドモデルに対抗できますか？',
      a: 'コーディングと推論タスクでは、Llama 4 Scout、DeepSeek V3、Qwen3は標準ベンチマーク（MMLU、HumanEval）でGPT-4o miniの5–10%以内のスコアを取得します。Claude Opus 4.8とGPT-4oは複雑なマルチステップタスクで優位性を保っています。'
    },
    {
      q: 'ローカルモデルはどのようにファインチューニングしますか？',
      a: 'ファインチューニングには500+個のラベル付きトレーニング例、QLоRAフレームワーク（4ビット量子化によるVRAM削減）、24 GB+ VRAM（またはクラウドGPUレンタル）、および7Bモデルの1–4時間のトレーニング時間が必要です。'
    },
    {
      q: '2026年にローカルLLMを実行するための最小限のハードウェアは何ですか？',
      a: '最小：8 GB RAMと任意の最新CPU（3B–7Bモデルを2–5トークン/秒で実行）。推奨：8 GB+ VRAM搭載GPU（RTX 3060以降）で7Bモデルで20–40トークン/秒。'
    },
    {
      q: 'ローカルLLMは無料で使用できますか？',
      a: 'はい。OllamaとLM Studioは無料でオープンソースです。モデル自体（Llama、Mistral、Qwen、DeepSeek）はオープンソースライセンスの下で無料で入手できます。唯一のコストはハードウェアです。'
    },
    {
      q: '2026年のコーディング向けベストローカルLLMは何ですか？',
      a: 'Qwen3-Coder 7Bはコンシューマハードウェア（8 GB VRAM）でのコード補完とレビューのトップパフォーマーです。DeepSeek-Coder V2 Liteが最有力な代替案です。CPUのみのセットアップの場合、Phi-3.5 Miniは4 GB VRAM未満で最高のコーディング品質を提供します。'
    },
    {
      q: 'GPUなしでローカルLLMを実行できますか？',
      a: 'はい。任意の最新CPUはOllama（CPUモード）またはLM StudioでQ4量子化で3B–7Bモデルを実行できます。典型的なCPU推論速度：最新のノートPC CPUで2–8トークン/秒、RTX 4060で20–50トークン/秒と比較。7B Q4には約5 GB RAM（VRAM以外）が必要です。CPUのみのセットアップの場合、Phi-3.5 Mini（3.8B）とLlama 3.2 3Bは最高の品質対速度比を提供します。'
    },
    {
      q: '新しいバージョンがリリースされたときにローカルLLMモデルを更新するにはどうすればよいですか？',
      a: 'Ollama: `ollama pull <model-name>`を再実行します — 変更されたレイヤーのみをダウンロードします。LM Studio: モデルブラウザを開き、更新版を見つけてダウンロードします。古いGGUFファイルは自動削除されません — ~/.ollama/models（Ollama）または~/Library/Application Support/LM Studio/models（macOS）から手動で削除してディスク容量を解放します。Meta、Alibaba、Mistralのモデル更新は通常、公式リリースの24–48時間以内に利用可能になります。'
    },
    {
      q: '2026年5月のベストOllamaモデルは？',
      a: '2026年5月トップOllamaモデル：Llama 4 Scout 17B（12 GB VRAMで最高品質、`ollama pull llama4:scout`）、Qwen3 8B（最高コーディング、5 GB VRAM）、Gemma 3 12B（RTX 3060で強力な推論、8 GB VRAM）、DeepSeek-R2 8B（数学・論理最強、5 GB VRAM）。'
    },
    {
      q: 'RTX 3060 12 GB VRAMに最適なローカルLLMは？',
      a: 'RTX 3060 12 GB VRAMはローカルLLM向けの優れたGPUです。最適な選択肢：Q4でのLlama 4 Scout 17B（~10 GB VRAM）、Gemma 3 12B（~8 GB VRAM）、Qwen3 14B（~9 GB VRAM）。すべて20–40トークン/秒で動作します。'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai：どれを使うべきか？',
      a: 'localhost:11434のOpenAI互換APIが必要な開発者はOllama。デスクトップGUIとモデルブラウザが必要な初心者はLM Studio。プライバシー重視のチャットにはJan.ai。セットアップ時間：Ollama 2分、LM Studio 5分、Jan.ai 5分。'
    },
    {
      q: '2026年ローカルLLM向けのベスト予算GPUは？',
      a: 'ベスト予算GPU：RTX 3060 12 GB（中古~25,000円）で13Bモデルを20–30トークン/秒。RTX 4060 8 GB（新品~35,000円）で7Bを35–45トークン/秒。RTX 2070 8 GB（中古~15,000円）で7Bを15–20トークン/秒。最低推奨：8 GB VRAM。'
    },
  ],
  zh: [
    {
      q: '什么是本地LLM？',
      a: '在您自己的硬件上运行而不是云API的大型语言模型（例如Llama 4 Scout、Qwen3、DeepSeek）。您获得完整隐私、离线功能、无使用限制和硬件购买后零API成本。'
    },
    {
      q: '本地LLM需要多少VRAM？',
      a: '8 GB VRAM在Q4量化下运行7B模型。16 GB舒适地处理13B模型。40 GB+（例如双RTX 4090或A100）是70B模型所需。Apple Silicon统一内存计为VRAM。'
    },
    {
      q: 'Ollama和LM Studio有什么区别？',
      a: 'Ollama是一个CLI工具，通过简单的终端命令运行模型，并在`localhost:11434`公开OpenAI兼容的API。LM Studio提供桌面GUI、模型浏览器和内置聊天界面。两者都支持相同的模型。'
    },
    {
      q: '本地LLM能否与GPT-4o等云模型相匹敌？',
      a: '在编码和推理任务上，Llama 4 Scout、DeepSeek V3和Qwen3在标准基准（MMLU、HumanEval）上的得分在GPT-4o mini的5–10%以内。Claude Opus 4.8和GPT-4o在复杂的多步任务上保持优势。'
    },
    {
      q: '如何微调本地模型？',
      a: '微调需要500个以上标记的训练示例、QLoRA框架（通过4位量化降低VRAM要求）、24 GB+ VRAM（或云GPU租赁）和7B模型1–4小时的训练时间。'
    },
    {
      q: '2026年运行本地LLM的最少硬件要求是什么？',
      a: '最低要求：8 GB RAM和任何现代CPU（以2–5令牌/秒运行3B–7B模型）。推荐：具有8 GB+ VRAM的GPU（RTX 3060或更新）在7B模型上达到20–40令牌/秒。'
    },
    {
      q: '本地LLM可以免费使用吗？',
      a: '是的。Ollama和LM Studio是免费且开源的。模型本身（Llama、Mistral、Qwen、DeepSeek）在开源许可证下免费获得。唯一的成本是硬件。'
    },
    {
      q: '2026年最佳编码本地LLM是什么？',
      a: 'Qwen3-Coder 7B是消费级硬件（8 GB VRAM）上代码补全和审查的顶级表现者。DeepSeek-Coder V2 Lite是最强的替代方案。对于仅CPU设置，Phi-3.5 Mini在4 GB VRAM以内提供最佳编码质量。'
    },
    {
      q: '没有GPU可以运行本地LLM吗？',
      a: '是的。任何现代CPU都可以使用Ollama（CPU模式）或LM Studio在Q4量子化下运行3B–7B模型。典型的CPU推理速度：现代笔记本电脑CPU上2–8令牌/秒，相比RTX 4060上的20–50令牌/秒。7B Q4需要约5 GB RAM（非VRAM）。对于仅CPU设置，Phi-3.5 Mini（3.8B）和Llama 3.2 3B提供最佳的质量对速度比。'
    },
    {
      q: '发布新版本时如何更新本地LLM模型？',
      a: 'Ollama：再次运行`ollama pull <model-name>`— 仅下载更改的层。LM Studio：打开模型浏览器，找到更新版本并下载。旧的GGUF文件不会自动删除— 从~/.ollama/models（Ollama）或~/Library/Application Support/LM Studio/models（macOS）手动删除以释放磁盘空间。Meta、Alibaba和Mistral的模型更新通常在官方发布后24–48小时内推出。'
    },
    {
      q: '2026年5月最佳Ollama模型是什么？',
      a: '2026年5月顶级Ollama模型：Llama 4 Scout 17B（12 GB VRAM最佳综合质量，`ollama pull llama4:scout`）、Qwen3 8B（最佳编程，5 GB VRAM）、Gemma 3 12B（RTX 3060上强大推理，8 GB VRAM）、DeepSeek-R2 8B（数学逻辑最强，5 GB VRAM）。'
    },
    {
      q: 'RTX 3060 12 GB最适合哪款本地LLM？',
      a: 'RTX 3060 12 GB VRAM是优秀的本地LLM GPU。最佳选择：Q4版Llama 4 Scout 17B（~10 GB VRAM）、Gemma 3 12B（~8 GB VRAM）、Qwen3 14B（~9 GB VRAM）。所有模型以20–40 token/秒运行。'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai：该用哪个？',
      a: '需要CLI和localhost:11434 OpenAI兼容API的开发者用Ollama。需要桌面GUI和模型浏览器的初学者用LM Studio。注重隐私的聊天用Jan.ai。设置时间：Ollama 2分钟，LM Studio 5分钟，Jan.ai 5分钟。'
    },
    {
      q: '2026年本地LLM最佳预算GPU是什么？',
      a: '最佳预算GPU：RTX 3060 12 GB（二手~1800元）运行13B模型20–30 tok/s。RTX 4060 8 GB（新品~2200元）运行7B达35–45 tok/s。RTX 2070 8 GB（二手~1100元）运行7B达15–20 tok/s。AMD RX 6700 XT 12 GB（~1500元）在ROCm/Linux下与RTX 3060相当。最低推荐：8 GB VRAM。'
    },
  ],
  es: [
    {
      q: '¿Qué es un LLM local?',
      a: 'Un modelo de lenguaje grande (p. ej., Llama 4, Qwen3.5, DeepSeek) que se ejecuta en tu propio hardware en lugar de en una API cloud. Obtienes privacidad total, capacidad offline, sin límites de uso y cero costes de API tras la compra del hardware.'
    },
    {
      q: '¿Cuánta VRAM necesito para un LLM local?',
      a: '8 GB VRAM ejecutan modelos 7B con cuantización Q4. 16 GB gestionan modelos 13B cómodamente. 40 GB+ (p. ej., RTX 4090 doble o A100) son necesarios para modelos 70B. La memoria unificada de Apple Silicon cuenta como VRAM.'
    },
    {
      q: '¿Cuál es la diferencia entre Ollama y LM Studio?',
      a: 'Ollama es una herramienta CLI que ejecuta modelos mediante comandos de terminal sencillos y expone una API compatible con OpenAI en `localhost:11434`. LM Studio ofrece una GUI de escritorio, explorador de modelos e interfaz de chat integrada. Ambos soportan los mismos modelos.'
    },
    {
      q: '¿Pueden los LLMs locales competir con modelos cloud como GPT-4o?',
      a: 'En tareas de código y razonamiento, Llama 4 Scout, DeepSeek V3 y Qwen3 obtienen resultados a un 5–10% de GPT-4o mini en benchmarks estándar (MMLU, HumanEval). Claude Opus 4.8 y GPT-4o mantienen ventaja en tareas complejas de múltiples pasos.'
    },
    {
      q: '¿Cómo hago fine-tuning de un modelo local?',
      a: 'El fine-tuning requiere 500+ ejemplos de entrenamiento etiquetados, el framework QLoRA (reduce los requisitos de VRAM mediante cuantización de 4 bits), 24 GB+ VRAM (o alquiler de GPU cloud) y 1–4 horas de entrenamiento para un modelo 7B.'
    },
    {
      q: '¿Cuál es el hardware mínimo para ejecutar un LLM local en 2026?',
      a: 'Mínimo: 8 GB de RAM y cualquier CPU moderna (ejecuta modelos 3B–7B a 2–5 tokens/seg). Recomendado: una GPU con 8 GB+ VRAM (RTX 3060 o superior) para 20–40 tokens/seg en modelos 7B.'
    },
    {
      q: '¿Son gratuitos los LLMs locales?',
      a: 'Sí. Ollama y LM Studio son gratuitos y de código abierto. Los propios modelos (Llama, Mistral, Qwen, DeepSeek) están disponibles bajo licencias open-source sin coste. El único gasto es el hardware.'
    },
    {
      q: '¿Cuál es el mejor LLM local para código en 2026?',
      a: 'Qwen3-Coder 7B es el mejor para completar y revisar código en hardware de consumo (8 GB VRAM). DeepSeek-Coder V2 Lite es la alternativa más potente. Para configuraciones solo-CPU, Phi-3.5 Mini ofrece la mejor calidad de código con menos de 4 GB de RAM.'
    },
    {
      q: '¿Puedo ejecutar un LLM local sin GPU?',
      a: 'Sí. Cualquier CPU moderna puede ejecutar modelos 3B–7B con cuantización Q4 usando Ollama (modo CPU) o LM Studio. Velocidad típica de inferencia CPU: 2–8 tokens/seg en una CPU de portátil moderna, frente a 20–50 tokens/seg en una RTX 4060. 7B Q4 requiere ~5 GB de RAM (no VRAM). Para configuraciones solo-CPU, Phi-3.5 Mini (3,8B) y Llama 3.2 3B ofrecen la mejor relación calidad-velocidad.'
    },
    {
      q: '¿Cómo actualizo los modelos LLM locales cuando se lanzan nuevas versiones?',
      a: 'Ollama: ejecuta `ollama pull <nombre-modelo>` de nuevo — solo descarga las capas modificadas. LM Studio: abre el explorador de modelos, encuentra la versión actualizada y descárgala. Los archivos GGUF antiguos no se eliminan automáticamente — bórralos manualmente de ~/.ollama/models (Ollama) o ~/Library/Application Support/LM Studio/models (macOS) para liberar espacio. Las actualizaciones de Meta, Alibaba y Mistral suelen estar disponibles en 24–48 horas tras el lanzamiento oficial.'
    },
    {
      q: '¿Cuáles son los mejores modelos de Ollama en mayo de 2026?',
      a: 'Top modelos Ollama mayo 2026: Llama 4 Scout 17B (mejor calidad global con 12 GB VRAM, `ollama pull llama4:scout`), Qwen3 8B (mejor código, `ollama pull qwen3:8b`, 5 GB VRAM), Gemma 3 12B (razonamiento potente en RTX 3060, 8 GB VRAM) y DeepSeek-R2 8B (mejor matemáticas/lógica, 5 GB VRAM). Ejecuta cualquier modelo con `ollama run <nombre>` tras descargarlo.'
    },
    {
      q: '¿Cuál es el mejor LLM local para una RTX 3060 con 12 GB VRAM?',
      a: 'La RTX 3060 12 GB VRAM es una excelente GPU para LLMs locales. Mejores opciones: Llama 4 Scout 17B en Q4 (~10 GB VRAM, `ollama pull llama4:scout`), Gemma 3 12B (~8 GB VRAM) o Qwen3 14B (~9 GB VRAM). Todos funcionan a 20–40 tokens/seg. Los 12 GB VRAM te sitúan por encima de la RTX 3060 Ti (8 GB) y dan acceso a modelos de clase 13B y 17B MoE en calidad completa.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai: ¿cuál debo usar?',
      a: 'Usa Ollama si quieres una herramienta CLI con API compatible con OpenAI en localhost:11434 — ideal para desarrolladores y automatización. Usa LM Studio si quieres GUI de escritorio, explorador de modelos e interfaz de chat — ideal para principiantes. Usa Jan.ai si quieres una app de chat centrada en privacidad con tienda de modelos integrada. Los tres soportan los mismos modelos GGUF. Tiempo de configuración: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.'
    },
    {
      q: '¿Cuáles son las mejores GPU económicas para LLMs locales en 2026?',
      a: 'Mejores GPU económicas para LLMs locales: RTX 3060 12 GB (~250 € de segunda mano) ejecuta modelos 13B a 20–30 tok/s. RTX 4060 8 GB (~300 € nueva) ejecuta 7B a 35–45 tok/s. RTX 3080 10 GB (~350 € de segunda mano) gestiona 13B cómodamente. Por menos de 200 €: RTX 2070 8 GB ejecuta modelos 7B a 15–20 tok/s. AMD RX 6700 XT 12 GB (~200 € de segunda mano) es comparable a la RTX 3060 con ROCm en Linux. Mínimo recomendado: 8 GB VRAM para inferencia 7B útil.'
    },
  ],
  pt: [
    {
      q: 'O que é um LLM local?',
      a: 'Um modelo de linguagem grande (por exemplo, Llama 4, Qwen3.5, DeepSeek) que roda no seu próprio hardware em vez de em uma API na cloud. Você obtém privacidade total, capacidade offline, sem limites de uso e zero custos de API após a compra do hardware.'
    },
    {
      q: 'Quanta VRAM eu preciso para um LLM local?',
      a: '8 GB VRAM rodam modelos 7B com quantização Q4. 16 GB lidam com modelos 13B confortavelmente. 40 GB+ (por exemplo, duas RTX 4090 ou uma A100) são necessários para modelos 70B. A memória unificada do Apple Silicon conta como VRAM.'
    },
    {
      q: 'Qual é a diferença entre Ollama e LM Studio?',
      a: 'O Ollama é uma ferramenta CLI que roda modelos por meio de comandos simples no terminal e expõe uma API compatível com OpenAI em `localhost:11434`. O LM Studio oferece uma GUI desktop, navegador de modelos e interface de chat integrada. Ambos suportam os mesmos modelos.'
    },
    {
      q: 'LLMs locais conseguem competir com modelos na cloud como o GPT-4o?',
      a: 'Em tarefas de código e raciocínio, Llama 4 Scout, DeepSeek V3 e Qwen3 pontuam a 5–10% do GPT-4o mini em benchmarks padrão (MMLU, HumanEval). Claude Opus 4.8 e GPT-4o mantêm vantagem em tarefas complexas de várias etapas.'
    },
    {
      q: 'Como faço fine-tuning de um modelo local?',
      a: 'O fine-tuning exige 500+ exemplos de treinamento rotulados, o framework QLoRA (reduz o requisito de VRAM via quantização de 4 bits), 24 GB+ VRAM (ou aluguel de GPU na cloud) e 1–4 horas de tempo de treinamento para um modelo 7B.'
    },
    {
      q: 'Qual é o hardware mínimo para rodar um LLM local em 2026?',
      a: 'Mínimo: 8 GB de RAM e qualquer CPU moderna (roda modelos 3B–7B a 2–5 tokens/s). Recomendado: uma GPU com 8 GB+ VRAM (RTX 3060 ou mais recente) para 20–40 tokens/s em modelos 7B.'
    },
    {
      q: 'Os LLMs locais são gratuitos?',
      a: 'Sim. O Ollama e o LM Studio são gratuitos e de código aberto. Os próprios modelos (Llama, Mistral, Qwen, DeepSeek) estão disponíveis sob licenças open-source sem custo. O único custo é o seu hardware.'
    },
    {
      q: 'Qual é o melhor LLM local para código em 2026?',
      a: 'O Qwen3-Coder 7B é o melhor para autocompletar e revisar código em hardware de consumo (8 GB VRAM). O DeepSeek-Coder V2 Lite é a alternativa mais forte. Para configurações só com CPU, o Phi-3.5 Mini oferece a melhor qualidade de código com menos de 4 GB de RAM.'
    },
    {
      q: 'Posso rodar um LLM local sem GPU?',
      a: 'Sim. Qualquer CPU moderna pode rodar modelos 3B–7B com quantização Q4 usando o Ollama (modo CPU) ou o LM Studio. Velocidade típica de inferência em CPU: 2–8 tokens/s em uma CPU de notebook moderna, comparado a 20–50 tokens/s em uma RTX 4060. 7B Q4 exige ~5 GB de RAM (não VRAM). Para configurações só com CPU, o Phi-3.5 Mini (3.8B) e o Llama 3.2 3B oferecem a melhor relação qualidade-velocidade.'
    },
    {
      q: 'Como atualizo os modelos de LLM local quando novas versões são lançadas?',
      a: 'Ollama: rode `ollama pull <model-name>` novamente — ele baixa apenas as camadas alteradas. LM Studio: abra o navegador de modelos, encontre a versão atualizada e baixe-a. Os arquivos GGUF antigos não são removidos automaticamente — apague-os manualmente em ~/.ollama/models (Ollama) ou ~/Library/Application Support/LM Studio/models (macOS) para liberar espaço em disco. As atualizações de modelos da Meta, Alibaba e Mistral normalmente chegam em 24–48 horas após o lançamento oficial.'
    },
    {
      q: 'Quais são os melhores modelos Ollama em maio de 2026?',
      a: 'Top modelos Ollama de maio de 2026: Llama 4 Scout 17B (melhor geral em 12 GB VRAM, `ollama pull llama4:scout`), Qwen3 8B (melhor código, `ollama pull qwen3:8b`, 5 GB VRAM), Gemma 3 12B (raciocínio forte na RTX 3060, 8 GB VRAM) e DeepSeek-R2 8B (melhor em matemática/lógica, 5 GB VRAM). Rode qualquer modelo com `ollama run <name>` após baixá-lo.'
    },
    {
      q: 'Qual é o melhor LLM local para uma RTX 3060 12 GB VRAM?',
      a: 'A RTX 3060 12 GB VRAM é uma excelente GPU para LLMs locais. Melhores opções: Llama 4 Scout 17B em Q4 (~10 GB VRAM, `ollama pull llama4:scout`), Gemma 3 12B (~8 GB VRAM) ou Qwen3 14B (~9 GB VRAM). Todos rodam a 20–40 tokens/s. Os 12 GB VRAM colocam você acima da RTX 3060 Ti (8 GB) e dão acesso a modelos da classe 13B e 17B MoE em qualidade total.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai: qual devo usar?',
      a: 'Use o Ollama se quiser uma ferramenta CLI com API compatível com OpenAI em localhost:11434 — ideal para desenvolvedores e automação. Use o LM Studio se quiser uma GUI desktop, navegador de modelos e interface de chat — ideal para iniciantes. Use o Jan.ai se quiser um app de chat com foco em privacidade e loja de modelos integrada. Os três suportam os mesmos modelos GGUF. Tempo de configuração: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.'
    },
    {
      q: 'Quais são as melhores GPUs econômicas para LLMs locais em 2026?',
      a: 'Melhores GPUs econômicas para LLMs locais: RTX 3060 12 GB (~$250 usada) roda modelos 13B a 20–30 tok/s. RTX 4060 8 GB (~$300 nova) roda 7B a 35–45 tok/s. RTX 3080 10 GB (~$350 usada) lida com 13B confortavelmente. Por menos de $200: RTX 2070 8 GB roda modelos 7B a 15–20 tok/s. AMD RX 6700 XT 12 GB (~$200 usada) é comparável à RTX 3060 com ROCm no Linux. Mínimo recomendado: 8 GB VRAM para inferência 7B útil. Os preços no Brasil podem variar bastante devido a impostos de importação.'
    },
  ],
}

const HUB_REGIONAL_TITLE: Record<string, string> = {
  en: 'Compliance & Regional Context',
  de: 'Compliance & Regionaler Kontext',
  fr: 'Conformité et contexte régional',
  ja: 'コンプライアンスと地域別コンテキスト',
  zh: '合规与地区背景',
  es: 'Cumplimiento normativo y contexto regional',
  pt: 'Conformidade e contexto regional',
}

const HUB_REGIONAL_ITEMS: Record<string, {region:string, text:string}[]> = {
  en: [
    {
      region: 'EU / GDPR',
      text: 'Local LLMs process all data on-premises. When combined with full-disk encryption and access logging, on-premises inference satisfies GDPR Article 28 (no data processor agreement needed if data never leaves the machine). Ollama binds to `localhost` by default — no external exposure.'
    },
    {
      region: 'Japan / APPI',
      text: 'Japan\'s Act on the Protection of Personal Information (APPI) restricts cross-border data transfer for personal data. Local LLMs eliminate cross-border transfer entirely. METI\'s 2024 AI governance guidelines encourage privacy-preserving AI — local deployment is aligned with these recommendations.'
    },
    {
      region: 'China / CAC',
      text: 'The Cyberspace Administration of China\'s Interim Measures for Generative AI Services (2023) require AI providers offering services to Chinese users to register. Local LLMs running entirely on-premises are outside the CAC\'s public-facing provider definition, significantly reducing compliance burden for enterprise deployments.'
    },
  ],
  de: [
    {
      region: 'EU / DSGVO',
      text: 'Lokale LLMs verarbeiten alle Daten vor Ort. In Kombination mit vollständiger Festplattenverschlüsselung und Zugriffsprotokollierung erfüllt On-Premises-Verarbeitung DSGVO Artikel 28 (keine Datenschutzvereinbarung erforderlich, wenn Daten die Maschine nicht verlassen). Ollama bindet standardmäßig an `localhost` — keine externe Zugänglichkeit. Dies entspricht BSI-Anforderungen für sichere Cloud-Nutzung und wird vom deutschen Mittelstand zunehmend bevorzugt.'
    },
    {
      region: 'Japan / APPI',
      text: 'Japans Gesetz zum Schutz persönlicher Informationen (APPI) beschränkt die grenzüberschreitende Datenübertragung. Lokale LLMs eliminieren die grenzüberschreitende Übertragung vollständig. METs AI-Governance-Richtlinien von 2024 unterstützen datenschutzerhaltende KI — lokale Bereitstellung ist mit diesen Empfehlungen vereinbar.'
    },
    {
      region: 'China / CAC',
      text: 'Chinas Cyberspace-Administration regelt generative KI-Dienste (2023). Lokale LLMs, die vollständig vor Ort laufen, fallen außerhalb der öffentlich zugänglichen Anbieter-Definition der CAC und reduzieren die Compliance-Anforderungen für Unternehmensbereitstellungen erheblich.'
    },
  ],
  fr: [
    {
      region: 'EU / RGPD',
      text: 'Les LLMs locaux traitent toutes les données sur site. En combinaison avec le chiffrement du disque complet et la journalisation des accès, le traitement sur site satisfait l\'article 28 du RGPD (aucun accord de traitement de données nécessaire si les données ne quittent jamais la machine). Ollama se lie à `localhost` par défaut — aucune exposition externe. La CNIL recommande cette approche pour les processus d\'IA respectueux de la vie privée.'
    },
    {
      region: 'Japan / APPI',
      text: 'La loi japonaise sur la protection des informations personnelles (APPI) restreint les transferts transfrontaliers de données. Les LLMs locaux éliminent entièrement les transferts transfrontaliers. Les directives de gouvernance de l\'IA du METI 2024 encouragent l\'IA préservant la confidentialité — le déploiement local s\'aligne avec ces recommandations.'
    },
    {
      region: 'China / CAC',
      text: 'La Cyberspace Administration of China (2023) réglemente les services d\'IA générative. Les LLMs locaux fonctionnant entièrement sur site sortent de la définition du fournisseur public-facing de la CAC, réduisant considérablement le fardeau de conformité pour les déploiements d\'entreprise.'
    },
  ],
  ja: [
    {
      region: 'Japan / APPI',
      text: '日本の個人情報保護法（APPI）は個人データの国際転送を制限しています。ローカルLLMは国際転送を完全に排除します。METI の2024年AI ガバナンスガイドラインはプライバシー保護AIを推奨しており、ローカルデプロイはこれらの推奨事項に一致しています。大規模企業は社内システムとしてのローカルLLMを採用して、データ主権と規制要件を満たしています。'
    },
    {
      region: 'EU / GDPR',
      text: 'ローカルLLMはすべてのデータをオンプレミスで処理します。フルディスク暗号化とアクセスログと組み合わせると、オンプレミス推論はGDPR第28条を満たします（データがマシンを離れない場合、データプロセッサー契約は不要）。Ollamaはデフォルトで`localhost`にバインド — 外部露出なし。'
    },
    {
      region: 'China / CAC',
      text: '中国のサイバースペース管理（2023）は生成AIサービスを規制しています。完全にオンプレミスで実行されるローカルLLMはCACの公開フェーシング提供者定義の外側にあり、エンタープライズデプロイのコンプライアンス負担を大幅に削減します。'
    },
  ],
  zh: [
    {
      region: 'China / CAC',
      text: '中国网络信息办公室（2023）规范生成式AI服务。完全在本地运行的本地LLM超出了CAC公共面向提供商的定义，大大减轻了企业部署的合规负担。数据主权和网络安全法（2024）鼓励在国内部署AI模型以保护数据——本地LLM完全符合这些要求。'
    },
    {
      region: 'EU / GDPR',
      text: '本地LLM在本地处理所有数据。结合全磁盘加密和访问日志，本地处理满足GDPR第28条（如果数据永远不离开机器，则不需要数据处理协议）。Ollama默认绑定到`localhost`— 无外部暴露。'
    },
    {
      region: 'Japan / APPI',
      text: '日本个人信息保护法（APPI）限制个人数据的跨境转移。本地LLM完全消除跨境转移。METI 2024年AI治理指南鼓励隐私保护AI— 本地部署与这些建议相一致。'
    },
  ],
  es: [
    {
      region: 'EU / GDPR',
      text: 'Los LLMs locales procesan todos los datos en local. Combinado con cifrado de disco completo y registro de accesos, la inferencia en local satisface el Artículo 28 del GDPR (no se requiere acuerdo de encargado del tratamiento si los datos nunca salen de la máquina). Ollama se enlaza a `localhost` por defecto — sin exposición externa.'
    },
    {
      region: 'Japan / APPI',
      text: 'La Ley japonesa de Protección de Información Personal (APPI) restringe la transferencia transfronteriza de datos personales. Los LLMs locales eliminan por completo las transferencias transfronterizas. Las directrices de gobernanza de IA del METI de 2024 fomentan la IA respetuosa con la privacidad — el despliegue local se alinea con estas recomendaciones.'
    },
    {
      region: 'China / CAC',
      text: 'Las Medidas Provisionales de la Administración del Ciberespacio de China para Servicios de IA Generativa (2023) exigen el registro de proveedores que ofrezcan servicios a usuarios chinos. Los LLMs locales que se ejecutan íntegramente en local quedan fuera de la definición de proveedor público de la CAC, reduciendo significativamente la carga de cumplimiento en despliegues empresariales.'
    },
  ],
  pt: [
    {
      region: 'Brasil / LGPD',
      text: 'Os LLMs locais processam todos os dados no próprio ambiente. A inferência local mantém os dados pessoais dentro da organização, atendendo aos princípios da LGPD (Lei Geral de Proteção de Dados) e reduzindo a superfície de exposição fiscalizada pela ANPD (Autoridade Nacional de Proteção de Dados). O Ollama se vincula ao `localhost` por padrão — sem exposição externa.'
    },
    {
      region: 'EU / GDPR',
      text: 'Os LLMs locais processam todos os dados no próprio ambiente. Combinada com criptografia de disco completo e registro de acessos, a inferência local atende ao Artigo 28 do GDPR (nenhum acordo de operador de dados é necessário se os dados nunca saem da máquina). O Ollama se vincula ao `localhost` por padrão — sem exposição externa.'
    },
    {
      region: 'China / CAC',
      text: 'As Medidas Provisórias da Administração do Ciberespaço da China para Serviços de IA Generativa (2023) exigem o registro de provedores que ofereçam serviços a usuários chineses. Os LLMs locais que rodam inteiramente no próprio ambiente ficam fora da definição de provedor de acesso público da CAC, reduzindo significativamente a carga de conformidade em implantações enterprise.'
    },
  ],
}

const HUB_PRESENTATION_HEADING: Record<string, string> = {
  en: 'Visual Summary: Local LLMs 2026',
  de: 'Visuelle Zusammenfassung: Lokale LLMs 2026',
  fr: 'Résumé visuel : LLMs locaux 2026',
  ja: 'ビジュアルサマリー：ローカルLLM 2026',
  zh: '视觉摘要：本地LLM 2026',
  es: 'Resumen visual: LLMs locales 2026',
  pt: 'Resumo visual: LLMs locais 2026',
}

const HUB_PRESENTATION_DESC: Record<string, string> = {
  en: 'The slide deck below covers hardware requirements (8 GB VRAM for 7B models, 40 GB+ for 70B), top open-source models 2026, Ollama setup in 5 minutes, Q4_K_M quantization, regional compliance (GDPR, APPI), and key takeaways. Download the PDF as a Local LLMs quick-reference card.',
  de: 'Die Folien unten zeigen Hardwareanforderungen (8 GB VRAM für 7B-Modelle, 40 GB+ für 70B), Top-Open-Source-Modelle 2026, Ollama-Setup in 5 Minuten, Q4_K_M-Quantisierung, regionale Compliance (DSGVO, APPI) und wichtige Erkenntnisse. PDF als lokales LLM-Referenzkarte herunterladen.',
  fr: 'Les diapositives ci-dessous couvrent les exigences matérielles (8 Go de VRAM pour les modèles 7B, 40 Go+ pour les 70B), les meilleurs modèles open source 2026, la configuration Ollama en 5 minutes, la quantification Q4_K_M, la conformité régionale (RGPD, APPI) et les points clés. Téléchargez le PDF comme carte de référence LLM locale.',
  ja: '以下のスライドは、ハードウェア要件（7Bモデルに8 GB VRAM、70Bに40 GB以上）、2026年トップオープンソースモデル、5分でのOllamaセットアップ、Q4_K_M量子化、地域コンプライアンス（GDPR、APPI）、重要なポイントをカバーしています。PDFをローカルLLMクイックリファレンスカードとしてダウンロードしてください。',
  zh: '以下幻灯片涵盖硬件需求（7B模型需要8 GB显存，70B需要40 GB+）、2026年顶级开源模型、5分钟内完成Ollama设置、Q4_K_M量化、地区合规性（GDPR、APPI）和关键要点。将PDF下载为本地LLM快速参考卡。',
  es: 'La presentación a continuación cubre los requisitos de hardware (8 GB VRAM para modelos 7B, 40 GB+ para 70B), los principales modelos open-source de 2026, configuración de Ollama en 5 minutos, cuantización Q4_K_M, cumplimiento regional (GDPR, APPI) y puntos clave. Descarga el PDF como tarjeta de referencia rápida de LLMs locales.',
  pt: 'A apresentação abaixo cobre os requisitos de hardware (8 GB VRAM para modelos 7B, 40 GB+ para 70B), os principais modelos open-source de 2026, configuração do Ollama em 5 minutos, quantização Q4_K_M, conformidade regional (GDPR, APPI) e pontos principais. Baixe o PDF como cartão de referência rápida de LLMs locais.',
}

const HUB_PRESENTATION_PDF: Record<string, string> = {
  en: 'Download Local LLMs Reference Card (PDF)',
  de: 'Lokales LLM-Referenzblatt herunterladen (PDF)',
  fr: 'Télécharger la carte de référence LLMs locaux (PDF)',
  ja: 'ローカルLLMリファレンスカードをダウンロード（PDF）',
  zh: '下载本地LLM参考卡（PDF）',
  es: 'Descargar tarjeta de referencia LLMs locales (PDF)',
  pt: 'Baixar cartão de referência de LLMs locais (PDF)',
}

const HUB_FIGCAPTION_VRAM: Record<string, string> = {
  en: 'VRAM requirements at Q4_K_M quantization — 8 GB runs 7B models at 50–80 tok/s; 40 GB+ required for 70B models like Llama 4 Scout.',
  de: 'VRAM-Anforderungen bei Q4_K_M-Quantisierung — 8 GB führt 7B-Modelle mit 50–80 Tok/s aus; 40 GB+ erforderlich für 70B-Modelle wie Llama 4 Scout.',
  fr: 'Besoins en VRAM avec quantification Q4_K_M — 8 Go pour les modèles 7B à 50–80 tok/s ; 40 Go+ requis pour les modèles 70B comme Llama 4 Scout.',
  ja: 'Q4_K_M量子化でのVRAM要件 — 8 GBで7Bモデルを50–80 tok/sで実行；70BモデルのLlama 4 Scoutなどには40 GB以上が必要。',
  zh: 'Q4_K_M量化下的VRAM要求 — 8 GB以50–80 tok/s运行7B模型；70B模型如Llama 4 Scout需要40 GB+。',
  es: 'Requisitos de VRAM con cuantización Q4_K_M — 8 GB ejecuta modelos 7B a 50–80 tok/s; se requieren 40 GB+ para modelos 70B como Llama 4 Scout.',
  pt: 'Requisitos de VRAM com quantização Q4_K_M — 8 GB executa modelos 7B a 50–80 tok/s; 40 GB+ necessários para modelos 70B como Llama 4 Scout.',
}

const HUB_FIGCAPTION_CLOUD: Record<string, string> = {
  en: 'Local LLMs cost $0/token after hardware purchase; cloud APIs charge $0.15–$60 per 1M tokens with better average quality and zero setup.',
  de: 'Lokale LLMs kosten $0/Token nach Hardware-Kauf; Cloud-APIs berechnen $0,15–$60 pro 1M Token mit besserer Qualität und ohne Einrichtung.',
  fr: 'Les LLMs locaux coûtent $0/token après achat du matériel ; les APIs cloud facturent $0,15–$60 pour 1M tokens avec une meilleure qualité moyenne.',
  ja: 'ローカルLLMはハードウェア購入後$0/トークン；クラウドAPIは1Mトークンあたり$0.15〜$60で平均品質が高く設定不要。',
  zh: '本地LLM在硬件购买后每token费用为$0；云API每1M token收取$0.15–$60，平均质量更高且无需设置。',
  es: 'Los LLMs locales cuestan $0/token tras la compra del hardware; las APIs cloud cobran $0,15–$60 por 1M tokens con mejor calidad media y configuración cero.',
  pt: 'LLMs locais custam $0/token após a compra do hardware; APIs cloud cobram $0,15–$60 por 1M tokens com melhor qualidade média e zero configuração.',
}

const HUB_FIGCAPTION_MODELS: Record<string, string> = {
  en: 'Top open-source local models 2026: Llama 4 Scout, Qwen3.5 72B, DeepSeek V3 (workstation) and Mistral 7B, Phi-3.5 Mini (consumer hardware).',
  de: 'Top Open-Source-Lokalmodelle 2026: Llama 4 Scout, Qwen3.5 72B, DeepSeek V3 (Workstation) und Mistral 7B, Phi-3.5 Mini (Consumer-Hardware).',
  fr: 'Meilleurs modèles locaux open source 2026 : Llama 4 Scout, Qwen3.5 72B, DeepSeek V3 (workstation) et Mistral 7B, Phi-3.5 Mini (hardware grand public).',
  ja: '2026年トップオープンソースローカルモデル：Llama 4 Scout、Qwen3.5 72B、DeepSeek V3（ワークステーション）とMistral 7B、Phi-3.5 Mini（コンシューマーハードウェア）。',
  zh: '2026年顶级开源本地模型：Llama 4 Scout、Qwen3.5 72B、DeepSeek V3（工作站）以及Mistral 7B、Phi-3.5 Mini（消费级硬件）。',
  es: 'Mejores modelos locales open-source 2026: Llama 4 Scout, Qwen3.5 72B, DeepSeek V3 (workstation) y Mistral 7B, Phi-3.5 Mini (hardware de consumo).',
  pt: 'Melhores modelos locais de código aberto 2026: Llama 4 Scout, Qwen3.5 72B, DeepSeek V3 (workstation) e Mistral 7B, Phi-3.5 Mini (hardware consumer).',
}

const HUB_FIGCAPTION_OLLAMA: Record<string, string> = {
  en: 'Ollama terminal: two commands install and run Llama 3.2 locally — from zero to 60 tokens/sec in under 10 minutes.',
  de: 'Ollama-Terminal: Zwei Befehle installieren und starten Llama 3.2 lokal — von null auf 60 Token/s in unter 10 Minuten.',
  fr: 'Terminal Ollama : deux commandes pour installer et exécuter Llama 3.2 localement — de zéro à 60 tokens/sec en moins de 10 minutes.',
  ja: 'Ollamaターミナル：2つのコマンドでLlama 3.2をローカルにインストール・実行 — 10分以内にゼロから60トークン/秒へ。',
  zh: 'Ollama终端：两条命令本地安装并运行Llama 3.2 — 10分钟内从零到60 token/s。',
  es: 'Terminal de Ollama: dos comandos instalan y ejecutan Llama 3.2 localmente — de cero a 60 tokens/seg en menos de 10 minutos.',
  pt: 'Terminal Ollama: dois comandos instalam e executam o Llama 3.2 localmente — do zero a 60 tokens/s em menos de 10 minutos.',
}

const HUB_FIGCAPTION_PQ: Record<string, string> = {
  en: 'PromptQuorum dispatches one prompt simultaneously to your local Ollama model and 25+ cloud APIs — compare results side-by-side in one view.',
  de: 'PromptQuorum sendet einen Prompt gleichzeitig an Ihr lokales Ollama-Modell und 25+ Cloud-APIs — vergleichen Sie Ergebnisse nebeneinander in einer Ansicht.',
  fr: 'PromptQuorum envoie un prompt simultanément à votre modèle Ollama local et à 25+ APIs cloud — comparez les résultats côte à côte en une seule vue.',
  ja: 'PromptQuorumはローカルOllamaモデルと25以上のクラウドAPIに同時にプロンプトを送信 — 1つの画面で結果を並べて比較。',
  zh: 'PromptQuorum同时将一个提示词发送到您的本地Ollama模型和25+个云API — 在一个视图中并排比较结果。',
  es: 'PromptQuorum envía un prompt simultáneamente a tu modelo Ollama local y a 25+ APIs cloud — compara los resultados lado a lado en una sola vista.',
  pt: 'O PromptQuorum envia um prompt simultaneamente ao seu modelo Ollama local e a 25+ APIs cloud — compare os resultados lado a lado em uma única visualização.',
}

const HUB_BOTTOM_FAQ_TITLE: Record<string, string> = {
  en: 'Frequently Asked Questions About Local LLMs',
  de: 'Häufig gestellte Fragen zu lokalen LLMs',
  fr: 'Questions fréquentes sur les LLMs locaux',
  ja: 'ローカルLLMに関するよくある質問',
  zh: '关于本地LLM的常见问题',
  es: 'Preguntas frecuentes sobre LLMs locales',
  pt: 'Perguntas frequentes sobre LLMs locais',
}

const HUB_FAQS_BOTTOM: Record<string, { q: string; a: string }[]> = {
  en: [
    {
      q: 'What is a local LLM?',
      a: 'A local LLM is a large language model that runs entirely on your own hardware — CPU, GPU, or Apple Silicon — without sending data to external servers. You download the model file (typically 2–40 GB) and run it using a tool like Ollama or LM Studio. As of May 2026, the most popular local LLM is Meta Llama 4 Scout 17B, which runs on machines with 10 GB VRAM at 10–80 tokens/sec.',
    },
    {
      q: 'Is a local LLM better than ChatGPT?',
      a: 'For privacy and cost, yes. For raw output quality, no. As of 2026, frontier cloud models (GPT-4o, Claude Opus 4.8) outperform all locally-runnable models on complex reasoning. However, local 70B models (Llama 4 Scout, Qwen3 72B) match or exceed GPT-4o mini on most everyday tasks — at zero per-query cost.',
    },
    {
      q: 'How much RAM do I need to run a local LLM?',
      a: 'Minimum: 8 GB RAM to run a 7B model at Q4 quantization. Recommended: 16 GB for 13B models, 40+ GB for 70B models. Apple Silicon unified memory counts fully toward this — an M3 Mac with 18 GB can run a 13B model well. GPU VRAM is equivalent to RAM for GPU inference.',
    },
    {
      q: 'How do I run a local LLM?',
      a: 'Install Ollama (ollama.com), then run one command: `ollama run llama3.1:8b`. The model downloads automatically and you can start chatting in under 5 minutes. No API key, no account, no internet connection after the initial download.',
    },
    {
      q: 'What is the best free local LLM in 2026?',
      a: 'Meta Llama 4 Scout 17B for general use (Llama Community License, 10 GB VRAM). Qwen3-Coder 32B for coding (92.7% HumanEval, 20 GB VRAM). DeepSeek-R2 8B for reasoning (MIT licence, 5 GB VRAM). All are free, open-weight, and available via `ollama pull`.',
    },
    {
      q: 'Are local LLMs private?',
      a: 'Yes. When running with Ollama or LM Studio, your prompts, documents, and responses never leave your machine. No data is transmitted to any server. This makes local LLMs the recommended choice for GDPR-regulated workflows, legal and medical document processing, and any task involving confidential or personal information.',
    },
  ],
  de: [
    {
      q: 'Was ist ein lokales LLM?',
      a: 'Ein lokales LLM ist ein großes Sprachmodell, das vollständig auf Ihrer eigenen Hardware läuft — CPU, GPU oder Apple Silicon —, ohne Daten an externe Server zu senden. Sie laden die Modelldatei (typischerweise 2–40 GB) herunter und führen sie mit einem Tool wie Ollama oder LM Studio aus. Stand Mai 2026 ist Meta Llama 4 Scout 17B das beliebteste lokale LLM; es läuft auf Geräten mit 10 GB VRAM mit 10–80 Tokens/Sek.',
    },
    {
      q: 'Ist ein lokales LLM besser als ChatGPT?',
      a: 'Bei Datenschutz und Kosten: ja. Bei der reinen Ausgabequalität: nein. Stand 2026 übertreffen führende Cloud-Modelle (GPT-4o, Claude Opus 4.8) alle lokal ausführbaren Modelle bei komplexem logischem Schließen. Lokale 70B-Modelle (Llama 4 Scout, Qwen3 72B) erreichen oder übertreffen jedoch GPT-4o mini bei den meisten Alltagsaufgaben — bei null Kosten pro Anfrage.',
    },
    {
      q: 'Wie viel RAM benötige ich für ein lokales LLM?',
      a: 'Minimum: 8 GB RAM für ein 7B-Modell in Q4-Quantisierung. Empfohlen: 16 GB für 13B-Modelle, 40+ GB für 70B-Modelle. Der Unified Memory von Apple Silicon zählt vollständig dazu — ein M3 Mac mit 18 GB kann ein 13B-Modell gut ausführen. Bei GPU-Inferenz entspricht der VRAM dem RAM.',
    },
    {
      q: 'Wie führe ich ein lokales LLM aus?',
      a: 'Installieren Sie Ollama (ollama.com) und führen Sie einen einzigen Befehl aus: `ollama run llama3.1:8b`. Das Modell wird automatisch heruntergeladen, und Sie können in weniger als 5 Minuten mit dem Chatten beginnen. Kein API-Schlüssel, kein Konto, keine Internetverbindung nach dem ersten Download erforderlich.',
    },
    {
      q: 'Was ist das beste kostenlose lokale LLM 2026?',
      a: 'Meta Llama 4 Scout 17B für allgemeine Zwecke (Llama Community License, 10 GB VRAM). Qwen3-Coder 32B für Coding (92,7 % HumanEval, 20 GB VRAM). DeepSeek-R2 8B für logisches Schließen (MIT-Lizenz, 5 GB VRAM). Alle sind kostenlos, offen (Open Weight) und über `ollama pull` verfügbar.',
    },
    {
      q: 'Sind lokale LLMs privat?',
      a: 'Ja. Bei der Ausführung mit Ollama oder LM Studio verlassen Ihre Prompts, Dokumente und Antworten niemals Ihr Gerät. Es werden keine Daten an einen Server übertragen. Das macht lokale LLMs zur empfohlenen Wahl für DSGVO-regulierte Workflows, die Verarbeitung juristischer und medizinischer Dokumente sowie jede Aufgabe mit vertraulichen oder personenbezogenen Daten.',
    },
  ],
  fr: [
    {
      q: "Qu'est-ce qu'un LLM local ?",
      a: "Un LLM local est un grand modèle de langage qui s'exécute entièrement sur votre propre matériel — CPU, GPU ou Apple Silicon — sans envoyer de données à des serveurs externes. Vous téléchargez le fichier du modèle (généralement 2 à 40 Go) et l'exécutez avec un outil comme Ollama ou LM Studio. En mai 2026, le LLM local le plus populaire est Meta Llama 4 Scout 17B, qui fonctionne sur des machines avec 10 Go de VRAM à 10–80 tokens/s.",
    },
    {
      q: 'Un LLM local est-il meilleur que ChatGPT ?',
      a: 'Pour la confidentialité et le coût, oui. Pour la qualité brute des réponses, non. En 2026, les modèles cloud de pointe (GPT-4o, Claude Opus 4.8) surpassent tous les modèles exécutables localement sur le raisonnement complexe. Les modèles locaux de 70B (Llama 4 Scout, Qwen3 72B) égalent ou dépassent toutefois GPT-4o mini sur la plupart des tâches courantes — pour un coût nul par requête.',
    },
    {
      q: 'Combien de RAM faut-il pour exécuter un LLM local ?',
      a: "Minimum : 8 Go de RAM pour un modèle 7B en quantification Q4. Recommandé : 16 Go pour les modèles 13B, 40 Go ou plus pour les modèles 70B. La mémoire unifiée d'Apple Silicon compte intégralement — un Mac M3 avec 18 Go exécute bien un modèle 13B. Le VRAM du GPU équivaut à la RAM pour l'inférence GPU.",
    },
    {
      q: 'Comment exécuter un LLM local ?',
      a: "Installez Ollama (ollama.com), puis exécutez une seule commande : `ollama run llama3.1:8b`. Le modèle se télécharge automatiquement et vous pouvez commencer à discuter en moins de 5 minutes. Aucune clé API, aucun compte, aucune connexion Internet requise après le téléchargement initial.",
    },
    {
      q: 'Quel est le meilleur LLM local gratuit en 2026 ?',
      a: 'Meta Llama 4 Scout 17B pour un usage général (Llama Community License, 10 Go de VRAM). Qwen3-Coder 32B pour le code (92,7 % HumanEval, 20 Go de VRAM). DeepSeek-R2 8B pour le raisonnement (licence MIT, 5 Go de VRAM). Tous sont gratuits, à poids ouverts, et disponibles via `ollama pull`.',
    },
    {
      q: 'Les LLM locaux sont-ils privés ?',
      a: "Oui. Avec Ollama ou LM Studio, vos prompts, documents et réponses ne quittent jamais votre machine. Aucune donnée n'est transmise à un serveur. Cela fait des LLM locaux le choix recommandé pour les flux de travail soumis au RGPD, le traitement de documents juridiques et médicaux, et toute tâche impliquant des informations confidentielles ou personnelles.",
    },
  ],
  ja: [
    {
      q: 'ローカルLLMとは何ですか?',
      a: 'ローカルLLMとは、CPU・GPU・Apple Siliconなど、お使いのハードウェア上で完全に動作する大規模言語モデルです。外部サーバーへデータを送信しません。モデルファイル(通常2〜40GB)をダウンロードし、OllamaやLM Studioなどのツールで実行します。2026年5月時点で最も人気のあるローカルLLMはMeta Llama 4 Scout 17Bで、10GB VRAMのマシンで10〜80トークン/秒で動作します。',
    },
    {
      q: 'ローカルLLMはChatGPTより優れていますか?',
      a: 'プライバシーとコストの面では優れています。出力品質そのものでは劣ります。2026年時点で、最先端のクラウドモデル(GPT-4o、Claude Opus 4.8)は複雑な推論においてローカルで実行可能な全モデルを上回ります。ただし、ローカルの70Bモデル(Llama 4 Scout、Qwen3 72B)は多くの日常タスクでGPT-4o miniと同等かそれ以上の性能を発揮し、クエリごとのコストはゼロです。',
    },
    {
      q: 'ローカルLLMの実行にはどれくらいのRAMが必要ですか?',
      a: '最低: 7BモデルをQ4量子化で実行するには8GB RAM。推奨: 13Bモデルには16GB、70Bモデルには40GB以上。Apple Siliconのユニファイドメモリはこれに完全にカウントされます — 18GBのM3 Macなら13Bモデルを問題なく実行できます。GPU推論の場合、GPU VRAMはRAMと同等です。',
    },
    {
      q: 'ローカルLLMはどうやって実行しますか?',
      a: 'Ollama(ollama.com)をインストールし、コマンドを1つ実行するだけです: `ollama run llama3.1:8b`。モデルは自動的にダウンロードされ、5分以内にチャットを開始できます。APIキー、アカウント登録は不要で、初回ダウンロード後はインターネット接続も不要です。',
    },
    {
      q: '2026年で最も優れた無料のローカルLLMは何ですか?',
      a: '汎用にはMeta Llama 4 Scout 17B(Llama Community License、10GB VRAM)。コーディングにはQwen3-Coder 32B(HumanEval 92.7%、20GB VRAM)。推論にはDeepSeek-R2 8B(MITライセンス、5GB VRAM)。いずれも無料でオープンウェイトであり、`ollama pull`から入手できます。',
    },
    {
      q: 'ローカルLLMはプライバシーが保たれますか?',
      a: 'はい。OllamaやLM Studioで実行する場合、プロンプト・文書・応答が端末の外に出ることは一切ありません。サーバーへのデータ送信も発生しません。そのため、ローカルLLMはGDPR規制下のワークフロー、法務・医療文書の処理、機密情報や個人情報を扱うあらゆるタスクに推奨される選択肢です。',
    },
  ],
  zh: [
    {
      q: '什么是本地LLM?',
      a: '本地LLM是完全在您自己的硬件上运行的大语言模型——CPU、GPU或Apple Silicon均可——不会将数据发送到外部服务器。您下载模型文件(通常2–40 GB),然后使用Ollama或LM Studio等工具运行。截至2026年5月,最受欢迎的本地LLM是Meta Llama 4 Scout 17B,可在10 GB VRAM的设备上以10–80 tokens/秒的速度运行。',
    },
    {
      q: '本地LLM比ChatGPT更好吗?',
      a: '在隐私和成本方面,是的。在原始输出质量方面,不是。截至2026年,前沿云端模型(GPT-4o、Claude Opus 4.8)在复杂推理任务上优于所有可本地运行的模型。不过,本地70B模型(Llama 4 Scout、Qwen3 72B)在大多数日常任务上可与GPT-4o mini持平甚至更优——且每次查询零成本。',
    },
    {
      q: '运行本地LLM需要多少RAM?',
      a: '最低要求:8 GB RAM可运行Q4量化的7B模型。推荐配置:13B模型需16 GB,70B模型需40 GB以上。Apple Silicon的统一内存可完全计入——配备18 GB内存的M3 Mac可流畅运行13B模型。对于GPU推理,GPU VRAM相当于RAM。',
    },
    {
      q: '如何运行本地LLM?',
      a: '安装Ollama(ollama.com),然后执行一条命令:`ollama run llama3.1:8b`。模型会自动下载,5分钟内即可开始对话。无需API密钥、无需注册账户,首次下载完成后也无需联网。',
    },
    {
      q: '2026年最好的免费本地LLM是什么?',
      a: '通用场景推荐Meta Llama 4 Scout 17B(Llama Community License,10 GB VRAM)。编程场景推荐Qwen3-Coder 32B(HumanEval 92.7%,20 GB VRAM)。推理场景推荐DeepSeek-R2 8B(MIT许可,5 GB VRAM)。均为免费、开放权重模型,可通过`ollama pull`获取。',
    },
    {
      q: '本地LLM是否保护隐私?',
      a: '是的。使用Ollama或LM Studio运行时,您的提示词、文档和回复永远不会离开您的设备,不会向任何服务器传输数据。因此,本地LLM是处理GDPR合规工作流、法律与医疗文档,以及任何涉及机密或个人信息任务的推荐选择。',
    },
  ],
  es: [
    {
      q: '¿Qué es un LLM local?',
      a: 'Un LLM local es un modelo de lenguaje grande que se ejecuta completamente en tu propio hardware — CPU, GPU o Apple Silicon — sin enviar datos a servidores externos. Descargas el archivo del modelo (normalmente entre 2 y 40 GB) y lo ejecutas con una herramienta como Ollama o LM Studio. Desde mayo de 2026, el LLM local más popular es Meta Llama 4 Scout 17B, que funciona en equipos con 10 GB de VRAM a 10–80 tokens/seg.',
    },
    {
      q: '¿Es un LLM local mejor que ChatGPT?',
      a: 'En privacidad y coste, sí. En calidad bruta de las respuestas, no. En 2026, los modelos en la nube de última generación (GPT-4o, Claude Opus 4.8) superan a todos los modelos ejecutables localmente en razonamiento complejo. Sin embargo, los modelos locales de 70B (Llama 4 Scout, Qwen3 72B) igualan o superan a GPT-4o mini en la mayoría de tareas cotidianas — con coste cero por consulta.',
    },
    {
      q: '¿Cuánta RAM necesito para ejecutar un LLM local?',
      a: 'Mínimo: 8 GB de RAM para un modelo 7B con cuantización Q4. Recomendado: 16 GB para modelos 13B, 40+ GB para modelos 70B. La memoria unificada de Apple Silicon cuenta por completo para esto — un Mac M3 con 18 GB ejecuta bien un modelo 13B. La VRAM de la GPU equivale a la RAM en inferencia por GPU.',
    },
    {
      q: '¿Cómo ejecuto un LLM local?',
      a: 'Instala Ollama (ollama.com) y ejecuta un solo comando: `ollama run llama3.1:8b`. El modelo se descarga automáticamente y puedes empezar a chatear en menos de 5 minutos. Sin clave API, sin cuenta, sin conexión a internet tras la descarga inicial.',
    },
    {
      q: '¿Cuál es el mejor LLM local gratuito en 2026?',
      a: 'Meta Llama 4 Scout 17B para uso general (Llama Community License, 10 GB de VRAM). Qwen3-Coder 32B para programación (92.7% en HumanEval, 20 GB de VRAM). DeepSeek-R2 8B para razonamiento (licencia MIT, 5 GB de VRAM). Todos son gratuitos, de pesos abiertos y están disponibles vía `ollama pull`.',
    },
    {
      q: '¿Son privados los LLM locales?',
      a: 'Sí. Al ejecutarlos con Ollama o LM Studio, tus prompts, documentos y respuestas nunca salen de tu equipo. No se transmiten datos a ningún servidor. Esto convierte a los LLM locales en la opción recomendada para flujos de trabajo sujetos al RGPD, el procesamiento de documentos legales y médicos, y cualquier tarea que implique información confidencial o personal.',
    },
  ],
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => SLUG_ACRONYMS[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

// Returns the article title from the server-precomputed titlesMap, or a readable fallback
function getArticleTitle(
  articleKey: string,
  lang: Language,
  titlesMap: Record<string, Partial<Record<Language, string>>>
): string {
  const titles = titlesMap[articleKey]
  if (titles?.[lang]) return titles[lang]!
  if (titles?.en) return titles.en!
  return slugToTitle(articleKey)
}

function ArticleCard({
  articleKey, dot, lang, titlesMap, datesMap, liveSet,
}: {
  articleKey: string
  dot: string
  lang: Language
  titlesMap: Record<string, Partial<Record<Language, string>>>
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  liveSet: Set<string>
}) {
  if (!liveSet.has(articleKey)) return null

  const title = getArticleTitle(articleKey, lang, titlesMap)
  const href = navHref(`/local-llms/${articleKey}`, lang)
  const dates = datesMap[articleKey]
  const publishDate = dates?.publishDate
  const dateModified = dates?.dateModified
  const showNew = isNewArticle(publishDate)
  const showUpdated = !showNew && isUpdatedArticle(publishDate, dateModified)

  return (
    <div className={`relative h-full transition-all rounded-xl ${showNew ? 'ring-2 ring-emerald-400/60 shadow-[0_0_12px_rgba(52,211,153,0.25)]' : showUpdated ? 'ring-2 ring-amber-400/60 shadow-[0_0_12px_rgba(251,191,36,0.25)]' : ''}`}>
      {showNew && (
        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-black uppercase tracking-widest text-white bg-emerald-500 border-2 border-emerald-300 shadow-md rounded px-2.5 py-0.5 z-10">
          {NEW_LABEL[lang] ?? NEW_LABEL['en']}
        </span>
      )}
      {showUpdated && (
        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-black uppercase tracking-widest text-white bg-amber-500 border-2 border-amber-300 shadow-md rounded px-2.5 py-0.5 z-10">
          {UPDATED_LABEL[lang] ?? UPDATED_LABEL['en']}
        </span>
      )}
      <Link
        href={href}
        className={`flex items-start gap-3 bg-card rounded-xl p-4 h-full transition-colors group ${showNew ? 'border-2 border-emerald-400 hover:border-emerald-500' : showUpdated ? 'border-2 border-amber-400 hover:border-amber-500' : 'border border-primary/30 hover:border-primary/50 hover:bg-primary/5'}`}
      >
        <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
        <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors flex-1">
          {title}
        </span>
      </Link>
    </div>
  )
}

function ArticleComingSoon({ articleKey, lang, titlesMap }: {
  articleKey: string
  lang: Language
  titlesMap: Record<string, Partial<Record<Language, string>>>
}) {
  const title = getArticleTitle(articleKey, lang, titlesMap)
  return (
    <div className="flex items-start gap-3 bg-card border border-primary/20 rounded-xl p-4 opacity-50 cursor-default select-none">
      <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-gray-300" />
      <span className="text-text-secondary text-sm font-medium leading-snug flex-1">
        {title}
        <span className="ml-2 text-xs font-normal opacity-60">· soon</span>
      </span>
    </div>
  )
}

function ThemeSection({ theme, lang, titlesMap, datesMap, liveSet }: {
  theme: LLMTheme
  lang: Language
  titlesMap: Record<string, Partial<Record<Language, string>>>
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  liveSet: Set<string>
}) {
  const colors = THEME_COLORS[theme.id] ?? { badge: 'bg-gray-50 text-gray-700 border-gray-200', dot: 'bg-gray-400' }
  const label = THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title

  const liveArticles = theme.articleKeys.filter(
    key => !COMING_SOON_SLUGS.has(key) && liveSet.has(key)
  )
  const soonArticles = theme.articleKeys.filter(key => COMING_SOON_SLUGS.has(key))
  const hasContent = liveArticles.length > 0 || soonArticles.length > 0

  return (
    <section id={theme.id} className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
          {theme.title}
        </span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{label}</h2>
      <p className="text-text-secondary text-sm mb-6 max-w-2xl">
        {renderDescription(THEME_DESCRIPTIONS[theme.id]?.[lang] ?? THEME_DESCRIPTIONS[theme.id]?.['en'] ?? theme.description ?? '', lang)}
      </p>
      {hasContent ? (
        <div className="grid sm:grid-cols-2 gap-3">
          {liveArticles.map(key => (
            <ArticleCard key={key} articleKey={key} dot={colors.dot} lang={lang} titlesMap={titlesMap} datesMap={datesMap} liveSet={liveSet} />
          ))}
          {soonArticles.map(key => (
            <ArticleComingSoon key={key} articleKey={key} lang={lang} titlesMap={titlesMap} />
          ))}
        </div>
      ) : (
        <div className="text-text-secondary text-sm p-4 bg-primary/5 rounded-lg border border-primary/15">
          <p>{HUB_COMING_SOON[lang] ?? HUB_COMING_SOON['en']} <Link href={navHref('/local-llms#getting-started', lang)} className="text-primary hover:underline">{HUB_GETTING_STARTED_LINK[lang] ?? HUB_GETTING_STARTED_LINK['en']}</Link>.</p>
        </div>
      )}
    </section>
  )
}

function LocalLLMsHubContent({ initialLang, titlesMap, datesMap, liveSlugs }: {
  initialLang?: import("@/hooks/useLang").Lang
  titlesMap: Record<string, Partial<Record<Language, string>>>
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  liveSlugs: string[]
}) {
  const lang = useLang(initialLang)
  const liveSet = useMemo(() => new Set(liveSlugs), [liveSlugs])

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Local LLMs</p>
          <p className="text-xs text-text-secondary mb-4">Updated <time dateTime="2026-06-19">June 2026</time></p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            {HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE['en']}
          </h1>
          <p className="article-intro text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
            {HUB_HERO_DESC[lang] ?? HUB_HERO_DESC['en']}
          </p>

          {/* Key Takeaways */}
          <div className="key-takeaways mb-10 bg-primary/3 border border-primary/15 rounded-xl p-5">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
              {HUB_TAKEAWAYS_TITLE[lang] ?? HUB_TAKEAWAYS_TITLE['en']}
            </p>
            <ul className="space-y-2">
              {(HUB_TAKEAWAYS_BULLETS[lang] ?? HUB_TAKEAWAYS_BULLETS['en']).map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  {renderDescription(bullet, lang)}
                </li>
              ))}
            </ul>
          </div>

          {/* Start Here — curated picks by use case */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-4">
              {HUB_START_HERE_TITLE[lang] ?? HUB_START_HERE_TITLE['en']}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {(HUB_START_HERE_ITEMS[lang] ?? HUB_START_HERE_ITEMS['en']).map((item, i) => (
                <Link
                  key={i}
                  href={navHref(item.href, lang)}
                  className="group flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/3 p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <span className="text-xl leading-none" aria-hidden="true">{item.emoji}</span>
                  <span>
                    <span className="block text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                    <span className="block text-xs text-text-secondary mt-0.5">{item.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* PE Sidebar */}
          <div className="mb-10 bg-blue-950/40 border border-blue-900/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-50 mb-2">
              {HUB_PE_SIDEBAR_TITLE[lang] ?? HUB_PE_SIDEBAR_TITLE['en']}
            </h3>
            <p className="text-sm text-blue-100 mb-4">
              {HUB_PE_SIDEBAR_BODY[lang] ?? HUB_PE_SIDEBAR_BODY['en']}
            </p>
            <div className="space-y-2">
              {(HUB_PE_SIDEBAR_LINKS[lang] ?? HUB_PE_SIDEBAR_LINKS['en']).map((link, i) => (
                <div key={i}>
                  <Link href={link.href} className="text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors">
                    → {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Image 1: VRAM Requirements */}
          <figure className="mb-10">
            <img
              src={getImagePath('/images/local-llm-vram-requirements.svg', lang)}
              alt="VRAM requirements for local LLMs: 3B models need 4 GB, 7B needs 8 GB (RTX 4060 / Apple M3 limit), 13B needs 16 GB, 70B models like Llama 4 Scout need 40 GB+ at Q4_K_M quantization"
              className="w-full rounded-xl border border-primary/15"
              loading="lazy"
              width={800}
              height={420}
            />
            <figcaption className="mt-2 text-xs text-text-secondary text-center">
              {HUB_FIGCAPTION_VRAM[lang] ?? HUB_FIGCAPTION_VRAM['en']}
            </figcaption>
          </figure>

          {/* Quick-nav pills */}
          <div className="flex flex-wrap gap-2">
            {llmThemes.map(theme => {
              const colors = THEME_COLORS[theme.id] ?? { badge: 'bg-gray-50 text-gray-700 border-gray-200', dot: '' }
              return (
                <a
                  key={theme.id}
                  href={`#${theme.id}`}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-opacity hover:opacity-80 ${colors.badge}`}
                >
                  {THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title}
                </a>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-text-secondary flex-1">
            {HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT['en']}
          </p>
          <Link
            href={navHref('/', lang)}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON['en']}
          </Link>
        </div>

        {/* New in May 2026 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {HUB_NEW_APRIL_HEADING[lang] ?? HUB_NEW_APRIL_HEADING['en']}
          </h2>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-primary/20">
                  {(HUB_NEW_APRIL_COLS[lang] ?? HUB_NEW_APRIL_COLS['en']).map((col, colIdx) => (
                    <th key={col} className={`text-left py-1.5 sm:py-2 pr-4 text-xs font-bold text-text-secondary uppercase tracking-wide${colIdx === 0 ? ' sticky left-0 z-10 bg-white' : ''}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(HUB_NEW_APRIL_MODELS[lang] ?? HUB_NEW_APRIL_MODELS['en']).map((row, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-primary/3 group">
                    <td className={`py-1.5 sm:py-2.5 pr-4 font-medium text-text-primary${i % 2 === 0 ? ' bg-white' : ''} sticky left-0 z-10 group-hover:bg-primary/3 transition-colors`}>{row.name}</td>
                    <td className="py-1.5 sm:py-2.5 pr-4 font-mono text-xs text-text-secondary bg-primary/5 px-2 rounded">{row.pull}</td>
                    <td className="py-1.5 sm:py-2.5 pr-4 text-text-secondary">{row.vram}</td>
                    <td className="py-1.5 sm:py-2.5 text-text-secondary">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
          </div>
        </section>

        {/* Ollama vs LM Studio vs Jan.ai */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {HUB_COMPARISON_HEADING[lang] ?? HUB_COMPARISON_HEADING['en']}
          </h2>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-primary/20">
                  {(HUB_COMPARISON_COLS[lang] ?? HUB_COMPARISON_COLS['en']).map((col, colIdx) => (
                    <th key={col} className={`text-left py-1.5 sm:py-2 pr-4 text-xs font-bold text-text-secondary uppercase tracking-wide${colIdx === 0 ? ' sticky left-0 z-10 bg-white' : ''}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(HUB_COMPARISON_ROWS[lang] ?? HUB_COMPARISON_ROWS['en']).map((row, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-primary/3 group">
                    <td className={`py-1.5 sm:py-2.5 pr-4 font-medium text-text-primary${i % 2 === 0 ? ' bg-white' : ''} sticky left-0 z-10 group-hover:bg-primary/3 transition-colors`}>{row.feature}</td>
                    <td className="py-1.5 sm:py-2.5 pr-4 text-text-secondary">{row.ollama}</td>
                    <td className="py-1.5 sm:py-2.5 pr-4 text-text-secondary">{row.lmstudio}</td>
                    <td className="py-1.5 sm:py-2.5 text-text-secondary">{row.janai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
          </div>
        </section>

        {/* Image 2: Local vs Cloud Comparison */}
        <figure className="mb-16">
          <img
            src={getImagePath('/images/local-vs-cloud-llm-comparison.svg', lang)}
            alt="Local LLMs vs Cloud APIs comparison table: local costs $0 per token after hardware with full privacy; cloud APIs charge $0.15–$60 per 1M tokens with excellent quality and instant setup"
            className="w-full rounded-xl border border-primary/15"
            loading="lazy"
            width={800}
            height={420}
          />
          <figcaption className="mt-2 text-xs text-text-secondary text-center">
            {HUB_FIGCAPTION_CLOUD[lang] ?? HUB_FIGCAPTION_CLOUD['en']}
          </figcaption>
        </figure>

        {/* Recently Published — auto-surfaced articles with publishDate within 15 days */}
        {(() => {
          const RECENT_HEADING: Record<string, string> = {
            en: 'New This Month', de: 'Neu diesen Monat', fr: 'Nouveautés du mois', ja: '今月の新着', zh: '本月新增', es: 'Nuevo este mes', pt: 'Novo este mês', ar: 'جديد هذا الشهر', ko: '이번 달 신규',
          }
          const RECENT_SUB: Record<string, string> = {
            en: 'Just published — disappears from this spot after 14 days',
            de: 'Gerade veröffentlicht — verschwindet nach 14 Tagen',
            fr: 'Vient de paraître — disparaît de cet emplacement après 14 jours',
            ja: '公開されたばかり — 14日後にここから消えます',
            zh: '刚刚发布 — 14天后从此处消失',
            es: 'Recién publicado — desaparece de este lugar después de 14 días',
            pt: 'Recém publicado — desaparece deste local após 14 dias',
            ar: 'نُشر للتو — يختفي من هنا بعد 14 يومًا',
            ko: '방금 게시됨 — 14일 후 이 위치에서 사라집니다',
          }
          const recentSlugs = Object.keys(datesMap)
            .filter(slug => isNewArticle(datesMap[slug]?.publishDate))
          if (recentSlugs.length === 0) return null
          const dotColor = 'bg-emerald-400'
          return (
            <section className="mb-16 border-2 border-emerald-400/40 rounded-2xl p-6 bg-emerald-50/30">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-black text-emerald-800 tracking-tight">
                  {RECENT_HEADING[lang] ?? RECENT_HEADING['en']}
                </h2>
                <span className="text-xs font-black uppercase tracking-widest text-white bg-emerald-500 border-2 border-emerald-300 shadow-sm rounded px-2.5 py-1">
                  {recentSlugs.length}
                </span>
              </div>
              <p className="text-xs text-emerald-700/70 mb-5">{RECENT_SUB[lang] ?? RECENT_SUB['en']}</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {recentSlugs.map(slug => (
                  <ArticleCard key={slug} articleKey={slug} dot={dotColor} lang={lang} titlesMap={titlesMap} datesMap={datesMap} liveSet={liveSet} />
                ))}
              </div>
            </section>
          )
        })()}

        {/* Theme sections */}
        {llmThemes.map((theme, idx) => (
          <LazySection key={theme.id} eager={idx < 2}>
            <ThemeSection theme={theme} lang={lang} titlesMap={titlesMap} datesMap={datesMap} liveSet={liveSet} />
          </LazySection>
        ))}

        {/* Image 3: Top Models 2026 */}
        <figure className="mb-16">
          <img
            src={getImagePath('/images/top-open-source-models-2026.svg', lang)}
            alt="Top open-source local models 2026: Llama 4 Scout 109B MoE for reasoning, Qwen3.5 72B for coding, DeepSeek V3 671B MoE for math, Mistral 7B for speed at 8 GB VRAM, Phi-3.5 Mini 3.8B for low-power devices at 4 GB VRAM"
            className="w-full rounded-xl border border-primary/15"
            loading="lazy"
            width={800}
            height={420}
          />
          <figcaption className="mt-2 text-xs text-text-secondary text-center">
            {HUB_FIGCAPTION_MODELS[lang] ?? HUB_FIGCAPTION_MODELS['en']}
          </figcaption>
        </figure>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_FAQ_TITLE[lang] ?? HUB_FAQ_TITLE['en']}
          </h2>
          <div className="space-y-6">
            {(HUB_FAQS[lang] ?? HUB_FAQS['en']).map((faq, i) => (
              <div key={i} className="border-b border-primary/15 pb-4 last:border-0">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-sm text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Image 4: Ollama Quick Start */}
        <figure className="mb-16">
          <img
            src={getImagePath('/images/ollama-quick-start-commands.svg', lang)}
            alt="Ollama terminal showing two commands: ollama pull llama3.2 downloads the 4.7 GB Q4_K_M model, ollama run llama3.2 starts an interactive session at 60 tokens per second on GPU or 12 tokens per second on CPU"
            className="w-full rounded-xl border border-primary/15"
            loading="lazy"
            width={800}
            height={420}
          />
          <figcaption className="mt-2 text-xs text-text-secondary text-center">
            {HUB_FIGCAPTION_OLLAMA[lang] ?? HUB_FIGCAPTION_OLLAMA['en']}
          </figcaption>
        </figure>

        {/* Regional Context Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_REGIONAL_TITLE[lang] ?? HUB_REGIONAL_TITLE['en']}
          </h2>
          <div className="space-y-6">
            {(HUB_REGIONAL_ITEMS[lang] ?? HUB_REGIONAL_ITEMS['en']).map((item, i) => (
              <div key={i} className="bg-primary/5 border border-primary/15 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{item.region}</h3>
                <p className="text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Image 5: PromptQuorum Dispatch */}
        <figure className="mb-16">
          <img
            src={getImagePath('/images/promptquorum-local-cloud-dispatch.svg', lang)}
            alt="PromptQuorum architecture diagram: one prompt dispatched to local Ollama LLM and 25+ cloud APIs including GPT-4o, Claude 4.6, and Gemini 2.5 simultaneously, with side-by-side results comparison view"
            className="w-full rounded-xl border border-primary/15"
            loading="lazy"
            width={800}
            height={420}
          />
          <figcaption className="mt-2 text-xs text-text-secondary text-center">
            {HUB_FIGCAPTION_PQ[lang] ?? HUB_FIGCAPTION_PQ['en']}
          </figcaption>
        </figure>

        {/* Presentation Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            {HUB_PRESENTATION_HEADING[lang] ?? HUB_PRESENTATION_HEADING['en']}
          </h2>
          <p className="text-sm text-text-secondary mb-4 max-w-2xl">
            {HUB_PRESENTATION_DESC[lang] ?? HUB_PRESENTATION_DESC['en']}
          </p>
          <a
            href={`/presentations/local-llms-hub-static.html?lang=${lang}&print=1`}
            className="inline-block mb-6 text-sm text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {HUB_PRESENTATION_PDF[lang] ?? HUB_PRESENTATION_PDF['en']}
          </a>
          <iframe
            src={`/presentations/local-llms-hub-static.html?lang=${lang}`}
            title={HUB_PRESENTATION_HEADING[lang] ?? HUB_PRESENTATION_HEADING['en']}
            className="w-full rounded-xl border border-primary/15"
            style={{ height: 'min(80vh, max(520px, 56.25vw))' }}
            loading="lazy"
          />
        </section>

        {/* Bottom FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_BOTTOM_FAQ_TITLE[lang] ?? HUB_BOTTOM_FAQ_TITLE['en']}
          </h2>
          <div className="space-y-6">
            {(HUB_FAQS_BOTTOM[lang] ?? HUB_FAQS_BOTTOM['en']).map((faq, i) => (
              <div key={i} className="border-b border-primary/15 pb-4 last:border-0">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-sm text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-link: Prompt Engineering */}
        <div className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-primary mb-1">
              {lang === 'de' ? 'Verwandte Themen: Prompt Engineering'
                : lang === 'fr' ? 'Connexe : Guide de Prompt Engineering'
                : lang === 'ja' ? '関連：プロンプトエンジニアリングガイド'
                : lang === 'zh' ? '相关推荐：Prompt工程指南'
                : lang === 'es' ? 'Relacionado: Guía de Prompt Engineering'
                : lang === 'pt' ? 'Relacionado: Guia de Prompt Engineering'
                : 'Related: Prompt Engineering Guide'}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {lang === 'de'
                ? 'Ein lokales Modell auszuführen ist Schritt eins. Großartige Ausgaben zu erzielen ist Schritt zwei. Der Prompt-Engineering-Guide deckt 80 Techniken in 9 Themen ab — von Grundlagen wie Temperatur und Kontextfenster bis zu fortgeschrittenen Methoden wie Chain-of-Thought, RAG und Team-Governance. Jede Technik funktioniert mit lokalen Modellen.'
                : lang === 'fr'
                ? 'Faire tourner un modèle local est la première étape. En obtenir d\'excellentes sorties est la deuxième. Le guide de prompt engineering couvre 80 techniques dans 9 domaines — des fondamentaux comme la température et les fenêtres de contexte aux méthodes avancées comme la chain-of-thought, le RAG et la gouvernance d\'équipe. Chaque technique fonctionne avec les modèles locaux.'
                : lang === 'ja'
                ? 'ローカルモデルを動かすことがステップ1です。そこから優れた出力を得ることがステップ2です。プロンプトエンジニアリングガイドは、温度やコンテキストウィンドウなどの基礎から、Chain-of-Thought・RAG・チームガバナンスなどの高度な手法まで、9つのトピックにわたる80のテクニックを解説しています。すべてのテクニックはローカルモデルで使用できます。'
                : lang === 'zh'
                ? '运行本地模型是第一步，从中获取出色输出是第二步。Prompt工程指南涵盖9个主题的80项技术——从温度和上下文窗口等基础知识，到思维链、RAG和团队治理等高级方法。每项技术都适用于本地模型。'
                : lang === 'es'
                ? 'Ejecutar un modelo local es el primer paso. Obtener una excelente salida de él es el segundo. La guía de Prompt Engineering cubre 80 técnicas en 9 temas — desde fundamentos como temperatura y ventanas de contexto hasta métodos avanzados como chain-of-thought, RAG y gobernanza de equipos. Cada técnica funciona con modelos locales.'
                : lang === 'pt'
                ? 'Executar um modelo local é o primeiro passo. Obter uma ótima saída dele é o segundo. O guia de Prompt Engineering cobre 80 técnicas em 9 tópicos — de fundamentos como temperatura e janelas de contexto a métodos avançados como chain-of-thought, RAG e governança de equipes. Cada técnica funciona com modelos locais.'
                : 'Running a local model is step one. Getting great output from it is step two. The Prompt Engineering guide covers 80 techniques across 9 topics — from fundamentals like temperature and context windows to advanced methods like chain-of-thought, RAG, and team governance. Every technique works with local models.'}
            </p>
          </div>
          <Link
            href={navHref('/prompt-engineering', lang)}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {lang === 'de' ? 'Zum Prompt-Engineering-Guide →'
              : lang === 'fr' ? 'Explorer le Guide de Prompt Engineering →'
              : lang === 'ja' ? 'プロンプトエンジニアリングガイドを見る →'
              : lang === 'zh' ? '探索Prompt工程指南 →'
              : lang === 'es' ? 'Explorar la Guía de Prompt Engineering →'
              : lang === 'pt' ? 'Explorar o Guia de Prompt Engineering →'
              : 'Explore the Prompt Engineering Guide →'}
          </Link>
        </div>

        {/* Cross-link: Smart Home */}
        <div className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-primary mb-1">
              {lang === 'de' ? 'Verwandte Themen: Smart-Home-Guide'
                : lang === 'fr' ? 'Connexe : Guide Maison Connectée'
                : lang === 'ja' ? '関連：スマートホームガイド'
                : lang === 'zh' ? '相关推荐：智能家居指南'
                : lang === 'es' ? 'Relacionado: Guía de Hogar Inteligente'
                : lang === 'pt' ? 'Relacionado: Guia de Casa Inteligente'
                : 'Related: Smart Home Guide'}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {lang === 'de'
                ? 'Ein lokales LLM auszuführen ist Schritt eins. Es zu Hause einzusetzen ist Schritt zwei. Der Smart-Home-Guide behandelt Home Assistant Setup, Ollama-Integration, lokale Sprachassistenten mit Whisper + Piper, datenschutzorientierte Automatisierung und Hardware-Empfehlungen für dauerhaft aktive KI im Zuhause — alles offline, kein Cloud-Abo.'
                : lang === 'fr'
                ? 'Faire tourner un LLM local est la première étape. L\'utiliser chez vous est la deuxième. Le guide maison connectée couvre la configuration de Home Assistant, l\'intégration Ollama, les assistants vocaux locaux avec Whisper + Piper, l\'automatisation axée sur la confidentialité et les recommandations matérielles pour une IA permanente à domicile — tout offline, sans abonnement cloud.'
                : lang === 'ja'
                ? 'ローカルLLMを動かすことがステップ1です。それを自宅で活用することがステップ2です。スマートホームガイドは、Home Assistantのセットアップ、Ollama統合、Whisper + Piperによるローカル音声アシスタント、プライバシー重視のオートメーション、常時稼働AIのハードウェア推奨事項をカバーしています — すべてオフライン、クラウドサブスクリプション不要。'
                : lang === 'zh'
                ? '运行本地LLM是第一步，在家中应用它是第二步。智能家居指南涵盖Home Assistant设置、Ollama集成、Whisper + Piper本地语音助手、隐私优先自动化以及家庭常驻AI的硬件推荐——全部离线，无需云端订阅。'
                : lang === 'es'
                ? 'Ejecutar un LLM local es el primer paso. Ponerlo a trabajar en tu hogar es el segundo. La guía de hogar inteligente cubre la configuración de Home Assistant, integración con Ollama, asistentes de voz locales con Whisper + Piper, automatización centrada en la privacidad y recomendaciones de hardware para IA siempre activa en el hogar — todo offline, sin suscripción a la nube.'
                : lang === 'pt'
                ? 'Executar um LLM local é o primeiro passo. Colocá-lo para trabalhar em sua casa é o segundo. O guia de casa inteligente cobre a configuração do Home Assistant, integração com Ollama, assistentes de voz locais com Whisper + Piper, automação focada na privacidade e recomendações de hardware para IA sempre ativa em casa — tudo offline, sem assinatura em nuvem.'
                : 'Running a local model is step one. Putting it to work in your home is step two. The Smart Home guide covers Home Assistant setup, Ollama integration, local voice assistants with Whisper + Piper, privacy-first automation, and hardware recommendations for always-on AI in your home — all offline, no cloud subscription.'}
            </p>
          </div>
          <Link
            href={lang === 'en' ? '/smart-home' : `/${lang}/smart-home`}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {lang === 'de' ? 'Zum Smart-Home-Guide →'
              : lang === 'fr' ? 'Explorer le Guide Maison Connectée →'
              : lang === 'ja' ? 'スマートホームガイドを見る →'
              : lang === 'zh' ? '探索智能家居指南 →'
              : lang === 'es' ? 'Explorar la Guía de Hogar Inteligente →'
              : lang === 'pt' ? 'Explorar o Guia de Casa Inteligente →'
              : 'Explore the Smart Home Guide →'}
          </Link>
        </div>

        {/* Back nav */}
        <div className="pt-8 border-t border-primary/20">
          <Link href={navHref('/', lang)} className="text-sm text-text-secondary hover:text-primary transition-colors">
            {HUB_NAV_HOME[lang] ?? HUB_NAV_HOME['en']}
          </Link>
        </div>

      </div>
    </div>
  )
}

export function LocalLLMsHub({ initialLang, titlesMap, datesMap, liveSlugs }: {
  initialLang?: import("@/hooks/useLang").Lang
  titlesMap: Record<string, Partial<Record<Language, string>>>
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  liveSlugs: string[]
}) {
  return <LocalLLMsHubContent initialLang={initialLang} titlesMap={titlesMap} datesMap={datesMap} liveSlugs={liveSlugs} />
}
