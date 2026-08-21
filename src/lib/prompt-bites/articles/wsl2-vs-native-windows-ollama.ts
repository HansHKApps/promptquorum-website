import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware Extension',
    heroImage: '/images/wsl2-vs-native-windows-ollama-overview-hero-en.webp',
    title: 'Ollama on WSL2 vs Native Windows: Which Should You Pick?',
    seoTitle: 'WSL2 vs Native Windows for Ollama | Prompt Bites',
    metaDescription:
      'Native Windows Ollama is simpler to set up and has direct GPU access; WSL2 mainly helps when you need a Linux-only tool alongside Ollama.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Windows users deciding whether to run Ollama natively or inside WSL2',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama', 'best-windows-laptop-local-llm-under-1500'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Native Windows Ollama is simpler to set up and has direct GPU access with no passthrough layer, so it is the right default for most users.</strong> WSL2 is worth the extra setup mainly when you need a Linux-only tool alongside Ollama in the same environment.',
    toc: [
      { label: 'Best Pick: Native Windows for Most Users', anchor: '#best-pick' },
      { label: 'How to Set Up Each Option', anchor: '#setup-steps' },
      { label: 'When to Use Each', anchor: '#when-to-use-each' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Should I run Ollama natively on Windows or inside WSL2?',
        answer:
          'Run Ollama natively on Windows unless you specifically need a Linux-only tool alongside it. Native Windows Ollama has direct GPU access with no passthrough layer, while WSL2 adds a GPU passthrough step and generally is not necessary for Ollama alone.',
        bullets: [
          'Native Windows Ollama has direct GPU access — no passthrough configuration needed.',
          'WSL2 adds a GPU passthrough layer, useful mainly for Linux-only tooling alongside Ollama.',
          'Most users get simpler setup and equal performance from the native Windows build.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Native Windows Ollama has direct GPU access with no passthrough layer and is simpler to set up',
          'WSL2 is worth it mainly if you need a Linux-only tool alongside Ollama',
          'GPU passthrough in WSL2 introduces some overhead versus native Windows, though it is small for most GPU-bound workloads',
          'Model files are stored separately in each environment by default, so switching between native Windows and WSL2 means pulling models again on the other side',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Native Windows Ollama is simpler to set up and has direct GPU access; WSL2 mainly helps when a Linux-only tool needs to run alongside it.' },
          { type: 'plain-terms', text: 'In plain terms: most Windows users should just run the native Ollama installer — WSL2 adds a layer of complexity that only pays off for specific Linux-tool needs.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Native Windows for Most Users',
        content: [
          '<strong>Native Windows Ollama is the right default because it installs directly, accesses the GPU without any passthrough configuration, and requires no separate Linux environment to maintain.</strong> Use native Windows if: you only need Ollama itself, you want the simplest possible setup, or you are not already comfortable managing a WSL2 environment.',
          'Use WSL2 if: your workflow already depends on a Linux-only tool or driver stack that needs to run alongside Ollama in the same environment, or you are building a pipeline that assumes a Linux shell. If unsure, start with native Windows — it is faster to set up, and you can add WSL2 later if a specific need arises.',
        ],
      },
      setupSteps: {
        id: 'setup-steps',
        title: 'How to Set Up Each Option',
        numberedItems: [
          'Native Windows: download the Windows installer from the Ollama project site and run it — GPU acceleration is detected automatically with no additional driver passthrough configuration needed beyond a normal graphics driver install.',
          'Native Windows: pull a model from the command line and start chatting — no virtual machine or container layer sits between Ollama and the GPU.',
          'WSL2: install a Linux distribution through WSL2 and ensure GPU passthrough is enabled in your Windows GPU driver settings, since this is a separate step from a normal driver install.',
          'WSL2: install Ollama inside the Linux distribution using the Linux installation method, then verify GPU passthrough is working before pulling any large models, since a failed passthrough silently falls back to CPU-only inference.',
        ],
        content: [
          'Both paths end with the same Ollama command-line interface and the same model files — the difference is entirely in the setup and the GPU access path, not in daily usage once installed.',
        ],
      },
      whenToUseEach: {
        id: 'when-to-use-each',
        title: 'When to Use Each',
        content: [
          'Native Windows Ollama installs directly and accesses the GPU without any passthrough configuration, which makes it the simpler and generally recommended path. WSL2 introduces a GPU passthrough layer between the Linux environment and the Windows host, and becomes worthwhile mainly when a specific Linux-only tool or driver stack needs to run in the same environment as Ollama.',
          'Avoid WSL2 purely for the sake of using a Linux shell if you have no other Linux-only dependency — the added passthrough layer and separate environment maintenance is not worth it for Ollama alone. Switch from WSL2 to native Windows if you find you no longer need the Linux-only tool that originally justified the setup.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does WSL2 reduce Ollama\'s inference speed compared to native Windows?',
            a: 'GPU passthrough in WSL2 introduces some overhead, though for most GPU-bound inference workloads the difference is small compared to native Windows. CPU-bound workloads may see a larger relative gap depending on WSL2\'s CPU scheduling overhead.',
          },
          {
            q: 'Can I access the same model files from both native Windows and WSL2 installations?',
            a: 'Model files are stored separately by default in each environment\'s own filesystem, so pulling a model in native Windows does not automatically make it available inside WSL2 — you would need to pull it separately in each, or configure a shared storage path manually.',
          },
          {
            q: 'Do I need to reconfigure GPU passthrough every time I restart WSL2?',
            a: 'No — once GPU passthrough is correctly enabled in your Windows driver settings, it persists across WSL2 restarts. The initial setup is a one-time configuration step, not a per-session requirement.',
          },
          {
            q: 'Is WSL2 required for AMD GPUs on Windows?',
            a: 'No — native Windows Ollama supports AMD GPU acceleration directly through its own driver integration, without requiring WSL2. WSL2 becomes relevant for AMD GPUs mainly if you need a specific Linux-only driver stack (such as a particular ROCm build) that isn\'t available on native Windows.',
          },
        ],
      },
    },
  },

  de: {
    theme: 'Hardware Extension',
    heroImage: '/images/wsl2-vs-native-windows-ollama-overview-hero-de.webp',
    title: 'Ollama unter WSL2 vs. natives Windows: Was sollten Sie wählen?',
    seoTitle: 'WSL2 vs. natives Windows für Ollama | Prompt Bites',
    metaDescription:
      'Natives Windows-Ollama ist einfacher einzurichten und hat direkten GPU-Zugriff; WSL2 lohnt sich vor allem, wenn Sie zusätzlich ein reines Linux-Tool benötigen.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Windows-Nutzer, die entscheiden müssen, ob sie Ollama nativ oder innerhalb von WSL2 ausführen sollen',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama', 'best-windows-laptop-local-llm-under-1500'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Natives Windows-Ollama ist einfacher einzurichten und hat direkten GPU-Zugriff ohne Passthrough-Schicht, weshalb es für die meisten Nutzer die richtige Standardwahl ist.</strong> WSL2 lohnt den zusätzlichen Einrichtungsaufwand vor allem dann, wenn Sie in derselben Umgebung ein reines Linux-Tool neben Ollama benötigen.',
    toc: [
      { label: 'Beste Wahl: Natives Windows für die meisten Nutzer', anchor: '#best-pick' },
      { label: 'So richten Sie jede Option ein', anchor: '#setup-steps' },
      { label: 'Wann Sie welche Option nutzen sollten', anchor: '#when-to-use-each' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Sollte ich Ollama nativ unter Windows oder innerhalb von WSL2 ausführen?',
        answer:
          'Führen Sie Ollama nativ unter Windows aus, es sei denn, Sie benötigen ausdrücklich ein reines Linux-Tool daneben. Natives Windows-Ollama hat direkten GPU-Zugriff ohne Passthrough-Schicht, während WSL2 einen GPU-Passthrough-Schritt hinzufügt und für Ollama allein meist nicht nötig ist.',
        bullets: [
          'Natives Windows-Ollama hat direkten GPU-Zugriff — keine Passthrough-Konfiguration erforderlich.',
          'WSL2 fügt eine GPU-Passthrough-Schicht hinzu, die vor allem für reine Linux-Tools neben Ollama nützlich ist.',
          'Die meisten Nutzer erhalten mit der nativen Windows-Version eine einfachere Einrichtung bei gleicher Leistung.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Natives Windows-Ollama hat direkten GPU-Zugriff ohne Passthrough-Schicht und ist einfacher einzurichten',
          'WSL2 lohnt sich vor allem, wenn Sie ein reines Linux-Tool neben Ollama benötigen',
          'GPU-Passthrough in WSL2 verursacht einen gewissen Overhead gegenüber nativem Windows, der bei den meisten GPU-lastigen Workloads jedoch gering ausfällt',
          'Modelldateien werden standardmäßig in jeder Umgebung getrennt gespeichert, sodass beim Wechsel zwischen nativem Windows und WSL2 die Modelle auf der anderen Seite erneut heruntergeladen werden müssen',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Natives Windows-Ollama ist einfacher einzurichten und hat direkten GPU-Zugriff; WSL2 hilft vor allem, wenn ein reines Linux-Tool daneben laufen muss.' },
          { type: 'plain-terms', text: 'Einfach gesagt: Die meisten Windows-Nutzer sollten einfach den nativen Ollama-Installer verwenden — WSL2 fügt eine zusätzliche Komplexitätsebene hinzu, die sich nur bei speziellem Linux-Tool-Bedarf lohnt.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Natives Windows für die meisten Nutzer',
        content: [
          '<strong>Natives Windows-Ollama ist die richtige Standardwahl, da es sich direkt installieren lässt, ohne jegliche Passthrough-Konfiguration auf die GPU zugreift und keine separate Linux-Umgebung zur Pflege erfordert.</strong> Nutzen Sie natives Windows, wenn: Sie nur Ollama selbst benötigen, Sie die einfachstmögliche Einrichtung wünschen, oder Sie sich mit der Verwaltung einer WSL2-Umgebung noch nicht wohlfühlen.',
          'Nutzen Sie WSL2, wenn: Ihr Workflow bereits von einem reinen Linux-Tool oder Treiber-Stack abhängt, der in derselben Umgebung neben Ollama laufen muss, oder Sie eine Pipeline aufbauen, die eine Linux-Shell voraussetzt. Im Zweifel starten Sie mit nativem Windows — es ist schneller eingerichtet, und Sie können WSL2 später ergänzen, falls ein konkreter Bedarf entsteht.',
        ],
      },
      setupSteps: {
        id: 'setup-steps',
        title: 'So richten Sie jede Option ein',
        numberedItems: [
          'Natives Windows: Laden Sie den Windows-Installer von der Ollama-Projektseite herunter und führen Sie ihn aus — die GPU-Beschleunigung wird automatisch erkannt, es ist keine zusätzliche Treiber-Passthrough-Konfiguration nötig, abgesehen von einer normalen Grafiktreiber-Installation.',
          'Natives Windows: Laden Sie ein Modell über die Kommandozeile herunter und beginnen Sie zu chatten — es liegt keine virtuelle Maschine oder Container-Schicht zwischen Ollama und der GPU.',
          'WSL2: Installieren Sie eine Linux-Distribution über WSL2 und stellen Sie sicher, dass GPU-Passthrough in Ihren Windows-GPU-Treibereinstellungen aktiviert ist, da dies ein separater Schritt gegenüber einer normalen Treiberinstallation ist.',
          'WSL2: Installieren Sie Ollama innerhalb der Linux-Distribution mit der Linux-Installationsmethode und prüfen Sie dann, ob der GPU-Passthrough funktioniert, bevor Sie größere Modelle herunterladen, da ein fehlgeschlagener Passthrough stillschweigend auf reine CPU-Inferenz zurückfällt.',
        ],
        content: [
          'Beide Wege enden mit derselben Ollama-Kommandozeilenoberfläche und denselben Modelldateien — der Unterschied liegt vollständig in der Einrichtung und dem GPU-Zugriffspfad, nicht in der täglichen Nutzung nach der Installation.',
        ],
      },
      whenToUseEach: {
        id: 'when-to-use-each',
        title: 'Wann Sie welche Option nutzen sollten',
        content: [
          'Natives Windows-Ollama installiert sich direkt und greift ohne jegliche Passthrough-Konfiguration auf die GPU zu, was es zum einfacheren und generell empfohlenen Weg macht. WSL2 führt eine GPU-Passthrough-Schicht zwischen der Linux-Umgebung und dem Windows-Host ein und lohnt sich vor allem dann, wenn ein bestimmtes reines Linux-Tool oder ein Treiber-Stack in derselben Umgebung wie Ollama laufen muss.',
          'Vermeiden Sie WSL2 rein zum Zweck der Nutzung einer Linux-Shell, wenn Sie keine andere reine Linux-Abhängigkeit haben — die zusätzliche Passthrough-Schicht und die separate Umgebungspflege lohnen sich für Ollama allein nicht. Wechseln Sie von WSL2 zu nativem Windows, sobald Sie feststellen, dass Sie das reine Linux-Tool, das die Einrichtung ursprünglich rechtfertigte, nicht mehr benötigen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Verringert WSL2 die Inferenzgeschwindigkeit von Ollama im Vergleich zu nativem Windows?',
            a: 'GPU-Passthrough in WSL2 verursacht einen gewissen Overhead, doch bei den meisten GPU-lastigen Inferenz-Workloads ist der Unterschied gegenüber nativem Windows gering. CPU-lastige Workloads können je nach CPU-Scheduling-Overhead von WSL2 eine größere relative Lücke aufweisen.',
          },
          {
            q: 'Kann ich von nativem Windows und WSL2 aus auf dieselben Modelldateien zugreifen?',
            a: 'Modelldateien werden standardmäßig getrennt im jeweiligen Dateisystem jeder Umgebung gespeichert. Das Herunterladen eines Modells unter nativem Windows macht es also nicht automatisch in WSL2 verfügbar — Sie müssten es in jeder Umgebung separat herunterladen oder manuell einen gemeinsamen Speicherpfad konfigurieren.',
          },
          {
            q: 'Muss ich den GPU-Passthrough bei jedem Neustart von WSL2 erneut konfigurieren?',
            a: 'Nein — sobald der GPU-Passthrough korrekt in Ihren Windows-Treibereinstellungen aktiviert ist, bleibt er über WSL2-Neustarts hinweg bestehen. Die anfängliche Einrichtung ist ein einmaliger Konfigurationsschritt, keine Anforderung pro Sitzung.',
          },
          {
            q: 'Ist WSL2 für AMD-GPUs unter Windows erforderlich?',
            a: 'Nein — natives Windows-Ollama unterstützt die AMD-GPU-Beschleunigung direkt über seine eigene Treiberintegration, ohne WSL2 zu benötigen. WSL2 wird für AMD-GPUs vor allem dann relevant, wenn Sie einen bestimmten reinen Linux-Treiber-Stack (etwa einen speziellen ROCm-Build) benötigen, der unter nativem Windows nicht verfügbar ist.',
          },
        ],
      },
    },
  },

  fr: {
    theme: 'Hardware Extension',
    heroImage: '/images/wsl2-vs-native-windows-ollama-overview-hero-fr.webp',
    title: 'Ollama sous WSL2 ou Windows natif : que choisir ?',
    seoTitle: 'WSL2 vs Windows natif pour Ollama | Prompt Bites',
    metaDescription:
      'Ollama natif sous Windows est plus simple à installer et accède directement au GPU ; WSL2 est utile surtout si vous avez besoin d\'un outil Linux en parallèle.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs Windows qui hésitent entre exécuter Ollama nativement ou dans WSL2',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama', 'best-windows-laptop-local-llm-under-1500'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Ollama natif sous Windows est plus simple à installer et accède directement au GPU sans couche de passthrough, ce qui en fait le choix par défaut pour la plupart des utilisateurs.</strong> WSL2 vaut l\'effort d\'installation supplémentaire surtout lorsque vous avez besoin d\'un outil exclusivement Linux aux côtés d\'Ollama dans le même environnement.',
    toc: [
      { label: 'Meilleur choix : Windows natif pour la plupart des utilisateurs', anchor: '#best-pick' },
      { label: 'Comment configurer chaque option', anchor: '#setup-steps' },
      { label: 'Quand utiliser chaque option', anchor: '#when-to-use-each' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Dois-je exécuter Ollama nativement sous Windows ou dans WSL2 ?',
        answer:
          'Exécutez Ollama nativement sous Windows, sauf si vous avez spécifiquement besoin d\'un outil exclusivement Linux à ses côtés. Ollama natif sous Windows accède directement au GPU sans couche de passthrough, tandis que WSL2 ajoute une étape de passthrough GPU généralement inutile pour Ollama seul.',
        bullets: [
          'Ollama natif sous Windows accède directement au GPU — aucune configuration de passthrough nécessaire.',
          'WSL2 ajoute une couche de passthrough GPU, utile surtout pour des outils exclusivement Linux aux côtés d\'Ollama.',
          'La plupart des utilisateurs bénéficient d\'une installation plus simple et de performances égales avec la version Windows native.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama natif sous Windows accède directement au GPU sans couche de passthrough et est plus simple à installer',
          'WSL2 vaut la peine surtout si vous avez besoin d\'un outil exclusivement Linux aux côtés d\'Ollama',
          'Le passthrough GPU dans WSL2 introduit un certain surcoût par rapport à Windows natif, bien qu\'il reste faible pour la plupart des charges de travail limitées par le GPU',
          'Les fichiers de modèles sont stockés séparément dans chaque environnement par défaut, donc passer de Windows natif à WSL2 (ou inversement) implique de retélécharger les modèles de l\'autre côté',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ollama natif sous Windows est plus simple à installer et accède directement au GPU ; WSL2 aide surtout lorsqu\'un outil exclusivement Linux doit fonctionner à ses côtés.' },
          { type: 'plain-terms', text: 'En termes simples : la plupart des utilisateurs Windows devraient simplement utiliser l\'installeur Ollama natif — WSL2 ajoute une couche de complexité qui ne se justifie que pour des besoins spécifiques en outils Linux.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Windows natif pour la plupart des utilisateurs',
        content: [
          '<strong>Ollama natif sous Windows est le choix par défaut approprié car il s\'installe directement, accède au GPU sans aucune configuration de passthrough et ne nécessite aucun environnement Linux séparé à maintenir.</strong> Utilisez Windows natif si : vous n\'avez besoin que d\'Ollama lui-même, vous souhaitez l\'installation la plus simple possible, ou vous n\'êtes pas encore à l\'aise avec la gestion d\'un environnement WSL2.',
          'Utilisez WSL2 si : votre flux de travail dépend déjà d\'un outil ou d\'une pile de pilotes exclusivement Linux devant fonctionner aux côtés d\'Ollama dans le même environnement, ou vous construisez un pipeline qui suppose un shell Linux. En cas de doute, commencez par Windows natif — il est plus rapide à installer, et vous pourrez ajouter WSL2 plus tard si un besoin spécifique se présente.',
        ],
      },
      setupSteps: {
        id: 'setup-steps',
        title: 'Comment configurer chaque option',
        numberedItems: [
          'Windows natif : téléchargez l\'installeur Windows depuis le site du projet Ollama et exécutez-le — l\'accélération GPU est détectée automatiquement, sans configuration de passthrough de pilote supplémentaire au-delà d\'une installation normale du pilote graphique.',
          'Windows natif : téléchargez un modèle en ligne de commande et commencez à discuter — aucune machine virtuelle ni couche de conteneur ne se trouve entre Ollama et le GPU.',
          'WSL2 : installez une distribution Linux via WSL2 et assurez-vous que le passthrough GPU est activé dans les paramètres de votre pilote GPU Windows, car c\'est une étape distincte d\'une installation normale du pilote.',
          'WSL2 : installez Ollama à l\'intérieur de la distribution Linux en utilisant la méthode d\'installation Linux, puis vérifiez que le passthrough GPU fonctionne avant de télécharger des modèles volumineux, car un passthrough défaillant retombe silencieusement sur une inférence CPU uniquement.',
        ],
        content: [
          'Les deux chemins aboutissent à la même interface en ligne de commande Ollama et aux mêmes fichiers de modèle — la différence réside entièrement dans l\'installation et le chemin d\'accès au GPU, pas dans l\'usage quotidien une fois installé.',
        ],
      },
      whenToUseEach: {
        id: 'when-to-use-each',
        title: 'Quand utiliser chaque option',
        content: [
          'Ollama natif sous Windows s\'installe directement et accède au GPU sans aucune configuration de passthrough, ce qui en fait la voie la plus simple et généralement recommandée. WSL2 introduit une couche de passthrough GPU entre l\'environnement Linux et l\'hôte Windows, et devient utile principalement lorsqu\'un outil ou une pile de pilotes exclusivement Linux doit fonctionner dans le même environnement qu\'Ollama.',
          'Évitez WSL2 uniquement pour utiliser un shell Linux si vous n\'avez aucune autre dépendance exclusivement Linux — la couche de passthrough supplémentaire et la maintenance d\'un environnement séparé n\'en valent pas la peine pour Ollama seul. Repassez de WSL2 à Windows natif si vous constatez que vous n\'avez plus besoin de l\'outil exclusivement Linux qui justifiait initialement cette configuration.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          {
            q: 'WSL2 réduit-il la vitesse d\'inférence d\'Ollama par rapport à Windows natif ?',
            a: 'Le passthrough GPU dans WSL2 introduit un certain surcoût, mais pour la plupart des charges de travail d\'inférence limitées par le GPU, la différence avec Windows natif est faible. Les charges limitées par le CPU peuvent présenter un écart relatif plus important selon le surcoût d\'ordonnancement CPU de WSL2.',
          },
          {
            q: 'Puis-je accéder aux mêmes fichiers de modèle depuis les installations Windows natif et WSL2 ?',
            a: 'Les fichiers de modèle sont stockés séparément par défaut dans le système de fichiers propre à chaque environnement. Télécharger un modèle sous Windows natif ne le rend donc pas automatiquement disponible dans WSL2 — vous devrez le télécharger séparément dans chacun, ou configurer manuellement un chemin de stockage partagé.',
          },
          {
            q: 'Dois-je reconfigurer le passthrough GPU à chaque redémarrage de WSL2 ?',
            a: 'Non — une fois le passthrough GPU correctement activé dans les paramètres de votre pilote Windows, il persiste après les redémarrages de WSL2. La configuration initiale est une étape unique, pas une exigence à chaque session.',
          },
          {
            q: 'WSL2 est-il requis pour les GPU AMD sous Windows ?',
            a: 'Non — Ollama natif sous Windows prend en charge l\'accélération GPU AMD directement via sa propre intégration de pilote, sans nécessiter WSL2. WSL2 devient pertinent pour les GPU AMD principalement si vous avez besoin d\'une pile de pilotes exclusivement Linux spécifique (comme une version particulière de ROCm) indisponible sous Windows natif.',
          },
        ],
      },
    },
  },

  ja: {
    theme: 'Hardware Extension',
    heroImage: '/images/wsl2-vs-native-windows-ollama-overview-hero-ja.webp',
    title: 'Ollama を WSL2 と Windows ネイティブで使う場合、どちらを選ぶべきか？',
    seoTitle: 'Ollama：WSL2 vs Windowsネイティブ | Prompt Bites',
    metaDescription:
      'ネイティブWindows版Ollamaはセットアップが簡単でGPUに直接アクセスできます。WSL2はLinux専用ツールを併用する必要がある場合に主に役立ちます。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'OllamaをネイティブWindowsで実行するかWSL2内で実行するか迷っているWindowsユーザー',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama', 'best-windows-laptop-local-llm-under-1500'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>ネイティブWindows版Ollamaはセットアップが簡単で、パススルー層を介さずにGPUへ直接アクセスできるため、ほとんどのユーザーにとって適切な既定の選択肢です。</strong> WSL2は、同じ環境でOllamaと並行してLinux専用ツールが必要な場合に、追加の設定コストを払う価値があります。',
    toc: [
      { label: 'おすすめ：ほとんどのユーザーにはネイティブWindows', anchor: '#best-pick' },
      { label: '各オプションのセットアップ方法', anchor: '#setup-steps' },
      { label: 'それぞれの使い分け', anchor: '#when-to-use-each' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'OllamaはネイティブWindowsとWSL2のどちらで実行すべきですか？',
        answer:
          'Linux専用ツールを併用する明確な必要がない限り、OllamaはネイティブWindowsで実行してください。ネイティブWindows版Ollamaはパススルー層を介さずGPUに直接アクセスできますが、WSL2はGPUパススルーの手順が追加され、Ollama単体では通常不要です。',
        bullets: [
          'ネイティブWindows版Ollamaは直接GPUにアクセス — パススルー設定は不要。',
          'WSL2はGPUパススルー層を追加するもので、Ollamaと並行するLinux専用ツールに主に有用。',
          'ほとんどのユーザーはネイティブWindows版のほうがセットアップが簡単で性能も同等。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ネイティブWindows版Ollamaはパススルー層なしでGPUに直接アクセスでき、セットアップも簡単',
          'WSL2はOllamaと並行してLinux専用ツールが必要な場合に主に価値がある',
          'WSL2のGPUパススルーはネイティブWindowsと比べて多少のオーバーヘッドが生じるが、GPU負荷が中心のワークロードでは通常わずかである',
          'モデルファイルは既定では各環境ごとに個別に保存されるため、ネイティブWindowsとWSL2を切り替えると、もう一方の環境でモデルを再度取得する必要がある',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'ネイティブWindows版Ollamaはセットアップが簡単でGPUに直接アクセスできます。WSL2は主にLinux専用ツールを並行して実行する必要がある場合に役立ちます。' },
          { type: 'plain-terms', text: '平たく言えば、ほとんどのWindowsユーザーはネイティブ版Ollamaインストーラーを使うだけで十分です — WSL2は特定のLinuxツールが必要な場合にのみ見合う複雑さを追加します。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'おすすめ：ほとんどのユーザーにはネイティブWindows',
        content: [
          '<strong>ネイティブWindows版Ollamaは直接インストールでき、パススルー設定なしにGPUへアクセスでき、別途Linux環境を維持する必要もないため、適切な既定の選択肢です。</strong> 次のような場合はネイティブWindowsを使用してください：Ollama単体だけが必要な場合、できるだけシンプルなセットアップを求める場合、あるいはWSL2環境の管理にまだ慣れていない場合。',
          '次のような場合はWSL2を使用してください：ワークフローが既に、同じ環境でOllamaと並行して動かす必要のあるLinux専用ツールやドライバースタックに依存している場合、あるいはLinuxシェルを前提としたパイプラインを構築している場合。迷った場合はまずネイティブWindowsから始めてください — セットアップが速く、後で具体的な必要性が生じた際にWSL2を追加できます。',
        ],
      },
      setupSteps: {
        id: 'setup-steps',
        title: '各オプションのセットアップ方法',
        numberedItems: [
          'ネイティブWindows：Ollamaプロジェクトサイトから Windows インストーラーをダウンロードして実行します — 通常のグラフィックドライバーのインストール以外に追加のドライバーパススルー設定は不要で、GPUアクセラレーションは自動的に検出されます。',
          'ネイティブWindows：コマンドラインからモデルを取得してチャットを開始します — Ollama とGPUの間には仮想マシンやコンテナ層が存在しません。',
          'WSL2：WSL2経由でLinuxディストリビューションをインストールし、Windows のGPUドライバー設定でGPUパススルーが有効になっていることを確認します。これは通常のドライバーインストールとは別の手順です。',
          'WSL2：Linuxのインストール方法を使ってLinuxディストリビューション内にOllamaをインストールし、大きなモデルを取得する前にGPUパススルーが機能しているか確認してください。パススルーが失敗すると、気づかないうちにCPUのみの推論にフォールバックします。',
        ],
        content: [
          'どちらの方法でも、最終的には同じOllamaコマンドラインインターフェースと同じモデルファイルに行き着きます — 違いはセットアップとGPUアクセス経路にのみあり、インストール後の日常的な使い方には違いはありません。',
        ],
      },
      whenToUseEach: {
        id: 'when-to-use-each',
        title: 'それぞれの使い分け',
        content: [
          'ネイティブWindows版Ollamaは直接インストールされ、パススルー設定なしにGPUへアクセスするため、よりシンプルで一般的に推奨される方法です。WSL2はLinux環境とWindowsホストの間にGPUパススルー層を導入するもので、特定のLinux専用ツールやドライバースタックをOllamaと同じ環境で動かす必要がある場合に主に価値があります。',
          'Linux専用の依存関係が他になければ、単にLinuxシェルを使いたいというだけの理由でWSL2を選ぶのは避けてください — 追加のパススルー層と別環境の維持コストは、Ollama単体のためには見合いません。当初のセットアップの根拠となっていたLinux専用ツールが不要になった場合は、WSL2からネイティブWindowsへ切り替えてください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'WSL2はネイティブWindowsと比べてOllamaの推論速度を低下させますか？',
            a: 'WSL2のGPUパススルーは多少のオーバーヘッドを生じますが、GPU負荷が中心の推論ワークロードの多くではネイティブWindowsとの差はわずかです。CPU負荷が中心のワークロードでは、WSL2のCPUスケジューリングのオーバーヘッド次第で相対的な差が大きくなる場合があります。',
          },
          {
            q: 'ネイティブWindowsとWSL2の両方のインストールから同じモデルファイルにアクセスできますか？',
            a: 'モデルファイルは既定では各環境固有のファイルシステムに個別に保存されるため、ネイティブWindowsでモデルを取得しても自動的にWSL2内で利用できるわけではありません。それぞれで個別に取得するか、共有ストレージパスを手動で設定する必要があります。',
          },
          {
            q: 'WSL2を再起動するたびにGPUパススルーを再設定する必要がありますか？',
            a: 'いいえ — WindowsのドライバーでGPUパススルーが正しく有効化されていれば、WSL2の再起動をまたいで維持されます。初期設定は一度限りの手順であり、セッションごとに必要なものではありません。',
          },
          {
            q: 'Windows上のAMD GPUにはWSL2が必要ですか？',
            a: 'いいえ — ネイティブWindows版Ollamaは、WSL2を必要とせず、独自のドライバー統合を通じて直接AMD GPUアクセラレーションをサポートします。WSL2がAMD GPUで重要になるのは主に、ネイティブWindowsでは利用できない特定のLinux専用ドライバースタック（特定のROCmビルドなど）が必要な場合です。',
          },
        ],
      },
    },
  },

  zh: {
    theme: 'Hardware Extension',
    heroImage: '/images/wsl2-vs-native-windows-ollama-overview-hero-zh.webp',
    title: 'Ollama 在 WSL2 与原生 Windows 上运行：该如何选择？',
    seoTitle: 'WSL2 与原生 Windows 运行 Ollama对比 | Prompt Bites',
    metaDescription:
      '原生 Windows 版 Ollama 安装更简单,可直接访问 GPU；WSL2 主要在需要搭配仅支持 Linux 的工具时才有帮助。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '正在纠结是在原生 Windows 还是在 WSL2 中运行 Ollama 的 Windows 用户',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama', 'best-windows-laptop-local-llm-under-1500'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>原生 Windows 版 Ollama 安装更简单,无需直通层即可直接访问 GPU,因此对大多数用户来说是合适的默认选择。</strong> 当你需要在同一环境中搭配 Ollama 使用仅支持 Linux 的工具时,WSL2 额外的配置成本才值得投入。',
    toc: [
      { label: '最佳选择:大多数用户适合原生 Windows', anchor: '#best-pick' },
      { label: '如何设置每种方案', anchor: '#setup-steps' },
      { label: '各方案的适用场景', anchor: '#when-to-use-each' },
      { label: '常见问题', anchor: '#faq' },
    ],
    quickAnswerTop: {
      zh: {
        question: '我应该在原生 Windows 上运行 Ollama,还是在 WSL2 中运行?',
        answer:
          '除非你确实需要在 Ollama 旁运行仅支持 Linux 的工具,否则应在原生 Windows 上运行 Ollama。原生 Windows 版 Ollama 无需直通层即可直接访问 GPU,而 WSL2 需要额外的 GPU 直通步骤,单独运行 Ollama 通常并不需要。',
        bullets: [
          '原生 Windows 版 Ollama 可直接访问 GPU — 无需任何直通配置。',
          'WSL2 增加了一层 GPU 直通,主要在需要搭配仅支持 Linux 的工具时才有用。',
          '大多数用户使用原生 Windows 版能获得更简单的设置和同等的性能。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '原生 Windows 版 Ollama 无需直通层即可直接访问 GPU,设置也更简单',
          '只有在需要搭配仅支持 Linux 的工具使用 Ollama 时,WSL2 才真正值得投入',
          'WSL2 中的 GPU 直通相比原生 Windows 会带来一定开销,但对大多数受 GPU 限制的负载来说影响很小',
          '默认情况下,模型文件在每个环境中分别存储,因此在原生 Windows 与 WSL2 之间切换意味着需要在另一侧重新拉取模型',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '原生 Windows 版 Ollama 设置更简单,可直接访问 GPU;WSL2 主要在需要搭配仅支持 Linux 的工具运行时才有帮助。' },
          { type: 'plain-terms', text: '简单来说:大多数 Windows 用户只需运行原生 Ollama 安装程序即可 — WSL2 增加了一层复杂性,只有在有特定 Linux 工具需求时才值得。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择:大多数用户适合原生 Windows',
        content: [
          '<strong>原生 Windows 版 Ollama 是恰当的默认选择,因为它可以直接安装,无需任何直通配置即可访问 GPU,也不需要维护单独的 Linux 环境。</strong> 在以下情况下使用原生 Windows:你只需要 Ollama 本身、你想要尽可能简单的设置,或者你还不熟悉 WSL2 环境的管理。',
          '在以下情况下使用 WSL2:你的工作流程已经依赖某个仅支持 Linux 的工具或驱动栈,需要与 Ollama 在同一环境中运行;或者你正在搭建一个假定使用 Linux shell 的流水线。如果不确定,先从原生 Windows 开始 — 它设置起来更快,之后如果出现具体需求,你可以再添加 WSL2。',
        ],
      },
      setupSteps: {
        id: 'setup-steps',
        title: '如何设置每种方案',
        numberedItems: [
          '原生 Windows:从 Ollama 项目网站下载 Windows 安装程序并运行 — 除了正常的显卡驱动安装外,无需额外的驱动直通配置,GPU 加速会自动被检测到。',
          '原生 Windows:在命令行中拉取模型并开始对话 — Ollama 与 GPU 之间没有虚拟机或容器层。',
          'WSL2:通过 WSL2 安装一个 Linux 发行版,并确保在 Windows 的 GPU 驱动设置中启用了 GPU 直通,因为这是与常规驱动安装不同的独立步骤。',
          'WSL2:使用 Linux 安装方式在该 Linux 发行版内安装 Ollama,然后在拉取任何大型模型之前先验证 GPU 直通是否正常工作,因为直通失败时会在你不知情的情况下悄悄回退到仅 CPU 推理。',
        ],
        content: [
          '两种方式最终都会得到相同的 Ollama 命令行界面和相同的模型文件 — 区别完全在于设置过程和 GPU 访问路径,而不是安装完成后的日常使用方式。',
        ],
      },
      whenToUseEach: {
        id: 'when-to-use-each',
        title: '各方案的适用场景',
        content: [
          '原生 Windows 版 Ollama 可直接安装,无需任何直通配置即可访问 GPU,因此是更简单、通常也更值得推荐的方式。WSL2 在 Linux 环境与 Windows 主机之间引入了一层 GPU 直通,主要在需要与 Ollama 在同一环境中运行特定的仅支持 Linux 的工具或驱动栈时才值得使用。',
          '如果你没有其他仅限 Linux 的依赖,请避免仅仅为了使用 Linux shell 而选择 WSL2 — 额外的直通层和独立环境的维护成本,对单独运行 Ollama 来说并不划算。如果你发现最初促使你搭建 WSL2 的那个仅支持 Linux 的工具已不再需要,就切换回原生 Windows。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'WSL2 是否会比原生 Windows 降低 Ollama 的推理速度?',
            a: 'WSL2 中的 GPU 直通会带来一定开销,但对大多数受 GPU 限制的推理负载来说,与原生 Windows 相比差异很小。对于受 CPU 限制的负载,由于 WSL2 的 CPU 调度开销不同,相对差距可能更大。',
          },
          {
            q: '我能否从原生 Windows 和 WSL2 两种安装中访问相同的模型文件?',
            a: '默认情况下,模型文件分别存储在各自环境自己的文件系统中,因此在原生 Windows 中拉取的模型不会自动在 WSL2 中可用 — 你需要在每个环境中分别拉取,或手动配置共享存储路径。',
          },
          {
            q: '每次重启 WSL2 都需要重新配置 GPU 直通吗?',
            a: '不需要 — 一旦在 Windows 驱动设置中正确启用了 GPU 直通,它会在 WSL2 重启后依然保持有效。初始设置是一次性的配置步骤,而不是每次会话都要做的事。',
          },
          {
            q: '在 Windows 上使用 AMD 显卡是否需要 WSL2?',
            a: '不需要 — 原生 Windows 版 Ollama 通过自身的驱动集成直接支持 AMD GPU 加速,无需 WSL2。只有当你需要某个原生 Windows 上没有的特定仅支持 Linux 的驱动栈(例如特定的 ROCm 版本)时,WSL2 对 AMD 显卡才会变得相关。',
          },
        ],
      },
    },
  },

  es: {
    theme: 'Hardware Extension',
    heroImage: '/images/wsl2-vs-native-windows-ollama-overview-hero-es.webp',
    title: 'Ollama en WSL2 vs. Windows nativo: ¿Cuál deberías elegir?',
    seoTitle: 'WSL2 vs Windows nativo para Ollama | Prompt Bites',
    metaDescription:
      'Ollama nativo en Windows es más sencillo de instalar y accede directamente a la GPU; WSL2 ayuda sobre todo cuando necesitas una herramienta exclusiva de Linux junto a Ollama.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Windows que deciden si ejecutar Ollama de forma nativa o dentro de WSL2',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama', 'best-windows-laptop-local-llm-under-1500'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Ollama nativo en Windows es más sencillo de configurar y accede directamente a la GPU sin ninguna capa de passthrough, por lo que es la opción predeterminada adecuada para la mayoría de los usuarios.</strong> WSL2 vale la configuración adicional principalmente cuando necesitas una herramienta exclusiva de Linux junto a Ollama en el mismo entorno.',
    toc: [
      { label: 'Mejor opción: Windows nativo para la mayoría', anchor: '#best-pick' },
      { label: 'Cómo configurar cada opción', anchor: '#setup-steps' },
      { label: 'Cuándo usar cada una', anchor: '#when-to-use-each' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Debería ejecutar Ollama de forma nativa en Windows o dentro de WSL2?',
        answer:
          'Ejecuta Ollama de forma nativa en Windows a menos que necesites específicamente una herramienta exclusiva de Linux junto a él. Ollama nativo en Windows tiene acceso directo a la GPU sin capa de passthrough, mientras que WSL2 añade un paso de passthrough de GPU que generalmente no es necesario solo para Ollama.',
        bullets: [
          'Ollama nativo en Windows tiene acceso directo a la GPU — no necesita configuración de passthrough.',
          'WSL2 añade una capa de passthrough de GPU, útil principalmente para herramientas exclusivas de Linux junto a Ollama.',
          'La mayoría de los usuarios obtienen una configuración más simple y el mismo rendimiento con la compilación nativa de Windows.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama nativo en Windows tiene acceso directo a la GPU sin capa de passthrough y es más fácil de configurar',
          'WSL2 vale la pena principalmente si necesitas una herramienta exclusiva de Linux junto a Ollama',
          'El passthrough de GPU en WSL2 introduce cierta sobrecarga frente a Windows nativo, aunque es pequeña para la mayoría de las cargas de trabajo limitadas por GPU',
          'Los archivos de modelo se almacenan por separado en cada entorno de forma predeterminada, por lo que cambiar entre Windows nativo y WSL2 implica volver a descargar los modelos en el otro lado',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ollama nativo en Windows es más sencillo de configurar y tiene acceso directo a la GPU; WSL2 ayuda sobre todo cuando necesitas ejecutar una herramienta exclusiva de Linux junto a él.' },
          { type: 'plain-terms', text: 'En términos sencillos: la mayoría de los usuarios de Windows deberían simplemente usar el instalador nativo de Ollama — WSL2 añade una capa de complejidad que solo compensa si tienes una necesidad específica de herramientas Linux.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: Windows nativo para la mayoría',
        content: [
          '<strong>Ollama nativo en Windows es la opción predeterminada adecuada porque se instala directamente, accede a la GPU sin ninguna configuración de passthrough y no requiere mantener un entorno Linux independiente.</strong> Usa Windows nativo si: solo necesitas Ollama en sí, quieres la configuración más simple posible, o todavía no te sientes cómodo administrando un entorno WSL2.',
          'Usa WSL2 si: tu flujo de trabajo ya depende de una herramienta o pila de controladores exclusiva de Linux que necesita ejecutarse junto a Ollama en el mismo entorno, o estás construyendo un pipeline que asume una shell de Linux. Si tienes dudas, empieza con Windows nativo — es más rápido de configurar, y puedes añadir WSL2 más adelante si surge una necesidad específica.',
        ],
      },
      setupSteps: {
        id: 'setup-steps',
        title: 'Cómo configurar cada opción',
        numberedItems: [
          'Windows nativo: descarga el instalador de Windows desde el sitio del proyecto Ollama y ejecútalo — la aceleración de GPU se detecta automáticamente sin necesidad de configuración adicional de passthrough de controladores, más allá de una instalación normal del controlador gráfico.',
          'Windows nativo: descarga un modelo desde la línea de comandos y empieza a chatear — no hay ninguna máquina virtual ni capa de contenedor entre Ollama y la GPU.',
          'WSL2: instala una distribución de Linux mediante WSL2 y asegúrate de que el passthrough de GPU esté habilitado en la configuración del controlador de GPU de Windows, ya que es un paso separado de una instalación normal del controlador.',
          'WSL2: instala Ollama dentro de la distribución de Linux usando el método de instalación de Linux, y luego verifica que el passthrough de GPU funcione antes de descargar modelos grandes, ya que un passthrough fallido recae silenciosamente en inferencia solo de CPU.',
        ],
        content: [
          'Ambos caminos terminan con la misma interfaz de línea de comandos de Ollama y los mismos archivos de modelo — la diferencia está completamente en la configuración y en la ruta de acceso a la GPU, no en el uso diario una vez instalado.',
        ],
      },
      whenToUseEach: {
        id: 'when-to-use-each',
        title: 'Cuándo usar cada una',
        content: [
          'Ollama nativo en Windows se instala directamente y accede a la GPU sin ninguna configuración de passthrough, lo que lo convierte en la vía más simple y generalmente recomendada. WSL2 introduce una capa de passthrough de GPU entre el entorno Linux y el host Windows, y resulta útil principalmente cuando una herramienta o pila de controladores exclusiva de Linux necesita ejecutarse en el mismo entorno que Ollama.',
          'Evita WSL2 solo por el hecho de usar una shell de Linux si no tienes ninguna otra dependencia exclusiva de Linux — la capa de passthrough adicional y el mantenimiento de un entorno separado no compensan solo por Ollama. Cambia de WSL2 a Windows nativo si descubres que ya no necesitas la herramienta exclusiva de Linux que justificó originalmente la configuración.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿WSL2 reduce la velocidad de inferencia de Ollama en comparación con Windows nativo?',
            a: 'El passthrough de GPU en WSL2 introduce cierta sobrecarga, aunque en la mayoría de las cargas de trabajo de inferencia limitadas por GPU la diferencia con Windows nativo es pequeña. Las cargas de trabajo limitadas por CPU pueden mostrar una brecha relativa mayor según la sobrecarga de programación de CPU de WSL2.',
          },
          {
            q: '¿Puedo acceder a los mismos archivos de modelo desde las instalaciones de Windows nativo y WSL2?',
            a: 'Los archivos de modelo se almacenan por separado de forma predeterminada en el sistema de archivos propio de cada entorno, por lo que descargar un modelo en Windows nativo no lo hace disponible automáticamente dentro de WSL2 — tendrías que descargarlo por separado en cada uno, o configurar manualmente una ruta de almacenamiento compartida.',
          },
          {
            q: '¿Necesito reconfigurar el passthrough de GPU cada vez que reinicio WSL2?',
            a: 'No — una vez que el passthrough de GPU está correctamente habilitado en la configuración de tu controlador de Windows, persiste a través de los reinicios de WSL2. La configuración inicial es un paso único, no un requisito por sesión.',
          },
          {
            q: '¿Se requiere WSL2 para las GPU AMD en Windows?',
            a: 'No — Ollama nativo en Windows admite la aceleración de GPU AMD directamente a través de su propia integración de controladores, sin necesitar WSL2. WSL2 se vuelve relevante para las GPU AMD principalmente si necesitas una pila de controladores exclusiva de Linux específica (como una compilación particular de ROCm) que no está disponible en Windows nativo.',
          },
        ],
      },
    },
  },

  pt: {
    theme: 'Hardware Extension',
    heroImage: '/images/wsl2-vs-native-windows-ollama-overview-hero-pt.webp',
    title: 'Ollama no WSL2 vs. Windows nativo: qual escolher?',
    seoTitle: 'WSL2 vs Windows nativo para Ollama | Prompt Bites',
    metaDescription:
      'O Ollama nativo no Windows é mais simples de instalar e acessa a GPU diretamente; o WSL2 ajuda principalmente quando você precisa de uma ferramenta exclusiva do Linux junto com o Ollama.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Windows que estão decidindo se executam o Ollama nativamente ou dentro do WSL2',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama', 'best-windows-laptop-local-llm-under-1500'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>O Ollama nativo no Windows é mais simples de configurar e acessa a GPU diretamente, sem nenhuma camada de passthrough, o que o torna a opção padrão certa para a maioria dos usuários.</strong> O WSL2 vale a configuração extra principalmente quando você precisa de uma ferramenta exclusiva do Linux junto com o Ollama no mesmo ambiente.',
    toc: [
      { label: 'Melhor escolha: Windows nativo para a maioria dos usuários', anchor: '#best-pick' },
      { label: 'Como configurar cada opção', anchor: '#setup-steps' },
      { label: 'Quando usar cada uma', anchor: '#when-to-use-each' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Devo executar o Ollama nativamente no Windows ou dentro do WSL2?',
        answer:
          'Execute o Ollama nativamente no Windows, a menos que você precise especificamente de uma ferramenta exclusiva do Linux junto com ele. O Ollama nativo no Windows tem acesso direto à GPU sem camada de passthrough, enquanto o WSL2 adiciona uma etapa de passthrough de GPU que geralmente não é necessária apenas para o Ollama.',
        bullets: [
          'O Ollama nativo no Windows tem acesso direto à GPU — nenhuma configuração de passthrough é necessária.',
          'O WSL2 adiciona uma camada de passthrough de GPU, útil principalmente para ferramentas exclusivas do Linux junto com o Ollama.',
          'A maioria dos usuários obtém uma configuração mais simples e desempenho equivalente com a versão nativa do Windows.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Ollama nativo no Windows tem acesso direto à GPU sem camada de passthrough e é mais simples de configurar',
          'O WSL2 vale a pena principalmente se você precisar de uma ferramenta exclusiva do Linux junto com o Ollama',
          'O passthrough de GPU no WSL2 introduz alguma sobrecarga em relação ao Windows nativo, embora seja pequena para a maioria das cargas de trabalho limitadas por GPU',
          'Os arquivos de modelo são armazenados separadamente em cada ambiente por padrão, então alternar entre Windows nativo e WSL2 significa baixar os modelos novamente do outro lado',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Ollama nativo no Windows é mais simples de configurar e tem acesso direto à GPU; o WSL2 ajuda principalmente quando uma ferramenta exclusiva do Linux precisa rodar junto com ele.' },
          { type: 'plain-terms', text: 'Em termos simples: a maioria dos usuários do Windows deve simplesmente usar o instalador nativo do Ollama — o WSL2 adiciona uma camada de complexidade que só compensa em necessidades específicas de ferramentas Linux.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor escolha: Windows nativo para a maioria dos usuários',
        content: [
          '<strong>O Ollama nativo no Windows é a opção padrão certa porque se instala diretamente, acessa a GPU sem nenhuma configuração de passthrough e não exige a manutenção de um ambiente Linux separado.</strong> Use o Windows nativo se: você só precisa do Ollama em si, quer a configuração mais simples possível, ou ainda não se sente confortável gerenciando um ambiente WSL2.',
          'Use o WSL2 se: seu fluxo de trabalho já depende de uma ferramenta ou pilha de drivers exclusiva do Linux que precisa rodar junto com o Ollama no mesmo ambiente, ou você está construindo um pipeline que pressupõe um shell Linux. Na dúvida, comece com o Windows nativo — é mais rápido de configurar, e você pode adicionar o WSL2 depois, se surgir uma necessidade específica.',
        ],
      },
      setupSteps: {
        id: 'setup-steps',
        title: 'Como configurar cada opção',
        numberedItems: [
          'Windows nativo: baixe o instalador do Windows no site do projeto Ollama e execute-o — a aceleração de GPU é detectada automaticamente, sem necessidade de configuração adicional de passthrough de driver além de uma instalação normal do driver gráfico.',
          'Windows nativo: baixe um modelo pela linha de comando e comece a conversar — não há máquina virtual ou camada de contêiner entre o Ollama e a GPU.',
          'WSL2: instale uma distribuição Linux pelo WSL2 e certifique-se de que o passthrough de GPU está habilitado nas configurações do driver de GPU do Windows, já que essa é uma etapa separada de uma instalação normal do driver.',
          'WSL2: instale o Ollama dentro da distribuição Linux usando o método de instalação do Linux, depois verifique se o passthrough de GPU está funcionando antes de baixar modelos grandes, já que um passthrough malsucedido recai silenciosamente para inferência somente em CPU.',
        ],
        content: [
          'Ambos os caminhos terminam com a mesma interface de linha de comando do Ollama e os mesmos arquivos de modelo — a diferença está inteiramente na configuração e no caminho de acesso à GPU, não no uso diário depois de instalado.',
        ],
      },
      whenToUseEach: {
        id: 'when-to-use-each',
        title: 'Quando usar cada uma',
        content: [
          'O Ollama nativo no Windows se instala diretamente e acessa a GPU sem nenhuma configuração de passthrough, o que o torna o caminho mais simples e geralmente recomendado. O WSL2 introduz uma camada de passthrough de GPU entre o ambiente Linux e o host Windows, e vale a pena principalmente quando uma ferramenta ou pilha de drivers exclusiva do Linux precisa rodar no mesmo ambiente que o Ollama.',
          'Evite o WSL2 apenas para usar um shell Linux se você não tiver nenhuma outra dependência exclusiva do Linux — a camada extra de passthrough e a manutenção de um ambiente separado não compensam só para o Ollama. Volte do WSL2 para o Windows nativo se perceber que não precisa mais da ferramenta exclusiva do Linux que originalmente justificou essa configuração.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O WSL2 reduz a velocidade de inferência do Ollama em comparação com o Windows nativo?',
            a: 'O passthrough de GPU no WSL2 introduz alguma sobrecarga, embora, para a maioria das cargas de trabalho de inferência limitadas por GPU, a diferença em relação ao Windows nativo seja pequena. Cargas de trabalho limitadas por CPU podem apresentar uma diferença relativa maior dependendo da sobrecarga de agendamento de CPU do WSL2.',
          },
          {
            q: 'Posso acessar os mesmos arquivos de modelo tanto na instalação nativa do Windows quanto na do WSL2?',
            a: 'Por padrão, os arquivos de modelo são armazenados separadamente no sistema de arquivos próprio de cada ambiente, então baixar um modelo no Windows nativo não o torna automaticamente disponível dentro do WSL2 — você precisaria baixá-lo separadamente em cada um, ou configurar manualmente um caminho de armazenamento compartilhado.',
          },
          {
            q: 'Preciso reconfigurar o passthrough de GPU toda vez que reinicio o WSL2?',
            a: 'Não — uma vez que o passthrough de GPU esteja corretamente habilitado nas configurações do driver do Windows, ele persiste entre reinicializações do WSL2. A configuração inicial é uma etapa única, não um requisito por sessão.',
          },
          {
            q: 'O WSL2 é necessário para GPUs AMD no Windows?',
            a: 'Não — o Ollama nativo no Windows suporta a aceleração de GPU AMD diretamente por meio de sua própria integração de driver, sem exigir o WSL2. O WSL2 se torna relevante para GPUs AMD principalmente se você precisar de uma pilha de driver exclusiva do Linux específica (como uma versão específica do ROCm) que não esteja disponível no Windows nativo.',
          },
        ],
      },
    },
  },

  ar: {
    theme: 'Hardware Extension',
    heroImage: '/images/wsl2-vs-native-windows-ollama-overview-hero-ar.webp',
    title: 'Ollama عبر WSL2 مقابل Windows الأصلي: أيهما تختار؟',
    seoTitle: 'WSL2 مقابل Windows الأصلي لـ Ollama | Prompt Bites',
    metaDescription:
      'يُعد Ollama الأصلي على Windows أسهل في الإعداد ويصل مباشرةً إلى معالج الرسومات؛ بينما يفيد WSL2 بشكل أساسي عند الحاجة إلى أداة تعمل فقط على Linux إلى جانب Ollama.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Windows الذين يقررون ما إذا كانوا سيشغّلون Ollama بشكل أصلي أم داخل WSL2',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama', 'best-windows-laptop-local-llm-under-1500'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>يُعد Ollama الأصلي على Windows أسهل في الإعداد ويصل مباشرةً إلى معالج الرسومات بدون أي طبقة تمرير (passthrough)، ما يجعله الخيار الافتراضي المناسب لمعظم المستخدمين.</strong> يستحق WSL2 عناء الإعداد الإضافي بشكل أساسي عندما تحتاج إلى أداة تعمل فقط على Linux إلى جانب Ollama في البيئة نفسها.',
    toc: [
      { label: 'الخيار الأفضل: Windows الأصلي لمعظم المستخدمين', anchor: '#best-pick' },
      { label: 'كيفية إعداد كل خيار', anchor: '#setup-steps' },
      { label: 'متى تستخدم كل خيار', anchor: '#when-to-use-each' },
      { label: 'أسئلة شائعة', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أشغّل Ollama بشكل أصلي على Windows أم داخل WSL2؟',
        answer:
          'شغّل Ollama بشكل أصلي على Windows ما لم تكن بحاجة تحديداً إلى أداة تعمل فقط على Linux إلى جانبه. يتمتع Ollama الأصلي على Windows بوصول مباشر إلى معالج الرسومات بدون طبقة تمرير، بينما يضيف WSL2 خطوة تمرير لمعالج الرسومات وهي غير ضرورية عموماً لتشغيل Ollama وحده.',
        bullets: [
          'يتمتع Ollama الأصلي على Windows بوصول مباشر إلى معالج الرسومات — لا حاجة لأي إعداد تمرير.',
          'يضيف WSL2 طبقة تمرير لمعالج الرسومات، وهي مفيدة بشكل أساسي لأدوات تعمل فقط على Linux إلى جانب Ollama.',
          'يحصل معظم المستخدمين على إعداد أبسط وأداء مماثل من نسخة Windows الأصلية.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يتمتع Ollama الأصلي على Windows بوصول مباشر إلى معالج الرسومات بدون طبقة تمرير، وهو أبسط في الإعداد',
          'يستحق WSL2 العناء بشكل أساسي إذا احتجت إلى أداة تعمل فقط على Linux إلى جانب Ollama',
          'يُدخل تمرير معالج الرسومات في WSL2 بعض العبء الإضافي مقارنةً بـ Windows الأصلي، رغم أنه صغير لمعظم أحمال العمل المعتمدة على معالج الرسومات',
          'تُخزَّن ملفات النماذج بشكل منفصل في كل بيئة افتراضياً، لذا فإن التبديل بين Windows الأصلي وWSL2 يعني سحب النماذج مجدداً في الجانب الآخر',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ollama الأصلي على Windows أسهل في الإعداد ويصل مباشرةً إلى معالج الرسومات؛ ويفيد WSL2 بشكل أساسي عندما تحتاج إلى تشغيل أداة تعمل فقط على Linux إلى جانبه.' },
          { type: 'plain-terms', text: 'ببساطة: يجب على معظم مستخدمي Windows الاكتفاء بتشغيل برنامج تثبيت Ollama الأصلي — يضيف WSL2 طبقة إضافية من التعقيد لا تستحق العناء إلا عند وجود حاجة محددة لأداة Linux.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'الخيار الأفضل: Windows الأصلي لمعظم المستخدمين',
        content: [
          '<strong>يُعد Ollama الأصلي على Windows الخيار الافتراضي المناسب لأنه يُثبَّت مباشرةً، ويصل إلى معالج الرسومات بدون أي إعداد تمرير، ولا يتطلب صيانة بيئة Linux منفصلة.</strong> استخدم Windows الأصلي إذا: كنت بحاجة إلى Ollama فقط، أو ترغب في أبسط إعداد ممكن، أو لم تعتد بعد على إدارة بيئة WSL2.',
          'استخدم WSL2 إذا: كان سير عملك يعتمد بالفعل على أداة أو حزمة برامج تشغيل تعمل فقط على Linux ويجب أن تعمل إلى جانب Ollama في البيئة نفسها، أو كنت تبني خط معالجة يفترض وجود واجهة أوامر Linux. إذا لم تكن متأكداً، ابدأ بـ Windows الأصلي — فهو أسرع في الإعداد، ويمكنك إضافة WSL2 لاحقاً إذا ظهرت حاجة محددة.',
        ],
      },
      setupSteps: {
        id: 'setup-steps',
        title: 'كيفية إعداد كل خيار',
        numberedItems: [
          'Windows الأصلي: نزّل مثبّت Windows من موقع مشروع Ollama وشغّله — يُكتشف تسريع معالج الرسومات تلقائياً دون الحاجة إلى أي إعداد تمرير إضافي لبرنامج التشغيل بخلاف تثبيت برنامج تشغيل الرسومات العادي.',
          'Windows الأصلي: اسحب نموذجاً من سطر الأوامر وابدأ المحادثة — لا توجد آلة افتراضية أو طبقة حاوية بين Ollama ومعالج الرسومات.',
          'WSL2: ثبّت توزيعة Linux عبر WSL2 وتأكد من تفعيل تمرير معالج الرسومات في إعدادات برنامج تشغيل معالج الرسومات في Windows، لأن هذه خطوة منفصلة عن التثبيت العادي لبرنامج التشغيل.',
          'WSL2: ثبّت Ollama داخل توزيعة Linux باستخدام طريقة التثبيت الخاصة بـ Linux، ثم تحقق من عمل تمرير معالج الرسومات قبل سحب أي نماذج كبيرة، لأن فشل التمرير يتراجع بصمت إلى الاستدلال بالمعالج المركزي فقط.',
        ],
        content: [
          'ينتهي كلا المسارين بنفس واجهة سطر أوامر Ollama ونفس ملفات النماذج — يكمن الفرق بالكامل في الإعداد ومسار الوصول إلى معالج الرسومات، وليس في الاستخدام اليومي بعد التثبيت.',
        ],
      },
      whenToUseEach: {
        id: 'when-to-use-each',
        title: 'متى تستخدم كل خيار',
        content: [
          'يُثبَّت Ollama الأصلي على Windows مباشرةً ويصل إلى معالج الرسومات بدون أي إعداد تمرير، ما يجعله المسار الأبسط والموصى به عموماً. يُدخل WSL2 طبقة تمرير لمعالج الرسومات بين بيئة Linux ومضيف Windows، ويصبح مفيداً بشكل أساسي عندما تحتاج أداة أو حزمة برامج تشغيل تعمل فقط على Linux إلى العمل في البيئة نفسها مع Ollama.',
          'تجنّب استخدام WSL2 لمجرد استخدام واجهة أوامر Linux إذا لم يكن لديك أي اعتمادية أخرى على Linux فقط — فطبقة التمرير الإضافية وصيانة بيئة منفصلة لا تستحق العناء لتشغيل Ollama وحده. انتقل من WSL2 إلى Windows الأصلي إذا وجدت أنك لم تعد بحاجة إلى أداة Linux الحصرية التي بررت الإعداد في الأصل.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          {
            q: 'هل يقلل WSL2 من سرعة استدلال Ollama مقارنةً بـ Windows الأصلي؟',
            a: 'يُدخل تمرير معالج الرسومات في WSL2 بعض العبء الإضافي، لكن بالنسبة لمعظم أحمال عمل الاستدلال المعتمدة على معالج الرسومات يكون الفرق صغيراً مقارنةً بـ Windows الأصلي. قد تُظهر أحمال العمل المعتمدة على المعالج المركزي فجوة نسبية أكبر تبعاً لعبء جدولة المعالج المركزي في WSL2.',
          },
          {
            q: 'هل يمكنني الوصول إلى نفس ملفات النماذج من كل من تثبيتات Windows الأصلي وWSL2؟',
            a: 'تُخزَّن ملفات النماذج بشكل منفصل افتراضياً في نظام الملفات الخاص بكل بيئة، لذا فإن سحب نموذج في Windows الأصلي لا يجعله متاحاً تلقائياً داخل WSL2 — ستحتاج إلى سحبه بشكل منفصل في كل بيئة، أو إعداد مسار تخزين مشترك يدوياً.',
          },
          {
            q: 'هل أحتاج إلى إعادة تهيئة تمرير معالج الرسومات في كل مرة أعيد فيها تشغيل WSL2؟',
            a: 'لا — بمجرد تفعيل تمرير معالج الرسومات بشكل صحيح في إعدادات برنامج تشغيل Windows، يستمر عبر عمليات إعادة تشغيل WSL2. الإعداد الأولي خطوة تُنفَّذ لمرة واحدة، وليس متطلباً في كل جلسة.',
          },
          {
            q: 'هل يُعد WSL2 ضرورياً لمعالجات رسومات AMD على Windows؟',
            a: 'لا — يدعم Ollama الأصلي على Windows تسريع معالج رسومات AMD مباشرةً من خلال تكامله الخاص مع برنامج التشغيل، دون الحاجة إلى WSL2. يصبح WSL2 ذا صلة بمعالجات رسومات AMD بشكل أساسي إذا احتجت إلى حزمة برامج تشغيل محددة تعمل فقط على Linux (مثل إصدار معين من ROCm) غير متوفرة على Windows الأصلي.',
          },
        ],
      },
    },
  },

  ko: {
    theme: 'Hardware Extension',
    heroImage: '/images/wsl2-vs-native-windows-ollama-overview-hero-ko.webp',
    title: 'Ollama를 WSL2와 네이티브 Windows 중 어디에서 실행해야 할까요?',
    seoTitle: 'Ollama WSL2 vs 네이티브 Windows 비교 | Prompt Bites',
    metaDescription:
      '네이티브 Windows용 Ollama는 설정이 더 간단하고 GPU에 직접 접근합니다. WSL2는 주로 Ollama와 함께 Linux 전용 도구가 필요할 때 유용합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Ollama를 네이티브로 실행할지 WSL2 안에서 실행할지 고민하는 Windows 사용자',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama', 'best-windows-laptop-local-llm-under-1500'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>네이티브 Windows용 Ollama는 설정이 더 간단하고 패스스루 계층 없이 GPU에 직접 접근하므로 대부분의 사용자에게 적합한 기본 선택입니다.</strong> WSL2는 동일한 환경에서 Ollama와 함께 Linux 전용 도구가 필요한 경우에 추가 설정 비용을 들일 가치가 있습니다.',
    toc: [
      { label: '추천: 대부분의 사용자에게는 네이티브 Windows', anchor: '#best-pick' },
      { label: '각 옵션 설정 방법', anchor: '#setup-steps' },
      { label: '각 옵션을 사용해야 할 때', anchor: '#when-to-use-each' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ko: {
        question: 'Ollama를 네이티브 Windows에서 실행해야 할까요, 아니면 WSL2 안에서 실행해야 할까요?',
        answer:
          '특별히 Ollama와 함께 Linux 전용 도구가 필요한 경우가 아니라면 Ollama를 네이티브 Windows에서 실행하십시오. 네이티브 Windows용 Ollama는 패스스루 계층 없이 GPU에 직접 접근하는 반면, WSL2는 GPU 패스스루 단계를 추가하며 Ollama만 사용할 경우 일반적으로 필요하지 않습니다.',
        bullets: [
          '네이티브 Windows용 Ollama는 GPU에 직접 접근합니다 — 패스스루 설정이 필요 없습니다.',
          'WSL2는 GPU 패스스루 계층을 추가하며, 주로 Ollama와 함께 Linux 전용 도구를 사용할 때 유용합니다.',
          '대부분의 사용자는 네이티브 Windows 빌드에서 더 간단한 설정과 동등한 성능을 얻습니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '네이티브 Windows용 Ollama는 패스스루 계층 없이 GPU에 직접 접근하며 설정도 더 간단합니다',
          'WSL2는 주로 Ollama와 함께 Linux 전용 도구가 필요한 경우에 가치가 있습니다',
          'WSL2의 GPU 패스스루는 네이티브 Windows에 비해 약간의 오버헤드를 유발하지만, 대부분의 GPU 중심 워크로드에서는 그 차이가 작습니다',
          '모델 파일은 기본적으로 각 환경에서 별도로 저장되므로, 네이티브 Windows와 WSL2 사이를 전환하면 다른 쪽에서 모델을 다시 받아야 합니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '네이티브 Windows용 Ollama는 설정이 더 간단하고 GPU에 직접 접근합니다. WSL2는 주로 Linux 전용 도구를 함께 실행해야 할 때 도움이 됩니다.' },
          { type: 'plain-terms', text: '간단히 말해, 대부분의 Windows 사용자는 네이티브 Ollama 설치 프로그램만 실행하면 됩니다 — WSL2는 특정 Linux 도구가 필요한 경우에만 그 복잡성이 정당화됩니다.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '추천: 대부분의 사용자에게는 네이티브 Windows',
        content: [
          '<strong>네이티브 Windows용 Ollama는 직접 설치되고 패스스루 설정 없이 GPU에 접근하며 별도의 Linux 환경을 유지할 필요가 없으므로 적절한 기본 선택입니다.</strong> 다음의 경우 네이티브 Windows를 사용하십시오: Ollama 자체만 필요한 경우, 가능한 한 간단한 설정을 원하는 경우, 또는 아직 WSL2 환경 관리에 익숙하지 않은 경우.',
          '다음의 경우 WSL2를 사용하십시오: 워크플로가 이미 동일한 환경에서 Ollama와 함께 실행해야 하는 Linux 전용 도구나 드라이버 스택에 의존하는 경우, 또는 Linux 셸을 전제로 하는 파이프라인을 구축하는 경우. 확신이 없다면 네이티브 Windows부터 시작하십시오 — 설정이 더 빠르며, 나중에 구체적인 필요가 생기면 WSL2를 추가할 수 있습니다.',
        ],
      },
      setupSteps: {
        id: 'setup-steps',
        title: '각 옵션 설정 방법',
        numberedItems: [
          '네이티브 Windows: Ollama 프로젝트 사이트에서 Windows 설치 프로그램을 다운로드하여 실행하십시오 — 일반적인 그래픽 드라이버 설치 외에 추가적인 드라이버 패스스루 설정 없이 GPU 가속이 자동으로 감지됩니다.',
          '네이티브 Windows: 명령줄에서 모델을 받아 바로 채팅을 시작하십시오 — Ollama와 GPU 사이에 가상 머신이나 컨테이너 계층이 존재하지 않습니다.',
          'WSL2: WSL2를 통해 Linux 배포판을 설치하고 Windows GPU 드라이버 설정에서 GPU 패스스루가 활성화되어 있는지 확인하십시오. 이는 일반적인 드라이버 설치와는 별도의 단계입니다.',
          'WSL2: Linux 설치 방법을 사용해 해당 Linux 배포판 안에 Ollama를 설치한 후, 대용량 모델을 받기 전에 GPU 패스스루가 제대로 작동하는지 확인하십시오. 패스스루가 실패하면 알아채기 어렵게 CPU 전용 추론으로 조용히 전환됩니다.',
        ],
        content: [
          '두 경로 모두 결국 동일한 Ollama 명령줄 인터페이스와 동일한 모델 파일로 귀결됩니다 — 차이는 오로지 설정 과정과 GPU 접근 경로에만 있으며, 설치 후 일상적인 사용에는 차이가 없습니다.',
        ],
      },
      whenToUseEach: {
        id: 'when-to-use-each',
        title: '각 옵션을 사용해야 할 때',
        content: [
          '네이티브 Windows용 Ollama는 직접 설치되고 패스스루 설정 없이 GPU에 접근하므로 더 간단하고 일반적으로 권장되는 방식입니다. WSL2는 Linux 환경과 Windows 호스트 사이에 GPU 패스스루 계층을 도입하며, 특정 Linux 전용 도구나 드라이버 스택이 Ollama와 동일한 환경에서 실행되어야 할 때 주로 가치가 있습니다.',
          '다른 Linux 전용 의존성이 없는데 단순히 Linux 셸을 사용하고 싶다는 이유만으로 WSL2를 선택하는 것은 피하십시오 — 추가된 패스스루 계층과 별도 환경 유지 비용은 Ollama만을 위해서는 그만한 가치가 없습니다. 처음 설정을 정당화했던 Linux 전용 도구가 더 이상 필요하지 않다면 WSL2에서 네이티브 Windows로 전환하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'WSL2는 네이티브 Windows에 비해 Ollama의 추론 속도를 낮춥니까?',
            a: 'WSL2의 GPU 패스스루는 약간의 오버헤드를 유발하지만, 대부분의 GPU 중심 추론 워크로드에서는 네이티브 Windows와의 차이가 작습니다. CPU 중심 워크로드는 WSL2의 CPU 스케줄링 오버헤드에 따라 상대적으로 더 큰 차이를 보일 수 있습니다.',
          },
          {
            q: '네이티브 Windows와 WSL2 설치 모두에서 동일한 모델 파일에 접근할 수 있습니까?',
            a: '기본적으로 모델 파일은 각 환경 고유의 파일 시스템에 별도로 저장되므로, 네이티브 Windows에서 모델을 받아도 WSL2 내에서 자동으로 사용할 수 있는 것은 아닙니다 — 각 환경에서 별도로 받거나, 공유 저장 경로를 수동으로 설정해야 합니다.',
          },
          {
            q: 'WSL2를 재시작할 때마다 GPU 패스스루를 다시 설정해야 합니까?',
            a: '아닙니다 — Windows 드라이버 설정에서 GPU 패스스루가 올바르게 활성화되면 WSL2를 재시작해도 유지됩니다. 초기 설정은 일회성 구성 단계이며 세션마다 필요한 요구 사항이 아닙니다.',
          },
          {
            q: 'Windows에서 AMD GPU를 사용하려면 WSL2가 필요합니까?',
            a: '아닙니다 — 네이티브 Windows용 Ollama는 자체 드라이버 통합을 통해 WSL2 없이도 AMD GPU 가속을 직접 지원합니다. WSL2는 네이티브 Windows에서 사용할 수 없는 특정 Linux 전용 드라이버 스택(예: 특정 ROCm 빌드)이 필요한 경우에 주로 AMD GPU와 관련해 의미가 있습니다.',
          },
        ],
      },
    },
  },
}
