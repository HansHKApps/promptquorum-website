import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Quantization for 6 GB VRAM: Which Level Fits?',
    seoTitle: 'Best Quantization for 6 GB VRAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M for 7B models: 4.9 GB, fits 6 GB VRAM with 1.1 GB for context. Q5_K_M fits tight. Q6_K and above exceed 6 GB. Quick answer from PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    educationalLevel: 'Beginner',
    parentArticle: '/local-llms/llm-quantization-explained',
    siblingBites: ['best-local-llm-6gb-vram', 'what-is-q4-k-m-quantization'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'What quantization level is best for 6 GB VRAM?',
        answer: 'Q4_K_M is the sweet spot — 7B/8B models at Q4_K_M use 4.7–4.9 GB, leaving 1.1 GB for the KV-cache. Q5_K_M fits but requires limiting context to 2k tokens. Avoid Q6_K and above on 6 GB cards.',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B at Q4_K_M: 4.7–4.9 GB — safe 6 GB fit with 4k context',
          'Q5_K_M uses ~5.7 GB — fits but cap context to 2k tokens or risk OOM mid-session',
          '14B models at Q4_K_M need 9.3 GB — no viable quantization fits 6 GB at acceptable quality',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Welche Quantisierungsstufe ist die beste für 6 GB VRAM?',
        answer: 'Q4_K_M ist der optimale Punkt — 7B/8B-Modelle bei Q4_K_M verwenden 4,7–4,9 GB und lassen 1,1 GB für den KV-Cache. Q5_K_M passt, erfordert aber eine Begrenzung des Kontexts auf 2k Token. Q6_K und höher überschreiten 6 GB.',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B bei Q4_K_M: 4,7–4,9 GB — sicher auf 6 GB mit 4k Kontext',
          'Q5_K_M verwendet ~5,7 GB — passt, aber Kontext auf 2k Token begrenzen um OOM zu vermeiden',
          '14B-Modelle bei Q4_K_M benötigen 9,3 GB — keine brauchbare Quantisierung passt auf 6 GB',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quel niveau de quantisation est le meilleur pour 6 Go de VRAM ?',
        answer: 'Q4_K_M est le point idéal — les modèles 7B/8B en Q4_K_M utilisent 4,7–4,9 Go, laissant 1,1 Go pour le cache KV. Q5_K_M s\'insère mais nécessite de limiter le contexte à 2k tokens. Q6_K et au-dessus dépassent 6 Go.',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B en Q4_K_M : 4,7–4,9 Go — ajustement sûr à 6 Go avec contexte 4k',
          'Q5_K_M utilise ~5,7 Go — tient mais limitez le contexte à 2k tokens pour éviter les OOM',
          'Les modèles 14B en Q4_K_M nécessitent 9,3 Go — aucune quantisation viable ne tient dans 6 Go',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '6 GB VRAM に最適な量子化レベルはどれですか？',
        answer: 'Q4_K_M が最適なポイント — 7B/8B モデルは Q4_K_M で 4.7〜4.9 GB を使用し、KV キャッシュに 1.1 GB 残ります。Q5_K_M は収まりますが、コンテキストを 2k トークンに制限する必要があります。Q6_K 以上は 6 GB を超えます。',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B (Q4_K_M)：4.7〜4.9 GB — 4k コンテキストで 6 GB に安全に収まる',
          'Q5_K_M は約 5.7 GB — 収まりますが OOM を避けるためコンテキストを 2k に制限',
          '14B モデル (Q4_K_M) は 9.3 GB 必要 — 6 GB では実用的な量子化なし',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '6 GB 显存最佳量化等级是哪个？',
        answer: 'Q4_K_M 是最佳选择——7B/8B 模型在 Q4_K_M 下使用 4.7–4.9 GB，为 KV 缓存留出 1.1 GB。Q5_K_M 可以容纳但需将上下文限制在 2k tokens。Q6_K 及以上超出 6 GB。',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B (Q4_K_M)：4.7–4.9 GB——在 4k 上下文下安全适配 6 GB',
          'Q5_K_M 使用约 5.7 GB——可以放入但请将上下文限制在 2k tokens 以避免 OOM',
          '14B 模型 Q4_K_M 需要 9.3 GB——6 GB 无可用量化方案',
        ],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuál es el mejor nivel de cuantización para 6 GB de VRAM?',
        answer: 'Q4_K_M es el punto óptimo — los modelos 7B/8B en Q4_K_M usan 4,7–4,9 GB, dejando 1,1 GB para la caché KV. Q5_K_M cabe pero requiere limitar el contexto a 2k tokens. Evita Q6_K y superiores en tarjetas de 6 GB.',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B en Q4_K_M: 4,7–4,9 GB — cabe en 6 GB con contexto 4k',
          'Q5_K_M usa ~5,7 GB — cabe, pero limita el contexto a 2k tokens para evitar OOM',
          'Los modelos 14B en Q4_K_M necesitan 9,3 GB — ninguna cuantización es viable en 6 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'For 6 GB VRAM cards (RTX 3060 6 GB, RTX 3050 6 GB, GTX 1660 Ti 6 GB): Q4_K_M is the correct quantization for 7B and 8B models',
          'Q4_K_M leaves 1.1 GB free — enough for a 4k-token KV-cache at the default Ollama context size of 2048',
          'Q5_K_M improves perplexity by ~1 point but uses 5.7 GB; reduce `--ctx-size` to 2048 to avoid out-of-memory errors',
          '14B models (Qwen 3 14B, Llama 3.3 13B) require 9.3 GB at Q4_K_M — no quantization tier makes them viable on 6 GB',
        ],
      },
      body1: {
        title: 'Quantization VRAM Usage for 7B/8B Models on 6 GB',
        content: [
          'Quantization level directly controls how much VRAM a model occupies. For 7B and 8B parameter models — the largest class that fits a 6 GB GPU — the practical options are Q3_K_M through Q5_K_M. Q2_K fits but degrades quality below useful levels; Q6_K and above exceed the 6 GB ceiling.',
          'Q4_K_M is the recommended default: a 7B model uses approximately 4.7 GB and an 8B model uses 4.9 GB at this quantization. This leaves 1.1 GB for the KV-cache, which Ollama allocates for the context window. At the default 2048-token context, this is sufficient. Increasing context to 4096 tokens requires approximately 0.5 GB additional KV-cache on a 7B model — still within budget on most 6 GB cards.',
          'Q5_K_M is the next step up. An 8B model at Q5_K_M uses approximately 5.7 GB, leaving only 300 MB free. This is enough for very short contexts (512–2048 tokens) but will cause OOM errors with longer conversations or system prompts. Use Q5_K_M only if you keep `num_ctx` at 2048 or below.',
        ],
        columns: ['Quantization', '7B VRAM', '8B VRAM', 'Fits 6 GB?', 'Max Context (approx)'],
        rows: [
          { 'Quantization': 'Q2_K', '7B VRAM': '~2.8 GB', '8B VRAM': '~3.0 GB', 'Fits 6 GB?': '✓ (quality poor)', 'Max Context (approx)': '8k+' },
          { 'Quantization': 'Q3_K_M', '7B VRAM': '~3.5 GB', '8B VRAM': '~3.7 GB', 'Fits 6 GB?': '✓ (acceptable)', 'Max Context (approx)': '8k+' },
          { 'Quantization': 'Q4_K_M', '7B VRAM': '~4.7 GB', '8B VRAM': '~4.9 GB', 'Fits 6 GB?': '✓ recommended', 'Max Context (approx)': '4k' },
          { 'Quantization': 'Q5_K_M', '7B VRAM': '~5.5 GB', '8B VRAM': '~5.7 GB', 'Fits 6 GB?': '⚠ tight (2k ctx only)', 'Max Context (approx)': '2k' },
          { 'Quantization': 'Q6_K', '7B VRAM': '~6.4 GB', '8B VRAM': '~6.6 GB', 'Fits 6 GB?': '✗ OOM', 'Max Context (approx)': '—' },
          { 'Quantization': 'Q8_0', '7B VRAM': '~7.5 GB', '8B VRAM': '~7.7 GB', 'Fits 6 GB?': '✗ OOM', 'Max Context (approx)': '—' },
        ],
      },
      body2: {
        title: 'Best Models to Run at Q4_K_M on 6 GB VRAM',
        content: [
          'Three 7B/8B models stand out at Q4_K_M on a 6 GB card. Qwen 3 7B Instruct is the best all-rounder — strong coding (HumanEval ~60%), multilingual support, and 128k context architecture (though you will run at 4k due to VRAM). Run it with `ollama run qwen2.5:7b`.',
          'Llama 3.3 8B is the fastest option. At Q4_K_M it runs at approximately 25 tokens per second on an RTX 3060 6 GB and handles general chat and instruction-following reliably. MMLU score of 66.6% is lower than Qwen 3 7B but the speed advantage makes it the better pick for interactive sessions.',
          'Phi-4 Mini (3.8B) is the wild card. At Q8_0 it fits in approximately 4.1 GB — comfortably within 6 GB — and punches above its weight on reasoning benchmarks relative to its size. Use it when you need sub-5 GB footprint with better reasoning than older 7B models. Run with `ollama run phi4-mini`.',
          'Do not attempt 14B models on 6 GB. Qwen 3 14B at Q4_K_M requires 9.3 GB. Q2_K brings it to approximately 5.5 GB but the perplexity penalty is severe — the model produces noticeably degraded output. Stick to 7B/8B at Q4_K_M or 3B/4B at Q8_0.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Quantization on 6 GB VRAM',
        faqs: [
          {
            q: 'Can I run a 14B model on 6 GB VRAM?',
            a: 'No viable path exists. Qwen 3 14B at Q4_K_M needs 9.3 GB. Dropping to Q2_K brings it to approximately 5.5 GB but the quality degradation is severe — output becomes noticeably less coherent. The correct model for 6 GB VRAM is a 7B or 8B model at Q4_K_M.',
          },
          {
            q: 'Is Q4_K_M or Q4_K_S better for 6 GB VRAM?',
            a: 'Q4_K_M. The Q4_K_S variant saves about 200 MB versus Q4_K_M but with a larger perplexity penalty. On a 6 GB card, Q4_K_M already leaves 1.1 GB headroom — the extra 200 MB from Q4_K_S is not needed, and the quality tradeoff is not worth it.',
          },
          {
            q: 'Should I use Q5_K_M instead of Q4_K_M at 6 GB VRAM?',
            a: 'Only if you strictly limit context to 2k tokens. Q5_K_M improves perplexity by approximately 1–1.5 points over Q4_K_M, but uses 5.7 GB on an 8B model, leaving only 300 MB for the KV-cache. Set `num_ctx 2048` in your Modelfile or Ollama parameters to avoid OOM mid-session.',
          },
          {
            q: 'What happens if my model exceeds 6 GB VRAM?',
            a: 'Ollama offloads the overflow layers to CPU RAM (using llama.cpp layer offloading). This causes a dramatic speed drop — from ~25 tok/s GPU-only to ~3–5 tok/s with partial CPU offload. If you see "n_gpu_layers" warnings or tokens-per-second below 5, your model is too large for your VRAM at the selected quantization.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Beste Quantisierung für 6 GB VRAM: Welche Stufe passt?',
    seoTitle: 'Beste Quantisierung für 6 GB VRAM 2026',
    metaDescription: 'Q4_K_M für 7B-Modelle: 4,9 GB, passt mit 1,1 GB Puffer für Kontext. Q5_K_M passt knapp. Q6_K und höher überschreiten 6 GB. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      de: {
        question: 'Welche Quantisierungsstufe ist die beste für 6 GB VRAM?',
        answer: 'Q4_K_M ist der optimale Punkt — 7B/8B-Modelle bei Q4_K_M verwenden 4,7–4,9 GB und lassen 1,1 GB für den KV-Cache. Q5_K_M passt, erfordert aber eine Begrenzung des Kontexts auf 2k Token. Q6_K und höher überschreiten 6 GB.',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B bei Q4_K_M: 4,7–4,9 GB — sicher auf 6 GB mit 4k Kontext',
          'Q5_K_M verwendet ~5,7 GB — passt, aber Kontext auf 2k Token begrenzen um OOM zu vermeiden',
          '14B-Modelle bei Q4_K_M benötigen 9,3 GB — keine brauchbare Quantisierung passt auf 6 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Für 6-GB-VRAM-Karten (RTX 3060 6 GB, RTX 3050 6 GB, GTX 1660 Ti 6 GB): Q4_K_M ist die richtige Quantisierung für 7B- und 8B-Modelle',
          'Q4_K_M lässt 1,1 GB frei — ausreichend für einen 4k-Token-KV-Cache bei der Standard-Ollama-Kontextgröße von 2048',
          'Q5_K_M verbessert die Perplexität um ~1 Punkt, verwendet aber 5,7 GB; reduzieren Sie `--ctx-size` auf 2048, um Out-of-Memory-Fehler zu vermeiden',
          '14B-Modelle (Qwen 3 14B, Llama 3.3 13B) benötigen bei Q4_K_M 9,3 GB — keine Quantisierungsstufe macht sie auf 6 GB nutzbar',
        ],
      },
      body1: {
        title: 'VRAM-Verbrauch der Quantisierungsstufen für 7B/8B-Modelle auf 6 GB',
        content: [
          'Die Quantisierungsstufe bestimmt direkt, wie viel VRAM ein Modell belegt. Für 7B- und 8B-Parameter-Modelle — die größte Klasse, die auf eine 6-GB-GPU passt — sind die praktischen Optionen Q3_K_M bis Q5_K_M. Q2_K passt, aber die Qualität sinkt unter ein nützliches Niveau; Q6_K und höher überschreiten die 6-GB-Grenze.',
          'Q4_K_M ist der empfohlene Standard: Ein 7B-Modell verwendet bei dieser Quantisierung etwa 4,7 GB und ein 8B-Modell etwa 4,9 GB. Das lässt 1,1 GB für den KV-Cache, den Ollama für das Kontextfenster zuweist. Beim Standard-Kontext von 2048 Token ist das ausreichend. Eine Erhöhung auf 4096 Token erfordert etwa 0,5 GB zusätzlichen KV-Cache bei einem 7B-Modell — bei den meisten 6-GB-Karten noch im Budget.',
          'Q5_K_M ist die nächste Stufe. Ein 8B-Modell bei Q5_K_M verwendet etwa 5,7 GB und lässt nur 300 MB frei. Das reicht für sehr kurze Kontexte (512–2048 Token), führt aber bei längeren Gesprächen oder System-Prompts zu OOM-Fehlern. Verwenden Sie Q5_K_M nur, wenn Sie `num_ctx` bei 2048 oder darunter halten.',
        ],
        columns: ['Quantisierung', '7B VRAM', '8B VRAM', 'Passt auf 6 GB?', 'Max. Kontext (ca.)'],
        rows: [
          { 'Quantisierung': 'Q2_K', '7B VRAM': '~2,8 GB', '8B VRAM': '~3,0 GB', 'Passt auf 6 GB?': '✓ (Qualität schlecht)', 'Max. Kontext (ca.)': '8k+' },
          { 'Quantisierung': 'Q3_K_M', '7B VRAM': '~3,5 GB', '8B VRAM': '~3,7 GB', 'Passt auf 6 GB?': '✓ (akzeptabel)', 'Max. Kontext (ca.)': '8k+' },
          { 'Quantisierung': 'Q4_K_M', '7B VRAM': '~4,7 GB', '8B VRAM': '~4,9 GB', 'Passt auf 6 GB?': '✓ empfohlen', 'Max. Kontext (ca.)': '4k' },
          { 'Quantisierung': 'Q5_K_M', '7B VRAM': '~5,5 GB', '8B VRAM': '~5,7 GB', 'Passt auf 6 GB?': '⚠ knapp (nur 2k Kontext)', 'Max. Kontext (ca.)': '2k' },
          { 'Quantisierung': 'Q6_K', '7B VRAM': '~6,4 GB', '8B VRAM': '~6,6 GB', 'Passt auf 6 GB?': '✗ OOM', 'Max. Kontext (ca.)': '—' },
          { 'Quantisierung': 'Q8_0', '7B VRAM': '~7,5 GB', '8B VRAM': '~7,7 GB', 'Passt auf 6 GB?': '✗ OOM', 'Max. Kontext (ca.)': '—' },
        ],
      },
      body2: {
        title: 'Beste Modelle für Q4_K_M auf 6 GB VRAM',
        content: [
          'Drei 7B/8B-Modelle stechen bei Q4_K_M auf einer 6-GB-Karte heraus. Qwen 3 7B Instruct ist der beste Allrounder — starkes Coding (HumanEval ~60%), mehrsprachige Unterstützung und 128k-Kontextarchitektur (obwohl Sie aufgrund des VRAMs bei 4k betreiben werden). Starten mit `ollama run qwen2.5:7b`.',
          'Llama 3.3 8B ist die schnellste Option. Bei Q4_K_M läuft es auf einer RTX 3060 6 GB mit etwa 25 Tokens pro Sekunde und bewältigt allgemeinen Chat und Instruktionsbefolgung zuverlässig. Der MMLU-Score von 66,6 % ist niedriger als Qwen 3 7B, aber der Geschwindigkeitsvorteil macht es zur besseren Wahl für interaktive Sitzungen.',
          'Phi-4 Mini (3,8B) ist die Wildcard. Bei Q8_0 passt es in etwa 4,1 GB — komfortabel innerhalb von 6 GB — und übertrifft seinen Größenklasse bei Reasoning-Benchmarks. Verwenden Sie es, wenn Sie einen Speicherbedarf unter 5 GB benötigen und besseres Reasoning als ältere 7B-Modelle möchten. Starten mit `ollama run phi4-mini`.',
          '14B-Modelle auf 6 GB sollten Sie nicht versuchen. Qwen 3 14B bei Q4_K_M benötigt 9,3 GB. Q2_K bringt es auf etwa 5,5 GB, aber der Perplexitätsabfall ist erheblich — das Modell produziert spürbar verschlechterte Ausgaben. Bleiben Sie bei 7B/8B bei Q4_K_M oder 3B/4B bei Q8_0.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zur Quantisierung bei 6 GB VRAM',
        faqs: [
          {
            q: 'Kann ich ein 14B-Modell auf 6 GB VRAM betreiben?',
            a: 'Es gibt keinen brauchbaren Weg. Qwen 3 14B bei Q4_K_M benötigt 9,3 GB. Ein Wechsel auf Q2_K bringt es auf etwa 5,5 GB, aber der Qualitätsabfall ist erheblich — die Ausgabe wird spürbar inkohärenter. Das richtige Modell für 6 GB VRAM ist ein 7B- oder 8B-Modell bei Q4_K_M.',
          },
          {
            q: 'Ist Q4_K_M oder Q4_K_S besser für 6 GB VRAM?',
            a: 'Q4_K_M. Die Q4_K_S-Variante spart etwa 200 MB gegenüber Q4_K_M, aber mit einem größeren Perplexitätsverlust. Auf einer 6-GB-Karte lässt Q4_K_M bereits 1,1 GB Puffer — die zusätzlichen 200 MB von Q4_K_S werden nicht benötigt, und der Qualitätskompromiss lohnt sich nicht.',
          },
          {
            q: 'Sollte ich Q5_K_M statt Q4_K_M bei 6 GB VRAM verwenden?',
            a: 'Nur wenn Sie den Kontext strikt auf 2k Token begrenzen. Q5_K_M verbessert die Perplexität um etwa 1–1,5 Punkte gegenüber Q4_K_M, aber verwendet 5,7 GB bei einem 8B-Modell und lässt nur 300 MB für den KV-Cache. Setzen Sie `num_ctx 2048` in Ihrem Modelfile oder Ollama-Parametern, um OOM mitten in einer Sitzung zu vermeiden.',
          },
          {
            q: 'Was passiert, wenn mein Modell 6 GB VRAM überschreitet?',
            a: 'Ollama lagert die überschüssigen Schichten in den CPU-RAM aus (mithilfe von llama.cpp Layer-Offloading). Das verursacht einen drastischen Geschwindigkeitseinbruch — von ~25 tok/s GPU-only auf ~3–5 tok/s mit teilweisem CPU-Offload. Wenn Sie "n_gpu_layers"-Warnungen sehen oder die Tokens-pro-Sekunde unter 5 fallen, ist Ihr Modell bei der gewählten Quantisierung zu groß für Ihren VRAM.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'Meilleure quantisation pour 6 Go de VRAM : quel niveau choisir ?',
    seoTitle: 'Meilleure quantisation 6 Go VRAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M pour les modèles 7B : 4,9 Go, tient dans 6 Go avec 1,1 Go pour le contexte. Q5_K_M tient juste. Q6_K et au-dessus dépassent 6 Go. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      fr: {
        question: 'Quel niveau de quantisation est le meilleur pour 6 Go de VRAM ?',
        answer: 'Q4_K_M est le point idéal — les modèles 7B/8B en Q4_K_M utilisent 4,7–4,9 Go, laissant 1,1 Go pour le cache KV. Q5_K_M s\'insère mais nécessite de limiter le contexte à 2k tokens. Q6_K et au-dessus dépassent 6 Go.',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B en Q4_K_M : 4,7–4,9 Go — ajustement sûr à 6 Go avec contexte 4k',
          'Q5_K_M utilise ~5,7 Go — tient mais limitez le contexte à 2k tokens pour éviter les OOM',
          'Les modèles 14B en Q4_K_M nécessitent 9,3 Go — aucune quantisation viable ne tient dans 6 Go',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Pour les cartes 6 Go VRAM (RTX 3060 6 Go, RTX 3050 6 Go, GTX 1660 Ti 6 Go) : Q4_K_M est la quantisation correcte pour les modèles 7B et 8B',
          'Q4_K_M laisse 1,1 Go libre — suffisant pour un cache KV de 4k tokens à la taille de contexte Ollama par défaut de 2048',
          'Q5_K_M améliore la perplexité de ~1 point mais utilise 5,7 Go ; réduisez `--ctx-size` à 2048 pour éviter les erreurs out-of-memory',
          'Les modèles 14B (Qwen 3 14B, Llama 3.3 13B) nécessitent 9,3 Go en Q4_K_M — aucun niveau de quantisation ne les rend viables sur 6 Go',
        ],
      },
      body1: {
        title: 'Utilisation VRAM par niveau de quantisation pour les modèles 7B/8B sur 6 Go',
        content: [
          'Le niveau de quantisation contrôle directement la quantité de VRAM occupée par un modèle. Pour les modèles de 7 et 8 milliards de paramètres — la plus grande classe adaptée à un GPU 6 Go — les options pratiques vont de Q3_K_M à Q5_K_M. Q2_K tient mais dégrade la qualité en dessous d\'un niveau utile ; Q6_K et au-dessus dépassent le plafond de 6 Go.',
          'Q4_K_M est le choix par défaut recommandé : un modèle 7B utilise environ 4,7 Go et un modèle 8B utilise 4,9 Go à cette quantisation. Cela laisse 1,1 Go pour le cache KV qu\'Ollama alloue pour la fenêtre de contexte. Au contexte par défaut de 2048 tokens, c\'est suffisant. Passer à 4096 tokens nécessite environ 0,5 Go de cache KV supplémentaire pour un modèle 7B — encore dans le budget sur la plupart des cartes 6 Go.',
          'Q5_K_M est l\'étape suivante. Un modèle 8B en Q5_K_M utilise environ 5,7 Go, ne laissant que 300 Mo libres. C\'est suffisant pour de très courts contextes (512–2048 tokens) mais provoquera des erreurs OOM avec des conversations plus longues ou des prompts système. Utilisez Q5_K_M uniquement si vous maintenez `num_ctx` à 2048 ou en dessous.',
        ],
        columns: ['Quantisation', 'VRAM 7B', 'VRAM 8B', 'Tient dans 6 Go ?', 'Contexte max (approx)'],
        rows: [
          { 'Quantisation': 'Q2_K', 'VRAM 7B': '~2,8 Go', 'VRAM 8B': '~3,0 Go', 'Tient dans 6 Go ?': '✓ (qualité faible)', 'Contexte max (approx)': '8k+' },
          { 'Quantisation': 'Q3_K_M', 'VRAM 7B': '~3,5 Go', 'VRAM 8B': '~3,7 Go', 'Tient dans 6 Go ?': '✓ (acceptable)', 'Contexte max (approx)': '8k+' },
          { 'Quantisation': 'Q4_K_M', 'VRAM 7B': '~4,7 Go', 'VRAM 8B': '~4,9 Go', 'Tient dans 6 Go ?': '✓ recommandé', 'Contexte max (approx)': '4k' },
          { 'Quantisation': 'Q5_K_M', 'VRAM 7B': '~5,5 Go', 'VRAM 8B': '~5,7 Go', 'Tient dans 6 Go ?': '⚠ juste (ctx 2k seulement)', 'Contexte max (approx)': '2k' },
          { 'Quantisation': 'Q6_K', 'VRAM 7B': '~6,4 Go', 'VRAM 8B': '~6,6 Go', 'Tient dans 6 Go ?': '✗ OOM', 'Contexte max (approx)': '—' },
          { 'Quantisation': 'Q8_0', 'VRAM 7B': '~7,5 Go', 'VRAM 8B': '~7,7 Go', 'Tient dans 6 Go ?': '✗ OOM', 'Contexte max (approx)': '—' },
        ],
      },
      body2: {
        title: 'Meilleurs modèles à faire tourner en Q4_K_M sur 6 Go de VRAM',
        content: [
          'Trois modèles 7B/8B se distinguent en Q4_K_M sur une carte 6 Go. Qwen 3 7B Instruct est le meilleur polyvalent — excellent en coding (HumanEval ~60%), support multilingue et architecture de contexte 128k (bien que vous opériez à 4k en raison du VRAM). Lancez-le avec `ollama run qwen2.5:7b`.',
          'Llama 3.3 8B est l\'option la plus rapide. En Q4_K_M, il tourne à environ 25 tokens par seconde sur une RTX 3060 6 Go et gère fiablement le chat général et le suivi d\'instructions. Son score MMLU de 66,6 % est inférieur à Qwen 3 7B, mais l\'avantage en vitesse en fait le meilleur choix pour les sessions interactives.',
          'Phi-4 Mini (3,8B) est la carte surprise. En Q8_0, il tient dans environ 4,1 Go — confortablement dans 6 Go — et surpasse sa catégorie de taille sur les benchmarks de raisonnement. Utilisez-le quand vous avez besoin d\'une empreinte inférieure à 5 Go avec un meilleur raisonnement que les anciens modèles 7B. Lancez avec `ollama run phi4-mini`.',
          'N\'essayez pas les modèles 14B sur 6 Go. Qwen 3 14B en Q4_K_M nécessite 9,3 Go. Q2_K le ramène à environ 5,5 Go mais la pénalité de perplexité est sévère — le modèle produit des sorties notablement dégradées. Restez sur du 7B/8B en Q4_K_M ou du 3B/4B en Q8_0.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur la quantisation avec 6 Go de VRAM',
        faqs: [
          {
            q: 'Peut-on faire tourner un modèle 14B sur 6 Go de VRAM ?',
            a: 'Aucune solution viable n\'existe. Qwen 3 14B en Q4_K_M a besoin de 9,3 Go. Passer à Q2_K le ramène à environ 5,5 Go, mais la dégradation de qualité est sévère — les sorties deviennent notablement incohérentes. Le modèle correct pour 6 Go de VRAM est un modèle 7B ou 8B en Q4_K_M.',
          },
          {
            q: 'Q4_K_M ou Q4_K_S : lequel est meilleur pour 6 Go de VRAM ?',
            a: 'Q4_K_M. La variante Q4_K_S économise environ 200 Mo par rapport à Q4_K_M mais avec une pénalité de perplexité plus importante. Sur une carte 6 Go, Q4_K_M laisse déjà 1,1 Go de marge — les 200 Mo supplémentaires de Q4_K_S ne sont pas nécessaires, et le compromis qualité n\'en vaut pas la peine.',
          },
          {
            q: 'Faut-il utiliser Q5_K_M au lieu de Q4_K_M avec 6 Go de VRAM ?',
            a: 'Uniquement si vous limitez strictement le contexte à 2k tokens. Q5_K_M améliore la perplexité d\'environ 1–1,5 point par rapport à Q4_K_M, mais utilise 5,7 Go sur un modèle 8B, ne laissant que 300 Mo pour le cache KV. Définissez `num_ctx 2048` dans votre Modelfile ou les paramètres Ollama pour éviter les OOM en cours de session.',
          },
          {
            q: 'Que se passe-t-il si mon modèle dépasse 6 Go de VRAM ?',
            a: 'Ollama décharge les couches excédentaires vers la RAM CPU (via le layer offloading de llama.cpp). Cela provoque une chute dramatique de la vitesse — de ~25 tok/s en GPU seul à ~3–5 tok/s avec un déchargement partiel sur CPU. Si vous voyez des avertissements "n_gpu_layers" ou des tokens-par-seconde inférieurs à 5, votre modèle est trop volumineux pour votre VRAM à la quantisation sélectionnée.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: '6 GB VRAM に最適な量子化レベルは？',
    seoTitle: '6 GB VRAM 最適量子化 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '7B モデルの Q4_K_M：4.9 GB、6 GB VRAM に収まり 1.1 GB のコンテキスト余裕あり。Q5_K_M はギリギリ。Q6_K 以上は 6 GB を超過。PromptQuorum による簡潔な回答。',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      ja: {
        question: '6 GB VRAM に最適な量子化レベルはどれですか？',
        answer: 'Q4_K_M が最適なポイント — 7B/8B モデルは Q4_K_M で 4.7〜4.9 GB を使用し、KV キャッシュに 1.1 GB 残ります。Q5_K_M は収まりますが、コンテキストを 2k トークンに制限する必要があります。Q6_K 以上は 6 GB を超えます。',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B (Q4_K_M)：4.7〜4.9 GB — 4k コンテキストで 6 GB に安全に収まる',
          'Q5_K_M は約 5.7 GB — 収まりますが OOM を避けるためコンテキストを 2k に制限',
          '14B モデル (Q4_K_M) は 9.3 GB 必要 — 6 GB では実用的な量子化なし',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '6 GB VRAM カード（RTX 3060 6 GB、RTX 3050 6 GB、GTX 1660 Ti 6 GB）では：Q4_K_M が 7B および 8B モデルの正しい量子化',
          'Q4_K_M は 1.1 GB を空けます — Ollama のデフォルトコンテキストサイズ 2048 での 4k トークン KV キャッシュに十分',
          'Q5_K_M はパープレキシティを約 1 ポイント改善しますが 5.7 GB を使用します；OOM エラーを避けるため `--ctx-size` を 2048 に下げてください',
          '14B モデル（Qwen 3 14B、Llama 3.3 13B）は Q4_K_M で 9.3 GB が必要 — どの量子化段階も 6 GB で実用的にはなりません',
        ],
      },
      body1: {
        title: '6 GB 上の 7B/8B モデルにおける量子化の VRAM 使用量',
        content: [
          '量子化レベルはモデルが使用する VRAM を直接制御します。6 GB GPU に収まる最大クラスである 7B および 8B パラメータモデルでは、実用的な選択肢は Q3_K_M から Q5_K_M の範囲です。Q2_K は収まりますが品質が実用水準以下に低下します；Q6_K 以上は 6 GB の上限を超えます。',
          'Q4_K_M が推奨デフォルトです：7B モデルはこの量子化で約 4.7 GB、8B モデルは 4.9 GB を使用します。これにより Ollama がコンテキストウィンドウに割り当てる KV キャッシュ用に 1.1 GB が残ります。デフォルトの 2048 トークンコンテキストでは十分です。コンテキストを 4096 トークンに増やすと 7B モデルで約 0.5 GB の追加 KV キャッシュが必要になりますが、ほとんどの 6 GB カードでも予算内です。',
          'Q5_K_M は次のステップです。Q5_K_M の 8B モデルは約 5.7 GB を使用し、わずか 300 MB しか残りません。非常に短いコンテキスト（512〜2048 トークン）には十分ですが、より長い会話やシステムプロンプトでは OOM エラーが発生します。`num_ctx` を 2048 以下に保つ場合のみ Q5_K_M を使用してください。',
        ],
        columns: ['量子化', '7B VRAM', '8B VRAM', '6 GB に収まるか', '最大コンテキスト（概算）'],
        rows: [
          { '量子化': 'Q2_K', '7B VRAM': '~2.8 GB', '8B VRAM': '~3.0 GB', '6 GB に収まるか': '✓（品質が低い）', '最大コンテキスト（概算）': '8k+' },
          { '量子化': 'Q3_K_M', '7B VRAM': '~3.5 GB', '8B VRAM': '~3.7 GB', '6 GB に収まるか': '✓（許容範囲）', '最大コンテキスト（概算）': '8k+' },
          { '量子化': 'Q4_K_M', '7B VRAM': '~4.7 GB', '8B VRAM': '~4.9 GB', '6 GB に収まるか': '✓ 推奨', '最大コンテキスト（概算）': '4k' },
          { '量子化': 'Q5_K_M', '7B VRAM': '~5.5 GB', '8B VRAM': '~5.7 GB', '6 GB に収まるか': '⚠ ギリギリ（2k コンテキストのみ）', '最大コンテキスト（概算）': '2k' },
          { '量子化': 'Q6_K', '7B VRAM': '~6.4 GB', '8B VRAM': '~6.6 GB', '6 GB に収まるか': '✗ OOM', '最大コンテキスト（概算）': '—' },
          { '量子化': 'Q8_0', '7B VRAM': '~7.5 GB', '8B VRAM': '~7.7 GB', '6 GB に収まるか': '✗ OOM', '最大コンテキスト（概算）': '—' },
        ],
      },
      body2: {
        title: '6 GB VRAM で Q4_K_M を使う最適モデル',
        content: [
          '6 GB カードで Q4_K_M を使う 7B/8B モデルの中で 3 つが際立ちます。Qwen 3 7B Instruct は最もバランスが取れたモデル — 強力なコーディング能力（HumanEval 約 60%）、多言語対応、128k コンテキストアーキテクチャ（ただし VRAM の制約により 4k で運用）。`ollama run qwen2.5:7b` で起動できます。',
          'Llama 3.3 8B は最速の選択肢です。Q4_K_M では RTX 3060 6 GB で毎秒約 25 トークンで動作し、一般的なチャットと指示への従い方を確実にこなします。MMLU スコアの 66.6% は Qwen 3 7B より低いですが、速度の優位性によりインタラクティブなセッションにはより適しています。',
          'Phi-4 Mini（3.8B）はダークホースです。Q8_0 で約 4.1 GB に収まり — 6 GB に余裕で収まります — サイズ比でのベンチマーク性能が優秀です。5 GB 未満の使用量で古い 7B モデルより優れた推論が必要な場合に使用してください。`ollama run phi4-mini` で起動できます。',
          '6 GB で 14B モデルは試みないでください。Qwen 3 14B は Q4_K_M で 9.3 GB が必要です。Q2_K で約 5.5 GB になりますが、パープレキシティのペナルティが深刻で、出力品質が著しく低下します。7B/8B の Q4_K_M か 3B/4B の Q8_0 に留めてください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '6 GB VRAM での量子化に関するよくある質問',
        faqs: [
          {
            q: '14B モデルを 6 GB VRAM で動かせますか？',
            a: '実用的な方法はありません。Qwen 3 14B は Q4_K_M で 9.3 GB が必要です。Q2_K に下げると約 5.5 GB になりますが、品質の劣化が深刻で出力が著しく不整合になります。6 GB VRAM に適切なモデルは Q4_K_M の 7B または 8B モデルです。',
          },
          {
            q: '6 GB VRAM には Q4_K_M と Q4_K_S どちらが良いですか？',
            a: 'Q4_K_M です。Q4_K_S バリアントは Q4_K_M より約 200 MB 節約できますが、より大きなパープレキシティのペナルティを伴います。6 GB カードでは Q4_K_M はすでに 1.1 GB の余裕があります — Q4_K_S による 200 MB の節約は必要なく、品質トレードオフは割に合いません。',
          },
          {
            q: '6 GB VRAM で Q4_K_M の代わりに Q5_K_M を使うべきですか？',
            a: 'コンテキストを厳密に 2k トークンに制限する場合のみです。Q5_K_M は Q4_K_M より約 1〜1.5 ポイントパープレキシティを改善しますが、8B モデルで 5.7 GB を使用し、KV キャッシュには 300 MB しか残りません。セッション途中の OOM を避けるため、Modelfile または Ollama パラメータで `num_ctx 2048` を設定してください。',
          },
          {
            q: 'モデルが 6 GB VRAM を超えるとどうなりますか？',
            a: 'Ollama は超過したレイヤーを CPU RAM にオフロードします（llama.cpp のレイヤーオフロードを使用）。これにより速度が劇的に低下します — GPU のみの約 25 tok/s から、部分的な CPU オフロードで 3〜5 tok/s に。"n_gpu_layers" の警告が表示される場合や 1 秒あたりのトークン数が 5 を下回る場合、選択した量子化でのモデルが VRAM に対して大きすぎます。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '6 GB 显存最佳量化等级是哪个？',
    seoTitle: '6 GB 显存最佳量化 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '7B 模型 Q4_K_M：4.9 GB，6 GB 显存可容纳并留 1.1 GB 用于上下文。Q5_K_M 勉强能放。Q6_K 及以上超出 6 GB。PromptQuorum 快速解答。',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      zh: {
        question: '6 GB 显存最佳量化等级是哪个？',
        answer: 'Q4_K_M 是最佳选择——7B/8B 模型在 Q4_K_M 下使用 4.7–4.9 GB，为 KV 缓存留出 1.1 GB。Q5_K_M 可以容纳但需将上下文限制在 2k tokens。Q6_K 及以上超出 6 GB。',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B (Q4_K_M)：4.7–4.9 GB——在 4k 上下文下安全适配 6 GB',
          'Q5_K_M 使用约 5.7 GB——可以放入但请将上下文限制在 2k tokens 以避免 OOM',
          '14B 模型 Q4_K_M 需要 9.3 GB——6 GB 无可用量化方案',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '适用于 6 GB 显存显卡（RTX 3060 6 GB、RTX 3050 6 GB、GTX 1660 Ti 6 GB）：Q4_K_M 是 7B 和 8B 模型的正确量化等级',
          'Q4_K_M 留出 1.1 GB 空闲——在 Ollama 默认上下文大小 2048 下足够 4k token 的 KV 缓存使用',
          'Q5_K_M 可将困惑度改善约 1 点，但使用 5.7 GB；将 `--ctx-size` 减少到 2048 以避免内存不足错误',
          '14B 模型（Qwen 3 14B、Llama 3.3 13B）在 Q4_K_M 下需要 9.3 GB——没有任何量化等级能使它们在 6 GB 上可用',
        ],
      },
      body1: {
        title: '6 GB 上 7B/8B 模型的量化 VRAM 占用',
        content: [
          '量化等级直接控制模型占用多少显存。对于 7B 和 8B 参数模型——适合 6 GB GPU 的最大类别——实际可选范围是 Q3_K_M 到 Q5_K_M。Q2_K 能放入但质量下降到不实用的程度；Q6_K 及以上超出 6 GB 上限。',
          'Q4_K_M 是推荐默认值：7B 模型在此量化下使用约 4.7 GB，8B 模型使用 4.9 GB。这为 Ollama 分配给上下文窗口的 KV 缓存留出 1.1 GB。在默认的 2048 token 上下文下已经足够。将上下文增加到 4096 token 在 7B 模型上大约需要额外 0.5 GB 的 KV 缓存——在大多数 6 GB 显卡上仍在预算内。',
          'Q5_K_M 是下一个选项。Q5_K_M 下的 8B 模型使用约 5.7 GB，仅剩 300 MB 空闲。这对于非常短的上下文（512–2048 tokens）足够，但在较长的对话或系统提示词中会导致 OOM 错误。仅在将 `num_ctx` 保持在 2048 或以下时才使用 Q5_K_M。',
        ],
        columns: ['量化等级', '7B 显存', '8B 显存', '适合 6 GB？', '最大上下文（约）'],
        rows: [
          { '量化等级': 'Q2_K', '7B 显存': '~2.8 GB', '8B 显存': '~3.0 GB', '适合 6 GB？': '✓（质量差）', '最大上下文（约）': '8k+' },
          { '量化等级': 'Q3_K_M', '7B 显存': '~3.5 GB', '8B 显存': '~3.7 GB', '适合 6 GB？': '✓（可接受）', '最大上下文（约）': '8k+' },
          { '量化等级': 'Q4_K_M', '7B 显存': '~4.7 GB', '8B 显存': '~4.9 GB', '适合 6 GB？': '✓ 推荐', '最大上下文（约）': '4k' },
          { '量化等级': 'Q5_K_M', '7B 显存': '~5.5 GB', '8B 显存': '~5.7 GB', '适合 6 GB？': '⚠ 勉强（仅 2k 上下文）', '最大上下文（约）': '2k' },
          { '量化等级': 'Q6_K', '7B 显存': '~6.4 GB', '8B 显存': '~6.6 GB', '适合 6 GB？': '✗ OOM', '最大上下文（约）': '—' },
          { '量化等级': 'Q8_0', '7B 显存': '~7.5 GB', '8B 显存': '~7.7 GB', '适合 6 GB？': '✗ OOM', '最大上下文（约）': '—' },
        ],
      },
      body2: {
        title: '在 6 GB 显存上以 Q4_K_M 运行的最佳模型',
        content: [
          '三款 7B/8B 模型在 6 GB 显卡上以 Q4_K_M 运行时表现突出。Qwen 3 7B Instruct 是最全面的选择——强大的编程能力（HumanEval 约 60%）、多语言支持和 128k 上下文架构（尽管由于显存限制将在 4k 下运行）。使用 `ollama run qwen2.5:7b` 运行。',
          'Llama 3.3 8B 是最快的选项。在 Q4_K_M 下，它在 RTX 3060 6 GB 上以每秒约 25 个 token 的速度运行，可靠地处理通用聊天和指令跟随。MMLU 得分 66.6% 低于 Qwen 3 7B，但速度优势使其成为交互式会话的更好选择。',
          'Phi-4 Mini（3.8B）是意外之选。在 Q8_0 下约占 4.1 GB——在 6 GB 内绰绰有余——其推理基准测试性能超出了其规模预期。在需要低于 5 GB 占用且推理能力优于旧版 7B 模型时使用。使用 `ollama run phi4-mini` 运行。',
          '不要在 6 GB 上尝试 14B 模型。Qwen 3 14B 在 Q4_K_M 下需要 9.3 GB。Q2_K 将其降至约 5.5 GB，但困惑度损失非常严重——模型产生明显退化的输出。坚持使用 Q4_K_M 的 7B/8B 或 Q8_0 的 3B/4B 模型。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 6 GB 显存量化的快速解答',
        faqs: [
          {
            q: '能在 6 GB 显存上运行 14B 模型吗？',
            a: '没有可行方案。Qwen 3 14B 在 Q4_K_M 下需要 9.3 GB。降至 Q2_K 可降至约 5.5 GB，但质量下降严重——输出变得明显不连贯。适合 6 GB 显存的正确模型是 Q4_K_M 下的 7B 或 8B 模型。',
          },
          {
            q: '6 GB 显存选 Q4_K_M 还是 Q4_K_S 更好？',
            a: 'Q4_K_M。Q4_K_S 变体相比 Q4_K_M 节省约 200 MB，但困惑度损失更大。在 6 GB 显卡上，Q4_K_M 已留出 1.1 GB 余量——Q4_K_S 节省的 200 MB 并不需要，质量权衡也不值得。',
          },
          {
            q: '6 GB 显存应该用 Q5_K_M 代替 Q4_K_M 吗？',
            a: '仅在严格将上下文限制在 2k tokens 时才考虑。Q5_K_M 相比 Q4_K_M 将困惑度改善约 1–1.5 点，但 8B 模型使用 5.7 GB，KV 缓存仅剩 300 MB。在 Modelfile 或 Ollama 参数中设置 `num_ctx 2048` 以避免会话途中出现 OOM。',
          },
          {
            q: '模型超出 6 GB 显存会怎样？',
            a: 'Ollama 会将溢出层卸载到 CPU 内存（使用 llama.cpp 层卸载）。这会导致速度急剧下降——从纯 GPU 的约 25 tok/s 降至部分 CPU 卸载后的 3–5 tok/s。如果看到 "n_gpu_layers" 警告或每秒 token 数低于 5，说明所选量化下的模型对您的显存来说太大了。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: '¿Mejor cuantización para 6 GB de VRAM: qué nivel cabe?',
    seoTitle: 'Mejor cuantización para 6 GB VRAM 2026 | PromptQuorum',
    metaDescription: 'Q4_K_M para modelos 7B: 4,9 GB, cabe en 6 GB de VRAM con 1,1 GB para contexto. Q5_K_M cabe justo; Q6_K y superiores superan los 6 GB. Respuesta rápida.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor nivel de cuantización para 6 GB de VRAM?',
        answer: 'Q4_K_M es el punto óptimo — los modelos 7B/8B en Q4_K_M usan 4,7–4,9 GB, dejando 1,1 GB para la caché KV. Q5_K_M cabe pero requiere limitar el contexto a 2k tokens. Evita Q6_K y superiores en tarjetas de 6 GB.',
        bullets: [
          'Llama 3.3 8B / Mistral Small / Qwen 3 7B en Q4_K_M: 4,7–4,9 GB — cabe en 6 GB con contexto 4k',
          'Q5_K_M usa ~5,7 GB — cabe, pero limita el contexto a 2k tokens para evitar OOM',
          'Los modelos 14B en Q4_K_M necesitan 9,3 GB — ninguna cuantización viable cabe en 6 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Para tarjetas de 6 GB de VRAM (RTX 3060 6 GB, RTX 3050 6 GB, GTX 1660 Ti 6 GB): Q4_K_M es la cuantización correcta para modelos 7B y 8B',
          'Q4_K_M deja 1,1 GB libre — suficiente para una caché KV de 4k tokens al tamaño de contexto predeterminado de Ollama de 2048',
          'Q5_K_M mejora la perplejidad en ~1 punto pero usa 5,7 GB; reduce `--ctx-size` a 2048 para evitar errores de memoria insuficiente',
          'Los modelos 14B (Qwen 3 14B, Llama 3.3 13B) requieren 9,3 GB en Q4_K_M — ningún nivel de cuantización los hace viables en 6 GB',
        ],
      },
      body1: {
        title: 'Uso de VRAM por nivel de cuantización para modelos 7B/8B en 6 GB',
        content: [
          'El nivel de cuantización controla directamente cuánta VRAM ocupa un modelo. Para modelos de 7.000 y 8.000 millones de parámetros — la clase más grande que cabe en una GPU de 6 GB — las opciones prácticas van de Q3_K_M a Q5_K_M. Q2_K cabe pero degrada la calidad por debajo de niveles útiles; Q6_K y superiores superan el techo de 6 GB.',
          'Q4_K_M es el valor predeterminado recomendado: un modelo 7B usa aproximadamente 4,7 GB y un modelo 8B usa 4,9 GB en esta cuantización. Esto deja 1,1 GB para la caché KV que Ollama asigna para la ventana de contexto. Con el contexto predeterminado de 2048 tokens, esto es suficiente. Aumentar el contexto a 4096 tokens requiere aproximadamente 0,5 GB adicionales de caché KV en un modelo 7B — aún dentro del presupuesto en la mayoría de tarjetas de 6 GB.',
          'Q5_K_M es el siguiente paso. Un modelo 8B en Q5_K_M usa aproximadamente 5,7 GB, dejando solo 300 MB libres. Esto es suficiente para contextos muy cortos (512–2048 tokens) pero causará errores OOM con conversaciones más largas o prompts de sistema. Usa Q5_K_M solo si mantienes `num_ctx` en 2048 o menos.',
        ],
        columns: ['Cuantización', 'VRAM 7B', 'VRAM 8B', '¿Cabe en 6 GB?', 'Contexto máx. (aprox.)'],
        rows: [
          { 'Cuantización': 'Q2_K', 'VRAM 7B': '~2,8 GB', 'VRAM 8B': '~3,0 GB', '¿Cabe en 6 GB?': '✓ (calidad baja)', 'Contexto máx. (aprox.)': '8k+' },
          { 'Cuantización': 'Q3_K_M', 'VRAM 7B': '~3,5 GB', 'VRAM 8B': '~3,7 GB', '¿Cabe en 6 GB?': '✓ (aceptable)', 'Contexto máx. (aprox.)': '8k+' },
          { 'Cuantización': 'Q4_K_M', 'VRAM 7B': '~4,7 GB', 'VRAM 8B': '~4,9 GB', '¿Cabe en 6 GB?': '✓ recomendado', 'Contexto máx. (aprox.)': '4k' },
          { 'Cuantización': 'Q5_K_M', 'VRAM 7B': '~5,5 GB', 'VRAM 8B': '~5,7 GB', '¿Cabe en 6 GB?': '⚠ justo (solo ctx 2k)', 'Contexto máx. (aprox.)': '2k' },
          { 'Cuantización': 'Q6_K', 'VRAM 7B': '~6,4 GB', 'VRAM 8B': '~6,6 GB', '¿Cabe en 6 GB?': '✗ OOM', 'Contexto máx. (aprox.)': '—' },
          { 'Cuantización': 'Q8_0', 'VRAM 7B': '~7,5 GB', 'VRAM 8B': '~7,7 GB', '¿Cabe en 6 GB?': '✗ OOM', 'Contexto máx. (aprox.)': '—' },
        ],
      },
      body2: {
        title: 'Mejores modelos para ejecutar en Q4_K_M con 6 GB de VRAM',
        content: [
          'Tres modelos 7B/8B destacan en Q4_K_M en una tarjeta de 6 GB. Qwen 3 7B Instruct es el mejor equilibrado — excelente en código (HumanEval ~60%), soporte multilingüe y arquitectura de contexto 128k (aunque operarás a 4k por la VRAM). Ejecútalo con `ollama run qwen2.5:7b`.',
          'Llama 3.3 8B es la opción más rápida. En Q4_K_M funciona a unos 25 tokens por segundo en una RTX 3060 6 GB y maneja chat general y seguimiento de instrucciones de forma fiable. Su puntuación MMLU de 66,6% es inferior a Qwen 3 7B, pero la ventaja en velocidad lo convierte en la mejor opción para sesiones interactivas.',
          'Phi-4 Mini (3,8B) es la sorpresa. En Q8_0 ocupa unos 4,1 GB — cómodamente dentro de 6 GB — y supera su clase de tamaño en benchmarks de razonamiento. Úsalo cuando necesites una huella inferior a 5 GB con mejor razonamiento que los modelos 7B más antiguos. Ejecútalo con `ollama run phi4-mini`.',
          'No intentes modelos 14B en 6 GB. Qwen 3 14B en Q4_K_M necesita 9,3 GB. Q2_K lo baja a unos 5,5 GB pero la penalidad de perplejidad es severa — el modelo produce salidas notablemente degradadas. Quédate con 7B/8B en Q4_K_M o 3B/4B en Q8_0.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre cuantización con 6 GB de VRAM',
        faqs: [
          {
            q: '¿Se puede ejecutar un modelo 14B en 6 GB de VRAM?',
            a: 'No existe ninguna solución viable. Qwen 3 14B en Q4_K_M necesita 9,3 GB. Bajarlo a Q2_K lo reduce a unos 5,5 GB, pero la degradación de calidad es severa — las salidas se vuelven notablemente incoherentes. El modelo correcto para 6 GB de VRAM es un modelo 7B u 8B en Q4_K_M.',
          },
          {
            q: '¿Q4_K_M o Q4_K_S: cuál es mejor para 6 GB de VRAM?',
            a: 'Q4_K_M. La variante Q4_K_S ahorra unos 200 MB respecto a Q4_K_M pero con una mayor penalidad de perplejidad. En una tarjeta de 6 GB, Q4_K_M ya deja 1,1 GB de margen — los 200 MB adicionales de Q4_K_S no son necesarios y el compromiso de calidad no vale la pena.',
          },
          {
            q: '¿Debo usar Q5_K_M en lugar de Q4_K_M con 6 GB de VRAM?',
            a: 'Solo si limitas estrictamente el contexto a 2k tokens. Q5_K_M mejora la perplejidad en unos 1–1,5 puntos respecto a Q4_K_M, pero usa 5,7 GB en un modelo 8B, dejando solo 300 MB para la caché KV. Establece `num_ctx 2048` en tu Modelfile o en los parámetros de Ollama para evitar OOM a mitad de sesión.',
          },
          {
            q: '¿Qué ocurre si mi modelo supera los 6 GB de VRAM?',
            a: 'Ollama descarga las capas sobrantes a la RAM de la CPU (usando el layer offloading de llama.cpp). Esto provoca una caída drástica de la velocidad — de ~25 tok/s solo en GPU a ~3–5 tok/s con offloading parcial a CPU. Si ves advertencias de "n_gpu_layers" o los tokens por segundo caen por debajo de 5, tu modelo es demasiado grande para tu VRAM con la cuantización seleccionada.',
          },
        ],
      },
    },
  },
}
