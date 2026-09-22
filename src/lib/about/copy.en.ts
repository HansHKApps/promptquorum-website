import type { AboutCopy } from './types'

export const en: AboutCopy = {
  kicker: 'About PromptQuorum',
  h1: 'The usage layer for open-weight and open-source AI.',
  heroLead:
    'PromptQuorum is an independent ecosystem for running AI on your own terms: a directory of {{appCount}} local-AI apps, a knowledge base of {{articleCount}} articles in nine languages, and a free app that puts many models side by side.',
  heroSub:
    'Open-weight and open-source models are easy to download. Knowing which app to use, whether your hardware can run it and how to set it up is still hard. That gap is what PromptQuorum fills.',
  ctaDirectory: 'Explore the Directory',
  ctaHardware: 'What runs on my hardware?',
  ctaEcosystem: 'How the parts fit together',
  ctaMcp: 'Connect via MCP',

  wavesH2: 'From models to apps: three waves of open AI',
  wavesLead: 'Open-weight and open-source AI has moved in three waves. Each one solved a problem and exposed the next.',
  waves: [
    {
      n: 'Wave 1',
      title: 'Models',
      solved: 'Made AI downloadable.',
      text: 'Open-weight and open-source models (Llama, Qwen, Mistral, Gemma, DeepSeek and hundreds more) went from research artifacts to files anyone can download. Hugging Face is where they live.',
      catch: 'A model file cannot answer a question by itself.',
      product: 'Hugging Face',
    },
    {
      n: 'Wave 2',
      title: 'Runtimes',
      solved: 'Made models runnable.',
      text: 'Ollama, LM Studio and llama.cpp turned a download into a running model on your own machine. Type a prompt, get an answer.',
      catch: 'Usage stays narrow. For most people it is a chat window, and many stop there.',
      product: 'Ollama & LM Studio',
    },
    {
      n: 'Wave 3',
      title: 'Applications',
      solved: 'Makes local AI useful.',
      text: 'Apps built on top: chat with your documents, code in your editor, run agents, transcribe and speak, generate images and video, automate your home. They work with the model directly or through Ollama, LM Studio and other interfaces.',
      catch: 'There are hundreds of them, scattered across GitHub READMEs, Discord threads and changelogs, mostly in English and quickly outdated.',
      product: 'Apps',
    },
  ],
  theCatchLabel: 'The catch:',
  waveHighlightBadge: 'This is where PromptQuorum works',
  wavesClosing:
    'Models are the engine. Runtimes start the engine. Applications are what people actually drive. PromptQuorum is the map, the manual and the test drive for that third wave.',

  believeH2: 'Why local: what we believe',
  believeQuoteTitle: 'The internet should be open. AI should be open too.',
  believeQuotePre:
    'The web became useful because anyone could publish on it and anyone could read it, and no single company decided what you were allowed to do. AI is at the same fork. It can be something you rent from a few providers, or something you own and run yourself.',
  believeQuoteBold: 'We believe local AI is the better path',
  believeQuotePost:
    'for most uses that matter over time: what it costs, who controls it, who sees your data and whether it is still there next year.',
  beliefs: [
    ['Local models are open.', 'You can download the weights and run them on your own hardware. No one has to approve your prompt, and no one sits between you and the model.'],
    ['Cost stays in your control.', 'Once a model runs on your machine, there is no meter, no per-token bill and no price change you did not agree to. The hardware is the cost, and you decide how much to spend on it.'],
    ['It can’t be taken away.', 'A cloud model can be changed, restricted, repriced or shut down overnight. A model you have downloaded keeps working the same way as long as you keep the file.'],
    ['Your data stays with you.', 'When both the app and the model run locally, your prompts and documents never leave your machine.'],
    ['Independence is the point.', 'Local AI is more than a cheaper alternative. It is a way to depend on no one else’s terms, servers or decisions.'],
  ],
  believeClosing:
    'Independence from control is the theme of everything on this site. It is why the directory is neutral, why every entry links to the official source and why we publish in nine languages.',
  believeItalic:
    'We don’t believe cloud AI is bad. We believe you should have a real choice, and that choosing local should be as easy as choosing cloud.',

  ecosystemH2: 'One ecosystem, four parts that work together',
  ecosystemLead:
    'PromptQuorum is not just an app, and not just a directory. It is four parts built around the same goal, so you can go from “what should I run?” to a working setup without leaving the site.',
  connectsLabel: 'Works with the rest:',
  findLabel: 'Find',
  learnLabel: 'Learn',
  useLabel: 'Use',
  askLabel: 'Ask',
  partFindTitle: 'The Local AI Directory',
  partFindBody:
    '{{appCount}} local-AI apps in {{groupCount}} groups and {{categoryCount}} categories. Every entry has the same fields: what it does, platforms, license, price and hardware needs, plus a link to the official website. Set a hardware profile and each app shows whether it runs well, runs marginally or won’t run on your machine.',
  partFindConnects: 'entries link to their PromptQuorum review and guides where they exist.',
  partLearnTitle: 'The Knowledge Base',
  partLearnBody:
    '{{articleCount}} articles: guides, reviews and comparisons on hardware (VRAM, Apple Silicon, GPUs, CPU-only), software, models, quantization, RAG, agents, voice, prompt engineering and complete local-AI stacks. Written for people who want a working setup, not a theory lecture.',
  partLearnConnects: 'reviews and comparisons link back to the directory entries they cover.',
  partUseTitle: 'The PromptQuorum app',
  partUseBody:
    'A free multi-model app, currently in beta. Send one prompt to several models, including local ones, and see where their answers agree and where they contradict each other. Agreement is a useful signal, not proof. You bring your own keys and models. Nothing you send goes through a PromptQuorum server, and the app makes no calls back to us. This is where PromptQuorum started.',
  partUseConnects: 'it connects to Ollama and LM Studio, both listed in the directory, so local models sit next to cloud ones.',
  partAskTitle: 'The MCP server',
  partAskBody:
    'A public, read-only server for the Model Context Protocol. Claude, Cursor and any MCP-capable assistant can search the directory, pull app details, read guides and explain licenses. No account and no API key. When your AI answers a question about local AI, it can draw on PromptQuorum instead of guessing.',
  partAskConnects: 'it reads the same directory and guides as this website, so your assistant answers from the same source you do.',
  ctaOpenDirectory: 'Open the directory',
  ctaReadGuides: 'Read the guides',
  ctaAboutApp: 'About the app',
  ctaSeeHowToConnect: 'See how to connect',
  practiceH3: 'How it works in practice',
  practiceIntro: 'Say you have 16 GB of RAM and want to chat with your own PDFs offline.',
  practiceSteps: [
    'Set your hardware profile in the directory and pick the “Chat with docs” use case. Each app shows whether it runs well on your machine.',
    'Open the review of the app you like, and the guide for the runtime it needs, for example Ollama or LM Studio.',
    'Run it with a local model. When you want to see how different models answer the same question, use the PromptQuorum app.',
    'Or skip the browsing. Connect the MCP server and ask your own AI assistant the same question.',
  ],

  forYouH2: 'Start with a goal, not a product name',
  forYouLead:
    'You should not need to know that “llama.cpp” or “Open WebUI” exist before you can find them. Start with what you want to do:',
  goals: [
    'I want a private ChatGPT alternative on my laptop.',
    'I have 16 GB of RAM. What can I realistically run?',
    'I want to chat with my own PDFs offline.',
    'I need a local coding assistant for VS Code.',
    'I want an offline voice assistant for my smart home.',
  ],
  ctaBrowse: 'Browse by use case',
  ctaSetHardware: 'Set my hardware profile',
  forYouIfH3: 'PromptQuorum is for you if…',
  forYouList: [
    'You installed Ollama or LM Studio, chatted for a while and wondered what else you can do with it.',
    'You want AI that is private, works offline or does not need another subscription.',
    'You are choosing local-AI software and want the same facts for every option in one place.',
    'You build or maintain a local-AI tool and want an accurate entry for it.',
    'You read in a language other than English and are tired of English-only setup guides.',
    'You want your own AI assistant to answer local-AI questions from a maintained source.',
  ],
  notForYouH3: 'It is probably not for you if…',
  notForYouText: 'You only need a hosted chatbot and don’t care where it runs. Cloud AI is a fine tool. We just cover the other path.',

  neutralH2: 'Neutral by design',
  neutralLead: 'A reference is only useful if you can trust it. These rules apply to every page:',
  neutral: [
    ['Editorial integrity, not payment.', 'Inclusion and ranking in the directory are earned. No company can buy a better spot.'],
    ['Same format for every entry.', 'A project run by one developer gets the same page structure as a venture-backed one.'],
    ['Always the official source.', 'Every entry links to the tool’s own website.'],
    ['Transparent review status.', 'Every entry has a PromptQuorum review section. If it has not been reviewed yet, the page says “Not yet reviewed” rather than hiding the gap.'],
    ['Founder input is labelled.', 'When a tool’s maker adds context, it is clearly marked as provided by the maker.'],
    ['Corrections are welcome.', 'Directory data can go out of date. Anyone, and founders especially, can report errors: hello@promptquorum.com.'],
    ['Inclusion criteria are public.', 'We list real apps with a proper website and an update within the last six months, with a focus on local LLM use.'],
  ],

  languagesH2: 'Nine languages from the start',
  languagesLead: 'Local AI is a global movement, but most of the information about it is in English. PromptQuorum publishes in nine languages:',
  languagesClosing: 'That means someone in São Paulo, Seoul or Riyadh can find the same well-structured answer in their own language.',

  mcpH2: 'Use PromptQuorum from your AI',
  mcpLead: 'Connect PromptQuorum to your assistant once, and it can look things up for you.',
  mcpEndpointLabel: 'MCP endpoint:',
  mcpEndpointNote: '(public, read-only, no authentication)',
  mcpManifestLabel: 'Discovery manifest:',
  mcpToolsLabel: 'Available tools:',
  ctaMcpGuide: 'Full MCP setup guide',

  founderH2: 'Who builds it',
  founderImgAlt: 'Hans Küpper, founder of PromptQuorum',
  founderTitle: 'Founder, PromptQuorum',
  founderBioP1:
    'PromptQuorum started as a multi-model app. Hans built it because a single AI answer is hard to check. Ask several models the same question and you can at least see where they agree and where they don’t.',
  founderBioP2:
    'Building the app exposed a bigger gap: people who want reliable, private AI have no trustworthy map of the local-AI world. So the app grew into an ecosystem, with a directory, a knowledge base and an MCP server pointing at the same goal.',
  founderBioP3: 'Privacy and user control are non-negotiable design principles.',
  founderBioSmall: 'Independent, based in Germany. 30+ years in consulting and general management, in more than 20 countries.',

  roadmapH2: 'Where this is going',
  roadmapLead:
    'Where AI runs is changing: from cloud-only to a mix of cloud, local, hybrid and edge. PromptQuorum is being built for that shift. On the roadmap:',
  roadmap: [
    ['Founder verification:', 'tool makers confirm and extend their own entries.'],
    ['Site-wide hardware awareness:', 'your hardware profile shows compatibility on every page that mentions a tool, not just in the directory.'],
    ['Curated video:', 'the best walkthrough video attached to each app.'],
    ['Cloud ↔ local pairing:', 'for each cloud service, the local alternative, and the other way round.'],
  ],
  roadmapClosing:
    'The goal: when anyone, human or AI, asks “how do I use open-weight and open-source AI?”, PromptQuorum is a source they can rely on.',

  involvedH2: 'Get involved',
  foundersLabel: 'Founders and makers:',
  foundersText: 'get your tool listed, correct your entry or add founder notes:',
  pressLabel: 'Press and partnerships:',
  followLabel: 'Follow along:',

  breadcrumbHome: 'Home',
  breadcrumbAbout: 'About',
}
