import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, ogLocale } from '@/lib/i18n/constants'
import { AppLink as Link } from '@/components/AppLink'
import { Sparkles, Layers, Brain, Zap, Shield } from 'lucide-react'
import { PromptOptimizerShowcase } from '@/components/PromptOptimizerShowcase'
import { OptimizationShowcase } from '@/components/OptimizationShowcase'
import { QuorumShowcase } from '@/components/QuorumShowcase'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PQ Apps — PromptQuorum',
    description: 'Veja como funciona o app da PromptQuorum: escreva prompts com frameworks integrados, envie para mais de 25 modelos de IA e compare resultados com a análise Quorum.',
    alternates: generateAlternates('/pq-apps', 'pt', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: 'Veja como funciona o app da PromptQuorum: escreva prompts com frameworks integrados, envie para mais de 25 modelos de IA e compare resultados com a análise Quorum.',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
      ...ogLocale('pt'),
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: 'Veja como funciona o app da PromptQuorum: escreva prompts com frameworks integrados, envie para mais de 25 modelos de IA e compare resultados com a análise Quorum.',
    },
  }
}

export default function PtPQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/pt/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': 'Veja como funciona o app da PromptQuorum: escreva prompts com frameworks integrados, envie para mais de 25 modelos de IA e compare resultados com a análise Quorum.',
              'inLanguage': 'pt-BR',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is PromptQuorum free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis."}}, {"@type": "Question", "name": "How does privacy work?", "acceptedAnswer": {"@type": "Answer", "text": "You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up. Zero telemetry, zero tracking, no data collection — not even anonymous usage stats."}}, {"@type": "Question", "name": "Which AI providers are supported?", "acceptedAnswer": {"@type": "Answer", "text": "Over 25 AI providers are included: OpenAI (GPT-4, GPT-4o), Anthropic (Claude), Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, plus all local providers (Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible endpoint)."}}, {"@type": "Question", "name": "What platforms does PromptQuorum run on?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum is available for macOS, Windows, and Linux (desktop via Electron). A web application is in development, followed by mobile (iOS and Android via Capacitor). It works fully offline with a local LLM."}}, {"@type": "Question", "name": "What makes PromptQuorum different?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum covers the full prompt lifecycle in a single browser-based tool: structured writing with 9 frameworks, AI-powered iterative optimization with 8 refinement types, one-click dispatch to 25+ AI services, and 13 Quorum analysis types for consensus scoring — all without any data leaving your device."}}, {"@type": "Question", "name": "Are there any limits?", "acceptedAnswer": {"@type": "Answer", "text": "No limits from PromptQuorum. Your usage is only limited by your API keys or local LLM resources."}}, {"@type": "Question", "name": "What is prompt engineering and why does it matter?", "acceptedAnswer": {"@type": "Answer", "text": "Prompt engineering is the practice of designing inputs to AI models so they return more accurate, useful, and reliable outputs. In testing, structured prompts with framework fields produce 25–45% higher LLM evaluation scores compared to unstructured inputs. PromptQuorum automates this with 9 built-in frameworks — no expertise required."}}, {"@type": "Question", "name": "How does PromptQuorum optimize my prompts?", "acceptedAnswer": {"@type": "Answer", "text": "Your connected LLM transforms raw framework fields into a precision prompt. You then refine iteratively with 8 one-click refinements: Make Concise, Expand Detail, Break Into Steps, Simplify, Increase Specificity, Multi-Expert Consultation, Add Quality Controls, and Custom Instruction. Every step is saved in version history so you can revert anytime."}}, {"@type": "Question", "name": "What prompt frameworks are built into PromptQuorum?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum includes 9 frameworks: Single Prompt Line (quick), APE (3-field), CRAFT (creative writing), CO-STAR (used to win the Singapore GPT-4 competition), SPECS (analysis), RISEN (enterprise sequential tasks), TRACE (few-shot examples), Google Prompt (business tasks), and RTF (minimal 3-field). You can also build 2 fully custom frameworks."}}, {"@type": "Question", "name": "What is the CO-STAR framework?", "acceptedAnswer": {"@type": "Answer", "text": "CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response. It was used to win the Singapore GPT-4 prompt engineering competition and is ideal for business communication, marketing copy, and content creation. PromptQuorum guides you through each field and assembles the final prompt automatically."}}, {"@type": "Question", "name": "What is multi-model consensus and why is it valuable?", "acceptedAnswer": {"@type": "Answer", "text": "Multi-model consensus means sending the same prompt to multiple AI models and finding where they agree. When 5 independent models give the same answer, confidence is far higher than when 1 model answers alone. It also surfaces contradictions and potential hallucinations automatically."}}, {"@type": "Question", "name": "How does PromptQuorum detect AI hallucinations?", "acceptedAnswer": {"@type": "Answer", "text": "After collecting responses from multiple models in the Quorum step, your LLM runs Hallucination Detection analysis — flagging claims that appear in only one model's response but not others, or that contradict factual consensus. You choose which analysis types to run and combine them freely."}}, {"@type": "Question", "name": "Can I use PromptQuorum with local AI models like Ollama or LM Studio?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. PromptQuorum natively connects to Ollama (localhost:11434), LM Studio (localhost:1234), Jan AI (localhost:1337), GPT4All (localhost:4891), Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible endpoint. No API key needed for local models — everything runs on your machine."}}, {"@type": "Question", "name": "Can I use PromptQuorum completely offline?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. If you run a local model like Ollama or LM Studio, PromptQuorum works fully offline. No internet connection is required. Your prompts, API keys, and results never leave your device."}}, {"@type": "Question", "name": "What is BYOM (Bring Your Own Model)?", "acceptedAnswer": {"@type": "Answer", "text": "BYOM means PromptQuorum never calls any LLM using its own API keys. Every call goes directly from your browser to your chosen provider — cloud or local. Your API keys are stored only in your browser's localStorage and are never transmitted to any PromptQuorum server."}}, {"@type": "Question", "name": "How does the Dispatch feature work?", "acceptedAnswer": {"@type": "Answer", "text": "Dispatch sends your optimized prompt to multiple AI services in one click. For auto-dispatch services (ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral, and more), PromptQuorum pre-loads your prompt into the URL so it's ready instantly. Perplexity even auto-submits on arrival. All tabs open in parallel — collect all responses in under a minute."}}, {"@type": "Question", "name": "What is the Quorum analysis and what types are available?", "acceptedAnswer": {"@type": "Answer", "text": "Quorum analysis processes all collected AI responses through your LLM. There are 13 analysis types across 4 categories: Synthesis (Consensus Summary, Weighted Merge, Atomic Facts Extraction), Comparison (Overlap Mapping, Contradiction Detection, Confidence Scoring), Quality (Completeness Check, Hallucination Detection, Redundancy Elimination), and Recommendations (Best Answer Selection, Multi-Model Ensemble, Controversy Flag)."}}, {"@type": "Question", "name": "Can I export my results?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Quorum results export in 6 formats: .txt, .md, .json, .csv, .html, and .pdf. Select multiple formats and they're bundled into a .zip archive. On Chrome, Edge, and Safari 16+, you can choose your save folder using the File System Access API."}}, {"@type": "Question", "name": "How does the Framework Wizard work?", "acceptedAnswer": {"@type": "Answer", "text": "The Framework Wizard asks you a few questions about your task — what you're trying to achieve, the type of output you need, and your audience. Based on your answers it recommends the most suitable framework from the 9 built-in options, and shows a side-by-side comparison of what each would produce for your prompt."}}, {"@type": "Question", "name": "What is Smart Temperature Adjustment?", "acceptedAnswer": {"@type": "Answer", "text": "Before each optimization, PromptQuorum analyzes your prompt text and suggests the ideal LLM temperature: ~0.2 for factual tasks, ~0.7 for balanced, ~0.85 for creative. It shows a confidence score and only prompts you when confidence is above 60%. After 3 consistent choices for the same intent type, it auto-applies your preference."}}, {"@type": "Question", "name": "Does PromptQuorum work with ChatGPT, Claude, and Gemini?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can use ChatGPT (GPT-4, GPT-4o), Anthropic Claude (3, 3.5), and Google Gemini (1.5 Pro, Flash) as your optimization LLM by adding your API key in Settings. You also dispatch prompts to all three simultaneously via the Dispatch page, without needing API keys for dispatch."}}, {"@type": "Question", "name": "Is there a version history for my prompts?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Every optimization step and refinement is saved automatically in version history with a human-readable label (e.g. \"v2 — Make More Concise 12:36\"). You can select any version to restore it and branch new refinements from there. Nothing is lost."}}, {"@type": "Question", "name": "What output formats and languages does PromptQuorum support?", "acceptedAnswer": {"@type": "Answer", "text": "The LLM output language is configurable per-session: English, German, French, Spanish, Italian, Portuguese, Chinese, and Japanese. Structure level options range from plain prose to strict tables-and-bullets. Response length is adjustable from 100 to 2000 words."}}, {"@type": "Question", "name": "How does PromptQuorum handle my API keys securely?", "acceptedAnswer": {"@type": "Answer", "text": "API keys are stored only in your browser's localStorage — the same security boundary as your banking passwords stored in a password manager extension. They are never sent to any PromptQuorum server, never logged, and never included in telemetry (there is none). You can clear them anytime from Settings."}}, {"@type": "Question", "name": "Is PromptQuorum suitable for enterprise or team use?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum is currently designed for individual power users — developers, researchers, content creators, and AI-heavy professionals. Each user runs their own instance with their own API keys. Enterprise features (shared workspaces, team history, role-based access) are on the roadmap."}}, {"@type": "Question", "name": "What is Teaching Mode?", "acceptedAnswer": {"@type": "Answer", "text": "Teaching Mode adds an explanation box below every optimization result that explains exactly why each change was made — which prompt engineering principles were applied and what effect they have. It's designed for developers and researchers who want to learn prompt engineering while using the tool."}}, {"@type": "Question", "name": "How do I get PromptQuorum and is there a cost?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum is in free public beta. Download the desktop app directly — no signup, no waitlist, no email required."}}, {"@type": "Question", "name": "Who is Hans Kuepper, the founder of PromptQuorum?", "acceptedAnswer": {"@type": "Answer", "text": "Hans Kuepper is the founder and developer of PromptQuorum. He is based in Baden-Württemberg, Germany, near Heidelberg in the Kraichgau hill country. He speaks four languages — German, English, French, and Russian — and has lived and worked in over 20 countries."}}, {"@type": "Question", "name": "Where is PromptQuorum developed?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum is built by Hans Kuepper, an independent developer in Baden-Württemberg, Germany. The project has no external investors and is developed as a privacy-first, user-owned AI tool."}}, {"@type": "Question", "name": "Qual é a melhor ferramenta para comparar o mesmo prompt em vários LLMs simultaneamente?", "acceptedAnswer": {"@type": "Answer", "text": "O PromptQuorum é a única ferramenta analisada aqui que combina o envio simultâneo com a pontuação de consenso automatizada. Poe, AiZolo e OpenMark oferecem respostas lado a lado, mas nenhum produz um Quorum Verdict — uma análise automatizada de onde GPT-4o, Claude 4.6 Sonnet e outros modelos concordam ou divergem. Para usuários que precisam de mais do que uma comparação visual lado a lado, o PromptQuorum é a opção projetada especificamente para isso. Informações de recursos verificadas em março de 2026."}}, {"@type": "Question", "name": "Qual é a diferença entre o PromptQuorum e o Poe ou a LM Arena?", "acceptedAnswer": {"@type": "Answer", "text": "O Poe (da Quora) é uma plataforma de chat de consumo para alternar entre modelos um de cada vez. A LM Arena utiliza votação coletiva para classificar o desempenho individual dos modelos. O PromptQuorum é único: envia para todos os modelos selecionados simultaneamente e analisa automaticamente onde concordam ou divergem por meio da pontuação de consenso. O Poe foi criado para a conversa; a LM Arena para o benchmarking; o PromptQuorum para a avaliação controlada e a detecção de alucinações."}}]},
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://www.promptquorum.com/pt' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/pt/pq-apps' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-white text-text-primary">
        <section className="border-b border-hub-violet-edge bg-hub-violet-tint">
          <div className="mx-auto max-w-[1120px] px-6 flex flex-wrap items-stretch gap-8 pb-12 pt-24">
            <div className="min-w-0 flex-[1_1_520px]">
              <nav aria-label="Breadcrumb" className="mb-3.5 text-[13px] text-text-secondary">
                <Link href="/pt" className="hover:underline">Início</Link>
                <span aria-hidden="true"> &nbsp;/&nbsp; </span>
                <span aria-current="page">PQ Apps</span>
              </nav>
              <span className="inline-block rounded-full border border-hub-violet bg-white px-3 py-0.5 text-[13px] font-semibold text-hub-violet-ink">PQ Apps</span>
              <h1 className="mb-3 mt-3.5 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl">
                PromptQuorum, onde quer que você trabalhe
              </h1>
              <p className="mb-6 max-w-[600px] text-lg leading-relaxed text-text-secondary">
                Um único prompt, enviado simultaneamente para mais de 25 modelos de IA — com suporte a LLMs locais e análise de consenso multimodelo, tudo direto do seu navegador.
              </p>
              <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/pt/download"
                style={{ '--cta-tone': 'var(--hub-violet)', '--cta-offset': 'var(--hub-violet-tint)' } as CSSProperties}
                className="motion-safe:animate-hub-cta-pop relative inline-block rounded-[10px] bg-hub-violet px-6 py-3.5 text-[17px] font-extrabold text-white ring-2 ring-white ring-offset-2 ring-offset-[var(--cta-offset)] transition-[transform,box-shadow] duration-150 [animation-fill-mode:both] hover:-translate-y-0.5 shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.35),inset_0_-2.5px_0_0_rgba(0,0,0,0.16),0_10px_22px_-6px_var(--cta-tone)] hover:shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.4),inset_0_-2.5px_0_0_rgba(0,0,0,0.22),0_15px_28px_-6px_var(--cta-tone)]"
              >
                Testar a Beta
              </Link>
              </div>
            </div>
            <div className="min-w-0 flex-[1_1_400px]">
              <div className="box-border rounded-2xl border border-hub-violet-edge bg-white p-5 lg:self-start">
                <ol className="flex flex-col gap-2.5">
                  <li className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-hub-violet text-xs font-bold text-white">1</span>
                    <span className="min-w-0 flex-1 rounded-lg bg-hub-violet-tint px-3 py-2 text-[13px] font-semibold leading-snug text-hub-violet-ink"><span className="font-bold">Escrever</span> · Estruture seu prompt</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-hub-azure text-xs font-bold text-white">2</span>
                    <span className="min-w-0 flex-1 rounded-lg bg-hub-azure-tint px-3 py-2 text-[13px] font-semibold leading-snug text-hub-azure-ink"><span className="font-bold">Otimizar</span> · Refine com o seu próprio LLM</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-hub-indigo text-xs font-bold text-white">3</span>
                    <span className="min-w-0 flex-1 rounded-lg bg-hub-indigo-tint px-3 py-2 text-[13px] font-semibold leading-snug text-hub-indigo-ink"><span className="font-bold">Despachar</span> · Envie para mais de 25 serviços de IA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-hub-orchid text-xs font-bold text-white">4</span>
                    <span className="min-w-0 flex-1 rounded-lg bg-hub-orchid-tint px-3 py-2 text-[13px] font-semibold leading-snug text-hub-orchid-ink"><span className="font-bold">Quorum</span> · Encontre consenso entre todos os modelos</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b border-border bg-white">
          <nav className="mx-auto max-w-[1120px] px-6 flex flex-wrap items-center gap-x-2.5 gap-y-2 py-2.5 text-sm">
            <a href="#how-it-works" className="rounded-full bg-hub-azure-tint px-3.5 py-1.5 font-semibold text-hub-azure-ink">Como funciona</a>
            <a href="#features" className="rounded-full bg-hub-violet-tint px-3.5 py-1.5 font-semibold text-hub-violet-ink">Recursos</a>
            <a href="#compare-tools" className="rounded-full bg-hub-indigo-tint px-3.5 py-1.5 font-semibold text-hub-indigo-ink">Comparar ferramentas</a>
            <a href="#faq" className="rounded-full bg-hub-cyan-tint px-3.5 py-1.5 font-semibold text-hub-cyan-ink">Perguntas frequentes</a>
          </nav>
        </div>

        <div>

          {/* How It Works */}
          <section id="how-it-works" className="scroll-mt-24 border-t border-border bg-white">
            <div className="mx-auto max-w-[1120px] px-6 py-14">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="rounded-[10px] bg-hub-azure px-3.5 py-1 text-[15px] font-extrabold tracking-wide text-white">01</span>
              <h2 className="text-[26px] font-bold tracking-tight text-text-primary sm:text-[28px]">Como funciona</h2>
            </div>
            <p className="text-text-secondary mb-3">Um fluxo de trabalho de 4 etapas: escreva um prompt estruturado usando um dos 9 frameworks, otimize-o com o seu próprio LLM, despache simultaneamente para mais de 25 serviços de IA e analise todas as respostas usando 13 tipos de análise de consenso.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-hub-azure-tint text-hub-azure-ink rounded-full text-sm font-medium mb-8">
              Roda inteiramente no seu navegador — nenhum servidor do PromptQuorum vê seus prompts ou chaves de API
            </div>

            <div className="space-y-8 mb-16">
              <div className="rounded-[14px] border border-hub-violet-edge bg-hub-violet-tint overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-hub-violet flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-hub-violet-ink uppercase tracking-widest">Escrever</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Estruture seu prompt</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Prompts estruturados com frameworks produzem resultados de maior qualidade. O PromptQuorum inclui 9 frameworks integrados (Single Prompt Line, CRAFT, CO-STAR, RISEN, TRACE, APE, SPECS, Google Prompt, RTF) mais 2 slots de framework totalmente personalizáveis.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-violet-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — estrutura mínima para tarefas rápidas</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-violet-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target (escrita criativa)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-violet-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — Context, Objective, Style, Tone, Audience, Response (marketing, negócios)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-violet-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — Role, Instructions, Steps, End Goal, Narrowing (tarefas empresariais sequenciais)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-violet-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — Task, Request, Action, Context, Example (aprendizado few-shot)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-violet-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE, SPECS, Google Prompt, RTF — otimizados para tipos de tarefa específicos</span>
                      </li>
                    </ul>
                    <div className="bg-white border-l-4 border-hub-violet rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Um Assistente de Frameworks recomenda o melhor framework conforme o tipo de tarefa.
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] border border-hub-azure-edge bg-hub-azure-tint overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-hub-azure flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-hub-azure-ink uppercase tracking-widest">Otimizar</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Refine com o seu próprio LLM</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">A qualidade do prompt melhora de forma mensurável com a otimização — prompts estruturados pontuam de 25 a 45% mais alto em avaliações de LLM. O PromptQuorum aplica 8 tipos de refinamento (Tornar Conciso, Expandir Detalhe, Dividir em Etapas, Aumentar Especificidade, Simplificar, Adicionar Controles de Qualidade, Consulta Multi-Especialista, Comprimir à Essência) mais detecção inteligente de temperatura.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-azure-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Avaliação de qualidade — pontuação de 0-100% em clareza, especificidade, estrutura e restrições</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-azure-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Temperatura inteligente — recomenda o nível ideal de criatividade (0.0-1.0) conforme o tipo de tarefa</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-azure-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Histórico de versões — cada refinamento salvo; ramifique e compare caminhos de refinamento</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-azure-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Modo ensino — explica por que cada alteração melhora a qualidade e a clareza</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-azure-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>8 refinamentos com um clique — aplique transformações estruturadas instantaneamente</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-azure-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Instrução personalizada — refinamento em texto livre usando o seu próprio LLM</span>
                      </li>
                    </ul>
                    <div className="bg-white border-l-4 border-hub-azure rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Seu LLM. Sua chave de API. Nada passa pelos servidores do PromptQuorum.
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] border border-hub-indigo-edge bg-hub-indigo-tint overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-hub-indigo flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-hub-indigo-ink uppercase tracking-widest">Despachar</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Envie para mais de 25 serviços de IA</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Enviar o mesmo prompt para vários modelos de IA revela qual deles funciona melhor para a sua tarefa. O PromptQuorum abre abas do navegador em paralelo para mais de 25 destinos sem precisar copiar e colar.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-indigo-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Despacho automático (17 serviços): OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity, xAI Grok, DeepSeek, Mistral, Cohere, Azure, Together, Groq e mais</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-indigo-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Copiar e colar (8 serviços): Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All e outros</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-indigo-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>O Perplexity envia automaticamente — prompt enviado imediatamente ao carregar</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-indigo-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>2 slots de URL personalizada — configure qualquer serviço de IA fora da lista padrão</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-indigo-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Refinamento opcional antes do despacho — aprimoramento final do LLM antes de enviar</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-indigo-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Execução em paralelo — todas as abas abrem simultaneamente; colete as respostas em menos de 1 minuto</span>
                      </li>
                    </ul>
                    <div className="bg-white border-l-4 border-hub-indigo rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Todas as abas do navegador abrem em paralelo. Sem copiar e colar entre as abas.
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[14px] border border-hub-orchid-edge bg-hub-orchid-tint overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-hub-orchid flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-hub-orchid-ink uppercase tracking-widest">Quorum</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Encontre consenso entre todos os modelos</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Quando mais de 5 modelos independentes concordam com uma resposta, a confiança é maior do que com um único modelo. Cole todas as respostas de volta no PromptQuorum e aplique 13 tipos de análise de consenso.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-orchid-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Resumo de consenso — identifica temas compartilhados e concordâncias unânimes</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-orchid-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Detecção de contradições — sinaliza onde os modelos divergem; identifica opiniões minoritárias</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-orchid-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Detecção de alucinação — identifica afirmações que aparecem em poucos modelos; possíveis dados falsos</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-orchid-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Pontuação de confiança — nível de certeza por modelo e por afirmação</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-orchid-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Seleção da melhor resposta — seleciona a resposta individual de maior qualidade</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-hub-orchid-ink font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Mesclagem ponderada — sintetiza uma resposta híbrida usando os melhores elementos de todos os modelos</span>
                      </li>
                    </ul>
                    <div className="bg-white border-l-4 border-hub-orchid rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Quando mais de 5 modelos independentes convergem para a mesma resposta, o risco de alucinação é menor do que com um único modelo.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9 Frameworks de Prompt Integrados</h3>
              <p className="text-text-secondary mb-6">Prompts estruturados com frameworks produzem resultados mensuravelmente melhores do que solicitações não estruturadas. Cada framework organiza a entrada de forma diferente para tipos de tarefa específicos. Um Assistente de Frameworks recomenda o mais adequado, ou crie 2 frameworks personalizados.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-hub-orchid-edge">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">Framework</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">Estrutura</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">Ideal para</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-hub-orchid-edge">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-hub-orchid-ink whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Consultas rápidas e ad hoc sem estrutura</td>
                    </tr>
                    <tr className="border-b border-hub-orchid-edge">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-hub-orchid-ink whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Estrutura mínima de 3 campos; tarefas simples</td>
                    </tr>
                    <tr className="border-b border-hub-orchid-edge">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-hub-orchid-ink whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Escrita criativa; tarefas de uso geral</td>
                    </tr>
                    <tr className="border-b border-hub-orchid-edge">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-hub-orchid-ink whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Textos de marketing; comunicação empresarial</td>
                    </tr>
                    <tr className="border-b border-hub-orchid-edge">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-hub-orchid-ink whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Análise; pesquisa; redação técnica</td>
                    </tr>
                    <tr className="border-b border-hub-orchid-edge">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-hub-orchid-ink whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Fluxos de trabalho empresariais de múltiplas etapas</td>
                    </tr>
                    <tr className="border-b border-hub-orchid-edge">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-hub-orchid-ink whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Aprendizado few-shot; tarefas baseadas em exemplos</td>
                    </tr>
                    <tr className="border-b border-hub-orchid-edge">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-hub-orchid-ink whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Tarefas profissionais; prompts baseados em papéis</td>
                    </tr>
                    <tr className="border-b border-hub-orchid-edge">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-hub-orchid-ink whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Estrutura mínima; apenas 3 campos essenciais</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13 Tipos de Análise Quorum</h3>
              <p className="text-text-secondary mb-6">Aplique 2 ou todas as 13 análises às respostas de vários modelos. Cada análise é executada pelo seu LLM conectado, não pelos servidores do PromptQuorum. Identifique consenso, contradições, alucinações e níveis de confiança em todos os resultados.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-5">
                  <div className="text-xs font-bold text-hub-orchid-ink uppercase tracking-widest mb-3">Síntese (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Resumo de consenso — temas compartilhados entre todos os modelos
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Mesclagem ponderada — resposta híbrida combinando o melhor de cada modelo
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Extração de fatos atômicos — desmembra afirmações em fatos discretos; conta a concordância entre modelos
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-5">
                  <div className="text-xs font-bold text-hub-orchid-ink uppercase tracking-widest mb-3">Comparação (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Mapeamento de sobreposição — identifica quais modelos produziram resultados idênticos
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Detecção de contradições — sinaliza afirmações onde os modelos divergem
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Pontuação de confiança — mede o nível de certeza por modelo e por afirmação
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-5">
                  <div className="text-xs font-bold text-hub-orchid-ink uppercase tracking-widest mb-3">Qualidade (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Verificação de completude — verifica se todas as informações necessárias estão presentes
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Detecção de alucinação — identifica afirmações em poucos modelos; possíveis dados falsos
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Eliminação de redundância — remove afirmações duplicadas ou quase duplicadas
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-5">
                  <div className="text-xs font-bold text-hub-orchid-ink uppercase tracking-widest mb-3">Seleção (4)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Seleção da melhor resposta — escolhe a resposta individual de maior qualidade
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Conjunto multi-modelo — combina resultados usando ponderação de confiabilidade por modelo
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Sinalizador de controvérsia — destaca afirmações onde a concordância entre modelos é fraca
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                      Análise personalizada — modelo de análise definido pelo usuário
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-white border border-hub-orchid-edge rounded-[14px] p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">Exporte resultados em 6 formatos</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-hub-orchid-edge rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-white border border-hub-orchid-edge rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-white border border-hub-orchid-edge rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-white border border-hub-orchid-edge rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-white border border-hub-orchid-edge rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-white border border-hub-orchid-edge rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">Múltiplos formatos → baixados como arquivo .zip. File System Access API para seleção de pasta (Chrome/Edge/Safari 16+).</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">Conceitos-Chave</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-6">
                  <dt className="font-semibold text-hub-orchid-ink mb-2">Despacho Multi-Modelo</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Enviar um prompt simultaneamente para mais de 25 modelos de IA com um único clique. O PromptQuorum pré-carrega seu prompt em cada destino via URL — sem copiar e colar, todas as abas abrem em paralelo.</dd>
                </div>
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-6">
                  <dt className="font-semibold text-hub-orchid-ink mb-2">Análise Quorum</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Comparação estruturada de respostas de vários modelos de IA para identificar consenso, contradições e níveis de confiança. O PromptQuorum oferece 13 tipos de análise, incluindo Detecção de Alucinação e Seleção da Melhor Resposta.</dd>
                </div>
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-6">
                  <dt className="font-semibold text-hub-orchid-ink mb-2">Pontuação de Consenso</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Uma classificação de confiança derivada do grau de concordância entre várias respostas de modelos. Maior consenso = maior confiabilidade. Menor consenso sinaliza áreas de incerteza ou possível alucinação.</dd>
                </div>
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-6">
                  <dt className="font-semibold text-hub-orchid-ink mb-2">Detecção de Alucinação</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Identificar afirmações factuais que aparecem em apenas um ou em uma minoria de modelos, indicando possível fabricação da IA. Cruzar mais de 5 modelos independentes reduz drasticamente a taxa de alucinações não detectadas.</dd>
                </div>
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-6">
                  <dt className="font-semibold text-hub-orchid-ink mb-2">BYOM — Traga seu Próprio Modelo</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Conectar suas próprias chaves de API diretamente aos provedores de IA. As chaves são armazenadas apenas no localStorage do seu navegador e se conectam diretamente aos provedores — nenhum servidor do PromptQuorum recebe ou transmite suas credenciais.</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">Traga seu próprio modelo (BYOM) — Sem infraestrutura do PromptQuorum</h3>
              <p className="text-text-secondary mb-6">O PromptQuorum não hospeda nem executa nenhum modelo LLM. Cada chamada de API vai diretamente do seu navegador para o provedor escolhido. Suas chaves de API permanecem no localStorage do navegador e nunca são transmitidas aos servidores do PromptQuorum.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-hub-orchid-ink uppercase tracking-widest mb-4">APIs na nuvem (traga sua própria chave de API)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      OpenAI (GPT-4, GPT-4o)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      Anthropic (Claude 3.5)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      Google Gemini 1.5
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      Grok (xAI)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      DeepSeek
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      Mistral
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      Cohere
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      Together AI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      Groq
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-hub-orchid flex-shrink-0" />
                      OpenRouter (free tier)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-hub-orchid-ink uppercase tracking-widest mb-4">Modelos locais (sem chave de API; roda na sua máquina)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Ollama (localhost:11434)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      LM Studio (localhost:1234)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Jan AI (localhost:1337)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      GPT4All (localhost:4891)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Open WebUI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      KoboldCpp
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      vLLM
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      oobabooga
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Any OpenAI-compatible endpoint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-16">
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-6">
                  <div className="w-8 h-8 rounded-lg bg-hub-orchid-tint flex items-center justify-center mb-3">
                    <span className="text-hub-orchid-ink text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Sem telemetria</h3>
                  <p className="text-text-secondary text-sm">Sem análise, sem rastreamento, sem registro, sem coleta de dados. Nem mesmo estatísticas de uso anônimas ou tempo de sessão.</p>
                </div>
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-6">
                  <div className="w-8 h-8 rounded-lg bg-hub-orchid-tint flex items-center justify-center mb-3">
                    <span className="text-hub-orchid-ink text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Sem cadastro</h3>
                  <p className="text-text-secondary text-sm">Nenhum cadastro necessário. Sem e-mail, sem conta, sem login. Abra o app e comece imediatamente.</p>
                </div>
                <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-6">
                  <div className="w-8 h-8 rounded-lg bg-hub-orchid-tint flex items-center justify-center mb-3">
                    <span className="text-hub-orchid-ink text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Funciona offline</h3>
                  <p className="text-text-secondary text-sm">O app de desktop (Electron) suporta operação totalmente offline com modelos locais via Ollama, LM Studio, Jan AI ou endpoints compatíveis. O app móvel (Capacitor) está planejado.</p>
                </div>
            </div>

            <div className="bg-white border border-hub-orchid-edge rounded-[14px] p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">Como testamos</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">Os dados de desempenho citados nos artigos do PromptQuorum são baseados em sessões de despacho controladas com o PromptQuorum. Quando um artigo cita números específicos (pontuações de qualidade de prompt, comparações de temperatura, valores de benchmark), estes refletem testes editoriais ou dados de benchmark públicos — não medições proprietárias do PromptQuorum, salvo indicação explícita.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                  Despacho de prompts: enviados simultaneamente aos modelos indicados via despacho com um clique do PromptQuorum
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                  Tamanho da amostra: testes editoriais usam no mínimo 30 prompts por condição, salvo indicação contrária
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                  Avaliação: as respostas são pontuadas por pelo menos 2 avaliadores independentes em revisão cega
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                  Benchmarks de terceiros (HumanEval, SWE-bench, MBPP): extraídos de publicações oficiais dos modelos ou leaderboards da comunidade; data de avaliação citada em cada artigo
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                  Testes de modelos locais: executados em hardware de consumidor no nível de quantização indicado no artigo
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-hub-orchid-ink mt-0.5 flex-shrink-0">→</span>
                  Divulgação: onde testes internos do PromptQuorum são citados, eles são identificados com a etiqueta "Tested in PromptQuorum" no corpo do artigo
                </li>
              </ul>
            </div>
          </div>
          </section>

          {/* Features */}
          <section id="features" className="scroll-mt-24 border-t border-border bg-hub-violet-tint">
            <div className="mx-auto max-w-[1120px] px-6 py-14">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="rounded-[10px] bg-hub-violet px-3.5 py-1 text-[15px] font-extrabold tracking-wide text-white">02</span>
              <h2 className="text-[26px] font-bold tracking-tight text-text-primary sm:text-[28px]">Recursos</h2>
            </div>

            <div className="bg-white border border-hub-violet-edge rounded-[14px] p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Principais recursos em resumo</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-hub-violet-ink font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9 frameworks de prompt engineering (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hub-violet-ink font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Envio para 25+ modelos na nuvem simultaneamente (GPT-4o, Claude, Gemini, DeepSeek e mais)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hub-violet-ink font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">13 tipos de análise de consenso Quorum em 4 categorias (síntese, comparação, qualidade, seleção)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hub-violet-ink font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">A detecção de alucinação sinaliza afirmações que aparecem em apenas um modelo ou que contradizem o consenso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hub-violet-ink font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Suporte a LLM local: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM e qualquer endpoint compatível com OpenAI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hub-violet-ink font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Privacidade em primeiro lugar: execução totalmente offline, sem necessidade de cadastro, nada sai do seu dispositivo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hub-violet-ink font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Comparação instantânea de respostas lado a lado de todos os modelos em tempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hub-violet-ink font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Otimização automática de prompts com 8 técnicas de refinamento para melhores resultados de IA</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-[14px] border border-hub-violet-edge bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-hub-violet flex items-center justify-center text-white mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Otimização de prompts</h3>
                <p className="text-text-secondary">Refine e otimize seus prompts automaticamente com 8 técnicas de refinamento comprovadas para melhores resultados de IA.</p>
              </div>
              <div className="rounded-[14px] border border-hub-azure-edge bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-hub-azure flex items-center justify-center text-white mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Envio multimodelo</h3>
                <p className="text-text-secondary">Execute prompts no ChatGPT, Claude, Gemini e mais 25+ modelos simultaneamente em paralelo.</p>
              </div>
              <div className="rounded-[14px] border border-hub-indigo-edge bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-hub-indigo flex items-center justify-center text-white mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Pontuação Quorum</h3>
                <p className="text-text-secondary">Encontre respostas de consenso entre modelos com pontuação de confiança. A detecção de alucinação sinaliza afirmações que aparecem em apenas um modelo.</p>
              </div>
              <div className="rounded-[14px] border border-hub-orchid-edge bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-hub-orchid flex items-center justify-center text-white mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Comparação instantânea</h3>
                <p className="text-text-secondary">Obtenha respostas em paralelo com um clique — sem copiar e colar manualmente entre abas do navegador.</p>
              </div>
              <div className="rounded-[14px] border border-hub-rose-edge bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-hub-rose flex items-center justify-center text-white mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Privacidade em primeiro lugar</h3>
                <p className="text-text-secondary">Opção de execução local. Sem necessidade de cadastro. Controle total sobre seus prompts.</p>
              </div>
            </div>

            <div className="bg-white border border-hub-violet-edge rounded-[14px] p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="pt" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">Como você revisa os resultados da otimização?</h3>
              <p className="text-text-secondary mb-6">Revise avaliações de qualidade, histórico de versões e sugestões de melhoria para seus prompts otimizados.</p>
              <div className="bg-white border border-hub-violet-edge rounded-[14px] p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="pt" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Controle de versões</h4>
                  <p className="text-text-secondary text-sm">Acompanhe todas as iterações do seu prompt. Reverta para versões anteriores a qualquer momento ou crie ramificações para explorar diferentes caminhos de otimização.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Insights de qualidade</h4>
                  <p className="text-text-secondary text-sm">Entenda exatamente por que seu prompt foi aprimorado. Receba feedback detalhado sobre pontos fortes e áreas a refinar.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Refinamentos inteligentes</h4>
                  <p className="text-text-secondary text-sm">Aplique refinamentos com um clique para tornar seu prompt mais conciso, claro, profissional ou detalhado, conforme necessário.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">O que é o Quorum — Consenso multimodelo?</h3>
              <p className="text-text-secondary mb-6">Colete respostas de 25+ modelos de IA, analise padrões de consenso e sintetize percepções de diferentes perspectivas.</p>
              <div className="bg-white border border-hub-violet-edge rounded-[14px] p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="pt" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Coletar respostas</h4>
                  <p className="text-text-secondary text-sm">Execute seu prompt no ChatGPT, Claude, Gemini e mais de 25 outros modelos. Obtenha perspectivas e respostas diversas instantaneamente.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Analisar padrões</h4>
                  <p className="text-text-secondary text-sm">Identifique em que todos os modelos concordam (consenso), onde divergem e quais respostas têm a maior qualidade para seu caso de uso.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Sintetizar insights</h4>
                  <p className="text-text-secondary text-sm">Combine os pontos fortes de vários modelos em respostas melhores. Exporte os resultados em vários formatos para uso posterior.</p>
                </div>
              </div>
            </div>
          </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="scroll-mt-24 border-t border-border bg-hub-indigo-tint">
            <div className="mx-auto max-w-[1120px] px-6 py-14">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="rounded-[10px] bg-hub-indigo px-3.5 py-1 text-[15px] font-extrabold tracking-wide text-white">03</span>
              <h2 className="text-[26px] font-bold tracking-tight text-text-primary sm:text-[28px]">Comparar ferramentas</h2>
            </div>

            <div className="bg-hub-amber-tint border border-hub-amber-edge rounded-lg px-4 py-3 text-xs text-hub-amber-ink leading-relaxed mb-8">
              <strong>Nota de precisão:</strong>
               As informações de recursos e preços foram verificadas em março de 2026 e são fornecidas de boa-fé com base na documentação pública de cada produto. Os produtos mudam com frequência — verifique os recursos atuais diretamente com cada fornecedor. Se você acha que alguma informação desta página está incorreta ou desatualizada, 
              <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">entre em contato</a>
               e corrigiremos imediatamente. Esta comparação é produzida pela PromptQuorum e reflete nossa perspectiva como participante neste mercado.
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-3">O que é uma ferramenta de comparação multi-LLM?</h3>
              <div className="border-l-4 border-hub-indigo bg-hub-indigo-tint rounded-r-lg px-5 py-4 mb-4">
                <p className="text-text-primary text-[15px] leading-relaxed">Uma ferramenta de comparação multi-LLM envia o mesmo prompt para vários modelos de linguagem grandes de forma simultânea e exibe as respostas lado a lado, permitindo que os usuários avaliem as diferenças em raciocínio, precisão e estilo entre sistemas de IA — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large e outros — sem trocar de aba nem repetir a entrada.</p>
              </div>
              <p className="text-text-secondary mb-3">Nenhum modelo de IA individual é autoritativo para todas as tarefas em 2026. GPT-4o, Claude 4.6 Sonnet e Gemini 2.5 Pro têm dados de treinamento, vieses arquiteturais e pontos fortes de raciocínio diferentes. Uma resposta que parece correta de um modelo pode ser contradita, nuançada ou significativamente ampliada por outro.</p>
              <p className="text-text-secondary">As cinco ferramentas comparadas aqui representam as principais abordagens disponíveis atualmente: plataformas de consumo (Poe by Quora), benchmarks comunitários (LM Arena), suítes de avaliação para desenvolvedores (OpenMark), espaços de trabalho multi-modelo unificados (AiZolo) e plataformas de pontuação de consenso (PromptQuorum). Cada uma serve a um fluxo de trabalho diferente.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">Quais são as diferenças principais entre 5 ferramentas multi-LLM?</h3>
              <p className="text-text-secondary mb-4">A tabela a seguir compara as cinco ferramentas nos recursos mais importantes para fluxos de trabalho multi-LLM profissionais — envio simultâneo, pontuação de consenso, suporte a LLM local, controle de chave de API e preços.</p>
              <div className="overflow-x-auto rounded-[14px] border border-hub-indigo-edge bg-white">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-hub-indigo-tint border-b border-hub-indigo-edge">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">Ferramenta</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Envio simultâneo</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Pontuação de consenso</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">LLM local</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Controle de chave API</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-hub-indigo-edge">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">PromptQuorum</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Sim</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Quorum Verdict</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Ollama + LM Studio</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Suas chaves</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Beta gratuito</td>
                    </tr>
                    <tr className="border-b border-hub-indigo-edge">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">Poe (Quora)</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Sequencial / limitado</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Não</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Somente nuvem</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Limitado</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Grátis / $19,99/mês</td>
                    </tr>
                    <tr className="border-b border-hub-indigo-edge">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">LM Arena</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Apenas 2 modelos</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Apenas votação humana</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Somente nuvem</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Não</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Grátis</td>
                    </tr>
                    <tr className="border-b border-hub-indigo-edge">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">OpenMark</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Paralelo</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Pontuação determinística</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Somente nuvem</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Sim</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Nível gratuito / créditos</td>
                    </tr>
                    <tr className="border-b border-hub-indigo-edge">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">AiZolo</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Sim</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Não</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Somente nuvem</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Sim</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">A partir de $9,90/mês</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-mono text-text-secondary mt-3">✓ Sim · ~ Parcial · ✗ Não · Baseado em documentação pública, março de 2026. Os preços e recursos mudam — verifique com cada fornecedor. Esta comparação é produzida pela PromptQuorum.</p>
            </div>

            <div className="mb-10">
              <div className="border border-hub-indigo-edge bg-hub-indigo-tint rounded-[14px] p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-hub-indigo-ink">PromptQuorum</span>
                  <span className="text-xs font-mono bg-green-100 text-green-700 border-green-200 border px-3 py-1 rounded-full">Ideal para: desenvolvedores e usuários avançados</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Beta · Julho de 2026</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">promptquorum.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Chaves API necessárias</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Ollama + LM Studio</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>O PromptQuorum é a única ferramenta entre as analisadas que combina o envio simultâneo de prompts com a pontuação de consenso automatizada.</strong> Você escreve um prompt, seleciona seus modelos — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large e modelos que rodam localmente — e o PromptQuorum os envia a todos em paralelo. O Quorum Verdict então analisa onde os modelos concordam, onde divergem e o que esses padrões significam para a confiabilidade da resposta.</p>
<p className="text-text-secondary mb-3 leading-relaxed">O recurso definidor é o suporte a LLM local. Por meio da integração com Ollama e LM Studio, o PromptQuorum inclui modelos que rodam localmente — o LLaMA 3.1 7B requer 8 GB de RAM; o 13B requer 16 GB — no envio, de modo que prompts sensíveis nunca saem da sua máquina. Para profissionais do direito, profissionais de saúde, analistas financeiros e desenvolvedores que trabalham com código proprietário, isso não é opcional.</p>
<p className="text-text-secondary leading-relaxed">O PromptQuorum exige que os usuários tragam suas próprias chaves de API da OpenAI, Anthropic, Google e Mistral. Isso mantém os dados sob seu controle, os custos transparentes e o uso vinculado aos seus próprios termos comerciais com cada fornecedor.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Quem deveria usar o PromptQuorum?</h4>
              <p className="text-text-secondary mb-8">O PromptQuorum foi projetado para desenvolvedores que avaliam qual modelo integrar a um pipeline de produção, pesquisadores que precisam de validação cruzada de descobertas entre modelos e profissionais cujo trabalho envolve informações confidenciais que não podem ser enviadas a servidores na nuvem de terceiros.</p>
              <div className="border border-hub-indigo-edge bg-white rounded-[14px] p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
                  <span className="text-xs font-mono bg-hub-amber-tint text-amber-700 border-hub-amber-edge border px-3 py-1 rounded-full">Ideal para: uso casual / consumidor</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">poe.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Grátis / $19,99/mês</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">iOS, Android, Web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Milhões de usuários</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>O Poe, criado pela Quora, é a maior plataforma multi-modelo de IA com acesso a GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok e milhares de bots criados por usuários a partir de uma única interface.</strong> É a melhor opção para usuários que querem acesso amplo a modelos de IA sem gerenciar chaves de API.</p>
<p className="text-text-secondary leading-relaxed">O Poe não oferece envio simultâneo — os usuários alternam entre modelos ou comparam dois de cada vez, em vez de enviar um prompt para todos os modelos em paralelo. Não há pontuação de consenso nem análise automatizada de concordância de respostas. Todo o processamento é na nuvem, o que o torna inadequado para trabalho com informações sensíveis.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Poe vs PromptQuorum: diferenças principais</h4>
              <p className="text-text-secondary mb-8">O Poe é melhor para a exploração casual, a descoberta de bots e a conversa sem gerenciamento de chaves de API. O PromptQuorum é melhor para a avaliação controlada de prompts, a análise de consenso e os fluxos de trabalho com LLM local. Eles atendem a casos de uso fundamentalmente diferentes: o Poe é uma plataforma de consumo; o PromptQuorum é uma ferramenta de avaliação profissional.</p>
              <div className="border border-hub-indigo-edge bg-white rounded-[14px] p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
                  <span className="text-xs font-mono bg-hub-amber-tint text-amber-700 border-hub-amber-edge border px-3 py-1 rounded-full">Ideal para: benchmarking comunitário</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">lmarena.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Grátis</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Somente web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Sistema de votação humana</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>A LM Arena (antiga Chatbot Arena) é o leaderboard de modelos de IA mais citado, utilizando ratings Elo derivados de milhões de votos de preferência humana.</strong> Os usuários enviam prompts e votam em qual de dois modelos anônimos produziu a melhor resposta.</p>
<p className="text-text-secondary leading-relaxed">A LM Arena exibe dois modelos lado a lado e coleta um voto de preferência humana — não fornece análise de consenso automatizada, não suporta LLMs locais e não permite selecionar modelos específicos no modo de comparação principal. É uma plataforma de benchmarking, não uma ferramenta de fluxo de trabalho.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">LM Arena vs PromptQuorum: diferenças principais</h4>
              <p className="text-text-secondary mb-8">A LM Arena é melhor para entender as tendências agregadas de preferência humana no setor. O PromptQuorum é melhor para avaliar seus prompts específicos em seus modelos escolhidos com uma análise consistente e automatizada. A LM Arena diz a você o que a multidão prefere; o PromptQuorum diz a você o que seu prompt produz em cada modelo que importa para você.</p>
              <div className="border border-hub-indigo-edge bg-white rounded-[14px] p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
                  <span className="text-xs font-mono bg-green-50 text-green-700 border-green-200 border px-3 py-1 rounded-full">Ideal para: análise de custo/qualidade</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">openmark.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Nível gratuito / créditos</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Mais de 100 modelos</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Pontuação determinística</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>O OpenMark é uma ferramenta de benchmarking voltada para desenvolvedores que executa prompts contra mais de 100 modelos de IA simultaneamente e pontua os resultados de maneira determinística — o mesmo prompt sempre produz o mesmo resultado classificado.</strong> Mostra exatamente quanto cada modelo custa por prompt junto com as pontuações de qualidade.</p>
<p className="text-text-secondary leading-relaxed">O OpenMark é sólido em amplitude (mais de 100 modelos) e transparência de custos, mas não produz um veredito de consenso — pontua cada modelo individualmente em vez de analisar padrões de concordância. Não suporta LLMs locais por meio de Ollama ou LM Studio.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">OpenMark vs PromptQuorum: diferenças principais</h4>
              <p className="text-text-secondary mb-8">O OpenMark responde "qual modelo individual funciona melhor para esta tarefa e a que custo". O PromptQuorum responde "quanto os modelos concordam neste prompt e o que significa sua discordância?". Ambos exigem chaves de API; o OpenMark suporta mais de 100 modelos; o PromptQuorum adiciona de forma única a inferência de LLM local e a pontuação de consenso.</p>
              <div className="border border-hub-indigo-edge bg-white rounded-[14px] p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
                  <span className="text-xs font-mono bg-hub-amber-tint text-amber-700 border-hub-amber-edge border px-3 py-1 rounded-full">Ideal para: equipes de conteúdo</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">aizolo.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">A partir de $9,90/mês</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">GPT-4o, Claude, Gemini, Grok</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-hub-indigo-edge px-2 py-1 rounded">Biblioteca de prompts</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>O AiZolo é um espaço de trabalho multi-modelo unificado projetado para criadores de conteúdo e equipes de marketing, com envio simultâneo para GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro e Grok em paralelo.</strong> A partir de março de 2026, os planos começavam a partir de $9,90/mês — verifique o preço atual em aizolo.com.</p>
<p className="text-text-secondary leading-relaxed">O AiZolo não oferece pontuação de consenso — exibe as respostas lado a lado, mas deixa a análise para o usuário. Suporta apenas quatro modelos na nuvem, sem opção de LLM local. É uma ferramenta de fluxo de trabalho de produção de conteúdo, não uma plataforma de avaliação técnica.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">AiZolo vs PromptQuorum: diferenças principais</h4>
              <p className="text-text-secondary mb-8">O AiZolo é melhor para equipes de conteúdo que precisam de um espaço de trabalho de escrita multi-modelo acessível para uso diário. O PromptQuorum é melhor para usuários avançados que precisam de análise de consenso automatizada, privacidade com LLM local e acesso controlado por chave de API a um conjunto mais amplo de modelos, incluindo sistemas de código aberto.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Qual ferramenta multi-LLM você deveria usar?</h3>
              <div className="space-y-3">
                <div className="rounded-lg px-5 py-4 bg-hub-indigo-tint border border-hub-indigo-edge">
                  <span className="font-semibold text-hub-indigo-ink">Escolha o PromptQuorum</span>
                  <span className="text-text-secondary"> se você precisa de pontuação de consenso entre modelos, suporte a LLM local para trabalho com informações sensíveis ou um fluxo de avaliação controlado com suas próprias chaves de API.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-white border border-hub-indigo-edge">
                  <span className="font-semibold text-text-primary">Escolha o Poe</span>
                  <span className="text-text-secondary"> se você quer acesso fácil a GPT-4o, Claude 4.6 Sonnet, Gemini e milhares de bots para conversa casual e exploração sem gerenciar chaves de API.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-white border border-hub-indigo-edge">
                  <span className="font-semibold text-text-primary">Escolha a LM Arena</span>
                  <span className="text-text-secondary"> se você quer contribuir ou estudar os dados de preferência de modelos impulsionados pela comunidade e os rankings Elo do setor.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-white border border-hub-indigo-edge">
                  <span className="font-semibold text-text-primary">Escolha o OpenMark</span>
                  <span className="text-text-secondary"> se você é um desenvolvedor que seleciona um modelo para uma aplicação de produção e precisa de pontuação de qualidade determinística com dados de custo transparentes em mais de 100 modelos.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-white border border-hub-indigo-edge">
                  <span className="font-semibold text-text-primary">Escolha o AiZolo</span>
                  <span className="text-text-secondary"> se você é um criador de conteúdo ou profissional de marketing que precisa de um espaço de trabalho multi-modelo acessível e bem projetado para fluxos de trabalho de escrita diários.</span>
                </div>
              </div>
            </div>
          </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24 border-t border-border bg-hub-cyan-tint">
            <div className="mx-auto max-w-[1120px] px-6 py-14">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="rounded-[10px] bg-hub-cyan px-3.5 py-1 text-[15px] font-extrabold tracking-wide text-white">04</span>
              <h2 className="text-[26px] font-bold tracking-tight text-text-primary sm:text-[28px]">Perguntas frequentes</h2>
            </div>
            <div className="rounded-[14px] border border-border bg-white">
                <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Is PromptQuorum free?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>How does privacy work?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up. Zero telemetry, zero tracking, no data collection — not even anonymous usage stats.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Which AI providers are supported?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Over 25 AI providers are included: OpenAI (GPT-4, GPT-4o), Anthropic (Claude), Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, plus all local providers (Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible endpoint).</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What platforms does PromptQuorum run on?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">PromptQuorum is available for macOS, Windows, and Linux (desktop via Electron). A web application is in development, followed by mobile (iOS and Android via Capacitor). It works fully offline with a local LLM.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What makes PromptQuorum different?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">PromptQuorum covers the full prompt lifecycle in a single browser-based tool: structured writing with 9 frameworks, AI-powered iterative optimization with 8 refinement types, one-click dispatch to 25+ AI services, and 13 Quorum analysis types for consensus scoring — all without any data leaving your device.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Are there any limits?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">No limits from PromptQuorum. Your usage is only limited by your API keys or local LLM resources.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What is prompt engineering and why does it matter?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Prompt engineering is the practice of designing inputs to AI models so they return more accurate, useful, and reliable outputs. In testing, structured prompts with framework fields produce 25–45% higher LLM evaluation scores compared to unstructured inputs. PromptQuorum automates this with 9 built-in frameworks — no expertise required.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>How does PromptQuorum optimize my prompts?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Your connected LLM transforms raw framework fields into a precision prompt. You then refine iteratively with 8 one-click refinements: Make Concise, Expand Detail, Break Into Steps, Simplify, Increase Specificity, Multi-Expert Consultation, Add Quality Controls, and Custom Instruction. Every step is saved in version history so you can revert anytime.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What prompt frameworks are built into PromptQuorum?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">PromptQuorum includes 9 frameworks: Single Prompt Line (quick), APE (3-field), CRAFT (creative writing), CO-STAR (used to win the Singapore GPT-4 competition), SPECS (analysis), RISEN (enterprise sequential tasks), TRACE (few-shot examples), Google Prompt (business tasks), and RTF (minimal 3-field). You can also build 2 fully custom frameworks.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What is the CO-STAR framework?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response. It was used to win the Singapore GPT-4 prompt engineering competition and is ideal for business communication, marketing copy, and content creation. PromptQuorum guides you through each field and assembles the final prompt automatically.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What is multi-model consensus and why is it valuable?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Multi-model consensus means sending the same prompt to multiple AI models and finding where they agree. When 5 independent models give the same answer, confidence is far higher than when 1 model answers alone. It also surfaces contradictions and potential hallucinations automatically.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>How does PromptQuorum detect AI hallucinations?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">After collecting responses from multiple models in the Quorum step, your LLM runs Hallucination Detection analysis — flagging claims that appear in only one model's response but not others, or that contradict factual consensus. You choose which analysis types to run and combine them freely.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Can I use PromptQuorum with local AI models like Ollama or LM Studio?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Yes. PromptQuorum natively connects to Ollama (localhost:11434), LM Studio (localhost:1234), Jan AI (localhost:1337), GPT4All (localhost:4891), Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible endpoint. No API key needed for local models — everything runs on your machine.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Can I use PromptQuorum completely offline?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Yes. If you run a local model like Ollama or LM Studio, PromptQuorum works fully offline. No internet connection is required. Your prompts, API keys, and results never leave your device.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What is BYOM (Bring Your Own Model)?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">BYOM means PromptQuorum never calls any LLM using its own API keys. Every call goes directly from your browser to your chosen provider — cloud or local. Your API keys are stored only in your browser's localStorage and are never transmitted to any PromptQuorum server.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>How does the Dispatch feature work?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Dispatch sends your optimized prompt to multiple AI services in one click. For auto-dispatch services (ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral, and more), PromptQuorum pre-loads your prompt into the URL so it's ready instantly. Perplexity even auto-submits on arrival. All tabs open in parallel — collect all responses in under a minute.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What is the Quorum analysis and what types are available?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Quorum analysis processes all collected AI responses through your LLM. There are 13 analysis types across 4 categories: Synthesis (Consensus Summary, Weighted Merge, Atomic Facts Extraction), Comparison (Overlap Mapping, Contradiction Detection, Confidence Scoring), Quality (Completeness Check, Hallucination Detection, Redundancy Elimination), and Recommendations (Best Answer Selection, Multi-Model Ensemble, Controversy Flag).</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Can I export my results?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Yes. Quorum results export in 6 formats: .txt, .md, .json, .csv, .html, and .pdf. Select multiple formats and they're bundled into a .zip archive. On Chrome, Edge, and Safari 16+, you can choose your save folder using the File System Access API.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>How does the Framework Wizard work?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">The Framework Wizard asks you a few questions about your task — what you're trying to achieve, the type of output you need, and your audience. Based on your answers it recommends the most suitable framework from the 9 built-in options, and shows a side-by-side comparison of what each would produce for your prompt.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What is Smart Temperature Adjustment?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Before each optimization, PromptQuorum analyzes your prompt text and suggests the ideal LLM temperature: ~0.2 for factual tasks, ~0.7 for balanced, ~0.85 for creative. It shows a confidence score and only prompts you when confidence is above 60%. After 3 consistent choices for the same intent type, it auto-applies your preference.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Does PromptQuorum work with ChatGPT, Claude, and Gemini?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Yes. You can use ChatGPT (GPT-4, GPT-4o), Anthropic Claude (3, 3.5), and Google Gemini (1.5 Pro, Flash) as your optimization LLM by adding your API key in Settings. You also dispatch prompts to all three simultaneously via the Dispatch page, without needing API keys for dispatch.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Is there a version history for my prompts?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Yes. Every optimization step and refinement is saved automatically in version history with a human-readable label (e.g. "v2 — Make More Concise 12:36"). You can select any version to restore it and branch new refinements from there. Nothing is lost.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What output formats and languages does PromptQuorum support?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">The LLM output language is configurable per-session: English, German, French, Spanish, Italian, Portuguese, Chinese, and Japanese. Structure level options range from plain prose to strict tables-and-bullets. Response length is adjustable from 100 to 2000 words.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>How does PromptQuorum handle my API keys securely?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">API keys are stored only in your browser's localStorage — the same security boundary as your banking passwords stored in a password manager extension. They are never sent to any PromptQuorum server, never logged, and never included in telemetry (there is none). You can clear them anytime from Settings.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Is PromptQuorum suitable for enterprise or team use?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">PromptQuorum is currently designed for individual power users — developers, researchers, content creators, and AI-heavy professionals. Each user runs their own instance with their own API keys. Enterprise features (shared workspaces, team history, role-based access) are on the roadmap.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>What is Teaching Mode?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Teaching Mode adds an explanation box below every optimization result that explains exactly why each change was made — which prompt engineering principles were applied and what effect they have. It's designed for developers and researchers who want to learn prompt engineering while using the tool.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>How do I get PromptQuorum and is there a cost?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">PromptQuorum is in free public beta. Download the desktop app directly — no signup, no waitlist, no email required.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Who is Hans Kuepper, the founder of PromptQuorum?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">Hans Kuepper is the founder and developer of PromptQuorum. He is based in Baden-Württemberg, Germany, near Heidelberg in the Kraichgau hill country. He speaks four languages — German, English, French, and Russian — and has lived and worked in over 20 countries.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Where is PromptQuorum developed?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">PromptQuorum is built by Hans Kuepper, an independent developer in Baden-Württemberg, Germany. The project has no external investors and is developed as a privacy-first, user-owned AI tool.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Qual é a melhor ferramenta para comparar o mesmo prompt em vários LLMs simultaneamente?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">O PromptQuorum é a única ferramenta analisada aqui que combina o envio simultâneo com a pontuação de consenso automatizada. Poe, AiZolo e OpenMark oferecem respostas lado a lado, mas nenhum produz um Quorum Verdict — uma análise automatizada de onde GPT-4o, Claude 4.6 Sonnet e outros modelos concordam ou divergem. Para usuários que precisam de mais do que uma comparação visual lado a lado, o PromptQuorum é a opção projetada especificamente para isso. Informações de recursos verificadas em março de 2026.</p>
                </details>
              <details className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>Qual é a diferença entre o PromptQuorum e o Poe ou a LM Arena?</span>
                    <span aria-hidden="true" className="text-xl leading-none text-hub-violet transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-text-secondary">O Poe (da Quora) é uma plataforma de chat de consumo para alternar entre modelos um de cada vez. A LM Arena utiliza votação coletiva para classificar o desempenho individual dos modelos. O PromptQuorum é único: envia para todos os modelos selecionados simultaneamente e analisa automaticamente onde concordam ou divergem por meio da pontuação de consenso. O Poe foi criado para a conversa; a LM Arena para o benchmarking; o PromptQuorum para a avaliação controlada e a detecção de alucinações.</p>
                </details>
            </div>
          </div>
          </section>

          {/* Repeat CTA */}
          <div className="border-t border-border bg-white">
            <div className="mx-auto max-w-[1120px] px-6 py-12 text-center">
              <Link
                href="/pt/download"
                style={{ '--cta-tone': 'var(--hub-violet)', '--cta-offset': 'var(--hub-violet-tint)' } as CSSProperties}
                className="motion-safe:animate-hub-cta-pop relative inline-block rounded-[10px] bg-hub-violet px-6 py-3.5 text-[17px] font-extrabold text-white ring-2 ring-white ring-offset-2 ring-offset-[var(--cta-offset)] transition-[transform,box-shadow] duration-150 [animation-fill-mode:both] hover:-translate-y-0.5 shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.35),inset_0_-2.5px_0_0_rgba(0,0,0,0.16),0_10px_22px_-6px_var(--cta-tone)] hover:shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.4),inset_0_-2.5px_0_0_rgba(0,0,0,0.22),0_15px_28px_-6px_var(--cta-tone)]"
              >
                Testar a Beta
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
