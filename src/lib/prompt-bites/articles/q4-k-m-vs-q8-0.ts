import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M vs Q8_0: Which Should You Pick?',
    seoTitle: 'Q4_K_M vs Q8_0: Which? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Use Q4_K_M with 8 GB VRAM or less. Use Q8_0 with 12+ GB. Q4_K_M delivers 95% of Q8_0 quality at half the size. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing quantization for local LLMs',
    parentArticle: '/local-llms/quantization-levels-comparison',
    siblingBites: ['what-is-q4-k-m-quantization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Q4_K_M vs Q8_0: which should you pick?',
        answer: 'Use Q4_K_M if you have 8 GB VRAM or less. Use Q8_0 if you have 12+ GB. Q4_K_M delivers 95% of Q8_0 quality at roughly half the file size.',
        bullets: [
          'Q4_K_M: ~5–6 GB for 7B models, ideal for 8 GB VRAM',
          'Q8_0: ~8–9 GB for 7B models, needs 12+ GB VRAM',
          'Quality difference is under 5% in real-world use',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Q4_K_M vs. Q8_0: Was sollten Sie wählen?',
        answer: 'Verwenden Sie Q4_K_M bei 8 GB VRAM oder weniger. Verwenden Sie Q8_0 bei 12+ GB. Q4_K_M liefert 95 % der Q8_0-Qualität bei ungefähr halbem Dateivolumen.',
        bullets: [
          'Q4_K_M: ~5–6 GB für 7B-Modelle, ideal für 8 GB VRAM',
          'Q8_0: ~8–9 GB für 7B-Modelle, benötigt 12+ GB VRAM',
          'Qualitätsunterschied unter 5 % im realen Einsatz',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Q4_K_M ou Q8_0 : lequel choisir ?',
        answer: 'Utilisez Q4_K_M avec 8 Go de VRAM ou moins. Utilisez Q8_0 avec 12+ Go. Q4_K_M offre 95 % de la qualité de Q8_0 à environ la moitié de la taille.',
        bullets: [
          'Q4_K_M : ~5–6 Go pour les modèles 7B, idéal pour 8 Go de VRAM',
          'Q8_0 : ~8–9 Go pour les modèles 7B, nécessite 12+ Go de VRAM',
          'Différence de qualité inférieure à 5 % en usage réel',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Q4_K_MとQ8_0：どちらを選ぶべきですか？',
        answer: 'VRAMが8 GB以下ならQ4_K_Mを使用してください。12 GB以上あるならQ8_0を使用してください。Q4_K_Mはおよそ半分のファイルサイズでQ8_0の95%の品質を提供します。',
        bullets: [
          'Q4_K_M：7Bモデルで~5–6 GB、8 GB VRAMに最適',
          'Q8_0：7Bモデルで~8–9 GB、12+ GB VRAM必要',
          '実際の使用では品質差は5%未満',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Q4_K_M和Q8_0：该选哪个？',
        answer: 'VRAM为8 GB或更少时使用Q4_K_M。VRAM为12 GB以上时使用Q8_0。Q4_K_M以约一半的文件大小提供Q8_0 95%的质量。',
        bullets: [
          'Q4_K_M：7B模型约5–6 GB，适合8 GB显存',
          'Q8_0：7B模型约8–9 GB，需12+ GB显存',
          '实际使用中质量差异不足5%',
        ],
        updatedDate: '2026-05',
      },
      es: {
        question: 'Q4_K_M vs Q8_0: ¿cuál elegir?',
        answer: 'Usa Q4_K_M con 8 GB de VRAM o menos. Usa Q8_0 con 12+ GB. Q4_K_M ofrece el 95% de la calidad de Q8_0 aproximadamente a la mitad del tamaño de archivo.',
        bullets: [
          'Q4_K_M: ~5–6 GB para modelos 7B, ideal para 8 GB de VRAM',
          'Q8_0: ~8–9 GB para modelos 7B, necesita 12+ GB de VRAM',
          'La diferencia de calidad es inferior al 5% en uso real',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB VRAM or less: use Q4_K_M — delivers 95% of Q8_0 quality at roughly half the file size',
          '12+ GB VRAM: Q8_0 is worth it for near-full-precision quality with no speed penalty',
          'For most users running Ollama daily, Q4_K_M is the right choice',
        ],
      },
      body1: {
        title: 'The Quick Verdict',
        content: [
          'As of May 2026, <strong>Q8_0 is ~99% of full-precision quality. Q4_K_M is ~92%.</strong> The 7-point gap is invisible in chat, coding, and summarization — three tasks that cover 95% of local LLM use. Q8_0 only pulls ahead on long-form factual recall, multi-step math, and code requiring exact syntax over 500+ lines.',
          'Q4_K_M is the right default because the extra quality from Q8_0 only shows up in edge cases: long-form generation with exact factual recall, or mathematical reasoning that requires higher precision. For everything else, Q4_K_M matches Q8_0 in practice.',
          'If you are already using Q4_K_M and your results feel wrong, the issue is almost never the quantization — it is the model size or prompt structure.',
        ],
      },
      body2: {
        title: 'Side-by-Side Comparison',
        content: [
          'The table below compares Q4_K_M and Q8_0 for a 7B model. Both formats work with Ollama, LM Studio, and llama.cpp without any special configuration.',
          'For context on what Q4_K_M means and how k-quant compression works, see the <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M explained guide</a>. For the full quantization reference, see <a href="/local-llms/quantization-levels-comparison" class="text-primary hover:underline">quantization levels compared</a>.',
          '<strong>Three tasks reveal Q4_K_M\'s quality gap: long-document recall (50+ pages), multi-step math with intermediate state, and code generation over 300+ lines.</strong> For these, Q8_0\'s extra precision prevents the small drift errors that compound across long outputs. For everything else — chat, code under 200 lines, Q&A, summarization — the gap is invisible. For a refresher before deciding, see <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">what Q4_K_M means</a>.',
        ],
        columns: ['Metric', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Metric': 'File size (7B model)', 'Q4_K_M': '~4.1 GB', 'Q8_0': '~7.7 GB' },
          { 'Metric': 'VRAM needed (7B)', 'Q4_K_M': '5–6 GB', 'Q8_0': '8–9 GB' },
          { 'Metric': 'Quality vs full precision', 'Q4_K_M': '~92%', 'Q8_0': '~99%' },
          { 'Metric': 'Best for', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Q4_K_M vs Q8_0',
        faqs: [
          {
            q: 'Is Q8_0 noticeably better than Q4_K_M?',
            a: 'Only in edge cases — complex multi-step math, exact quote recall from long documents, or very long outputs. For chat, coding, and summarization (which covers 95% of usage), most users cannot tell the difference.',
          },
          {
            q: 'Does Q8_0 run faster than Q4_K_M?',
            a: 'No. Q8_0 is larger and requires more memory bandwidth, making it slightly slower per token than Q4_K_M. Speed and quality both favor Q4_K_M for VRAM-constrained setups. See <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">what Q4_K_M means</a> for the underlying reason.',
          },
          {
            q: 'Can I switch between Q4_K_M and Q8_0 for different tasks?',
            a: 'Only by pulling and running different model tags. In Ollama: <code>ollama pull llama3:8b-q4_K_M</code> and <code>ollama pull llama3:8b-q8_0</code> are separate downloads. You switch by specifying the tag in <code>ollama run</code>.',
          },
          {
            q: 'What about Q4_K_S — is it worth using instead of Q4_K_M?',
            a: 'Q4_K_S saves about 300 MB versus Q4_K_M but delivers lower quality. Only use Q4_K_S if you are very tight on VRAM and cannot fit Q4_K_M. In almost all cases, Q4_K_M is the better choice.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M vs. Q8_0: Was sollten Sie wählen?',
    seoTitle: 'Q4_K_M vs. Q8_0: Wählen 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M bei 8 GB VRAM oder weniger, Q8_0 ab 12+ GB. Q4_K_M liefert 95 % der Q8_0-Qualität bei halbem Dateivolumen. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB VRAM oder weniger: Q4_K_M verwenden — liefert 95 % der Q8_0-Qualität bei ungefähr halbem Dateivolumen',
          '12+ GB VRAM: Q8_0 lohnt sich für nahezu vollpräzise Qualität ohne Geschwindigkeitsverlust',
          'Für die meisten Benutzer, die Ollama täglich nutzen, ist Q4_K_M die richtige Wahl',
        ],
      },
      body1: {
        title: 'Das schnelle Fazit',
        content: [
          'Stand Mai 2026: <strong>Q8_0 ist ~99 % der vollpräzisen Qualität. Q4_K_M ist ~92 %.</strong> Der 7-Punkte-Abstand ist unsichtbar bei Chat, Coding und Zusammenfassung — drei Aufgaben, die 95 % der lokalen LLM-Nutzung abdecken. Q8_0 zieht nur bei langem faktischem Abruf, mehrstufiger Mathematik und Code vor, der exakte Syntax über 500+ Zeilen erfordert.',
          'Q4_K_M ist der richtige Standard, weil die zusätzliche Qualität von Q8_0 nur in Randfällen auftaucht: lange Textgenerierung mit exaktem Faktenrückruf oder mathematisches Schlussfolgern, das höhere Präzision erfordert. Für alles andere entspricht Q4_K_M Q8_0 in der Praxis.',
          'Wenn Sie bereits Q4_K_M verwenden und Ihre Ergebnisse falsch erscheinen, liegt das Problem fast nie an der Quantisierung — es liegt an der Modellgröße oder Prompt-Struktur.',
        ],
      },
      body2: {
        title: 'Direkter Vergleich',
        content: [
          'Die folgende Tabelle vergleicht Q4_K_M und Q8_0 für ein 7B-Modell. Beide Formate funktionieren mit Ollama, LM Studio und llama.cpp ohne spezielle Konfiguration.',
          'Für Kontext zu Q4_K_M und K-Quant-Kompression, siehe den <a href="/de/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M Erklärungsleitfaden</a>. Für die vollständige Quantisierungsreferenz, siehe <a href="/de/local-llms/quantization-levels-comparison" class="text-primary hover:underline">Quantisierungsstufen verglichen</a>.',
          '<strong>Drei Aufgaben offenbaren Q4_K_Ms Qualitätslücke: Abruf langer Dokumente (50+ Seiten), mehrstufige Mathematik mit Zwischenzustand und Code-Generierung über 300+ Zeilen.</strong> Für diese verhindert Q8_0s höhere Präzision die kleinen Drift-Fehler, die sich über lange Ausgaben akkumulieren. Für alles andere — Chat, Code unter 200 Zeilen, Q&A, Zusammenfassung — ist die Lücke unsichtbar. Für eine Auffrischung, siehe <a href="/de/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">was Q4_K_M bedeutet</a>.',
        ],
        columns: ['Metrik', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Metrik': 'Dateigröße (7B-Modell)', 'Q4_K_M': '~4,1 GB', 'Q8_0': '~7,7 GB' },
          { 'Metrik': 'VRAM benötigt (7B)', 'Q4_K_M': '5–6 GB', 'Q8_0': '8–9 GB' },
          { 'Metrik': 'Qualität vs. vollpräzise', 'Q4_K_M': '~92 %', 'Q8_0': '~99 %' },
          { 'Metrik': 'Am besten für', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Q4_K_M vs. Q8_0',
        faqs: [
          {
            q: 'Ist Q8_0 merklich besser als Q4_K_M?',
            a: 'Nur in Randfällen — komplexe mehrstufige Mathematik, exakter Zitatrückruf aus langen Dokumenten oder sehr lange Ausgaben. Bei Chat, Coding und Zusammenfassung (95 % der Nutzung) können die meisten Benutzer den Unterschied nicht feststellen.',
          },
          {
            q: 'Ist Q8_0 schneller als Q4_K_M?',
            a: 'Nein. Q8_0 ist größer und erfordert mehr Speicherbandbreite, was es pro Token leicht langsamer macht als Q4_K_M. Geschwindigkeit und Qualität begünstigen beide Q4_K_M für VRAM-begrenzte Setups. Siehe <a href="/de/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">was Q4_K_M bedeutet</a> für den Hintergrund.',
          },
          {
            q: 'Kann ich für verschiedene Aufgaben zwischen Q4_K_M und Q8_0 wechseln?',
            a: 'Nur durch Herunterladen und Ausführen verschiedener Modell-Tags. In Ollama: <code>ollama pull llama3:8b-q4_K_M</code> und <code>ollama pull llama3:8b-q8_0</code> sind separate Downloads. Sie wechseln, indem Sie den Tag in <code>ollama run</code> angeben.',
          },
          {
            q: 'Was ist mit Q4_K_S — lohnt es sich statt Q4_K_M zu nutzen?',
            a: 'Q4_K_S spart etwa 300 MB gegenüber Q4_K_M, liefert aber niedrigere Qualität. Verwenden Sie Q4_K_S nur, wenn Ihr VRAM sehr knapp ist und Q4_K_M nicht passt. In fast allen Fällen ist Q4_K_M die bessere Wahl.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M ou Q8_0 : lequel choisir ?',
    seoTitle: 'Q4_K_M ou Q8_0 2026 : lequel ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Utilisez Q4_K_M avec 8 Go de VRAM ou moins. Utilisez Q8_0 avec 12+ Go. Q4_K_M offre 95 % de la qualité de Q8_0 à la moitié de la taille. Réponse rapide.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 Go de VRAM ou moins : utiliser Q4_K_M — offre 95 % de la qualité de Q8_0 à environ la moitié de la taille',
          '12+ Go de VRAM : Q8_0 vaut le coup pour une qualité quasi pleine précision sans perte de vitesse',
          'Pour la plupart des utilisateurs Ollama au quotidien, Q4_K_M est le bon choix',
        ],
      },
      body1: {
        title: 'Le verdict rapide',
        content: [
          'En mai 2026, <strong>Q8_0 est à ~99 % de la qualité pleine précision. Q4_K_M est à ~92 %.</strong> L\'écart de 7 points est invisible en chat, code et résumé — trois tâches qui couvrent 95 % de l\'usage local LLM. Q8_0 ne prend l\'avantage que sur le rappel factuel long, les mathématiques multi-étapes et le code nécessitant une syntaxe exacte sur 500+ lignes.',
          'Q4_K_M est le bon choix par défaut car la qualité supplémentaire de Q8_0 ne se manifeste que dans des cas limites : génération longue avec rappel factuel exact, ou raisonnement mathématique nécessitant une précision élevée. Pour tout le reste, Q4_K_M équivaut à Q8_0 en pratique.',
          'Si vous utilisez déjà Q4_K_M et que vos résultats semblent incorrects, le problème n\'est presque jamais la quantisation — c\'est la taille du modèle ou la structure du prompt.',
        ],
      },
      body2: {
        title: 'Comparaison côte à côte',
        content: [
          'Le tableau ci-dessous compare Q4_K_M et Q8_0 pour un modèle 7B. Les deux formats fonctionnent avec Ollama, LM Studio et llama.cpp sans configuration particulière.',
          'Pour comprendre Q4_K_M et la compression k-quant, voir le <a href="/fr/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">guide explicatif Q4_K_M</a>. Pour la référence complète, voir <a href="/fr/local-llms/quantization-levels-comparison" class="text-primary hover:underline">les niveaux de quantisation comparés</a>.',
          '<strong>Trois tâches révèlent l\'écart de Q4_K_M : rappel de longs documents (50+ pages), calcul multi-étapes avec état intermédiaire, et génération de code sur 300+ lignes.</strong> Pour celles-ci, la précision supplémentaire de Q8_0 prévient les petites erreurs de dérive qui s\'accumulent sur de longues sorties. Pour tout le reste — chat, code sous 200 lignes, Q&R, résumé — l\'écart est invisible. Pour un rappel avant de décider, voir <a href="/fr/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">ce que signifie Q4_K_M</a>.',
        ],
        columns: ['Métrique', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Métrique': 'Taille du fichier (7B)', 'Q4_K_M': '~4,1 Go', 'Q8_0': '~7,7 Go' },
          { 'Métrique': 'VRAM nécessaire (7B)', 'Q4_K_M': '5–6 Go', 'Q8_0': '8–9 Go' },
          { 'Métrique': 'Qualité vs pleine précision', 'Q4_K_M': '~92 %', 'Q8_0': '~99 %' },
          { 'Métrique': 'Idéal pour', 'Q4_K_M': '6–8 Go de VRAM', 'Q8_0': '12+ Go de VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Q4_K_M vs Q8_0',
        faqs: [
          {
            q: 'Q8_0 est-il sensiblement meilleur que Q4_K_M ?',
            a: 'Seulement dans des cas limites — calcul multi-étapes complexe, rappel de citations exactes dans de longs documents, ou très longues sorties. Pour le chat, le code et la synthèse (95 % des usages), la plupart des utilisateurs ne font pas la différence.',
          },
          {
            q: 'Q8_0 est-il plus rapide que Q4_K_M ?',
            a: 'Non. Q8_0 est plus lourd et nécessite plus de bande passante mémoire, ce qui le rend légèrement plus lent par token que Q4_K_M. Vitesse et qualité favorisent tous deux Q4_K_M pour les setups contraints en VRAM. Voir <a href="/fr/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">ce que signifie Q4_K_M</a> pour la raison sous-jacente.',
          },
          {
            q: 'Puis-je alterner entre Q4_K_M et Q8_0 selon les tâches ?',
            a: 'Seulement en téléchargeant et exécutant des tags de modèle différents. Dans Ollama : <code>ollama pull llama3:8b-q4_K_M</code> et <code>ollama pull llama3:8b-q8_0</code> sont des téléchargements séparés. Vous basculez en spécifiant le tag dans <code>ollama run</code>.',
          },
          {
            q: 'Et Q4_K_S — vaut-il mieux l\'utiliser à la place de Q4_K_M ?',
            a: 'Q4_K_S économise environ 300 Mo par rapport à Q4_K_M mais offre une qualité moindre. N\'utilisez Q4_K_S que si votre VRAM est très limité et que Q4_K_M ne rentre pas. Dans presque tous les cas, Q4_K_M est le meilleur choix.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M vs Q8_0：どちらを選ぶべきですか？',
    seoTitle: 'Q4_K_M vs Q8_0：2026年の選び方 | Prompt Bites | PromptQuorum',
    metaDescription: 'VRAMが8 GB以下ならQ4_K_Mを使用。12 GB以上ならQ8_0を使用。Q4_K_MはQ8_0の95%の品質を約半分のサイズで提供します。PromptQuorumの解説。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB VRAM以下：Q4_K_Mを使用 — ほぼ半分のファイルサイズでQ8_0の95%の品質を提供',
          '12+ GB VRAM：Q8_0はスピードペナルティなしでほぼ完全精度の品質に値します',
          'Ollamaを毎日使用するほとんどのユーザーにとって、Q4_K_Mが正しい選択です',
        ],
      },
      body1: {
        title: '簡潔な結論',
        content: [
          '2026年5月現在、<strong>Q8_0は完全精度品質の約99%です。Q4_K_Mは約92%です。</strong>この7ポイントの差はチャット、コーディング、要約では見えません — ローカルLLM使用の95%をカバーする3つのタスクです。Q8_0が優位に立つのは、長文の事実想起、複数ステップの数学、500行以上の正確な構文が必要なコードのみです。',
          'Q4_K_Mが正しいデフォルトである理由は、Q8_0の追加品質が現れるのがエッジケースのみだからです：正確な事実想起を必要とする長文生成、または高精度を必要とする数学的推論。他のすべてに対して、Q4_K_Mは実際にはQ8_0と同等です。',
          'すでにQ4_K_Mを使用していて結果がおかしく感じる場合、問題はほとんどの場合量化ではありません — モデルのサイズやプロンプト構造にあります。',
        ],
      },
      body2: {
        title: '並列比較',
        content: [
          '以下の表は7BモデルのQ4_K_MとQ8_0を比較しています。両フォーマットは特別な設定なしにOllama、LM Studio、llama.cppで動作します。',
          'Q4_K_Mとk-quant圧縮について理解するには、<a href="/ja/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M解説ガイド</a>を参照してください。完全な量化リファレンスは<a href="/ja/local-llms/quantization-levels-comparison" class="text-primary hover:underline">量化レベル比較</a>を参照してください。',
          '<strong>Q4_K_Mの品質ギャップを明らかにする3つのタスク：長文書の想起（50ページ以上）、中間状態を伴う複数ステップの数学、300行以上のコード生成です。</strong>これらにおいて、Q8_0の追加精度は長い出力で積み重なる小さなドリフトエラーを防ぎます。他のすべて — チャット、200行未満のコード、Q&A、要約 — ではギャップは見えません。決定前の復習は<a href="/ja/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_Mの意味</a>を参照してください。',
        ],
        columns: ['指標', 'Q4_K_M', 'Q8_0'],
        rows: [
          { '指標': 'ファイルサイズ（7Bモデル）', 'Q4_K_M': '~4.1 GB', 'Q8_0': '~7.7 GB' },
          { '指標': 'VRAM必要量（7B）', 'Q4_K_M': '5–6 GB', 'Q8_0': '8–9 GB' },
          { '指標': '完全精度に対する品質', 'Q4_K_M': '~92%', 'Q8_0': '~99%' },
          { '指標': '最適な対象', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Q4_K_M vs Q8_0に関するよくある質問',
        faqs: [
          {
            q: 'Q8_0はQ4_K_Mより明らかに優れていますか？',
            a: 'エッジケースのみです — 複雑な複数ステップの数学、長文書からの正確な引用想起、または非常に長い出力。チャット、コーディング、要約（使用の95%をカバー）では、ほとんどのユーザーは違いがわかりません。',
          },
          {
            q: 'Q8_0はQ4_K_Mより速いですか？',
            a: 'いいえ。Q8_0はより大きく、より多くのメモリ帯域幅を必要とするため、トークンあたりわずかにQ4_K_Mより遅いです。速度と品質の両方がVRAM制限のセットアップではQ4_K_Mを支持します。基本的な理由については<a href="/ja/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_Mの意味</a>を参照してください。',
          },
          {
            q: '異なるタスクでQ4_K_MとQ8_0を切り替えられますか？',
            a: '異なるモデルタグをプルして実行することでのみ可能です。Ollamaでは：<code>ollama pull llama3:8b-q4_K_M</code>と<code>ollama pull llama3:8b-q8_0</code>は別々のダウンロードです。<code>ollama run</code>でタグを指定して切り替えます。',
          },
          {
            q: 'Q4_K_Sはどうですか — Q4_K_Mの代わりに使う価値はありますか？',
            a: 'Q4_K_SはQ4_K_Mと比べて約300 MB節約できますが、品質が低くなります。VRAMが非常に制限されていてQ4_K_Mが収まらない場合にのみQ4_K_Sを使用してください。ほぼすべてのケースでQ4_K_Mの方が良い選択です。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M与Q8_0：该如何选择？',
    seoTitle: 'Q4_K_M与Q8_0：2026年选择指南 | Prompt Bites | PromptQuorum',
    metaDescription: '显存8 GB或更少时使用Q4_K_M。12 GB以上时使用Q8_0。Q4_K_M以约一半的文件大小提供Q8_0 95%的质量。PromptQuorum快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB显存或更少：使用Q4_K_M——以约一半的文件大小提供Q8_0 95%的质量',
          '12+ GB显存：Q8_0可提供接近完整精度的质量且无速度损失',
          '对于大多数日常使用Ollama的用户，Q4_K_M是正确的选择',
        ],
      },
      body1: {
        title: '快速结论',
        content: [
          '截至2026年5月，<strong>Q8_0约为完整精度质量的99%。Q4_K_M约为92%。</strong>这7个百分点的差距在聊天、编程和摘要中是不可见的——这三个任务涵盖了95%的本地LLM使用场景。Q8_0只在长篇事实回忆、多步数学推理以及需要500行以上精确语法的代码生成上表现更好。',
          'Q4_K_M是正确的默认选择，因为Q8_0的额外质量仅在边缘情况下出现：需要精确事实回忆的长篇生成，或需要更高精度的数学推理。对于其他所有情况，Q4_K_M在实践中与Q8_0持平。',
          '如果您已经在使用Q4_K_M但结果感觉不对，问题几乎从不在于量化——而在于模型大小或提示词结构。',
        ],
      },
      body2: {
        title: '并排对比',
        content: [
          '下表比较了7B模型的Q4_K_M和Q8_0。两种格式都可与Ollama、LM Studio和llama.cpp配合使用，无需特殊配置。',
          '关于Q4_K_M的含义和k-quant压缩原理，请参阅<a href="/zh/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M详解指南</a>。完整量化参考请查看<a href="/zh/local-llms/quantization-levels-comparison" class="text-primary hover:underline">量化级别比较</a>。',
          '<strong>三个任务揭示了Q4_K_M的质量差距：长文档回忆（50页以上）、带中间状态的多步数学推理，以及超过300行的代码生成。</strong>对于这些任务，Q8_0的额外精度可防止在长输出中累积的小误差漂移。对于其他所有情况——聊天、200行以内的代码、问答、摘要——差距是不可见的。决策前的回顾请参阅<a href="/zh/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M的含义</a>。',
        ],
        columns: ['指标', 'Q4_K_M', 'Q8_0'],
        rows: [
          { '指标': '文件大小（7B模型）', 'Q4_K_M': '~4.1 GB', 'Q8_0': '~7.7 GB' },
          { '指标': '所需显存（7B）', 'Q4_K_M': '5–6 GB', 'Q8_0': '8–9 GB' },
          { '指标': '对比完整精度的质量', 'Q4_K_M': '~92%', 'Q8_0': '~99%' },
          { '指标': '最适合', 'Q4_K_M': '6–8 GB显存', 'Q8_0': '12+ GB显存' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于Q4_K_M与Q8_0的常见问题',
        faqs: [
          {
            q: 'Q8_0明显优于Q4_K_M吗？',
            a: '仅在边缘情况下——复杂的多步数学、从长文档精确引用，或非常长的输出。对于聊天、编程和摘要（涵盖95%的使用场景），大多数用户无法分辨差异。',
          },
          {
            q: 'Q8_0比Q4_K_M快吗？',
            a: '不。Q8_0更大，需要更多内存带宽，使其每token略慢于Q4_K_M。对于显存受限的配置，速度和质量都有利于Q4_K_M。底层原因请参阅<a href="/zh/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M的含义</a>。',
          },
          {
            q: '我能在不同任务间切换Q4_K_M和Q8_0吗？',
            a: '只能通过拉取和运行不同的模型标签来实现。在Ollama中：<code>ollama pull llama3:8b-q4_K_M</code>和<code>ollama pull llama3:8b-q8_0</code>是独立的下载。通过在<code>ollama run</code>中指定标签来切换。',
          },
          {
            q: 'Q4_K_S怎么样——值得用它代替Q4_K_M吗？',
            a: 'Q4_K_S比Q4_K_M节省约300 MB，但质量更低。仅在显存非常紧张且Q4_K_M放不下时才使用Q4_K_S。几乎所有情况下，Q4_K_M是更好的选择。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M vs Q8_0: qual escolher?',
    seoTitle: 'Q4_K_M vs Q8_0: qual? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Use Q4_K_M com 8 GB de VRAM ou menos. Use Q8_0 com 12+ GB. Q4_K_M oferece 95% da qualidade do Q8_0 à metade do tamanho. Resposta rápida do PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Q4_K_M vs Q8_0: qual escolher?',
        answer: 'Use Q4_K_M com 8 GB de VRAM ou menos. Use Q8_0 com 12+ GB. Q4_K_M oferece 95% da qualidade do Q8_0 aproximadamente à metade do tamanho de arquivo.',
        bullets: [
          'Q4_K_M: ~5–6 GB para modelos 7B, ideal para 8 GB de VRAM',
          'Q8_0: ~8–9 GB para modelos 7B, precisa de 12+ GB de VRAM',
          'A diferença de qualidade é inferior a 5% no uso real',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB de VRAM ou menos: use Q4_K_M — oferece 95% da qualidade do Q8_0 aproximadamente à metade do tamanho de arquivo',
          '12+ GB de VRAM: Q8_0 vale a pena para qualidade quase de precisão total sem penalidade de velocidade',
          'Para a maioria dos usuários que usam Ollama diariamente, Q4_K_M é a escolha certa',
        ],
      },
      body1: {
        title: 'O veredicto rápido',
        content: [
          'Em maio de 2026, <strong>Q8_0 representa ~99% da qualidade de precisão total. Q4_K_M representa ~92%.</strong> A diferença de 7 pontos é invisível em chat, codificação e resumo — três tarefas que cobrem 95% do uso de LLM local. Q8_0 só se sobressai em recuperação factual de documentos longos, matemática de múltiplas etapas e código que requer sintaxe exata em 500+ linhas.',
          'Q4_K_M é a opção padrão correta porque a qualidade extra do Q8_0 só aparece em casos extremos: geração longa com recuperação factual exata ou raciocínio matemático que requer maior precisão. Para todo o resto, Q4_K_M equivale ao Q8_0 na prática.',
          'Se você já está usando Q4_K_M e seus resultados parecem errados, o problema quase nunca é a quantização — é o tamanho do modelo ou a estrutura do prompt.',
        ],
      },
      body2: {
        title: 'Comparação lado a lado',
        content: [
          'A tabela abaixo compara Q4_K_M e Q8_0 para um modelo 7B. Ambos os formatos funcionam com Ollama, LM Studio e llama.cpp sem nenhuma configuração especial.',
          'Para contexto sobre o que Q4_K_M significa e como funciona a compressão k-quant, veja o <a href="/pt/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">guia explicativo do Q4_K_M</a>. Para a referência completa de quantização, veja <a href="/pt/local-llms/quantization-levels-comparison" class="text-primary hover:underline">níveis de quantização comparados</a>.',
          '<strong>Três tarefas revelam a lacuna de qualidade do Q4_K_M: recuperação de documentos longos (50+ páginas), matemática de múltiplas etapas com estado intermediário e geração de código com 300+ linhas.</strong> Para essas tarefas, a precisão extra do Q8_0 evita os pequenos erros de deriva que se acumulam em saídas longas. Para todo o resto — chat, código com menos de 200 linhas, perguntas e respostas, resumo — a lacuna é invisível. Para uma revisão antes de decidir, veja <a href="/pt/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">o que Q4_K_M significa</a>.',
        ],
        columns: ['Métrica', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Métrica': 'Tamanho do arquivo (modelo 7B)', 'Q4_K_M': '~4,1 GB', 'Q8_0': '~7,7 GB' },
          { 'Métrica': 'VRAM necessária (7B)', 'Q4_K_M': '5–6 GB', 'Q8_0': '8–9 GB' },
          { 'Métrica': 'Qualidade vs precisão total', 'Q4_K_M': '~92%', 'Q8_0': '~99%' },
          { 'Métrica': 'Melhor para', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre Q4_K_M vs Q8_0',
        faqs: [
          {
            q: 'Q8_0 é notavelmente melhor que Q4_K_M?',
            a: 'Apenas em casos extremos — matemática complexa de múltiplas etapas, recuperação de citações exatas em documentos longos ou saídas muito longas. Para chat, codificação e resumo (que cobrem 95% do uso), a maioria dos usuários não percebe a diferença.',
          },
          {
            q: 'Q8_0 é mais rápido que Q4_K_M?',
            a: 'Não. Q8_0 é maior e requer mais largura de banda de memória, tornando-o levemente mais lento por token que Q4_K_M. Velocidade e qualidade favorecem Q4_K_M para configurações com VRAM limitada. Veja <a href="/pt/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">o que Q4_K_M significa</a> para o motivo subjacente.',
          },
          {
            q: 'Posso alternar entre Q4_K_M e Q8_0 para diferentes tarefas?',
            a: 'Apenas baixando e executando diferentes tags de modelo. No Ollama: <code>ollama pull llama3:8b-q4_K_M</code> e <code>ollama pull llama3:8b-q8_0</code> são downloads separados. Você alterna especificando a tag em <code>ollama run</code>.',
          },
          {
            q: 'E Q4_K_S — vale a pena usar em vez de Q4_K_M?',
            a: 'Q4_K_S economiza cerca de 300 MB em relação ao Q4_K_M, mas oferece qualidade inferior. Use Q4_K_S apenas se sua VRAM for muito limitada e Q4_K_M não couber. Em quase todos os casos, Q4_K_M é a melhor escolha.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M vs Q8_0: ¿cuál elegir?',
    seoTitle: 'Q4_K_M vs Q8_0: ¿cuál? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Usa Q4_K_M con 8 GB de VRAM o menos. Usa Q8_0 con 12+ GB. Q4_K_M ofrece el 95% de la calidad de Q8_0 a la mitad del tamaño. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: 'Q4_K_M vs Q8_0: ¿cuál elegir?',
        answer: 'Usa Q4_K_M con 8 GB de VRAM o menos. Usa Q8_0 con 12+ GB. Q4_K_M ofrece el 95% de la calidad de Q8_0 aproximadamente a la mitad del tamaño de archivo.',
        bullets: [
          'Q4_K_M: ~5–6 GB para modelos 7B, ideal para 8 GB de VRAM',
          'Q8_0: ~8–9 GB para modelos 7B, necesita 12+ GB de VRAM',
          'La diferencia de calidad es inferior al 5% en uso real',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB de VRAM o menos: usa Q4_K_M — ofrece el 95% de la calidad de Q8_0 aproximadamente a la mitad del tamaño de archivo',
          '12+ GB de VRAM: Q8_0 vale la pena para calidad casi de plena precisión sin penalización de velocidad',
          'Para la mayoría de usuarios que usan Ollama a diario, Q4_K_M es la elección correcta',
        ],
      },
      body1: {
        title: 'El veredicto rápido',
        content: [
          'A mayo de 2026, <strong>Q8_0 es ~99% de la calidad de plena precisión. Q4_K_M es ~92%.</strong> La diferencia de 7 puntos es invisible en chat, programación y resúmenes — tres tareas que cubren el 95% del uso de LLMs locales. Q8_0 solo aventaja en recuperación factual de documentos largos, matemáticas de múltiples pasos y código que requiere sintaxis exacta en más de 500 líneas.',
          'Q4_K_M es la opción predeterminada correcta porque la calidad extra de Q8_0 solo aparece en casos extremos: generación larga con recuperación factual exacta, o razonamiento matemático que requiere mayor precisión. Para todo lo demás, Q4_K_M iguala a Q8_0 en la práctica.',
          'Si ya usas Q4_K_M y los resultados parecen incorrectos, el problema casi nunca es la cuantización — es el tamaño del modelo o la estructura del prompt.',
        ],
      },
      body2: {
        title: 'Comparación lado a lado',
        content: [
          'La tabla siguiente compara Q4_K_M y Q8_0 para un modelo 7B. Ambos formatos funcionan con Ollama, LM Studio y llama.cpp sin configuración especial.',
          'Para entender Q4_K_M y cómo funciona la compresión k-quant, consulta la <a href="/es/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">guía explicativa de Q4_K_M</a>. Para la referencia completa de cuantización, consulta <a href="/es/local-llms/quantization-levels-comparison" class="text-primary hover:underline">niveles de cuantización comparados</a>.',
          '<strong>Tres tareas revelan la brecha de calidad de Q4_K_M: recuperación de documentos largos (50+ páginas), matemáticas de múltiples pasos con estado intermedio, y generación de código en más de 300 líneas.</strong> Para estos casos, la precisión extra de Q8_0 previene los pequeños errores de deriva que se acumulan en salidas largas. Para todo lo demás — chat, código de menos de 200 líneas, preguntas y respuestas, resúmenes — la brecha es invisible. Para un repaso antes de decidir, consulta <a href="/es/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">qué significa Q4_K_M</a>.',
        ],
        columns: ['Métrica', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Métrica': 'Tamaño de archivo (modelo 7B)', 'Q4_K_M': '~4,1 GB', 'Q8_0': '~7,7 GB' },
          { 'Métrica': 'VRAM necesaria (7B)', 'Q4_K_M': '5–6 GB', 'Q8_0': '8–9 GB' },
          { 'Métrica': 'Calidad vs plena precisión', 'Q4_K_M': '~92%', 'Q8_0': '~99%' },
          { 'Métrica': 'Mejor para', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre Q4_K_M vs Q8_0',
        faqs: [
          {
            q: '¿Es Q8_0 notablemente mejor que Q4_K_M?',
            a: 'Solo en casos extremos — matemáticas complejas de múltiples pasos, recuperación de citas exactas en documentos largos, o salidas muy largas. Para chat, programación y resúmenes (que cubren el 95% del uso), la mayoría de usuarios no nota la diferencia.',
          },
          {
            q: '¿Es Q8_0 más rápido que Q4_K_M?',
            a: 'No. Q8_0 es más grande y requiere más ancho de banda de memoria, lo que lo hace ligeramente más lento por token que Q4_K_M. Tanto la velocidad como la calidad favorecen a Q4_K_M en configuraciones con VRAM limitada. Consulta <a href="/es/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">qué significa Q4_K_M</a> para la razón subyacente.',
          },
          {
            q: '¿Puedo alternar entre Q4_K_M y Q8_0 para diferentes tareas?',
            a: 'Solo descargando y ejecutando diferentes etiquetas de modelo. En Ollama: <code>ollama pull llama3:8b-q4_K_M</code> y <code>ollama pull llama3:8b-q8_0</code> son descargas separadas. Cambias especificando la etiqueta en <code>ollama run</code>.',
          },
          {
            q: '¿Y Q4_K_S — vale la pena usarlo en lugar de Q4_K_M?',
            a: 'Q4_K_S ahorra unos 300 MB respecto a Q4_K_M pero ofrece menor calidad. Usa Q4_K_S solo si tu VRAM es muy limitada y Q4_K_M no cabe. En casi todos los casos, Q4_K_M es la mejor elección.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M مقابل Q8_0: أيهما تختار؟',
    seoTitle: 'Q4_K_M مقابل Q8_0: أيهما يناسب VRAM لديك؟',
    metaDescription: 'نموذج 7B بـ Q4_K_M يبلغ 4.1 GB (~92% جودة)؛ Q8_0 يبلغ 7.7 GB (~99%). استخدم Q4_K_M مع 8 GB VRAM أو أقل، وQ8_0 مع 12 GB VRAM فما فوق.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'Q4_K_M مقابل Q8_0: أيهما تختار؟',
        answer: 'استخدم Q4_K_M مع 8 GB من VRAM أو أقل. استخدم Q8_0 مع 12+ GB. يوفر Q4_K_M حوالي 95% من جودة Q8_0 بنصف حجم الملف تقريبًا.',
        bullets: [
          'Q4_K_M: ~5–6 GB لنماذج 7B، مثالي لـ 8 GB VRAM',
          'Q8_0: ~8–9 GB لنماذج 7B، يحتاج 12+ GB VRAM',
          'فارق الجودة أقل من 5% في الاستخدام الفعلي',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8 GB VRAM أو أقل: استخدم Q4_K_M — يوفر 95% من جودة Q8_0 بنصف حجم الملف تقريبًا',
          '12+ GB VRAM: يستحق Q8_0 العناء للحصول على جودة شبه كاملة بدون عقوبة في السرعة',
          'لمعظم المستخدمين الذين يستخدمون Ollama يوميًا، Q4_K_M هو الاختيار الصحيح',
        ],
      },
      body1: {
        title: 'الحكم السريع',
        content: [
          'اعتبارًا من مايو 2026، <strong>يمثل Q8_0 حوالي 99% من جودة الدقة الكاملة، ويمثل Q4_K_M حوالي 92%.</strong> الفارق البالغ 7 نقاط غير مرئي في الدردشة والبرمجة والتلخيص — وهي المهام الثلاث التي تغطي 95% من استخدام نماذج اللغة المحلية. لا يتفوق Q8_0 إلا في استرجاع الحقائق من المستندات الطويلة والرياضيات متعددة الخطوات وتوليد الكود الذي يتطلب بناءً صحيحًا في 500+ سطر.',
          'يُعدّ Q4_K_M الخيار الافتراضي الصحيح لأن الجودة الإضافية لـ Q8_0 تظهر فقط في الحالات القصوى: التوليد الطويل مع استرجاع دقيق للحقائق، أو الاستدلال الرياضي الذي يتطلب دقة أعلى. لكل شيء آخر، يعادل Q4_K_M أداء Q8_0 عمليًا.',
          'إذا كنت تستخدم Q4_K_M بالفعل وبدت النتائج خاطئة، فالمشكلة في الغالب ليست في الكميّة — بل في حجم النموذج أو بنية الموجّه.',
        ],
      },
      body2: {
        title: 'مقارنة جانبًا إلى جانب',
        content: [
          'يقارن الجدول التالي Q4_K_M و Q8_0 لنموذج 7B. كلا الصيغتين تعملان مع Ollama و LM Studio و llama.cpp دون أي إعداد خاص.',
          'لفهم ماهية Q4_K_M وكيف تعمل ضغط k-quant، راجع <a href="/ar/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">دليل شرح Q4_K_M</a>. للمرجع الكامل حول الكميّة، راجع <a href="/ar/local-llms/quantization-levels-comparison" class="text-primary hover:underline">مستويات الكميّة مقارنةً</a>.',
          '<strong>ثلاث مهام تكشف فجوة الجودة في Q4_K_M: استرجاع المستندات الطويلة (50+ صفحة)، والرياضيات متعددة الخطوات مع حالات وسيطة، وتوليد الكود الذي يتجاوز 300 سطر.</strong> في هذه الحالات، تمنع الدقة الإضافية في Q8_0 أخطاء الانجراف الصغيرة التي تتراكم في المخرجات الطويلة. لكل شيء آخر — الدردشة والكود الأقل من 200 سطر والأسئلة والأجوبة والتلخيص — الفجوة غير مرئية. للمراجعة قبل اتخاذ القرار، راجع <a href="/ar/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">ماذا يعني Q4_K_M</a>.',
        ],
        columns: ['المقياس', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'المقياس': 'حجم الملف (نموذج 7B)', 'Q4_K_M': '~4.1 GB', 'Q8_0': '~7.7 GB' },
          { 'المقياس': 'VRAM المطلوبة (7B)', 'Q4_K_M': '5–6 GB', 'Q8_0': '8–9 GB' },
          { 'المقياس': 'الجودة مقارنةً بالدقة الكاملة', 'Q4_K_M': '~92%', 'Q8_0': '~99%' },
          { 'المقياس': 'الأنسب لـ', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول Q4_K_M مقابل Q8_0',
        faqs: [
          {
            q: 'هل يتفوق Q8_0 بشكل ملحوظ على Q4_K_M؟',
            a: 'فقط في الحالات القصوى — الرياضيات المعقدة متعددة الخطوات، واسترجاع الاقتباسات الدقيقة من المستندات الطويلة، أو المخرجات الطويلة جدًا. في الدردشة والبرمجة والتلخيص (التي تغطي 95% من الاستخدام)، لا يلاحظ معظم المستخدمين الفرق.',
          },
          {
            q: 'هل Q8_0 أسرع من Q4_K_M؟',
            a: 'لا. Q8_0 أكبر حجمًا ويتطلب نطاق ترددي أعلى للذاكرة، مما يجعله أبطأ قليلًا لكل رمز مقارنةً بـ Q4_K_M. السرعة والجودة كلاهما يصبّان في صالح Q4_K_M في الإعدادات ذات VRAM المحدودة. راجع <a href="/ar/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">ماذا يعني Q4_K_M</a> للسبب الجوهري.',
          },
          {
            q: 'هل يمكنني التبديل بين Q4_K_M و Q8_0 لمهام مختلفة؟',
            a: 'بالطبع، بتنزيل وتشغيل وسوم نماذج مختلفة. في Ollama: <code>ollama pull llama3:8b-q4_K_M</code> و <code>ollama pull llama3:8b-q8_0</code> تنزيلان منفصلان. تتبادل بينهما بتحديد الوسم في <code>ollama run</code>.',
          },
          {
            q: 'وماذا عن Q4_K_S — هل يستحق استخدامه بدلًا من Q4_K_M؟',
            a: 'يوفر Q4_K_S حوالي 300 MB مقارنةً بـ Q4_K_M لكنه يقدم جودة أدنى. استخدم Q4_K_S فقط إذا كانت VRAM لديك محدودة جدًا ولا يتسع Q4_K_M. في الغالب الأعم، Q4_K_M هو الاختيار الأفضل.',
          },
        ],
      },
    },
  },
}
