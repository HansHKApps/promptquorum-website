import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// Facts verified 2026-08-27 against official sources: docs.frigate.video (recommended hardware,
// object detectors, camera setup, zones, semantic search, installation), frigate.video/plus
// (pricing), and the GitHub releases API for blakeblackshear/frigate (version + release dates:
// 0.17.0 2026-02-27, 0.17.1 2026-03-22, 0.17.2 2026-06-28, 0.18.0-beta3 2026-08-08).
// Inference-speed figures are Frigate's own published per-detector numbers, not PromptQuorum tests.

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    current_hardware_mentioned: ['Google Coral USB/M.2', 'Hailo-8 / Hailo-8L', 'Intel Arc A750', 'Intel UHD 730 iGPU', 'Intel NPU', 'NVIDIA RTX 3050 / RTX 3070', 'AMD Radeon 780M', 'Apple M3 Pro'],
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/frigate-nvr-home-assistant-setup-overview-hero-en.webp',
    title: 'Frigate NVR Setup: Detectors, Zones & Home Assistant (2026)',
    seoTitle: 'Frigate NVR Setup 2026: Detectors, Zones, Home Assistant',
    intro:
      'Frigate is an open-source network video recorder that runs AI object detection on your own hardware and hands every detection to Home Assistant as an entity you can automate on. This guide covers detector choice in 2026 — where Google Coral is no longer the default answer — plus camera stream settings, a working config.yml, zones that actually stop false alerts, the Home Assistant integration, and what Frigate 0.16 and 0.17 changed.',
    metaDescription:
      'Frigate 0.17.2 runs AI camera detection locally — no cloud, no subscription. Frigate now advises against Coral for new builds; here is what to pick.',
    twitterDescription:
      'A hands-on Frigate NVR build guide: which detector to buy in 2026, camera stream settings, a working config.yml, zone tuning, and the Home Assistant integration.',
    readTime: '16 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users building a self-hosted AI camera system with Frigate',
    primaryTerm: 'Frigate NVR setup',
    targetKeywords: [
      'frigate nvr setup',
      'frigate home assistant integration',
      'frigate detector coral vs openvino',
      'frigate config yml example',
      'frigate zones false alerts',
    ],
    leadAnswerBlock:
      '**Frigate is an open-source NVR that runs AI object detection locally on your camera streams and exposes every detection to Home Assistant as an entity.** As of Frigate 0.17.2, an Intel iGPU running the OpenVINO detector — not a Google Coral — is the recommended starting point for a new build.',
    quickAnswerTop: {
      en: {
        question: 'How do you set up Frigate NVR with Home Assistant?',
        answer:
          'Run Frigate in Docker with a config.yml that points at each camera\'s low-resolution substream for detection and its main stream for recording, pick a detector your hardware supports (OpenVINO on an Intel iGPU, ONNX on an NVIDIA GPU, or a Hailo-8 module), then install the Frigate integration in Home Assistant. Home Assistant needs the MQTT integration configured first — that is the prerequisite most first-time setups miss.',
        bullets: [
          'Frigate 0.17.2 is the current stable release (28 June 2026)',
          'Detect on a 1280x720 substream at 5 fps; record the main stream at 15 fps',
          'Frigate no longer recommends Google Coral for new installations',
          'Intel Arc A750 runs YOLOv9-320 in about 8 ms; an Intel UHD 730 iGPU about 14 ms',
          'The Home Assistant integration requires the MQTT integration first',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Frigate Actually Does', anchor: 'what-frigate-is' },
      { label: 'Which Detector to Buy', anchor: 'detector' },
      { label: 'Server Hardware & RAM', anchor: 'server-hardware' },
      { label: 'Camera Stream Settings', anchor: 'cameras' },
      { label: 'Installing Frigate', anchor: 'install' },
      { label: 'A Working config.yml', anchor: 'config' },
      { label: 'Zones, Masks & False Alerts', anchor: 'zones' },
      { label: 'Home Assistant Integration', anchor: 'home-assistant' },
      { label: 'Search, Faces & Plates', anchor: 'ai-features' },
      { label: 'Is Frigate+ Worth It?', anchor: 'frigate-plus' },
      { label: 'Cost vs Subscription Cameras', anchor: 'cost' },
      { label: 'Common Mistakes', anchor: 'mistakes' },
      { label: 'Final Verdict', anchor: 'verdict' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate is an open-source NVR that runs AI object detection locally on RTSP camera streams and publishes every detection to Home Assistant over MQTT, with no cloud service and no subscription.' },
      { type: 'plain-terms', content: 'A normal smart camera sends video to a company, which decides whether it saw a person and charges you monthly for the privilege. Frigate does that step on a computer in your house instead, so the video never leaves, there is no monthly fee, and every detection becomes something Home Assistant can act on.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content:
          'Frigate\'s own documentation now steers new builds away from the Google Coral TPU — the accelerator most guides still tell you to buy first.',
        items: [
          'Frigate 0.17.2 (28 June 2026) is the current stable release; 0.18.0 is in beta as of 8 August 2026',
          'Detector first: an Intel iGPU with the OpenVINO detector is the cheapest credible start; a Hailo-8 or NVIDIA GPU scales further',
          'Coral is now the fallback, not the default — Frigate recommends it only where power draw is the binding constraint',
          'Use two streams per camera: 1280x720 at 5 fps for detection, the full-resolution main stream at 15 fps for recording',
          'Zones plus required_zones, loitering_time, and inertia are what actually kill false alerts — not a better model',
          'The Home Assistant integration needs the MQTT integration configured first, or no entities appear',
          'Semantic search needs 8 GB RAM minimum, 16 GB and a GPU to be pleasant, and a CPU with AVX2',
          'Frigate+ is $50/yr for up to 12 fine-tuned models; face recognition and license plate reading work without it',
        ],
      },
      whatFrigateIs: {
        id: 'what-frigate-is',
        title: 'What Does Frigate Actually Do That a Normal NVR Does Not?',
        content:
          '**Frigate runs a two-stage pipeline: cheap motion detection finds regions worth looking at, then a real object-detection model decides whether those regions contain a person, car, dog, or package.** A conventional NVR triggers on pixel change, which is why it alerts on headlights, rain, and moving shrubs.',
        items: [
          '**Motion first, AI second:** low-overhead motion detection decides *where* to run the detector, so a small accelerator can cover many cameras.',
          '**Object-level recording:** retention is driven by what was detected, not by a continuous 24/7 buffer, so storage goes further.',
          '**Restreaming via go2rtc:** Frigate pulls each camera once and rebroadcasts it, instead of five clients hammering the camera directly.',
          '**MQTT out:** every tracked object, zone entry, and object count is published, which is what makes Home Assistant automations possible.',
          '**Review items:** detections are separated into *alerts* (things you asked to be told about) and *detections* (logged but silent).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Frigate uses low-cost motion detection to select regions of the frame, then runs an object-detection model only on those regions, which is why a single small accelerator can serve many cameras at once.' },
        ],
        callouts: [
          { type: 'note', text: 'The alerts-versus-detections split is the single most useful concept in Frigate. Alerts are what wake your phone; detections are the searchable record. Tune them separately.' },
        ],
      },
      detector: {
        id: 'detector',
        title: 'Which Detector Should You Buy for Frigate in 2026?',
        content:
          '**Buy an Intel iGPU box and use the OpenVINO detector if you are starting from nothing; buy a Hailo-8 module if you need the lowest latency per watt; use an NVIDIA GPU with the ONNX detector if the machine already has one.** Frigate\'s documentation states that Coral is no longer recommended for new installations except where power requirements are unusually tight.',
        items: [
          'Use **OpenVINO** if your host has any 6th-gen-or-newer Intel CPU — the iGPU is already paid for and needs no extra hardware.',
          'Use **ONNX** if the box already has an NVIDIA or AMD GPU; Frigate auto-detects the platform.',
          'Use **Hailo-8 / Hailo-8L** if you want accelerator-class latency in an M.2 slot at low power.',
          'Use **TensorRT** specifically on NVIDIA Jetson boards — see the [NVIDIA Jetson Orin Nano review for smart home AI](/smart-home/nvidia-jetson-orin-nano-smart-home-review).',
          'Use **edgetpu** (Coral) only when watts are the binding constraint and you accept an ageing model lineup.',
          'Avoid the **cpu** detector entirely — Frigate states OpenVINO in CPU mode is more efficient than the dedicated CPU detector.',
        ],
        columns: ['Detector', 'Hardware', 'Inference (published)'],
        rows: [
          { 'Detector': 'openvino', 'Hardware': 'Intel Arc A750', 'Inference (published)': '~4 ms MobileNetV2 / ~8 ms YOLOv9-320' },
          { 'Detector': 'openvino', 'Hardware': 'Intel NPU', 'Inference (published)': '~6 ms MobileNetV2 / ~11 ms YOLOv9-320' },
          { 'Detector': 'openvino', 'Hardware': 'Intel UHD 730 iGPU', 'Inference (published)': '~10 ms MobileNetV2 / ~14 ms YOLOv9-tiny' },
          { 'Detector': 'hailo8l', 'Hardware': 'Hailo-8', 'Inference (published)': '~6 ms SSD MobileNet / ~7 ms YOLOv6n' },
          { 'Detector': 'hailo8l', 'Hardware': 'Hailo-8L', 'Inference (published)': '~10 ms SSD MobileNet / ~11 ms YOLOv6n' },
          { 'Detector': 'onnx', 'Hardware': 'NVIDIA RTX 3070', 'Inference (published)': '~6–8 ms YOLOv9 tiny→small 320' },
          { 'Detector': 'onnx', 'Hardware': 'NVIDIA RTX 3050', 'Inference (published)': '~8–10 ms YOLOv9 tiny→small 320' },
          { 'Detector': 'onnx', 'Hardware': 'AMD Radeon 780M', 'Inference (published)': '~14 ms YOLOv9-tiny-320' },
          { 'Detector': 'zmq', 'Hardware': 'Apple M3 Pro', 'Inference (published)': '~6 ms YOLOv9-tiny-320' },
        ],
        note: 'Figures are Frigate\'s published per-detector numbers, not PromptQuorum benchmarks. Frigate also ships rknn (Rockchip NPUs), memryx, synaptics, deepstack, and degirum detector types.',
        callouts: [
          { type: 'warning', text: 'Most Frigate tutorials still open with "buy a Coral". That advice predates the OpenVINO, Hailo, and ONNX work in 0.16 and 0.17, and Frigate\'s own hardware page now contradicts it for new builds.' },
          { type: 'tip', text: 'Camera capacity on a Coral is roughly 1000 / inference_speed in frames per second, shared across all cameras. At 5 fps detect, a 10 ms inference budget covers about 20 camera-streams of headroom on paper — thermal throttling and USB power cut into that.' },
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: 'The detector is the chip that answers "is that a person?". You can use the graphics chip already inside an Intel CPU, a dedicated NVIDIA card, or a small M.2 AI module. The USB stick everyone recommends (Google Coral) still works but is no longer the recommended starting point.' },
        ],
      },
      serverHardware: {
        id: 'server-hardware',
        title: 'What Does the Frigate Server Itself Need?',
        content:
          '**A small Intel N-series or Core i-series mini PC with 8–16 GB of RAM, an SSD for the OS, and a separate spinning disk for recordings covers a typical four-to-eight camera house.** The constraint is rarely CPU — it is shared memory, disk write endurance, and whether you also want semantic search.',
        items: [
          '**Shared memory (`shm`):** the 128 MB default only covers about two cameras at 720p. Frigate budgets roughly 66.63 MB per 1280x720 camera with logs, so eight such cameras need about 253 MB.',
          '**Set `--shm-size` explicitly:** `--shm-size=512mb` is a safe figure for most builds; too small shows up as cameras dropping out, not as a clear error.',
          '**Three mount points:** `/config` for the YAML and database, `/media/frigate` for clips, recordings and exports, `/tmp/cache` for in-flight segments.',
          '**Recordings on an HDD:** continuous writes eat consumer SSD endurance; put `/media/frigate` on a hard disk and keep `/tmp/cache` on fast storage.',
          '**RAM for AI extras:** semantic search needs 8 GB minimum and a CPU with AVX and AVX2; 16 GB plus a GPU is the recommended configuration.',
        ],
        columns: ['Build', 'Detector', 'Suits'],
        rows: [
          { 'Build': 'Intel N100/N150 mini PC, 16 GB', 'Detector': 'openvino (iGPU)', 'Suits': '2–6 cameras, no semantic search' },
          { 'Build': 'Intel Core i5 mini PC, 32 GB', 'Detector': 'openvino (iGPU)', 'Suits': '6–12 cameras + semantic search' },
          { 'Build': 'Any host + Hailo-8 M.2', 'Detector': 'hailo8l', 'Suits': 'Low power, high camera count' },
          { 'Build': 'Desktop with RTX 3050+', 'Detector': 'onnx', 'Suits': 'Frigate plus a local LLM on one box' },
          { 'Build': 'Raspberry Pi 5', 'Detector': 'edgetpu / hailo8l', 'Suits': '1–3 cameras, tight power budget' },
        ],
        note: 'Frigate supports Docker on bare-metal Debian, the Home Assistant add-on, Kubernetes via Helm, Unraid, Synology and QNAP NAS units, ESXi, and macOS on Apple Silicon. On Proxmox, use a QEMU VM — LXC is explicitly unsupported.',
        callouts: [
          { type: 'warning', text: 'Running Frigate in a Proxmox LXC container is unsupported. Passing a Coral or iGPU through an LXC appears to work and then fails in ways nobody can debug for you. Use a VM.' },
          { type: 'practice', text: 'If you want one box for Frigate, Home Assistant, and a local LLM, size it from the LLM side first — see the [mini PC picks for Home Assistant plus local AI](/smart-home/best-mini-pc-home-assistant-local-ai).' },
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'How Should You Configure Your Cameras for Frigate?',
        content:
          '**Configure two streams in the camera\'s own firmware: a 1280x720 substream at 5 fps for detection, and the native-resolution main stream at 15 fps for recording — both H.264, with matching aspect ratios.** Frigate\'s detection model works on a 320x320 input, so a 4K detect stream buys nothing and costs a great deal of decoding.',
        numberedItems: [
          'In the camera firmware, set the sub stream to 1280x720, 5 fps, H.264, with an I-frame interval of 5 (one keyframe per second).',
          'Set the main stream to the camera\'s native resolution — 2688x1520 on a common 4 MP sensor — at 15 fps, H.264, I-frame interval 30.',
          'Keep both streams on the same aspect ratio (16:9 with 16:9) so bounding boxes map cleanly between detect and record.',
          'Point Frigate\'s `detect` role at the sub stream and the `record` role at the main stream.',
          'Raise detect to 10 fps only for genuinely fast subjects such as a car crossing a narrow driveway view.',
        ],
        items: [
          'Use H.264, not H.265 — browser support for H.265 is limited and live view suffers first.',
          'Change frame rate in the camera, never in Frigate: downsampling in software burns CPU for no benefit.',
          'Prefer wired PoE over Wi-Fi; a dropped substream shows up as missed detections, not as an obvious outage.',
          'For camera hardware that exposes RTSP and ONVIF properly, see the [local security camera buying guide for Frigate builds](/smart-home/best-local-security-cameras-2027).',
        ],
        callouts: [
          { type: 'tip', text: 'If objects at the far end of your driveway are never detected, the cause is usually resolution, not the model: at 1280x720 scaled to a 320x320 input, a distant person is a handful of pixels. Split that view into a second camera or a zoomed stream instead of raising detect resolution globally.' },
          { type: 'note', text: 'Frigate re-streams each camera once and serves every other client from that copy, which is why you should point Home Assistant at Frigate rather than at the camera directly.' },
        ],
      },
      install: {
        id: 'install',
        title: 'How Do You Install Frigate?',
        content:
          '**Use Docker Compose on a bare-metal Debian host if you want the supported path; use the Home Assistant add-on if you accept less control in exchange for a one-click install.** Both need the same config.yml and the same MQTT broker.',
        numberedItems: [
          'Install Docker on a Debian-based host, then create directories for `/config` and `/media/frigate`.',
          'Write a minimal `config.yml` with one camera and no detector block, so Frigate starts on the default and you can confirm the stream works.',
          'Start the container with an explicit `shm_size` and a mounted `/dev/dri` (Intel), GPU runtime (NVIDIA), or `/dev/hailo0` (Hailo).',
          'Open the web UI on port 5000 and confirm the camera image, the detect FPS, and the inference speed shown on the System page.',
          'Add the real `detectors` block, restart, and check that inference speed drops to the figure published for your hardware.',
          'Configure the MQTT broker in `config.yml`, then add the Frigate integration in Home Assistant.',
        ],
        codeBlock: `services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:0.17.2
    restart: unless-stopped
    privileged: true
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128   # Intel iGPU (OpenVINO)
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config:/config
      - /srv/frigate/media:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "8971:8971"   # authenticated web UI
      - "8554:8554"   # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'warning', text: 'Pin the image tag to a specific version rather than `stable`. Frigate config schemas change between minor releases, and an unattended `docker compose pull` on a 0.17 to 0.18 boundary can leave you with a container that refuses to start against your existing YAML.' },
          { type: 'practice', text: 'Bring up one camera before you add the rest. Nearly every "Frigate is broken" thread turns out to be one camera\'s substream URL, and that is much easier to see with a single entry in the config.' },
        ],
      },
      config: {
        id: 'config',
        title: 'What Does a Working Frigate config.yml Look Like?',
        content:
          '**A working config has four blocks: `mqtt`, `detectors`, `cameras` with two stream roles, and per-camera `zones` and `review` filters.** Everything else has defaults that are fine on day one.',
        codeBlock: `mqtt:
  host: 192.168.1.10
  user: frigate
  password: "{FRIGATE_MQTT_PASSWORD}"

detectors:
  ov:
    type: openvino
    device: GPU

cameras:
  driveway:
    ffmpeg:
      inputs:
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=1
          roles: [detect]
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=0
          roles: [record]
    detect:
      width: 1280
      height: 720
      fps: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: motion
      alerts:
        retain:
          days: 30
    snapshots:
      enabled: true
    motion:
      mask:
        - 0,0,0.35,0,0.35,0.12,0,0.12   # timestamp overlay
    zones:
      driveway_apron:
        coordinates: 0.14,0.98,0.62,0.55,0.95,0.72,0.88,1.0
        loitering_time: 4
        inertia: 3
    review:
      alerts:
        labels: [person, car]
        required_zones: [driveway_apron]
      detections:
        labels: [person, car, dog, cat]`,
        codeLanguage: 'yaml',
        items: [
          '`subtype=1` and `subtype=0` are the Dahua/Amcrest convention for sub and main stream; Reolink uses `h264Preview_01_sub` and `h264Preview_01_main`.',
          '`retain.mode: motion` keeps continuous footage only where motion occurred, which is the main storage lever.',
          '`review.alerts.required_zones` is what stops a car on the public road from waking your phone.',
          'Frigate 0.17 added full UI-based configuration, so most of this can now be edited in the web interface rather than by hand.',
        ],
        callouts: [
          { type: 'tip', text: 'Frigate 0.17 also added Profiles — named config overrides you can switch between without restarting the container. A "guests staying" profile that widens required_zones is a better pattern than editing YAML twice a week.' },
        ],
      },
      zones: {
        id: 'zones',
        title: 'How Do Zones and Masks Stop False Alerts?',
        content:
          '**Zones filter which detections matter; motion masks stop Frigate from looking at a region at all. Use a zone when the object is real but irrelevant, and a mask when the movement is not an object.** Zone presence is evaluated on the bottom-centre point of the bounding box, so a zone must cover the ground where feet or wheels are, not where heads are.',
        items: [
          '**Motion mask:** covers timestamp overlays, a busy tree, a flag. Frigate never runs detection there. Use it for movement that is never an object you care about.',
          '**Object filter mask:** suppresses a specific label in a specific region — the parked neighbour car that is permanently detected as `car`.',
          '**Zone + `required_zones`:** the object is genuinely a person, but a person on the pavement is not an alert. This is the correct fix for pavement traffic.',
          '**`loitering_time`:** requires the object to stay in the zone for N seconds before it counts — a delivery driver who walks up the path qualifies, someone walking past does not.',
          '**`inertia`:** requires the object to remain inside the zone for N consecutive frames (default 3) so bounding-box jitter at the boundary does not fire an alert.',
          '**Speed estimation:** a zone with exactly four ground-aligned points plus a `distances` list yields a speed value in the UI and over MQTT.',
        ],
        promptExamples: [
          { label: '❌ Bad approach', text: 'Alerts on every person, every camera, all day — then muting notifications after two days because the pavement outside generates forty alerts a night.' },
          { label: '✅ Good approach', text: 'A driveway_apron zone covering only the ground inside the property line, review.alerts.required_zones set to that zone, loitering_time: 4, and detections (no notification) left switched on for everything else so the searchable record stays complete.' },
        ],
        callouts: [
          { type: 'warning', text: 'Drawing a zone across the upper half of the frame does nothing useful. Presence is judged by the bottom-centre of the bounding box — draw zones on the ground plane.' },
          { type: 'insight', text: 'False alerts are almost never a model-quality problem. In a typical residential install, zones and required_zones remove more noise than any detector upgrade will.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'In Frigate, a motion mask stops detection running in a region entirely, while a zone plus required_zones lets detection run but restricts which detections are allowed to raise an alert.' },
        ],
      },
      homeAssistant: {
        id: 'home-assistant',
        title: 'How Do You Connect Frigate to Home Assistant?',
        content:
          '**Configure the MQTT integration in Home Assistant first, point Frigate at the same broker, then install the Frigate integration — it creates camera, image, sensor, switch, and binary_sensor entities per camera and per zone.** Without MQTT configured beforehand, the integration installs and produces nothing.',
        numberedItems: [
          'Install an MQTT broker (the Mosquitto add-on is the usual choice) and add the MQTT integration in Home Assistant.',
          'Set the `mqtt` block in Frigate\'s config.yml to the same broker, with its own username and password.',
          'Install the Frigate integration through HACS, or add it as a core integration, and point it at the Frigate host.',
          'Enable the Media Source integration so recordings and snapshots appear in the Media Browser.',
          'Build automations on the per-zone binary sensors rather than on the per-camera ones.',
        ],
        itemHeadings: true,
        columns: ['Entity type', 'What you get', 'What to use it for'],
        rows: [
          { 'Entity type': 'binary_sensor', 'What you get': 'Motion and object presence per camera, per zone, and per object label', 'What to use it for': 'The trigger for essentially every automation — a person in a specific zone is a far better trigger than motion on a camera' },
          { 'Entity type': 'camera', 'What you get': 'Live stream entity served from Frigate\'s restream on port 8554', 'What to use it for': 'Dashboard cards and casting; pointing Home Assistant here instead of at the camera avoids a second connection to the camera' },
          { 'Entity type': 'image', 'What you get': 'The latest snapshot of the most recent detected object per camera', 'What to use it for': 'Attaching a picture to a mobile notification without calling the snapshot API by hand' },
          { 'Entity type': 'sensor', 'What you get': 'Object counts per zone and per camera, plus detector and process performance figures', 'What to use it for': 'Occupancy logic and a system health dashboard — inference speed here is your early warning that a detector has fallen back to CPU' },
          { 'Entity type': 'switch', 'What you get': 'Toggles for detection, recording, and snapshots per camera', 'What to use it for': 'Privacy automations, such as disabling indoor detection whenever presence says somebody is home' },
        ],
        note: 'The integration also exposes camera.turn_on and camera.turn_off actions, supports multiple Frigate servers with separate MQTT configurations, and lets you override the RTSP URL template with Jinja2.',
        callouts: [
          { type: 'warning', text: 'If the Frigate integration installs but no entities appear, the cause is almost always MQTT: either the integration was never added in Home Assistant, or Frigate and Home Assistant are talking to two different brokers.' },
          { type: 'practice', text: 'Trigger automations from the zone binary sensor plus a condition on the object label. A raw camera motion sensor will fire on rain; `binary_sensor.driveway_driveway_apron_person` will not.' },
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'What Do Semantic Search, Face Recognition, and LPR Add?',
        content:
          '**Semantic search lets you type "black van in the driveway at night" and get matching clips; face recognition and license plate recognition turn anonymous detections into named ones — and both work without a Frigate+ subscription.** These features cost RAM, not money.',
        items: [
          '**Semantic search:** needs 8 GB RAM minimum, a CPU with AVX and AVX2, and ideally 16 GB plus a dedicated GPU. It will not run usefully on a Raspberry Pi.',
          '**Embedding model:** Jina CLIP V1 is the default; the `small` variant is quantized and runs acceptably on CPU, the `large` variant uses the GPU when one is present.',
          '**Jina CLIP V2** supports 89 languages instead of English only, but Frigate documents it as roughly 3% better for substantially more RAM and inference time, with CPU inference not recommended.',
          '**Reindexing is manual:** enabling semantic search does not index existing objects. Use the Reindex button in the UI or set `reindex: True`, and expect heavy CPU load while it runs.',
          '**Face recognition and LPR** run locally and need no subscription, though Frigate+ models improve efficiency.',
          '**GenAI descriptions:** 0.17 added multi-provider support and a dedicated llama.cpp integration, so descriptions can come from a model on your own hardware — see [running local LLM automations in Home Assistant](/smart-home/ai-automations-local-llm).',
        ],
        callouts: [
          { type: 'tip', text: 'Turn semantic search on before you accumulate a year of clips. Reindexing 200,000 tracked objects on a CPU-only mini PC is an overnight job.' },
          { type: 'note', text: 'Frigate 0.16 added semantic search triggers — an action fires when a tracked object matches a saved image or description. That is the bridge between "search my footage" and "automate on what my footage means".' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Is Frigate+ Worth $50 a Year?',
        content:
          '**Frigate+ is worth it once you have a specific, repeatable false positive that the stock model will not fix — otherwise the free models plus good zones do the job.** It costs $50/yr and includes up to 12 fine-tuned models per year, with additional fine-tunings at $5 each.',
        decisionBlock: {
          title: 'Frigate+ or stock models?',
          localIf: [
            'A specific object is repeatedly misclassified on your property',
            'You have unusual camera angles the stock model handles poorly',
            'You want AI-suggested labels to speed up your own uploads',
            'You want to fund continued open-source development',
          ],
          cloudIf: [
            'Your false alerts are pavement traffic — zones fix that for free',
            'You need labels outside Frigate\'s supported list; custom labels are not available yet',
            'You only run one or two cameras on simple views',
          ],
          quick: [
            'Fix zones first, then re-evaluate after two weeks',
            'If alerts are still wrong on real objects, subscribe',
            'Models you trained stay downloadable after you cancel',
          ],
        },
        items: [
          'The Frigate+ base model was updated to 2026.0, built on YOLOv9, with new candidate labels including `lawnmower` and `heron`.',
          'You cannot add arbitrary custom labels yet — training is limited to Frigate\'s supported label set.',
          'Face recognition and license plate recognition do not require the subscription.',
        ],
        callouts: [
          { type: 'insight', text: 'Subscribing before tuning zones is the most common way to spend $50 and see no improvement. A fine-tuned model makes correct detections more reliable; it does not make a correctly-detected pedestrian stop being a pedestrian.' },
        ],
      },
      cost: {
        id: 'cost',
        title: 'How Does Frigate Compare on Cost to Subscription Cameras?',
        content:
          '**Frigate converts a recurring per-camera cloud fee into a one-off hardware cost that does not scale with camera count.** The break-even is usually inside the first year for anything past two cameras.',
        columns: ['Aspect', 'Cloud camera service', 'Frigate'],
        rows: [
          { 'Aspect': 'Recurring cost', 'Cloud camera service': 'Monthly, often per camera', 'Frigate': 'None' },
          { 'Aspect': 'Up-front cost', 'Cloud camera service': 'Camera only', 'Frigate': 'Host + detector + storage' },
          { 'Aspect': 'AI detection', 'Cloud camera service': 'Vendor cloud', 'Frigate': 'Local (OpenVINO/Hailo/ONNX)' },
          { 'Aspect': 'Footage location', 'Cloud camera service': 'Vendor data centre', 'Frigate': 'Your disk' },
          { 'Aspect': 'Internet outage', 'Cloud camera service': 'Degraded or dead', 'Frigate': 'Fully functional on LAN' },
          { 'Aspect': 'Feature removal risk', 'Cloud camera service': 'Vendor can change plans', 'Frigate': 'Version you run keeps working' },
        ],
        note: 'Adding a camera to Frigate costs the camera. Adding a camera to a subscription service usually costs the camera plus another line on the bill — this is where the gap widens. See also [running a smart home without subscriptions](/smart-home/smart-home-without-subscriptions).',
        callouts: [
          { type: 'note', text: 'Count electricity honestly: an always-on mini PC plus disks is roughly 15–30 W, which is real money over five years but still well under most multi-camera cloud plans.' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Common Mistakes When Setting Up Frigate',
        content:
          '**Five mistakes account for most failed Frigate builds, and only one of them is about hardware.**',
        items: [
          '**Running detection on the main stream:** pointing the `detect` role at a 4K stream multiplies decode cost for zero accuracy gain, because the model input is 320x320. Always detect on the substream and record on the main stream.',
          '**Leaving `shm_size` at the default:** 128 MB covers roughly two 720p cameras. Cameras beyond that drop out intermittently with no obvious error. Set `--shm-size=512mb` and move on.',
          '**Installing the Home Assistant integration before MQTT:** the integration will install cleanly and create nothing. Configure the MQTT integration in Home Assistant and the `mqtt` block in Frigate first, pointing at the same broker.',
          '**Fixing false alerts by changing detectors:** a pedestrian on the pavement is a correct detection. The fix is a zone plus `required_zones` and `loitering_time`, not a faster accelerator or a paid model.',
          '**Recording to the SSD that runs the OS:** continuous video writes consume consumer SSD endurance quickly. Put `/media/frigate` on a hard disk, keep `/tmp/cache` fast, and set `retain.mode: motion`.',
          '**Deploying in a Proxmox LXC:** device passthrough appears to work, then breaks in ways that are unsupported and undiagnosable. Use a QEMU VM.',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Final Verdict: What Should You Actually Build?',
        content:
          '**Buy an Intel mini PC with 16 GB of RAM, run the OpenVINO detector on its iGPU, use PoE cameras with a 720p/5 fps substream, and spend your first week on zones rather than on hardware.** That build handles a normal house and leaves room to add a Hailo-8 later if camera count grows.',
        items: [
          'Use **OpenVINO on an Intel iGPU** if you are starting from zero — lowest cost, no extra hardware, ample headroom for 2–6 cameras.',
          'Use **a Hailo-8 M.2 module** if you are past eight cameras or power draw matters.',
          'Use **ONNX on an existing NVIDIA GPU** if the machine already has one, particularly if it also runs a local LLM.',
          'Use **a Coral** only when watts are the hard constraint and you accept it is no longer the recommended path.',
          'Avoid the **cpu** detector; OpenVINO in CPU mode is the better fallback.',
          'If unsure, start with an Intel N150 mini PC and two cameras, get zones right, then scale.',
        ],
        callouts: [
          { type: 'practice', text: 'Budget order that actually works: cameras and PoE switch first, then the host, then storage, then an accelerator if the numbers on the System page say you need one. Buying the accelerator first is the classic inversion.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is Frigate NVR?', a: 'Frigate is an open-source network video recorder that runs AI object detection locally on IP camera streams using OpenCV and TensorFlow. It records clips based on what was detected rather than on raw motion, and publishes every detection over MQTT so Home Assistant can automate on it. There is no cloud service and no subscription for the core software.' },
          { q: 'Do I still need a Google Coral TPU for Frigate in 2026?', a: 'No. Frigate\'s own hardware documentation states that Coral is no longer recommended for new installations, except where power requirements are unusually tight. For a new build, the OpenVINO detector on an Intel iGPU, a Hailo-8 module, or the ONNX detector on an existing NVIDIA GPU are the recommended paths.' },
          { q: 'Which Frigate version should I run?', a: 'Frigate 0.17.2, released 28 June 2026, is the current stable release. Version 0.18.0 has been in beta since July 2026 — the third beta appeared on 8 August 2026 — so run 0.18 only if you are comfortable with config changes between minor versions.' },
          { q: 'How much RAM does Frigate need?', a: 'Base object detection and recording run comfortably in 8 GB. Semantic search raises the floor: Frigate documents 8 GB as the minimum, 16 GB or more plus a dedicated GPU as the recommendation, and requires a CPU supporting AVX and AVX2 instructions.' },
          { q: 'Why does Frigate keep alerting on people walking past my house?', a: 'Because those are correct detections. Draw a zone covering only the ground inside your property, set review.alerts.required_zones to that zone, and add loitering_time so a passer-by has to stop before an alert fires. Zone presence is judged on the bottom-centre of the bounding box, so the zone must cover the ground plane.' },
          { q: 'Does Frigate work without an internet connection?', a: 'Yes. Detection, recording, MQTT, and Home Assistant automations all run on your LAN. Only remote viewing from outside the house and optional cloud-hosted GenAI providers need connectivity — and 0.17 added a llama.cpp integration so descriptions can be generated locally too.' },
          { q: 'What is the difference between a zone and a mask in Frigate?', a: 'A motion mask stops Frigate running detection in that region at all, which suits timestamp overlays and permanently moving foliage. A zone lets detection run normally but restricts which detections are allowed to raise an alert, via required_zones. Use a mask for non-objects, a zone for real objects you do not care about.' },
          { q: 'How many cameras can one Frigate server handle?', a: 'It depends on inference speed rather than camera count directly — usable detections per second is roughly 1000 divided by the inference time in milliseconds, shared across cameras. At 5 fps detect per camera and an 8 ms detector such as an Intel Arc A750 on YOLOv9-320, there is substantial headroom for a typical residential install.' },
          { q: 'Do I need Frigate+ for face recognition or license plate reading?', a: 'No. Face recognition and license plate recognition run locally without a subscription, though Frigate+ models can improve efficiency. Frigate+ costs $50 per year and includes up to 12 fine-tuned models, with extra fine-tunings at $5 each — worth it for repeated misclassification, not for pavement traffic.' },
          { q: 'Can I run Frigate in a Proxmox LXC container?', a: 'No — Proxmox LXC is explicitly unsupported. Use a QEMU virtual machine instead. Device passthrough for an iGPU, Coral, or Hailo module can appear to work in an LXC and then fail in ways that are not supportable.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Understand why local AI cameras beat cloud cameras on privacy](/smart-home/local-ai-security-camera) — the case for local detection before the build details',
          '[Compare local security cameras with confirmed RTSP and ONVIF support](/smart-home/best-local-security-cameras-2027) — which cameras actually feed Frigate properly',
          '[Review mini PCs that run Home Assistant and local AI on one box](/smart-home/best-mini-pc-home-assistant-local-ai) — hosts sized for a Frigate build',
          '[Check the hardware requirements for a fully local smart home](/smart-home/best-hardware-for-local-smart-home) — accelerators, storage, and network',
          '[Learn how to get started with Home Assistant](/smart-home/home-assistant-getting-started) — the prerequisite if you are new to it',
          '[Explore radar presence sensing for rooms where a camera is inappropriate](/smart-home/radar-presence-sensing-no-camera) — the camera-free alternative indoors',
          '[See how to install Ollama for a local LLM on the same machine](/local-llms/how-to-install-ollama) — cross-cluster: local GenAI descriptions for Frigate events',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '**Frigate Recommended Hardware** — [docs.frigate.video/frigate/hardware](https://docs.frigate.video/frigate/hardware) — published per-detector inference speeds and the statement that Coral is no longer recommended for new installations.',
          '**Frigate Object Detectors configuration** — [docs.frigate.video/configuration/object_detectors](https://docs.frigate.video/configuration/object_detectors) — the full list of detector `type` values and the note that the CPU detector is not recommended.',
          '**Frigate Camera Setup** — [docs.frigate.video/frigate/camera_setup](https://docs.frigate.video/frigate/camera_setup) — detect and record stream resolutions, frame rates, and I-frame interval guidance.',
          '**Frigate Zones configuration** — [docs.frigate.video/configuration/zones](https://docs.frigate.video/configuration/zones) — required_zones, loitering_time, inertia defaults, and speed estimation requirements.',
          '**Frigate Semantic Search** — [docs.frigate.video/configuration/semantic_search](https://docs.frigate.video/configuration/semantic_search) — RAM and AVX2 requirements, Jina CLIP V1/V2 comparison, and reindexing behaviour.',
          '**Frigate Home Assistant integration** — [docs.frigate.video/integrations/home-assistant](https://docs.frigate.video/integrations/home-assistant) — MQTT prerequisite and the entity types the integration creates.',
          '**Frigate releases on GitHub** — [github.com/blakeblackshear/frigate/releases](https://github.com/blakeblackshear/frigate/releases) — version numbers and release dates for 0.17.x and the 0.18.0 betas.',
          '**Frigate+** — [frigate.video/plus/](https://frigate.video/plus/) — subscription price, included fine-tunings, and label limitations.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Frigate NVR Setup: Detectors, Zones & Home Assistant (2026)',
      description: 'Frigate 0.17.2 runs AI camera detection locally — no cloud, no subscription. Frigate now advises against Coral for new builds; here is what to pick.',
      url: 'https://www.promptquorum.com/smart-home/frigate-nvr-home-assistant-setup',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      about: [
        { '@type': 'Thing', name: 'Frigate NVR' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Object detection' },
        { '@type': 'Thing', name: 'OpenVINO' },
        { '@type': 'Thing', name: 'Hailo-8' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Frigate' },
        { '@type': 'SoftwareApplication', name: 'Home Assistant' },
        { '@type': 'SoftwareApplication', name: 'go2rtc' },
      ],
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Home Assistant users building a self-hosted AI camera system' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/smart-home/frigate-nvr-home-assistant-setup' },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to install Frigate NVR and connect it to Home Assistant',
      inLanguage: 'en',
      totalTime: 'PT90M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Prepare the host', text: 'Install Docker on a Debian-based host and create directories for /config and /media/frigate.' },
        { '@type': 'HowToStep', position: 2, name: 'Write a minimal config', text: 'Create a config.yml with one camera and no detector block so Frigate starts on defaults and you can confirm the stream works.' },
        { '@type': 'HowToStep', position: 3, name: 'Start the container', text: 'Start Frigate with an explicit shm_size and the correct device passed through: /dev/dri for Intel, the NVIDIA runtime for NVIDIA, or /dev/hailo0 for Hailo.' },
        { '@type': 'HowToStep', position: 4, name: 'Verify in the web UI', text: 'Open the Frigate web UI and confirm the camera image, detect FPS, and inference speed on the System page.' },
        { '@type': 'HowToStep', position: 5, name: 'Add the real detector', text: 'Add the detectors block for your hardware, restart, and confirm inference speed drops to the figure published for that detector.' },
        { '@type': 'HowToStep', position: 6, name: 'Connect Home Assistant', text: 'Configure the MQTT broker in config.yml, add the MQTT integration in Home Assistant, then install the Frigate integration.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What is Frigate NVR?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate is an open-source network video recorder that runs AI object detection locally on IP camera streams using OpenCV and TensorFlow. It records clips based on what was detected rather than on raw motion, and publishes every detection over MQTT so Home Assistant can automate on it. There is no cloud service and no subscription for the core software.' } },
        { '@type': 'Question', name: 'Do I still need a Google Coral TPU for Frigate in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'No. Frigate\'s own hardware documentation states that Coral is no longer recommended for new installations, except where power requirements are unusually tight. For a new build, the OpenVINO detector on an Intel iGPU, a Hailo-8 module, or the ONNX detector on an existing NVIDIA GPU are the recommended paths.' } },
        { '@type': 'Question', name: 'Which Frigate version should I run?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate 0.17.2, released 28 June 2026, is the current stable release. Version 0.18.0 has been in beta since July 2026, with the third beta on 8 August 2026, so run 0.18 only if you are comfortable with config changes between minor versions.' } },
        { '@type': 'Question', name: 'How much RAM does Frigate need?', acceptedAnswer: { '@type': 'Answer', text: 'Base object detection and recording run comfortably in 8 GB. Semantic search raises the floor: Frigate documents 8 GB as the minimum, 16 GB or more plus a dedicated GPU as the recommendation, and requires a CPU supporting AVX and AVX2 instructions.' } },
        { '@type': 'Question', name: 'Why does Frigate keep alerting on people walking past my house?', acceptedAnswer: { '@type': 'Answer', text: 'Because those are correct detections. Draw a zone covering only the ground inside your property, set review.alerts.required_zones to that zone, and add loitering_time so a passer-by has to stop before an alert fires. Zone presence is judged on the bottom-centre of the bounding box, so the zone must cover the ground plane.' } },
        { '@type': 'Question', name: 'Does Frigate work without an internet connection?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Detection, recording, MQTT, and Home Assistant automations all run on your LAN. Only remote viewing from outside the house and optional cloud-hosted GenAI providers need connectivity, and 0.17 added a llama.cpp integration so descriptions can be generated locally too.' } },
        { '@type': 'Question', name: 'What is the difference between a zone and a mask in Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'A motion mask stops Frigate running detection in that region at all, which suits timestamp overlays and permanently moving foliage. A zone lets detection run normally but restricts which detections are allowed to raise an alert, via required_zones. Use a mask for non-objects, a zone for real objects you do not care about.' } },
        { '@type': 'Question', name: 'How many cameras can one Frigate server handle?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on inference speed rather than camera count directly: usable detections per second is roughly 1000 divided by the inference time in milliseconds, shared across cameras. At 5 fps detect per camera and an 8 ms detector such as an Intel Arc A750 on YOLOv9-320, there is substantial headroom for a typical residential install.' } },
        { '@type': 'Question', name: 'Do I need Frigate+ for face recognition or license plate reading?', acceptedAnswer: { '@type': 'Answer', text: 'No. Face recognition and license plate recognition run locally without a subscription, though Frigate+ models can improve efficiency. Frigate+ costs $50 per year and includes up to 12 fine-tuned models, with extra fine-tunings at $5 each.' } },
        { '@type': 'Question', name: 'Can I run Frigate in a Proxmox LXC container?', acceptedAnswer: { '@type': 'Answer', text: 'No, Proxmox LXC is explicitly unsupported. Use a QEMU virtual machine instead. Device passthrough for an iGPU, Coral, or Hailo module can appear to work in an LXC and then fail in ways that are not supportable.' } },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    current_hardware_mentioned: ['Google Coral USB/M.2', 'Hailo-8 / Hailo-8L', 'Intel Arc A750', 'Intel UHD 730 iGPU', 'Intel NPU', 'NVIDIA RTX 3050 / RTX 3070', 'AMD Radeon 780M', 'Apple M3 Pro'],
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/frigate-nvr-home-assistant-setup-overview-hero-de.webp',
    title: 'Frigate NVR einrichten: Detektoren, Zonen, Home Assistant (2026)',
    seoTitle: 'Frigate NVR 2026: Detektor, Zonen & Home Assistant',
    intro:
      'Frigate ist ein quelloffener Netzwerk-Videorekorder, der die KI-Objekterkennung vollständig auf Ihrer eigenen Hardware ausführt und jede Erkennung als Entität an Home Assistant übergibt. Dieser Leitfaden behandelt die Detektorwahl im Jahr 2026 — bei der Google Coral nicht mehr die Standardantwort ist — sowie Kamera-Stream-Einstellungen, eine lauffähige config.yml, Zonen gegen Fehlalarme, die Home-Assistant-Integration und die Neuerungen von Frigate 0.16 und 0.17.',
    metaDescription:
      'Frigate 0.17.2 erkennt Objekte lokal — ohne Cloud, ohne Abo. Frigate rät bei Neuinstallationen von Coral ab: Welcher Detektor stattdessen zu wählen ist.',
    twitterDescription:
      'Praxisleitfaden für den Frigate-NVR-Aufbau: Detektorwahl 2026, Kamera-Stream-Einstellungen, lauffähige config.yml, Zonen-Tuning und die Home-Assistant-Integration.',
    readTime: '16 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die ein selbst gehostetes KI-Kamerasystem mit Frigate aufbauen',
    primaryTerm: 'Frigate NVR einrichten',
    targetKeywords: [
      'frigate nvr einrichten',
      'frigate home assistant integration',
      'frigate detektor coral oder openvino',
      'frigate config yml beispiel',
      'frigate zonen fehlalarme',
    ],
    leadAnswerBlock:
      '**Frigate ist ein quelloffener NVR, der die KI-Objekterkennung lokal auf Ihren Kamerastreams ausführt und jede Erkennung als Entität an Home Assistant übergibt.** Seit Frigate 0.17.2 ist eine Intel-iGPU mit dem OpenVINO-Detektor — nicht eine Google Coral — der empfohlene Einstieg für einen Neuaufbau.',
    quickAnswerTop: {
      de: {
        question: 'Wie richtet man Frigate NVR mit Home Assistant ein?',
        answer:
          'Betreiben Sie Frigate in Docker mit einer config.yml, die für die Erkennung auf den niedrig aufgelösten Substream jeder Kamera und für die Aufzeichnung auf deren Hauptstream verweist. Wählen Sie einen Detektor, den Ihre Hardware unterstützt (OpenVINO auf einer Intel-iGPU, ONNX auf einer NVIDIA-GPU oder ein Hailo-8-Modul), und installieren Sie anschließend die Frigate-Integration in Home Assistant. Home Assistant benötigt zuvor die konfigurierte MQTT-Integration — genau dieser Schritt fehlt bei den meisten Ersteinrichtungen.',
        bullets: [
          'Frigate 0.17.2 ist die aktuelle stabile Version (28. Juni 2026)',
          'Erkennung auf 1280x720 mit 5 fps, Aufzeichnung des Hauptstreams mit 15 fps',
          'Frigate empfiehlt Google Coral für Neuinstallationen nicht mehr',
          'Intel Arc A750: rund 8 ms für YOLOv9-320; Intel UHD 730 iGPU: rund 14 ms',
          'Die Home-Assistant-Integration setzt die MQTT-Integration voraus',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Was Frigate leistet', anchor: 'what-frigate-is' },
      { label: 'Welchen Detektor kaufen', anchor: 'detector' },
      { label: 'Server-Hardware & RAM', anchor: 'server-hardware' },
      { label: 'Kamera-Stream-Einstellungen', anchor: 'cameras' },
      { label: 'Frigate installieren', anchor: 'install' },
      { label: 'Eine lauffähige config.yml', anchor: 'config' },
      { label: 'Zonen, Masken & Fehlalarme', anchor: 'zones' },
      { label: 'Home-Assistant-Integration', anchor: 'home-assistant' },
      { label: 'Suche, Gesichter & Kennzeichen', anchor: 'ai-features' },
      { label: 'Lohnt sich Frigate+?', anchor: 'frigate-plus' },
      { label: 'Kosten gegenüber Abo-Kameras', anchor: 'cost' },
      { label: 'Häufige Fehler', anchor: 'mistakes' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate ist ein quelloffener NVR, der die KI-Objekterkennung lokal auf RTSP-Kamerastreams ausführt und jede Erkennung per MQTT an Home Assistant meldet — ohne Cloud-Dienst und ohne Abonnement.' },
      { type: 'plain-terms', content: 'Eine übliche Smart-Kamera sendet das Video an einen Anbieter, der entscheidet, ob eine Person zu sehen war, und dafür monatlich abrechnet. Frigate erledigt diesen Schritt auf einem Rechner in Ihrem Haus: Das Video verlässt das Haus nicht, es fallen keine monatlichen Gebühren an, und jede Erkennung wird zu einem Ereignis, auf das Home Assistant reagieren kann.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        content:
          'Die Frigate-Dokumentation rät bei Neuaufbauten inzwischen von der Google Coral TPU ab — jenem Beschleuniger, zu dem die meisten Anleitungen weiterhin zuerst raten.',
        items: [
          'Frigate 0.17.2 (28. Juni 2026) ist die aktuelle stabile Version; 0.18.0 befindet sich seit dem 8. August 2026 in der Beta-Phase',
          'Zuerst der Detektor: Eine Intel-iGPU mit dem OpenVINO-Detektor ist der günstigste sinnvolle Einstieg; Hailo-8 oder eine NVIDIA-GPU skalieren weiter',
          'Coral ist jetzt die Rückfalloption, nicht der Standard — Frigate empfiehlt sie nur noch, wenn die Leistungsaufnahme die entscheidende Randbedingung ist',
          'Zwei Streams pro Kamera nutzen: 1280x720 mit 5 fps für die Erkennung, der Hauptstream in voller Auflösung mit 15 fps für die Aufzeichnung',
          'Zonen zusammen mit required_zones, loitering_time und inertia beseitigen Fehlalarme — nicht ein besseres Modell',
          'Die Home-Assistant-Integration benötigt eine zuvor konfigurierte MQTT-Integration, sonst entstehen keine Entitäten',
          'Die semantische Suche verlangt mindestens 8 GB RAM, für angenehmes Arbeiten 16 GB und eine GPU, sowie eine CPU mit AVX2',
          'Frigate+ kostet 50 $ pro Jahr (Abrechnung in USD) für bis zu 12 feinabgestimmte Modelle; Gesichts- und Kennzeichenerkennung funktionieren ohne Abo',
        ],
      },
      whatFrigateIs: {
        id: 'what-frigate-is',
        title: 'Was leistet Frigate, was ein gewöhnlicher NVR nicht leistet?',
        content:
          '**Frigate arbeitet zweistufig: Eine ressourcenschonende Bewegungserkennung sucht Bildbereiche, die eine genauere Prüfung lohnen, anschließend entscheidet ein echtes Objekterkennungsmodell, ob dort eine Person, ein Fahrzeug, ein Hund oder ein Paket zu sehen ist.** Ein herkömmlicher NVR löst bei Pixeländerungen aus — deshalb meldet er Scheinwerfer, Regen und bewegte Sträucher.',
        items: [
          '**Erst Bewegung, dann KI:** Die ressourcenschonende Bewegungserkennung bestimmt, *wo* der Detektor läuft. So deckt bereits ein kleiner Beschleuniger viele Kameras ab.',
          '**Objektbezogene Aufzeichnung:** Die Aufbewahrung richtet sich nach dem Erkannten, nicht nach einem durchgehenden 24/7-Puffer — der Speicher reicht dadurch deutlich weiter.',
          '**Restreaming über go2rtc:** Frigate ruft jede Kamera einmal ab und verteilt den Stream weiter, statt dass fünf Clients dieselbe Kamera gleichzeitig belasten.',
          '**MQTT-Ausgabe:** Jedes verfolgte Objekt, jeder Zoneneintritt und jede Objektzählung wird veröffentlicht — genau das ermöglicht Automationen in Home Assistant.',
          '**Review-Einträge:** Erkennungen werden getrennt in *Alerts* (worüber Sie informiert werden möchten) und *Detections* (protokolliert, aber ohne Meldung).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Frigate wählt mit einer günstigen Bewegungserkennung Bildbereiche aus und führt das Objekterkennungsmodell nur dort aus. Deshalb bedient ein einzelner kleiner Beschleuniger viele Kameras gleichzeitig.' },
        ],
        callouts: [
          { type: 'note', text: 'Die Trennung zwischen Alerts und Detections ist das nützlichste Konzept in Frigate. Alerts wecken Ihr Telefon, Detections bilden den durchsuchbaren Verlauf. Konfigurieren Sie beide getrennt.' },
        ],
      },
      detector: {
        id: 'detector',
        title: 'Welchen Detektor sollten Sie 2026 für Frigate kaufen?',
        content:
          '**Kaufen Sie einen Intel-Rechner mit iGPU und nutzen Sie den OpenVINO-Detektor, wenn Sie bei null anfangen; ein Hailo-8-Modul, wenn Sie die niedrigste Latenz pro Watt benötigen; den ONNX-Detektor auf einer NVIDIA-GPU, wenn der Rechner ohnehin eine besitzt.** Die Frigate-Dokumentation hält fest, dass Coral für Neuinstallationen nicht mehr empfohlen wird — außer wenn die Leistungsaufnahme ungewöhnlich streng begrenzt ist.',
        items: [
          'Nutzen Sie **OpenVINO**, wenn der Host eine Intel-CPU ab der 6. Generation besitzt — die iGPU ist bereits bezahlt und erfordert keine Zusatzhardware.',
          'Nutzen Sie **ONNX**, wenn im Rechner bereits eine NVIDIA- oder AMD-GPU steckt; Frigate erkennt die Plattform automatisch.',
          'Nutzen Sie **Hailo-8 / Hailo-8L**, wenn Sie Beschleuniger-Latenzen in einem M.2-Steckplatz bei geringer Leistungsaufnahme wünschen.',
          'Nutzen Sie **TensorRT** speziell auf NVIDIA-Jetson-Boards — siehe [den NVIDIA Jetson Orin Nano im Test für Smart-Home-KI](/de/smart-home/nvidia-jetson-orin-nano-smart-home-review).',
          'Nutzen Sie **edgetpu** (Coral) nur, wenn Watt die entscheidende Randbedingung sind und Sie eine alternde Modellauswahl akzeptieren.',
          'Verzichten Sie vollständig auf den **cpu**-Detektor — laut Frigate arbeitet OpenVINO im CPU-Modus effizienter als der dedizierte CPU-Detektor.',
        ],
        columns: ['Detektor', 'Hardware', 'Inferenz (veröffentlicht)'],
        rows: [
          { 'Detektor': 'openvino', 'Hardware': 'Intel Arc A750', 'Inferenz (veröffentlicht)': 'ca. 4 ms MobileNetV2 / ca. 8 ms YOLOv9-320' },
          { 'Detektor': 'openvino', 'Hardware': 'Intel NPU', 'Inferenz (veröffentlicht)': 'ca. 6 ms MobileNetV2 / ca. 11 ms YOLOv9-320' },
          { 'Detektor': 'openvino', 'Hardware': 'Intel UHD 730 iGPU', 'Inferenz (veröffentlicht)': 'ca. 10 ms MobileNetV2 / ca. 14 ms YOLOv9-tiny' },
          { 'Detektor': 'hailo8l', 'Hardware': 'Hailo-8', 'Inferenz (veröffentlicht)': 'ca. 6 ms SSD MobileNet / ca. 7 ms YOLOv6n' },
          { 'Detektor': 'hailo8l', 'Hardware': 'Hailo-8L', 'Inferenz (veröffentlicht)': 'ca. 10 ms SSD MobileNet / ca. 11 ms YOLOv6n' },
          { 'Detektor': 'onnx', 'Hardware': 'NVIDIA RTX 3070', 'Inferenz (veröffentlicht)': 'ca. 6–8 ms YOLOv9 tiny→small 320' },
          { 'Detektor': 'onnx', 'Hardware': 'NVIDIA RTX 3050', 'Inferenz (veröffentlicht)': 'ca. 8–10 ms YOLOv9 tiny→small 320' },
          { 'Detektor': 'onnx', 'Hardware': 'AMD Radeon 780M', 'Inferenz (veröffentlicht)': 'ca. 14 ms YOLOv9-tiny-320' },
          { 'Detektor': 'zmq', 'Hardware': 'Apple M3 Pro', 'Inferenz (veröffentlicht)': 'ca. 6 ms YOLOv9-tiny-320' },
        ],
        note: 'Die Werte sind die von Frigate veröffentlichten Detektorzahlen, keine PromptQuorum-Messungen. Frigate liefert zusätzlich die Detektortypen rknn (Rockchip-NPUs), memryx, synaptics, deepstack und degirum.',
        callouts: [
          { type: 'warning', text: 'Die meisten Frigate-Anleitungen beginnen weiterhin mit „Kaufen Sie eine Coral". Dieser Rat stammt aus der Zeit vor den OpenVINO-, Hailo- und ONNX-Arbeiten in 0.16 und 0.17 — die Hardware-Seite von Frigate widerspricht ihm für Neuaufbauten inzwischen ausdrücklich.' },
          { type: 'tip', text: 'Die Kamerakapazität einer Coral entspricht rund 1000 / inference_speed Bildern pro Sekunde, verteilt auf alle Kameras. Bei 5 fps Erkennung deckt ein Budget von 10 ms rechnerisch etwa 20 Kamerastreams ab — thermische Drosselung und USB-Leistungsgrenzen verringern diesen Wert.' },
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: 'Der Detektor ist der Chip, der die Frage „Ist das eine Person?" beantwortet. Dafür eignen sich die Grafikeinheit in einer Intel-CPU, eine dedizierte NVIDIA-Karte oder ein kleines M.2-KI-Modul. Der überall empfohlene USB-Stick (Google Coral) funktioniert weiterhin, ist aber nicht mehr der empfohlene Einstieg.' },
        ],
      },
      serverHardware: {
        id: 'server-hardware',
        title: 'Was benötigt der Frigate-Server selbst?',
        content:
          '**Ein kleiner Mini-PC mit Intel-N-Serie oder Core-i-Prozessor, 8–16 GB RAM, einer SSD für das Betriebssystem und einer separaten Festplatte für die Aufzeichnungen deckt ein typisches Haus mit vier bis acht Kameras ab.** Der Engpass ist selten die CPU — es sind der gemeinsame Speicher, die Schreiblast auf der SSD und die Frage, ob Sie zusätzlich die semantische Suche wünschen.',
        items: [
          '**Gemeinsamer Speicher (`shm`):** Der Standardwert von 128 MB reicht nur für etwa zwei Kameras mit 720p. Frigate rechnet mit rund 66,63 MB je Kamera mit 1280x720 samt Protokollen, acht solcher Kameras benötigen also etwa 253 MB.',
          '**`--shm-size` ausdrücklich setzen:** `--shm-size=512mb` ist für die meisten Aufbauten ein sicherer Wert; ein zu kleiner Wert äußert sich in ausfallenden Kameras, nicht in einer klaren Fehlermeldung.',
          '**Drei Einhängepunkte:** `/config` für YAML und Datenbank, `/media/frigate` für Clips, Aufzeichnungen und Exporte, `/tmp/cache` für laufende Segmente.',
          '**Aufzeichnungen auf eine Festplatte:** Dauerhaftes Schreiben verbraucht die Lebensdauer einer Consumer-SSD. Legen Sie `/media/frigate` auf eine Festplatte und halten Sie `/tmp/cache` auf schnellem Speicher.',
          '**RAM für KI-Zusatzfunktionen:** Die semantische Suche verlangt mindestens 8 GB sowie eine CPU mit AVX und AVX2; empfohlen sind 16 GB und eine GPU.',
        ],
        columns: ['Aufbau', 'Detektor', 'Geeignet für'],
        rows: [
          { 'Aufbau': 'Intel N100/N150 Mini-PC, 16 GB', 'Detektor': 'openvino (iGPU)', 'Geeignet für': '2–6 Kameras, ohne semantische Suche' },
          { 'Aufbau': 'Intel Core i5 Mini-PC, 32 GB', 'Detektor': 'openvino (iGPU)', 'Geeignet für': '6–12 Kameras plus semantische Suche' },
          { 'Aufbau': 'Beliebiger Host mit Hailo-8 M.2', 'Detektor': 'hailo8l', 'Geeignet für': 'Geringe Leistungsaufnahme, viele Kameras' },
          { 'Aufbau': 'Desktop ab RTX 3050', 'Detektor': 'onnx', 'Geeignet für': 'Frigate und ein lokales LLM auf einem Rechner' },
          { 'Aufbau': 'Raspberry Pi 5', 'Detektor': 'edgetpu / hailo8l', 'Geeignet für': '1–3 Kameras, enges Leistungsbudget' },
        ],
        note: 'Frigate unterstützt Docker auf nativem Debian, das Home-Assistant-Add-on, Kubernetes per Helm, Unraid, NAS-Geräte von Synology und QNAP, ESXi sowie macOS auf Apple Silicon. Unter Proxmox ist eine QEMU-VM zu verwenden — LXC wird ausdrücklich nicht unterstützt.',
        callouts: [
          { type: 'warning', text: 'Der Betrieb von Frigate in einem Proxmox-LXC-Container wird nicht unterstützt. Das Durchreichen einer Coral oder iGPU scheint zunächst zu funktionieren und scheitert dann auf eine Weise, die niemand für Sie diagnostizieren kann. Verwenden Sie eine VM.' },
          { type: 'practice', text: 'Wenn ein Rechner Frigate, Home Assistant und ein lokales LLM tragen soll, dimensionieren Sie ihn zuerst nach dem LLM — siehe [die Mini-PC-Empfehlungen für Home Assistant und lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).' },
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Wie sollten Sie Ihre Kameras für Frigate konfigurieren?',
        content:
          '**Konfigurieren Sie zwei Streams direkt in der Kamera-Firmware: einen Substream mit 1280x720 und 5 fps für die Erkennung sowie den Hauptstream in nativer Auflösung mit 15 fps für die Aufzeichnung — beide in H.264 und mit gleichem Seitenverhältnis.** Das Erkennungsmodell von Frigate arbeitet mit einer Eingabe von 320x320; ein 4K-Erkennungsstream bringt daher keinen Gewinn und kostet erheblich Dekodierleistung.',
        numberedItems: [
          'Stellen Sie den Substream in der Kamera-Firmware auf 1280x720, 5 fps, H.264 und ein I-Frame-Intervall von 5 (ein Keyframe pro Sekunde).',
          'Stellen Sie den Hauptstream auf die native Auflösung der Kamera — bei einem verbreiteten 4-MP-Sensor 2688x1520 — mit 15 fps, H.264 und I-Frame-Intervall 30.',
          'Halten Sie beide Streams im selben Seitenverhältnis (16:9 zu 16:9), damit Begrenzungsrahmen sauber zwischen Erkennung und Aufzeichnung übertragbar bleiben.',
          'Weisen Sie in Frigate der Rolle `detect` den Substream und der Rolle `record` den Hauptstream zu.',
          'Erhöhen Sie die Erkennung nur bei tatsächlich schnellen Objekten auf 10 fps, etwa einem Fahrzeug, das eine schmale Einfahrtansicht quert.',
        ],
        items: [
          'Verwenden Sie H.264 statt H.265 — die Browserunterstützung für H.265 ist eingeschränkt, und die Live-Ansicht leidet zuerst.',
          'Ändern Sie die Bildrate in der Kamera, nie in Frigate: Softwareseitiges Heruntertakten kostet CPU-Leistung ohne Nutzen.',
          'Bevorzugen Sie kabelgebundenes PoE gegenüber WLAN; ein abbrechender Substream zeigt sich als verpasste Erkennung, nicht als offensichtlicher Ausfall.',
          'Kamerahardware mit sauber verfügbarem RTSP und ONVIF finden Sie im [Kaufratgeber für lokale Sicherheitskameras für Frigate-Aufbauten](/de/smart-home/best-local-security-cameras-2027).',
        ],
        callouts: [
          { type: 'tip', text: 'Werden Objekte am Ende der Einfahrt nie erkannt, liegt es meist an der Auflösung und nicht am Modell: Bei 1280x720, skaliert auf eine Eingabe von 320x320, besteht eine entfernte Person aus wenigen Pixeln. Teilen Sie diese Ansicht auf eine zweite Kamera oder einen gezoomten Stream auf, statt die Erkennungsauflösung generell zu erhöhen.' },
          { type: 'note', text: 'Frigate ruft jede Kamera einmal ab und bedient alle weiteren Clients aus dieser Kopie. Richten Sie Home Assistant deshalb auf Frigate aus und nicht direkt auf die Kamera.' },
        ],
      },
      install: {
        id: 'install',
        title: 'Wie installieren Sie Frigate?',
        content:
          '**Nutzen Sie Docker Compose auf einem nativen Debian-Host, wenn Sie den unterstützten Weg möchten; nutzen Sie das Home-Assistant-Add-on, wenn Sie weniger Kontrolle gegen eine Installation per Klick eintauschen.** Beide benötigen dieselbe config.yml und denselben MQTT-Broker.',
        numberedItems: [
          'Installieren Sie Docker auf einem Debian-basierten Host und legen Sie Verzeichnisse für `/config` und `/media/frigate` an.',
          'Schreiben Sie eine minimale `config.yml` mit einer Kamera und ohne Detektorblock, damit Frigate mit den Standardwerten startet und Sie den Stream prüfen können.',
          'Starten Sie den Container mit ausdrücklichem `shm_size` und eingebundenem `/dev/dri` (Intel), GPU-Runtime (NVIDIA) oder `/dev/hailo0` (Hailo).',
          'Öffnen Sie die Weboberfläche und prüfen Sie das Kamerabild, die Erkennungs-FPS und die auf der Systemseite angezeigte Inferenzzeit.',
          'Ergänzen Sie den echten `detectors`-Block, starten Sie neu und prüfen Sie, ob die Inferenzzeit auf den für Ihre Hardware veröffentlichten Wert fällt.',
          'Konfigurieren Sie den MQTT-Broker in der `config.yml` und fügen Sie anschließend die Frigate-Integration in Home Assistant hinzu.',
        ],
        codeBlock: `services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:0.17.2
    restart: unless-stopped
    privileged: true
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128   # Intel iGPU (OpenVINO)
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config:/config
      - /srv/frigate/media:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "8971:8971"   # authenticated web UI
      - "8554:8554"   # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'warning', text: 'Fixieren Sie das Image-Tag auf eine konkrete Version statt auf `stable`. Die Konfigurationsschemata von Frigate ändern sich zwischen Minor-Versionen, und ein unbeaufsichtigtes `docker compose pull` an der Grenze von 0.17 zu 0.18 kann einen Container hinterlassen, der Ihre bestehende YAML-Datei verweigert.' },
          { type: 'practice', text: 'Nehmen Sie eine Kamera in Betrieb, bevor Sie die übrigen ergänzen. Fast jeder „Frigate ist kaputt"-Thread endet bei der Substream-URL einer einzelnen Kamera, und das lässt sich mit nur einem Eintrag in der Konfiguration wesentlich leichter erkennen.' },
        ],
      },
      config: {
        id: 'config',
        title: 'Wie sieht eine lauffähige Frigate-config.yml aus?',
        content:
          '**Eine lauffähige Konfiguration besteht aus vier Blöcken: `mqtt`, `detectors`, `cameras` mit zwei Stream-Rollen sowie kamerabezogenen `zones`- und `review`-Filtern.** Alles Übrige besitzt Standardwerte, die am ersten Tag ausreichen.',
        codeBlock: `mqtt:
  host: 192.168.1.10
  user: frigate
  password: "{FRIGATE_MQTT_PASSWORD}"

detectors:
  ov:
    type: openvino
    device: GPU

cameras:
  driveway:
    ffmpeg:
      inputs:
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=1
          roles: [detect]
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=0
          roles: [record]
    detect:
      width: 1280
      height: 720
      fps: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: motion
      alerts:
        retain:
          days: 30
    snapshots:
      enabled: true
    motion:
      mask:
        - 0,0,0.35,0,0.35,0.12,0,0.12   # timestamp overlay
    zones:
      driveway_apron:
        coordinates: 0.14,0.98,0.62,0.55,0.95,0.72,0.88,1.0
        loitering_time: 4
        inertia: 3
    review:
      alerts:
        labels: [person, car]
        required_zones: [driveway_apron]
      detections:
        labels: [person, car, dog, cat]`,
        codeLanguage: 'yaml',
        items: [
          '`subtype=1` und `subtype=0` sind die Dahua-/Amcrest-Konvention für Sub- und Hauptstream; Reolink verwendet `h264Preview_01_sub` und `h264Preview_01_main`.',
          '`retain.mode: motion` bewahrt durchgehendes Material nur dort auf, wo Bewegung stattfand — das ist der wichtigste Hebel beim Speicherplatz.',
          '`review.alerts.required_zones` verhindert, dass ein Fahrzeug auf der öffentlichen Straße Ihr Telefon weckt.',
          'Frigate 0.17 hat eine vollständige Konfiguration über die Oberfläche ergänzt, sodass das meiste davon inzwischen im Web-Interface statt von Hand bearbeitet werden kann.',
        ],
        callouts: [
          { type: 'tip', text: 'Frigate 0.17 hat außerdem Profile eingeführt — benannte Konfigurationsüberschreibungen, zwischen denen Sie ohne Neustart des Containers wechseln können. Ein Profil „Gäste im Haus", das required_zones erweitert, ist praktischer, als zweimal pro Woche YAML zu bearbeiten.' },
        ],
      },
      zones: {
        id: 'zones',
        title: 'Wie verhindern Zonen und Masken Fehlalarme?',
        content:
          '**Zonen filtern, welche Erkennungen relevant sind; Bewegungsmasken verhindern, dass Frigate einen Bereich überhaupt betrachtet. Nutzen Sie eine Zone, wenn das Objekt echt, aber unwichtig ist, und eine Maske, wenn die Bewegung gar kein Objekt ist.** Die Anwesenheit in einer Zone wird am unteren Mittelpunkt des Begrenzungsrahmens bewertet — eine Zone muss deshalb den Boden abdecken, auf dem Füße oder Räder stehen, nicht die Höhe der Köpfe.',
        items: [
          '**Bewegungsmaske:** Für Zeitstempel-Einblendungen, einen unruhigen Baum, eine Fahne. Frigate führt dort nie eine Erkennung aus. Geeignet für Bewegung, die nie ein relevantes Objekt ist.',
          '**Objektfiltermaske:** Unterdrückt eine bestimmte Bezeichnung in einem bestimmten Bereich — etwa das dauerhaft als `car` erkannte Nachbarfahrzeug.',
          '**Zone plus `required_zones`:** Das Objekt ist tatsächlich eine Person, aber eine Person auf dem Gehweg ist kein Alarm. Das ist die richtige Lösung für Fußgängerverkehr.',
          '**`loitering_time`:** Verlangt, dass das Objekt N Sekunden in der Zone bleibt — ein Paketbote, der den Weg heraufkommt, erfüllt das, ein Vorübergehender nicht.',
          '**`inertia`:** Verlangt, dass das Objekt N aufeinanderfolgende Bilder (Standard 3) in der Zone bleibt, damit Zittern des Begrenzungsrahmens an der Grenze keinen Alarm auslöst.',
          '**Geschwindigkeitsschätzung:** Eine Zone mit genau vier bodenparallelen Punkten und einer `distances`-Liste liefert einen Geschwindigkeitswert in der Oberfläche und über MQTT.',
        ],
        promptExamples: [
          { label: '❌ Schlechter Ansatz', text: 'Alarme für jede Person, auf jeder Kamera, rund um die Uhr — und nach zwei Tagen abgeschaltete Benachrichtigungen, weil der Gehweg davor vierzig Alarme pro Nacht erzeugt.' },
          { label: '✅ Guter Ansatz', text: 'Eine Zone driveway_apron, die nur den Boden innerhalb der Grundstücksgrenze abdeckt, review.alerts.required_zones auf diese Zone gesetzt, loitering_time: 4, und Detections (ohne Benachrichtigung) für alles Übrige eingeschaltet, damit der durchsuchbare Verlauf vollständig bleibt.' },
        ],
        callouts: [
          { type: 'warning', text: 'Eine Zone über die obere Bildhälfte zu legen, bringt nichts. Die Anwesenheit wird am unteren Mittelpunkt des Begrenzungsrahmens beurteilt — zeichnen Sie Zonen auf der Bodenebene.' },
          { type: 'insight', text: 'Fehlalarme sind fast nie ein Problem der Modellqualität. In einer typischen Wohninstallation entfernen Zonen und required_zones mehr Störmeldungen, als jede Detektor-Aufrüstung es könnte.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'In Frigate verhindert eine Bewegungsmaske die Erkennung in einem Bereich vollständig, während eine Zone zusammen mit required_zones die Erkennung normal laufen lässt und lediglich einschränkt, welche Erkennungen einen Alarm auslösen dürfen.' },
        ],
      },
      homeAssistant: {
        id: 'home-assistant',
        title: 'Wie verbinden Sie Frigate mit Home Assistant?',
        content:
          '**Konfigurieren Sie zuerst die MQTT-Integration in Home Assistant, richten Sie Frigate auf denselben Broker aus und installieren Sie erst dann die Frigate-Integration — sie erzeugt je Kamera und je Zone Entitäten der Typen camera, image, sensor, switch und binary_sensor.** Ohne vorher konfiguriertes MQTT installiert sich die Integration und erzeugt nichts.',
        numberedItems: [
          'Installieren Sie einen MQTT-Broker (üblicherweise das Mosquitto-Add-on) und fügen Sie die MQTT-Integration in Home Assistant hinzu.',
          'Setzen Sie den `mqtt`-Block in der config.yml von Frigate auf denselben Broker, mit eigenem Benutzernamen und Passwort.',
          'Installieren Sie die Frigate-Integration über HACS oder als Kern-Integration und richten Sie sie auf den Frigate-Host aus.',
          'Aktivieren Sie die Media-Source-Integration, damit Aufzeichnungen und Schnappschüsse im Medienbrowser erscheinen.',
          'Bauen Sie Automationen auf den zonenbezogenen Binärsensoren auf, nicht auf den kamerabezogenen.',
        ],
        itemHeadings: true,
        columns: ['Entitätstyp', 'Was Sie erhalten', 'Wofür Sie ihn nutzen'],
        rows: [
          { 'Entitätstyp': 'binary_sensor', 'Was Sie erhalten': 'Bewegung und Objektanwesenheit je Kamera, je Zone und je Objektbezeichnung', 'Wofür Sie ihn nutzen': 'Der Auslöser für praktisch jede Automation — eine Person in einer bestimmten Zone ist ein weitaus besserer Auslöser als Bewegung an einer Kamera' },
          { 'Entitätstyp': 'camera', 'Was Sie erhalten': 'Live-Stream-Entität aus dem Restream von Frigate über Port 8554', 'Wofür Sie ihn nutzen': 'Dashboard-Karten und Casting; Home Assistant hierauf statt auf die Kamera zu richten, vermeidet eine zweite Verbindung zur Kamera' },
          { 'Entitätstyp': 'image', 'Was Sie erhalten': 'Der aktuellste Schnappschuss des zuletzt erkannten Objekts je Kamera', 'Wofür Sie ihn nutzen': 'Ein Bild an eine mobile Benachrichtigung anhängen, ohne die Snapshot-API von Hand aufzurufen' },
          { 'Entitätstyp': 'sensor', 'Was Sie erhalten': 'Objektzählungen je Zone und je Kamera sowie Leistungswerte von Detektor und Prozessen', 'Wofür Sie ihn nutzen': 'Anwesenheitslogik und ein Systemzustands-Dashboard — die Inferenzzeit hier ist Ihr Frühwarnsignal, dass ein Detektor auf die CPU zurückgefallen ist' },
          { 'Entitätstyp': 'switch', 'Was Sie erhalten': 'Schalter für Erkennung, Aufzeichnung und Schnappschüsse je Kamera', 'Wofür Sie ihn nutzen': 'Datenschutz-Automationen, etwa das Abschalten der Innenraumerkennung, sobald die Anwesenheitserkennung meldet, dass jemand zu Hause ist' },
        ],
        note: 'Die Integration stellt außerdem die Aktionen camera.turn_on und camera.turn_off bereit, unterstützt mehrere Frigate-Server mit getrennten MQTT-Konfigurationen und erlaubt es, die RTSP-URL-Vorlage per Jinja2 zu überschreiben.',
        callouts: [
          { type: 'warning', text: 'Wenn sich die Frigate-Integration installiert, aber keine Entitäten erscheinen, liegt es fast immer an MQTT: Entweder wurde die Integration in Home Assistant nie hinzugefügt, oder Frigate und Home Assistant sprechen mit zwei verschiedenen Brokern.' },
          { type: 'practice', text: 'Lösen Sie Automationen über den Zonen-Binärsensor plus eine Bedingung auf die Objektbezeichnung aus. Ein reiner Kamera-Bewegungssensor löst bei Regen aus, `binary_sensor.driveway_driveway_apron_person` nicht.' },
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Was bringen semantische Suche, Gesichts- und Kennzeichenerkennung?',
        content:
          '**Die semantische Suche erlaubt Eingaben wie „schwarzer Transporter nachts in der Einfahrt" und liefert passende Clips; Gesichts- und Kennzeichenerkennung machen aus anonymen Erkennungen benannte — und beide funktionieren ohne Frigate+-Abonnement.** Diese Funktionen kosten RAM, nicht Geld.',
        items: [
          '**Semantische Suche:** benötigt mindestens 8 GB RAM, eine CPU mit AVX und AVX2 sowie idealerweise 16 GB und eine dedizierte GPU. Auf einem Raspberry Pi läuft sie nicht sinnvoll.',
          '**Embedding-Modell:** Jina CLIP V1 ist der Standard; die Variante `small` ist quantisiert und läuft brauchbar auf der CPU, die Variante `large` nutzt eine vorhandene GPU.',
          '**Jina CLIP V2** unterstützt 89 Sprachen statt nur Englisch, ist laut Frigate aber nur rund 3 % besser bei deutlich mehr RAM-Bedarf und Inferenzzeit; CPU-Inferenz wird nicht empfohlen.',
          '**Die Neuindizierung ist manuell:** Das Aktivieren der semantischen Suche indiziert bestehende Objekte nicht. Nutzen Sie die Schaltfläche „Reindex" in der Oberfläche oder setzen Sie `reindex: True` und rechnen Sie währenddessen mit hoher CPU-Last.',
          '**Gesichts- und Kennzeichenerkennung** laufen lokal und benötigen kein Abonnement, auch wenn Frigate+-Modelle die Effizienz verbessern.',
          '**GenAI-Beschreibungen:** 0.17 hat Unterstützung für mehrere Anbieter und eine eigene llama.cpp-Anbindung ergänzt, sodass Beschreibungen von einem Modell auf Ihrer eigenen Hardware stammen können — siehe [lokale LLM-Automationen in Home Assistant](/de/smart-home/ai-automations-local-llm).',
        ],
        callouts: [
          { type: 'tip', text: 'Schalten Sie die semantische Suche ein, bevor Sie ein Jahr an Clips angesammelt haben. Die Neuindizierung von 200.000 verfolgten Objekten auf einem Mini-PC ohne GPU ist eine Aufgabe über Nacht.' },
          { type: 'note', text: 'Frigate 0.16 hat Auslöser für die semantische Suche ergänzt — eine Aktion startet, sobald ein verfolgtes Objekt zu einem gespeicherten Bild oder einer Beschreibung passt. Das ist die Brücke zwischen „mein Material durchsuchen" und „auf dessen Bedeutung automatisieren".' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Lohnen sich 50 $ pro Jahr für Frigate+?',
        content:
          '**Frigate+ lohnt sich, sobald Sie einen konkreten, wiederkehrenden Fehlalarm haben, den das Standardmodell nicht behebt — andernfalls genügen die kostenfreien Modelle und gute Zonen.** Es kostet 50 $ pro Jahr (Abrechnung in USD) und enthält bis zu 12 feinabgestimmte Modelle jährlich, weitere Feinabstimmungen kosten je 5 $.',
        decisionBlock: {
          title: 'Frigate+ oder Standardmodelle?',
          localIf: [
            'Ein bestimmtes Objekt wird auf Ihrem Grundstück wiederholt falsch klassifiziert',
            'Sie haben ungewöhnliche Kamerawinkel, mit denen das Standardmodell schlecht zurechtkommt',
            'Sie möchten KI-vorgeschlagene Bezeichnungen, um eigene Uploads zu beschleunigen',
            'Sie möchten die Weiterentwicklung des Open-Source-Projekts finanzieren',
          ],
          cloudIf: [
            'Ihre Fehlalarme stammen vom Gehwegverkehr — das lösen Zonen kostenlos',
            'Sie benötigen Bezeichnungen außerhalb der Frigate-Liste; eigene Bezeichnungen sind noch nicht verfügbar',
            'Sie betreiben nur ein bis zwei Kameras mit einfachen Blickwinkeln',
          ],
          quick: [
            'Zuerst die Zonen korrigieren, dann nach zwei Wochen neu bewerten',
            'Wenn Alarme dann noch bei echten Objekten falsch liegen, abonnieren',
            'Trainierte Modelle bleiben nach einer Kündigung herunterladbar',
          ],
        },
        items: [
          'Das Frigate+-Basismodell wurde auf 2026.0 aktualisiert, basiert auf YOLOv9 und enthält neue Kandidatenbezeichnungen wie `lawnmower` und `heron`.',
          'Beliebige eigene Bezeichnungen sind noch nicht möglich — das Training beschränkt sich auf die von Frigate unterstützte Liste.',
          'Gesichts- und Kennzeichenerkennung setzen kein Abonnement voraus.',
        ],
        callouts: [
          { type: 'insight', text: 'Vor dem Feinschliff der Zonen zu abonnieren, ist der häufigste Weg, 50 $ auszugeben und keine Verbesserung zu sehen. Ein feinabgestimmtes Modell macht korrekte Erkennungen zuverlässiger; es sorgt nicht dafür, dass ein korrekt erkannter Fußgänger aufhört, ein Fußgänger zu sein.' },
        ],
      },
      cost: {
        id: 'cost',
        title: 'Wie schneidet Frigate bei den Kosten gegenüber Abo-Kameras ab?',
        content:
          '**Frigate wandelt eine laufende Cloud-Gebühr je Kamera in einmalige Hardwarekosten um, die nicht mit der Kameraanzahl steigen.** Ab zwei Kameras liegt der Break-even meist innerhalb des ersten Jahres.',
        columns: ['Aspekt', 'Cloud-Kameradienst', 'Frigate'],
        rows: [
          { 'Aspekt': 'Laufende Kosten', 'Cloud-Kameradienst': 'Monatlich, oft je Kamera', 'Frigate': 'Keine' },
          { 'Aspekt': 'Anschaffungskosten', 'Cloud-Kameradienst': 'Nur die Kamera', 'Frigate': 'Host, Detektor, Speicher' },
          { 'Aspekt': 'KI-Erkennung', 'Cloud-Kameradienst': 'Anbieter-Cloud', 'Frigate': 'Lokal (OpenVINO/Hailo/ONNX)' },
          { 'Aspekt': 'Ort des Materials', 'Cloud-Kameradienst': 'Rechenzentrum des Anbieters', 'Frigate': 'Ihre Festplatte' },
          { 'Aspekt': 'Internetausfall', 'Cloud-Kameradienst': 'Eingeschränkt oder tot', 'Frigate': 'Voll funktionsfähig im LAN' },
          { 'Aspekt': 'Risiko Funktionswegfall', 'Cloud-Kameradienst': 'Anbieter kann Tarife ändern', 'Frigate': 'Ihre Version läuft weiter' },
        ],
        note: 'Eine zusätzliche Kamera in Frigate kostet die Kamera. Eine zusätzliche Kamera in einem Abodienst kostet meist die Kamera plus eine weitere Position auf der Rechnung — hier vergrößert sich der Abstand. Siehe auch [ein Smart Home ohne Abonnements betreiben](/de/smart-home/smart-home-without-subscriptions).',
        callouts: [
          { type: 'note', text: 'Rechnen Sie den Strom ehrlich mit: Ein dauerhaft laufender Mini-PC samt Festplatten liegt bei etwa 15–30 W. Über fünf Jahre ist das reales Geld, bleibt aber deutlich unter den meisten Mehrkamera-Cloud-Tarifen.' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Häufige Fehler beim Einrichten von Frigate',
        content:
          '**Fünf Fehler verursachen die meisten gescheiterten Frigate-Aufbauten, und nur einer davon betrifft die Hardware.**',
        items: [
          '**Erkennung auf dem Hauptstream:** Die Rolle `detect` auf einen 4K-Stream zu richten, vervielfacht die Dekodierkosten ohne jeden Genauigkeitsgewinn, weil die Modelleingabe 320x320 beträgt. Erkennen Sie stets auf dem Substream und zeichnen Sie auf dem Hauptstream auf.',
          '**`shm_size` auf dem Standardwert belassen:** 128 MB decken rund zwei 720p-Kameras ab. Weitere Kameras fallen zeitweise aus, ohne erkennbare Fehlermeldung. Setzen Sie `--shm-size=512mb` und lassen Sie es dabei.',
          '**Die Home-Assistant-Integration vor MQTT installieren:** Die Integration installiert sich sauber und erzeugt nichts. Konfigurieren Sie zuerst die MQTT-Integration in Home Assistant und den `mqtt`-Block in Frigate auf denselben Broker.',
          '**Fehlalarme durch einen Detektorwechsel lösen wollen:** Ein Fußgänger auf dem Gehweg ist eine korrekte Erkennung. Die Lösung ist eine Zone mit `required_zones` und `loitering_time`, nicht ein schnellerer Beschleuniger oder ein kostenpflichtiges Modell.',
          '**Auf die SSD des Betriebssystems aufzeichnen:** Dauerhafte Videoschreibvorgänge verbrauchen die Lebensdauer einer Consumer-SSD rasch. Legen Sie `/media/frigate` auf eine Festplatte, halten Sie `/tmp/cache` schnell und setzen Sie `retain.mode: motion`.',
          '**Betrieb in einem Proxmox-LXC:** Das Durchreichen von Geräten scheint zu funktionieren und bricht dann auf nicht unterstützte, nicht diagnostizierbare Weise. Verwenden Sie eine QEMU-VM.',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit: Was sollten Sie tatsächlich bauen?',
        content:
          '**Kaufen Sie einen Intel-Mini-PC mit 16 GB RAM, betreiben Sie den OpenVINO-Detektor auf dessen iGPU, verwenden Sie PoE-Kameras mit einem Substream in 720p und 5 fps, und investieren Sie die erste Woche in Zonen statt in Hardware.** Dieser Aufbau trägt ein normales Haus und lässt Raum, später ein Hailo-8 zu ergänzen, wenn die Kameraanzahl wächst.',
        items: [
          'Nutzen Sie **OpenVINO auf einer Intel-iGPU**, wenn Sie bei null beginnen — geringste Kosten, keine Zusatzhardware, reichlich Reserve für 2–6 Kameras.',
          'Nutzen Sie **ein Hailo-8-M.2-Modul**, wenn Sie über acht Kameras hinausgehen oder die Leistungsaufnahme zählt.',
          'Nutzen Sie **ONNX auf einer vorhandenen NVIDIA-GPU**, wenn der Rechner bereits eine besitzt — besonders, wenn dort auch ein lokales LLM läuft.',
          'Nutzen Sie **eine Coral** nur, wenn Watt die harte Randbedingung sind und Sie akzeptieren, dass dies nicht mehr der empfohlene Weg ist.',
          'Verzichten Sie auf den **cpu**-Detektor; OpenVINO im CPU-Modus ist die bessere Rückfalloption.',
          'Im Zweifel mit einem Intel-N150-Mini-PC und zwei Kameras beginnen, die Zonen sauber einstellen und dann skalieren.',
        ],
        callouts: [
          { type: 'practice', text: 'Die Budgetreihenfolge, die tatsächlich funktioniert: zuerst Kameras und PoE-Switch, dann der Host, dann der Speicher, und ein Beschleuniger erst, wenn die Werte auf der Systemseite es verlangen. Den Beschleuniger zuerst zu kaufen, ist die klassische Umkehrung.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was ist Frigate NVR?', a: 'Frigate ist ein quelloffener Netzwerk-Videorekorder, der die KI-Objekterkennung lokal auf IP-Kamerastreams mit OpenCV und TensorFlow ausführt. Er zeichnet Clips anhand des Erkannten auf statt anhand roher Bewegung und veröffentlicht jede Erkennung per MQTT, sodass Home Assistant darauf reagieren kann. Für die Kernsoftware gibt es weder einen Cloud-Dienst noch ein Abonnement.' },
          { q: 'Brauche ich 2026 noch eine Google Coral TPU für Frigate?', a: 'Nein. Die Hardware-Dokumentation von Frigate hält fest, dass Coral für Neuinstallationen nicht mehr empfohlen wird — außer wenn die Leistungsaufnahme ungewöhnlich streng begrenzt ist. Für einen Neuaufbau sind der OpenVINO-Detektor auf einer Intel-iGPU, ein Hailo-8-Modul oder der ONNX-Detektor auf einer vorhandenen NVIDIA-GPU die empfohlenen Wege.' },
          { q: 'Welche Frigate-Version sollte ich betreiben?', a: 'Frigate 0.17.2, veröffentlicht am 28. Juni 2026, ist die aktuelle stabile Version. Version 0.18.0 befindet sich seit Juli 2026 in der Beta-Phase — die dritte Beta erschien am 8. August 2026 —, betreiben Sie 0.18 also nur, wenn Sie mit Konfigurationsänderungen zwischen Minor-Versionen umgehen möchten.' },
          { q: 'Wie viel RAM benötigt Frigate?', a: 'Objekterkennung und Aufzeichnung laufen in 8 GB bequem. Die semantische Suche hebt diese Grenze an: Frigate nennt 8 GB als Minimum, 16 GB oder mehr plus eine dedizierte GPU als Empfehlung und setzt eine CPU mit AVX- und AVX2-Befehlssatz voraus.' },
          { q: 'Warum meldet Frigate ständig Personen, die an meinem Haus vorbeigehen?', a: 'Weil das korrekte Erkennungen sind. Zeichnen Sie eine Zone, die nur den Boden innerhalb Ihres Grundstücks abdeckt, setzen Sie review.alerts.required_zones auf diese Zone und ergänzen Sie loitering_time, damit ein Vorübergehender erst stehen bleiben muss. Die Anwesenheit wird am unteren Mittelpunkt des Begrenzungsrahmens beurteilt — die Zone muss also die Bodenebene abdecken.' },
          { q: 'Funktioniert Frigate ohne Internetverbindung?', a: 'Ja. Erkennung, Aufzeichnung, MQTT und Home-Assistant-Automationen laufen vollständig im LAN. Nur der Fernzugriff von außerhalb des Hauses und optionale cloudbasierte GenAI-Anbieter benötigen eine Verbindung — und 0.17 hat eine llama.cpp-Anbindung ergänzt, sodass auch Beschreibungen lokal entstehen können.' },
          { q: 'Was ist der Unterschied zwischen einer Zone und einer Maske in Frigate?', a: 'Eine Bewegungsmaske verhindert, dass Frigate in diesem Bereich überhaupt eine Erkennung ausführt — passend für Zeitstempel-Einblendungen und dauerhaft bewegtes Laub. Eine Zone lässt die Erkennung normal laufen und schränkt über required_zones lediglich ein, welche Erkennungen einen Alarm auslösen dürfen. Maske für Nicht-Objekte, Zone für echte Objekte, die Sie nicht interessieren.' },
          { q: 'Wie viele Kameras schafft ein Frigate-Server?', a: 'Das hängt eher von der Inferenzzeit als direkt von der Kameraanzahl ab — nutzbare Erkennungen pro Sekunde entsprechen etwa 1000 geteilt durch die Inferenzzeit in Millisekunden, verteilt auf alle Kameras. Bei 5 fps Erkennung je Kamera und einem 8-ms-Detektor wie einer Intel Arc A750 auf YOLOv9-320 bleibt für eine typische Wohninstallation erhebliche Reserve.' },
          { q: 'Brauche ich Frigate+ für Gesichts- oder Kennzeichenerkennung?', a: 'Nein. Gesichts- und Kennzeichenerkennung laufen lokal ohne Abonnement, auch wenn Frigate+-Modelle die Effizienz verbessern können. Frigate+ kostet 50 $ pro Jahr und enthält bis zu 12 feinabgestimmte Modelle, weitere Feinabstimmungen je 5 $ — sinnvoll bei wiederholter Fehlklassifizierung, nicht bei Gehwegverkehr.' },
          { q: 'Kann ich Frigate in einem Proxmox-LXC-Container betreiben?', a: 'Nein — Proxmox LXC wird ausdrücklich nicht unterstützt. Verwenden Sie stattdessen eine QEMU-VM. Das Durchreichen einer iGPU, einer Coral oder eines Hailo-Moduls kann in einem LXC zunächst funktionieren und dann auf eine nicht unterstützbare Weise scheitern.' },
          { q: 'Muss ich bei der Verwendung von Frigate die DSGVO beachten?', a: 'Ja, sobald die Kamera über Ihr eigenes Grundstück hinaus aufzeichnet. Rein private Videoüberwachung des eigenen Wohnbereichs fällt unter die Haushaltsausnahme nach DSGVO-Artikel 2 Absatz 2 Buchstabe c; sobald Gehweg, Straße oder Nachbargrundstück im Bild sind, greift diese Ausnahme nicht mehr, und Sie benötigen eine Rechtsgrundlage nach Artikel 6 sowie einen Hinweis nach Artikel 13. Dass Frigate ausschließlich lokal verarbeitet, erfüllt die Datenminimierung nach Artikel 5 und vermeidet Drittlandübermittlungen nach Artikel 44 — es ersetzt aber keine sachgerechte Ausrichtung der Kamera. Nutzen Sie Bewegungsmasken, um fremde Bereiche zu schwärzen, und setzen Sie die Aufbewahrungsfristen kurz; die BSI-Grundschutz-Kataloge geben zusätzliche Anhaltspunkte für die Absicherung des Aufzeichnungssystems selbst.' },
          { q: 'Ist Frigate für den deutschen Mittelstand geeignet?', a: 'Ja, für Werkstätten, Lagerflächen und Betriebshöfe ist Frigate eine tragfähige Alternative zu abobasierten Systemen, weil das Videomaterial das Betriebsnetz nicht verlässt und die Kameraanzahl keine laufenden Kosten erzeugt. Für den betrieblichen Einsatz sind zwei Punkte zusätzlich zu klären: Die Videoüberwachung von Arbeitsplätzen ist nach § 26 BDSG mitbestimmungspflichtig und mit dem Betriebsrat abzustimmen, und der Aufzeichnungsserver sollte nach BSI-Grundschutz in einem eigenen Netzsegment mit eigenen Zugangsdaten betrieben werden. Ein Mini-PC mit Intel-iGPU deckt typische Betriebsgrößen im DACH-Raum ab.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Verstehen, warum lokale KI-Kameras Cloud-Kameras beim Datenschutz überlegen sind](/de/smart-home/local-ai-security-camera) — die Begründung für lokale Erkennung vor den Aufbaudetails',
          '[Lokale Sicherheitskameras mit bestätigtem RTSP und ONVIF vergleichen](/de/smart-home/best-local-security-cameras-2027) — welche Kameras Frigate sauber beliefern',
          '[Mini-PCs betrachten, die Home Assistant und lokale KI auf einem Gerät ausführen](/de/smart-home/best-mini-pc-home-assistant-local-ai) — passend dimensionierte Hosts für einen Frigate-Aufbau',
          '[Die Hardware-Anforderungen für ein vollständig lokales Smart Home prüfen](/de/smart-home/best-hardware-for-local-smart-home) — Beschleuniger, Speicher und Netzwerk',
          '[Den Einstieg in Home Assistant nachvollziehen](/de/smart-home/home-assistant-getting-started) — die Voraussetzung, wenn Sie damit neu sind',
          '[Radar-Anwesenheitserkennung für Räume ohne Kamera erkunden](/de/smart-home/radar-presence-sensing-no-camera) — die kamerafreie Alternative im Innenbereich',
          '[Nachlesen, wie Sie Ollama für ein lokales LLM auf demselben Rechner installieren](/de/local-llms/how-to-install-ollama) — clusterübergreifend: lokale GenAI-Beschreibungen für Frigate-Ereignisse',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '**Frigate — Empfohlene Hardware** — [docs.frigate.video/frigate/hardware](https://docs.frigate.video/frigate/hardware) — veröffentlichte Inferenzzeiten je Detektor und die Aussage, dass Coral für Neuinstallationen nicht mehr empfohlen wird.',
          '**Frigate — Konfiguration der Objektdetektoren** — [docs.frigate.video/configuration/object_detectors](https://docs.frigate.video/configuration/object_detectors) — die vollständige Liste der `type`-Werte und der Hinweis, dass der CPU-Detektor nicht empfohlen wird.',
          '**Frigate — Kameraeinrichtung** — [docs.frigate.video/frigate/camera_setup](https://docs.frigate.video/frigate/camera_setup) — Auflösungen, Bildraten und I-Frame-Intervalle für Erkennungs- und Aufzeichnungsstream.',
          '**Frigate — Zonenkonfiguration** — [docs.frigate.video/configuration/zones](https://docs.frigate.video/configuration/zones) — required_zones, loitering_time, Standardwert von inertia und Voraussetzungen der Geschwindigkeitsschätzung.',
          '**Frigate — Semantische Suche** — [docs.frigate.video/configuration/semantic_search](https://docs.frigate.video/configuration/semantic_search) — RAM- und AVX2-Anforderungen, Vergleich von Jina CLIP V1 und V2 sowie das Verhalten bei der Neuindizierung.',
          '**Frigate — Home-Assistant-Integration** — [docs.frigate.video/integrations/home-assistant](https://docs.frigate.video/integrations/home-assistant) — MQTT als Voraussetzung und die von der Integration erzeugten Entitätstypen.',
          '**Frigate-Releases auf GitHub** — [github.com/blakeblackshear/frigate/releases](https://github.com/blakeblackshear/frigate/releases) — Versionsnummern und Veröffentlichungsdaten für 0.17.x und die 0.18.0-Betas.',
          '**Frigate+** — [frigate.video/plus/](https://frigate.video/plus/) — Abopreis, enthaltene Feinabstimmungen und Einschränkungen bei den Bezeichnungen.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Frigate NVR einrichten: Detektoren, Zonen, Home Assistant (2026)',
      description: 'Frigate 0.17.2 erkennt Objekte lokal — ohne Cloud, ohne Abo. Frigate rät bei Neuinstallationen von Coral ab: Welcher Detektor stattdessen zu wählen ist.',
      url: 'https://www.promptquorum.com/de/smart-home/frigate-nvr-home-assistant-setup',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      about: [
        { '@type': 'Thing', name: 'Frigate NVR' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Objekterkennung' },
        { '@type': 'Thing', name: 'OpenVINO' },
        { '@type': 'Thing', name: 'Hailo-8' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Frigate' },
        { '@type': 'SoftwareApplication', name: 'Home Assistant' },
        { '@type': 'SoftwareApplication', name: 'go2rtc' },
      ],
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Home-Assistant-Nutzer, die ein selbst gehostetes KI-Kamerasystem aufbauen' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/de/smart-home/frigate-nvr-home-assistant-setup' },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Frigate NVR installieren und mit Home Assistant verbinden',
      inLanguage: 'de',
      totalTime: 'PT90M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Host vorbereiten', text: 'Installieren Sie Docker auf einem Debian-basierten Host und legen Sie Verzeichnisse für /config und /media/frigate an.' },
        { '@type': 'HowToStep', position: 2, name: 'Minimale Konfiguration schreiben', text: 'Erstellen Sie eine config.yml mit einer Kamera und ohne Detektorblock, damit Frigate mit Standardwerten startet und Sie den Stream prüfen können.' },
        { '@type': 'HowToStep', position: 3, name: 'Container starten', text: 'Starten Sie Frigate mit ausdrücklichem shm_size und dem passenden durchgereichten Gerät: /dev/dri für Intel, die NVIDIA-Runtime für NVIDIA oder /dev/hailo0 für Hailo.' },
        { '@type': 'HowToStep', position: 4, name: 'In der Weboberfläche prüfen', text: 'Öffnen Sie die Weboberfläche von Frigate und prüfen Sie Kamerabild, Erkennungs-FPS und Inferenzzeit auf der Systemseite.' },
        { '@type': 'HowToStep', position: 5, name: 'Echten Detektor ergänzen', text: 'Ergänzen Sie den detectors-Block für Ihre Hardware, starten Sie neu und prüfen Sie, ob die Inferenzzeit auf den veröffentlichten Wert fällt.' },
        { '@type': 'HowToStep', position: 6, name: 'Home Assistant verbinden', text: 'Konfigurieren Sie den MQTT-Broker in der config.yml, fügen Sie die MQTT-Integration in Home Assistant hinzu und installieren Sie anschließend die Frigate-Integration.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Was ist Frigate NVR?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate ist ein quelloffener Netzwerk-Videorekorder, der die KI-Objekterkennung lokal auf IP-Kamerastreams mit OpenCV und TensorFlow ausführt. Er zeichnet Clips anhand des Erkannten auf statt anhand roher Bewegung und veröffentlicht jede Erkennung per MQTT, sodass Home Assistant darauf reagieren kann.' } },
        { '@type': 'Question', name: 'Brauche ich 2026 noch eine Google Coral TPU für Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Die Hardware-Dokumentation von Frigate hält fest, dass Coral für Neuinstallationen nicht mehr empfohlen wird, außer wenn die Leistungsaufnahme ungewöhnlich streng begrenzt ist. Für einen Neuaufbau sind der OpenVINO-Detektor auf einer Intel-iGPU, ein Hailo-8-Modul oder der ONNX-Detektor auf einer vorhandenen NVIDIA-GPU die empfohlenen Wege.' } },
        { '@type': 'Question', name: 'Welche Frigate-Version sollte ich betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate 0.17.2, veröffentlicht am 28. Juni 2026, ist die aktuelle stabile Version. Version 0.18.0 befindet sich seit Juli 2026 in der Beta-Phase, die dritte Beta erschien am 8. August 2026.' } },
        { '@type': 'Question', name: 'Wie viel RAM benötigt Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Objekterkennung und Aufzeichnung laufen in 8 GB bequem. Die semantische Suche hebt diese Grenze an: Frigate nennt 8 GB als Minimum, 16 GB oder mehr plus eine dedizierte GPU als Empfehlung und setzt eine CPU mit AVX- und AVX2-Befehlssatz voraus.' } },
        { '@type': 'Question', name: 'Warum meldet Frigate ständig Personen, die an meinem Haus vorbeigehen?', acceptedAnswer: { '@type': 'Answer', text: 'Weil das korrekte Erkennungen sind. Zeichnen Sie eine Zone, die nur den Boden innerhalb Ihres Grundstücks abdeckt, setzen Sie review.alerts.required_zones auf diese Zone und ergänzen Sie loitering_time. Die Anwesenheit wird am unteren Mittelpunkt des Begrenzungsrahmens beurteilt, die Zone muss also die Bodenebene abdecken.' } },
        { '@type': 'Question', name: 'Funktioniert Frigate ohne Internetverbindung?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Erkennung, Aufzeichnung, MQTT und Home-Assistant-Automationen laufen vollständig im LAN. Nur der Fernzugriff von außerhalb des Hauses und optionale cloudbasierte GenAI-Anbieter benötigen eine Verbindung.' } },
        { '@type': 'Question', name: 'Was ist der Unterschied zwischen einer Zone und einer Maske in Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Bewegungsmaske verhindert, dass Frigate in diesem Bereich überhaupt eine Erkennung ausführt, passend für Zeitstempel-Einblendungen und dauerhaft bewegtes Laub. Eine Zone lässt die Erkennung normal laufen und schränkt über required_zones lediglich ein, welche Erkennungen einen Alarm auslösen dürfen.' } },
        { '@type': 'Question', name: 'Wie viele Kameras schafft ein Frigate-Server?', acceptedAnswer: { '@type': 'Answer', text: 'Das hängt eher von der Inferenzzeit als direkt von der Kameraanzahl ab: nutzbare Erkennungen pro Sekunde entsprechen etwa 1000 geteilt durch die Inferenzzeit in Millisekunden, verteilt auf alle Kameras.' } },
        { '@type': 'Question', name: 'Brauche ich Frigate+ für Gesichts- oder Kennzeichenerkennung?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Gesichts- und Kennzeichenerkennung laufen lokal ohne Abonnement, auch wenn Frigate+-Modelle die Effizienz verbessern können. Frigate+ kostet 50 $ pro Jahr und enthält bis zu 12 feinabgestimmte Modelle, weitere Feinabstimmungen je 5 $.' } },
        { '@type': 'Question', name: 'Kann ich Frigate in einem Proxmox-LXC-Container betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Nein, Proxmox LXC wird ausdrücklich nicht unterstützt. Verwenden Sie stattdessen eine QEMU-VM. Das Durchreichen einer iGPU, einer Coral oder eines Hailo-Moduls kann in einem LXC zunächst funktionieren und dann auf eine nicht unterstützbare Weise scheitern.' } },
        { '@type': 'Question', name: 'Muss ich bei der Verwendung von Frigate die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, sobald die Kamera über Ihr eigenes Grundstück hinaus aufzeichnet. Rein private Videoüberwachung des eigenen Wohnbereichs fällt unter die Haushaltsausnahme nach DSGVO-Artikel 2 Absatz 2 Buchstabe c; sobald Gehweg, Straße oder Nachbargrundstück im Bild sind, benötigen Sie eine Rechtsgrundlage nach Artikel 6 sowie einen Hinweis nach Artikel 13. Die rein lokale Verarbeitung durch Frigate erfüllt die Datenminimierung nach Artikel 5 und vermeidet Drittlandübermittlungen nach Artikel 44.' } },
        { '@type': 'Question', name: 'Ist Frigate für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, für Werkstätten, Lagerflächen und Betriebshöfe ist Frigate eine tragfähige Alternative zu abobasierten Systemen, weil das Videomaterial das Betriebsnetz nicht verlässt. Die Videoüberwachung von Arbeitsplätzen ist nach § 26 BDSG mitbestimmungspflichtig, und der Aufzeichnungsserver sollte nach BSI-Grundschutz in einem eigenen Netzsegment betrieben werden.' } },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    current_hardware_mentioned: ['Google Coral USB/M.2', 'Hailo-8 / Hailo-8L', 'Intel Arc A750', 'Intel UHD 730 iGPU', 'Intel NPU', 'NVIDIA RTX 3050 / RTX 3070', 'AMD Radeon 780M', 'Apple M3 Pro'],
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/frigate-nvr-home-assistant-setup-overview-hero-fr.webp',
    title: 'Configurer Frigate NVR : détecteurs, zones et Home Assistant (2026)',
    seoTitle: 'Frigate NVR 2026 : guide de configuration complet',
    intro:
      'Frigate est un enregistreur vidéo réseau open source qui exécute la détection d\'objets par IA sur votre propre matériel et transmet chaque détection à Home Assistant sous forme d\'entité. Ce guide pratique couvre le choix du détecteur en 2026 — où Google Coral n\'est plus la réponse par défaut — les réglages de flux caméra, un config.yml fonctionnel, les zones qui suppriment réellement les fausses alertes, l\'intégration Home Assistant et les apports des versions 0.16 et 0.17.',
    metaDescription:
      'Frigate 0.17.2 détecte les objets en local, sans cloud ni abonnement. La doc déconseille désormais Coral en installation neuve : quel détecteur choisir.',
    twitterDescription:
      'Guide pratique de configuration de Frigate NVR : choix du détecteur en 2026, réglages des flux caméra, config.yml fonctionnel, zones et intégration Home Assistant.',
    readTime: '16 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant construisant un système de caméras IA auto-hébergé avec Frigate',
    primaryTerm: 'configuration Frigate NVR',
    targetKeywords: [
      'configurer frigate nvr',
      'frigate home assistant integration',
      'frigate detecteur coral ou openvino',
      'exemple config yml frigate',
      'frigate zones fausses alertes',
    ],
    leadAnswerBlock:
      '**Frigate est un NVR open source qui exécute la détection d\'objets par IA localement sur vos flux caméra et expose chaque détection à Home Assistant sous forme d\'entité.** Depuis Frigate 0.17.2, un iGPU Intel avec le détecteur OpenVINO — et non un Google Coral — constitue le point de départ recommandé.',
    quickAnswerTop: {
      fr: {
        question: 'Comment configurer Frigate NVR avec Home Assistant ?',
        answer:
          'Exécutez Frigate dans Docker avec un config.yml qui pointe vers le sous-flux basse résolution de chaque caméra pour la détection et vers son flux principal pour l\'enregistrement. Choisissez un détecteur pris en charge par votre matériel (OpenVINO sur un iGPU Intel, ONNX sur un GPU NVIDIA ou un module Hailo-8), puis installez l\'intégration Frigate dans Home Assistant. Home Assistant exige que l\'intégration MQTT soit configurée au préalable : c\'est l\'étape que la plupart des premières installations oublient.',
        bullets: [
          'Frigate 0.17.2 est la version stable actuelle (28 juin 2026)',
          'Détection en 1280x720 à 5 fps ; enregistrement du flux principal à 15 fps',
          'Frigate ne recommande plus Google Coral pour les nouvelles installations',
          'Intel Arc A750 : environ 8 ms en YOLOv9-320 ; iGPU Intel UHD 730 : environ 14 ms',
          'L\'intégration Home Assistant exige l\'intégration MQTT au préalable',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Ce que fait Frigate', anchor: 'what-frigate-is' },
      { label: 'Quel détecteur acheter', anchor: 'detector' },
      { label: 'Matériel serveur et RAM', anchor: 'server-hardware' },
      { label: 'Réglages des flux caméra', anchor: 'cameras' },
      { label: 'Installer Frigate', anchor: 'install' },
      { label: 'Un config.yml fonctionnel', anchor: 'config' },
      { label: 'Zones, masques et fausses alertes', anchor: 'zones' },
      { label: 'Intégration Home Assistant', anchor: 'home-assistant' },
      { label: 'Recherche, visages et plaques', anchor: 'ai-features' },
      { label: 'Frigate+ en vaut-il la peine ?', anchor: 'frigate-plus' },
      { label: 'Coût face aux caméras sur abonnement', anchor: 'cost' },
      { label: 'Erreurs fréquentes', anchor: 'mistakes' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate est un NVR open source qui exécute la détection d\'objets par IA localement sur des flux caméra RTSP et publie chaque détection vers Home Assistant via MQTT, sans service cloud ni abonnement.' },
      { type: 'plain-terms', content: 'Une caméra connectée classique envoie la vidéo à un éditeur, qui décide s\'il a vu une personne et facture ce service tous les mois. Frigate effectue cette étape sur un ordinateur chez vous : la vidéo ne sort pas de la maison, aucun abonnement n\'est requis, et chaque détection devient un événement exploitable par Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        content:
          'La documentation de Frigate déconseille désormais le TPU Google Coral pour une nouvelle installation — précisément l\'accélérateur que la plupart des tutoriels recommandent encore en premier.',
        items: [
          'Frigate 0.17.2 (28 juin 2026) est la version stable actuelle ; 0.18.0 est en bêta depuis le 8 août 2026',
          'Le détecteur d\'abord : un iGPU Intel avec le détecteur OpenVINO est le départ le moins coûteux ; Hailo-8 ou un GPU NVIDIA montent en charge',
          'Coral est devenu la solution de repli, non le choix par défaut — recommandé uniquement quand la consommation est la contrainte déterminante',
          'Deux flux par caméra : 1280x720 à 5 fps pour la détection, le flux principal en pleine résolution à 15 fps pour l\'enregistrement',
          'Les zones associées à required_zones, loitering_time et inertia éliminent les fausses alertes — pas un meilleur modèle',
          'L\'intégration Home Assistant exige une intégration MQTT déjà configurée, sinon aucune entité n\'apparaît',
          'La recherche sémantique demande 8 Go de RAM minimum, 16 Go et un GPU pour être confortable, et un processeur avec AVX2',
          'Frigate+ coûte 50 $ par an (facturation en USD) pour 12 modèles affinés ; reconnaissance faciale et lecture de plaques fonctionnent sans abonnement',
        ],
      },
      whatFrigateIs: {
        id: 'what-frigate-is',
        title: 'Que fait Frigate qu\'un NVR classique ne fait pas ?',
        content:
          '**Frigate applique un traitement en deux étapes : une détection de mouvement peu coûteuse identifie les régions à examiner, puis un véritable modèle de détection d\'objets décide s\'il s\'agit d\'une personne, d\'un véhicule, d\'un chien ou d\'un colis.** Un NVR classique se déclenche au changement de pixels, d\'où les alertes sur les phares, la pluie et les arbustes.',
        items: [
          '**Mouvement d\'abord, IA ensuite :** la détection de mouvement légère détermine *où* exécuter le détecteur, ce qui permet à un petit accélérateur de couvrir de nombreuses caméras.',
          '**Enregistrement par objet :** la rétention dépend de ce qui a été détecté, non d\'un tampon continu 24 h/24, ce qui économise fortement le stockage.',
          '**Rediffusion via go2rtc :** Frigate interroge chaque caméra une seule fois et redistribue le flux, au lieu de laisser cinq clients solliciter la caméra.',
          '**Sortie MQTT :** chaque objet suivi, chaque entrée en zone et chaque comptage est publié, ce qui rend possibles les automatisations Home Assistant.',
          '**Éléments de revue :** les détections sont séparées en *alertes* (ce dont vous voulez être informé) et *détections* (consignées, sans notification).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Frigate sélectionne des régions de l\'image par une détection de mouvement peu coûteuse, puis n\'exécute le modèle de détection d\'objets que sur ces régions : c\'est pourquoi un seul petit accélérateur dessert de nombreuses caméras.' },
        ],
        callouts: [
          { type: 'note', text: 'La distinction entre alertes et détections est le concept le plus utile de Frigate. Les alertes réveillent votre téléphone, les détections constituent l\'historique consultable. Réglez-les séparément.' },
        ],
      },
      detector: {
        id: 'detector',
        title: 'Quel détecteur acheter pour Frigate en 2026 ?',
        content:
          '**Choisissez une machine Intel avec iGPU et le détecteur OpenVINO si vous partez de zéro ; un module Hailo-8 si vous visez la latence la plus faible par watt ; le détecteur ONNX si la machine possède déjà un GPU NVIDIA.** La documentation de Frigate précise que Coral n\'est plus recommandé pour les nouvelles installations, sauf contrainte de consommation inhabituelle.',
        items: [
          'Utilisez **OpenVINO** si l\'hôte dispose d\'un processeur Intel de 6ᵉ génération ou plus récent : l\'iGPU est déjà payé et ne demande aucun matériel supplémentaire.',
          'Utilisez **ONNX** si la machine possède déjà un GPU NVIDIA ou AMD ; Frigate détecte la plateforme automatiquement.',
          'Utilisez **Hailo-8 / Hailo-8L** pour obtenir une latence d\'accélérateur dans un emplacement M.2 à faible consommation.',
          'Utilisez **TensorRT** spécifiquement sur les cartes NVIDIA Jetson — consultez [le test du NVIDIA Jetson Orin Nano pour l\'IA domotique](/fr/smart-home/nvidia-jetson-orin-nano-smart-home-review).',
          'Utilisez **edgetpu** (Coral) uniquement si les watts constituent la contrainte déterminante et que vous acceptez une gamme de modèles vieillissante.',
          'Évitez totalement le détecteur **cpu** : selon Frigate, OpenVINO en mode CPU est plus efficace que le détecteur CPU dédié.',
        ],
        columns: ['Détecteur', 'Matériel', 'Inférence (publiée)'],
        rows: [
          { 'Détecteur': 'openvino', 'Matériel': 'Intel Arc A750', 'Inférence (publiée)': 'env. 4 ms MobileNetV2 / env. 8 ms YOLOv9-320' },
          { 'Détecteur': 'openvino', 'Matériel': 'Intel NPU', 'Inférence (publiée)': 'env. 6 ms MobileNetV2 / env. 11 ms YOLOv9-320' },
          { 'Détecteur': 'openvino', 'Matériel': 'iGPU Intel UHD 730', 'Inférence (publiée)': 'env. 10 ms MobileNetV2 / env. 14 ms YOLOv9-tiny' },
          { 'Détecteur': 'hailo8l', 'Matériel': 'Hailo-8', 'Inférence (publiée)': 'env. 6 ms SSD MobileNet / env. 7 ms YOLOv6n' },
          { 'Détecteur': 'hailo8l', 'Matériel': 'Hailo-8L', 'Inférence (publiée)': 'env. 10 ms SSD MobileNet / env. 11 ms YOLOv6n' },
          { 'Détecteur': 'onnx', 'Matériel': 'NVIDIA RTX 3070', 'Inférence (publiée)': 'env. 6–8 ms YOLOv9 tiny→small 320' },
          { 'Détecteur': 'onnx', 'Matériel': 'NVIDIA RTX 3050', 'Inférence (publiée)': 'env. 8–10 ms YOLOv9 tiny→small 320' },
          { 'Détecteur': 'onnx', 'Matériel': 'AMD Radeon 780M', 'Inférence (publiée)': 'env. 14 ms YOLOv9-tiny-320' },
          { 'Détecteur': 'zmq', 'Matériel': 'Apple M3 Pro', 'Inférence (publiée)': 'env. 6 ms YOLOv9-tiny-320' },
        ],
        note: 'Ces chiffres sont ceux publiés par Frigate pour chaque détecteur, et non des mesures PromptQuorum. Frigate propose également les types rknn (NPU Rockchip), memryx, synaptics, deepstack et degirum.',
        callouts: [
          { type: 'warning', text: 'La plupart des tutoriels Frigate commencent encore par « achetez un Coral ». Ce conseil est antérieur aux travaux OpenVINO, Hailo et ONNX des versions 0.16 et 0.17, et la page matériel de Frigate le contredit désormais pour les nouvelles installations.' },
          { type: 'tip', text: 'La capacité en caméras d\'un Coral correspond à environ 1000 / inference_speed images par seconde, partagées entre toutes les caméras. À 5 fps de détection, un budget de 10 ms couvre théoriquement une vingtaine de flux — la limitation thermique et l\'alimentation USB réduisent ce chiffre.' },
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: 'Le détecteur est la puce qui répond à la question « est-ce une personne ? ». Vous pouvez utiliser la partie graphique d\'un processeur Intel, une carte NVIDIA dédiée ou un petit module IA au format M.2. La clé USB universellement recommandée (Google Coral) fonctionne toujours mais n\'est plus le point de départ conseillé.' },
        ],
      },
      serverHardware: {
        id: 'server-hardware',
        title: 'De quoi le serveur Frigate a-t-il besoin ?',
        content:
          '**Un petit mini-PC Intel série N ou Core i, 8 à 16 Go de RAM, un SSD pour le système et un disque dur séparé pour les enregistrements couvrent une maison type de quatre à huit caméras.** La contrainte est rarement le processeur : ce sont la mémoire partagée, l\'endurance du SSD et le choix d\'activer ou non la recherche sémantique.',
        items: [
          '**Mémoire partagée (`shm`) :** la valeur par défaut de 128 Mo ne couvre qu\'environ deux caméras en 720p. Frigate compte environ 66.63 Mo par caméra en 1280x720 avec les journaux, soit environ 253 Mo pour huit caméras.',
          '**Définissez `--shm-size` explicitement :** `--shm-size=512mb` convient à la plupart des installations ; une valeur trop faible se manifeste par des caméras qui décrochent, sans erreur explicite.',
          '**Trois points de montage :** `/config` pour le YAML et la base, `/media/frigate` pour les clips, enregistrements et exports, `/tmp/cache` pour les segments en cours.',
          '**Enregistrements sur disque dur :** l\'écriture continue épuise l\'endurance d\'un SSD grand public. Placez `/media/frigate` sur un disque dur et gardez `/tmp/cache` sur du stockage rapide.',
          '**RAM pour les fonctions IA :** la recherche sémantique exige au minimum 8 Go et un processeur avec AVX et AVX2 ; 16 Go et un GPU sont recommandés.',
        ],
        columns: ['Configuration', 'Détecteur', 'Convient à'],
        rows: [
          { 'Configuration': 'Mini-PC Intel N100/N150, 16 Go', 'Détecteur': 'openvino (iGPU)', 'Convient à': '2 à 6 caméras, sans recherche sémantique' },
          { 'Configuration': 'Mini-PC Intel Core i5, 32 Go', 'Détecteur': 'openvino (iGPU)', 'Convient à': '6 à 12 caméras avec recherche sémantique' },
          { 'Configuration': 'Hôte quelconque + Hailo-8 M.2', 'Détecteur': 'hailo8l', 'Convient à': 'Faible consommation, nombreuses caméras' },
          { 'Configuration': 'PC de bureau avec RTX 3050+', 'Détecteur': 'onnx', 'Convient à': 'Frigate et un LLM local sur une seule machine' },
          { 'Configuration': 'Raspberry Pi 5', 'Détecteur': 'edgetpu / hailo8l', 'Convient à': '1 à 3 caméras, budget énergétique serré' },
        ],
        note: 'Frigate prend en charge Docker sur Debian natif, le module complémentaire Home Assistant, Kubernetes via Helm, Unraid, les NAS Synology et QNAP, ESXi et macOS sur Apple Silicon. Sous Proxmox, utilisez une machine virtuelle QEMU : LXC n\'est explicitement pas pris en charge.',
        callouts: [
          { type: 'warning', text: 'Exécuter Frigate dans un conteneur LXC Proxmox n\'est pas pris en charge. Le passage d\'un Coral ou d\'un iGPU semble fonctionner puis échoue d\'une manière que personne ne pourra diagnostiquer pour vous. Utilisez une machine virtuelle.' },
          { type: 'practice', text: 'Si une seule machine doit héberger Frigate, Home Assistant et un LLM local, dimensionnez-la d\'abord pour le LLM — consultez [la sélection de mini-PC pour Home Assistant et l\'IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).' },
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Comment configurer vos caméras pour Frigate ?',
        content:
          '**Configurez deux flux dans le micrologiciel de la caméra : un sous-flux 1280x720 à 5 fps pour la détection et le flux principal en résolution native à 15 fps pour l\'enregistrement, tous deux en H.264 et au même format d\'image.** Le modèle de détection de Frigate travaille sur une entrée 320x320 : un flux de détection 4K n\'apporte rien et coûte très cher en décodage.',
        numberedItems: [
          'Dans le micrologiciel, réglez le sous-flux sur 1280x720, 5 fps, H.264, avec un intervalle d\'images clés de 5 (une par seconde).',
          'Réglez le flux principal sur la résolution native de la caméra — 2688x1520 sur un capteur 4 Mpx courant — à 15 fps, H.264, intervalle d\'images clés 30.',
          'Conservez le même format d\'image sur les deux flux (16:9 avec 16:9) pour que les cadres de détection se transposent correctement.',
          'Attribuez le rôle `detect` au sous-flux et le rôle `record` au flux principal.',
          'Ne montez la détection à 10 fps que pour des sujets réellement rapides, comme un véhicule traversant une vue d\'allée étroite.',
        ],
        items: [
          'Utilisez H.264 plutôt que H.265 : la prise en charge navigateur du H.265 est limitée et la vue en direct en souffre en premier.',
          'Modifiez la fréquence d\'images dans la caméra, jamais dans Frigate : le sous-échantillonnage logiciel consomme du processeur sans bénéfice.',
          'Privilégiez le PoE filaire au Wi-Fi ; un sous-flux qui décroche se traduit par des détections manquées, non par une panne visible.',
          'Pour du matériel exposant correctement RTSP et ONVIF, consultez [le guide d\'achat des caméras locales pour une installation Frigate](/fr/smart-home/best-local-security-cameras-2027).',
        ],
        callouts: [
          { type: 'tip', text: 'Si les objets au fond de l\'allée ne sont jamais détectés, la cause est généralement la résolution et non le modèle : en 1280x720 ramené à une entrée 320x320, une personne éloignée ne représente que quelques pixels. Découpez cette vue sur une seconde caméra ou un flux zoomé plutôt que d\'augmenter la résolution de détection globalement.' },
          { type: 'note', text: 'Frigate interroge chaque caméra une seule fois et sert tous les autres clients depuis cette copie : pointez donc Home Assistant vers Frigate et non vers la caméra.' },
        ],
      },
      install: {
        id: 'install',
        title: 'Comment installer Frigate ?',
        content:
          '**Utilisez Docker Compose sur un hôte Debian natif pour suivre la voie prise en charge ; utilisez le module complémentaire Home Assistant si vous acceptez moins de contrôle en échange d\'une installation en un clic.** Les deux réclament le même config.yml et le même courtier MQTT.',
        numberedItems: [
          'Installez Docker sur un hôte Debian et créez les répertoires `/config` et `/media/frigate`.',
          'Rédigez un `config.yml` minimal avec une seule caméra et sans bloc détecteur, afin que Frigate démarre sur les valeurs par défaut et que vous puissiez vérifier le flux.',
          'Démarrez le conteneur avec un `shm_size` explicite et le périphérique adapté : `/dev/dri` (Intel), le runtime GPU (NVIDIA) ou `/dev/hailo0` (Hailo).',
          'Ouvrez l\'interface web et vérifiez l\'image de la caméra, les FPS de détection et le temps d\'inférence affiché sur la page Système.',
          'Ajoutez le vrai bloc `detectors`, redémarrez et vérifiez que le temps d\'inférence rejoint la valeur publiée pour votre matériel.',
          'Configurez le courtier MQTT dans `config.yml`, puis ajoutez l\'intégration Frigate dans Home Assistant.',
        ],
        codeBlock: `services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:0.17.2
    restart: unless-stopped
    privileged: true
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128   # Intel iGPU (OpenVINO)
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config:/config
      - /srv/frigate/media:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "8971:8971"   # authenticated web UI
      - "8554:8554"   # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'warning', text: 'Figez l\'étiquette de l\'image sur une version précise plutôt que sur `stable`. Les schémas de configuration de Frigate évoluent entre versions mineures, et un `docker compose pull` non surveillé au passage de 0.17 à 0.18 peut laisser un conteneur qui refuse votre YAML existant.' },
          { type: 'practice', text: 'Mettez une caméra en service avant d\'ajouter les autres. Presque tous les fils « Frigate ne marche pas » se terminent sur l\'URL du sous-flux d\'une seule caméra, bien plus facile à repérer avec une seule entrée dans la configuration.' },
        ],
      },
      config: {
        id: 'config',
        title: 'À quoi ressemble un config.yml Frigate fonctionnel ?',
        content:
          '**Une configuration fonctionnelle comporte quatre blocs : `mqtt`, `detectors`, `cameras` avec deux rôles de flux, puis les filtres `zones` et `review` propres à chaque caméra.** Tout le reste dispose de valeurs par défaut suffisantes le premier jour.',
        codeBlock: `mqtt:
  host: 192.168.1.10
  user: frigate
  password: "{FRIGATE_MQTT_PASSWORD}"

detectors:
  ov:
    type: openvino
    device: GPU

cameras:
  driveway:
    ffmpeg:
      inputs:
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=1
          roles: [detect]
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=0
          roles: [record]
    detect:
      width: 1280
      height: 720
      fps: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: motion
      alerts:
        retain:
          days: 30
    snapshots:
      enabled: true
    motion:
      mask:
        - 0,0,0.35,0,0.35,0.12,0,0.12   # timestamp overlay
    zones:
      driveway_apron:
        coordinates: 0.14,0.98,0.62,0.55,0.95,0.72,0.88,1.0
        loitering_time: 4
        inertia: 3
    review:
      alerts:
        labels: [person, car]
        required_zones: [driveway_apron]
      detections:
        labels: [person, car, dog, cat]`,
        codeLanguage: 'yaml',
        items: [
          '`subtype=1` et `subtype=0` correspondent à la convention Dahua/Amcrest pour le sous-flux et le flux principal ; Reolink utilise `h264Preview_01_sub` et `h264Preview_01_main`.',
          '`retain.mode: motion` ne conserve les images continues que là où il y a eu du mouvement : c\'est le principal levier de stockage.',
          '`review.alerts.required_zones` empêche qu\'un véhicule sur la voie publique réveille votre téléphone.',
          'Frigate 0.17 a ajouté une configuration complète depuis l\'interface, ce qui permet de modifier l\'essentiel dans le navigateur plutôt qu\'à la main.',
        ],
        callouts: [
          { type: 'tip', text: 'Frigate 0.17 a également introduit les profils : des surcharges de configuration nommées, commutables sans redémarrer le conteneur. Un profil « invités à la maison » élargissant required_zones vaut mieux que de modifier le YAML deux fois par semaine.' },
        ],
      },
      zones: {
        id: 'zones',
        title: 'Comment les zones et les masques suppriment-ils les fausses alertes ?',
        content:
          '**Les zones filtrent les détections pertinentes ; les masques de mouvement empêchent Frigate de regarder une région. Employez une zone quand l\'objet est réel mais sans intérêt, et un masque quand le mouvement n\'est pas un objet.** La présence en zone est évaluée au centre bas du cadre de détection : une zone doit donc couvrir le sol où se posent pieds et roues, non la hauteur des têtes.',
        items: [
          '**Masque de mouvement :** pour les incrustations d\'horodatage, un arbre agité, un drapeau. Frigate n\'y exécute jamais de détection. À réserver aux mouvements qui ne sont jamais un objet pertinent.',
          '**Masque de filtre d\'objet :** supprime une étiquette précise dans une région précise, par exemple le véhicule du voisin détecté en permanence comme `car`.',
          '**Zone associée à `required_zones` :** l\'objet est bien une personne, mais une personne sur le trottoir n\'est pas une alerte. C\'est la bonne réponse au passage de piétons.',
          '**`loitering_time` :** exige que l\'objet reste N secondes dans la zone — un livreur qui remonte l\'allée satisfait ce critère, un passant non.',
          '**`inertia` :** exige que l\'objet reste dans la zone pendant N images consécutives (3 par défaut), afin que les tremblements du cadre à la frontière ne déclenchent rien.',
          '**Estimation de vitesse :** une zone à exactement quatre points alignés au sol, accompagnée d\'une liste `distances`, produit une valeur de vitesse dans l\'interface et via MQTT.',
        ],
        promptExamples: [
          { label: '❌ Mauvaise approche', text: 'Des alertes pour chaque personne, sur chaque caméra, en continu — puis des notifications coupées au bout de deux jours parce que le trottoir génère quarante alertes par nuit.' },
          { label: '✅ Bonne approche', text: 'Une zone driveway_apron couvrant uniquement le sol à l\'intérieur de la limite de propriété, review.alerts.required_zones réglé sur cette zone, loitering_time: 4, et les détections (sans notification) conservées pour tout le reste afin que l\'historique consultable reste complet.' },
        ],
        callouts: [
          { type: 'warning', text: 'Tracer une zone sur la moitié supérieure de l\'image ne sert à rien. La présence est jugée au centre bas du cadre de détection : dessinez les zones au niveau du sol.' },
          { type: 'insight', text: 'Les fausses alertes ne relèvent presque jamais de la qualité du modèle. Dans une installation résidentielle type, les zones et required_zones éliminent plus de bruit que n\'importe quelle montée en gamme du détecteur.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Dans Frigate, un masque de mouvement empêche totalement la détection dans une région, tandis qu\'une zone associée à required_zones laisse la détection s\'exécuter normalement et se contente de restreindre les détections autorisées à déclencher une alerte.' },
        ],
      },
      homeAssistant: {
        id: 'home-assistant',
        title: 'Comment connecter Frigate à Home Assistant ?',
        content:
          '**Configurez d\'abord l\'intégration MQTT dans Home Assistant, pointez Frigate vers le même courtier, puis installez l\'intégration Frigate : elle crée des entités camera, image, sensor, switch et binary_sensor par caméra et par zone.** Sans MQTT configuré au préalable, l\'intégration s\'installe et ne produit rien.',
        numberedItems: [
          'Installez un courtier MQTT (le module Mosquitto est le choix habituel) et ajoutez l\'intégration MQTT dans Home Assistant.',
          'Renseignez le bloc `mqtt` du config.yml de Frigate avec le même courtier, doté de ses propres identifiants.',
          'Installez l\'intégration Frigate via HACS ou comme intégration native, et pointez-la vers l\'hôte Frigate.',
          'Activez l\'intégration Media Source pour que enregistrements et instantanés apparaissent dans le navigateur multimédia.',
          'Construisez vos automatisations sur les capteurs binaires de zone plutôt que sur ceux de caméra.',
        ],
        itemHeadings: true,
        columns: ['Type d\'entité', 'Ce que vous obtenez', 'À quoi cela sert'],
        rows: [
          { 'Type d\'entité': 'binary_sensor', 'Ce que vous obtenez': 'Mouvement et présence d\'objet par caméra, par zone et par étiquette d\'objet', 'À quoi cela sert': 'Le déclencheur de pratiquement toute automatisation — une personne dans une zone précise vaut bien mieux qu\'un mouvement sur une caméra' },
          { 'Type d\'entité': 'camera', 'Ce que vous obtenez': 'Entité de flux en direct servie par la rediffusion Frigate sur le port 8554', 'À quoi cela sert': 'Cartes de tableau de bord et diffusion ; pointer Home Assistant ici plutôt que vers la caméra évite une seconde connexion à celle-ci' },
          { 'Type d\'entité': 'image', 'Ce que vous obtenez': 'Le dernier instantané de l\'objet détecté le plus récent, par caméra', 'À quoi cela sert': 'Joindre une image à une notification mobile sans appeler l\'API d\'instantané manuellement' },
          { 'Type d\'entité': 'sensor', 'Ce que vous obtenez': 'Comptages d\'objets par zone et par caméra, plus les mesures de performance du détecteur', 'À quoi cela sert': 'Logique d\'occupation et tableau de bord de santé — le temps d\'inférence est votre alerte précoce qu\'un détecteur est retombé sur le processeur' },
          { 'Type d\'entité': 'switch', 'Ce que vous obtenez': 'Interrupteurs de détection, d\'enregistrement et d\'instantanés par caméra', 'À quoi cela sert': 'Automatisations de confidentialité, par exemple désactiver la détection intérieure dès que la présence indique que quelqu\'un est à la maison' },
        ],
        note: 'L\'intégration expose également les actions camera.turn_on et camera.turn_off, prend en charge plusieurs serveurs Frigate avec des configurations MQTT distinctes, et permet de remplacer le modèle d\'URL RTSP via Jinja2.',
        callouts: [
          { type: 'warning', text: 'Si l\'intégration Frigate s\'installe mais qu\'aucune entité n\'apparaît, la cause est presque toujours MQTT : soit l\'intégration n\'a jamais été ajoutée dans Home Assistant, soit Frigate et Home Assistant dialoguent avec deux courtiers différents.' },
          { type: 'practice', text: 'Déclenchez les automatisations sur le capteur binaire de zone assorti d\'une condition sur l\'étiquette d\'objet. Un simple capteur de mouvement de caméra se déclenche sous la pluie, `binary_sensor.driveway_driveway_apron_person` non.' },
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Qu\'apportent la recherche sémantique, la reconnaissance faciale et la lecture de plaques ?',
        content:
          '**La recherche sémantique permet de saisir « camionnette noire dans l\'allée la nuit » et d\'obtenir les clips correspondants ; la reconnaissance faciale et la lecture de plaques transforment des détections anonymes en détections nommées — et les deux fonctionnent sans abonnement Frigate+.** Ces fonctions coûtent de la RAM, pas de l\'argent.',
        items: [
          '**Recherche sémantique :** exige au minimum 8 Go de RAM, un processeur avec AVX et AVX2, et idéalement 16 Go plus un GPU dédié. Elle ne tourne pas utilement sur un Raspberry Pi.',
          '**Modèle d\'embedding :** Jina CLIP V1 est la valeur par défaut ; la variante `small` est quantisée et tourne convenablement sur processeur, la variante `large` exploite un GPU présent.',
          '**Jina CLIP V2** prend en charge 89 langues au lieu du seul anglais, mais Frigate le documente comme environ 3 % meilleur pour nettement plus de RAM et de temps d\'inférence ; l\'inférence CPU y est déconseillée.',
          '**La réindexation est manuelle :** activer la recherche sémantique n\'indexe pas les objets existants. Utilisez le bouton « Reindex » de l\'interface ou réglez `reindex: True`, en prévoyant une charge processeur élevée.',
          '**Reconnaissance faciale et lecture de plaques** s\'exécutent localement et ne demandent aucun abonnement, même si les modèles Frigate+ améliorent l\'efficacité.',
          '**Descriptions GenAI :** la version 0.17 a ajouté la prise en charge de plusieurs fournisseurs et une intégration llama.cpp dédiée, de sorte que les descriptions peuvent provenir d\'un modèle hébergé chez vous — voir [les automatisations par LLM local dans Home Assistant](/fr/smart-home/ai-automations-local-llm).',
        ],
        callouts: [
          { type: 'tip', text: 'Activez la recherche sémantique avant d\'accumuler un an de clips. Réindexer 200 000 objets suivis sur un mini-PC sans GPU occupe une nuit entière.' },
          { type: 'note', text: 'Frigate 0.16 a ajouté les déclencheurs de recherche sémantique : une action se lance dès qu\'un objet suivi correspond à une image ou une description enregistrée. C\'est le pont entre « chercher dans mes images » et « automatiser selon leur signification ».' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Frigate+ vaut-il 50 $ par an ?',
        content:
          '**Frigate+ se justifie dès que vous avez un faux positif précis et récurrent que le modèle standard ne corrige pas ; sinon, les modèles gratuits et de bonnes zones suffisent.** L\'abonnement coûte 50 $ par an (facturation en USD) et comprend jusqu\'à 12 modèles affinés, les affinages supplémentaires étant à 5 $ pièce.',
        decisionBlock: {
          title: 'Frigate+ ou modèles standards ?',
          localIf: [
            'Un objet précis est mal classé de façon répétée sur votre propriété',
            'Vous avez des angles de caméra inhabituels que le modèle standard gère mal',
            'Vous souhaitez des étiquettes suggérées par IA pour accélérer vos envois',
            'Vous voulez financer le développement du projet open source',
          ],
          cloudIf: [
            'Vos fausses alertes viennent du trottoir : les zones règlent cela gratuitement',
            'Vous avez besoin d\'étiquettes hors de la liste Frigate ; les étiquettes personnalisées ne sont pas encore disponibles',
            'Vous n\'exploitez qu\'une ou deux caméras sur des vues simples',
          ],
          quick: [
            'Corrigez d\'abord les zones, puis réévaluez au bout de deux semaines',
            'Si les alertes restent fausses sur de vrais objets, abonnez-vous',
            'Les modèles entraînés restent téléchargeables après résiliation',
          ],
        },
        items: [
          'Le modèle de base Frigate+ est passé en version 2026.0, fondé sur YOLOv9, avec de nouvelles étiquettes candidates comme `lawnmower` et `heron`.',
          'Les étiquettes personnalisées libres ne sont pas encore possibles : l\'entraînement se limite à la liste prise en charge par Frigate.',
          'La reconnaissance faciale et la lecture de plaques ne requièrent pas d\'abonnement.',
        ],
        callouts: [
          { type: 'insight', text: 'S\'abonner avant d\'avoir affiné les zones est la façon la plus répandue de dépenser 50 $ sans constater d\'amélioration. Un modèle affiné rend les détections correctes plus fiables ; il n\'empêche pas un piéton correctement détecté d\'être un piéton.' },
        ],
      },
      cost: {
        id: 'cost',
        title: 'Comment Frigate se compare-t-il en coût aux caméras sur abonnement ?',
        content:
          '**Frigate convertit un abonnement cloud récurrent par caméra en un coût matériel unique qui n\'augmente pas avec le nombre de caméras.** Au-delà de deux caméras, le seuil de rentabilité tombe généralement dans la première année.',
        columns: ['Critère', 'Service cloud', 'Frigate'],
        rows: [
          { 'Critère': 'Coût récurrent', 'Service cloud': 'Mensuel, souvent par caméra', 'Frigate': 'Aucun' },
          { 'Critère': 'Coût initial', 'Service cloud': 'La caméra seule', 'Frigate': 'Hôte, détecteur, stockage' },
          { 'Critère': 'Détection IA', 'Service cloud': 'Cloud de l\'éditeur', 'Frigate': 'Locale (OpenVINO/Hailo/ONNX)' },
          { 'Critère': 'Emplacement des images', 'Service cloud': 'Centre de données de l\'éditeur', 'Frigate': 'Votre disque' },
          { 'Critère': 'Panne Internet', 'Service cloud': 'Dégradé ou inopérant', 'Frigate': 'Pleinement fonctionnel sur le LAN' },
          { 'Critère': 'Risque de retrait de fonction', 'Service cloud': 'L\'éditeur peut changer d\'offre', 'Frigate': 'Votre version continue de fonctionner' },
        ],
        note: 'Ajouter une caméra à Frigate coûte le prix de la caméra. L\'ajouter à un service sur abonnement coûte généralement la caméra plus une ligne de facture supplémentaire : c\'est là que l\'écart se creuse. Voir aussi [gérer une maison connectée sans abonnements](/fr/smart-home/smart-home-without-subscriptions).',
        callouts: [
          { type: 'note', text: 'Comptez l\'électricité honnêtement : un mini-PC allumé en permanence avec ses disques consomme environ 15 à 30 W. Sur cinq ans c\'est une somme réelle, mais elle reste bien inférieure à la plupart des forfaits cloud multi-caméras.' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Erreurs fréquentes lors de la configuration de Frigate',
        content:
          '**Cinq erreurs expliquent la majorité des installations Frigate ratées, et une seule concerne le matériel.**',
        items: [
          '**Détecter sur le flux principal :** attribuer le rôle `detect` à un flux 4K multiplie le coût de décodage sans aucun gain de précision, puisque l\'entrée du modèle est en 320x320. Détectez toujours sur le sous-flux et enregistrez sur le flux principal.',
          '**Laisser `shm_size` à sa valeur par défaut :** 128 Mo couvrent environ deux caméras en 720p. Les caméras suivantes décrochent par intermittence sans erreur claire. Réglez `--shm-size=512mb` et n\'y revenez plus.',
          '**Installer l\'intégration Home Assistant avant MQTT :** l\'intégration s\'installe proprement et ne crée rien. Configurez d\'abord l\'intégration MQTT dans Home Assistant et le bloc `mqtt` dans Frigate, vers le même courtier.',
          '**Corriger les fausses alertes en changeant de détecteur :** un piéton sur le trottoir est une détection correcte. La solution est une zone avec `required_zones` et `loitering_time`, non un accélérateur plus rapide ou un modèle payant.',
          '**Enregistrer sur le SSD système :** l\'écriture vidéo continue consomme rapidement l\'endurance d\'un SSD grand public. Placez `/media/frigate` sur un disque dur, gardez `/tmp/cache` rapide et réglez `retain.mode: motion`.',
          '**Déployer dans un LXC Proxmox :** le passage de périphériques semble fonctionner puis se casse d\'une manière non prise en charge et indiagnosticable. Utilisez une machine virtuelle QEMU.',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict : que faut-il réellement construire ?',
        content:
          '**Achetez un mini-PC Intel avec 16 Go de RAM, exécutez le détecteur OpenVINO sur son iGPU, utilisez des caméras PoE avec un sous-flux 720p à 5 fps, et consacrez votre première semaine aux zones plutôt qu\'au matériel.** Cette configuration couvre une maison ordinaire et laisse la place à un Hailo-8 si le nombre de caméras augmente.',
        items: [
          'Utilisez **OpenVINO sur un iGPU Intel** si vous partez de zéro : coût minimal, aucun matériel supplémentaire, marge confortable pour 2 à 6 caméras.',
          'Utilisez **un module Hailo-8 M.2** au-delà de huit caméras ou si la consommation compte.',
          'Utilisez **ONNX sur un GPU NVIDIA existant** si la machine en possède déjà un, surtout si elle héberge aussi un LLM local.',
          'Utilisez **un Coral** uniquement si les watts sont la contrainte absolue et que vous acceptez que ce ne soit plus la voie recommandée.',
          'Évitez le détecteur **cpu** ; OpenVINO en mode CPU constitue la meilleure solution de repli.',
          'En cas de doute, commencez par un mini-PC Intel N150 et deux caméras, réglez correctement les zones, puis montez en charge.',
        ],
        callouts: [
          { type: 'practice', text: 'L\'ordre budgétaire qui fonctionne réellement : caméras et commutateur PoE d\'abord, puis l\'hôte, puis le stockage, et un accélérateur seulement si les chiffres de la page Système l\'exigent. Acheter l\'accélérateur en premier est l\'inversion classique.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Qu\'est-ce que Frigate NVR ?', a: 'Frigate est un enregistreur vidéo réseau open source qui exécute la détection d\'objets par IA localement sur des flux de caméras IP, à l\'aide d\'OpenCV et de TensorFlow. Il enregistre les clips selon ce qui a été détecté plutôt que sur du mouvement brut, et publie chaque détection via MQTT pour que Home Assistant puisse réagir. Le logiciel principal ne comporte ni service cloud ni abonnement.' },
          { q: 'Faut-il encore un TPU Google Coral pour Frigate en 2026 ?', a: 'Non. La documentation matérielle de Frigate indique que Coral n\'est plus recommandé pour les nouvelles installations, sauf lorsque la consommation est une contrainte inhabituellement stricte. Pour une nouvelle installation, le détecteur OpenVINO sur iGPU Intel, un module Hailo-8 ou le détecteur ONNX sur un GPU NVIDIA existant sont les voies recommandées.' },
          { q: 'Quelle version de Frigate faut-il exécuter ?', a: 'Frigate 0.17.2, publiée le 28 juin 2026, est la version stable actuelle. La version 0.18.0 est en bêta depuis juillet 2026 — la troisième bêta datant du 8 août 2026 — n\'exécutez donc 0.18 que si vous acceptez les changements de configuration entre versions mineures.' },
          { q: 'Quelle quantité de RAM Frigate exige-t-il ?', a: 'La détection d\'objets et l\'enregistrement tiennent confortablement dans 8 Go. La recherche sémantique relève ce seuil : Frigate documente 8 Go comme minimum, 16 Go ou plus avec un GPU dédié comme recommandation, et exige un processeur prenant en charge les instructions AVX et AVX2.' },
          { q: 'Pourquoi Frigate m\'alerte-t-il sans arrêt pour des passants ?', a: 'Parce que ce sont des détections correctes. Tracez une zone couvrant uniquement le sol de votre propriété, réglez review.alerts.required_zones sur cette zone et ajoutez loitering_time afin qu\'un passant doive d\'abord s\'arrêter. La présence est jugée au centre bas du cadre de détection : la zone doit donc couvrir le plan du sol.' },
          { q: 'Frigate fonctionne-t-il sans connexion Internet ?', a: 'Oui. Détection, enregistrement, MQTT et automatisations Home Assistant fonctionnent entièrement sur votre réseau local. Seuls la consultation à distance depuis l\'extérieur et les fournisseurs GenAI hébergés dans le cloud exigent une connexion — et la version 0.17 a ajouté une intégration llama.cpp permettant de générer les descriptions localement.' },
          { q: 'Quelle différence entre une zone et un masque dans Frigate ?', a: 'Un masque de mouvement empêche Frigate d\'exécuter la moindre détection dans cette région, ce qui convient aux incrustations d\'horodatage et au feuillage en mouvement permanent. Une zone laisse la détection s\'exécuter normalement et restreint seulement, via required_zones, les détections autorisées à déclencher une alerte.' },
          { q: 'Combien de caméras un serveur Frigate peut-il gérer ?', a: 'Cela dépend du temps d\'inférence plutôt que du nombre de caméras : les détections exploitables par seconde valent environ 1000 divisé par le temps d\'inférence en millisecondes, partagées entre les caméras. À 5 fps de détection par caméra et avec un détecteur à 8 ms comme un Intel Arc A750 en YOLOv9-320, la marge reste importante pour une installation résidentielle type.' },
          { q: 'Frigate+ est-il nécessaire pour la reconnaissance faciale ou la lecture de plaques ?', a: 'Non. La reconnaissance faciale et la lecture de plaques s\'exécutent localement sans abonnement, même si les modèles Frigate+ peuvent améliorer l\'efficacité. Frigate+ coûte 50 $ par an et comprend jusqu\'à 12 modèles affinés, les affinages supplémentaires étant à 5 $ pièce.' },
          { q: 'Peut-on exécuter Frigate dans un conteneur LXC Proxmox ?', a: 'Non, LXC sous Proxmox n\'est explicitement pas pris en charge. Utilisez plutôt une machine virtuelle QEMU. Le passage d\'un iGPU, d\'un Coral ou d\'un module Hailo peut sembler fonctionner dans un LXC puis échouer d\'une manière impossible à prendre en charge.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Comprendre pourquoi les caméras IA locales devancent les caméras cloud sur la confidentialité](/fr/smart-home/local-ai-security-camera) — le raisonnement avant les détails de mise en œuvre',
          '[Comparer les caméras locales dont le support RTSP et ONVIF est confirmé](/fr/smart-home/best-local-security-cameras-2027) — quelles caméras alimentent correctement Frigate',
          '[Examiner les mini-PC qui font tourner Home Assistant et l\'IA locale sur une seule machine](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — des hôtes dimensionnés pour Frigate',
          '[Vérifier les prérequis matériels d\'une maison connectée entièrement locale](/fr/smart-home/best-hardware-for-local-smart-home) — accélérateurs, stockage et réseau',
          '[Découvrir comment démarrer avec Home Assistant](/fr/smart-home/home-assistant-getting-started) — le prérequis si vous débutez',
          '[Explorer la détection de présence par radar pour les pièces sans caméra](/fr/smart-home/radar-presence-sensing-no-camera) — l\'alternative sans caméra à l\'intérieur',
          '[Voir comment installer Ollama pour un LLM local sur la même machine](/fr/local-llms/how-to-install-ollama) — inter-cluster : descriptions GenAI locales pour les événements Frigate',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '**Frigate — Matériel recommandé** — [docs.frigate.video/frigate/hardware](https://docs.frigate.video/frigate/hardware) — temps d\'inférence publiés par détecteur et mention que Coral n\'est plus recommandé pour les nouvelles installations.',
          '**Frigate — Configuration des détecteurs d\'objets** — [docs.frigate.video/configuration/object_detectors](https://docs.frigate.video/configuration/object_detectors) — liste complète des valeurs `type` et remarque sur le détecteur CPU déconseillé.',
          '**Frigate — Configuration des caméras** — [docs.frigate.video/frigate/camera_setup](https://docs.frigate.video/frigate/camera_setup) — résolutions, fréquences d\'images et intervalles d\'images clés pour la détection et l\'enregistrement.',
          '**Frigate — Configuration des zones** — [docs.frigate.video/configuration/zones](https://docs.frigate.video/configuration/zones) — required_zones, loitering_time, valeur par défaut d\'inertia et prérequis de l\'estimation de vitesse.',
          '**Frigate — Recherche sémantique** — [docs.frigate.video/configuration/semantic_search](https://docs.frigate.video/configuration/semantic_search) — exigences de RAM et d\'AVX2, comparaison Jina CLIP V1 et V2, comportement de réindexation.',
          '**Frigate — Intégration Home Assistant** — [docs.frigate.video/integrations/home-assistant](https://docs.frigate.video/integrations/home-assistant) — MQTT comme prérequis et types d\'entités créés par l\'intégration.',
          '**Versions de Frigate sur GitHub** — [github.com/blakeblackshear/frigate/releases](https://github.com/blakeblackshear/frigate/releases) — numéros de version et dates de publication des 0.17.x et des bêtas 0.18.0.',
          '**Frigate+** — [frigate.video/plus/](https://frigate.video/plus/) — prix de l\'abonnement, affinages inclus et limites sur les étiquettes.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Configurer Frigate NVR : détecteurs, zones et Home Assistant (2026)',
      description: 'Frigate 0.17.2 détecte les objets en local, sans cloud ni abonnement. La doc déconseille désormais Coral en installation neuve : quel détecteur choisir.',
      url: 'https://www.promptquorum.com/fr/smart-home/frigate-nvr-home-assistant-setup',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      about: [
        { '@type': 'Thing', name: 'Frigate NVR' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Détection d\'objets' },
        { '@type': 'Thing', name: 'OpenVINO' },
        { '@type': 'Thing', name: 'Hailo-8' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Frigate' },
        { '@type': 'SoftwareApplication', name: 'Home Assistant' },
        { '@type': 'SoftwareApplication', name: 'go2rtc' },
      ],
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Utilisateurs de Home Assistant construisant un système de caméras IA auto-hébergé' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/fr/smart-home/frigate-nvr-home-assistant-setup' },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Installer Frigate NVR et le connecter à Home Assistant',
      inLanguage: 'fr',
      totalTime: 'PT90M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Préparer l\'hôte', text: 'Installez Docker sur un hôte Debian et créez les répertoires /config et /media/frigate.' },
        { '@type': 'HowToStep', position: 2, name: 'Rédiger une configuration minimale', text: 'Créez un config.yml avec une seule caméra et sans bloc détecteur, afin que Frigate démarre sur les valeurs par défaut et que vous puissiez vérifier le flux.' },
        { '@type': 'HowToStep', position: 3, name: 'Démarrer le conteneur', text: 'Démarrez Frigate avec un shm_size explicite et le périphérique adapté : /dev/dri pour Intel, le runtime NVIDIA pour NVIDIA ou /dev/hailo0 pour Hailo.' },
        { '@type': 'HowToStep', position: 4, name: 'Vérifier dans l\'interface web', text: 'Ouvrez l\'interface web de Frigate et vérifiez l\'image de la caméra, les FPS de détection et le temps d\'inférence sur la page Système.' },
        { '@type': 'HowToStep', position: 5, name: 'Ajouter le vrai détecteur', text: 'Ajoutez le bloc detectors correspondant à votre matériel, redémarrez et vérifiez que le temps d\'inférence rejoint la valeur publiée.' },
        { '@type': 'HowToStep', position: 6, name: 'Connecter Home Assistant', text: 'Configurez le courtier MQTT dans config.yml, ajoutez l\'intégration MQTT dans Home Assistant, puis installez l\'intégration Frigate.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Qu\'est-ce que Frigate NVR ?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate est un enregistreur vidéo réseau open source qui exécute la détection d\'objets par IA localement sur des flux de caméras IP, à l\'aide d\'OpenCV et de TensorFlow. Il enregistre les clips selon ce qui a été détecté plutôt que sur du mouvement brut, et publie chaque détection via MQTT pour que Home Assistant puisse réagir.' } },
        { '@type': 'Question', name: 'Faut-il encore un TPU Google Coral pour Frigate en 2026 ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. La documentation matérielle de Frigate indique que Coral n\'est plus recommandé pour les nouvelles installations, sauf lorsque la consommation est une contrainte inhabituellement stricte. Le détecteur OpenVINO sur iGPU Intel, un module Hailo-8 ou le détecteur ONNX sur un GPU NVIDIA existant sont les voies recommandées.' } },
        { '@type': 'Question', name: 'Quelle version de Frigate faut-il exécuter ?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate 0.17.2, publiée le 28 juin 2026, est la version stable actuelle. La version 0.18.0 est en bêta depuis juillet 2026, la troisième bêta datant du 8 août 2026.' } },
        { '@type': 'Question', name: 'Quelle quantité de RAM Frigate exige-t-il ?', acceptedAnswer: { '@type': 'Answer', text: 'La détection d\'objets et l\'enregistrement tiennent confortablement dans 8 Go. La recherche sémantique relève ce seuil : Frigate documente 8 Go comme minimum, 16 Go ou plus avec un GPU dédié comme recommandation, et exige un processeur prenant en charge AVX et AVX2.' } },
        { '@type': 'Question', name: 'Pourquoi Frigate m\'alerte-t-il sans arrêt pour des passants ?', acceptedAnswer: { '@type': 'Answer', text: 'Parce que ce sont des détections correctes. Tracez une zone couvrant uniquement le sol de votre propriété, réglez review.alerts.required_zones sur cette zone et ajoutez loitering_time. La présence est jugée au centre bas du cadre de détection : la zone doit couvrir le plan du sol.' } },
        { '@type': 'Question', name: 'Frigate fonctionne-t-il sans connexion Internet ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Détection, enregistrement, MQTT et automatisations Home Assistant fonctionnent entièrement sur votre réseau local. Seuls la consultation à distance et les fournisseurs GenAI hébergés dans le cloud exigent une connexion.' } },
        { '@type': 'Question', name: 'Quelle différence entre une zone et un masque dans Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Un masque de mouvement empêche Frigate d\'exécuter la moindre détection dans cette région. Une zone laisse la détection s\'exécuter normalement et restreint seulement, via required_zones, les détections autorisées à déclencher une alerte.' } },
        { '@type': 'Question', name: 'Combien de caméras un serveur Frigate peut-il gérer ?', acceptedAnswer: { '@type': 'Answer', text: 'Cela dépend du temps d\'inférence plutôt que du nombre de caméras : les détections exploitables par seconde valent environ 1000 divisé par le temps d\'inférence en millisecondes, partagées entre les caméras.' } },
        { '@type': 'Question', name: 'Frigate+ est-il nécessaire pour la reconnaissance faciale ou la lecture de plaques ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. La reconnaissance faciale et la lecture de plaques s\'exécutent localement sans abonnement, même si les modèles Frigate+ peuvent améliorer l\'efficacité. Frigate+ coûte 50 $ par an et comprend jusqu\'à 12 modèles affinés, les affinages supplémentaires étant à 5 $ pièce.' } },
        { '@type': 'Question', name: 'Peut-on exécuter Frigate dans un conteneur LXC Proxmox ?', acceptedAnswer: { '@type': 'Answer', text: 'Non, LXC sous Proxmox n\'est explicitement pas pris en charge. Utilisez plutôt une machine virtuelle QEMU. Le passage d\'un iGPU, d\'un Coral ou d\'un module Hailo peut sembler fonctionner puis échouer d\'une manière impossible à prendre en charge.' } },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    current_hardware_mentioned: ['Google Coral USB/M.2', 'Hailo-8 / Hailo-8L', 'Intel Arc A750', 'Intel UHD 730 iGPU', 'Intel NPU', 'NVIDIA RTX 3050 / RTX 3070', 'AMD Radeon 780M', 'Apple M3 Pro'],
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/frigate-nvr-home-assistant-setup-overview-hero-ja.webp',
    title: 'Frigate NVR 構築ガイド：検出器・ゾーン・Home Assistant（2026年）',
    seoTitle: 'Frigate NVR 2026：検出器選びとHome Assistant連携',
    intro:
      'Frigate は、AI 物体検出を自宅のハードウェア上だけで実行し、検出結果を Home Assistant のエンティティとして渡すオープンソースのネットワークビデオレコーダーです。このガイドでは、2026年時点の検出器選び（Google Coral はもはや標準解ではありません）、カメラのストリーム設定、実際に動作する config.yml、誤検知を止めるゾーン設定、Home Assistant 連携、そして 0.16 と 0.17 の変更点を扱います。',
    metaDescription:
      'Frigate 0.17.2 はクラウドも月額も不要で AI 検出をローカル実行。公式ドキュメントは新規構築での Coral 採用を推奨しなくなりました。代わりに選ぶべき検出器を解説します。',
    twitterDescription:
      'Frigate NVR 構築の実践ガイド：2026年の検出器選び、カメラのストリーム設定、動作する config.yml、ゾーン調整、Home Assistant 連携。',
    readTime: '16分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Frigate で自己ホスト型 AI カメラシステムを構築する Home Assistant ユーザー',
    primaryTerm: 'Frigate NVR 構築',
    targetKeywords: [
      'frigate nvr 設定',
      'frigate home assistant 連携',
      'frigate 検出器 coral openvino',
      'frigate config yml 例',
      'frigate ゾーン 誤検知',
    ],
    leadAnswerBlock:
      '**Frigate は、カメラ映像に対して AI 物体検出をローカル実行し、検出結果をすべて Home Assistant のエンティティとして公開するオープンソース NVR です。** Frigate 0.17.2 時点で、新規構築の推奨出発点は Google Coral ではなく、OpenVINO 検出器を動かす Intel iGPU です。',
    quickAnswerTop: {
      ja: {
        question: 'Frigate NVR を Home Assistant と連携させるには？',
        answer:
          'Docker で Frigate を起動し、config.yml では検出用に各カメラの低解像度サブストリーム、録画用にメインストリームを指定します。ハードウェアが対応する検出器（Intel iGPU なら OpenVINO、NVIDIA GPU なら ONNX、または Hailo-8 モジュール）を選び、その後 Home Assistant に Frigate 統合をインストールします。Home Assistant 側では先に MQTT 統合の設定が必要です。初回構築で最も見落とされる手順がこれです。',
        bullets: [
          'Frigate 0.17.2 が現行の安定版（2026年6月28日リリース）',
          '検出は 1280x720 / 5fps、録画はメインストリーム 15fps',
          'Frigate は新規構築での Google Coral を推奨しなくなりました',
          'Intel Arc A750 は YOLOv9-320 で約 8 ms、Intel UHD 730 iGPU は約 14 ms',
          'Home Assistant 統合には MQTT 統合が前提',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: 'Frigate の役割', anchor: 'what-frigate-is' },
      { label: '検出器の選び方', anchor: 'detector' },
      { label: 'サーバー機器と RAM', anchor: 'server-hardware' },
      { label: 'カメラのストリーム設定', anchor: 'cameras' },
      { label: 'Frigate のインストール', anchor: 'install' },
      { label: '動作する config.yml', anchor: 'config' },
      { label: 'ゾーン・マスク・誤検知', anchor: 'zones' },
      { label: 'Home Assistant 連携', anchor: 'home-assistant' },
      { label: '検索・顔・ナンバープレート', anchor: 'ai-features' },
      { label: 'Frigate+ は必要か', anchor: 'frigate-plus' },
      { label: 'サブスク型カメラとの費用比較', anchor: 'cost' },
      { label: 'よくある失敗', anchor: 'mistakes' },
      { label: '結論', anchor: 'verdict' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '出典', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate は RTSP カメラ映像に対して AI 物体検出をローカル実行し、検出結果を MQTT 経由で Home Assistant に配信するオープンソース NVR です。クラウドサービスもサブスクリプションも必要ありません。' },
      { type: 'plain-terms', content: '一般的なスマートカメラは映像を事業者に送信し、人が映っていたかを事業者側が判定し、その対価として毎月課金します。Frigate はその判定を自宅の PC で行うため、映像は家の外に出ず、月額費用も発生せず、検出結果はそのまま Home Assistant が反応できるイベントになります。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        content:
          'Frigate 公式ドキュメントは、新規構築において Google Coral TPU を推奨しなくなりました。多くの解説記事がいまだに真っ先に勧めるアクセラレーターです。',
        items: [
          'Frigate 0.17.2（2026年6月28日）が現行安定版。0.18.0 は 2026年8月8日時点でベータ段階',
          'まず検出器から：OpenVINO を動かす Intel iGPU が最も安価な現実的スタート。Hailo-8 や NVIDIA GPU はさらに上へ伸ばせます',
          'Coral は標準ではなくフォールバック。消費電力が決定的な制約となる場合にのみ推奨されます',
          'カメラごとに 2 系統：検出用 1280x720 / 5fps、録画用にフル解像度メインストリーム 15fps',
          '誤検知を実際に減らすのはゾーンと required_zones、loitering_time、inertia であり、より優れたモデルではありません',
          'Home Assistant 統合は MQTT 統合の事前設定が必要。未設定だとエンティティが 1 つも生成されません',
          'セマンティック検索は RAM 8 GB 以上が必須、快適に使うには 16 GB と GPU、さらに AVX2 対応 CPU が必要',
          'Frigate+ は年額 50 ドル（USD 決済）で最大 12 個のファインチューニング済みモデル。顔認識とナンバープレート認識はサブスクなしで動作',
        ],
      },
      whatFrigateIs: {
        id: 'what-frigate-is',
        title: 'Frigate は一般的な NVR と何が違うのですか？',
        content:
          '**Frigate は 2 段構えで動きます。まず負荷の軽い動体検出が「見る価値のある領域」を絞り込み、次に本格的な物体検出モデルがそこに人・車・犬・荷物が写っているかを判定します。** 一般的な NVR はピクセル変化で反応するため、ヘッドライトや雨、揺れる植木にも通知を出します。',
        items: [
          '**動体が先、AI が後：** 軽量な動体検出が検出器を動かす*場所*を決めるため、小さなアクセラレーターでも多数のカメラをまかなえます。',
          '**物体単位の録画：** 保存期間は検出内容に基づき、24時間連続バッファではないため、ストレージが大幅に長持ちします。',
          '**go2rtc による再配信：** Frigate はカメラを 1 回だけ取得して再配信します。5 つのクライアントが同じカメラに直接接続する事態を避けられます。',
          '**MQTT 出力：** 追跡対象・ゾーン進入・物体カウントがすべて配信されます。これが Home Assistant のオートメーションを可能にします。',
          '**レビュー項目：** 検出は *alerts*（通知してほしいもの）と *detections*（記録のみで通知なし）に分けられます。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Frigate は低コストの動体検出で画面内の領域を選び、その領域にのみ物体検出モデルを実行します。だからこそ小型アクセラレーター 1 個で多数のカメラを同時に処理できます。' },
        ],
        callouts: [
          { type: 'note', text: 'alerts と detections の区別は、Frigate で最も役立つ概念です。alerts はスマートフォンを鳴らすもの、detections は検索可能な記録です。両者は別々に設定してください。' },
        ],
      },
      detector: {
        id: 'detector',
        title: '2026年に Frigate 用として買うべき検出器はどれですか？',
        content:
          '**ゼロから始めるなら Intel iGPU 搭載機と OpenVINO 検出器、ワットあたりの低レイテンシを求めるなら Hailo-8 モジュール、すでに NVIDIA GPU がある機体なら ONNX 検出器を選んでください。** Frigate のドキュメントは、消費電力が極端に厳しい場合を除き、新規構築で Coral を推奨しないと明記しています。',
        items: [
          'ホストが第6世代以降の Intel CPU なら **OpenVINO** を使ってください。iGPU はすでに購入済みで、追加ハードウェアが不要です。',
          'すでに NVIDIA または AMD の GPU がある場合は **ONNX** を使ってください。Frigate がプラットフォームを自動判別します。',
          'M.2 スロットで低消費電力かつアクセラレーター級のレイテンシが欲しい場合は **Hailo-8 / Hailo-8L** を使ってください。',
          'NVIDIA Jetson ボードでは **TensorRT** を使ってください — [スマートホーム AI 向け NVIDIA Jetson Orin Nano レビュー](/ja/smart-home/nvidia-jetson-orin-nano-smart-home-review)を参照。',
          '**edgetpu**（Coral）は、ワット数が決定的な制約であり、モデルラインナップの古さを許容できる場合にのみ使ってください。',
          '**cpu** 検出器は完全に避けてください。Frigate によれば、OpenVINO の CPU モードのほうが専用 CPU 検出器より効率的です。',
        ],
        columns: ['検出器', 'ハードウェア', '推論時間（公表値）'],
        rows: [
          { '検出器': 'openvino', 'ハードウェア': 'Intel Arc A750', '推論時間（公表値）': '約 4 ms MobileNetV2 / 約 8 ms YOLOv9-320' },
          { '検出器': 'openvino', 'ハードウェア': 'Intel NPU', '推論時間（公表値）': '約 6 ms MobileNetV2 / 約 11 ms YOLOv9-320' },
          { '検出器': 'openvino', 'ハードウェア': 'Intel UHD 730 iGPU', '推論時間（公表値）': '約 10 ms MobileNetV2 / 約 14 ms YOLOv9-tiny' },
          { '検出器': 'hailo8l', 'ハードウェア': 'Hailo-8', '推論時間（公表値）': '約 6 ms SSD MobileNet / 約 7 ms YOLOv6n' },
          { '検出器': 'hailo8l', 'ハードウェア': 'Hailo-8L', '推論時間（公表値）': '約 10 ms SSD MobileNet / 約 11 ms YOLOv6n' },
          { '検出器': 'onnx', 'ハードウェア': 'NVIDIA RTX 3070', '推論時間（公表値）': '約 6–8 ms YOLOv9 tiny→small 320' },
          { '検出器': 'onnx', 'ハードウェア': 'NVIDIA RTX 3050', '推論時間（公表値）': '約 8–10 ms YOLOv9 tiny→small 320' },
          { '検出器': 'onnx', 'ハードウェア': 'AMD Radeon 780M', '推論時間（公表値）': '約 14 ms YOLOv9-tiny-320' },
          { '検出器': 'zmq', 'ハードウェア': 'Apple M3 Pro', '推論時間（公表値）': '約 6 ms YOLOv9-tiny-320' },
        ],
        note: 'これらは Frigate が公表している検出器ごとの数値であり、PromptQuorum による計測値ではありません。Frigate は他にも rknn（Rockchip NPU）、memryx、synaptics、deepstack、degirum の検出器タイプを提供しています。',
        callouts: [
          { type: 'warning', text: 'ほとんどの Frigate 解説はいまだに「まず Coral を買え」から始まります。この助言は 0.16 と 0.17 で進んだ OpenVINO・Hailo・ONNX 対応より前のものであり、Frigate 自身のハードウェアページが新規構築については明確に否定しています。' },
          { type: 'tip', text: 'Coral のカメラ処理能力は、全カメラで共有される約 1000 / inference_speed fps に相当します。検出 5fps なら 10 ms の推論予算で計算上 20 カメラ分の余裕がありますが、サーマルスロットリングと USB 給電の制約で実際はこれより減ります。' },
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: '検出器とは「これは人か？」を判定するチップのことです。Intel CPU に内蔵されたグラフィックス、専用の NVIDIA カード、あるいは小型の M.2 AI モジュールが使えます。どこでも勧められている USB スティック（Google Coral）は今も動きますが、推奨される出発点ではなくなりました。' },
        ],
      },
      serverHardware: {
        id: 'server-hardware',
        title: 'Frigate サーバー本体に必要なものは？',
        content:
          '**Intel N シリーズまたは Core i シリーズの小型ミニ PC に RAM 8〜16 GB、OS 用 SSD、録画用に別途 HDD という構成で、カメラ 4〜8 台の一般的な住宅をカバーできます。** ボトルネックが CPU になることはまれで、実際には共有メモリ、ディスクの書き込み耐久性、そしてセマンティック検索を使うかどうかが効いてきます。',
        items: [
          '**共有メモリ（`shm`）：** 既定の 128 MB は 720p のカメラ約 2 台分しかありません。Frigate は 1280x720 のカメラ 1 台あたりログ込みで約 66.63 MB を見込むため、8 台なら約 253 MB が必要です。',
          '**`--shm-size` は明示的に設定：** 多くの構成では `--shm-size=512mb` が安全な値です。小さすぎると明確なエラーではなく、カメラが断続的に落ちる形で現れます。',
          '**3 つのマウントポイント：** YAML とデータベース用の `/config`、クリップ・録画・エクスポート用の `/media/frigate`、処理中セグメント用の `/tmp/cache`。',
          '**録画は HDD へ：** 連続書き込みはコンシューマー SSD の寿命を削ります。`/media/frigate` は HDD に置き、`/tmp/cache` は高速ストレージに残してください。',
          '**AI 機能向けの RAM：** セマンティック検索には最低 8 GB と AVX / AVX2 対応 CPU が必要で、推奨構成は 16 GB と GPU です。',
        ],
        columns: ['構成', '検出器', '適した用途'],
        rows: [
          { '構成': 'Intel N100/N150 ミニ PC、16 GB', '検出器': 'openvino (iGPU)', '適した用途': 'カメラ 2〜6 台、セマンティック検索なし' },
          { '構成': 'Intel Core i5 ミニ PC、32 GB', '検出器': 'openvino (iGPU)', '適した用途': 'カメラ 6〜12 台＋セマンティック検索' },
          { '構成': '任意のホスト＋Hailo-8 M.2', '検出器': 'hailo8l', '適した用途': '低消費電力・多カメラ構成' },
          { '構成': 'RTX 3050 以上のデスクトップ', '検出器': 'onnx', '適した用途': 'Frigate とローカル LLM を 1 台で運用' },
          { '構成': 'Raspberry Pi 5', '検出器': 'edgetpu / hailo8l', '適した用途': 'カメラ 1〜3 台、電力予算が厳しい環境' },
        ],
        note: 'Frigate はベアメタル Debian 上の Docker、Home Assistant アドオン、Helm による Kubernetes、Unraid、Synology / QNAP の NAS、ESXi、Apple Silicon 版 macOS に対応します。Proxmox では QEMU 仮想マシンを使ってください。LXC は明確に非対応です。',
        callouts: [
          { type: 'warning', text: 'Proxmox の LXC コンテナでの Frigate 運用は非対応です。Coral や iGPU のパススルーは一見動作したあと、誰にも切り分けできない形で壊れます。仮想マシンを使ってください。' },
          { type: 'practice', text: 'Frigate・Home Assistant・ローカル LLM を 1 台にまとめたい場合は、まず LLM 側から必要スペックを決めてください — [Home Assistant とローカル AI 向けミニ PC 選び](/ja/smart-home/best-mini-pc-home-assistant-local-ai)を参照。' },
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Frigate 向けにカメラをどう設定すべきですか？',
        content:
          '**カメラ側のファームウェアで 2 系統を設定してください。検出用に 1280x720 / 5fps、録画用にネイティブ解像度 / 15fps、いずれも H.264 でアスペクト比を揃えます。** Frigate の検出モデルは 320x320 の入力で動くため、4K の検出ストリームは効果がないうえデコード負荷だけが跳ね上がります。',
        numberedItems: [
          'カメラのファームウェアで、サブストリームを 1280x720、5fps、H.264、I フレーム間隔 5（毎秒 1 キーフレーム）に設定します。',
          'メインストリームはカメラのネイティブ解像度（一般的な 4MP センサーなら 2688x1520）、15fps、H.264、I フレーム間隔 30 に設定します。',
          '両ストリームのアスペクト比を揃えます（16:9 同士）。これで検出と録画の間でバウンディングボックスが正しく対応します。',
          'Frigate 側で `detect` ロールにサブストリーム、`record` ロールにメインストリームを割り当てます。',
          '検出を 10fps に上げるのは、狭い進入路を横切る車のように本当に速い対象がある場合だけにしてください。',
        ],
        items: [
          'H.265 ではなく H.264 を使ってください。H.265 はブラウザ対応が限られており、まずライブ表示に影響が出ます。',
          'フレームレートはカメラ側で変更し、Frigate 側では変更しないでください。ソフトウェアでの間引きは CPU を消費するだけです。',
          '無線より有線 PoE を優先してください。サブストリームの切断は明確な障害ではなく、検出漏れという形で現れます。',
          'RTSP と ONVIF が正しく使えるカメラについては、[Frigate 構成向けローカル防犯カメラ購入ガイド](/ja/smart-home/best-local-security-cameras-2027)を参照してください。',
        ],
        callouts: [
          { type: 'tip', text: '進入路の奥の物体がまったく検出されない場合、原因はモデルではなく解像度であることがほとんどです。1280x720 を 320x320 入力に縮小すると、遠くの人物は数ピクセルにしかなりません。検出解像度を全体的に上げるのではなく、その範囲を 2 台目のカメラやズームしたストリームに分けてください。' },
          { type: 'note', text: 'Frigate はカメラを 1 回だけ取得し、他のクライアントにはその複製を配信します。だからこそ Home Assistant はカメラではなく Frigate に向けるべきです。' },
        ],
      },
      install: {
        id: 'install',
        title: 'Frigate はどうインストールしますか？',
        content:
          '**サポートされた手順を選ぶならベアメタル Debian ホスト上の Docker Compose、ワンクリック導入と引き換えに制御性を手放してよいなら Home Assistant アドオンを使ってください。** どちらも同じ config.yml と同じ MQTT ブローカーが必要です。',
        numberedItems: [
          'Debian 系ホストに Docker をインストールし、`/config` と `/media/frigate` のディレクトリを作成します。',
          'カメラ 1 台のみで検出器ブロックを含まない最小限の `config.yml` を書き、既定値で起動させて映像が届くことを確認します。',
          '`shm_size` を明示し、環境に応じたデバイス（Intel なら `/dev/dri`、NVIDIA なら GPU ランタイム、Hailo なら `/dev/hailo0`）を渡してコンテナを起動します。',
          'Web UI を開き、カメラ映像・検出 FPS・システムページの推論時間を確認します。',
          '実際の `detectors` ブロックを追加して再起動し、推論時間がハードウェアの公表値まで下がることを確認します。',
          '`config.yml` に MQTT ブローカーを設定し、その後 Home Assistant で Frigate 統合を追加します。',
        ],
        codeBlock: `services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:0.17.2
    restart: unless-stopped
    privileged: true
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128   # Intel iGPU (OpenVINO)
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config:/config
      - /srv/frigate/media:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "8971:8971"   # authenticated web UI
      - "8554:8554"   # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'warning', text: 'イメージタグは `stable` ではなく特定バージョンに固定してください。Frigate の設定スキーマはマイナーバージョン間で変わるため、0.17 から 0.18 の境目で無人の `docker compose pull` を走らせると、既存の YAML を受け付けないコンテナが残ることがあります。' },
          { type: 'practice', text: '残りを追加する前に、まず 1 台だけ稼働させてください。「Frigate が動かない」という相談のほとんどは、特定 1 台のサブストリーム URL に原因があり、設定にエントリが 1 つだけならはるかに見つけやすくなります。' },
        ],
      },
      config: {
        id: 'config',
        title: '動作する Frigate の config.yml はどう書きますか？',
        content:
          '**動作する設定は 4 ブロックで構成されます。`mqtt`、`detectors`、2 つのストリームロールを持つ `cameras`、そしてカメラごとの `zones` と `review` フィルタです。** それ以外は初日は既定値のままで問題ありません。',
        codeBlock: `mqtt:
  host: 192.168.1.10
  user: frigate
  password: "{FRIGATE_MQTT_PASSWORD}"

detectors:
  ov:
    type: openvino
    device: GPU

cameras:
  driveway:
    ffmpeg:
      inputs:
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=1
          roles: [detect]
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=0
          roles: [record]
    detect:
      width: 1280
      height: 720
      fps: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: motion
      alerts:
        retain:
          days: 30
    snapshots:
      enabled: true
    motion:
      mask:
        - 0,0,0.35,0,0.35,0.12,0,0.12   # timestamp overlay
    zones:
      driveway_apron:
        coordinates: 0.14,0.98,0.62,0.55,0.95,0.72,0.88,1.0
        loitering_time: 4
        inertia: 3
    review:
      alerts:
        labels: [person, car]
        required_zones: [driveway_apron]
      detections:
        labels: [person, car, dog, cat]`,
        codeLanguage: 'yaml',
        items: [
          '`subtype=1` と `subtype=0` は Dahua / Amcrest 系のサブ・メインストリーム表記です。Reolink では `h264Preview_01_sub` と `h264Preview_01_main` を使います。',
          '`retain.mode: motion` は動きがあった箇所だけ連続録画を残す設定で、ストレージ削減の最大のレバーです。',
          '`review.alerts.required_zones` は、公道を走る車でスマートフォンが鳴るのを防ぎます。',
          'Frigate 0.17 で UI からの完全な設定編集が加わったため、この大半は手書きせずブラウザ上で編集できます。',
        ],
        callouts: [
          { type: 'tip', text: 'Frigate 0.17 ではプロファイルも追加されました。名前付きの設定オーバーライドで、コンテナを再起動せずに切り替えられます。required_zones を広げる「来客中」プロファイルを用意するほうが、週に 2 回 YAML を書き換えるより実用的です。' },
        ],
      },
      zones: {
        id: 'zones',
        title: 'ゾーンとマスクはどう誤検知を止めるのですか？',
        content:
          '**ゾーンはどの検出が重要かを絞り込み、モーションマスクはその領域を Frigate にそもそも見せません。物体は本物だが関心がない場合はゾーン、動きが物体ですらない場合はマスクを使います。** ゾーン内の存在判定はバウンディングボックスの下端中央で行われるため、ゾーンは頭の高さではなく足や車輪が接する地面を覆う必要があります。',
        items: [
          '**モーションマスク：** タイムスタンプの焼き込み、揺れる木、旗などに使います。Frigate はその領域で検出を実行しません。関心のある物体が決して現れない動きに向いています。',
          '**物体フィルターマスク：** 特定領域の特定ラベルを抑制します。常に `car` として検出され続ける隣家の駐車車両などが該当します。',
          '**ゾーン＋`required_zones`：** 対象は確かに人物ですが、歩道の人物は通知対象ではありません。歩行者交通に対する正しい対処法です。',
          '**`loitering_time`：** 対象がゾーン内に N 秒とどまることを要求します。私道を上がってくる配達員は該当し、通り過ぎる人は該当しません。',
          '**`inertia`：** 対象が連続 N フレーム（既定 3）ゾーン内にとどまることを要求し、境界でのバウンディングボックスの揺れによる誤発報を防ぎます。',
          '**速度推定：** 地面に沿った 4 点だけで構成したゾーンに `distances` を指定すると、UI と MQTT に速度値が出力されます。',
        ],
        promptExamples: [
          { label: '❌ 悪い進め方', text: 'すべてのカメラ・すべての人物・終日で通知を有効にし、前の歩道が一晩に 40 件の通知を生むため 2 日で通知を切ってしまう。' },
          { label: '✅ 良い進め方', text: '敷地境界の内側の地面だけを覆う driveway_apron ゾーンを作り、review.alerts.required_zones をそのゾーンに設定し、loitering_time: 4 を加える。そのうえで detections（通知なし）は他の対象にも有効のままにして、検索可能な記録を欠けさせない。' },
        ],
        callouts: [
          { type: 'warning', text: '画面上半分にゾーンを引いても意味がありません。存在判定はバウンディングボックスの下端中央で行われます。ゾーンは地面に描いてください。' },
          { type: 'insight', text: '誤検知はほぼ確実にモデル品質の問題ではありません。一般的な住宅設置では、検出器のアップグレードよりゾーンと required_zones のほうがはるかに多くのノイズを取り除きます。' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Frigate では、モーションマスクはその領域の検出処理自体を止め、ゾーンと required_zones は検出を通常どおり実行したうえで、どの検出が通知を発生させてよいかだけを制限します。' },
        ],
      },
      homeAssistant: {
        id: 'home-assistant',
        title: 'Frigate を Home Assistant にどう接続しますか？',
        content:
          '**先に Home Assistant で MQTT 統合を設定し、Frigate を同じブローカーに向けてから Frigate 統合をインストールしてください。カメラごと・ゾーンごとに camera、image、sensor、switch、binary_sensor のエンティティが生成されます。** MQTT を先に設定していないと、統合はインストールされるものの何も生成されません。',
        numberedItems: [
          'MQTT ブローカー（通常は Mosquitto アドオン）を導入し、Home Assistant に MQTT 統合を追加します。',
          'Frigate の config.yml の `mqtt` ブロックを同じブローカーに向け、専用のユーザー名とパスワードを設定します。',
          'HACS 経由またはコア統合として Frigate 統合をインストールし、Frigate ホストを指定します。',
          'Media Source 統合を有効にして、録画とスナップショットをメディアブラウザーに表示させます。',
          'オートメーションはカメラ単位ではなくゾーン単位のバイナリセンサーを起点に組み立てます。',
        ],
        itemHeadings: true,
        columns: ['エンティティ種別', '得られるもの', '主な使い道'],
        rows: [
          { 'エンティティ種別': 'binary_sensor', '得られるもの': 'カメラ別・ゾーン別・物体ラベル別の動体および物体の存在', '主な使い道': 'ほぼすべてのオートメーションのトリガー。特定ゾーン内の人物は、カメラの動体よりはるかに優れたトリガーになります' },
          { 'エンティティ種別': 'camera', '得られるもの': 'ポート 8554 の Frigate 再配信から供給されるライブストリーム', '主な使い道': 'ダッシュボードのカードやキャスト。カメラではなくここを指すことで、カメラへの二重接続を避けられます' },
          { 'エンティティ種別': 'image', '得られるもの': 'カメラごとの、直近に検出された物体のスナップショット', '主な使い道': 'スナップショット API を手動で呼ばずに、モバイル通知へ画像を添付できます' },
          { 'エンティティ種別': 'sensor', '得られるもの': 'ゾーン別・カメラ別の物体カウントと、検出器およびプロセスの性能値', '主な使い道': '在室ロジックとシステム状態ダッシュボード。ここの推論時間は、検出器が CPU にフォールバックした際の早期警告になります' },
          { 'エンティティ種別': 'switch', '得られるもの': 'カメラごとの検出・録画・スナップショットの切り替え', '主な使い道': 'プライバシー用オートメーション。在宅判定が出たら屋内検出を停止する、といった使い方ができます' },
        ],
        note: 'この統合は camera.turn_on と camera.turn_off のアクションも提供し、MQTT 設定を分けた複数の Frigate サーバーに対応し、RTSP URL テンプレートを Jinja2 で上書きできます。',
        callouts: [
          { type: 'warning', text: 'Frigate 統合はインストールできたのにエンティティが 1 つも出てこない場合、原因はほぼ MQTT です。Home Assistant 側で MQTT 統合を追加していないか、Frigate と Home Assistant が別々のブローカーを見ているかのどちらかです。' },
          { type: 'practice', text: 'オートメーションはゾーンのバイナリセンサーに物体ラベルの条件を組み合わせて起動してください。カメラの動体センサー単体では雨でも発火しますが、`binary_sensor.driveway_driveway_apron_person` は発火しません。' },
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'セマンティック検索・顔認識・ナンバープレート認識で何ができますか？',
        content:
          '**セマンティック検索は「夜間に進入路にいた黒いバン」と入力して該当クリップを取り出せる機能です。顔認識とナンバープレート認識は匿名の検出を名前付きの検出に変えます。いずれも Frigate+ の契約なしで動作します。** これらのコストは金銭ではなく RAM です。',
        items: [
          '**セマンティック検索：** RAM 8 GB 以上、AVX / AVX2 対応 CPU が必須で、理想は 16 GB と専用 GPU です。Raspberry Pi では実用になりません。',
          '**埋め込みモデル：** 既定は Jina CLIP V1 です。`small` は量子化済みで CPU でも実用的に動き、`large` は GPU があればそれを利用します。',
          '**Jina CLIP V2** は英語のみでなく 89 言語に対応しますが、Frigate は「RAM と推論時間が大幅に増える割に約 3% の改善」と記載しており、CPU 推論は推奨していません。',
          '**再インデックスは手動：** セマンティック検索を有効にしても既存の物体は索引化されません。UI の「Reindex」ボタンを使うか `reindex: True` を設定します。実行中は CPU 負荷が高くなります。',
          '**顔認識とナンバープレート認識** はローカルで動作し、契約は不要です（Frigate+ のモデルは効率を高めます）。',
          '**GenAI による説明生成：** 0.17 で複数プロバイダー対応と llama.cpp 専用連携が追加され、説明文を自宅のモデルで生成できるようになりました — [Home Assistant でのローカル LLM 自動化](/ja/smart-home/ai-automations-local-llm)を参照。',
        ],
        callouts: [
          { type: 'tip', text: 'クリップが 1 年分たまる前にセマンティック検索を有効化してください。GPU なしのミニ PC で追跡対象 20 万件を再インデックスするのは一晩がかりの作業です。' },
          { type: 'note', text: 'Frigate 0.16 ではセマンティック検索トリガーが追加されました。追跡対象が保存済みの画像や説明に一致した時点でアクションが起動します。「映像を検索する」と「映像の意味に基づいて自動化する」をつなぐ機能です。' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Frigate+ の年額 50 ドルは妥当ですか？',
        content:
          '**標準モデルでは解消しない、具体的で反復する誤検知が出てきた時点で Frigate+ は妥当です。そうでなければ無償モデルと適切なゾーン設定で十分です。** 年額 50 ドル（USD 決済）で最大 12 個のファインチューニング済みモデルが含まれ、追加のファインチューニングは 1 回 5 ドルです。',
        decisionBlock: {
          title: 'Frigate+ と標準モデル、どちらを選ぶか',
          localIf: [
            '自宅の敷地で特定の物体が繰り返し誤分類される',
            '標準モデルが苦手とする特殊なカメラアングルがある',
            '自分のアップロードを効率化するため AI によるラベル候補が欲しい',
            'オープンソース開発の継続を支援したい',
          ],
          cloudIf: [
            '誤通知の原因が歩道の通行なら、ゾーン設定で無償に解決できる',
            'Frigate の対応ラベル外が必要な場合。独自ラベルはまだ利用できません',
            'カメラが 1〜2 台で、構図も単純である',
          ],
          quick: [
            'まずゾーンを直し、2 週間後に再評価する',
            'それでも実在の物体で通知が外れるなら契約する',
            '学習させたモデルは解約後もダウンロード可能なまま',
          ],
        },
        items: [
          'Frigate+ のベースモデルは YOLOv9 ベースの 2026.0 に更新され、`lawnmower` や `heron` といった候補ラベルが追加されました。',
          '任意の独自ラベルはまだ追加できません。学習は Frigate が対応するラベル集合に限られます。',
          '顔認識とナンバープレート認識に契約は必要ありません。',
        ],
        callouts: [
          { type: 'insight', text: 'ゾーンを詰める前に契約するのは、50 ドルを払って何も改善しない最も一般的なパターンです。ファインチューニングは正しい検出をより確実にするだけで、正しく検出された歩行者が歩行者でなくなるわけではありません。' },
        ],
      },
      cost: {
        id: 'cost',
        title: 'サブスク型カメラと比べて費用はどうですか？',
        content:
          '**Frigate は、カメラ台数に比例して増えるクラウド月額を、台数に比例しない一度きりのハードウェア費用に置き換えます。** カメラが 2 台を超えるなら、通常 1 年以内に損益分岐します。',
        columns: ['項目', 'クラウドカメラ', 'Frigate'],
        rows: [
          { '項目': '継続費用', 'クラウドカメラ': '月額、多くはカメラ単位', 'Frigate': 'なし' },
          { '項目': '初期費用', 'クラウドカメラ': 'カメラのみ', 'Frigate': 'ホスト＋検出器＋ストレージ' },
          { '項目': 'AI 検出', 'クラウドカメラ': '事業者のクラウド', 'Frigate': 'ローカル（OpenVINO/Hailo/ONNX）' },
          { '項目': '映像の保存先', 'クラウドカメラ': '事業者のデータセンター', 'Frigate': '自分のディスク' },
          { '項目': 'ネット障害時', 'クラウドカメラ': '機能低下または停止', 'Frigate': 'LAN 内で完全に動作' },
          { '項目': '機能廃止リスク', 'クラウドカメラ': '事業者がプランを変更しうる', 'Frigate': '使用中のバージョンは動き続ける' },
        ],
        note: 'Frigate ではカメラを 1 台増やすとカメラ代だけがかかります。サブスク型では通常カメラ代に加えて請求項目が 1 行増えます。差が広がるのはここです。[サブスクなしのスマートホーム運用](/ja/smart-home/smart-home-without-subscriptions)も参照してください。',
        callouts: [
          { type: 'note', text: '電気代も正直に数えてください。常時稼働のミニ PC とディスクでおよそ 15〜30 W です。5 年で見れば実費として無視できませんが、多カメラのクラウドプランよりは十分に安く収まります。' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Frigate 構築でよくある失敗',
        content:
          '**Frigate 構築の失敗の大半は 5 つの誤りに集約され、そのうちハードウェアに関するものは 1 つだけです。**',
        items: [
          '**メインストリームで検出する：** `detect` ロールを 4K ストリームに向けると、モデル入力が 320x320 である以上、精度は上がらずデコード負荷だけが何倍にもなります。検出は必ずサブストリーム、録画はメインストリームで行ってください。',
          '**`shm_size` を既定のままにする：** 128 MB では 720p カメラ 2 台程度しか賄えません。それ以上のカメラは明確なエラーなしに断続的に落ちます。`--shm-size=512mb` を設定して先へ進んでください。',
          '**MQTT より先に Home Assistant 統合を入れる：** 統合は問題なくインストールされ、そして何も作りません。先に Home Assistant の MQTT 統合と Frigate の `mqtt` ブロックを、同じブローカーに向けて設定してください。',
          '**検出器を替えて誤通知を直そうとする：** 歩道の歩行者は正しい検出です。解決策は `required_zones` と `loitering_time` を伴うゾーンであり、高速なアクセラレーターや有料モデルではありません。',
          '**OS 用 SSD に録画する：** 連続的な映像書き込みはコンシューマー SSD の寿命を急速に消費します。`/media/frigate` は HDD に置き、`/tmp/cache` は高速のままにして、`retain.mode: motion` を設定してください。',
          '**Proxmox LXC で運用する：** デバイスパススルーは一見動作したあと、サポート外かつ切り分け不能な形で壊れます。QEMU 仮想マシンを使ってください。',
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論：実際に何を組むべきか',
        content:
          '**RAM 16 GB の Intel ミニ PC を買い、その iGPU で OpenVINO 検出器を動かし、720p / 5fps のサブストリームを持つ PoE カメラを使い、最初の 1 週間はハードウェアではなくゾーン設定に充ててください。** この構成で一般的な住宅は十分にまかなえ、カメラが増えたら後から Hailo-8 を足す余地も残ります。',
        items: [
          'ゼロから始めるなら **Intel iGPU 上の OpenVINO** を使ってください。最も低コストで追加ハードウェア不要、カメラ 2〜6 台には十分な余裕があります。',
          'カメラが 8 台を超える、または消費電力が重要なら **Hailo-8 M.2 モジュール** を使ってください。',
          'すでに NVIDIA GPU があるなら **ONNX** を使ってください。同じ機体でローカル LLM も動かす場合はとくに有効です。',
          '**Coral** は、ワット数が絶対的な制約であり、推奨経路ではなくなった点を受け入れられる場合にのみ使ってください。',
          '**cpu** 検出器は避けてください。フォールバックとしては OpenVINO の CPU モードのほうが優れています。',
          '迷ったら Intel N150 ミニ PC とカメラ 2 台から始め、ゾーンを詰めてから拡張してください。',
        ],
        callouts: [
          { type: 'practice', text: '実際に機能する予算配分の順序は、まずカメラと PoE スイッチ、次にホスト、次にストレージ、そしてシステムページの数値が必要だと示したときに初めてアクセラレーターです。アクセラレーターを最初に買うのが典型的な順序の逆転です。' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Frigate NVR とは何ですか？', a: 'Frigate は、OpenCV と TensorFlow を用いて IP カメラ映像に対する AI 物体検出をローカル実行するオープンソースのネットワークビデオレコーダーです。単なる動体ではなく検出内容に基づいてクリップを録画し、検出結果を MQTT で配信するため Home Assistant から自動化できます。コアソフトウェアにクラウドサービスやサブスクリプションはありません。' },
          { q: '2026年でも Frigate に Google Coral TPU は必要ですか？', a: 'いいえ。Frigate のハードウェアドキュメントは、消費電力が極端に厳しい場合を除き、新規インストールで Coral を推奨しないと明記しています。新規構築では Intel iGPU 上の OpenVINO 検出器、Hailo-8 モジュール、または既存 NVIDIA GPU 上の ONNX 検出器が推奨経路です。' },
          { q: 'Frigate のどのバージョンを使うべきですか？', a: '2026年6月28日にリリースされた Frigate 0.17.2 が現行の安定版です。0.18.0 は 2026年7月からベータ段階にあり、3 番目のベータは 2026年8月8日に公開されました。マイナーバージョン間の設定変更に対応できる場合のみ 0.18 を使ってください。' },
          { q: 'Frigate にはどれくらいの RAM が必要ですか？', a: '物体検出と録画だけなら 8 GB で余裕をもって動作します。セマンティック検索を使うと要件が上がり、Frigate は最低 8 GB、推奨は 16 GB 以上と専用 GPU、さらに AVX および AVX2 命令に対応した CPU が必要と記載しています。' },
          { q: '家の前を通る人で毎回通知が来るのはなぜですか？', a: 'それが正しい検出だからです。敷地内の地面だけを覆うゾーンを描き、review.alerts.required_zones をそのゾーンに設定し、loitering_time を加えて通行人が立ち止まらない限り通知しないようにしてください。存在判定はバウンディングボックスの下端中央で行われるため、ゾーンは地面を覆う必要があります。' },
          { q: 'インターネット接続がなくても Frigate は動きますか？', a: 'はい。検出、録画、MQTT、Home Assistant のオートメーションはすべて LAN 内で完結します。接続が必要なのは外出先からの遠隔視聴と、任意で使うクラウド型 GenAI プロバイダーだけです。0.17 では llama.cpp 連携が追加され、説明文の生成もローカルで行えます。' },
          { q: 'Frigate のゾーンとマスクは何が違いますか？', a: 'モーションマスクはその領域で検出処理そのものを止めるため、タイムスタンプの焼き込みや常に揺れる草木に向いています。ゾーンは検出を通常どおり実行したうえで、required_zones によって通知を出してよい検出だけに絞り込みます。物体でないものにはマスク、関心のない実在の物体にはゾーンです。' },
          { q: 'Frigate サーバー 1 台で何台のカメラを扱えますか？', a: 'カメラ台数そのものより推論時間で決まります。実用的な毎秒検出回数はおよそ 1000 を推論時間（ミリ秒）で割った値で、これを全カメラで共有します。カメラごとに検出 5fps、Intel Arc A750 で YOLOv9-320 が 8 ms という条件なら、一般的な住宅設置には十分な余裕があります。' },
          { q: '顔認識やナンバープレート認識に Frigate+ は必要ですか？', a: 'いいえ。顔認識とナンバープレート認識は契約なしでローカル動作します（Frigate+ のモデルは効率を改善します）。Frigate+ は年額 50 ドルで最大 12 個のファインチューニング済みモデルを含み、追加は 1 回 5 ドルです。誤分類が繰り返される場合には有効ですが、歩道の通行対策には不要です。' },
          { q: 'Proxmox の LXC コンテナで Frigate を動かせますか？', a: 'いいえ。Proxmox LXC は明確に非対応です。代わりに QEMU 仮想マシンを使ってください。iGPU、Coral、Hailo モジュールのパススルーは LXC 上で一見動作しても、サポート不能な形で破綻することがあります。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル AI カメラがプライバシー面でクラウドカメラに勝る理由を理解する](/ja/smart-home/local-ai-security-camera) — 構築の詳細に入る前の判断材料',
          '[RTSP と ONVIF 対応が確認されたローカル防犯カメラを比較する](/ja/smart-home/best-local-security-cameras-2027) — Frigate に正しく映像を渡せるカメラ',
          '[Home Assistant とローカル AI を 1 台で動かすミニ PC を確認する](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — Frigate 構築に見合ったホスト',
          '[完全ローカルのスマートホームに必要なハードウェア要件を確認する](/ja/smart-home/best-hardware-for-local-smart-home) — アクセラレーター、ストレージ、ネットワーク',
          '[Home Assistant の始め方を学ぶ](/ja/smart-home/home-assistant-getting-started) — 初めての場合の前提知識',
          '[カメラを置きたくない部屋向けのレーダー在室検知を調べる](/ja/smart-home/radar-presence-sensing-no-camera) — 屋内向けのカメラ不要な代替手段',
          '[同じマシンでローカル LLM を動かすための Ollama インストール手順を見る](/ja/local-llms/how-to-install-ollama) — クラスター横断：Frigate イベントのローカル GenAI 説明生成',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '**Frigate 推奨ハードウェア** — [docs.frigate.video/frigate/hardware](https://docs.frigate.video/frigate/hardware) — 検出器ごとの公表推論時間と、新規インストールで Coral を推奨しないという記載。',
          '**Frigate 物体検出器の設定** — [docs.frigate.video/configuration/object_detectors](https://docs.frigate.video/configuration/object_detectors) — 検出器 `type` の全一覧と、CPU 検出器を推奨しない旨の注記。',
          '**Frigate カメラ設定** — [docs.frigate.video/frigate/camera_setup](https://docs.frigate.video/frigate/camera_setup) — 検出用・録画用ストリームの解像度、フレームレート、I フレーム間隔の指針。',
          '**Frigate ゾーン設定** — [docs.frigate.video/configuration/zones](https://docs.frigate.video/configuration/zones) — required_zones、loitering_time、inertia の既定値、速度推定の要件。',
          '**Frigate セマンティック検索** — [docs.frigate.video/configuration/semantic_search](https://docs.frigate.video/configuration/semantic_search) — RAM と AVX2 の要件、Jina CLIP V1 / V2 の比較、再インデックスの挙動。',
          '**Frigate Home Assistant 連携** — [docs.frigate.video/integrations/home-assistant](https://docs.frigate.video/integrations/home-assistant) — 前提となる MQTT と、統合が生成するエンティティ種別。',
          '**GitHub の Frigate リリース** — [github.com/blakeblackshear/frigate/releases](https://github.com/blakeblackshear/frigate/releases) — 0.17.x および 0.18.0 ベータのバージョン番号とリリース日。',
          '**Frigate+** — [frigate.video/plus/](https://frigate.video/plus/) — 契約価格、含まれるファインチューニング回数、ラベルの制約。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Frigate NVR 構築ガイド：検出器・ゾーン・Home Assistant（2026年）',
      description: 'Frigate 0.17.2 はクラウドも月額も不要で AI 検出をローカル実行。公式ドキュメントは新規構築での Coral 採用を推奨しなくなりました。代わりに選ぶべき検出器を解説します。',
      url: 'https://www.promptquorum.com/ja/smart-home/frigate-nvr-home-assistant-setup',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      about: [
        { '@type': 'Thing', name: 'Frigate NVR' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: '物体検出' },
        { '@type': 'Thing', name: 'OpenVINO' },
        { '@type': 'Thing', name: 'Hailo-8' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Frigate' },
        { '@type': 'SoftwareApplication', name: 'Home Assistant' },
        { '@type': 'SoftwareApplication', name: 'go2rtc' },
      ],
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '自己ホスト型 AI カメラシステムを構築する Home Assistant ユーザー' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/ja/smart-home/frigate-nvr-home-assistant-setup' },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Frigate NVR をインストールして Home Assistant に接続する',
      inLanguage: 'ja',
      totalTime: 'PT90M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'ホストを準備する', text: 'Debian 系ホストに Docker をインストールし、/config と /media/frigate のディレクトリを作成します。' },
        { '@type': 'HowToStep', position: 2, name: '最小構成を書く', text: 'カメラ 1 台のみで検出器ブロックのない config.yml を作成し、既定値で起動して映像が届くことを確認します。' },
        { '@type': 'HowToStep', position: 3, name: 'コンテナを起動する', text: 'shm_size を明示し、Intel なら /dev/dri、NVIDIA なら GPU ランタイム、Hailo なら /dev/hailo0 を渡して Frigate を起動します。' },
        { '@type': 'HowToStep', position: 4, name: 'Web UI で確認する', text: 'Frigate の Web UI を開き、カメラ映像、検出 FPS、システムページの推論時間を確認します。' },
        { '@type': 'HowToStep', position: 5, name: '実際の検出器を追加する', text: 'ハードウェアに応じた detectors ブロックを追加して再起動し、推論時間が公表値まで下がることを確認します。' },
        { '@type': 'HowToStep', position: 6, name: 'Home Assistant に接続する', text: 'config.yml に MQTT ブローカーを設定し、Home Assistant に MQTT 統合を追加したうえで Frigate 統合をインストールします。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate NVR とは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Frigate は、OpenCV と TensorFlow を用いて IP カメラ映像に対する AI 物体検出をローカル実行するオープンソースのネットワークビデオレコーダーです。検出内容に基づいてクリップを録画し、検出結果を MQTT で配信するため Home Assistant から自動化できます。' } },
        { '@type': 'Question', name: '2026年でも Frigate に Google Coral TPU は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。Frigate のハードウェアドキュメントは、消費電力が極端に厳しい場合を除き、新規インストールで Coral を推奨しないと明記しています。Intel iGPU 上の OpenVINO 検出器、Hailo-8 モジュール、既存 NVIDIA GPU 上の ONNX 検出器が推奨経路です。' } },
        { '@type': 'Question', name: 'Frigate のどのバージョンを使うべきですか？', acceptedAnswer: { '@type': 'Answer', text: '2026年6月28日にリリースされた Frigate 0.17.2 が現行の安定版です。0.18.0 は 2026年7月からベータ段階にあり、3 番目のベータは 2026年8月8日に公開されました。' } },
        { '@type': 'Question', name: 'Frigate にはどれくらいの RAM が必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '物体検出と録画だけなら 8 GB で余裕をもって動作します。セマンティック検索を使う場合、Frigate は最低 8 GB、推奨は 16 GB 以上と専用 GPU、さらに AVX および AVX2 対応 CPU が必要と記載しています。' } },
        { '@type': 'Question', name: '家の前を通る人で毎回通知が来るのはなぜですか？', acceptedAnswer: { '@type': 'Answer', text: 'それが正しい検出だからです。敷地内の地面だけを覆うゾーンを描き、review.alerts.required_zones をそのゾーンに設定し、loitering_time を加えてください。存在判定はバウンディングボックスの下端中央で行われるため、ゾーンは地面を覆う必要があります。' } },
        { '@type': 'Question', name: 'インターネット接続がなくても Frigate は動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。検出、録画、MQTT、Home Assistant のオートメーションはすべて LAN 内で完結します。接続が必要なのは外出先からの遠隔視聴と、任意で使うクラウド型 GenAI プロバイダーだけです。' } },
        { '@type': 'Question', name: 'Frigate のゾーンとマスクは何が違いますか？', acceptedAnswer: { '@type': 'Answer', text: 'モーションマスクはその領域で検出処理そのものを止めます。ゾーンは検出を通常どおり実行したうえで、required_zones によって通知を出してよい検出だけに絞り込みます。' } },
        { '@type': 'Question', name: 'Frigate サーバー 1 台で何台のカメラを扱えますか？', acceptedAnswer: { '@type': 'Answer', text: 'カメラ台数そのものより推論時間で決まります。実用的な毎秒検出回数はおよそ 1000 を推論時間（ミリ秒）で割った値で、これを全カメラで共有します。' } },
        { '@type': 'Question', name: '顔認識やナンバープレート認識に Frigate+ は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。顔認識とナンバープレート認識は契約なしでローカル動作します。Frigate+ は年額 50 ドルで最大 12 個のファインチューニング済みモデルを含み、追加は 1 回 5 ドルです。' } },
        { '@type': 'Question', name: 'Proxmox の LXC コンテナで Frigate を動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。Proxmox LXC は明確に非対応です。代わりに QEMU 仮想マシンを使ってください。iGPU、Coral、Hailo モジュールのパススルーは LXC 上で一見動作しても、サポート不能な形で破綻することがあります。' } },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    current_hardware_mentioned: ['Google Coral USB/M.2', 'Hailo-8 / Hailo-8L', 'Intel Arc A750', 'Intel UHD 730 iGPU', 'Intel NPU', 'NVIDIA RTX 3050 / RTX 3070', 'AMD Radeon 780M', 'Apple M3 Pro'],
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/frigate-nvr-home-assistant-setup-overview-hero-zh.webp',
    title: 'Frigate NVR 搭建指南：检测器、区域与 Home Assistant（2026）',
    seoTitle: 'Frigate NVR 2026：检测器选择与 Home Assistant 集成',
    intro:
      'Frigate 是一款开源网络录像机，在你自己的硬件上运行 AI 目标检测，并把每一次检测结果以实体形式交给 Home Assistant。本指南覆盖 2026 年的检测器选择（Google Coral 已不再是默认答案）、摄像头码流设置、一份可直接运行的 config.yml、真正能消除误报的区域配置、Home Assistant 集成，以及 0.16 与 0.17 带来的变化。',
    metaDescription:
      'Frigate 0.17.2 在本地完成 AI 检测，无云端、无订阅。官方文档已不再推荐新装机选用 Coral——本文说明应该改选哪种检测器。',
    twitterDescription:
      'Frigate NVR 实操搭建指南：2026 年检测器选择、摄像头码流设置、可运行的 config.yml、区域调优与 Home Assistant 集成。',
    readTime: '阅读约16分钟',
    educationalLevel: 'Intermediate',
    audience: '使用 Frigate 自建 AI 摄像头系统的 Home Assistant 用户',
    primaryTerm: 'Frigate NVR 搭建',
    targetKeywords: [
      'frigate nvr 搭建',
      'frigate home assistant 集成',
      'frigate 检测器 coral openvino',
      'frigate config yml 示例',
      'frigate 区域 误报',
    ],
    leadAnswerBlock:
      '**Frigate 是一款开源 NVR，在本地对摄像头码流运行 AI 目标检测，并把每一次检测结果作为实体暴露给 Home Assistant。** 截至 Frigate 0.17.2，新装机的推荐起点是运行 OpenVINO 检测器的 Intel 核显，而不是 Google Coral。',
    quickAnswerTop: {
      zh: {
        question: '如何搭建 Frigate NVR 并接入 Home Assistant？',
        answer:
          '用 Docker 运行 Frigate，在 config.yml 中把检测指向每台摄像头的低分辨率子码流、把录像指向主码流。按硬件选择检测器（Intel 核显用 OpenVINO，NVIDIA 显卡用 ONNX，或使用 Hailo-8 模块），然后在 Home Assistant 中安装 Frigate 集成。Home Assistant 必须先配置好 MQTT 集成——这是首次搭建时最常被忽略的一步。',
        bullets: [
          'Frigate 0.17.2 是当前稳定版（2026 年 6 月 28 日发布）',
          '检测用 1280x720 / 5 fps，录像用主码流 15 fps',
          'Frigate 已不再推荐新装机使用 Google Coral',
          'Intel Arc A750 跑 YOLOv9-320 约 8 ms，Intel UHD 730 核显约 14 ms',
          'Home Assistant 集成以 MQTT 集成为前提',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: 'Frigate 的实际作用', anchor: 'what-frigate-is' },
      { label: '该买哪种检测器', anchor: 'detector' },
      { label: '服务器硬件与内存', anchor: 'server-hardware' },
      { label: '摄像头码流设置', anchor: 'cameras' },
      { label: '安装 Frigate', anchor: 'install' },
      { label: '可运行的 config.yml', anchor: 'config' },
      { label: '区域、遮罩与误报', anchor: 'zones' },
      { label: 'Home Assistant 集成', anchor: 'home-assistant' },
      { label: '语义搜索、人脸与车牌', anchor: 'ai-features' },
      { label: 'Frigate+ 值得买吗', anchor: 'frigate-plus' },
      { label: '与订阅摄像头的成本对比', anchor: 'cost' },
      { label: '常见错误', anchor: 'mistakes' },
      { label: '结论', anchor: 'verdict' },
      { label: '常见问题', anchor: 'faq' },
      { label: '参考来源', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate 是一款开源 NVR，在本地对 RTSP 摄像头码流运行 AI 目标检测，并通过 MQTT 把每一次检测结果推送到 Home Assistant，全程无需云服务，也无需订阅。' },
      { type: 'plain-terms', content: '普通智能摄像头会把视频上传给厂商，由厂商判断画面里有没有人，并为此按月收费。Frigate 把这一步放在你家里的电脑上完成：视频不出家门，没有月费，而且每一次检测都会变成 Home Assistant 可以响应的事件。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        content:
          'Frigate 官方文档现已不建议新装机采用 Google Coral TPU——正是大多数教程仍然第一个推荐的那款加速器。',
        items: [
          'Frigate 0.17.2（2026 年 6 月 28 日）为当前稳定版；0.18.0 自 2026 年 8 月 8 日起处于测试阶段',
          '先定检测器：运行 OpenVINO 的 Intel 核显是最省钱的可行起点，Hailo-8 或 NVIDIA 显卡可继续向上扩展',
          'Coral 现在是备选方案而非默认选择——仅在功耗是关键约束时才推荐',
          '每台摄像头两路码流：检测用 1280x720 / 5 fps，录像用全分辨率主码流 15 fps',
          '真正消除误报的是区域配合 required_zones、loitering_time 与 inertia，而不是更好的模型',
          'Home Assistant 集成必须先配置 MQTT 集成，否则不会生成任何实体',
          '语义搜索至少需要 8 GB 内存，要用得舒服建议 16 GB 加独立显卡，CPU 需支持 AVX2',
          'Frigate+ 每年 $50（美元计费），含最多 12 个微调模型；人脸识别与车牌识别无需订阅即可使用',
        ],
      },
      whatFrigateIs: {
        id: 'what-frigate-is',
        title: 'Frigate 比普通 NVR 多做了什么？',
        content:
          '**Frigate 采用两级流程：先用低开销的移动侦测找出值得细看的画面区域，再由真正的目标检测模型判断其中是否有人、车、宠物或包裹。** 普通 NVR 只按像素变化触发，所以车灯、下雨和摇动的灌木都会报警。',
        items: [
          '**先移动、后 AI：** 低开销移动侦测决定检测器*在哪里*运行，因此一块小型加速器就能覆盖多台摄像头。',
          '**按目标录像：** 保留策略基于检测到的内容，而非 24 小时连续缓冲，存储空间因此更耐用。',
          '**通过 go2rtc 转发：** Frigate 只拉取每台摄像头一次再对外分发，避免五个客户端同时直连摄像头。',
          '**MQTT 输出：** 每个被跟踪目标、区域进入事件和目标计数都会发布出来，这正是 Home Assistant 自动化的基础。',
          '**审阅条目：** 检测被区分为 *alerts*（你要求被告知的）与 *detections*（记录但不打扰）。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Frigate 用低成本的移动侦测挑选画面区域，只在这些区域上运行目标检测模型，因此单块小型加速器就能同时服务多台摄像头。' },
        ],
        callouts: [
          { type: 'note', text: 'alerts 与 detections 的区分是 Frigate 中最实用的概念。alerts 会唤醒手机，detections 构成可检索的记录。两者应分别配置。' },
        ],
      },
      detector: {
        id: 'detector',
        title: '2026 年该为 Frigate 买哪种检测器？',
        content:
          '**从零开始就买带核显的 Intel 主机并使用 OpenVINO 检测器；追求每瓦最低延迟就上 Hailo-8 模块；机器里已经有 NVIDIA 显卡就用 ONNX 检测器。** Frigate 文档明确指出，除非功耗约束异常严格，否则新装机不再推荐 Coral。',
        items: [
          '主机是第六代及更新的 Intel CPU，就用 **OpenVINO**——核显已经买过了，无需再添硬件。',
          '机器里已有 NVIDIA 或 AMD 显卡，就用 **ONNX**，Frigate 会自动识别平台。',
          '想在 M.2 插槽里以低功耗获得加速器级延迟，就用 **Hailo-8 / Hailo-8L**。',
          'NVIDIA Jetson 板卡专用 **TensorRT**——参见[面向智能家居 AI 的 NVIDIA Jetson Orin Nano 评测](/zh/smart-home/nvidia-jetson-orin-nano-smart-home-review)。',
          '只有在功耗是决定性约束、且你接受模型阵容老化时，才使用 **edgetpu**（Coral）。',
          '完全避开 **cpu** 检测器——Frigate 说明 OpenVINO 的 CPU 模式比专用 CPU 检测器更高效。',
        ],
        columns: ['检测器', '硬件', '推理耗时（官方公布）'],
        rows: [
          { '检测器': 'openvino', '硬件': 'Intel Arc A750', '推理耗时（官方公布）': '约 4 ms MobileNetV2 / 约 8 ms YOLOv9-320' },
          { '检测器': 'openvino', '硬件': 'Intel NPU', '推理耗时（官方公布）': '约 6 ms MobileNetV2 / 约 11 ms YOLOv9-320' },
          { '检测器': 'openvino', '硬件': 'Intel UHD 730 核显', '推理耗时（官方公布）': '约 10 ms MobileNetV2 / 约 14 ms YOLOv9-tiny' },
          { '检测器': 'hailo8l', '硬件': 'Hailo-8', '推理耗时（官方公布）': '约 6 ms SSD MobileNet / 约 7 ms YOLOv6n' },
          { '检测器': 'hailo8l', '硬件': 'Hailo-8L', '推理耗时（官方公布）': '约 10 ms SSD MobileNet / 约 11 ms YOLOv6n' },
          { '检测器': 'onnx', '硬件': 'NVIDIA RTX 3070', '推理耗时（官方公布）': '约 6–8 ms YOLOv9 tiny→small 320' },
          { '检测器': 'onnx', '硬件': 'NVIDIA RTX 3050', '推理耗时（官方公布）': '约 8–10 ms YOLOv9 tiny→small 320' },
          { '检测器': 'onnx', '硬件': 'AMD Radeon 780M', '推理耗时（官方公布）': '约 14 ms YOLOv9-tiny-320' },
          { '检测器': 'zmq', '硬件': 'Apple M3 Pro', '推理耗时（官方公布）': '约 6 ms YOLOv9-tiny-320' },
        ],
        note: '以上是 Frigate 官方公布的各检测器数据，并非 PromptQuorum 实测。Frigate 还提供 rknn（瑞芯微 NPU）、memryx、synaptics、deepstack 与 degirum 等检测器类型。',
        callouts: [
          { type: 'warning', text: '多数 Frigate 教程仍然以"先买一块 Coral"开场。这个说法早于 0.16 与 0.17 在 OpenVINO、Hailo 和 ONNX 上的工作，Frigate 自己的硬件页面如今已就新装机明确否定了它。' },
          { type: 'tip', text: 'Coral 的摄像头承载能力约等于 1000 / inference_speed 帧每秒，由所有摄像头共享。按检测 5 fps 计算，10 ms 的推理预算理论上可覆盖约 20 路码流——但温度降频和 USB 供电限制会削减这个数字。' },
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: '检测器就是回答"那是不是一个人"的那块芯片。你可以用 Intel CPU 里自带的显示核心、一块独立 NVIDIA 显卡，或者一个小巧的 M.2 AI 模块。人人推荐的那根 USB 棒（Google Coral）依然能用，但已经不是推荐的起点。' },
        ],
      },
      serverHardware: {
        id: 'server-hardware',
        title: 'Frigate 服务器本身需要什么配置？',
        content:
          '**一台 Intel N 系列或酷睿 i 系列小主机，8–16 GB 内存，系统盘用 SSD，录像另配机械硬盘，足以覆盖 4 到 8 路摄像头的典型住宅。** 瓶颈很少出在 CPU，更多是共享内存、磁盘写入寿命，以及你是否要启用语义搜索。',
        items: [
          '**共享内存（`shm`）：** 默认的 128 MB 只够约两路 720p 摄像头。Frigate 按每路 1280x720 摄像头含日志约 66.63 MB 估算，八路约需 253 MB。',
          '**显式设置 `--shm-size`：** 多数场景下 `--shm-size=512mb` 是稳妥值；设得过小不会给出明确报错，而是表现为摄像头间歇性掉线。',
          '**三个挂载点：** `/config` 存放 YAML 与数据库，`/media/frigate` 存放片段、录像与导出文件，`/tmp/cache` 存放处理中的分段。',
          '**录像写入机械硬盘：** 持续写入会消耗消费级 SSD 的寿命。把 `/media/frigate` 放到机械硬盘，`/tmp/cache` 留在高速存储上。',
          '**AI 功能所需内存：** 语义搜索至少需要 8 GB 与支持 AVX、AVX2 的 CPU；推荐配置是 16 GB 加一块独立显卡。',
        ],
        columns: ['配置', '检测器', '适用场景'],
        rows: [
          { '配置': 'Intel N100/N150 小主机，16 GB', '检测器': 'openvino（核显）', '适用场景': '2–6 路摄像头，不启用语义搜索' },
          { '配置': 'Intel 酷睿 i5 小主机，32 GB', '检测器': 'openvino（核显）', '适用场景': '6–12 路摄像头并启用语义搜索' },
          { '配置': '任意主机 + Hailo-8 M.2', '检测器': 'hailo8l', '适用场景': '低功耗、多摄像头' },
          { '配置': 'RTX 3050 及以上台式机', '检测器': 'onnx', '适用场景': '一台机器同时跑 Frigate 与本地 LLM' },
          { '配置': 'Raspberry Pi 5', '检测器': 'edgetpu / hailo8l', '适用场景': '1–3 路摄像头，功耗预算紧张' },
        ],
        note: 'Frigate 支持裸机 Debian 上的 Docker、Home Assistant 加载项、通过 Helm 部署的 Kubernetes、Unraid、群晖与威联通 NAS、ESXi 以及 Apple Silicon 版 macOS。在 Proxmox 上请使用 QEMU 虚拟机——LXC 明确不受支持。',
        callouts: [
          { type: 'warning', text: '在 Proxmox LXC 容器中运行 Frigate 不受支持。把 Coral 或核显直通进 LXC 看似可行，随后会以无人能替你排查的方式失败。请使用虚拟机。' },
          { type: 'practice', text: '如果想用一台机器同时承载 Frigate、Home Assistant 和本地 LLM，请先按 LLM 的需求定型号——参见[适合 Home Assistant 与本地 AI 的小主机推荐](/zh/smart-home/best-mini-pc-home-assistant-local-ai)。' },
        ],
      },
      cameras: {
        id: 'cameras',
        title: '摄像头该如何为 Frigate 配置？',
        content:
          '**在摄像头固件里配置两路码流：检测用 1280x720 / 5 fps 子码流，录像用原生分辨率主码流 / 15 fps，两者都用 H.264 且宽高比一致。** Frigate 的检测模型输入是 320x320，因此 4K 检测码流毫无收益，只会大幅推高解码开销。',
        numberedItems: [
          '在摄像头固件中把子码流设为 1280x720、5 fps、H.264，I 帧间隔设为 5（每秒一个关键帧）。',
          '把主码流设为摄像头原生分辨率（常见 4 MP 传感器为 2688x1520）、15 fps、H.264，I 帧间隔 30。',
          '让两路码流保持相同宽高比（16:9 对 16:9），使检测框能在检测流与录像流之间正确对应。',
          '在 Frigate 中把 `detect` 角色指向子码流，把 `record` 角色指向主码流。',
          '只有面对真正快速的目标（例如车辆横穿狭窄的车道视野）时，才把检测提高到 10 fps。',
        ],
        items: [
          '使用 H.264 而非 H.265——浏览器对 H.265 的支持有限，实时预览会最先出问题。',
          '在摄像头端改帧率，不要在 Frigate 里改：软件降采样只会白白消耗 CPU。',
          '优先有线 PoE 而非 Wi-Fi；子码流掉线的表现是漏检，而不是明显的故障。',
          '关于正确暴露 RTSP 与 ONVIF 的摄像头硬件，参见[面向 Frigate 搭建的本地安防摄像头选购指南](/zh/smart-home/best-local-security-cameras-2027)。',
        ],
        callouts: [
          { type: 'tip', text: '如果车道尽头的目标从来检测不到，原因通常是分辨率而非模型：1280x720 缩放到 320x320 输入后，远处的人只剩下寥寥几个像素。应把该视野拆到第二台摄像头或一路变焦码流，而不是整体提高检测分辨率。' },
          { type: 'note', text: 'Frigate 只拉取每台摄像头一次，其余客户端都从这份副本读取，因此应让 Home Assistant 指向 Frigate 而非直接指向摄像头。' },
        ],
      },
      install: {
        id: 'install',
        title: '如何安装 Frigate？',
        content:
          '**想走官方支持的路线，就在裸机 Debian 主机上用 Docker Compose；愿意用控制力换一键安装，就用 Home Assistant 加载项。** 两者需要同样的 config.yml 和同一个 MQTT broker。',
        numberedItems: [
          '在 Debian 系主机上安装 Docker，并创建 `/config` 与 `/media/frigate` 目录。',
          '先写一份只含一台摄像头、不含检测器配置块的最小 `config.yml`，让 Frigate 以默认值启动并确认码流可用。',
          '启动容器时显式设置 `shm_size`，并挂载对应设备：Intel 用 `/dev/dri`，NVIDIA 用 GPU 运行时，Hailo 用 `/dev/hailo0`。',
          '打开 Web 界面，确认摄像头画面、检测 FPS 以及系统页面显示的推理耗时。',
          '加入真正的 `detectors` 配置块并重启，确认推理耗时降到该硬件的官方公布水平。',
          '在 `config.yml` 中配置 MQTT broker，随后在 Home Assistant 中添加 Frigate 集成。',
        ],
        codeBlock: `services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:0.17.2
    restart: unless-stopped
    privileged: true
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128   # Intel iGPU (OpenVINO)
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config:/config
      - /srv/frigate/media:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "8971:8971"   # authenticated web UI
      - "8554:8554"   # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'warning', text: '把镜像标签固定到具体版本，不要用 `stable`。Frigate 的配置结构在小版本之间会变化，在 0.17 到 0.18 的分界上执行无人值守的 `docker compose pull`，可能留下一个拒绝加载现有 YAML 的容器。' },
          { type: 'practice', text: '先跑通一台摄像头再加其余。几乎每一个"Frigate 坏了"的求助帖最后都落在某一台摄像头的子码流 URL 上，而配置里只有一条记录时这要好查得多。' },
        ],
      },
      config: {
        id: 'config',
        title: '一份可运行的 Frigate config.yml 长什么样？',
        content:
          '**可运行的配置由四个块组成：`mqtt`、`detectors`、包含两个码流角色的 `cameras`，以及每台摄像头的 `zones` 与 `review` 过滤条件。** 其余项目的默认值在第一天完全够用。',
        codeBlock: `mqtt:
  host: 192.168.1.10
  user: frigate
  password: "{FRIGATE_MQTT_PASSWORD}"

detectors:
  ov:
    type: openvino
    device: GPU

cameras:
  driveway:
    ffmpeg:
      inputs:
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=1
          roles: [detect]
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=0
          roles: [record]
    detect:
      width: 1280
      height: 720
      fps: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: motion
      alerts:
        retain:
          days: 30
    snapshots:
      enabled: true
    motion:
      mask:
        - 0,0,0.35,0,0.35,0.12,0,0.12   # timestamp overlay
    zones:
      driveway_apron:
        coordinates: 0.14,0.98,0.62,0.55,0.95,0.72,0.88,1.0
        loitering_time: 4
        inertia: 3
    review:
      alerts:
        labels: [person, car]
        required_zones: [driveway_apron]
      detections:
        labels: [person, car, dog, cat]`,
        codeLanguage: 'yaml',
        items: [
          '`subtype=1` 与 `subtype=0` 是大华/Amcrest 系列区分子码流与主码流的写法；Reolink 使用 `h264Preview_01_sub` 与 `h264Preview_01_main`。',
          '`retain.mode: motion` 只在有移动的时段保留连续录像，是节省存储的最大杠杆。',
          '`review.alerts.required_zones` 可以避免公共道路上的车辆把你的手机吵醒。',
          'Frigate 0.17 加入了完整的界面化配置，因此上述大部分内容现在可以在 Web 界面里编辑，无需手写。',
        ],
        callouts: [
          { type: 'tip', text: 'Frigate 0.17 还引入了 Profiles——具名的配置覆盖，切换时无需重启容器。做一个扩大 required_zones 的"有客来访"配置，比每周手改两次 YAML 实用得多。' },
        ],
      },
      zones: {
        id: 'zones',
        title: '区域和遮罩是如何消除误报的？',
        content:
          '**区域筛选哪些检测值得关注；移动遮罩则让 Frigate 根本不去看某块画面。目标真实但你不关心时用区域，移动本身根本不是目标时用遮罩。** 区域内的存在判定基于检测框的底部中心点，因此区域必须覆盖脚或车轮所在的地面，而不是头部所在的高度。',
        items: [
          '**移动遮罩：** 用于时间戳水印、晃动的树木、旗帜。Frigate 在该区域不会运行检测，适合那些永远不会是关注目标的移动。',
          '**目标过滤遮罩：** 在特定区域屏蔽特定标签，例如始终被识别为 `car` 的邻居停放车辆。',
          '**区域配合 `required_zones`：** 目标确实是人，但人行道上的人不构成警报。这才是应对行人流量的正确做法。',
          '**`loitering_time`：** 要求目标在区域内停留 N 秒——沿小路走上来的快递员符合条件，路过的行人不符合。',
          '**`inertia`：** 要求目标连续 N 帧（默认 3）留在区域内，避免边界处检测框抖动触发警报。',
          '**速度估算：** 恰好四个贴合地面的顶点加上 `distances` 列表，即可在界面和 MQTT 中输出速度值。',
        ],
        promptExamples: [
          { label: '❌ 错误做法', text: '对所有摄像头、所有人、全天开启警报，然后因为门前人行道每晚产生四十条通知，两天后干脆把通知关掉。' },
          { label: '✅ 正确做法', text: '建立仅覆盖地界线以内地面的 driveway_apron 区域，把 review.alerts.required_zones 设为该区域，加上 loitering_time: 4；同时对其他目标保留 detections（不发通知），使可检索的记录保持完整。' },
        ],
        callouts: [
          { type: 'warning', text: '把区域画在画面上半部分毫无作用。存在判定基于检测框的底部中心点——请把区域画在地面上。' },
          { type: 'insight', text: '误报几乎从来不是模型质量问题。在典型住宅安装中，区域与 required_zones 消除的噪声远多于任何一次检测器升级。' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '在 Frigate 中，移动遮罩会完全停止某一区域的检测运算，而区域配合 required_zones 则让检测照常运行，只限制哪些检测被允许触发警报。' },
        ],
      },
      homeAssistant: {
        id: 'home-assistant',
        title: '如何把 Frigate 接入 Home Assistant？',
        content:
          '**先在 Home Assistant 中配置 MQTT 集成，把 Frigate 指向同一个 broker，然后再安装 Frigate 集成——它会按摄像头和区域生成 camera、image、sensor、switch 与 binary_sensor 实体。** 若未事先配置 MQTT，集成能装上却什么也不会生成。',
        numberedItems: [
          '部署一个 MQTT broker（通常选 Mosquitto 加载项），并在 Home Assistant 中添加 MQTT 集成。',
          '把 Frigate config.yml 的 `mqtt` 块指向同一个 broker，并使用独立的用户名和密码。',
          '通过 HACS 或作为核心集成安装 Frigate 集成，并指向 Frigate 主机。',
          '启用 Media Source 集成，使录像与快照出现在媒体浏览器中。',
          '把自动化建立在按区域的二元传感器上，而不是按摄像头的传感器上。',
        ],
        itemHeadings: true,
        columns: ['实体类型', '你会得到什么', '适合用来做什么'],
        rows: [
          { '实体类型': 'binary_sensor', '你会得到什么': '按摄像头、按区域、按目标标签的移动与目标存在状态', '适合用来做什么': '几乎所有自动化的触发源——"某个特定区域内有人"远比"某台摄像头有移动"更好用' },
          { '实体类型': 'camera', '你会得到什么': '由 Frigate 8554 端口转发提供的实时码流实体', '适合用来做什么': '仪表板卡片与投屏；让 Home Assistant 指向这里而非摄像头，可以避免对摄像头的第二次连接' },
          { '实体类型': 'image', '你会得到什么': '每台摄像头最近一次检测目标的快照', '适合用来做什么': '给手机通知附上图片，无需手工调用快照 API' },
          { '实体类型': 'sensor', '你会得到什么': '按区域与按摄像头的目标计数，以及检测器和进程的性能数据', '适合用来做什么': '在室逻辑与系统健康仪表板——这里的推理耗时是检测器回退到 CPU 的早期预警' },
          { '实体类型': 'switch', '你会得到什么': '每台摄像头的检测、录像与快照开关', '适合用来做什么': '隐私类自动化，例如在到家判定成立时关闭室内检测' },
        ],
        note: '该集成还提供 camera.turn_on 与 camera.turn_off 动作，支持使用不同 MQTT 配置的多台 Frigate 服务器，并允许用 Jinja2 覆盖 RTSP URL 模板。',
        callouts: [
          { type: 'warning', text: '如果 Frigate 集成装好了却一个实体也没有，原因几乎总是 MQTT：要么 Home Assistant 从未添加 MQTT 集成，要么 Frigate 与 Home Assistant 连到了两个不同的 broker。' },
          { type: 'practice', text: '用区域二元传感器加上目标标签条件来触发自动化。单纯的摄像头移动传感器会在下雨时误触发，而 `binary_sensor.driveway_driveway_apron_person` 不会。' },
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: '语义搜索、人脸识别与车牌识别带来什么？',
        content:
          '**语义搜索让你直接输入"夜里停在车道上的黑色面包车"就能找到对应片段；人脸识别与车牌识别把匿名检测变成有名有姓的检测——两者都无需 Frigate+ 订阅。** 这些功能花的是内存，不是钱。',
        items: [
          '**语义搜索：** 至少 8 GB 内存、支持 AVX 与 AVX2 的 CPU，理想配置是 16 GB 加独立显卡。在 Raspberry Pi 上无法可用地运行。',
          '**嵌入模型：** 默认使用 Jina CLIP V1；`small` 为量化版本，可在 CPU 上可用地运行，`large` 在有显卡时会调用显卡。',
          '**Jina CLIP V2** 支持 89 种语言而非仅英语，但 Frigate 记录其提升约 3%，代价是显著更高的内存占用与推理耗时，且不建议用 CPU 推理。',
          '**重建索引需手动：** 启用语义搜索不会索引已有目标。请使用界面上的"Reindex"按钮或设置 `reindex: True`，并预期期间 CPU 负载较高。',
          '**人脸识别与车牌识别** 在本地运行且无需订阅，Frigate+ 模型可以提升效率。',
          '**GenAI 描述：** 0.17 增加了多服务商支持和专门的 llama.cpp 集成，描述可以由你自己硬件上的模型生成——参见[在 Home Assistant 中使用本地 LLM 做自动化](/zh/smart-home/ai-automations-local-llm)。',
        ],
        callouts: [
          { type: 'tip', text: '在积累满一年的片段之前就把语义搜索打开。在没有显卡的小主机上给 20 万个跟踪目标重建索引，是一个通宵的活。' },
          { type: 'note', text: 'Frigate 0.16 增加了语义搜索触发器——当被跟踪目标匹配上已保存的图片或描述时即触发动作。这是从"检索录像"迈向"按录像含义做自动化"的桥梁。' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Frigate+ 一年 $50 值不值？',
        content:
          '**当你出现了标准模型解决不了的、具体且反复出现的误判时，Frigate+ 才值得；否则免费模型加上合理的区域配置就够了。** 订阅每年 $50（美元计费），包含最多 12 次模型微调，额外微调每次 $5。',
        decisionBlock: {
          title: 'Frigate+ 还是标准模型？',
          localIf: [
            '你家场景中某个特定目标被反复错误分类',
            '你的摄像头角度不常见，标准模型表现不佳',
            '你希望获得 AI 建议的标签以加快自己的上传标注',
            '你愿意资助这个开源项目的持续开发',
          ],
          cloudIf: [
            '误报来自人行道通行——区域配置可以免费解决',
            '你需要 Frigate 支持列表之外的标签；自定义标签目前还不可用',
            '你只有一两台摄像头，画面构图也很简单',
          ],
          quick: [
            '先修区域，两周后再重新评估',
            '如果真实目标上的警报仍然不准，再订阅',
            '训练好的模型在取消订阅后仍可下载',
          ],
        },
        items: [
          'Frigate+ 基础模型已更新至 2026.0，基于 YOLOv9，新增了 `lawnmower`、`heron` 等候选标签。',
          '目前还不能添加任意自定义标签，训练仅限于 Frigate 支持的标签集合。',
          '人脸识别与车牌识别不需要订阅。',
        ],
        callouts: [
          { type: 'insight', text: '在调好区域之前就订阅，是花掉 $50 却看不到改善的最常见方式。微调模型让正确的检测更可靠，但不会让一个被正确识别的行人不再是行人。' },
        ],
      },
      cost: {
        id: 'cost',
        title: '与订阅制摄像头相比成本如何？',
        content:
          '**Frigate 把按摄像头计费的云端月租，换成了一次性、且不随摄像头数量增长的硬件支出。** 只要超过两台摄像头，通常在第一年内就能回本。',
        columns: ['维度', '云端摄像头服务', 'Frigate'],
        rows: [
          { '维度': '持续费用', '云端摄像头服务': '按月，且常按摄像头计费', 'Frigate': '无' },
          { '维度': '前期投入', '云端摄像头服务': '仅摄像头', 'Frigate': '主机 + 检测器 + 存储' },
          { '维度': 'AI 检测', '云端摄像头服务': '厂商云端', 'Frigate': '本地（OpenVINO/Hailo/ONNX）' },
          { '维度': '录像存放位置', '云端摄像头服务': '厂商数据中心', 'Frigate': '你自己的硬盘' },
          { '维度': '断网时', '云端摄像头服务': '功能降级或不可用', 'Frigate': '局域网内完全可用' },
          { '维度': '功能被取消的风险', '云端摄像头服务': '厂商可随时改套餐', 'Frigate': '你在用的版本会一直可用' },
        ],
        note: '在 Frigate 里加一台摄像头，只花摄像头的钱。在订阅服务里加一台，通常是摄像头的钱再加账单上多一行——差距正是在这里拉开的。另见[不依赖订阅的智能家居方案](/zh/smart-home/smart-home-without-subscriptions)。',
        callouts: [
          { type: 'note', text: '电费也要如实计算：一台长期运行的小主机加硬盘约 15–30 W。按五年算是一笔真金白银，但仍然明显低于多数多摄像头云端套餐。' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: '搭建 Frigate 时的常见错误',
        content:
          '**Frigate 搭建失败的绝大多数情况归结为五个错误，其中只有一个与硬件有关。**',
        items: [
          '**在主码流上做检测：** 把 `detect` 角色指向 4K 码流会让解码开销成倍上升，而精度毫无提升，因为模型输入只有 320x320。始终在子码流上检测、在主码流上录像。',
          '**`shm_size` 保持默认：** 128 MB 只够约两路 720p 摄像头。多出来的摄像头会间歇性掉线且没有明显报错。设成 `--shm-size=512mb` 就不用再管了。',
          '**在 MQTT 之前安装 Home Assistant 集成：** 集成会顺利装上，然后什么也不生成。请先配置好 Home Assistant 的 MQTT 集成和 Frigate 的 `mqtt` 块，并指向同一个 broker。',
          '**靠换检测器来解决误报：** 人行道上的行人是正确的检测结果。解决办法是配合 `required_zones` 与 `loitering_time` 的区域，而不是更快的加速器或付费模型。',
          '**把录像写到系统 SSD 上：** 持续的视频写入会迅速消耗消费级 SSD 的寿命。把 `/media/frigate` 放到机械硬盘，`/tmp/cache` 保持高速，并设置 `retain.mode: motion`。',
          '**部署在 Proxmox LXC 中：** 设备直通看似可行，随后会以不受支持且无法排查的方式失败。请使用 QEMU 虚拟机。',
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论：到底该怎么配？',
        content:
          '**买一台 16 GB 内存的 Intel 小主机，用它的核显跑 OpenVINO 检测器，配 PoE 摄像头并设置 720p / 5 fps 子码流，然后把第一周花在区域配置而不是硬件上。** 这套配置足以覆盖一栋普通住宅，日后摄像头增多还能再加一块 Hailo-8。',
        items: [
          '从零起步就用 **Intel 核显上的 OpenVINO**——成本最低、无需额外硬件，2–6 路摄像头余量充足。',
          '摄像头超过八台或在意功耗，就用 **Hailo-8 M.2 模块**。',
          '机器里已有 NVIDIA 显卡就用 **ONNX**，尤其是这台机器还要跑本地 LLM 时。',
          '只有当功耗是硬性约束、且你接受它已不是推荐路线时，才选 **Coral**。',
          '避免 **cpu** 检测器；作为退路，OpenVINO 的 CPU 模式更好。',
          '拿不定主意就从一台 Intel N150 小主机加两台摄像头起步，把区域调好再扩容。',
        ],
        callouts: [
          { type: 'practice', text: '真正行得通的预算顺序是：先摄像头和 PoE 交换机，再主机，再存储，最后在系统页面的数据表明确实需要时才买加速器。先买加速器是最典型的顺序颠倒。' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Frigate NVR 是什么？', a: 'Frigate 是一款开源网络录像机，使用 OpenCV 与 TensorFlow 在本地对 IP 摄像头码流运行 AI 目标检测。它按检测到的内容而非单纯的移动来录制片段，并通过 MQTT 发布每一次检测，使 Home Assistant 能够据此自动化。核心软件没有云服务，也没有订阅费。' },
          { q: '2026 年还需要为 Frigate 配 Google Coral TPU 吗？', a: '不需要。Frigate 的硬件文档明确指出，除非功耗要求异常严格，否则新装机不再推荐 Coral。对于新搭建，推荐路径是 Intel 核显上的 OpenVINO 检测器、Hailo-8 模块，或现有 NVIDIA 显卡上的 ONNX 检测器。' },
          { q: '应该运行哪个版本的 Frigate？', a: '2026 年 6 月 28 日发布的 Frigate 0.17.2 是当前稳定版。0.18.0 自 2026 年 7 月起处于测试阶段，第三个测试版发布于 2026 年 8 月 8 日，因此只有在你能接受小版本之间的配置变动时才使用 0.18。' },
          { q: 'Frigate 需要多少内存？', a: '仅做目标检测与录像时，8 GB 可以从容运行。启用语义搜索会抬高门槛：Frigate 记录的最低要求是 8 GB，推荐 16 GB 以上并配独立显卡，同时 CPU 需支持 AVX 与 AVX2 指令集。' },
          { q: '为什么路人经过就一直收到 Frigate 警报？', a: '因为那些都是正确的检测。请画一个只覆盖自家地界内地面的区域，把 review.alerts.required_zones 设为该区域，并加上 loitering_time，让路人必须停下来才会触发。存在判定基于检测框底部中心点，所以区域必须覆盖地面。' },
          { q: '没有互联网连接时 Frigate 还能用吗？', a: '可以。检测、录像、MQTT 与 Home Assistant 自动化全部在局域网内运行。只有从外部远程查看，以及可选的云端 GenAI 服务商需要联网；0.17 还加入了 llama.cpp 集成，描述也可以在本地生成。' },
          { q: 'Frigate 里的区域和遮罩有什么区别？', a: '移动遮罩会让 Frigate 在该区域完全不运行检测，适合时间戳水印和持续晃动的枝叶。区域则让检测照常运行，只通过 required_zones 限制哪些检测可以触发警报。非目标用遮罩，你不关心的真实目标用区域。' },
          { q: '一台 Frigate 服务器能带多少路摄像头？', a: '这取决于推理耗时而非摄像头数量本身——可用的每秒检测次数约等于 1000 除以推理耗时（毫秒），并由所有摄像头共享。按每台摄像头检测 5 fps、Intel Arc A750 跑 YOLOv9-320 约 8 ms 计算，典型住宅安装仍有相当大的余量。' },
          { q: '人脸识别或车牌识别需要 Frigate+ 吗？', a: '不需要。人脸识别与车牌识别在本地运行且无需订阅，Frigate+ 模型可以提升效率。Frigate+ 每年 $50，包含最多 12 次模型微调，额外微调每次 $5——它适合解决反复出现的错误分类，而不是人行道通行问题。' },
          { q: '可以在 Proxmox LXC 容器里运行 Frigate 吗？', a: '不可以，Proxmox LXC 明确不受支持。请改用 QEMU 虚拟机。核显、Coral 或 Hailo 模块的直通在 LXC 中可能看似可行，随后会以无法获得支持的方式失败。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[了解本地 AI 摄像头为何在隐私上胜过云端摄像头](/zh/smart-home/local-ai-security-camera) — 先看清理由，再看搭建细节',
          '[对比已确认支持 RTSP 与 ONVIF 的本地安防摄像头](/zh/smart-home/best-local-security-cameras-2027) — 哪些摄像头能干净地喂给 Frigate',
          '[了解可同时运行 Home Assistant 与本地 AI 的小主机](/zh/smart-home/best-mini-pc-home-assistant-local-ai) — 适配 Frigate 搭建的主机选型',
          '[查看完全本地化智能家居的硬件要求](/zh/smart-home/best-hardware-for-local-smart-home) — 加速器、存储与网络',
          '[学习如何开始使用 Home Assistant](/zh/smart-home/home-assistant-getting-started) — 如果你是新手，这是前置条件',
          '[了解无需摄像头的毫米波雷达存在检测](/zh/smart-home/radar-presence-sensing-no-camera) — 室内场景的无摄像头替代方案',
          '[查看如何在同一台机器上安装 Ollama 运行本地 LLM](/zh/local-llms/how-to-install-ollama) — 跨专题：为 Frigate 事件生成本地 GenAI 描述',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '**Frigate 推荐硬件** — [docs.frigate.video/frigate/hardware](https://docs.frigate.video/frigate/hardware) — 各检测器的官方推理耗时，以及不再推荐新装机使用 Coral 的说明。',
          '**Frigate 目标检测器配置** — [docs.frigate.video/configuration/object_detectors](https://docs.frigate.video/configuration/object_detectors) — 检测器 `type` 取值的完整列表，以及不推荐 CPU 检测器的说明。',
          '**Frigate 摄像头设置** — [docs.frigate.video/frigate/camera_setup](https://docs.frigate.video/frigate/camera_setup) — 检测与录像码流的分辨率、帧率与 I 帧间隔建议。',
          '**Frigate 区域配置** — [docs.frigate.video/configuration/zones](https://docs.frigate.video/configuration/zones) — required_zones、loitering_time、inertia 默认值与速度估算的前提条件。',
          '**Frigate 语义搜索** — [docs.frigate.video/configuration/semantic_search](https://docs.frigate.video/configuration/semantic_search) — 内存与 AVX2 要求、Jina CLIP V1 与 V2 的比较、重建索引的行为。',
          '**Frigate Home Assistant 集成** — [docs.frigate.video/integrations/home-assistant](https://docs.frigate.video/integrations/home-assistant) — MQTT 前置条件与集成生成的实体类型。',
          '**GitHub 上的 Frigate 版本发布** — [github.com/blakeblackshear/frigate/releases](https://github.com/blakeblackshear/frigate/releases) — 0.17.x 与 0.18.0 测试版的版本号和发布日期。',
          '**Frigate+** — [frigate.video/plus/](https://frigate.video/plus/) — 订阅价格、包含的微调次数与标签限制。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Frigate NVR 搭建指南：检测器、区域与 Home Assistant（2026）',
      description: 'Frigate 0.17.2 在本地完成 AI 检测，无云端、无订阅。官方文档已不再推荐新装机选用 Coral——本文说明应该改选哪种检测器。',
      url: 'https://www.promptquorum.com/zh/smart-home/frigate-nvr-home-assistant-setup',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      about: [
        { '@type': 'Thing', name: 'Frigate NVR' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: '目标检测' },
        { '@type': 'Thing', name: 'OpenVINO' },
        { '@type': 'Thing', name: 'Hailo-8' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Frigate' },
        { '@type': 'SoftwareApplication', name: 'Home Assistant' },
        { '@type': 'SoftwareApplication', name: 'go2rtc' },
      ],
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '自建 AI 摄像头系统的 Home Assistant 用户' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/zh/smart-home/frigate-nvr-home-assistant-setup' },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '安装 Frigate NVR 并接入 Home Assistant',
      inLanguage: 'zh',
      totalTime: 'PT90M',
      step: [
        { '@type': 'HowToStep', position: 1, name: '准备主机', text: '在 Debian 系主机上安装 Docker，并创建 /config 与 /media/frigate 目录。' },
        { '@type': 'HowToStep', position: 2, name: '写一份最小配置', text: '创建一份只含一台摄像头、不含检测器配置块的 config.yml，让 Frigate 以默认值启动并确认码流可用。' },
        { '@type': 'HowToStep', position: 3, name: '启动容器', text: '启动 Frigate 时显式设置 shm_size，并挂载对应设备：Intel 用 /dev/dri，NVIDIA 用 GPU 运行时，Hailo 用 /dev/hailo0。' },
        { '@type': 'HowToStep', position: 4, name: '在 Web 界面中确认', text: '打开 Frigate Web 界面，确认摄像头画面、检测 FPS 以及系统页面上的推理耗时。' },
        { '@type': 'HowToStep', position: 5, name: '加入真正的检测器', text: '加入与硬件匹配的 detectors 配置块并重启，确认推理耗时降到官方公布水平。' },
        { '@type': 'HowToStep', position: 6, name: '接入 Home Assistant', text: '在 config.yml 中配置 MQTT broker，在 Home Assistant 中添加 MQTT 集成，然后安装 Frigate 集成。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate NVR 是什么？', acceptedAnswer: { '@type': 'Answer', text: 'Frigate 是一款开源网络录像机，使用 OpenCV 与 TensorFlow 在本地对 IP 摄像头码流运行 AI 目标检测。它按检测到的内容而非单纯的移动来录制片段，并通过 MQTT 发布每一次检测，使 Home Assistant 能够据此自动化。' } },
        { '@type': 'Question', name: '2026 年还需要为 Frigate 配 Google Coral TPU 吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要。Frigate 的硬件文档明确指出，除非功耗要求异常严格，否则新装机不再推荐 Coral。推荐路径是 Intel 核显上的 OpenVINO 检测器、Hailo-8 模块，或现有 NVIDIA 显卡上的 ONNX 检测器。' } },
        { '@type': 'Question', name: '应该运行哪个版本的 Frigate？', acceptedAnswer: { '@type': 'Answer', text: '2026 年 6 月 28 日发布的 Frigate 0.17.2 是当前稳定版。0.18.0 自 2026 年 7 月起处于测试阶段，第三个测试版发布于 2026 年 8 月 8 日。' } },
        { '@type': 'Question', name: 'Frigate 需要多少内存？', acceptedAnswer: { '@type': 'Answer', text: '仅做目标检测与录像时，8 GB 可以从容运行。启用语义搜索时，Frigate 记录的最低要求是 8 GB，推荐 16 GB 以上并配独立显卡，同时 CPU 需支持 AVX 与 AVX2 指令集。' } },
        { '@type': 'Question', name: '为什么路人经过就一直收到 Frigate 警报？', acceptedAnswer: { '@type': 'Answer', text: '因为那些都是正确的检测。请画一个只覆盖自家地界内地面的区域，把 review.alerts.required_zones 设为该区域，并加上 loitering_time。存在判定基于检测框底部中心点，所以区域必须覆盖地面。' } },
        { '@type': 'Question', name: '没有互联网连接时 Frigate 还能用吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。检测、录像、MQTT 与 Home Assistant 自动化全部在局域网内运行。只有从外部远程查看，以及可选的云端 GenAI 服务商需要联网。' } },
        { '@type': 'Question', name: 'Frigate 里的区域和遮罩有什么区别？', acceptedAnswer: { '@type': 'Answer', text: '移动遮罩会让 Frigate 在该区域完全不运行检测。区域则让检测照常运行，只通过 required_zones 限制哪些检测可以触发警报。' } },
        { '@type': 'Question', name: '一台 Frigate 服务器能带多少路摄像头？', acceptedAnswer: { '@type': 'Answer', text: '这取决于推理耗时而非摄像头数量本身：可用的每秒检测次数约等于 1000 除以推理耗时（毫秒），并由所有摄像头共享。' } },
        { '@type': 'Question', name: '人脸识别或车牌识别需要 Frigate+ 吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要。人脸识别与车牌识别在本地运行且无需订阅。Frigate+ 每年 $50，包含最多 12 次模型微调，额外微调每次 $5。' } },
        { '@type': 'Question', name: '可以在 Proxmox LXC 容器里运行 Frigate 吗？', acceptedAnswer: { '@type': 'Answer', text: '不可以，Proxmox LXC 明确不受支持。请改用 QEMU 虚拟机。核显、Coral 或 Hailo 模块的直通在 LXC 中可能看似可行，随后会以无法获得支持的方式失败。' } },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    current_hardware_mentioned: ['Google Coral USB/M.2', 'Hailo-8 / Hailo-8L', 'Intel Arc A750', 'Intel UHD 730 iGPU', 'Intel NPU', 'NVIDIA RTX 3050 / RTX 3070', 'AMD Radeon 780M', 'Apple M3 Pro'],
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/frigate-nvr-home-assistant-setup-overview-hero-es.webp',
    title: 'Configurar Frigate NVR: detectores, zonas y Home Assistant (2026)',
    seoTitle: 'Frigate NVR 2026: detector, zonas y Home Assistant',
    intro:
      'Frigate es un grabador de vídeo en red de código abierto que ejecuta detección de objetos con IA en tu propio hardware y entrega cada detección a Home Assistant como una entidad. Esta guía cubre la elección del detector en 2026 —donde Google Coral ya no es la respuesta por defecto—, los ajustes de flujo de las cámaras, un config.yml funcional, las zonas que realmente eliminan las falsas alertas, la integración con Home Assistant y lo que cambió en 0.16 y 0.17.',
    metaDescription:
      'Frigate 0.17.2 detecta con IA en local, sin nube ni suscripción. La documentación ya no recomienda Coral en instalaciones nuevas: qué detector elegir.',
    twitterDescription:
      'Guía práctica para montar Frigate NVR: qué detector comprar en 2026, ajustes de flujo de cámara, un config.yml funcional, zonas y la integración con Home Assistant.',
    readTime: '16 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que montan un sistema de cámaras con IA autoalojado con Frigate',
    primaryTerm: 'configuración de Frigate NVR',
    targetKeywords: [
      'configurar frigate nvr',
      'frigate home assistant integracion',
      'frigate detector coral u openvino',
      'ejemplo config yml frigate',
      'frigate zonas falsas alertas',
    ],
    leadAnswerBlock:
      '**Frigate es un NVR de código abierto que ejecuta detección de objetos con IA localmente sobre los flujos de tus cámaras y expone cada detección a Home Assistant como una entidad.** Desde Frigate 0.17.2, el punto de partida recomendado para una instalación nueva es una iGPU Intel con el detector OpenVINO, no un Google Coral.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo se configura Frigate NVR con Home Assistant?',
        answer:
          'Ejecuta Frigate en Docker con un config.yml que apunte al subflujo de baja resolución de cada cámara para la detección y a su flujo principal para la grabación. Elige un detector compatible con tu hardware (OpenVINO en una iGPU Intel, ONNX en una GPU NVIDIA o un módulo Hailo-8) y después instala la integración Frigate en Home Assistant. Home Assistant necesita la integración MQTT configurada antes: ese es el paso que casi todas las primeras instalaciones se saltan.',
        bullets: [
          'Frigate 0.17.2 es la versión estable actual (28 de junio de 2026)',
          'Detecta en 1280x720 a 5 fps; graba el flujo principal a 15 fps',
          'Frigate ya no recomienda Google Coral para instalaciones nuevas',
          'Intel Arc A750: unos 8 ms en YOLOv9-320; iGPU Intel UHD 730: unos 14 ms',
          'La integración de Home Assistant exige antes la integración MQTT',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Qué hace Frigate', anchor: 'what-frigate-is' },
      { label: 'Qué detector comprar', anchor: 'detector' },
      { label: 'Hardware del servidor y RAM', anchor: 'server-hardware' },
      { label: 'Ajustes de flujo de cámara', anchor: 'cameras' },
      { label: 'Instalar Frigate', anchor: 'install' },
      { label: 'Un config.yml funcional', anchor: 'config' },
      { label: 'Zonas, máscaras y falsas alertas', anchor: 'zones' },
      { label: 'Integración con Home Assistant', anchor: 'home-assistant' },
      { label: 'Búsqueda, caras y matrículas', anchor: 'ai-features' },
      { label: '¿Merece la pena Frigate+?', anchor: 'frigate-plus' },
      { label: 'Coste frente a cámaras por suscripción', anchor: 'cost' },
      { label: 'Errores frecuentes', anchor: 'mistakes' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate es un NVR de código abierto que ejecuta detección de objetos con IA localmente sobre flujos RTSP de cámara y publica cada detección en Home Assistant mediante MQTT, sin servicio en la nube ni suscripción.' },
      { type: 'plain-terms', content: 'Una cámara inteligente normal envía el vídeo a una empresa, que decide si ha visto a una persona y te cobra cada mes por ello. Frigate hace ese paso en un equipo de tu casa: el vídeo no sale, no hay cuota mensual y cada detección se convierte en algo sobre lo que Home Assistant puede actuar.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        content:
          'La propia documentación de Frigate ya desaconseja el TPU Google Coral en instalaciones nuevas: precisamente el acelerador que la mayoría de guías te sigue diciendo que compres primero.',
        items: [
          'Frigate 0.17.2 (28 de junio de 2026) es la versión estable actual; 0.18.0 está en beta desde el 8 de agosto de 2026',
          'Primero el detector: una iGPU Intel con el detector OpenVINO es el arranque solvente más barato; Hailo-8 o una GPU NVIDIA escalan más',
          'Coral es ahora la alternativa de reserva, no la opción por defecto: solo se recomienda cuando el consumo es la restricción determinante',
          'Dos flujos por cámara: 1280x720 a 5 fps para detectar y el flujo principal a resolución completa a 15 fps para grabar',
          'Lo que elimina las falsas alertas son las zonas con required_zones, loitering_time e inertia, no un modelo mejor',
          'La integración de Home Assistant necesita la integración MQTT ya configurada o no aparece ninguna entidad',
          'La búsqueda semántica pide 8 GB de RAM como mínimo, 16 GB y una GPU para ir cómoda, y una CPU con AVX2',
          'Frigate+ cuesta 50 $ al año (facturación en USD) por hasta 12 modelos afinados; el reconocimiento facial y de matrículas funcionan sin suscripción',
        ],
      },
      whatFrigateIs: {
        id: 'what-frigate-is',
        title: '¿Qué hace Frigate que no haga un NVR normal?',
        content:
          '**Frigate trabaja en dos etapas: una detección de movimiento barata localiza las regiones que merecen atención y después un modelo real de detección de objetos decide si contienen una persona, un coche, un perro o un paquete.** Un NVR convencional se dispara con el cambio de píxeles, por eso avisa con los faros, la lluvia y los arbustos.',
        items: [
          '**Primero movimiento, después IA:** la detección de movimiento ligera decide *dónde* ejecutar el detector, así que un acelerador pequeño cubre muchas cámaras.',
          '**Grabación por objeto:** la retención depende de lo detectado y no de un búfer continuo 24/7, con lo que el almacenamiento cunde mucho más.',
          '**Retransmisión con go2rtc:** Frigate consulta cada cámara una sola vez y redistribuye el flujo, en lugar de que cinco clientes ataquen la cámara a la vez.',
          '**Salida MQTT:** cada objeto seguido, cada entrada en zona y cada recuento se publica, y eso es lo que hace posibles las automatizaciones de Home Assistant.',
          '**Elementos de revisión:** las detecciones se separan en *alerts* (aquello de lo que quieres enterarte) y *detections* (registradas, pero sin aviso).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Frigate usa una detección de movimiento de bajo coste para seleccionar regiones del fotograma y ejecuta el modelo de detección de objetos solo sobre esas regiones, y por eso un único acelerador pequeño da servicio a muchas cámaras a la vez.' },
        ],
        callouts: [
          { type: 'note', text: 'La separación entre alerts y detections es el concepto más útil de Frigate. Las alerts despiertan tu móvil; las detections forman el registro consultable. Configura cada una por separado.' },
        ],
      },
      detector: {
        id: 'detector',
        title: '¿Qué detector conviene comprar para Frigate en 2026?',
        content:
          '**Compra un equipo Intel con iGPU y usa el detector OpenVINO si partes de cero; un módulo Hailo-8 si necesitas la latencia más baja por vatio; el detector ONNX si la máquina ya tiene una GPU NVIDIA.** La documentación de Frigate indica que Coral ya no se recomienda en instalaciones nuevas, salvo cuando el consumo es una restricción inusualmente estricta.',
        items: [
          'Usa **OpenVINO** si el equipo tiene una CPU Intel de sexta generación o posterior: la iGPU ya está pagada y no requiere hardware adicional.',
          'Usa **ONNX** si la máquina ya tiene una GPU NVIDIA o AMD; Frigate detecta la plataforma automáticamente.',
          'Usa **Hailo-8 / Hailo-8L** si quieres latencia de acelerador en una ranura M.2 con bajo consumo.',
          'Usa **TensorRT** específicamente en placas NVIDIA Jetson: consulta [la reseña del NVIDIA Jetson Orin Nano para IA doméstica](/es/smart-home/nvidia-jetson-orin-nano-smart-home-review).',
          'Usa **edgetpu** (Coral) solo cuando los vatios sean la restricción determinante y aceptes una gama de modelos que envejece.',
          'Evita por completo el detector **cpu**: según Frigate, OpenVINO en modo CPU es más eficiente que el detector CPU dedicado.',
        ],
        columns: ['Detector', 'Hardware', 'Inferencia (publicada)'],
        rows: [
          { 'Detector': 'openvino', 'Hardware': 'Intel Arc A750', 'Inferencia (publicada)': '~4 ms MobileNetV2 / ~8 ms YOLOv9-320' },
          { 'Detector': 'openvino', 'Hardware': 'Intel NPU', 'Inferencia (publicada)': '~6 ms MobileNetV2 / ~11 ms YOLOv9-320' },
          { 'Detector': 'openvino', 'Hardware': 'iGPU Intel UHD 730', 'Inferencia (publicada)': '~10 ms MobileNetV2 / ~14 ms YOLOv9-tiny' },
          { 'Detector': 'hailo8l', 'Hardware': 'Hailo-8', 'Inferencia (publicada)': '~6 ms SSD MobileNet / ~7 ms YOLOv6n' },
          { 'Detector': 'hailo8l', 'Hardware': 'Hailo-8L', 'Inferencia (publicada)': '~10 ms SSD MobileNet / ~11 ms YOLOv6n' },
          { 'Detector': 'onnx', 'Hardware': 'NVIDIA RTX 3070', 'Inferencia (publicada)': '~6–8 ms YOLOv9 tiny→small 320' },
          { 'Detector': 'onnx', 'Hardware': 'NVIDIA RTX 3050', 'Inferencia (publicada)': '~8–10 ms YOLOv9 tiny→small 320' },
          { 'Detector': 'onnx', 'Hardware': 'AMD Radeon 780M', 'Inferencia (publicada)': '~14 ms YOLOv9-tiny-320' },
          { 'Detector': 'zmq', 'Hardware': 'Apple M3 Pro', 'Inferencia (publicada)': '~6 ms YOLOv9-tiny-320' },
        ],
        note: 'Las cifras son las que publica Frigate para cada detector, no mediciones de PromptQuorum. Frigate incluye además los tipos rknn (NPU Rockchip), memryx, synaptics, deepstack y degirum.',
        callouts: [
          { type: 'warning', text: 'La mayoría de tutoriales de Frigate siguen empezando por «compra un Coral». Ese consejo es anterior al trabajo en OpenVINO, Hailo y ONNX de las versiones 0.16 y 0.17, y la propia página de hardware de Frigate lo contradice hoy para instalaciones nuevas.' },
          { type: 'tip', text: 'La capacidad de cámaras de un Coral equivale a unos 1000 / inference_speed fotogramas por segundo, repartidos entre todas las cámaras. A 5 fps de detección, un presupuesto de 10 ms cubre sobre el papel unos 20 flujos; el estrangulamiento térmico y la alimentación USB recortan esa cifra.' },
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: 'El detector es el chip que responde a «¿eso es una persona?». Puedes usar la parte gráfica que ya lleva dentro una CPU Intel, una tarjeta NVIDIA dedicada o un pequeño módulo de IA en formato M.2. El pendrive que todo el mundo recomienda (Google Coral) sigue funcionando, pero ya no es el punto de partida aconsejado.' },
        ],
      },
      serverHardware: {
        id: 'server-hardware',
        title: '¿Qué necesita el propio servidor de Frigate?',
        content:
          '**Un mini PC Intel de serie N o Core i con 8–16 GB de RAM, un SSD para el sistema y un disco duro aparte para las grabaciones cubre una casa típica de cuatro a ocho cámaras.** El cuello de botella rara vez es la CPU: son la memoria compartida, la resistencia de escritura del disco y si además quieres búsqueda semántica.',
        items: [
          '**Memoria compartida (`shm`):** los 128 MB por defecto solo cubren unas dos cámaras a 720p. Frigate calcula unos 66.63 MB por cámara a 1280x720 con registros, así que ocho cámaras necesitan unos 253 MB.',
          '**Define `--shm-size` de forma explícita:** `--shm-size=512mb` es una cifra segura para la mayoría de montajes; quedarse corto no da un error claro, se manifiesta como cámaras que se caen.',
          '**Tres puntos de montaje:** `/config` para el YAML y la base de datos, `/media/frigate` para clips, grabaciones y exportaciones, `/tmp/cache` para los segmentos en curso.',
          '**Grabaciones en disco duro:** la escritura continua consume la resistencia de un SSD de consumo. Pon `/media/frigate` en un disco duro y deja `/tmp/cache` en almacenamiento rápido.',
          '**RAM para funciones de IA:** la búsqueda semántica exige 8 GB como mínimo y una CPU con AVX y AVX2; lo recomendado son 16 GB más una GPU.',
        ],
        columns: ['Montaje', 'Detector', 'Adecuado para'],
        rows: [
          { 'Montaje': 'Mini PC Intel N100/N150, 16 GB', 'Detector': 'openvino (iGPU)', 'Adecuado para': '2–6 cámaras, sin búsqueda semántica' },
          { 'Montaje': 'Mini PC Intel Core i5, 32 GB', 'Detector': 'openvino (iGPU)', 'Adecuado para': '6–12 cámaras con búsqueda semántica' },
          { 'Montaje': 'Cualquier equipo + Hailo-8 M.2', 'Detector': 'hailo8l', 'Adecuado para': 'Bajo consumo, muchas cámaras' },
          { 'Montaje': 'Sobremesa con RTX 3050 o superior', 'Detector': 'onnx', 'Adecuado para': 'Frigate y un LLM local en un solo equipo' },
          { 'Montaje': 'Raspberry Pi 5', 'Detector': 'edgetpu / hailo8l', 'Adecuado para': '1–3 cámaras, presupuesto energético ajustado' },
        ],
        note: 'Frigate admite Docker sobre Debian en bare metal, el complemento de Home Assistant, Kubernetes mediante Helm, Unraid, NAS de Synology y QNAP, ESXi y macOS en Apple Silicon. En Proxmox usa una máquina virtual QEMU: LXC no está soportado de forma explícita.',
        callouts: [
          { type: 'warning', text: 'Ejecutar Frigate en un contenedor LXC de Proxmox no está soportado. Pasar un Coral o una iGPU parece funcionar y luego falla de un modo que nadie podrá diagnosticar por ti. Usa una máquina virtual.' },
          { type: 'practice', text: 'Si quieres un solo equipo para Frigate, Home Assistant y un LLM local, dimensiónalo primero por el LLM: consulta [los mini PC recomendados para Home Assistant e IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai).' },
        ],
      },
      cameras: {
        id: 'cameras',
        title: '¿Cómo hay que configurar las cámaras para Frigate?',
        content:
          '**Configura dos flujos en el propio firmware de la cámara: un subflujo de 1280x720 a 5 fps para detectar y el flujo principal a resolución nativa a 15 fps para grabar, ambos en H.264 y con la misma relación de aspecto.** El modelo de detección de Frigate trabaja con una entrada de 320x320, así que un flujo de detección 4K no aporta nada y dispara el coste de decodificación.',
        numberedItems: [
          'En el firmware de la cámara, pon el subflujo en 1280x720, 5 fps, H.264, con intervalo de fotograma I de 5 (un fotograma clave por segundo).',
          'Pon el flujo principal en la resolución nativa de la cámara —2688x1520 en un sensor de 4 MP habitual— a 15 fps, H.264, intervalo de fotograma I de 30.',
          'Mantén la misma relación de aspecto en ambos flujos (16:9 con 16:9) para que los recuadros se correspondan entre detección y grabación.',
          'Asigna el rol `detect` al subflujo y el rol `record` al flujo principal.',
          'Sube la detección a 10 fps solo con sujetos realmente rápidos, como un coche cruzando una vista estrecha del acceso.',
        ],
        items: [
          'Usa H.264 y no H.265: la compatibilidad de H.265 en navegador es limitada y la vista en directo es lo primero que sufre.',
          'Cambia la tasa de fotogramas en la cámara, nunca en Frigate: el submuestreo por software gasta CPU sin ningún beneficio.',
          'Prioriza PoE cableado frente a Wi-Fi; un subflujo que se cae aparece como detecciones perdidas, no como una avería evidente.',
          'Para hardware de cámara que expone bien RTSP y ONVIF, consulta [la guía de compra de cámaras locales para montajes con Frigate](/es/smart-home/best-local-security-cameras-2027).',
        ],
        callouts: [
          { type: 'tip', text: 'Si los objetos del fondo del acceso nunca se detectan, la causa suele ser la resolución y no el modelo: a 1280x720 escalados a una entrada de 320x320, una persona lejana son unos pocos píxeles. Divide esa vista en una segunda cámara o un flujo con zoom en lugar de subir la resolución de detección de forma global.' },
          { type: 'note', text: 'Frigate consulta cada cámara una sola vez y atiende al resto de clientes desde esa copia, por eso conviene apuntar Home Assistant a Frigate y no a la cámara.' },
        ],
      },
      install: {
        id: 'install',
        title: '¿Cómo se instala Frigate?',
        content:
          '**Usa Docker Compose sobre un equipo Debian en bare metal si quieres la vía soportada; usa el complemento de Home Assistant si aceptas menos control a cambio de una instalación en un clic.** Ambos necesitan el mismo config.yml y el mismo broker MQTT.',
        numberedItems: [
          'Instala Docker en un equipo basado en Debian y crea los directorios `/config` y `/media/frigate`.',
          'Escribe un `config.yml` mínimo con una sola cámara y sin bloque de detector, para que Frigate arranque con los valores por defecto y puedas confirmar que el flujo llega.',
          'Arranca el contenedor con un `shm_size` explícito y el dispositivo adecuado: `/dev/dri` (Intel), el runtime de GPU (NVIDIA) o `/dev/hailo0` (Hailo).',
          'Abre la interfaz web y comprueba la imagen de la cámara, los FPS de detección y el tiempo de inferencia de la página Sistema.',
          'Añade el bloque `detectors` real, reinicia y comprueba que el tiempo de inferencia baja hasta la cifra publicada para tu hardware.',
          'Configura el broker MQTT en `config.yml` y después añade la integración Frigate en Home Assistant.',
        ],
        codeBlock: `services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:0.17.2
    restart: unless-stopped
    privileged: true
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128   # Intel iGPU (OpenVINO)
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config:/config
      - /srv/frigate/media:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "8971:8971"   # authenticated web UI
      - "8554:8554"   # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'warning', text: 'Fija la etiqueta de la imagen a una versión concreta en lugar de `stable`. Los esquemas de configuración de Frigate cambian entre versiones menores, y un `docker compose pull` desatendido en el salto de 0.17 a 0.18 puede dejarte un contenedor que se niega a arrancar con tu YAML actual.' },
          { type: 'practice', text: 'Pon en marcha una cámara antes de añadir el resto. Casi todos los hilos de «Frigate no funciona» acaban en la URL del subflujo de una cámara concreta, y eso se ve mucho antes con una sola entrada en la configuración.' },
        ],
      },
      config: {
        id: 'config',
        title: '¿Cómo es un config.yml de Frigate que funcione?',
        content:
          '**Una configuración funcional tiene cuatro bloques: `mqtt`, `detectors`, `cameras` con dos roles de flujo, y los filtros `zones` y `review` por cámara.** Todo lo demás tiene valores por defecto suficientes el primer día.',
        codeBlock: `mqtt:
  host: 192.168.1.10
  user: frigate
  password: "{FRIGATE_MQTT_PASSWORD}"

detectors:
  ov:
    type: openvino
    device: GPU

cameras:
  driveway:
    ffmpeg:
      inputs:
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=1
          roles: [detect]
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=0
          roles: [record]
    detect:
      width: 1280
      height: 720
      fps: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: motion
      alerts:
        retain:
          days: 30
    snapshots:
      enabled: true
    motion:
      mask:
        - 0,0,0.35,0,0.35,0.12,0,0.12   # timestamp overlay
    zones:
      driveway_apron:
        coordinates: 0.14,0.98,0.62,0.55,0.95,0.72,0.88,1.0
        loitering_time: 4
        inertia: 3
    review:
      alerts:
        labels: [person, car]
        required_zones: [driveway_apron]
      detections:
        labels: [person, car, dog, cat]`,
        codeLanguage: 'yaml',
        items: [
          '`subtype=1` y `subtype=0` son la convención Dahua/Amcrest para subflujo y flujo principal; Reolink usa `h264Preview_01_sub` y `h264Preview_01_main`.',
          '`retain.mode: motion` conserva grabación continua solo donde hubo movimiento, y es la palanca principal de ahorro de almacenamiento.',
          '`review.alerts.required_zones` evita que un coche de la vía pública te despierte el móvil.',
          'Frigate 0.17 añadió configuración completa desde la interfaz, así que casi todo esto se puede editar en el navegador en lugar de a mano.',
        ],
        callouts: [
          { type: 'tip', text: 'Frigate 0.17 también introdujo los perfiles: anulaciones de configuración con nombre que puedes cambiar sin reiniciar el contenedor. Un perfil «hay invitados» que amplíe required_zones es mejor patrón que editar el YAML dos veces por semana.' },
        ],
      },
      zones: {
        id: 'zones',
        title: '¿Cómo eliminan las zonas y las máscaras las falsas alertas?',
        content:
          '**Las zonas filtran qué detecciones importan; las máscaras de movimiento impiden que Frigate mire siquiera una región. Usa una zona cuando el objeto es real pero irrelevante, y una máscara cuando el movimiento ni siquiera es un objeto.** La presencia en zona se evalúa por el punto central inferior del recuadro, así que la zona debe cubrir el suelo donde están los pies o las ruedas, no la altura de las cabezas.',
        items: [
          '**Máscara de movimiento:** para marcas de fecha, un árbol movido, una bandera. Frigate nunca ejecuta detección ahí. Úsala con movimiento que jamás será un objeto que te interese.',
          '**Máscara de filtro de objeto:** suprime una etiqueta concreta en una región concreta, como el coche del vecino detectado permanentemente como `car`.',
          '**Zona + `required_zones`:** el objeto sí es una persona, pero una persona en la acera no es una alerta. Esta es la solución correcta al tránsito peatonal.',
          '**`loitering_time`:** exige que el objeto permanezca N segundos en la zona; un repartidor que sube por el camino lo cumple, alguien que pasa de largo no.',
          '**`inertia`:** exige que el objeto siga dentro de la zona N fotogramas consecutivos (3 por defecto) para que el temblor del recuadro en el borde no dispare una alerta.',
          '**Estimación de velocidad:** una zona con exactamente cuatro puntos alineados con el suelo más una lista `distances` produce un valor de velocidad en la interfaz y por MQTT.',
        ],
        promptExamples: [
          { label: '❌ Enfoque incorrecto', text: 'Alertas por cada persona, en cada cámara, todo el día, y silenciar las notificaciones al segundo día porque la acera de enfrente genera cuarenta alertas cada noche.' },
          { label: '✅ Enfoque correcto', text: 'Una zona driveway_apron que cubra solo el suelo dentro del límite de la propiedad, review.alerts.required_zones apuntando a esa zona, loitering_time: 4, y detections (sin notificación) activas para todo lo demás, de modo que el registro consultable siga completo.' },
        ],
        callouts: [
          { type: 'warning', text: 'Dibujar una zona en la mitad superior del fotograma no sirve de nada. La presencia se juzga por el punto central inferior del recuadro: dibuja las zonas sobre el plano del suelo.' },
          { type: 'insight', text: 'Las falsas alertas casi nunca son un problema de calidad del modelo. En una instalación residencial típica, las zonas y required_zones quitan más ruido que cualquier mejora de detector.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'En Frigate, una máscara de movimiento impide por completo que se ejecute la detección en esa región, mientras que una zona con required_zones deja que la detección funcione con normalidad y solo limita qué detecciones pueden generar una alerta.' },
        ],
      },
      homeAssistant: {
        id: 'home-assistant',
        title: '¿Cómo se conecta Frigate a Home Assistant?',
        content:
          '**Configura primero la integración MQTT en Home Assistant, apunta Frigate al mismo broker y después instala la integración Frigate: crea entidades camera, image, sensor, switch y binary_sensor por cámara y por zona.** Sin MQTT configurado antes, la integración se instala y no produce nada.',
        numberedItems: [
          'Instala un broker MQTT (el complemento Mosquitto es la opción habitual) y añade la integración MQTT en Home Assistant.',
          'Apunta el bloque `mqtt` del config.yml de Frigate al mismo broker, con su propio usuario y contraseña.',
          'Instala la integración Frigate mediante HACS o como integración del núcleo y apúntala al host de Frigate.',
          'Activa la integración Media Source para que grabaciones e instantáneas aparezcan en el navegador multimedia.',
          'Construye las automatizaciones sobre los sensores binarios por zona en lugar de los sensores por cámara.',
        ],
        itemHeadings: true,
        columns: ['Tipo de entidad', 'Qué obtienes', 'Para qué usarlo'],
        rows: [
          { 'Tipo de entidad': 'binary_sensor', 'Qué obtienes': 'Movimiento y presencia de objeto por cámara, por zona y por etiqueta de objeto', 'Para qué usarlo': 'El disparador de prácticamente cualquier automatización: una persona en una zona concreta es mucho mejor disparador que movimiento en una cámara' },
          { 'Tipo de entidad': 'camera', 'Qué obtienes': 'Entidad de flujo en directo servida desde la retransmisión de Frigate en el puerto 8554', 'Para qué usarlo': 'Tarjetas del panel y emisión; apuntar Home Assistant aquí en lugar de a la cámara evita una segunda conexión a la cámara' },
          { 'Tipo de entidad': 'image', 'Qué obtienes': 'La última instantánea del objeto detectado más reciente por cámara', 'Para qué usarlo': 'Adjuntar una imagen a una notificación móvil sin llamar a mano a la API de instantáneas' },
          { 'Tipo de entidad': 'sensor', 'Qué obtienes': 'Recuentos de objetos por zona y por cámara, más cifras de rendimiento del detector y los procesos', 'Para qué usarlo': 'Lógica de ocupación y un panel de estado del sistema: el tiempo de inferencia aquí es tu aviso temprano de que un detector ha caído a CPU' },
          { 'Tipo de entidad': 'switch', 'Qué obtienes': 'Interruptores de detección, grabación e instantáneas por cámara', 'Para qué usarlo': 'Automatizaciones de privacidad, como desactivar la detección interior cuando la presencia indica que hay alguien en casa' },
        ],
        note: 'La integración expone además las acciones camera.turn_on y camera.turn_off, admite varios servidores Frigate con configuraciones MQTT separadas y permite sobrescribir la plantilla de URL RTSP con Jinja2.',
        callouts: [
          { type: 'warning', text: 'Si la integración Frigate se instala pero no aparece ninguna entidad, la causa es casi siempre MQTT: o nunca se añadió la integración en Home Assistant, o Frigate y Home Assistant hablan con dos brokers distintos.' },
          { type: 'practice', text: 'Dispara las automatizaciones con el sensor binario de zona más una condición sobre la etiqueta del objeto. Un sensor de movimiento de cámara se dispara con la lluvia; `binary_sensor.driveway_driveway_apron_person` no.' },
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: '¿Qué aportan la búsqueda semántica, el reconocimiento facial y el de matrículas?',
        content:
          '**La búsqueda semántica te deja escribir «furgoneta negra en el acceso de noche» y obtener los clips coincidentes; el reconocimiento facial y el de matrículas convierten detecciones anónimas en detecciones con nombre, y ambos funcionan sin suscripción a Frigate+.** Estas funciones cuestan RAM, no dinero.',
        items: [
          '**Búsqueda semántica:** necesita 8 GB de RAM como mínimo, una CPU con AVX y AVX2, e idealmente 16 GB más una GPU dedicada. En una Raspberry Pi no funciona de forma útil.',
          '**Modelo de embeddings:** Jina CLIP V1 es el predeterminado; la variante `small` está cuantizada y funciona de forma aceptable en CPU, la `large` usa la GPU cuando la hay.',
          '**Jina CLIP V2** admite 89 idiomas en lugar de solo inglés, pero Frigate lo documenta como un 3 % mejor a cambio de bastante más RAM y tiempo de inferencia, y desaconseja la inferencia en CPU.',
          '**La reindexación es manual:** activar la búsqueda semántica no indexa los objetos ya existentes. Usa el botón «Reindex» de la interfaz o pon `reindex: True`, y cuenta con una carga de CPU alta mientras dura.',
          '**El reconocimiento facial y de matrículas** se ejecutan en local y no requieren suscripción, aunque los modelos de Frigate+ mejoran la eficiencia.',
          '**Descripciones con GenAI:** la 0.17 añadió soporte multiproveedor y una integración específica con llama.cpp, de modo que las descripciones pueden salir de un modelo alojado en tu propio hardware: consulta [automatizaciones con LLM local en Home Assistant](/es/smart-home/ai-automations-local-llm).',
        ],
        callouts: [
          { type: 'tip', text: 'Activa la búsqueda semántica antes de acumular un año de clips. Reindexar 200.000 objetos seguidos en un mini PC sin GPU es trabajo de una noche entera.' },
          { type: 'note', text: 'Frigate 0.16 añadió disparadores de búsqueda semántica: una acción se lanza cuando un objeto seguido coincide con una imagen o descripción guardada. Es el puente entre «buscar en mis grabaciones» y «automatizar según lo que significan».' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: '¿Merecen la pena los 50 $ al año de Frigate+?',
        content:
          '**Frigate+ merece la pena en cuanto tienes un falso positivo concreto y repetido que el modelo estándar no arregla; si no, los modelos gratuitos con buenas zonas hacen el trabajo.** Cuesta 50 $ al año (facturación en USD) e incluye hasta 12 modelos afinados, con afinados adicionales a 5 $ cada uno.',
        decisionBlock: {
          title: '¿Frigate+ o modelos estándar?',
          localIf: [
            'Un objeto concreto se clasifica mal repetidamente en tu propiedad',
            'Tienes ángulos de cámara poco habituales que el modelo estándar maneja mal',
            'Quieres etiquetas sugeridas por IA para acelerar tus propias subidas',
            'Quieres financiar el desarrollo continuado del proyecto de código abierto',
          ],
          cloudIf: [
            'Tus falsas alertas vienen del tránsito por la acera: las zonas lo arreglan gratis',
            'Necesitas etiquetas fuera de la lista de Frigate; las etiquetas propias aún no están disponibles',
            'Solo tienes una o dos cámaras con vistas sencillas',
          ],
          quick: [
            'Arregla primero las zonas y reevalúa a las dos semanas',
            'Si las alertas siguen fallando con objetos reales, suscríbete',
            'Los modelos que entrenaste siguen descargables tras cancelar',
          ],
        },
        items: [
          'El modelo base de Frigate+ se actualizó a 2026.0, construido sobre YOLOv9, con nuevas etiquetas candidatas como `lawnmower` y `heron`.',
          'Todavía no puedes añadir etiquetas propias arbitrarias: el entrenamiento se limita al conjunto de etiquetas admitidas por Frigate.',
          'El reconocimiento facial y el de matrículas no requieren la suscripción.',
        ],
        callouts: [
          { type: 'insight', text: 'Suscribirse antes de afinar las zonas es la forma más común de gastar 50 $ sin ver ninguna mejora. Un modelo afinado hace más fiables las detecciones correctas; no consigue que un peatón correctamente detectado deje de ser un peatón.' },
        ],
      },
      cost: {
        id: 'cost',
        title: '¿Cómo se compara Frigate en coste con las cámaras por suscripción?',
        content:
          '**Frigate convierte una cuota de nube recurrente por cámara en un coste de hardware único que no crece con el número de cámaras.** A partir de dos cámaras, el punto de equilibrio suele caer dentro del primer año.',
        columns: ['Aspecto', 'Servicio en la nube', 'Frigate'],
        rows: [
          { 'Aspecto': 'Coste recurrente', 'Servicio en la nube': 'Mensual, a menudo por cámara', 'Frigate': 'Ninguno' },
          { 'Aspecto': 'Coste inicial', 'Servicio en la nube': 'Solo la cámara', 'Frigate': 'Equipo + detector + almacenamiento' },
          { 'Aspecto': 'Detección con IA', 'Servicio en la nube': 'Nube del fabricante', 'Frigate': 'Local (OpenVINO/Hailo/ONNX)' },
          { 'Aspecto': 'Ubicación del vídeo', 'Servicio en la nube': 'Centro de datos del fabricante', 'Frigate': 'Tu disco' },
          { 'Aspecto': 'Caída de internet', 'Servicio en la nube': 'Degradado o inservible', 'Frigate': 'Plenamente funcional en la LAN' },
          { 'Aspecto': 'Riesgo de perder funciones', 'Servicio en la nube': 'El fabricante puede cambiar los planes', 'Frigate': 'La versión que usas sigue funcionando' },
        ],
        note: 'Añadir una cámara a Frigate cuesta la cámara. Añadirla a un servicio por suscripción suele costar la cámara más otra línea en la factura: ahí es donde se abre la brecha. Consulta también [cómo tener una casa inteligente sin suscripciones](/es/smart-home/smart-home-without-subscriptions).',
        callouts: [
          { type: 'note', text: 'Cuenta la electricidad con honestidad: un mini PC siempre encendido con sus discos consume unos 15–30 W. En cinco años es dinero real, pero sigue muy por debajo de la mayoría de planes de nube multicámara.' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Errores frecuentes al configurar Frigate',
        content:
          '**Cinco errores explican la mayoría de montajes fallidos de Frigate, y solo uno tiene que ver con el hardware.**',
        items: [
          '**Detectar sobre el flujo principal:** apuntar el rol `detect` a un flujo 4K multiplica el coste de decodificación sin ganar precisión, porque la entrada del modelo es de 320x320. Detecta siempre en el subflujo y graba en el principal.',
          '**Dejar `shm_size` por defecto:** 128 MB cubren unas dos cámaras a 720p. Las cámaras adicionales se caen de forma intermitente sin error evidente. Pon `--shm-size=512mb` y olvídate.',
          '**Instalar la integración de Home Assistant antes que MQTT:** la integración se instalará limpiamente y no creará nada. Configura primero la integración MQTT en Home Assistant y el bloque `mqtt` en Frigate, apuntando al mismo broker.',
          '**Arreglar falsas alertas cambiando de detector:** un peatón en la acera es una detección correcta. La solución es una zona con `required_zones` y `loitering_time`, no un acelerador más rápido ni un modelo de pago.',
          '**Grabar en el SSD del sistema:** la escritura continua de vídeo consume rápido la resistencia de un SSD de consumo. Pon `/media/frigate` en un disco duro, deja `/tmp/cache` rápido y usa `retain.mode: motion`.',
          '**Desplegar en un LXC de Proxmox:** el paso de dispositivos parece funcionar y luego se rompe de un modo no soportado e indiagnosticable. Usa una máquina virtual QEMU.',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto: ¿qué conviene montar realmente?',
        content:
          '**Compra un mini PC Intel con 16 GB de RAM, ejecuta el detector OpenVINO en su iGPU, usa cámaras PoE con un subflujo de 720p a 5 fps y dedica la primera semana a las zonas en lugar de al hardware.** Ese montaje cubre una casa normal y deja margen para añadir un Hailo-8 más adelante si crece el número de cámaras.',
        items: [
          'Usa **OpenVINO en una iGPU Intel** si partes de cero: el coste más bajo, sin hardware adicional y margen de sobra para 2–6 cámaras.',
          'Usa **un módulo Hailo-8 M.2** si pasas de ocho cámaras o el consumo importa.',
          'Usa **ONNX en una GPU NVIDIA existente** si la máquina ya tiene una, sobre todo si además ejecuta un LLM local.',
          'Usa **un Coral** solo cuando los vatios sean la restricción dura y aceptes que ya no es la vía recomendada.',
          'Evita el detector **cpu**; OpenVINO en modo CPU es la mejor alternativa de reserva.',
          'Si tienes dudas, empieza con un mini PC Intel N150 y dos cámaras, deja las zonas bien puestas y luego escala.',
        ],
        callouts: [
          { type: 'practice', text: 'El orden de gasto que de verdad funciona: primero cámaras y switch PoE, después el equipo, después el almacenamiento, y un acelerador solo cuando las cifras de la página Sistema digan que hace falta. Comprar el acelerador primero es la inversión clásica del orden.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué es Frigate NVR?', a: 'Frigate es un grabador de vídeo en red de código abierto que ejecuta detección de objetos con IA localmente sobre flujos de cámaras IP usando OpenCV y TensorFlow. Graba clips en función de lo detectado y no de movimiento en bruto, y publica cada detección por MQTT para que Home Assistant pueda automatizar sobre ella. El software principal no tiene servicio en la nube ni suscripción.' },
          { q: '¿Sigue haciendo falta un TPU Google Coral para Frigate en 2026?', a: 'No. La documentación de hardware de Frigate indica que Coral ya no se recomienda en instalaciones nuevas, salvo cuando el consumo es una restricción inusualmente estricta. Para un montaje nuevo, las vías recomendadas son el detector OpenVINO en una iGPU Intel, un módulo Hailo-8 o el detector ONNX en una GPU NVIDIA existente.' },
          { q: '¿Qué versión de Frigate conviene ejecutar?', a: 'Frigate 0.17.2, publicada el 28 de junio de 2026, es la versión estable actual. La 0.18.0 está en beta desde julio de 2026 —la tercera beta apareció el 8 de agosto de 2026—, así que usa 0.18 solo si te sientes cómodo con cambios de configuración entre versiones menores.' },
          { q: '¿Cuánta RAM necesita Frigate?', a: 'La detección de objetos y la grabación funcionan con holgura en 8 GB. La búsqueda semántica sube el listón: Frigate documenta 8 GB como mínimo, 16 GB o más con una GPU dedicada como recomendación, y exige una CPU compatible con las instrucciones AVX y AVX2.' },
          { q: '¿Por qué Frigate me avisa constantemente de gente que pasa por la calle?', a: 'Porque son detecciones correctas. Dibuja una zona que cubra solo el suelo dentro de tu propiedad, pon review.alerts.required_zones apuntando a esa zona y añade loitering_time para que quien pase tenga que detenerse antes de generar una alerta. La presencia se juzga por el punto central inferior del recuadro, así que la zona debe cubrir el plano del suelo.' },
          { q: '¿Funciona Frigate sin conexión a internet?', a: 'Sí. Detección, grabación, MQTT y las automatizaciones de Home Assistant funcionan enteramente en tu red local. Solo la visualización remota desde fuera de casa y los proveedores de GenAI en la nube necesitan conectividad, y la 0.17 añadió una integración con llama.cpp para generar descripciones también en local.' },
          { q: '¿Cuál es la diferencia entre una zona y una máscara en Frigate?', a: 'Una máscara de movimiento impide que Frigate ejecute detección alguna en esa región, lo que encaja con marcas de fecha y follaje en movimiento permanente. Una zona deja que la detección funcione con normalidad y solo restringe, mediante required_zones, qué detecciones pueden generar una alerta.' },
          { q: '¿Cuántas cámaras puede llevar un servidor de Frigate?', a: 'Depende del tiempo de inferencia más que del número de cámaras: las detecciones útiles por segundo son aproximadamente 1000 dividido entre el tiempo de inferencia en milisegundos, repartidas entre las cámaras. A 5 fps de detección por cámara y con un detector de 8 ms como una Intel Arc A750 en YOLOv9-320, queda margen de sobra para una instalación residencial típica.' },
          { q: '¿Hace falta Frigate+ para el reconocimiento facial o de matrículas?', a: 'No. El reconocimiento facial y el de matrículas se ejecutan en local sin suscripción, aunque los modelos de Frigate+ pueden mejorar la eficiencia. Frigate+ cuesta 50 $ al año e incluye hasta 12 modelos afinados, con afinados adicionales a 5 $ cada uno.' },
          { q: '¿Puedo ejecutar Frigate en un contenedor LXC de Proxmox?', a: 'No, LXC en Proxmox no está soportado de forma explícita. Usa una máquina virtual QEMU. El paso de una iGPU, un Coral o un módulo Hailo puede parecer que funciona en un LXC y luego fallar de una manera imposible de soportar.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Entender por qué las cámaras con IA local superan a las de nube en privacidad](/es/smart-home/local-ai-security-camera) — el razonamiento antes de los detalles de montaje',
          '[Comparar cámaras locales con soporte RTSP y ONVIF confirmado](/es/smart-home/best-local-security-cameras-2027) — qué cámaras alimentan bien a Frigate',
          '[Revisar mini PC que ejecutan Home Assistant e IA local en un solo equipo](/es/smart-home/best-mini-pc-home-assistant-local-ai) — equipos dimensionados para un montaje con Frigate',
          '[Comprobar los requisitos de hardware de una casa inteligente totalmente local](/es/smart-home/best-hardware-for-local-smart-home) — aceleradores, almacenamiento y red',
          '[Aprender a empezar con Home Assistant](/es/smart-home/home-assistant-getting-started) — el requisito previo si eres nuevo',
          '[Explorar la detección de presencia por radar para estancias sin cámara](/es/smart-home/radar-presence-sensing-no-camera) — la alternativa sin cámara en interiores',
          '[Ver cómo instalar Ollama para un LLM local en la misma máquina](/es/local-llms/how-to-install-ollama) — entre clústeres: descripciones GenAI locales para eventos de Frigate',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '**Hardware recomendado de Frigate** — [docs.frigate.video/frigate/hardware](https://docs.frigate.video/frigate/hardware) — tiempos de inferencia publicados por detector y la indicación de que Coral ya no se recomienda en instalaciones nuevas.',
          '**Configuración de detectores de objetos de Frigate** — [docs.frigate.video/configuration/object_detectors](https://docs.frigate.video/configuration/object_detectors) — lista completa de valores de `type` y la nota de que el detector CPU no se recomienda.',
          '**Configuración de cámaras de Frigate** — [docs.frigate.video/frigate/camera_setup](https://docs.frigate.video/frigate/camera_setup) — resoluciones, tasas de fotogramas e intervalos de fotograma I para detección y grabación.',
          '**Configuración de zonas de Frigate** — [docs.frigate.video/configuration/zones](https://docs.frigate.video/configuration/zones) — required_zones, loitering_time, valor por defecto de inertia y requisitos de la estimación de velocidad.',
          '**Búsqueda semántica de Frigate** — [docs.frigate.video/configuration/semantic_search](https://docs.frigate.video/configuration/semantic_search) — requisitos de RAM y AVX2, comparación de Jina CLIP V1 y V2 y comportamiento de la reindexación.',
          '**Integración de Frigate con Home Assistant** — [docs.frigate.video/integrations/home-assistant](https://docs.frigate.video/integrations/home-assistant) — MQTT como requisito previo y tipos de entidad que crea la integración.',
          '**Versiones de Frigate en GitHub** — [github.com/blakeblackshear/frigate/releases](https://github.com/blakeblackshear/frigate/releases) — números de versión y fechas de publicación de las 0.17.x y las betas 0.18.0.',
          '**Frigate+** — [frigate.video/plus/](https://frigate.video/plus/) — precio de la suscripción, afinados incluidos y limitaciones de etiquetas.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Configurar Frigate NVR: detectores, zonas y Home Assistant (2026)',
      description: 'Frigate 0.17.2 detecta con IA en local, sin nube ni suscripción. La documentación ya no recomienda Coral en instalaciones nuevas: qué detector elegir.',
      url: 'https://www.promptquorum.com/es/smart-home/frigate-nvr-home-assistant-setup',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      about: [
        { '@type': 'Thing', name: 'Frigate NVR' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Detección de objetos' },
        { '@type': 'Thing', name: 'OpenVINO' },
        { '@type': 'Thing', name: 'Hailo-8' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Frigate' },
        { '@type': 'SoftwareApplication', name: 'Home Assistant' },
        { '@type': 'SoftwareApplication', name: 'go2rtc' },
      ],
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuarios de Home Assistant que montan un sistema de cámaras con IA autoalojado' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/es/smart-home/frigate-nvr-home-assistant-setup' },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Instalar Frigate NVR y conectarlo a Home Assistant',
      inLanguage: 'es',
      totalTime: 'PT90M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Preparar el equipo', text: 'Instala Docker en un equipo basado en Debian y crea los directorios /config y /media/frigate.' },
        { '@type': 'HowToStep', position: 2, name: 'Escribir una configuración mínima', text: 'Crea un config.yml con una sola cámara y sin bloque de detector para que Frigate arranque con los valores por defecto y puedas confirmar el flujo.' },
        { '@type': 'HowToStep', position: 3, name: 'Arrancar el contenedor', text: 'Arranca Frigate con un shm_size explícito y el dispositivo correcto: /dev/dri para Intel, el runtime NVIDIA para NVIDIA o /dev/hailo0 para Hailo.' },
        { '@type': 'HowToStep', position: 4, name: 'Comprobar en la interfaz web', text: 'Abre la interfaz web de Frigate y comprueba la imagen de la cámara, los FPS de detección y el tiempo de inferencia en la página Sistema.' },
        { '@type': 'HowToStep', position: 5, name: 'Añadir el detector real', text: 'Añade el bloque detectors correspondiente a tu hardware, reinicia y comprueba que el tiempo de inferencia baja hasta la cifra publicada.' },
        { '@type': 'HowToStep', position: 6, name: 'Conectar Home Assistant', text: 'Configura el broker MQTT en config.yml, añade la integración MQTT en Home Assistant y después instala la integración Frigate.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué es Frigate NVR?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate es un grabador de vídeo en red de código abierto que ejecuta detección de objetos con IA localmente sobre flujos de cámaras IP usando OpenCV y TensorFlow. Graba clips en función de lo detectado y publica cada detección por MQTT para que Home Assistant pueda automatizar sobre ella.' } },
        { '@type': 'Question', name: '¿Sigue haciendo falta un TPU Google Coral para Frigate en 2026?', acceptedAnswer: { '@type': 'Answer', text: 'No. La documentación de hardware de Frigate indica que Coral ya no se recomienda en instalaciones nuevas, salvo cuando el consumo es una restricción inusualmente estricta. Las vías recomendadas son OpenVINO en una iGPU Intel, un módulo Hailo-8 o ONNX en una GPU NVIDIA existente.' } },
        { '@type': 'Question', name: '¿Qué versión de Frigate conviene ejecutar?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate 0.17.2, publicada el 28 de junio de 2026, es la versión estable actual. La 0.18.0 está en beta desde julio de 2026, con la tercera beta el 8 de agosto de 2026.' } },
        { '@type': 'Question', name: '¿Cuánta RAM necesita Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'La detección de objetos y la grabación funcionan con holgura en 8 GB. Para la búsqueda semántica, Frigate documenta 8 GB como mínimo, 16 GB o más con una GPU dedicada como recomendación, y exige una CPU compatible con AVX y AVX2.' } },
        { '@type': 'Question', name: '¿Por qué Frigate me avisa constantemente de gente que pasa por la calle?', acceptedAnswer: { '@type': 'Answer', text: 'Porque son detecciones correctas. Dibuja una zona que cubra solo el suelo dentro de tu propiedad, pon review.alerts.required_zones apuntando a esa zona y añade loitering_time. La presencia se juzga por el punto central inferior del recuadro.' } },
        { '@type': 'Question', name: '¿Funciona Frigate sin conexión a internet?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Detección, grabación, MQTT y las automatizaciones de Home Assistant funcionan enteramente en tu red local. Solo la visualización remota y los proveedores de GenAI en la nube necesitan conectividad.' } },
        { '@type': 'Question', name: '¿Cuál es la diferencia entre una zona y una máscara en Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Una máscara de movimiento impide que Frigate ejecute detección alguna en esa región. Una zona deja que la detección funcione con normalidad y solo restringe, mediante required_zones, qué detecciones pueden generar una alerta.' } },
        { '@type': 'Question', name: '¿Cuántas cámaras puede llevar un servidor de Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Depende del tiempo de inferencia más que del número de cámaras: las detecciones útiles por segundo son aproximadamente 1000 dividido entre el tiempo de inferencia en milisegundos, repartidas entre las cámaras.' } },
        { '@type': 'Question', name: '¿Hace falta Frigate+ para el reconocimiento facial o de matrículas?', acceptedAnswer: { '@type': 'Answer', text: 'No. El reconocimiento facial y el de matrículas se ejecutan en local sin suscripción. Frigate+ cuesta 50 $ al año e incluye hasta 12 modelos afinados, con afinados adicionales a 5 $ cada uno.' } },
        { '@type': 'Question', name: '¿Puedo ejecutar Frigate en un contenedor LXC de Proxmox?', acceptedAnswer: { '@type': 'Answer', text: 'No, LXC en Proxmox no está soportado de forma explícita. Usa una máquina virtual QEMU. El paso de una iGPU, un Coral o un módulo Hailo puede parecer que funciona y luego fallar de una manera imposible de soportar.' } },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    current_hardware_mentioned: ['Google Coral USB/M.2', 'Hailo-8 / Hailo-8L', 'Intel Arc A750', 'Intel UHD 730 iGPU', 'Intel NPU', 'NVIDIA RTX 3050 / RTX 3070', 'AMD Radeon 780M', 'Apple M3 Pro'],
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/frigate-nvr-home-assistant-setup-overview-hero-pt.webp',
    title: 'Configurar o Frigate NVR: detectores, zonas e Home Assistant (2026)',
    seoTitle: 'Frigate NVR 2026: detector, zonas e Home Assistant',
    intro:
      'O Frigate é um gravador de vídeo em rede de código aberto que executa detecção de objetos com IA no seu próprio hardware e entrega cada detecção ao Home Assistant como uma entidade. Este guia cobre a escolha do detector em 2026 — em que o Google Coral deixou de ser a resposta padrão —, os ajustes de stream das câmeras, um config.yml funcional, as zonas que realmente eliminam alertas falsos, a integração com o Home Assistant e o que mudou nas versões 0.16 e 0.17.',
    metaDescription:
      'O Frigate 0.17.2 detecta com IA localmente, sem nuvem e sem assinatura. A documentação já não recomenda o Coral em instalações novas: qual detector usar.',
    twitterDescription:
      'Guia prático para montar o Frigate NVR: qual detector comprar em 2026, ajustes de stream das câmeras, um config.yml funcional, zonas e integração com o Home Assistant.',
    readTime: '16 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant que montam um sistema de câmeras com IA auto-hospedado usando Frigate',
    primaryTerm: 'configuração do Frigate NVR',
    targetKeywords: [
      'configurar frigate nvr',
      'frigate home assistant integracao',
      'frigate detector coral ou openvino',
      'exemplo config yml frigate',
      'frigate zonas alertas falsos',
    ],
    leadAnswerBlock:
      '**O Frigate é um NVR de código aberto que executa detecção de objetos com IA localmente nos streams das suas câmeras e expõe cada detecção ao Home Assistant como uma entidade.** A partir do Frigate 0.17.2, o ponto de partida recomendado para uma instalação nova é uma iGPU Intel com o detector OpenVINO, e não um Google Coral.',
    quickAnswerTop: {
      pt: {
        question: 'Como configurar o Frigate NVR com o Home Assistant?',
        answer:
          'Rode o Frigate em Docker com um config.yml que aponte para o substream de baixa resolução de cada câmera na detecção e para o stream principal na gravação. Escolha um detector compatível com o seu hardware (OpenVINO em uma iGPU Intel, ONNX em uma GPU NVIDIA ou um módulo Hailo-8) e depois instale a integração Frigate no Home Assistant. O Home Assistant precisa da integração MQTT configurada antes — esse é o passo que a maioria das primeiras instalações esquece.',
        bullets: [
          'O Frigate 0.17.2 é a versão estável atual (28 de junho de 2026)',
          'Detecte em 1280x720 a 5 fps; grave o stream principal a 15 fps',
          'O Frigate já não recomenda o Google Coral em instalações novas',
          'Intel Arc A750: cerca de 8 ms em YOLOv9-320; iGPU Intel UHD 730: cerca de 14 ms',
          'A integração do Home Assistant exige a integração MQTT antes',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'O que o Frigate faz', anchor: 'what-frigate-is' },
      { label: 'Qual detector comprar', anchor: 'detector' },
      { label: 'Hardware do servidor e RAM', anchor: 'server-hardware' },
      { label: 'Ajustes de stream das câmeras', anchor: 'cameras' },
      { label: 'Instalar o Frigate', anchor: 'install' },
      { label: 'Um config.yml funcional', anchor: 'config' },
      { label: 'Zonas, máscaras e alertas falsos', anchor: 'zones' },
      { label: 'Integração com o Home Assistant', anchor: 'home-assistant' },
      { label: 'Busca, rostos e placas', anchor: 'ai-features' },
      { label: 'O Frigate+ vale a pena?', anchor: 'frigate-plus' },
      { label: 'Custo frente às câmeras por assinatura', anchor: 'cost' },
      { label: 'Erros comuns', anchor: 'mistakes' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O Frigate é um NVR de código aberto que executa detecção de objetos com IA localmente em streams RTSP de câmeras e publica cada detecção no Home Assistant via MQTT, sem serviço de nuvem e sem assinatura.' },
      { type: 'plain-terms', content: 'Uma câmera inteligente comum envia o vídeo para uma empresa, que decide se viu uma pessoa e cobra mensalmente por isso. O Frigate faz esse passo em um computador dentro da sua casa: o vídeo não sai de lá, não há mensalidade e cada detecção vira algo sobre o qual o Home Assistant pode agir.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        content:
          'A própria documentação do Frigate já desaconselha o TPU Google Coral em instalações novas — justamente o acelerador que a maioria dos tutoriais ainda manda comprar primeiro.',
        items: [
          'O Frigate 0.17.2 (28 de junho de 2026) é a versão estável atual; a 0.18.0 está em beta desde 8 de agosto de 2026',
          'O detector vem primeiro: uma iGPU Intel com o detector OpenVINO é o início viável mais barato; Hailo-8 ou uma GPU NVIDIA escalam mais',
          'O Coral passou a ser alternativa de reserva, não o padrão — recomendado apenas quando o consumo é a restrição decisiva',
          'Dois streams por câmera: 1280x720 a 5 fps para detectar e o stream principal em resolução total a 15 fps para gravar',
          'O que elimina alertas falsos são as zonas com required_zones, loitering_time e inertia, não um modelo melhor',
          'A integração do Home Assistant exige a integração MQTT já configurada, senão nenhuma entidade aparece',
          'A busca semântica pede no mínimo 8 GB de RAM, 16 GB e uma GPU para ficar confortável, e uma CPU com AVX2',
          'O Frigate+ custa US$ 50 por ano (cobrança em USD) por até 12 modelos ajustados; reconhecimento facial e de placas funcionam sem assinatura',
        ],
      },
      whatFrigateIs: {
        id: 'what-frigate-is',
        title: 'O que o Frigate faz que um NVR comum não faz?',
        content:
          '**O Frigate trabalha em duas etapas: uma detecção de movimento barata encontra as regiões que valem a pena examinar e, em seguida, um modelo real de detecção de objetos decide se ali há uma pessoa, um carro, um cachorro ou uma encomenda.** Um NVR convencional dispara com mudança de pixels, e por isso alerta com faróis, chuva e arbustos ao vento.',
        items: [
          '**Movimento primeiro, IA depois:** a detecção de movimento leve define *onde* rodar o detector, então um acelerador pequeno cobre muitas câmeras.',
          '**Gravação por objeto:** a retenção depende do que foi detectado, e não de um buffer contínuo 24 horas, o que faz o armazenamento render muito mais.',
          '**Retransmissão via go2rtc:** o Frigate puxa cada câmera uma única vez e redistribui o stream, em vez de cinco clientes atacarem a câmera ao mesmo tempo.',
          '**Saída MQTT:** cada objeto rastreado, cada entrada em zona e cada contagem é publicada, e é isso que viabiliza as automações do Home Assistant.',
          '**Itens de revisão:** as detecções são separadas em *alerts* (aquilo sobre o que você quer ser avisado) e *detections* (registradas, mas silenciosas).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Frigate usa uma detecção de movimento de baixo custo para selecionar regiões do quadro e roda o modelo de detecção de objetos apenas nessas regiões — por isso um único acelerador pequeno atende muitas câmeras ao mesmo tempo.' },
        ],
        callouts: [
          { type: 'note', text: 'A separação entre alerts e detections é o conceito mais útil do Frigate. Os alerts acordam o seu celular; as detections formam o registro pesquisável. Configure cada um separadamente.' },
        ],
      },
      detector: {
        id: 'detector',
        title: 'Qual detector comprar para o Frigate em 2026?',
        content:
          '**Compre uma máquina Intel com iGPU e use o detector OpenVINO se estiver começando do zero; um módulo Hailo-8 se precisar da menor latência por watt; o detector ONNX se a máquina já tiver uma GPU NVIDIA.** A documentação do Frigate afirma que o Coral já não é recomendado em instalações novas, exceto quando o consumo é uma restrição excepcionalmente rígida.',
        items: [
          'Use **OpenVINO** se o host tiver uma CPU Intel de 6ª geração ou mais recente — a iGPU já está paga e não exige hardware adicional.',
          'Use **ONNX** se a máquina já tiver uma GPU NVIDIA ou AMD; o Frigate detecta a plataforma automaticamente.',
          'Use **Hailo-8 / Hailo-8L** se quiser latência de acelerador em um slot M.2 com baixo consumo.',
          'Use **TensorRT** especificamente em placas NVIDIA Jetson — veja [a análise do NVIDIA Jetson Orin Nano para IA na casa inteligente](/pt/smart-home/nvidia-jetson-orin-nano-smart-home-review).',
          'Use **edgetpu** (Coral) apenas quando os watts forem a restrição decisiva e você aceitar uma linha de modelos envelhecendo.',
          'Evite completamente o detector **cpu** — segundo o Frigate, o OpenVINO em modo CPU é mais eficiente que o detector CPU dedicado.',
        ],
        columns: ['Detector', 'Hardware', 'Inferência (publicada)'],
        rows: [
          { 'Detector': 'openvino', 'Hardware': 'Intel Arc A750', 'Inferência (publicada)': '~4 ms MobileNetV2 / ~8 ms YOLOv9-320' },
          { 'Detector': 'openvino', 'Hardware': 'Intel NPU', 'Inferência (publicada)': '~6 ms MobileNetV2 / ~11 ms YOLOv9-320' },
          { 'Detector': 'openvino', 'Hardware': 'iGPU Intel UHD 730', 'Inferência (publicada)': '~10 ms MobileNetV2 / ~14 ms YOLOv9-tiny' },
          { 'Detector': 'hailo8l', 'Hardware': 'Hailo-8', 'Inferência (publicada)': '~6 ms SSD MobileNet / ~7 ms YOLOv6n' },
          { 'Detector': 'hailo8l', 'Hardware': 'Hailo-8L', 'Inferência (publicada)': '~10 ms SSD MobileNet / ~11 ms YOLOv6n' },
          { 'Detector': 'onnx', 'Hardware': 'NVIDIA RTX 3070', 'Inferência (publicada)': '~6–8 ms YOLOv9 tiny→small 320' },
          { 'Detector': 'onnx', 'Hardware': 'NVIDIA RTX 3050', 'Inferência (publicada)': '~8–10 ms YOLOv9 tiny→small 320' },
          { 'Detector': 'onnx', 'Hardware': 'AMD Radeon 780M', 'Inferência (publicada)': '~14 ms YOLOv9-tiny-320' },
          { 'Detector': 'zmq', 'Hardware': 'Apple M3 Pro', 'Inferência (publicada)': '~6 ms YOLOv9-tiny-320' },
        ],
        note: 'Os números são os publicados pelo Frigate para cada detector, não medições da PromptQuorum. O Frigate também traz os tipos rknn (NPUs Rockchip), memryx, synaptics, deepstack e degirum.',
        callouts: [
          { type: 'warning', text: 'A maioria dos tutoriais de Frigate ainda começa com "compre um Coral". Esse conselho é anterior ao trabalho em OpenVINO, Hailo e ONNX das versões 0.16 e 0.17, e a própria página de hardware do Frigate hoje o contradiz para instalações novas.' },
          { type: 'tip', text: 'A capacidade de câmeras de um Coral equivale a cerca de 1000 / inference_speed quadros por segundo, compartilhados entre todas as câmeras. A 5 fps de detecção, um orçamento de 10 ms cobre no papel uns 20 streams — throttling térmico e limite de energia USB reduzem esse número.' },
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: 'O detector é o chip que responde "isso é uma pessoa?". Você pode usar a parte gráfica que já vem dentro de uma CPU Intel, uma placa NVIDIA dedicada ou um pequeno módulo de IA no formato M.2. O pendrive que todo mundo recomenda (Google Coral) ainda funciona, mas deixou de ser o ponto de partida indicado.' },
        ],
      },
      serverHardware: {
        id: 'server-hardware',
        title: 'Do que o próprio servidor Frigate precisa?',
        content:
          '**Um mini PC Intel série N ou Core i com 8–16 GB de RAM, um SSD para o sistema e um HD separado para as gravações cobre uma casa típica de quatro a oito câmeras.** O gargalo raramente é a CPU: são a memória compartilhada, a durabilidade de escrita do disco e a decisão de usar ou não a busca semântica.',
        items: [
          '**Memória compartilhada (`shm`):** os 128 MB padrão cobrem só cerca de duas câmeras em 720p. O Frigate estima cerca de 66.63 MB por câmera em 1280x720 com logs, então oito câmeras exigem cerca de 253 MB.',
          '**Defina `--shm-size` explicitamente:** `--shm-size=512mb` é um valor seguro para a maioria das montagens; um valor baixo demais não gera erro claro, aparece como câmeras caindo.',
          '**Três pontos de montagem:** `/config` para o YAML e o banco, `/media/frigate` para clipes, gravações e exportações, `/tmp/cache` para os segmentos em andamento.',
          '**Gravações em HD:** escrita contínua consome a durabilidade de um SSD de consumo. Coloque `/media/frigate` em um disco rígido e mantenha `/tmp/cache` em armazenamento rápido.',
          '**RAM para recursos de IA:** a busca semântica exige no mínimo 8 GB e uma CPU com AVX e AVX2; o recomendado são 16 GB mais uma GPU.',
        ],
        columns: ['Montagem', 'Detector', 'Indicado para'],
        rows: [
          { 'Montagem': 'Mini PC Intel N100/N150, 16 GB', 'Detector': 'openvino (iGPU)', 'Indicado para': '2 a 6 câmeras, sem busca semântica' },
          { 'Montagem': 'Mini PC Intel Core i5, 32 GB', 'Detector': 'openvino (iGPU)', 'Indicado para': '6 a 12 câmeras com busca semântica' },
          { 'Montagem': 'Qualquer host + Hailo-8 M.2', 'Detector': 'hailo8l', 'Indicado para': 'Baixo consumo, muitas câmeras' },
          { 'Montagem': 'Desktop com RTX 3050 ou superior', 'Detector': 'onnx', 'Indicado para': 'Frigate e um LLM local na mesma máquina' },
          { 'Montagem': 'Raspberry Pi 5', 'Detector': 'edgetpu / hailo8l', 'Indicado para': '1 a 3 câmeras, orçamento de energia apertado' },
        ],
        note: 'O Frigate suporta Docker em Debian bare metal, o add-on do Home Assistant, Kubernetes via Helm, Unraid, NAS Synology e QNAP, ESXi e macOS em Apple Silicon. No Proxmox, use uma máquina virtual QEMU — LXC não é suportado explicitamente.',
        callouts: [
          { type: 'warning', text: 'Rodar o Frigate em um contêiner LXC do Proxmox não é suportado. Repassar um Coral ou uma iGPU parece funcionar e depois falha de um jeito que ninguém vai conseguir diagnosticar por você. Use uma máquina virtual.' },
          { type: 'practice', text: 'Se quiser uma única máquina para Frigate, Home Assistant e um LLM local, dimensione primeiro pelo LLM — veja [as indicações de mini PC para Home Assistant e IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai).' },
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Como configurar suas câmeras para o Frigate?',
        content:
          '**Configure dois streams no próprio firmware da câmera: um substream de 1280x720 a 5 fps para detecção e o stream principal em resolução nativa a 15 fps para gravação, ambos em H.264 e com a mesma proporção de tela.** O modelo de detecção do Frigate trabalha com entrada de 320x320, então um stream de detecção em 4K não traz ganho algum e custa muito em decodificação.',
        numberedItems: [
          'No firmware da câmera, defina o substream em 1280x720, 5 fps, H.264, com intervalo de quadro I de 5 (um keyframe por segundo).',
          'Defina o stream principal na resolução nativa da câmera — 2688x1520 em um sensor de 4 MP comum — a 15 fps, H.264, intervalo de quadro I de 30.',
          'Mantenha a mesma proporção nos dois streams (16:9 com 16:9) para que as caixas delimitadoras correspondam entre detecção e gravação.',
          'Atribua o papel `detect` ao substream e o papel `record` ao stream principal.',
          'Suba a detecção para 10 fps apenas com alvos realmente rápidos, como um carro cruzando uma vista estreita da entrada.',
        ],
        items: [
          'Use H.264 e não H.265 — o suporte de H.265 nos navegadores é limitado e a visualização ao vivo é a primeira a sofrer.',
          'Mude a taxa de quadros na câmera, nunca no Frigate: reduzir por software gasta CPU sem benefício.',
          'Prefira PoE cabeado a Wi-Fi; um substream que cai aparece como detecção perdida, não como falha evidente.',
          'Para câmeras que expõem RTSP e ONVIF corretamente, veja [o guia de compra de câmeras locais para montagens com Frigate](/pt/smart-home/best-local-security-cameras-2027).',
        ],
        callouts: [
          { type: 'tip', text: 'Se os objetos no fundo da entrada nunca são detectados, a causa costuma ser resolução e não o modelo: em 1280x720 reduzidos para uma entrada de 320x320, uma pessoa distante são pouquíssimos pixels. Divida essa vista em uma segunda câmera ou um stream com zoom em vez de aumentar a resolução de detecção de forma geral.' },
          { type: 'note', text: 'O Frigate puxa cada câmera uma única vez e atende os demais clientes a partir dessa cópia, por isso vale apontar o Home Assistant para o Frigate e não para a câmera.' },
        ],
      },
      install: {
        id: 'install',
        title: 'Como instalar o Frigate?',
        content:
          '**Use Docker Compose em um host Debian bare metal se quiser o caminho suportado; use o add-on do Home Assistant se aceitar menos controle em troca de uma instalação em um clique.** Ambos precisam do mesmo config.yml e do mesmo broker MQTT.',
        numberedItems: [
          'Instale o Docker em um host baseado em Debian e crie os diretórios `/config` e `/media/frigate`.',
          'Escreva um `config.yml` mínimo com uma única câmera e sem bloco de detector, para que o Frigate suba com os padrões e você confirme que o stream chega.',
          'Suba o contêiner com `shm_size` explícito e o dispositivo correto: `/dev/dri` (Intel), o runtime de GPU (NVIDIA) ou `/dev/hailo0` (Hailo).',
          'Abra a interface web e confira a imagem da câmera, os FPS de detecção e o tempo de inferência mostrado na página Sistema.',
          'Acrescente o bloco `detectors` real, reinicie e confira se o tempo de inferência cai para o número publicado do seu hardware.',
          'Configure o broker MQTT no `config.yml` e depois adicione a integração Frigate no Home Assistant.',
        ],
        codeBlock: `services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:0.17.2
    restart: unless-stopped
    privileged: true
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128   # Intel iGPU (OpenVINO)
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config:/config
      - /srv/frigate/media:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "8971:8971"   # authenticated web UI
      - "8554:8554"   # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'warning', text: 'Fixe a tag da imagem em uma versão específica em vez de `stable`. Os esquemas de configuração do Frigate mudam entre versões menores, e um `docker compose pull` sem supervisão na virada de 0.17 para 0.18 pode deixar um contêiner que se recusa a subir com o seu YAML atual.' },
          { type: 'practice', text: 'Coloque uma câmera para funcionar antes de adicionar as demais. Quase toda thread de "o Frigate quebrou" termina na URL do substream de uma câmera específica, e isso é muito mais fácil de enxergar com uma única entrada na configuração.' },
        ],
      },
      config: {
        id: 'config',
        title: 'Como é um config.yml do Frigate que funciona?',
        content:
          '**Uma configuração funcional tem quatro blocos: `mqtt`, `detectors`, `cameras` com dois papéis de stream, e os filtros `zones` e `review` por câmera.** Todo o resto tem valores padrão que bastam no primeiro dia.',
        codeBlock: `mqtt:
  host: 192.168.1.10
  user: frigate
  password: "{FRIGATE_MQTT_PASSWORD}"

detectors:
  ov:
    type: openvino
    device: GPU

cameras:
  driveway:
    ffmpeg:
      inputs:
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=1
          roles: [detect]
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=0
          roles: [record]
    detect:
      width: 1280
      height: 720
      fps: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: motion
      alerts:
        retain:
          days: 30
    snapshots:
      enabled: true
    motion:
      mask:
        - 0,0,0.35,0,0.35,0.12,0,0.12   # timestamp overlay
    zones:
      driveway_apron:
        coordinates: 0.14,0.98,0.62,0.55,0.95,0.72,0.88,1.0
        loitering_time: 4
        inertia: 3
    review:
      alerts:
        labels: [person, car]
        required_zones: [driveway_apron]
      detections:
        labels: [person, car, dog, cat]`,
        codeLanguage: 'yaml',
        items: [
          '`subtype=1` e `subtype=0` são a convenção Dahua/Amcrest para substream e stream principal; a Reolink usa `h264Preview_01_sub` e `h264Preview_01_main`.',
          '`retain.mode: motion` mantém gravação contínua apenas onde houve movimento, e é a principal alavanca de economia de armazenamento.',
          '`review.alerts.required_zones` impede que um carro na via pública acorde o seu celular.',
          'O Frigate 0.17 trouxe configuração completa pela interface, então a maior parte disso já pode ser editada no navegador em vez de na mão.',
        ],
        callouts: [
          { type: 'tip', text: 'O Frigate 0.17 também introduziu Perfis — sobreposições de configuração nomeadas que você alterna sem reiniciar o contêiner. Um perfil "visitas em casa" que amplia required_zones é melhor do que editar o YAML duas vezes por semana.' },
        ],
      },
      zones: {
        id: 'zones',
        title: 'Como zonas e máscaras eliminam alertas falsos?',
        content:
          '**Zonas filtram quais detecções importam; máscaras de movimento impedem que o Frigate sequer olhe para uma região. Use uma zona quando o objeto é real mas irrelevante, e uma máscara quando o movimento nem é um objeto.** A presença em zona é avaliada pelo ponto central inferior da caixa delimitadora, então a zona precisa cobrir o chão onde estão pés ou rodas, não a altura das cabeças.',
        items: [
          '**Máscara de movimento:** para marcações de data e hora, uma árvore balançando, uma bandeira. O Frigate nunca roda detecção ali. Use para movimento que nunca será um objeto de interesse.',
          '**Máscara de filtro de objeto:** suprime um rótulo específico em uma região específica — o carro do vizinho permanentemente detectado como `car`, por exemplo.',
          '**Zona + `required_zones`:** o objeto é mesmo uma pessoa, mas uma pessoa na calçada não é um alerta. Essa é a correção certa para o fluxo de pedestres.',
          '**`loitering_time`:** exige que o objeto permaneça N segundos na zona — um entregador que sobe pelo caminho se qualifica, alguém que passa direto não.',
          '**`inertia`:** exige que o objeto permaneça dentro da zona por N quadros consecutivos (3 por padrão), para que a oscilação da caixa na borda não dispare um alerta.',
          '**Estimativa de velocidade:** uma zona com exatamente quatro pontos alinhados ao chão mais uma lista `distances` gera um valor de velocidade na interface e via MQTT.',
        ],
        promptExamples: [
          { label: '❌ Abordagem ruim', text: 'Alertas para cada pessoa, em todas as câmeras, o dia inteiro — e notificações silenciadas depois de dois dias porque a calçada em frente gera quarenta alertas por noite.' },
          { label: '✅ Abordagem boa', text: 'Uma zona driveway_apron cobrindo apenas o chão dentro do limite do terreno, review.alerts.required_zones apontando para essa zona, loitering_time: 4, e detections (sem notificação) ativas para todo o resto, para que o registro pesquisável continue completo.' },
        ],
        callouts: [
          { type: 'warning', text: 'Desenhar uma zona na metade superior do quadro não serve para nada. A presença é julgada pelo ponto central inferior da caixa delimitadora — desenhe as zonas no plano do chão.' },
          { type: 'insight', text: 'Alertas falsos quase nunca são um problema de qualidade do modelo. Numa instalação residencial típica, zonas e required_zones removem mais ruído do que qualquer upgrade de detector.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'No Frigate, uma máscara de movimento impede totalmente que a detecção rode naquela região, enquanto uma zona com required_zones deixa a detecção funcionar normalmente e apenas restringe quais detecções podem gerar um alerta.' },
        ],
      },
      homeAssistant: {
        id: 'home-assistant',
        title: 'Como conectar o Frigate ao Home Assistant?',
        content:
          '**Configure primeiro a integração MQTT no Home Assistant, aponte o Frigate para o mesmo broker e só então instale a integração Frigate — ela cria entidades camera, image, sensor, switch e binary_sensor por câmera e por zona.** Sem MQTT configurado antes, a integração instala e não produz nada.',
        numberedItems: [
          'Instale um broker MQTT (o add-on Mosquitto é a escolha usual) e adicione a integração MQTT no Home Assistant.',
          'Aponte o bloco `mqtt` do config.yml do Frigate para o mesmo broker, com usuário e senha próprios.',
          'Instale a integração Frigate pelo HACS ou como integração nativa e aponte-a para o host do Frigate.',
          'Ative a integração Media Source para que gravações e snapshots apareçam no navegador de mídia.',
          'Construa as automações sobre os sensores binários por zona, e não sobre os por câmera.',
        ],
        itemHeadings: true,
        columns: ['Tipo de entidade', 'O que você obtém', 'Para que usar'],
        rows: [
          { 'Tipo de entidade': 'binary_sensor', 'O que você obtém': 'Movimento e presença de objeto por câmera, por zona e por rótulo de objeto', 'Para que usar': 'O gatilho de praticamente qualquer automação — uma pessoa em uma zona específica é um gatilho muito melhor do que movimento em uma câmera' },
          { 'Tipo de entidade': 'camera', 'O que você obtém': 'Entidade de stream ao vivo servida pela retransmissão do Frigate na porta 8554', 'Para que usar': 'Cartões de painel e transmissão; apontar o Home Assistant para cá em vez de para a câmera evita uma segunda conexão com ela' },
          { 'Tipo de entidade': 'image', 'O que você obtém': 'O snapshot mais recente do último objeto detectado, por câmera', 'Para que usar': 'Anexar uma imagem a uma notificação no celular sem chamar a API de snapshot na mão' },
          { 'Tipo de entidade': 'sensor', 'O que você obtém': 'Contagens de objetos por zona e por câmera, além de números de desempenho do detector e dos processos', 'Para que usar': 'Lógica de ocupação e um painel de saúde do sistema — o tempo de inferência aqui é o aviso antecipado de que um detector caiu para a CPU' },
          { 'Tipo de entidade': 'switch', 'O que você obtém': 'Chaves de detecção, gravação e snapshots por câmera', 'Para que usar': 'Automações de privacidade, como desligar a detecção interna quando a presença indicar que há alguém em casa' },
        ],
        note: 'A integração também expõe as ações camera.turn_on e camera.turn_off, suporta vários servidores Frigate com configurações MQTT separadas e permite sobrescrever o modelo de URL RTSP com Jinja2.',
        callouts: [
          { type: 'warning', text: 'Se a integração Frigate instala mas nenhuma entidade aparece, a causa é quase sempre MQTT: ou a integração nunca foi adicionada no Home Assistant, ou Frigate e Home Assistant estão falando com brokers diferentes.' },
          { type: 'practice', text: 'Dispare automações pelo sensor binário de zona somado a uma condição no rótulo do objeto. Um sensor de movimento de câmera dispara com chuva; `binary_sensor.driveway_driveway_apron_person` não.' },
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'O que a busca semântica, o reconhecimento facial e o de placas acrescentam?',
        content:
          '**A busca semântica permite digitar "van preta na entrada à noite" e obter os clipes correspondentes; o reconhecimento facial e o de placas transformam detecções anônimas em detecções nomeadas — e ambos funcionam sem assinatura do Frigate+.** Esses recursos custam RAM, não dinheiro.',
        items: [
          '**Busca semântica:** exige no mínimo 8 GB de RAM, uma CPU com AVX e AVX2 e, idealmente, 16 GB mais uma GPU dedicada. Em um Raspberry Pi ela não roda de forma útil.',
          '**Modelo de embeddings:** o Jina CLIP V1 é o padrão; a variante `small` é quantizada e roda de forma aceitável na CPU, a `large` usa a GPU quando há uma.',
          '**O Jina CLIP V2** cobre 89 idiomas em vez de apenas inglês, mas o Frigate documenta cerca de 3% de melhoria em troca de bem mais RAM e tempo de inferência, e desaconselha inferência em CPU.',
          '**A reindexação é manual:** ativar a busca semântica não indexa objetos já existentes. Use o botão "Reindex" na interface ou defina `reindex: True`, contando com carga alta de CPU enquanto durar.',
          '**Reconhecimento facial e de placas** rodam localmente e não exigem assinatura, embora os modelos do Frigate+ melhorem a eficiência.',
          '**Descrições com GenAI:** a 0.17 adicionou suporte a múltiplos provedores e uma integração dedicada com llama.cpp, então as descrições podem vir de um modelo no seu próprio hardware — veja [automações com LLM local no Home Assistant](/pt/smart-home/ai-automations-local-llm).',
        ],
        callouts: [
          { type: 'tip', text: 'Ative a busca semântica antes de acumular um ano de clipes. Reindexar 200.000 objetos rastreados em um mini PC sem GPU é trabalho de uma noite inteira.' },
          { type: 'note', text: 'O Frigate 0.16 acrescentou gatilhos de busca semântica — uma ação dispara quando um objeto rastreado corresponde a uma imagem ou descrição salva. É a ponte entre "pesquisar minhas gravações" e "automatizar pelo que elas significam".' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'O Frigate+ vale US$ 50 por ano?',
        content:
          '**O Frigate+ vale a pena assim que você tem um falso positivo específico e repetido que o modelo padrão não resolve; caso contrário, os modelos gratuitos com boas zonas dão conta.** Custa US$ 50 por ano (cobrança em USD) e inclui até 12 modelos ajustados, com ajustes adicionais a US$ 5 cada.',
        decisionBlock: {
          title: 'Frigate+ ou modelos padrão?',
          localIf: [
            'Um objeto específico é classificado errado repetidamente no seu terreno',
            'Você tem ângulos de câmera incomuns que o modelo padrão lida mal',
            'Você quer rótulos sugeridos por IA para acelerar seus próprios envios',
            'Você quer financiar o desenvolvimento contínuo do projeto de código aberto',
          ],
          cloudIf: [
            'Seus alertas falsos vêm do movimento na calçada — zonas resolvem isso de graça',
            'Você precisa de rótulos fora da lista do Frigate; rótulos próprios ainda não estão disponíveis',
            'Você tem apenas uma ou duas câmeras com enquadramentos simples',
          ],
          quick: [
            'Corrija primeiro as zonas e reavalie depois de duas semanas',
            'Se os alertas continuarem errando em objetos reais, assine',
            'Os modelos que você treinou continuam disponíveis para download após o cancelamento',
          ],
        },
        items: [
          'O modelo base do Frigate+ foi atualizado para 2026.0, construído sobre YOLOv9, com novos rótulos candidatos como `lawnmower` e `heron`.',
          'Ainda não é possível adicionar rótulos personalizados livres: o treinamento se limita ao conjunto de rótulos suportado pelo Frigate.',
          'Reconhecimento facial e de placas não exigem a assinatura.',
        ],
        callouts: [
          { type: 'insight', text: 'Assinar antes de ajustar as zonas é a forma mais comum de gastar US$ 50 sem ver melhoria alguma. Um modelo ajustado torna as detecções corretas mais confiáveis; ele não faz um pedestre corretamente detectado deixar de ser um pedestre.' },
        ],
      },
      cost: {
        id: 'cost',
        title: 'Como o Frigate se compara em custo às câmeras por assinatura?',
        content:
          '**O Frigate converte uma mensalidade de nuvem por câmera em um custo único de hardware que não cresce com o número de câmeras.** Acima de duas câmeras, o ponto de equilíbrio costuma cair dentro do primeiro ano.',
        columns: ['Aspecto', 'Serviço em nuvem', 'Frigate'],
        rows: [
          { 'Aspecto': 'Custo recorrente', 'Serviço em nuvem': 'Mensal, muitas vezes por câmera', 'Frigate': 'Nenhum' },
          { 'Aspecto': 'Custo inicial', 'Serviço em nuvem': 'Só a câmera', 'Frigate': 'Host + detector + armazenamento' },
          { 'Aspecto': 'Detecção com IA', 'Serviço em nuvem': 'Nuvem do fabricante', 'Frigate': 'Local (OpenVINO/Hailo/ONNX)' },
          { 'Aspecto': 'Onde ficam as imagens', 'Serviço em nuvem': 'Data center do fabricante', 'Frigate': 'No seu disco' },
          { 'Aspecto': 'Queda de internet', 'Serviço em nuvem': 'Degradado ou inoperante', 'Frigate': 'Plenamente funcional na LAN' },
          { 'Aspecto': 'Risco de perder recursos', 'Serviço em nuvem': 'O fabricante pode mudar os planos', 'Frigate': 'A versão que você usa continua funcionando' },
        ],
        note: 'Adicionar uma câmera ao Frigate custa a câmera. Adicioná-la a um serviço por assinatura costuma custar a câmera mais outra linha na fatura — é aí que a diferença aumenta. Veja também [como ter uma casa inteligente sem assinaturas](/pt/smart-home/smart-home-without-subscriptions).',
        callouts: [
          { type: 'note', text: 'Conte a energia com honestidade: um mini PC sempre ligado com discos consome cerca de 15–30 W. Em cinco anos é dinheiro real, mas continua bem abaixo da maioria dos planos de nuvem para várias câmeras.' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Erros comuns ao configurar o Frigate',
        content:
          '**Cinco erros respondem pela maioria das montagens de Frigate que dão errado, e só um deles é sobre hardware.**',
        items: [
          '**Detectar no stream principal:** apontar o papel `detect` para um stream 4K multiplica o custo de decodificação sem nenhum ganho de precisão, porque a entrada do modelo é 320x320. Sempre detecte no substream e grave no principal.',
          '**Deixar `shm_size` no padrão:** 128 MB cobrem cerca de duas câmeras em 720p. As câmeras além disso caem de forma intermitente, sem erro evidente. Defina `--shm-size=512mb` e siga em frente.',
          '**Instalar a integração do Home Assistant antes do MQTT:** a integração instala normalmente e não cria nada. Configure primeiro a integração MQTT no Home Assistant e o bloco `mqtt` no Frigate, apontando para o mesmo broker.',
          '**Resolver alertas falsos trocando de detector:** um pedestre na calçada é uma detecção correta. A solução é uma zona com `required_zones` e `loitering_time`, não um acelerador mais rápido ou um modelo pago.',
          '**Gravar no SSD do sistema:** a escrita contínua de vídeo consome rápido a durabilidade de um SSD de consumo. Coloque `/media/frigate` em um HD, mantenha `/tmp/cache` rápido e use `retain.mode: motion`.',
          '**Implantar em um LXC do Proxmox:** o repasse de dispositivos parece funcionar e depois quebra de um jeito não suportado e impossível de diagnosticar. Use uma máquina virtual QEMU.',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito: o que montar de fato?',
        content:
          '**Compre um mini PC Intel com 16 GB de RAM, rode o detector OpenVINO na iGPU dele, use câmeras PoE com substream de 720p a 5 fps e dedique a primeira semana às zonas em vez de a hardware.** Essa montagem atende uma casa comum e deixa espaço para acrescentar um Hailo-8 mais tarde, se o número de câmeras crescer.',
        items: [
          'Use **OpenVINO em uma iGPU Intel** se estiver começando do zero — o menor custo, sem hardware extra, e folga suficiente para 2 a 6 câmeras.',
          'Use **um módulo Hailo-8 M.2** se passar de oito câmeras ou se o consumo importar.',
          'Use **ONNX em uma GPU NVIDIA já existente** se a máquina tiver uma, principalmente se ela também rodar um LLM local.',
          'Use **um Coral** apenas quando os watts forem a restrição rígida e você aceitar que esse não é mais o caminho recomendado.',
          'Evite o detector **cpu**; o OpenVINO em modo CPU é a melhor alternativa de reserva.',
          'Na dúvida, comece com um mini PC Intel N150 e duas câmeras, acerte as zonas e depois escale.',
        ],
        callouts: [
          { type: 'practice', text: 'A ordem de gasto que realmente funciona: primeiro câmeras e switch PoE, depois o host, depois o armazenamento, e um acelerador só quando os números da página Sistema disserem que ele é necessário. Comprar o acelerador primeiro é a inversão clássica.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O que é o Frigate NVR?', a: 'O Frigate é um gravador de vídeo em rede de código aberto que executa detecção de objetos com IA localmente em streams de câmeras IP usando OpenCV e TensorFlow. Ele grava clipes com base no que foi detectado, e não em movimento bruto, e publica cada detecção via MQTT para que o Home Assistant possa automatizar em cima disso. O software principal não tem serviço de nuvem nem assinatura.' },
          { q: 'Ainda preciso de um TPU Google Coral para o Frigate em 2026?', a: 'Não. A documentação de hardware do Frigate afirma que o Coral já não é recomendado em instalações novas, exceto quando o consumo é uma restrição excepcionalmente rígida. Para uma montagem nova, os caminhos recomendados são o detector OpenVINO em uma iGPU Intel, um módulo Hailo-8 ou o detector ONNX em uma GPU NVIDIA já existente.' },
          { q: 'Qual versão do Frigate devo rodar?', a: 'O Frigate 0.17.2, lançado em 28 de junho de 2026, é a versão estável atual. A 0.18.0 está em beta desde julho de 2026 — a terceira beta saiu em 8 de agosto de 2026 —, então use a 0.18 apenas se você estiver confortável com mudanças de configuração entre versões menores.' },
          { q: 'Quanta RAM o Frigate precisa?', a: 'Detecção de objetos e gravação rodam com folga em 8 GB. A busca semântica eleva esse piso: o Frigate documenta 8 GB como mínimo, 16 GB ou mais com uma GPU dedicada como recomendação, e exige uma CPU compatível com as instruções AVX e AVX2.' },
          { q: 'Por que o Frigate fica alertando sobre pessoas que passam na frente da minha casa?', a: 'Porque essas são detecções corretas. Desenhe uma zona cobrindo apenas o chão dentro do seu terreno, defina review.alerts.required_zones para essa zona e acrescente loitering_time, para que quem passa precise parar antes de gerar um alerta. A presença é julgada pelo ponto central inferior da caixa delimitadora, então a zona precisa cobrir o plano do chão.' },
          { q: 'O Frigate funciona sem conexão com a internet?', a: 'Sim. Detecção, gravação, MQTT e automações do Home Assistant funcionam inteiramente na sua rede local. Só a visualização remota de fora de casa e provedores de GenAI na nuvem precisam de conectividade — e a 0.17 acrescentou uma integração com llama.cpp para gerar descrições também localmente.' },
          { q: 'Qual a diferença entre uma zona e uma máscara no Frigate?', a: 'Uma máscara de movimento impede que o Frigate execute qualquer detecção naquela região, o que serve para marcações de data e hora e folhagem em movimento constante. Uma zona deixa a detecção funcionar normalmente e apenas restringe, via required_zones, quais detecções podem gerar um alerta.' },
          { q: 'Quantas câmeras um servidor Frigate aguenta?', a: 'Depende do tempo de inferência mais do que do número de câmeras: as detecções úteis por segundo equivalem a cerca de 1000 dividido pelo tempo de inferência em milissegundos, compartilhadas entre as câmeras. A 5 fps de detecção por câmera e com um detector de 8 ms como uma Intel Arc A750 em YOLOv9-320, sobra bastante margem para uma instalação residencial típica.' },
          { q: 'Preciso do Frigate+ para reconhecimento facial ou de placas?', a: 'Não. Reconhecimento facial e de placas rodam localmente sem assinatura, embora os modelos do Frigate+ possam melhorar a eficiência. O Frigate+ custa US$ 50 por ano e inclui até 12 modelos ajustados, com ajustes adicionais a US$ 5 cada.' },
          { q: 'Posso rodar o Frigate em um contêiner LXC do Proxmox?', a: 'Não — LXC no Proxmox não é suportado explicitamente. Use uma máquina virtual QEMU. O repasse de uma iGPU, de um Coral ou de um módulo Hailo pode parecer funcionar em um LXC e depois falhar de um jeito impossível de suportar.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Entender por que câmeras com IA local superam as de nuvem em privacidade](/pt/smart-home/local-ai-security-camera) — o raciocínio antes dos detalhes de montagem',
          '[Comparar câmeras locais com suporte confirmado a RTSP e ONVIF](/pt/smart-home/best-local-security-cameras-2027) — quais câmeras alimentam o Frigate corretamente',
          '[Ver mini PCs que rodam Home Assistant e IA local na mesma máquina](/pt/smart-home/best-mini-pc-home-assistant-local-ai) — hosts dimensionados para uma montagem com Frigate',
          '[Conferir os requisitos de hardware de uma casa inteligente totalmente local](/pt/smart-home/best-hardware-for-local-smart-home) — aceleradores, armazenamento e rede',
          '[Aprender a começar com o Home Assistant](/pt/smart-home/home-assistant-getting-started) — o pré-requisito se você é iniciante',
          '[Explorar sensoriamento de presença por radar para cômodos sem câmera](/pt/smart-home/radar-presence-sensing-no-camera) — a alternativa sem câmera para ambientes internos',
          '[Ver como instalar o Ollama para um LLM local na mesma máquina](/pt/local-llms/how-to-install-ollama) — entre clusters: descrições GenAI locais para eventos do Frigate',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '**Hardware recomendado do Frigate** — [docs.frigate.video/frigate/hardware](https://docs.frigate.video/frigate/hardware) — tempos de inferência publicados por detector e a informação de que o Coral já não é recomendado em instalações novas.',
          '**Configuração de detectores de objetos do Frigate** — [docs.frigate.video/configuration/object_detectors](https://docs.frigate.video/configuration/object_detectors) — lista completa dos valores de `type` e a observação de que o detector CPU não é recomendado.',
          '**Configuração de câmeras do Frigate** — [docs.frigate.video/frigate/camera_setup](https://docs.frigate.video/frigate/camera_setup) — resoluções, taxas de quadros e intervalos de quadro I para detecção e gravação.',
          '**Configuração de zonas do Frigate** — [docs.frigate.video/configuration/zones](https://docs.frigate.video/configuration/zones) — required_zones, loitering_time, valor padrão de inertia e requisitos da estimativa de velocidade.',
          '**Busca semântica do Frigate** — [docs.frigate.video/configuration/semantic_search](https://docs.frigate.video/configuration/semantic_search) — requisitos de RAM e AVX2, comparação entre Jina CLIP V1 e V2 e comportamento da reindexação.',
          '**Integração do Frigate com o Home Assistant** — [docs.frigate.video/integrations/home-assistant](https://docs.frigate.video/integrations/home-assistant) — MQTT como pré-requisito e os tipos de entidade criados pela integração.',
          '**Versões do Frigate no GitHub** — [github.com/blakeblackshear/frigate/releases](https://github.com/blakeblackshear/frigate/releases) — números de versão e datas de lançamento das 0.17.x e das betas 0.18.0.',
          '**Frigate+** — [frigate.video/plus/](https://frigate.video/plus/) — preço da assinatura, ajustes incluídos e limitações de rótulos.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Configurar o Frigate NVR: detectores, zonas e Home Assistant (2026)',
      description: 'O Frigate 0.17.2 detecta com IA localmente, sem nuvem e sem assinatura. A documentação já não recomenda o Coral em instalações novas: qual detector usar.',
      url: 'https://www.promptquorum.com/pt/smart-home/frigate-nvr-home-assistant-setup',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      about: [
        { '@type': 'Thing', name: 'Frigate NVR' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Detecção de objetos' },
        { '@type': 'Thing', name: 'OpenVINO' },
        { '@type': 'Thing', name: 'Hailo-8' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Frigate' },
        { '@type': 'SoftwareApplication', name: 'Home Assistant' },
        { '@type': 'SoftwareApplication', name: 'go2rtc' },
      ],
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuários do Home Assistant que montam um sistema de câmeras com IA auto-hospedado' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/pt/smart-home/frigate-nvr-home-assistant-setup' },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Instalar o Frigate NVR e conectá-lo ao Home Assistant',
      inLanguage: 'pt-BR',
      totalTime: 'PT90M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Preparar o host', text: 'Instale o Docker em um host baseado em Debian e crie os diretórios /config e /media/frigate.' },
        { '@type': 'HowToStep', position: 2, name: 'Escrever uma configuração mínima', text: 'Crie um config.yml com uma única câmera e sem bloco de detector, para que o Frigate suba com os padrões e você confirme o stream.' },
        { '@type': 'HowToStep', position: 3, name: 'Subir o contêiner', text: 'Suba o Frigate com shm_size explícito e o dispositivo correto: /dev/dri para Intel, o runtime NVIDIA para NVIDIA ou /dev/hailo0 para Hailo.' },
        { '@type': 'HowToStep', position: 4, name: 'Conferir na interface web', text: 'Abra a interface web do Frigate e confira a imagem da câmera, os FPS de detecção e o tempo de inferência na página Sistema.' },
        { '@type': 'HowToStep', position: 5, name: 'Adicionar o detector real', text: 'Acrescente o bloco detectors do seu hardware, reinicie e confira se o tempo de inferência cai para o número publicado.' },
        { '@type': 'HowToStep', position: 6, name: 'Conectar o Home Assistant', text: 'Configure o broker MQTT no config.yml, adicione a integração MQTT no Home Assistant e depois instale a integração Frigate.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'O que é o Frigate NVR?', acceptedAnswer: { '@type': 'Answer', text: 'O Frigate é um gravador de vídeo em rede de código aberto que executa detecção de objetos com IA localmente em streams de câmeras IP usando OpenCV e TensorFlow. Ele grava clipes com base no que foi detectado e publica cada detecção via MQTT para que o Home Assistant possa automatizar em cima disso.' } },
        { '@type': 'Question', name: 'Ainda preciso de um TPU Google Coral para o Frigate em 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Não. A documentação de hardware do Frigate afirma que o Coral já não é recomendado em instalações novas, exceto quando o consumo é uma restrição excepcionalmente rígida. Os caminhos recomendados são OpenVINO em uma iGPU Intel, um módulo Hailo-8 ou ONNX em uma GPU NVIDIA já existente.' } },
        { '@type': 'Question', name: 'Qual versão do Frigate devo rodar?', acceptedAnswer: { '@type': 'Answer', text: 'O Frigate 0.17.2, lançado em 28 de junho de 2026, é a versão estável atual. A 0.18.0 está em beta desde julho de 2026, com a terceira beta em 8 de agosto de 2026.' } },
        { '@type': 'Question', name: 'Quanta RAM o Frigate precisa?', acceptedAnswer: { '@type': 'Answer', text: 'Detecção de objetos e gravação rodam com folga em 8 GB. Para a busca semântica, o Frigate documenta 8 GB como mínimo, 16 GB ou mais com uma GPU dedicada como recomendação, e exige uma CPU compatível com AVX e AVX2.' } },
        { '@type': 'Question', name: 'Por que o Frigate fica alertando sobre pessoas que passam na frente da minha casa?', acceptedAnswer: { '@type': 'Answer', text: 'Porque essas são detecções corretas. Desenhe uma zona cobrindo apenas o chão dentro do seu terreno, defina review.alerts.required_zones para essa zona e acrescente loitering_time. A presença é julgada pelo ponto central inferior da caixa delimitadora.' } },
        { '@type': 'Question', name: 'O Frigate funciona sem conexão com a internet?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Detecção, gravação, MQTT e automações do Home Assistant funcionam inteiramente na sua rede local. Só a visualização remota e provedores de GenAI na nuvem precisam de conectividade.' } },
        { '@type': 'Question', name: 'Qual a diferença entre uma zona e uma máscara no Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Uma máscara de movimento impede que o Frigate execute qualquer detecção naquela região. Uma zona deixa a detecção funcionar normalmente e apenas restringe, via required_zones, quais detecções podem gerar um alerta.' } },
        { '@type': 'Question', name: 'Quantas câmeras um servidor Frigate aguenta?', acceptedAnswer: { '@type': 'Answer', text: 'Depende do tempo de inferência mais do que do número de câmeras: as detecções úteis por segundo equivalem a cerca de 1000 dividido pelo tempo de inferência em milissegundos, compartilhadas entre as câmeras.' } },
        { '@type': 'Question', name: 'Preciso do Frigate+ para reconhecimento facial ou de placas?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Reconhecimento facial e de placas rodam localmente sem assinatura. O Frigate+ custa US$ 50 por ano e inclui até 12 modelos ajustados, com ajustes adicionais a US$ 5 cada.' } },
        { '@type': 'Question', name: 'Posso rodar o Frigate em um contêiner LXC do Proxmox?', acceptedAnswer: { '@type': 'Answer', text: 'Não, LXC no Proxmox não é suportado explicitamente. Use uma máquina virtual QEMU. O repasse de uma iGPU, de um Coral ou de um módulo Hailo pode parecer funcionar e depois falhar de um jeito impossível de suportar.' } },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    current_hardware_mentioned: ['Google Coral USB/M.2', 'Hailo-8 / Hailo-8L', 'Intel Arc A750', 'Intel UHD 730 iGPU', 'Intel NPU', 'NVIDIA RTX 3050 / RTX 3070', 'AMD Radeon 780M', 'Apple M3 Pro'],
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/frigate-nvr-home-assistant-setup-overview-hero-ar.webp',
    title: 'إعداد Frigate NVR: أجهزة الكشف والمناطق و Home Assistant (2026)',
    seoTitle: 'إعداد Frigate NVR 2026: الكاشف والمناطق والدمج',
    intro:
      'Frigate هو مسجّل فيديو شبكي مفتوح المصدر يشغّل الكشف عن الأجسام بالذكاء الاصطناعي على عتادك الخاص، ويسلّم كل عملية كشف إلى Home Assistant على هيئة كيان قابل للأتمتة. يغطي هذا الدليل اختيار الكاشف في عام 2026 — حيث لم يعد Google Coral هو الجواب الافتراضي — إضافة إلى إعدادات تدفق الكاميرات، وملف config.yml عملي، والمناطق التي تُنهي فعليًا التنبيهات الكاذبة، والدمج مع Home Assistant، وما استجدّ في الإصدارين 0.16 و 0.17.',
    metaDescription:
      'يشغّل Frigate 0.17.2 الكشف بالذكاء الاصطناعي محليًا بلا سحابة ولا اشتراك. التوثيق لم يعد ينصح بـ Coral للتركيبات الجديدة: إليك الكاشف البديل الصحيح.',
    twitterDescription:
      'دليل عملي لبناء Frigate NVR: اختيار الكاشف في 2026، وإعدادات تدفق الكاميرات، وملف config.yml عملي، وضبط المناطق، والدمج مع Home Assistant.',
    readTime: '16 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant الذين يبنون نظام كاميرات بالذكاء الاصطناعي مستضافًا ذاتيًا عبر Frigate',
    primaryTerm: 'إعداد Frigate NVR',
    targetKeywords: [
      'إعداد frigate nvr',
      'دمج frigate مع home assistant',
      'كاشف frigate coral أم openvino',
      'مثال config yml لـ frigate',
      'مناطق frigate التنبيهات الكاذبة',
    ],
    leadAnswerBlock:
      '**‏Frigate هو مسجّل NVR مفتوح المصدر يشغّل الكشف عن الأجسام بالذكاء الاصطناعي محليًا على تدفقات كاميراتك، ويعرض كل عملية كشف في Home Assistant على هيئة كيان.** اعتبارًا من Frigate 0.17.2، فإن نقطة البداية الموصى بها لأي تركيب جديد هي معالج رسوميات Intel المدمج (iGPU) مع كاشف OpenVINO، وليس Google Coral.',
    quickAnswerTop: {
      ar: {
        question: 'كيف تُعِدّ Frigate NVR مع Home Assistant؟',
        answer:
          'شغّل Frigate داخل Docker بملف config.yml يوجّه الكشف إلى التدفق الفرعي منخفض الدقة لكل كاميرا، ويوجّه التسجيل إلى التدفق الرئيسي. اختر كاشفًا يدعمه عتادك (OpenVINO على iGPU من Intel، أو ONNX على بطاقة NVIDIA، أو وحدة Hailo-8)، ثم ثبّت تكامل Frigate في Home Assistant. يشترط Home Assistant إعداد تكامل MQTT مسبقًا، وهذه هي الخطوة التي تُغفَل في معظم عمليات الإعداد الأولى.',
        bullets: [
          'الإصدار المستقر الحالي هو Frigate 0.17.2 (28 يونيو 2026)',
          'الكشف على 1280x720 بمعدل 5 fps، والتسجيل من التدفق الرئيسي بمعدل 15 fps',
          'لم يعد Frigate ينصح باستخدام Google Coral في التركيبات الجديدة',
          'بطاقة Intel Arc A750 تنجز YOLOv9-320 في نحو 8 ms، و Intel UHD 730 iGPU في نحو 14 ms',
          'تكامل Home Assistant يشترط تكامل MQTT أولًا',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'ما الذي يفعله Frigate', anchor: 'what-frigate-is' },
      { label: 'أي كاشف تشتري', anchor: 'detector' },
      { label: 'عتاد الخادم والذاكرة', anchor: 'server-hardware' },
      { label: 'إعدادات تدفق الكاميرات', anchor: 'cameras' },
      { label: 'تثبيت Frigate', anchor: 'install' },
      { label: 'ملف config.yml عملي', anchor: 'config' },
      { label: 'المناطق والأقنعة والتنبيهات الكاذبة', anchor: 'zones' },
      { label: 'الدمج مع Home Assistant', anchor: 'home-assistant' },
      { label: 'البحث والوجوه واللوحات', anchor: 'ai-features' },
      { label: 'هل يستحق Frigate+ التكلفة؟', anchor: 'frigate-plus' },
      { label: 'التكلفة مقابل كاميرات الاشتراك', anchor: 'cost' },
      { label: 'الأخطاء الشائعة', anchor: 'mistakes' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '‏Frigate هو مسجّل NVR مفتوح المصدر يشغّل الكشف عن الأجسام بالذكاء الاصطناعي محليًا على تدفقات RTSP، وينشر كل عملية كشف إلى Home Assistant عبر MQTT، من دون خدمة سحابية ومن دون اشتراك.' },
      { type: 'plain-terms', content: 'الكاميرا الذكية المعتادة ترسل الفيديو إلى شركة تقرّر بدلًا عنك ما إذا كان هناك شخص في المشهد، وتتقاضى مقابل ذلك رسمًا شهريًا. يؤدي Frigate هذه الخطوة على جهاز داخل منزلك: الفيديو لا يغادر المنزل، ولا توجد رسوم شهرية، وكل عملية كشف تتحول إلى حدث يستطيع Home Assistant التصرف بناءً عليه.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        content:
          'توثيق Frigate نفسه لم يعد ينصح بشريحة Google Coral TPU في التركيبات الجديدة — وهي تحديدًا المسرّع الذي ما زالت معظم الأدلة تنصح بشرائه أولًا.',
        items: [
          'الإصدار المستقر الحالي هو Frigate 0.17.2 (28 يونيو 2026)، بينما 0.18.0 في مرحلة بيتا منذ 8 أغسطس 2026',
          'ابدأ بالكاشف: iGPU من Intel مع كاشف OpenVINO هو أرخص بداية جدّية، بينما تتوسع Hailo-8 أو بطاقة NVIDIA إلى ما هو أبعد',
          'أصبح Coral خيارًا احتياطيًا لا افتراضيًا — ولا يُنصح به إلا حين يكون استهلاك الطاقة هو القيد الحاسم',
          'تدفقان لكل كاميرا: 1280x720 بمعدل 5 fps للكشف، والتدفق الرئيسي بالدقة الكاملة بمعدل 15 fps للتسجيل',
          'ما يُنهي التنبيهات الكاذبة فعليًا هو المناطق مع required_zones و loitering_time و inertia، لا نموذج أفضل',
          'يشترط تكامل Home Assistant وجود تكامل MQTT مُعدًّا مسبقًا، وإلا فلن تظهر أي كيانات',
          'يحتاج البحث الدلالي إلى 8 GB من الذاكرة كحد أدنى، و 16 GB مع بطاقة رسوميات ليكون مريحًا، ومعالج يدعم AVX2',
          'يكلّف Frigate+ مبلغ 50 دولارًا سنويًا (الفوترة بالدولار الأمريكي) مقابل ما يصل إلى 12 نموذجًا مضبوطًا؛ ويعمل التعرف على الوجوه واللوحات دون اشتراك',
        ],
      },
      whatFrigateIs: {
        id: 'what-frigate-is',
        title: 'ما الذي يقدّمه Frigate ولا يقدّمه مسجّل NVR عادي؟',
        content:
          '**يعمل Frigate على مرحلتين: كشف حركة منخفض التكلفة يحدّد المناطق الجديرة بالفحص، ثم نموذج حقيقي للكشف عن الأجسام يقرّر ما إذا كانت تحوي شخصًا أو سيارة أو كلبًا أو طردًا.** أما مسجّل NVR التقليدي فيُطلق عند تغيّر البكسلات، ولهذا ينبّهك عند أضواء السيارات والمطر واهتزاز الشجيرات.',
        items: [
          '**الحركة أولًا ثم الذكاء الاصطناعي:** كشف الحركة الخفيف يحدّد *أين* يعمل الكاشف، فيغطي مسرّع صغير عددًا كبيرًا من الكاميرات.',
          '**تسجيل على مستوى الجسم:** يعتمد الاحتفاظ على ما تم كشفه لا على مخزن مستمر على مدار الساعة، فتمتد سعة التخزين أبعد بكثير.',
          '**إعادة البث عبر go2rtc:** يسحب Frigate كل كاميرا مرة واحدة ويعيد بثها، بدلًا من أن يضغط خمسة عملاء على الكاميرا مباشرة.',
          '**مخرجات MQTT:** يُنشر كل جسم متتبَّع وكل دخول إلى منطقة وكل عدّاد للأجسام، وهذا ما يجعل أتمتة Home Assistant ممكنة.',
          '**عناصر المراجعة:** تُفصل عمليات الكشف إلى *alerts* (ما تريد أن تُبلَّغ به) و *detections* (يُسجَّل بصمت).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يستخدم Frigate كشف حركة منخفض التكلفة لاختيار مناطق من الإطار، ثم يشغّل نموذج الكشف عن الأجسام على تلك المناطق فقط، ولهذا يخدم مسرّع صغير واحد كاميرات كثيرة في الوقت نفسه.' },
        ],
        callouts: [
          { type: 'note', text: 'التمييز بين alerts و detections هو أنفع مفهوم في Frigate. التنبيهات هي ما يوقظ هاتفك، وعمليات الكشف هي السجل القابل للبحث. اضبط كلًّا منهما على حدة.' },
        ],
      },
      detector: {
        id: 'detector',
        title: 'أي كاشف ينبغي شراؤه لـ Frigate في 2026؟',
        content:
          '**اشترِ جهازًا بمعالج Intel يحوي iGPU واستخدم كاشف OpenVINO إن كنت تبدأ من الصفر؛ واشترِ وحدة Hailo-8 إن كنت تريد أدنى زمن استجابة لكل واط؛ واستخدم كاشف ONNX إن كان الجهاز يحوي بطاقة NVIDIA أصلًا.** ينصّ توثيق Frigate على أن Coral لم يعد موصى به في التركيبات الجديدة، إلا حين يكون قيد الطاقة صارمًا بصورة غير معتادة.',
        items: [
          'استخدم **OpenVINO** إذا كان الجهاز يحوي معالج Intel من الجيل السادس أو أحدث — فالـ iGPU مدفوع ثمنه سلفًا ولا يحتاج عتادًا إضافيًا.',
          'استخدم **ONNX** إذا كان الجهاز يحوي بطاقة NVIDIA أو AMD؛ إذ يكتشف Frigate المنصة تلقائيًا.',
          'استخدم **Hailo-8 / Hailo-8L** إذا أردت زمن استجابة بمستوى المسرّعات داخل منفذ M.2 وباستهلاك منخفض.',
          'استخدم **TensorRT** تحديدًا على لوحات NVIDIA Jetson — راجع [مراجعة NVIDIA Jetson Orin Nano للذكاء الاصطناعي في المنزل الذكي](/ar/smart-home/nvidia-jetson-orin-nano-smart-home-review).',
          'استخدم **edgetpu** (أي Coral) فقط حين يكون استهلاك الواط هو القيد الحاسم وتقبل بمجموعة نماذج تتقادم.',
          'تجنّب كاشف **cpu** تمامًا — فبحسب Frigate، يعمل OpenVINO في وضع المعالج بكفاءة أعلى من كاشف المعالج المخصص.',
        ],
        columns: ['الكاشف', 'العتاد', 'زمن الاستدلال (منشور)'],
        rows: [
          { 'الكاشف': 'openvino', 'العتاد': 'Intel Arc A750', 'زمن الاستدلال (منشور)': 'نحو 4 ms لـ MobileNetV2 / 8 ms لـ YOLOv9-320' },
          { 'الكاشف': 'openvino', 'العتاد': 'Intel NPU', 'زمن الاستدلال (منشور)': 'نحو 6 ms لـ MobileNetV2 / 11 ms لـ YOLOv9-320' },
          { 'الكاشف': 'openvino', 'العتاد': 'Intel UHD 730 iGPU', 'زمن الاستدلال (منشور)': 'نحو 10 ms لـ MobileNetV2 / 14 ms لـ YOLOv9-tiny' },
          { 'الكاشف': 'hailo8l', 'العتاد': 'Hailo-8', 'زمن الاستدلال (منشور)': 'نحو 6 ms لـ SSD MobileNet / 7 ms لـ YOLOv6n' },
          { 'الكاشف': 'hailo8l', 'العتاد': 'Hailo-8L', 'زمن الاستدلال (منشور)': 'نحو 10 ms لـ SSD MobileNet / 11 ms لـ YOLOv6n' },
          { 'الكاشف': 'onnx', 'العتاد': 'NVIDIA RTX 3070', 'زمن الاستدلال (منشور)': 'نحو 6–8 ms لـ YOLOv9 tiny→small 320' },
          { 'الكاشف': 'onnx', 'العتاد': 'NVIDIA RTX 3050', 'زمن الاستدلال (منشور)': 'نحو 8–10 ms لـ YOLOv9 tiny→small 320' },
          { 'الكاشف': 'onnx', 'العتاد': 'AMD Radeon 780M', 'زمن الاستدلال (منشور)': 'نحو 14 ms لـ YOLOv9-tiny-320' },
          { 'الكاشف': 'zmq', 'العتاد': 'Apple M3 Pro', 'زمن الاستدلال (منشور)': 'نحو 6 ms لـ YOLOv9-tiny-320' },
        ],
        note: 'هذه الأرقام هي ما ينشره Frigate لكل كاشف، وليست قياسات أجرتها PromptQuorum. يوفّر Frigate كذلك أنواع الكواشف rknn (وحدات NPU من Rockchip) و memryx و synaptics و deepstack و degirum.',
        callouts: [
          { type: 'warning', text: 'ما زالت معظم أدلة Frigate تبدأ بعبارة «اشترِ وحدة Coral». هذه النصيحة تسبق العمل على OpenVINO و Hailo و ONNX في الإصدارين 0.16 و 0.17، وصفحة العتاد في Frigate نفسها باتت تناقضها صراحةً بالنسبة للتركيبات الجديدة.' },
          { type: 'tip', text: 'تُقدَّر سعة Coral من حيث عدد الكاميرات بنحو 1000 / inference_speed إطارًا في الثانية، موزعة على جميع الكاميرات. عند كشف بمعدل 5 fps، تغطي ميزانية 10 ms نحو 20 تدفقًا نظريًا، لكن خفض التردد الحراري وحدود طاقة USB يقلّصان هذا الرقم.' },
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: 'الكاشف هو الشريحة التي تجيب عن سؤال «هل هذا شخص؟». يمكنك استخدام وحدة الرسوميات المدمجة داخل معالج Intel، أو بطاقة NVIDIA مستقلة، أو وحدة ذكاء اصطناعي صغيرة بصيغة M.2. أما ذاكرة USB التي ينصح بها الجميع (Google Coral) فما زالت تعمل، لكنها لم تعد نقطة البداية الموصى بها.' },
        ],
      },
      serverHardware: {
        id: 'server-hardware',
        title: 'ما الذي يحتاجه خادم Frigate نفسه؟',
        content:
          '**جهاز Mini PC صغير بمعالج Intel من سلسلة N أو Core i، مع 8–16 GB من الذاكرة، وقرص SSD لنظام التشغيل، وقرص صلب منفصل للتسجيلات، يغطي منزلًا نموذجيًا بأربع إلى ثماني كاميرات.** نادرًا ما يكون المعالج هو عنق الزجاجة؛ القيود الحقيقية هي الذاكرة المشتركة، وتحمّل القرص للكتابة، وما إذا كنت تريد البحث الدلالي أيضًا.',
        items: [
          '**الذاكرة المشتركة (`shm`):** القيمة الافتراضية 128 MB تكفي لكاميرتين تقريبًا بدقة 720p. يقدّر Frigate نحو 66.63 MB لكل كاميرا بدقة 1280x720 مع السجلات، أي نحو 253 MB لثماني كاميرات.',
          '**اضبط `--shm-size` صراحةً:** القيمة `--shm-size=512mb` آمنة لمعظم التركيبات؛ والقيمة الصغيرة جدًا لا تظهر كخطأ واضح بل ككاميرات تسقط من الخدمة.',
          '**ثلاث نقاط تحميل:** المسار `/config` لملف YAML وقاعدة البيانات، و `/media/frigate` للمقاطع والتسجيلات والتصديرات، و `/tmp/cache` للمقاطع قيد المعالجة.',
          '**التسجيلات على قرص صلب:** الكتابة المستمرة تستهلك عمر أقراص SSD الاستهلاكية. ضع `/media/frigate` على قرص صلب وأبقِ `/tmp/cache` على تخزين سريع.',
          '**الذاكرة لميزات الذكاء الاصطناعي:** يحتاج البحث الدلالي إلى 8 GB كحد أدنى ومعالج يدعم AVX و AVX2؛ والموصى به 16 GB مع بطاقة رسوميات.',
        ],
        columns: ['التكوين', 'الكاشف', 'مناسب لـ'],
        rows: [
          { 'التكوين': 'Mini PC بمعالج Intel N100/N150، 16 GB', 'الكاشف': 'openvino (iGPU)', 'مناسب لـ': 'من 2 إلى 6 كاميرات، دون بحث دلالي' },
          { 'التكوين': 'Mini PC بمعالج Intel Core i5، 32 GB', 'الكاشف': 'openvino (iGPU)', 'مناسب لـ': 'من 6 إلى 12 كاميرا مع البحث الدلالي' },
          { 'التكوين': 'أي جهاز مضيف مع Hailo-8 M.2', 'الكاشف': 'hailo8l', 'مناسب لـ': 'استهلاك منخفض وعدد كبير من الكاميرات' },
          { 'التكوين': 'حاسب مكتبي ببطاقة RTX 3050 فأعلى', 'الكاشف': 'onnx', 'مناسب لـ': 'تشغيل Frigate ونموذج LLM محلي على جهاز واحد' },
          { 'التكوين': 'Raspberry Pi 5', 'الكاشف': 'edgetpu / hailo8l', 'مناسب لـ': 'من 1 إلى 3 كاميرات، بميزانية طاقة ضيقة' },
        ],
        note: 'يدعم Frigate تشغيل Docker على نظام Debian مباشرةً، وإضافة Home Assistant، و Kubernetes عبر Helm، و Unraid، وأجهزة NAS من Synology و QNAP، و ESXi، و macOS على Apple Silicon. أما على Proxmox فاستخدم جهازًا افتراضيًا بنمط QEMU؛ إذ إن LXC غير مدعوم صراحةً.',
        callouts: [
          { type: 'warning', text: 'تشغيل Frigate داخل حاوية LXC على Proxmox غير مدعوم. تمرير وحدة Coral أو iGPU يبدو ناجحًا في البداية ثم يتعطل بطريقة لا يستطيع أحد تشخيصها نيابةً عنك. استخدم جهازًا افتراضيًا.' },
          { type: 'practice', text: 'إن أردت جهازًا واحدًا يجمع Frigate و Home Assistant ونموذج LLM محلي، فحدّد المواصفات انطلاقًا من متطلبات النموذج أولًا — راجع [ترشيحات أجهزة Mini PC لـ Home Assistant والذكاء الاصطناعي المحلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai).' },
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'كيف ينبغي ضبط الكاميرات من أجل Frigate؟',
        content:
          '**اضبط تدفقين داخل برنامج الكاميرا نفسه: تدفق فرعي بدقة 1280x720 ومعدل 5 fps للكشف، والتدفق الرئيسي بالدقة الأصلية ومعدل 15 fps للتسجيل، وكلاهما بترميز H.264 وبنسبة أبعاد متطابقة.** يعمل نموذج الكشف في Frigate على مدخل بحجم 320x320، لذا فإن تدفق كشف بدقة 4K لا يضيف شيئًا ويكلّف الكثير من قدرة فك الترميز.',
        numberedItems: [
          'داخل برنامج الكاميرا، اضبط التدفق الفرعي على 1280x720 و 5 fps وترميز H.264، مع فاصل إطار مفتاحي قدره 5 (إطار مفتاحي كل ثانية).',
          'اضبط التدفق الرئيسي على الدقة الأصلية للكاميرا — أي 2688x1520 في مستشعر 4 ميجابكسل شائع — بمعدل 15 fps وترميز H.264 وفاصل إطار مفتاحي قدره 30.',
          'أبقِ نسبة الأبعاد نفسها في التدفقين (16:9 مع 16:9) حتى تتطابق مربعات الإحاطة بين الكشف والتسجيل.',
          'أسنِد الدور `detect` إلى التدفق الفرعي والدور `record` إلى التدفق الرئيسي.',
          'لا ترفع الكشف إلى 10 fps إلا مع أجسام سريعة فعلًا، مثل سيارة تعبر مشهدًا ضيقًا للمدخل.',
        ],
        items: [
          'استخدم H.264 لا H.265 — فدعم المتصفحات لـ H.265 محدود، والعرض المباشر هو أول ما يتأثر.',
          'غيّر معدل الإطارات داخل الكاميرا لا داخل Frigate: فتقليل المعدل برمجيًا يستهلك المعالج بلا فائدة.',
          'فضّل PoE السلكي على الاتصال اللاسلكي؛ فانقطاع التدفق الفرعي يظهر على شكل كشف ضائع لا على شكل عطل واضح.',
          'للاطلاع على كاميرات تتيح RTSP و ONVIF على نحو سليم، راجع [دليل شراء كاميرات المراقبة المحلية لتركيبات Frigate](/ar/smart-home/best-local-security-cameras-2027).',
        ],
        callouts: [
          { type: 'tip', text: 'إذا كانت الأجسام في نهاية الممر لا تُكتشف أبدًا، فالسبب عادةً هو الدقة لا النموذج: عند تصغير 1280x720 إلى مدخل 320x320، لا يبقى من الشخص البعيد سوى بضع بكسلات. قسّم هذا المشهد على كاميرا ثانية أو تدفق مقرَّب بدل رفع دقة الكشف بصورة عامة.' },
          { type: 'note', text: 'يسحب Frigate كل كاميرا مرة واحدة ويخدم بقية العملاء من تلك النسخة، ولهذا وجّه Home Assistant إلى Frigate لا إلى الكاميرا مباشرةً.' },
        ],
      },
      install: {
        id: 'install',
        title: 'كيف تثبّت Frigate؟',
        content:
          '**استخدم Docker Compose على مضيف Debian مباشر إن أردت المسار المدعوم؛ واستخدم إضافة Home Assistant إن قبلت بتحكم أقل مقابل تثبيت بنقرة واحدة.** وكلاهما يحتاج إلى ملف config.yml نفسه ووسيط MQTT نفسه.',
        numberedItems: [
          'ثبّت Docker على مضيف مبني على Debian، ثم أنشئ مجلدَي `/config` و `/media/frigate`.',
          'اكتب ملف `config.yml` مبسّطًا بكاميرا واحدة ومن دون كتلة كواشف، ليبدأ Frigate بالقيم الافتراضية وتتأكد من وصول التدفق.',
          'شغّل الحاوية بقيمة `shm_size` صريحة ومع تمرير الجهاز المناسب: `/dev/dri` لمعالجات Intel، أو بيئة تشغيل GPU لبطاقات NVIDIA، أو `/dev/hailo0` لوحدات Hailo.',
          'افتح واجهة الويب وتحقق من صورة الكاميرا ومعدل إطارات الكشف وزمن الاستدلال المعروض في صفحة النظام.',
          'أضف كتلة `detectors` الفعلية، ثم أعد التشغيل وتحقق من هبوط زمن الاستدلال إلى الرقم المنشور لعتادك.',
          'اضبط وسيط MQTT في `config.yml`، ثم أضف تكامل Frigate داخل Home Assistant.',
        ],
        codeBlock: `services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:0.17.2
    restart: unless-stopped
    privileged: true
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128   # Intel iGPU (OpenVINO)
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config:/config
      - /srv/frigate/media:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "8971:8971"   # authenticated web UI
      - "8554:8554"   # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'warning', text: 'ثبّت وسم الصورة على إصدار محدد بدلًا من `stable`. فمخططات إعداد Frigate تتغير بين الإصدارات الفرعية، وتنفيذ `docker compose pull` بلا إشراف عند الانتقال من 0.17 إلى 0.18 قد يترك لك حاوية ترفض العمل بملف YAML الحالي.' },
          { type: 'practice', text: 'شغّل كاميرا واحدة قبل إضافة البقية. فمعظم النقاشات من نوع «Frigate لا يعمل» تنتهي عند رابط التدفق الفرعي لكاميرا بعينها، وهو أمر أسهل بكثير في الكشف حين لا يوجد سوى مدخل واحد في ملف الإعداد.' },
        ],
      },
      config: {
        id: 'config',
        title: 'كيف يبدو ملف config.yml عملي في Frigate؟',
        content:
          '**يتألف الإعداد العملي من أربع كتل: `mqtt` و `detectors` و `cameras` بدورَي تدفق، ثم مرشحات `zones` و `review` لكل كاميرا.** أما البقية فلها قيم افتراضية تكفي في اليوم الأول.',
        codeBlock: `mqtt:
  host: 192.168.1.10
  user: frigate
  password: "{FRIGATE_MQTT_PASSWORD}"

detectors:
  ov:
    type: openvino
    device: GPU

cameras:
  driveway:
    ffmpeg:
      inputs:
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=1
          roles: [detect]
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=0
          roles: [record]
    detect:
      width: 1280
      height: 720
      fps: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: motion
      alerts:
        retain:
          days: 30
    snapshots:
      enabled: true
    motion:
      mask:
        - 0,0,0.35,0,0.35,0.12,0,0.12   # timestamp overlay
    zones:
      driveway_apron:
        coordinates: 0.14,0.98,0.62,0.55,0.95,0.72,0.88,1.0
        loitering_time: 4
        inertia: 3
    review:
      alerts:
        labels: [person, car]
        required_zones: [driveway_apron]
      detections:
        labels: [person, car, dog, cat]`,
        codeLanguage: 'yaml',
        items: [
          'القيمتان `subtype=1` و `subtype=0` هما عرف Dahua و Amcrest للتدفق الفرعي والرئيسي؛ بينما تستخدم Reolink الصيغتين `h264Preview_01_sub` و `h264Preview_01_main`.',
          'يحتفظ `retain.mode: motion` بالتسجيل المستمر حيث وقعت حركة فقط، وهو أكبر عامل لتوفير مساحة التخزين.',
          'يمنع `review.alerts.required_zones` أن توقظ سيارة عابرة في الطريق العام هاتفك.',
          'أضاف الإصدار 0.17 إعدادًا كاملًا عبر الواجهة، فصار معظم ما سبق قابلًا للتحرير من المتصفح بدل الكتابة اليدوية.',
        ],
        callouts: [
          { type: 'tip', text: 'أضاف الإصدار 0.17 أيضًا ملفات التعريف (Profiles) — وهي تجاوزات إعداد مسمّاة يمكن التبديل بينها دون إعادة تشغيل الحاوية. إنشاء ملف تعريف باسم «ضيوف في المنزل» يوسّع required_zones أفضل من تحرير YAML مرتين أسبوعيًا.' },
        ],
      },
      zones: {
        id: 'zones',
        title: 'كيف تُنهي المناطق والأقنعة التنبيهات الكاذبة؟',
        content:
          '**تُرشّح المناطق ما يهمّك من عمليات الكشف، بينما تمنع أقنعة الحركة Frigate من النظر إلى منطقة أصلًا. استخدم منطقة حين يكون الجسم حقيقيًا لكنه غير مهم، واستخدم قناعًا حين لا تكون الحركة جسمًا أساسًا.** يُقاس الوجود داخل المنطقة عند النقطة الوسطى السفلية لمربع الإحاطة، لذا يجب أن تغطي المنطقة الأرض حيث تقف الأقدام أو العجلات، لا ارتفاع الرؤوس.',
        items: [
          '**قناع الحركة:** لتغطية طوابع الوقت المطبوعة، أو شجرة مضطربة، أو راية. لا يشغّل Frigate الكشف هناك إطلاقًا. استخدمه مع حركة لن تكون أبدًا جسمًا يهمّك.',
          '**قناع تصفية الأجسام:** يكبح تسمية بعينها في منطقة بعينها — مثل سيارة الجار المتوقفة التي تُكتشف دائمًا بوصفها `car`.',
          '**منطقة مع `required_zones`:** الجسم شخص فعلًا، لكن شخصًا على الرصيف ليس تنبيهًا. هذا هو العلاج الصحيح لحركة المارة.',
          '**‏`loitering_time`:** يشترط بقاء الجسم داخل المنطقة N ثانية — فعامل التوصيل الصاعد في الممر يستوفي الشرط، والمارّ العابر لا يستوفيه.',
          '**‏`inertia`:** يشترط بقاء الجسم داخل المنطقة N إطارًا متتاليًا (القيمة الافتراضية 3) حتى لا يُطلق ارتجاف مربع الإحاطة عند الحدّ تنبيهًا.',
          '**تقدير السرعة:** منطقة بأربع نقاط بالضبط محاذية للأرض مع قائمة `distances` تُنتج قيمة سرعة في الواجهة وعبر MQTT.',
        ],
        promptExamples: [
          { label: '❌ نهج خاطئ', text: 'تنبيهات عن كل شخص، على كل كاميرا، طوال اليوم — ثم إسكات الإشعارات بعد يومين لأن الرصيف المقابل يولّد أربعين تنبيهًا كل ليلة.' },
          { label: '✅ نهج صحيح', text: 'منطقة باسم driveway_apron تغطي الأرض داخل حدود الملكية فقط، مع ضبط review.alerts.required_zones على تلك المنطقة، و loitering_time: 4، مع إبقاء detections (بلا إشعار) مفعّلة لكل ما عداها كي يبقى السجل القابل للبحث كاملًا.' },
        ],
        callouts: [
          { type: 'warning', text: 'رسم منطقة في النصف العلوي من الإطار لا يفيد شيئًا. فالوجود يُقاس عند النقطة الوسطى السفلية لمربع الإحاطة — ارسم المناطق على مستوى الأرض.' },
          { type: 'insight', text: 'التنبيهات الكاذبة لا تكاد تكون يومًا مشكلة في جودة النموذج. في تركيب سكني نموذجي، تزيل المناطق و required_zones ضجيجًا أكثر مما يزيله أي ترقية للكاشف.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'في Frigate، يوقف قناع الحركة تشغيل الكشف في تلك المنطقة تمامًا، بينما تترك المنطقة مع required_zones الكشف يعمل بصورة طبيعية وتكتفي بتقييد أي عمليات كشف يُسمح لها بإطلاق تنبيه.' },
        ],
      },
      homeAssistant: {
        id: 'home-assistant',
        title: 'كيف تربط Frigate بـ Home Assistant؟',
        content:
          '**اضبط تكامل MQTT في Home Assistant أولًا، ووجّه Frigate إلى الوسيط نفسه، ثم ثبّت تكامل Frigate — فهو ينشئ كيانات من نوع camera و image و sensor و switch و binary_sensor لكل كاميرا ولكل منطقة.** ومن دون إعداد MQTT مسبقًا، سيُثبَّت التكامل ولن يُنتج شيئًا.',
        numberedItems: [
          'ثبّت وسيط MQTT (وإضافة Mosquitto هي الخيار المعتاد) وأضف تكامل MQTT في Home Assistant.',
          'وجّه كتلة `mqtt` في ملف config.yml الخاص بـ Frigate إلى الوسيط نفسه، باسم مستخدم وكلمة مرور مستقلين.',
          'ثبّت تكامل Frigate عبر HACS أو بوصفه تكاملًا أساسيًا، ووجّهه إلى مضيف Frigate.',
          'فعّل تكامل Media Source لتظهر التسجيلات واللقطات في متصفح الوسائط.',
          'ابنِ الأتمتة على المستشعرات الثنائية الخاصة بالمناطق لا على تلك الخاصة بالكاميرات.',
        ],
        itemHeadings: true,
        columns: ['نوع الكيان', 'ما الذي تحصل عليه', 'فيمَ تستخدمه'],
        rows: [
          { 'نوع الكيان': 'binary_sensor', 'ما الذي تحصل عليه': 'الحركة ووجود الأجسام لكل كاميرا ولكل منطقة ولكل تسمية جسم', 'فيمَ تستخدمه': 'محفّز كل أتمتة تقريبًا — فوجود شخص في منطقة محددة محفّز أفضل بكثير من حركة على كاميرا' },
          { 'نوع الكيان': 'camera', 'ما الذي تحصل عليه': 'كيان بث مباشر يُقدَّم من إعادة بث Frigate على المنفذ 8554', 'فيمَ تستخدمه': 'بطاقات لوحة التحكم والبث؛ وتوجيه Home Assistant إلى هنا بدل الكاميرا يتجنب اتصالًا ثانيًا بالكاميرا' },
          { 'نوع الكيان': 'image', 'ما الذي تحصل عليه': 'أحدث لقطة لآخر جسم مكتشف في كل كاميرا', 'فيمَ تستخدمه': 'إرفاق صورة بإشعار الهاتف من دون استدعاء واجهة اللقطات يدويًا' },
          { 'نوع الكيان': 'sensor', 'ما الذي تحصل عليه': 'أعداد الأجسام لكل منطقة ولكل كاميرا، إضافةً إلى أرقام أداء الكاشف والعمليات', 'فيمَ تستخدمه': 'منطق الإشغال ولوحة سلامة النظام — وزمن الاستدلال هنا هو إنذارك المبكر بأن الكاشف عاد إلى المعالج' },
          { 'نوع الكيان': 'switch', 'ما الذي تحصل عليه': 'مفاتيح للكشف والتسجيل واللقطات لكل كاميرا', 'فيمَ تستخدمه': 'أتمتة الخصوصية، مثل تعطيل الكشف الداخلي متى دلّ التواجد على أن أحدًا في المنزل' },
        ],
        note: 'يوفّر التكامل أيضًا الإجراءين camera.turn_on و camera.turn_off، ويدعم عدة خوادم Frigate بإعدادات MQTT منفصلة، ويتيح تجاوز قالب رابط RTSP عبر Jinja2.',
        callouts: [
          { type: 'warning', text: 'إذا تم تثبيت تكامل Frigate ولم تظهر أي كيانات، فالسبب دائمًا تقريبًا هو MQTT: إما أن التكامل لم يُضَف أصلًا في Home Assistant، أو أن Frigate و Home Assistant يتصلان بوسيطين مختلفين.' },
          { type: 'practice', text: 'أطلق الأتمتة من المستشعر الثنائي للمنطقة مع شرط على تسمية الجسم. فمستشعر حركة الكاميرا وحده سيُطلق مع المطر، أما `binary_sensor.driveway_driveway_apron_person` فلن يفعل.' },
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'ماذا يضيف البحث الدلالي والتعرف على الوجوه واللوحات؟',
        content:
          '**يتيح لك البحث الدلالي كتابة «شاحنة صغيرة سوداء في الممر ليلًا» فتحصل على المقاطع المطابقة؛ أما التعرف على الوجوه واللوحات فيحوّل عمليات الكشف المجهولة إلى عمليات كشف مسمّاة — وكلاهما يعمل من دون اشتراك Frigate+.** تكلفة هذه الميزات ذاكرة لا مال.',
        items: [
          '**البحث الدلالي:** يحتاج إلى 8 GB من الذاكرة كحد أدنى، ومعالج يدعم AVX و AVX2، والأمثل 16 GB مع بطاقة رسوميات مخصصة. ولن يعمل بصورة مفيدة على Raspberry Pi.',
          '**نموذج التضمين:** النموذج الافتراضي هو Jina CLIP V1؛ والنسخة `small` مُكمَّمة وتعمل بصورة مقبولة على المعالج، بينما تستخدم النسخة `large` بطاقة الرسوميات عند توفرها.',
          '**‏Jina CLIP V2** يدعم 89 لغة بدل الإنجليزية وحدها، لكن Frigate يوثّقه بتحسّن نحو 3% مقابل ذاكرة وزمن استدلال أعلى بكثير، ولا ينصح بتشغيله على المعالج.',
          '**إعادة الفهرسة يدوية:** تفعيل البحث الدلالي لا يفهرس الأجسام القديمة. استخدم زر «Reindex» في الواجهة أو اضبط `reindex: True`، وتوقّع حملًا مرتفعًا على المعالج أثناء التنفيذ.',
          '**التعرف على الوجوه واللوحات** يعملان محليًا ولا يحتاجان اشتراكًا، وإن كانت نماذج Frigate+ ترفع الكفاءة.',
          '**أوصاف GenAI:** أضاف الإصدار 0.17 دعم عدة مزوّدين وتكاملًا مخصصًا مع llama.cpp، فصار بالإمكان توليد الأوصاف من نموذج على عتادك — راجع [أتمتة Home Assistant بنموذج LLM محلي](/ar/smart-home/ai-automations-local-llm).',
        ],
        callouts: [
          { type: 'tip', text: 'فعّل البحث الدلالي قبل أن تتراكم لديك مقاطع سنة كاملة. فإعادة فهرسة 200,000 جسم متتبَّع على جهاز Mini PC بلا بطاقة رسوميات مهمة تستغرق ليلة كاملة.' },
          { type: 'note', text: 'أضاف الإصدار 0.16 محفّزات البحث الدلالي — إذ يُطلق إجراء ما حين يطابق جسم متتبَّع صورة أو وصفًا محفوظًا. وهذا هو الجسر بين «البحث في تسجيلاتي» و«الأتمتة بناءً على معناها».' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'هل يستحق Frigate+ خمسين دولارًا سنويًا؟',
        content:
          '**يستحق Frigate+ التكلفة متى واجهت نتيجة إيجابية خاطئة محددة ومتكررة لا يعالجها النموذج القياسي؛ وإلا فالنماذج المجانية مع مناطق مضبوطة كافية.** يكلّف الاشتراك 50 دولارًا سنويًا (الفوترة بالدولار الأمريكي) ويشمل ما يصل إلى 12 نموذجًا مضبوطًا، مع 5 دولارات لكل ضبط إضافي.',
        decisionBlock: {
          title: 'هل تختار Frigate+ أم النماذج القياسية؟',
          localIf: [
            'يُصنَّف جسم بعينه تصنيفًا خاطئًا بصورة متكررة في محيط منزلك',
            'لديك زوايا كاميرا غير معتادة يتعامل معها النموذج القياسي بضعف',
            'تريد تسميات مقترحة بالذكاء الاصطناعي لتسريع رفعك للصور',
            'تريد تمويل استمرار تطوير المشروع مفتوح المصدر',
          ],
          cloudIf: [
            'تنبيهاتك الكاذبة مصدرها حركة المارة على الرصيف — والمناطق تعالج ذلك مجانًا',
            'تحتاج تسميات خارج قائمة Frigate؛ فالتسميات المخصصة غير متاحة بعد',
            'لديك كاميرا أو كاميرتان فقط بمشاهد بسيطة',
          ],
          quick: [
            'أصلح المناطق أولًا ثم أعد التقييم بعد أسبوعين',
            'إن ظلّت التنبيهات خاطئة مع أجسام حقيقية، فاشترك',
            'تبقى النماذج التي دربتها قابلة للتنزيل بعد إلغاء الاشتراك',
          ],
        },
        items: [
          'حُدِّث النموذج الأساسي في Frigate+ إلى الإصدار 2026.0 المبني على YOLOv9، مع تسميات مرشّحة جديدة مثل `lawnmower` و `heron`.',
          'لا يمكن بعد إضافة تسميات مخصصة حرّة، إذ يقتصر التدريب على مجموعة التسميات التي يدعمها Frigate.',
          'لا يشترط التعرف على الوجوه واللوحات وجود اشتراك.',
        ],
        callouts: [
          { type: 'insight', text: 'الاشتراك قبل ضبط المناطق هو أشيع طريقة لإنفاق 50 دولارًا من دون أي تحسن. فالنموذج المضبوط يجعل عمليات الكشف الصحيحة أكثر موثوقية، لكنه لا يجعل المارّ الذي كُشف بصورة صحيحة يكفّ عن كونه مارًّا.' },
        ],
      },
      cost: {
        id: 'cost',
        title: 'كيف يقارَن Frigate بكاميرات الاشتراك من حيث التكلفة؟',
        content:
          '**يحوّل Frigate رسمًا سحابيًا متكررًا لكل كاميرا إلى تكلفة عتاد تُدفع مرة واحدة ولا تزيد بزيادة عدد الكاميرات.** وابتداءً من كاميرتين، تقع نقطة التعادل عادةً داخل السنة الأولى.',
        columns: ['الجانب', 'خدمة كاميرات سحابية', 'Frigate'],
        rows: [
          { 'الجانب': 'التكلفة المتكررة', 'خدمة كاميرات سحابية': 'شهرية، وغالبًا لكل كاميرا', 'Frigate': 'لا شيء' },
          { 'الجانب': 'التكلفة الأولية', 'خدمة كاميرات سحابية': 'الكاميرا فقط', 'Frigate': 'مضيف وكاشف وتخزين' },
          { 'الجانب': 'الكشف بالذكاء الاصطناعي', 'خدمة كاميرات سحابية': 'سحابة الشركة المصنّعة', 'Frigate': 'محلي (OpenVINO/Hailo/ONNX)' },
          { 'الجانب': 'مكان حفظ اللقطات', 'خدمة كاميرات سحابية': 'مركز بيانات الشركة', 'Frigate': 'قرصك الخاص' },
          { 'الجانب': 'انقطاع الإنترنت', 'خدمة كاميرات سحابية': 'أداء منقوص أو توقف', 'Frigate': 'يعمل بالكامل على الشبكة المحلية' },
          { 'الجانب': 'خطر إلغاء الميزات', 'خدمة كاميرات سحابية': 'قد تغيّر الشركة الباقات', 'Frigate': 'الإصدار الذي تشغّله يظل يعمل' },
        ],
        note: 'إضافة كاميرا إلى Frigate تكلّف ثمن الكاميرا فقط. أما إضافتها إلى خدمة اشتراك فتكلّف عادةً ثمن الكاميرا وسطرًا إضافيًا في الفاتورة — وهنا تتسع الفجوة. راجع أيضًا [إدارة منزل ذكي بلا اشتراكات](/ar/smart-home/smart-home-without-subscriptions).',
        callouts: [
          { type: 'note', text: 'احسب الكهرباء بصدق: جهاز Mini PC يعمل دائمًا مع أقراصه يستهلك نحو 15–30 واط. على مدى خمس سنوات هذا مبلغ حقيقي، لكنه يظل أقل بكثير من معظم الباقات السحابية متعددة الكاميرات.' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'أخطاء شائعة عند إعداد Frigate',
        content:
          '**خمسة أخطاء تفسّر معظم عمليات بناء Frigate الفاشلة، وواحد منها فقط يتعلق بالعتاد.**',
        items: [
          '**تشغيل الكشف على التدفق الرئيسي:** توجيه الدور `detect` إلى تدفق 4K يضاعف تكلفة فك الترميز بلا أي مكسب في الدقة، لأن مدخل النموذج 320x320. اكشف دائمًا على التدفق الفرعي وسجّل على الرئيسي.',
          '**ترك `shm_size` على قيمته الافتراضية:** القيمة 128 MB تغطي كاميرتين تقريبًا بدقة 720p. وما زاد عن ذلك يسقط بصورة متقطعة بلا رسالة خطأ واضحة. اضبط `--shm-size=512mb` وامضِ.',
          '**تثبيت تكامل Home Assistant قبل MQTT:** سيُثبَّت التكامل بسلاسة ولن يُنشئ شيئًا. اضبط أولًا تكامل MQTT في Home Assistant وكتلة `mqtt` في Frigate على الوسيط نفسه.',
          '**معالجة التنبيهات الكاذبة بتغيير الكاشف:** المارّ على الرصيف عملية كشف صحيحة. والعلاج منطقة مع `required_zones` و `loitering_time`، لا مسرّع أسرع ولا نموذج مدفوع.',
          '**التسجيل على قرص SSD الخاص بالنظام:** الكتابة المستمرة للفيديو تستهلك عمر أقراص SSD الاستهلاكية بسرعة. ضع `/media/frigate` على قرص صلب، وأبقِ `/tmp/cache` سريعًا، واضبط `retain.mode: motion`.',
          '**النشر داخل حاوية LXC على Proxmox:** يبدو تمرير الأجهزة ناجحًا ثم يتعطل بطريقة غير مدعومة وغير قابلة للتشخيص. استخدم جهازًا افتراضيًا بنمط QEMU.',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة: ما الذي ينبغي بناؤه فعليًا؟',
        content:
          '**اشترِ جهاز Mini PC بمعالج Intel وذاكرة 16 GB، وشغّل كاشف OpenVINO على وحدة الرسوميات المدمجة فيه، واستخدم كاميرات PoE بتدفق فرعي 720p ومعدل 5 fps، ثم اصرف أسبوعك الأول على ضبط المناطق لا على العتاد.** يكفي هذا التكوين منزلًا عاديًا ويترك مجالًا لإضافة Hailo-8 لاحقًا إن ازداد عدد الكاميرات.',
        items: [
          'استخدم **OpenVINO على iGPU من Intel** إن كنت تبدأ من الصفر — أقل تكلفة، بلا عتاد إضافي، وبهامش وافٍ لـ 2–6 كاميرات.',
          'استخدم **وحدة Hailo-8 بصيغة M.2** إن تجاوزت ثماني كاميرات أو كان الاستهلاك مهمًا.',
          'استخدم **ONNX على بطاقة NVIDIA موجودة** إن كان الجهاز يحوي واحدة، خصوصًا إن كان يشغّل نموذج LLM محليًا أيضًا.',
          'استخدم **Coral** فقط حين يكون استهلاك الواط قيدًا صارمًا وتقبل بأنه لم يعد المسار الموصى به.',
          'تجنّب كاشف **cpu**؛ فوضع المعالج في OpenVINO خيار احتياطي أفضل.',
          'عند التردد، ابدأ بجهاز Mini PC بمعالج Intel N150 وكاميرتين، واضبط المناطق جيدًا، ثم توسّع.',
        ],
        callouts: [
          { type: 'practice', text: 'ترتيب الإنفاق الذي ينجح فعلًا: الكاميرات ومبدّل PoE أولًا، ثم الجهاز المضيف، ثم التخزين، والمسرّع في النهاية فقط حين تقول أرقام صفحة النظام إنك تحتاجه. شراء المسرّع أولًا هو الانقلاب الكلاسيكي في الترتيب.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما هو Frigate NVR؟', a: 'Frigate هو مسجّل فيديو شبكي مفتوح المصدر يشغّل الكشف عن الأجسام بالذكاء الاصطناعي محليًا على تدفقات كاميرات IP باستخدام OpenCV و TensorFlow. يسجّل المقاطع بناءً على ما تم كشفه لا على الحركة المجردة، وينشر كل عملية كشف عبر MQTT ليتمكن Home Assistant من الأتمتة بناءً عليها. ولا توجد في البرنامج الأساسي خدمة سحابية ولا اشتراك.' },
          { q: 'هل ما زلت أحتاج إلى Google Coral TPU مع Frigate في 2026؟', a: 'لا. ينصّ توثيق العتاد في Frigate على أن Coral لم يعد موصى به في التركيبات الجديدة، إلا حين يكون قيد الطاقة صارمًا بصورة غير معتادة. وللتركيب الجديد، فإن المسارات الموصى بها هي كاشف OpenVINO على iGPU من Intel، أو وحدة Hailo-8، أو كاشف ONNX على بطاقة NVIDIA موجودة.' },
          { q: 'أي إصدار من Frigate ينبغي تشغيله؟', a: 'الإصدار Frigate 0.17.2 الصادر في 28 يونيو 2026 هو الإصدار المستقر الحالي. أما 0.18.0 فهو في مرحلة بيتا منذ يوليو 2026، وصدرت البيتا الثالثة في 8 أغسطس 2026، لذا لا تشغّله إلا إن كنت مرتاحًا لتغيّر الإعدادات بين الإصدارات الفرعية.' },
          { q: 'كم من الذاكرة يحتاج Frigate؟', a: 'يعمل الكشف عن الأجسام والتسجيل بأريحية ضمن 8 GB. أما البحث الدلالي فيرفع هذا الحد: يوثّق Frigate 8 GB كحد أدنى، و 16 GB أو أكثر مع بطاقة رسوميات مخصصة كتوصية، ويشترط معالجًا يدعم تعليمات AVX و AVX2.' },
          { q: 'لماذا ينبّهني Frigate باستمرار على المارة أمام منزلي؟', a: 'لأن تلك عمليات كشف صحيحة. ارسم منطقة تغطي الأرض داخل ملكيتك فقط، واضبط review.alerts.required_zones على تلك المنطقة، وأضف loitering_time حتى يضطر المارّ إلى التوقف قبل إطلاق التنبيه. يُقاس الوجود عند النقطة الوسطى السفلية لمربع الإحاطة، لذا يجب أن تغطي المنطقة مستوى الأرض.' },
          { q: 'هل يعمل Frigate من دون اتصال بالإنترنت؟', a: 'نعم. يعمل الكشف والتسجيل و MQTT وأتمتة Home Assistant بالكامل على شبكتك المحلية. ولا يحتاج إلى اتصال سوى المشاهدة عن بُعد من خارج المنزل ومزوّدو GenAI السحابيون الاختياريون، وقد أضاف الإصدار 0.17 تكاملًا مع llama.cpp لتوليد الأوصاف محليًا أيضًا.' },
          { q: 'ما الفرق بين المنطقة والقناع في Frigate؟', a: 'قناع الحركة يمنع Frigate من تشغيل أي كشف في تلك المنطقة، وهو مناسب لطوابع الوقت المطبوعة وأوراق الشجر الدائمة الحركة. أما المنطقة فتترك الكشف يعمل بصورة طبيعية وتقيّد فقط، عبر required_zones، أي عمليات كشف يُسمح لها بإطلاق تنبيه. القناع لما ليس جسمًا، والمنطقة لأجسام حقيقية لا تعنيك.' },
          { q: 'كم كاميرا يستطيع خادم Frigate واحد تشغيلها؟', a: 'يتحدد ذلك بزمن الاستدلال أكثر من عدد الكاميرات مباشرةً: فعدد عمليات الكشف المفيدة في الثانية يساوي تقريبًا 1000 مقسومًا على زمن الاستدلال بالميلي ثانية، موزعًا على الكاميرات. وعند كشف بمعدل 5 fps لكل كاميرا وكاشف زمنه 8 ms مثل Intel Arc A750 على YOLOv9-320، يبقى هامش كبير لتركيب سكني نموذجي.' },
          { q: 'هل أحتاج إلى Frigate+ للتعرف على الوجوه أو لوحات المركبات؟', a: 'لا. يعمل التعرف على الوجوه واللوحات محليًا من دون اشتراك، وإن كانت نماذج Frigate+ ترفع الكفاءة. يكلّف Frigate+ مبلغ 50 دولارًا سنويًا ويشمل ما يصل إلى 12 نموذجًا مضبوطًا، مع 5 دولارات لكل ضبط إضافي — وهو مفيد مع التصنيف الخاطئ المتكرر، لا مع حركة المارة.' },
          { q: 'هل يمكنني تشغيل Frigate داخل حاوية LXC على Proxmox؟', a: 'لا — فـ LXC على Proxmox غير مدعوم صراحةً. استخدم جهازًا افتراضيًا بنمط QEMU بدلًا من ذلك. وقد يبدو تمرير iGPU أو Coral أو وحدة Hailo ناجحًا داخل LXC ثم يتعطل بطريقة لا يمكن دعمها.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[افهم لماذا تتفوق كاميرات الذكاء الاصطناعي المحلية على الكاميرات السحابية في الخصوصية](/ar/smart-home/local-ai-security-camera) — المبرّر قبل تفاصيل البناء',
          '[قارن كاميرات المراقبة المحلية ذات دعم RTSP و ONVIF المؤكَّد](/ar/smart-home/best-local-security-cameras-2027) — أي الكاميرات تغذي Frigate على نحو سليم',
          '[راجع أجهزة Mini PC التي تشغّل Home Assistant والذكاء الاصطناعي المحلي على جهاز واحد](/ar/smart-home/best-mini-pc-home-assistant-local-ai) — مضيفات بمواصفات مناسبة لبناء Frigate',
          '[تحقق من متطلبات العتاد لمنزل ذكي محلي بالكامل](/ar/smart-home/best-hardware-for-local-smart-home) — المسرّعات والتخزين والشبكة',
          '[تعرّف على كيفية البدء مع Home Assistant](/ar/smart-home/home-assistant-getting-started) — الشرط المسبق إن كنت مبتدئًا',
          '[استكشف استشعار التواجد بالرادار للغرف التي لا تناسبها الكاميرات](/ar/smart-home/radar-presence-sensing-no-camera) — البديل الخالي من الكاميرا داخل المنزل',
          '[اطّلع على كيفية تثبيت Ollama لتشغيل نموذج LLM محلي على الجهاز نفسه](/ar/local-llms/how-to-install-ollama) — عبر المجموعات: أوصاف GenAI محلية لأحداث Frigate',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '**العتاد الموصى به في Frigate** — [docs.frigate.video/frigate/hardware](https://docs.frigate.video/frigate/hardware) — أزمنة الاستدلال المنشورة لكل كاشف، والنص على أن Coral لم يعد موصى به في التركيبات الجديدة.',
          '**إعداد كواشف الأجسام في Frigate** — [docs.frigate.video/configuration/object_detectors](https://docs.frigate.video/configuration/object_detectors) — القائمة الكاملة لقيم `type` والملاحظة بأن كاشف المعالج غير موصى به.',
          '**إعداد الكاميرات في Frigate** — [docs.frigate.video/frigate/camera_setup](https://docs.frigate.video/frigate/camera_setup) — الدقّات ومعدلات الإطارات وفواصل الإطار المفتاحي لتدفقَي الكشف والتسجيل.',
          '**إعداد المناطق في Frigate** — [docs.frigate.video/configuration/zones](https://docs.frigate.video/configuration/zones) — القيم required_zones و loitering_time والقيمة الافتراضية لـ inertia ومتطلبات تقدير السرعة.',
          '**البحث الدلالي في Frigate** — [docs.frigate.video/configuration/semantic_search](https://docs.frigate.video/configuration/semantic_search) — متطلبات الذاكرة و AVX2، ومقارنة Jina CLIP V1 و V2، وسلوك إعادة الفهرسة.',
          '**تكامل Frigate مع Home Assistant** — [docs.frigate.video/integrations/home-assistant](https://docs.frigate.video/integrations/home-assistant) — اشتراط MQTT وأنواع الكيانات التي ينشئها التكامل.',
          '**إصدارات Frigate على GitHub** — [github.com/blakeblackshear/frigate/releases](https://github.com/blakeblackshear/frigate/releases) — أرقام الإصدارات وتواريخ الإطلاق لـ 0.17.x وبيتا 0.18.0.',
          '**Frigate+** — [frigate.video/plus/](https://frigate.video/plus/) — سعر الاشتراك وعدد عمليات الضبط المشمولة وقيود التسميات.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'إعداد Frigate NVR: أجهزة الكشف والمناطق و Home Assistant (2026)',
      description: 'يشغّل Frigate 0.17.2 الكشف بالذكاء الاصطناعي محليًا بلا سحابة ولا اشتراك. التوثيق لم يعد ينصح بـ Coral للتركيبات الجديدة: إليك الكاشف البديل الصحيح.',
      url: 'https://www.promptquorum.com/ar/smart-home/frigate-nvr-home-assistant-setup',
      inLanguage: 'ar',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      about: [
        { '@type': 'Thing', name: 'Frigate NVR' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'الكشف عن الأجسام' },
        { '@type': 'Thing', name: 'OpenVINO' },
        { '@type': 'Thing', name: 'Hailo-8' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Frigate' },
        { '@type': 'SoftwareApplication', name: 'Home Assistant' },
        { '@type': 'SoftwareApplication', name: 'go2rtc' },
      ],
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مستخدمو Home Assistant الذين يبنون نظام كاميرات بالذكاء الاصطناعي مستضافًا ذاتيًا' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/ar/smart-home/frigate-nvr-home-assistant-setup' },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'تثبيت Frigate NVR وربطه بـ Home Assistant',
      inLanguage: 'ar',
      totalTime: 'PT90M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'تجهيز المضيف', text: 'ثبّت Docker على مضيف مبني على Debian وأنشئ مجلدَي /config و /media/frigate.' },
        { '@type': 'HowToStep', position: 2, name: 'كتابة إعداد مبسّط', text: 'أنشئ ملف config.yml بكاميرا واحدة ومن دون كتلة كواشف، ليبدأ Frigate بالقيم الافتراضية وتتأكد من التدفق.' },
        { '@type': 'HowToStep', position: 3, name: 'تشغيل الحاوية', text: 'شغّل Frigate بقيمة shm_size صريحة ومع الجهاز الصحيح: /dev/dri لمعالجات Intel، أو بيئة تشغيل NVIDIA، أو /dev/hailo0 لوحدات Hailo.' },
        { '@type': 'HowToStep', position: 4, name: 'التحقق من واجهة الويب', text: 'افتح واجهة الويب في Frigate وتحقق من صورة الكاميرا ومعدل إطارات الكشف وزمن الاستدلال في صفحة النظام.' },
        { '@type': 'HowToStep', position: 5, name: 'إضافة الكاشف الفعلي', text: 'أضف كتلة detectors الخاصة بعتادك، وأعد التشغيل، وتحقق من هبوط زمن الاستدلال إلى الرقم المنشور.' },
        { '@type': 'HowToStep', position: 6, name: 'الربط بـ Home Assistant', text: 'اضبط وسيط MQTT في config.yml، وأضف تكامل MQTT في Home Assistant، ثم ثبّت تكامل Frigate.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'ما هو Frigate NVR؟', acceptedAnswer: { '@type': 'Answer', text: 'Frigate هو مسجّل فيديو شبكي مفتوح المصدر يشغّل الكشف عن الأجسام بالذكاء الاصطناعي محليًا على تدفقات كاميرات IP باستخدام OpenCV و TensorFlow. يسجّل المقاطع بناءً على ما تم كشفه، وينشر كل عملية كشف عبر MQTT ليتمكن Home Assistant من الأتمتة بناءً عليها.' } },
        { '@type': 'Question', name: 'هل ما زلت أحتاج إلى Google Coral TPU مع Frigate في 2026؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. ينصّ توثيق العتاد في Frigate على أن Coral لم يعد موصى به في التركيبات الجديدة، إلا حين يكون قيد الطاقة صارمًا بصورة غير معتادة. والمسارات الموصى بها هي OpenVINO على iGPU من Intel، أو وحدة Hailo-8، أو ONNX على بطاقة NVIDIA موجودة.' } },
        { '@type': 'Question', name: 'أي إصدار من Frigate ينبغي تشغيله؟', acceptedAnswer: { '@type': 'Answer', text: 'الإصدار Frigate 0.17.2 الصادر في 28 يونيو 2026 هو الإصدار المستقر الحالي. أما 0.18.0 فهو في مرحلة بيتا منذ يوليو 2026، وصدرت البيتا الثالثة في 8 أغسطس 2026.' } },
        { '@type': 'Question', name: 'كم من الذاكرة يحتاج Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'يعمل الكشف عن الأجسام والتسجيل بأريحية ضمن 8 GB. أما البحث الدلالي فيوثّق له Frigate 8 GB كحد أدنى، و 16 GB أو أكثر مع بطاقة رسوميات مخصصة كتوصية، ويشترط معالجًا يدعم AVX و AVX2.' } },
        { '@type': 'Question', name: 'لماذا ينبّهني Frigate باستمرار على المارة أمام منزلي؟', acceptedAnswer: { '@type': 'Answer', text: 'لأن تلك عمليات كشف صحيحة. ارسم منطقة تغطي الأرض داخل ملكيتك فقط، واضبط review.alerts.required_zones على تلك المنطقة، وأضف loitering_time. يُقاس الوجود عند النقطة الوسطى السفلية لمربع الإحاطة.' } },
        { '@type': 'Question', name: 'هل يعمل Frigate من دون اتصال بالإنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يعمل الكشف والتسجيل و MQTT وأتمتة Home Assistant بالكامل على شبكتك المحلية. ولا يحتاج إلى اتصال سوى المشاهدة عن بُعد ومزوّدو GenAI السحابيون الاختياريون.' } },
        { '@type': 'Question', name: 'ما الفرق بين المنطقة والقناع في Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'قناع الحركة يمنع Frigate من تشغيل أي كشف في تلك المنطقة. أما المنطقة فتترك الكشف يعمل بصورة طبيعية وتقيّد فقط، عبر required_zones، أي عمليات كشف يُسمح لها بإطلاق تنبيه.' } },
        { '@type': 'Question', name: 'كم كاميرا يستطيع خادم Frigate واحد تشغيلها؟', acceptedAnswer: { '@type': 'Answer', text: 'يتحدد ذلك بزمن الاستدلال أكثر من عدد الكاميرات: فعدد عمليات الكشف المفيدة في الثانية يساوي تقريبًا 1000 مقسومًا على زمن الاستدلال بالميلي ثانية، موزعًا على الكاميرات.' } },
        { '@type': 'Question', name: 'هل أحتاج إلى Frigate+ للتعرف على الوجوه أو لوحات المركبات؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. يعمل التعرف على الوجوه واللوحات محليًا من دون اشتراك. يكلّف Frigate+ مبلغ 50 دولارًا سنويًا ويشمل ما يصل إلى 12 نموذجًا مضبوطًا، مع 5 دولارات لكل ضبط إضافي.' } },
        { '@type': 'Question', name: 'هل يمكنني تشغيل Frigate داخل حاوية LXC على Proxmox؟', acceptedAnswer: { '@type': 'Answer', text: 'لا، فـ LXC على Proxmox غير مدعوم صراحةً. استخدم جهازًا افتراضيًا بنمط QEMU بدلًا من ذلك. وقد يبدو تمرير iGPU أو Coral أو وحدة Hailo ناجحًا ثم يتعطل بطريقة لا يمكن دعمها.' } },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    current_hardware_mentioned: ['Google Coral USB/M.2', 'Hailo-8 / Hailo-8L', 'Intel Arc A750', 'Intel UHD 730 iGPU', 'Intel NPU', 'NVIDIA RTX 3050 / RTX 3070', 'AMD Radeon 780M', 'Apple M3 Pro'],
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/frigate-nvr-home-assistant-setup-overview-hero-ko.webp',
    title: 'Frigate NVR 구축 가이드: 디텍터, 존, Home Assistant (2026)',
    seoTitle: 'Frigate NVR 2026: 디텍터 선택과 HA 연동',
    intro:
      'Frigate는 AI 객체 인식을 사용자 소유 하드웨어에서 실행하고, 인식 결과를 Home Assistant에 엔티티로 넘겨주는 오픈소스 네트워크 비디오 레코더입니다. 이 가이드에서는 2026년 기준 디텍터 선택(Google Coral은 더 이상 기본 답이 아닙니다), 카메라 스트림 설정, 실제로 동작하는 config.yml, 오탐을 실제로 없애는 존 설정, Home Assistant 연동, 그리고 0.16과 0.17에서 달라진 점을 다룹니다.',
    metaDescription:
      'Frigate 0.17.2는 클라우드도 구독료도 없이 AI 인식을 로컬에서 처리합니다. 공식 문서는 신규 구축에 Coral을 더 이상 권장하지 않습니다. 대신 어떤 디텍터를 선택해야 하는지 정리했습니다.',
    twitterDescription:
      'Frigate NVR 실전 구축 가이드: 2026년 디텍터 선택, 카메라 스트림 설정, 동작하는 config.yml, 존 튜닝, Home Assistant 연동.',
    readTime: '16분 읽기',
    educationalLevel: 'Intermediate',
    audience: 'Frigate로 자체 호스팅 AI 카메라 시스템을 구축하는 Home Assistant 사용자',
    primaryTerm: 'Frigate NVR 구축',
    targetKeywords: [
      'frigate nvr 설정',
      'frigate home assistant 연동',
      'frigate 디텍터 coral openvino',
      'frigate config yml 예시',
      'frigate 존 오탐',
    ],
    leadAnswerBlock:
      '**Frigate는 카메라 스트림에 대해 AI 객체 인식을 로컬에서 실행하고, 모든 인식 결과를 Home Assistant에 엔티티로 노출하는 오픈소스 NVR입니다.** Frigate 0.17.2 기준으로 신규 구축의 권장 출발점은 Google Coral이 아니라 OpenVINO 디텍터를 구동하는 Intel 내장 GPU입니다.',
    quickAnswerTop: {
      ko: {
        question: 'Frigate NVR을 Home Assistant와 어떻게 연동합니까?',
        answer:
          'Docker로 Frigate를 실행하고, config.yml에서 인식은 각 카메라의 저해상도 서브스트림으로, 녹화는 메인 스트림으로 지정합니다. 하드웨어가 지원하는 디텍터(Intel 내장 GPU는 OpenVINO, NVIDIA GPU는 ONNX, 또는 Hailo-8 모듈)를 선택한 뒤 Home Assistant에 Frigate 통합을 설치합니다. Home Assistant에는 MQTT 통합이 먼저 구성되어 있어야 하며, 첫 구축에서 가장 자주 빠뜨리는 단계가 바로 이것입니다.',
        bullets: [
          'Frigate 0.17.2가 현재 안정 버전입니다(2026년 6월 28일 릴리스)',
          '인식은 1280x720 / 5 fps, 녹화는 메인 스트림 15 fps로 설정합니다',
          'Frigate는 신규 구축에 Google Coral을 더 이상 권장하지 않습니다',
          'Intel Arc A750은 YOLOv9-320에서 약 8 ms, Intel UHD 730 내장 GPU는 약 14 ms입니다',
          'Home Assistant 통합은 MQTT 통합을 전제로 합니다',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: 'Frigate가 하는 일', anchor: 'what-frigate-is' },
      { label: '어떤 디텍터를 살 것인가', anchor: 'detector' },
      { label: '서버 하드웨어와 RAM', anchor: 'server-hardware' },
      { label: '카메라 스트림 설정', anchor: 'cameras' },
      { label: 'Frigate 설치', anchor: 'install' },
      { label: '동작하는 config.yml', anchor: 'config' },
      { label: '존, 마스크, 오탐', anchor: 'zones' },
      { label: 'Home Assistant 연동', anchor: 'home-assistant' },
      { label: '검색, 얼굴, 번호판', anchor: 'ai-features' },
      { label: 'Frigate+는 값을 하는가', anchor: 'frigate-plus' },
      { label: '구독형 카메라와의 비용 비교', anchor: 'cost' },
      { label: '자주 하는 실수', anchor: 'mistakes' },
      { label: '결론', anchor: 'verdict' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '출처', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate는 RTSP 카메라 스트림에 대해 AI 객체 인식을 로컬에서 실행하고 모든 인식 결과를 MQTT로 Home Assistant에 전달하는 오픈소스 NVR이며, 클라우드 서비스도 구독료도 필요하지 않습니다.' },
      { type: 'plain-terms', content: '일반적인 스마트 카메라는 영상을 업체 서버로 보내고, 업체가 사람이 찍혔는지 판단한 뒤 그 대가로 매달 요금을 청구합니다. Frigate는 그 판단을 집 안의 컴퓨터에서 처리하므로 영상이 집 밖으로 나가지 않고, 월 요금도 없으며, 모든 인식 결과가 Home Assistant가 반응할 수 있는 이벤트가 됩니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        content:
          'Frigate 공식 문서는 이제 신규 구축에서 Google Coral TPU를 권장하지 않습니다. 대부분의 가이드가 여전히 가장 먼저 사라고 권하는 바로 그 가속기입니다.',
        items: [
          'Frigate 0.17.2(2026년 6월 28일)가 현재 안정 버전이며, 0.18.0은 2026년 8월 8일 기준 베타 단계입니다',
          '디텍터가 먼저입니다. OpenVINO를 구동하는 Intel 내장 GPU가 가장 저렴한 현실적 출발점이고, Hailo-8이나 NVIDIA GPU는 그 위로 확장됩니다',
          'Coral은 이제 기본값이 아니라 대안입니다. 소비 전력이 결정적 제약일 때만 권장됩니다',
          '카메라마다 두 개의 스트림을 씁니다. 인식용 1280x720 / 5 fps, 녹화용 풀 해상도 메인 스트림 15 fps입니다',
          '오탐을 실제로 없애는 것은 존과 required_zones, loitering_time, inertia이며 더 좋은 모델이 아닙니다',
          'Home Assistant 통합은 MQTT 통합이 먼저 구성되어 있어야 하며, 그렇지 않으면 엔티티가 하나도 생기지 않습니다',
          '시맨틱 검색은 최소 8 GB RAM, 쾌적하게 쓰려면 16 GB와 GPU, 그리고 AVX2를 지원하는 CPU가 필요합니다',
          'Frigate+는 연 50달러(USD 청구)에 최대 12개의 파인튜닝 모델을 제공하며, 얼굴 인식과 번호판 인식은 구독 없이 동작합니다',
        ],
      },
      whatFrigateIs: {
        id: 'what-frigate-is',
        title: 'Frigate는 일반 NVR과 무엇이 다릅니까?',
        content:
          '**Frigate는 두 단계로 동작합니다. 먼저 부하가 낮은 움직임 감지가 살펴볼 만한 영역을 골라내고, 그다음 실제 객체 인식 모델이 그곳에 사람, 차량, 반려동물, 택배 상자가 있는지 판단합니다.** 일반 NVR은 픽셀 변화로 동작하기 때문에 자동차 전조등, 비, 흔들리는 관목에도 알림을 보냅니다.',
        items: [
          '**움직임이 먼저, AI가 나중:** 가벼운 움직임 감지가 디텍터를 *어디에서* 실행할지 정하므로, 작은 가속기 하나로도 여러 카메라를 감당합니다.',
          '**객체 단위 녹화:** 보관 정책이 24시간 연속 버퍼가 아니라 인식된 내용에 따르므로 저장 공간이 훨씬 오래 갑니다.',
          '**go2rtc를 통한 재송출:** Frigate가 카메라를 한 번만 가져와 재배포하므로, 다섯 개의 클라이언트가 카메라에 직접 몰리는 일이 없습니다.',
          '**MQTT 출력:** 추적된 객체, 존 진입, 객체 수가 모두 발행되며, 이것이 Home Assistant 자동화를 가능하게 하는 기반입니다.',
          '**리뷰 항목:** 인식 결과는 *alerts*(알림을 받고 싶은 것)와 *detections*(기록만 하고 알리지 않는 것)로 나뉩니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Frigate는 저비용 움직임 감지로 프레임 내 영역을 선별한 뒤 그 영역에서만 객체 인식 모델을 실행하며, 그래서 작은 가속기 한 개로 여러 카메라를 동시에 처리할 수 있습니다.' },
        ],
        callouts: [
          { type: 'note', text: 'alerts와 detections의 구분은 Frigate에서 가장 유용한 개념입니다. alerts는 휴대폰을 울리는 것이고, detections는 검색 가능한 기록입니다. 둘을 따로 설정하십시오.' },
        ],
      },
      detector: {
        id: 'detector',
        title: '2026년에 Frigate용으로 어떤 디텍터를 사야 합니까?',
        content:
          '**처음부터 시작한다면 내장 GPU가 있는 Intel 기기와 OpenVINO 디텍터를, 와트당 가장 낮은 지연이 필요하다면 Hailo-8 모듈을, 이미 NVIDIA GPU가 있는 기기라면 ONNX 디텍터를 선택하십시오.** Frigate 문서는 소비 전력 제약이 유난히 빡빡한 경우를 제외하면 신규 설치에 Coral을 권장하지 않는다고 명시합니다.',
        items: [
          '호스트에 6세대 이상 Intel CPU가 있다면 **OpenVINO**를 쓰십시오. 내장 GPU는 이미 값을 치른 자원이고 추가 하드웨어가 필요 없습니다.',
          '기기에 NVIDIA나 AMD GPU가 이미 있다면 **ONNX**를 쓰십시오. Frigate가 플랫폼을 자동으로 인식합니다.',
          'M.2 슬롯에서 낮은 전력으로 가속기급 지연을 원한다면 **Hailo-8 / Hailo-8L**을 쓰십시오.',
          'NVIDIA Jetson 보드에서는 **TensorRT**를 쓰십시오 — [스마트홈 AI를 위한 NVIDIA Jetson Orin Nano 리뷰](/ko/smart-home/nvidia-jetson-orin-nano-smart-home-review)를 참고하십시오.',
          '**edgetpu**(Coral)는 와트가 결정적 제약이고 노후화되는 모델 라인업을 감수할 수 있을 때만 쓰십시오.',
          '**cpu** 디텍터는 완전히 피하십시오. Frigate에 따르면 OpenVINO의 CPU 모드가 전용 CPU 디텍터보다 효율적입니다.',
        ],
        columns: ['디텍터', '하드웨어', '추론 시간(공개값)'],
        rows: [
          { '디텍터': 'openvino', '하드웨어': 'Intel Arc A750', '추론 시간(공개값)': '약 4 ms MobileNetV2 / 약 8 ms YOLOv9-320' },
          { '디텍터': 'openvino', '하드웨어': 'Intel NPU', '추론 시간(공개값)': '약 6 ms MobileNetV2 / 약 11 ms YOLOv9-320' },
          { '디텍터': 'openvino', '하드웨어': 'Intel UHD 730 내장 GPU', '추론 시간(공개값)': '약 10 ms MobileNetV2 / 약 14 ms YOLOv9-tiny' },
          { '디텍터': 'hailo8l', '하드웨어': 'Hailo-8', '추론 시간(공개값)': '약 6 ms SSD MobileNet / 약 7 ms YOLOv6n' },
          { '디텍터': 'hailo8l', '하드웨어': 'Hailo-8L', '추론 시간(공개값)': '약 10 ms SSD MobileNet / 약 11 ms YOLOv6n' },
          { '디텍터': 'onnx', '하드웨어': 'NVIDIA RTX 3070', '추론 시간(공개값)': '약 6–8 ms YOLOv9 tiny→small 320' },
          { '디텍터': 'onnx', '하드웨어': 'NVIDIA RTX 3050', '추론 시간(공개값)': '약 8–10 ms YOLOv9 tiny→small 320' },
          { '디텍터': 'onnx', '하드웨어': 'AMD Radeon 780M', '추론 시간(공개값)': '약 14 ms YOLOv9-tiny-320' },
          { '디텍터': 'zmq', '하드웨어': 'Apple M3 Pro', '추론 시간(공개값)': '약 6 ms YOLOv9-tiny-320' },
        ],
        note: '위 수치는 Frigate가 디텍터별로 공개한 값이며 PromptQuorum의 자체 측정치가 아닙니다. Frigate는 이 외에도 rknn(Rockchip NPU), memryx, synaptics, deepstack, degirum 디텍터 타입을 제공합니다.',
        callouts: [
          { type: 'warning', text: '대부분의 Frigate 튜토리얼은 아직도 "Coral부터 사라"로 시작합니다. 이 조언은 0.16과 0.17에서 진행된 OpenVINO, Hailo, ONNX 작업 이전의 것이며, Frigate 자체 하드웨어 문서가 신규 구축에 대해 이를 명확히 부정하고 있습니다.' },
          { type: 'tip', text: 'Coral의 카메라 수용량은 모든 카메라가 나눠 쓰는 약 1000 / inference_speed fps에 해당합니다. 인식 5 fps 기준으로 10 ms 추론 예산이면 계산상 약 20개 스트림을 감당하지만, 발열로 인한 클럭 저하와 USB 전력 제약이 이 수치를 깎아냅니다.' },
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: '디텍터란 "저것이 사람인가"에 답하는 칩입니다. Intel CPU에 이미 들어 있는 그래픽 코어, 별도의 NVIDIA 그래픽카드, 또는 작은 M.2 AI 모듈을 쓸 수 있습니다. 모두가 추천하는 그 USB 스틱(Google Coral)도 여전히 동작하지만, 더 이상 권장 출발점은 아닙니다.' },
        ],
      },
      serverHardware: {
        id: 'server-hardware',
        title: 'Frigate 서버 자체에는 무엇이 필요합니까?',
        content:
          '**Intel N 시리즈 또는 Core i 시리즈의 작은 미니 PC에 RAM 8–16 GB, OS용 SSD, 녹화용 별도 하드디스크면 카메라 4~8대 규모의 일반 주택을 감당합니다.** 병목이 CPU인 경우는 드물고, 실제로는 공유 메모리, 디스크 쓰기 수명, 그리고 시맨틱 검색을 쓸지 여부가 관건입니다.',
        items: [
          '**공유 메모리(`shm`):** 기본값 128 MB는 720p 카메라 두 대 정도만 감당합니다. Frigate는 1280x720 카메라 한 대당 로그 포함 약 66.63 MB로 계산하므로, 여덟 대면 약 253 MB가 필요합니다.',
          '**`--shm-size`를 명시적으로 설정하십시오:** 대부분의 구성에서 `--shm-size=512mb`가 안전한 값입니다. 값이 너무 작으면 명확한 오류가 아니라 카메라가 간헐적으로 끊기는 형태로 나타납니다.',
          '**마운트 지점 세 곳:** YAML과 데이터베이스용 `/config`, 클립·녹화·내보내기용 `/media/frigate`, 처리 중 세그먼트용 `/tmp/cache`.',
          '**녹화는 하드디스크로:** 연속 쓰기는 소비자용 SSD의 수명을 갉아먹습니다. `/media/frigate`는 하드디스크에 두고 `/tmp/cache`는 빠른 저장소에 남겨 두십시오.',
          '**AI 기능용 RAM:** 시맨틱 검색에는 최소 8 GB와 AVX·AVX2를 지원하는 CPU가 필요하며, 권장 구성은 16 GB와 GPU입니다.',
        ],
        columns: ['구성', '디텍터', '적합한 용도'],
        rows: [
          { '구성': 'Intel N100/N150 미니 PC, 16 GB', '디텍터': 'openvino (내장 GPU)', '적합한 용도': '카메라 2~6대, 시맨틱 검색 없이' },
          { '구성': 'Intel Core i5 미니 PC, 32 GB', '디텍터': 'openvino (내장 GPU)', '적합한 용도': '카메라 6~12대와 시맨틱 검색' },
          { '구성': '임의 호스트 + Hailo-8 M.2', '디텍터': 'hailo8l', '적합한 용도': '저전력, 다수 카메라' },
          { '구성': 'RTX 3050 이상 데스크톱', '디텍터': 'onnx', '적합한 용도': 'Frigate와 로컬 LLM을 한 대에서 운용' },
          { '구성': 'Raspberry Pi 5', '디텍터': 'edgetpu / hailo8l', '적합한 용도': '카메라 1~3대, 전력 예산이 빠듯한 환경' },
        ],
        note: 'Frigate는 베어메탈 Debian 위의 Docker, Home Assistant 애드온, Helm을 통한 Kubernetes, Unraid, Synology 및 QNAP NAS, ESXi, Apple Silicon용 macOS를 지원합니다. Proxmox에서는 QEMU 가상 머신을 쓰십시오. LXC는 명시적으로 지원되지 않습니다.',
        callouts: [
          { type: 'warning', text: 'Proxmox LXC 컨테이너에서 Frigate를 운용하는 것은 지원되지 않습니다. Coral이나 내장 GPU 패스스루는 처음에는 되는 듯하다가, 아무도 대신 진단해 줄 수 없는 방식으로 고장 납니다. 가상 머신을 쓰십시오.' },
          { type: 'practice', text: 'Frigate와 Home Assistant, 로컬 LLM을 한 대에 담고 싶다면 LLM 쪽 요구 사항부터 기준으로 삼아 사양을 정하십시오 — [Home Assistant와 로컬 AI를 위한 미니 PC 추천](/ko/smart-home/best-mini-pc-home-assistant-local-ai)을 참고하십시오.' },
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Frigate를 위해 카메라를 어떻게 설정해야 합니까?',
        content:
          '**카메라 펌웨어에서 두 개의 스트림을 설정하십시오. 인식용으로 1280x720 / 5 fps, 녹화용으로 네이티브 해상도 / 15 fps이며 둘 다 H.264에 화면비를 일치시킵니다.** Frigate의 인식 모델은 320x320 입력으로 동작하므로, 4K 인식 스트림은 아무 이득이 없으면서 디코딩 비용만 크게 늘립니다.',
        numberedItems: [
          '카메라 펌웨어에서 서브스트림을 1280x720, 5 fps, H.264, I 프레임 간격 5(초당 키프레임 1개)로 설정합니다.',
          '메인 스트림을 카메라의 네이티브 해상도(일반적인 4 MP 센서라면 2688x1520), 15 fps, H.264, I 프레임 간격 30으로 설정합니다.',
          '두 스트림의 화면비를 동일하게(16:9 대 16:9) 유지해 인식과 녹화 사이에서 바운딩 박스가 정확히 대응되도록 합니다.',
          'Frigate에서 `detect` 역할에 서브스트림을, `record` 역할에 메인 스트림을 지정합니다.',
          '좁은 진입로를 가로지르는 차량처럼 실제로 빠른 대상이 있을 때만 인식을 10 fps로 올립니다.',
        ],
        items: [
          'H.265가 아니라 H.264를 쓰십시오. H.265는 브라우저 지원이 제한적이고 실시간 보기가 가장 먼저 영향을 받습니다.',
          '프레임 레이트는 Frigate가 아니라 카메라에서 바꾸십시오. 소프트웨어 다운샘플링은 이득 없이 CPU만 소모합니다.',
          '무선보다 유선 PoE를 우선하십시오. 서브스트림 끊김은 명확한 장애가 아니라 인식 누락으로 나타납니다.',
          'RTSP와 ONVIF를 제대로 제공하는 카메라 하드웨어는 [Frigate 구축용 로컬 보안 카메라 구매 가이드](/ko/smart-home/best-local-security-cameras-2027)를 참고하십시오.',
        ],
        callouts: [
          { type: 'tip', text: '진입로 끝의 대상이 전혀 인식되지 않는다면 원인은 대개 모델이 아니라 해상도입니다. 1280x720을 320x320 입력으로 축소하면 멀리 있는 사람은 몇 픽셀에 불과합니다. 인식 해상도를 전반적으로 올리는 대신 그 구역을 두 번째 카메라나 확대 스트림으로 분리하십시오.' },
          { type: 'note', text: 'Frigate는 카메라를 한 번만 가져와 나머지 클라이언트에는 그 사본을 제공합니다. 그래서 Home Assistant는 카메라가 아니라 Frigate를 바라보게 해야 합니다.' },
        ],
      },
      install: {
        id: 'install',
        title: 'Frigate는 어떻게 설치합니까?',
        content:
          '**지원되는 경로를 원한다면 베어메탈 Debian 호스트에서 Docker Compose를 쓰고, 제어권을 일부 포기하고 원클릭 설치를 택하겠다면 Home Assistant 애드온을 쓰십시오.** 둘 다 동일한 config.yml과 동일한 MQTT 브로커가 필요합니다.',
        numberedItems: [
          'Debian 계열 호스트에 Docker를 설치하고 `/config`와 `/media/frigate` 디렉터리를 만듭니다.',
          '카메라 한 대만 있고 디텍터 블록이 없는 최소 `config.yml`을 작성해, Frigate가 기본값으로 시작하고 스트림이 들어오는지 확인합니다.',
          '`shm_size`를 명시하고 환경에 맞는 장치를 전달해 컨테이너를 시작합니다. Intel은 `/dev/dri`, NVIDIA는 GPU 런타임, Hailo는 `/dev/hailo0`입니다.',
          '웹 UI를 열어 카메라 화면, 인식 FPS, 시스템 페이지의 추론 시간을 확인합니다.',
          '실제 `detectors` 블록을 추가해 재시작하고, 추론 시간이 해당 하드웨어의 공개값까지 내려가는지 확인합니다.',
          '`config.yml`에 MQTT 브로커를 설정한 뒤 Home Assistant에서 Frigate 통합을 추가합니다.',
        ],
        codeBlock: `services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:0.17.2
    restart: unless-stopped
    privileged: true
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128   # Intel iGPU (OpenVINO)
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config:/config
      - /srv/frigate/media:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "8971:8971"   # authenticated web UI
      - "8554:8554"   # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'warning', text: '이미지 태그는 `stable`이 아니라 특정 버전으로 고정하십시오. Frigate의 설정 스키마는 마이너 버전 사이에서 바뀌며, 0.17에서 0.18로 넘어가는 경계에서 무인 `docker compose pull`을 실행하면 기존 YAML로는 기동을 거부하는 컨테이너가 남을 수 있습니다.' },
          { type: 'practice', text: '나머지를 추가하기 전에 카메라 한 대를 먼저 띄우십시오. "Frigate가 안 된다"는 글은 거의 예외 없이 특정 카메라 한 대의 서브스트림 URL 문제로 끝나며, 설정에 항목이 하나뿐일 때 훨씬 쉽게 찾을 수 있습니다.' },
        ],
      },
      config: {
        id: 'config',
        title: '동작하는 Frigate config.yml은 어떤 모습입니까?',
        content:
          '**동작하는 설정은 네 개의 블록으로 이루어집니다. `mqtt`, `detectors`, 두 개의 스트림 역할을 가진 `cameras`, 그리고 카메라별 `zones`와 `review` 필터입니다.** 나머지는 첫날에는 기본값으로 충분합니다.',
        codeBlock: `mqtt:
  host: 192.168.1.10
  user: frigate
  password: "{FRIGATE_MQTT_PASSWORD}"

detectors:
  ov:
    type: openvino
    device: GPU

cameras:
  driveway:
    ffmpeg:
      inputs:
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=1
          roles: [detect]
        - path: rtsp://user:pass@192.168.1.51:554/cam/realmonitor?channel=1&subtype=0
          roles: [record]
    detect:
      width: 1280
      height: 720
      fps: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: motion
      alerts:
        retain:
          days: 30
    snapshots:
      enabled: true
    motion:
      mask:
        - 0,0,0.35,0,0.35,0.12,0,0.12   # timestamp overlay
    zones:
      driveway_apron:
        coordinates: 0.14,0.98,0.62,0.55,0.95,0.72,0.88,1.0
        loitering_time: 4
        inertia: 3
    review:
      alerts:
        labels: [person, car]
        required_zones: [driveway_apron]
      detections:
        labels: [person, car, dog, cat]`,
        codeLanguage: 'yaml',
        items: [
          '`subtype=1`과 `subtype=0`은 Dahua/Amcrest 계열의 서브·메인 스트림 표기입니다. Reolink는 `h264Preview_01_sub`와 `h264Preview_01_main`을 씁니다.',
          '`retain.mode: motion`은 움직임이 있었던 구간의 연속 녹화만 남기며, 저장 공간 절감의 가장 큰 지렛대입니다.',
          '`review.alerts.required_zones`는 공도를 지나는 차량이 휴대폰을 울리는 일을 막아 줍니다.',
          'Frigate 0.17에서 UI 기반 전체 설정이 추가되어, 위 내용 대부분은 이제 손으로 쓰지 않고 웹 인터페이스에서 편집할 수 있습니다.',
        ],
        callouts: [
          { type: 'tip', text: 'Frigate 0.17은 프로필도 도입했습니다. 이름을 붙인 설정 오버라이드로, 컨테이너를 재시작하지 않고 전환할 수 있습니다. required_zones를 넓히는 "손님 방문" 프로필을 만들어 두는 편이 주 2회 YAML을 고치는 것보다 낫습니다.' },
        ],
      },
      zones: {
        id: 'zones',
        title: '존과 마스크는 어떻게 오탐을 없앱니까?',
        content:
          '**존은 어떤 인식이 중요한지를 걸러 내고, 모션 마스크는 Frigate가 특정 영역을 아예 보지 않게 합니다. 대상이 실재하지만 관심 밖이면 존을, 움직임이 애초에 객체가 아니면 마스크를 쓰십시오.** 존 내 존재 여부는 바운딩 박스의 하단 중앙점으로 판정되므로, 존은 머리 높이가 아니라 발이나 바퀴가 닿는 지면을 덮어야 합니다.',
        items: [
          '**모션 마스크:** 타임스탬프 오버레이, 흔들리는 나무, 깃발에 씁니다. Frigate는 그 영역에서 인식을 아예 실행하지 않습니다. 관심 객체가 절대 나타나지 않는 움직임에 적합합니다.',
          '**객체 필터 마스크:** 특정 영역의 특정 라벨을 억제합니다. 항상 `car`로 인식되는 이웃의 주차 차량 같은 경우입니다.',
          '**존과 `required_zones` 조합:** 대상은 분명 사람이지만 인도의 사람은 알림 대상이 아닙니다. 보행자 통행에 대한 올바른 해법입니다.',
          '**`loitering_time`:** 대상이 존 안에 N초 머무를 것을 요구합니다. 통로를 올라오는 택배 기사는 조건을 충족하고, 지나가는 사람은 충족하지 않습니다.',
          '**`inertia`:** 대상이 연속 N프레임(기본 3) 존 안에 머무를 것을 요구해, 경계에서의 바운딩 박스 떨림이 알림을 일으키지 않게 합니다.',
          '**속도 추정:** 지면에 정렬된 정확히 네 개의 점으로 이루어진 존에 `distances` 목록을 지정하면 UI와 MQTT로 속도 값이 나옵니다.',
        ],
        promptExamples: [
          { label: '❌ 잘못된 접근', text: '모든 카메라, 모든 사람, 하루 종일 알림을 켜 두었다가, 앞쪽 인도에서 하룻밤에 마흔 건의 알림이 발생해 이틀 만에 알림을 꺼 버리는 방식.' },
          { label: '✅ 올바른 접근', text: '대지 경계 안쪽 지면만 덮는 driveway_apron 존을 만들고, review.alerts.required_zones를 그 존으로 지정하고, loitering_time: 4를 더합니다. 그러면서 detections(알림 없음)는 나머지 대상에도 켜 두어 검색 가능한 기록이 온전하게 남도록 합니다.' },
        ],
        callouts: [
          { type: 'warning', text: '화면 상단 절반에 존을 그리는 것은 아무 소용이 없습니다. 존재 여부는 바운딩 박스 하단 중앙점으로 판정됩니다. 존은 지면에 그리십시오.' },
          { type: 'insight', text: '오탐은 거의 언제나 모델 품질 문제가 아닙니다. 일반적인 주택 설치에서는 존과 required_zones가 어떤 디텍터 업그레이드보다도 더 많은 잡음을 제거합니다.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Frigate에서 모션 마스크는 해당 영역의 인식 연산 자체를 중단시키고, 존과 required_zones는 인식은 평소대로 수행하되 어떤 인식이 알림을 일으켜도 되는지만 제한합니다.' },
        ],
      },
      homeAssistant: {
        id: 'home-assistant',
        title: 'Frigate를 Home Assistant에 어떻게 연결합니까?',
        content:
          '**먼저 Home Assistant에서 MQTT 통합을 구성하고, Frigate를 같은 브로커로 향하게 한 다음 Frigate 통합을 설치하십시오. 그러면 카메라별·존별로 camera, image, sensor, switch, binary_sensor 엔티티가 생성됩니다.** MQTT를 먼저 구성하지 않으면 통합은 설치되지만 아무것도 만들지 않습니다.',
        numberedItems: [
          'MQTT 브로커(보통 Mosquitto 애드온)를 설치하고 Home Assistant에 MQTT 통합을 추가합니다.',
          'Frigate config.yml의 `mqtt` 블록을 같은 브로커로 지정하고, 별도의 사용자명과 비밀번호를 사용합니다.',
          'HACS를 통해 또는 코어 통합으로 Frigate 통합을 설치하고 Frigate 호스트를 지정합니다.',
          'Media Source 통합을 활성화해 녹화와 스냅샷이 미디어 브라우저에 나타나게 합니다.',
          '자동화는 카메라 단위가 아니라 존 단위 바이너리 센서를 기준으로 구성합니다.',
        ],
        itemHeadings: true,
        columns: ['엔티티 유형', '무엇을 얻는가', '어디에 쓰는가'],
        rows: [
          { '엔티티 유형': 'binary_sensor', '무엇을 얻는가': '카메라별, 존별, 객체 라벨별 움직임과 객체 존재 여부', '어디에 쓰는가': '사실상 모든 자동화의 트리거입니다. 특정 존 안의 사람은 카메라의 움직임보다 훨씬 나은 트리거입니다' },
          { '엔티티 유형': 'camera', '무엇을 얻는가': '포트 8554의 Frigate 재송출에서 제공되는 실시간 스트림 엔티티', '어디에 쓰는가': '대시보드 카드와 캐스팅. 카메라 대신 이쪽을 바라보게 하면 카메라로의 두 번째 연결을 피할 수 있습니다' },
          { '엔티티 유형': 'image', '무엇을 얻는가': '카메라별로 가장 최근 인식된 객체의 스냅샷', '어디에 쓰는가': '스냅샷 API를 직접 호출하지 않고도 모바일 알림에 이미지를 첨부할 수 있습니다' },
          { '엔티티 유형': 'sensor', '무엇을 얻는가': '존별·카메라별 객체 수와 디텍터 및 프로세스 성능 수치', '어디에 쓰는가': '재실 로직과 시스템 상태 대시보드. 여기의 추론 시간은 디텍터가 CPU로 되돌아갔음을 알리는 조기 경보입니다' },
          { '엔티티 유형': 'switch', '무엇을 얻는가': '카메라별 인식, 녹화, 스냅샷 토글', '어디에 쓰는가': '재실 판정이 성립하면 실내 인식을 끄는 식의 프라이버시 자동화' },
        ],
        note: '이 통합은 camera.turn_on과 camera.turn_off 액션도 제공하고, MQTT 설정이 분리된 여러 Frigate 서버를 지원하며, RTSP URL 템플릿을 Jinja2로 재정의할 수 있게 합니다.',
        callouts: [
          { type: 'warning', text: 'Frigate 통합은 설치되었는데 엔티티가 하나도 나타나지 않는다면 원인은 거의 언제나 MQTT입니다. Home Assistant에 MQTT 통합을 추가하지 않았거나, Frigate와 Home Assistant가 서로 다른 브로커에 연결되어 있는 것입니다.' },
          { type: 'practice', text: '자동화는 존 바이너리 센서에 객체 라벨 조건을 더해 트리거하십시오. 카메라 움직임 센서 하나만으로는 비가 올 때도 발동하지만, `binary_sensor.driveway_driveway_apron_person`은 그렇지 않습니다.' },
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: '시맨틱 검색, 얼굴 인식, 번호판 인식은 무엇을 더해 줍니까?',
        content:
          '**시맨틱 검색은 "밤에 진입로에 있던 검은색 밴"이라고 입력하면 해당 클립을 찾아 줍니다. 얼굴 인식과 번호판 인식은 익명의 인식을 이름 있는 인식으로 바꿔 주며, 둘 다 Frigate+ 구독 없이 동작합니다.** 이 기능들의 비용은 돈이 아니라 RAM입니다.',
        items: [
          '**시맨틱 검색:** 최소 8 GB RAM과 AVX·AVX2를 지원하는 CPU가 필요하며, 이상적으로는 16 GB와 전용 GPU가 필요합니다. Raspberry Pi에서는 쓸 만하게 동작하지 않습니다.',
          '**임베딩 모델:** 기본값은 Jina CLIP V1입니다. `small` 변형은 양자화되어 CPU에서도 무난히 돌고, `large` 변형은 GPU가 있으면 이를 활용합니다.',
          '**Jina CLIP V2**는 영어만이 아니라 89개 언어를 지원하지만, Frigate는 RAM과 추론 시간이 크게 늘어나는 대가로 약 3% 개선이라고 기록하며 CPU 추론은 권장하지 않습니다.',
          '**재색인은 수동입니다:** 시맨틱 검색을 켜도 기존 객체는 색인되지 않습니다. UI의 "Reindex" 버튼을 쓰거나 `reindex: True`를 설정하고, 수행 중 높은 CPU 부하를 감안하십시오.',
          '**얼굴 인식과 번호판 인식**은 로컬에서 동작하며 구독이 필요 없습니다. 다만 Frigate+ 모델은 효율을 높여 줍니다.',
          '**GenAI 설명 생성:** 0.17에서 다중 제공자 지원과 전용 llama.cpp 연동이 추가되어, 설명을 자체 하드웨어의 모델로 생성할 수 있습니다 — [Home Assistant에서 로컬 LLM으로 자동화하기](/ko/smart-home/ai-automations-local-llm)를 참고하십시오.',
        ],
        callouts: [
          { type: 'tip', text: '클립이 1년 치 쌓이기 전에 시맨틱 검색을 켜십시오. GPU 없는 미니 PC에서 추적 객체 20만 건을 재색인하는 것은 하룻밤이 걸리는 작업입니다.' },
          { type: 'note', text: 'Frigate 0.16은 시맨틱 검색 트리거를 추가했습니다. 추적 객체가 저장된 이미지나 설명과 일치하면 액션이 실행됩니다. "영상을 검색한다"에서 "영상의 의미를 기준으로 자동화한다"로 넘어가는 다리입니다.' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Frigate+는 연 50달러의 값을 합니까?',
        content:
          '**기본 모델이 해결하지 못하는 구체적이고 반복적인 오탐이 생긴 시점부터 Frigate+는 값을 합니다. 그렇지 않다면 무료 모델과 잘 잡은 존만으로 충분합니다.** 연 50달러(USD 청구)이며 최대 12개의 파인튜닝 모델이 포함되고, 추가 파인튜닝은 건당 5달러입니다.',
        decisionBlock: {
          title: 'Frigate+와 기본 모델 중 무엇을 택할까',
          localIf: [
            '집 주변에서 특정 대상이 반복적으로 잘못 분류됩니다',
            '기본 모델이 잘 다루지 못하는 특이한 카메라 각도가 있습니다',
            '직접 업로드하는 작업을 빠르게 하려고 AI 제안 라벨을 원합니다',
            '오픈소스 프로젝트의 지속적인 개발을 후원하고 싶습니다',
          ],
          cloudIf: [
            '오탐의 원인이 인도 통행이라면 존 설정으로 무료로 해결됩니다',
            'Frigate 지원 목록 밖의 라벨이 필요합니다. 사용자 정의 라벨은 아직 제공되지 않습니다',
            '카메라가 한두 대뿐이고 화각도 단순합니다',
          ],
          quick: [
            '먼저 존을 손보고 2주 뒤에 다시 평가하십시오',
            '그래도 실제 대상에서 알림이 틀린다면 구독하십시오',
            '학습시킨 모델은 구독을 해지한 뒤에도 계속 내려받을 수 있습니다',
          ],
        },
        items: [
          'Frigate+ 기본 모델은 YOLOv9 기반의 2026.0으로 갱신되었고, `lawnmower`와 `heron` 같은 새 후보 라벨이 추가되었습니다.',
          '임의의 사용자 정의 라벨은 아직 추가할 수 없으며, 학습은 Frigate가 지원하는 라벨 집합으로 제한됩니다.',
          '얼굴 인식과 번호판 인식에는 구독이 필요하지 않습니다.',
        ],
        callouts: [
          { type: 'insight', text: '존을 다듬기 전에 구독하는 것은 50달러를 쓰고도 아무 개선을 보지 못하는 가장 흔한 경로입니다. 파인튜닝 모델은 올바른 인식을 더 안정적으로 만들 뿐, 올바르게 인식된 보행자를 보행자가 아니게 만들지는 못합니다.' },
        ],
      },
      cost: {
        id: 'cost',
        title: '구독형 카메라와 비교하면 비용은 어떻습니까?',
        content:
          '**Frigate는 카메라 수에 비례해 늘어나는 클라우드 정기 요금을, 카메라 수와 무관한 일회성 하드웨어 비용으로 바꿉니다.** 카메라가 두 대를 넘어가면 손익분기점은 대개 첫해 안에 들어옵니다.',
        columns: ['항목', '클라우드 카메라 서비스', 'Frigate'],
        rows: [
          { '항목': '정기 비용', '클라우드 카메라 서비스': '월 단위, 대개 카메라별', 'Frigate': '없음' },
          { '항목': '초기 비용', '클라우드 카메라 서비스': '카메라만', 'Frigate': '호스트 + 디텍터 + 저장장치' },
          { '항목': 'AI 인식', '클라우드 카메라 서비스': '제조사 클라우드', 'Frigate': '로컬(OpenVINO/Hailo/ONNX)' },
          { '항목': '영상 보관 위치', '클라우드 카메라 서비스': '제조사 데이터센터', 'Frigate': '내 디스크' },
          { '항목': '인터넷 장애 시', '클라우드 카메라 서비스': '기능 저하 또는 중단', 'Frigate': 'LAN 안에서 완전히 동작' },
          { '항목': '기능 폐지 위험', '클라우드 카메라 서비스': '제조사가 요금제를 바꿀 수 있음', 'Frigate': '쓰던 버전은 계속 동작' },
        ],
        note: 'Frigate에서 카메라를 한 대 늘리면 카메라 값만 듭니다. 구독 서비스에서 한 대를 늘리면 대개 카메라 값에 청구서 한 줄이 더해집니다. 격차가 벌어지는 지점이 바로 여기입니다. [구독 없는 스마트홈 운영](/ko/smart-home/smart-home-without-subscriptions)도 함께 보십시오.',
        callouts: [
          { type: 'note', text: '전기 요금도 정직하게 계산하십시오. 상시 가동되는 미니 PC와 디스크는 대략 15–30 W입니다. 5년으로 보면 실제 돈이지만, 여전히 대부분의 다중 카메라 클라우드 요금제보다 한참 낮습니다.' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Frigate를 설정할 때 자주 하는 실수',
        content:
          '**실패한 Frigate 구축의 대부분은 다섯 가지 실수로 설명되며, 그중 하드웨어와 관련된 것은 하나뿐입니다.**',
        items: [
          '**메인 스트림에서 인식을 돌리는 것:** `detect` 역할을 4K 스트림에 지정하면 모델 입력이 320x320인 이상 정확도 이득은 전혀 없이 디코딩 비용만 몇 배로 늘어납니다. 인식은 항상 서브스트림에서, 녹화는 메인 스트림에서 하십시오.',
          '**`shm_size`를 기본값으로 두는 것:** 128 MB는 720p 카메라 두 대 정도만 감당합니다. 그 이상은 뚜렷한 오류 없이 간헐적으로 끊깁니다. `--shm-size=512mb`로 설정하고 넘어가십시오.',
          '**MQTT보다 Home Assistant 통합을 먼저 설치하는 것:** 통합은 무리 없이 설치되고 아무것도 만들지 않습니다. Home Assistant의 MQTT 통합과 Frigate의 `mqtt` 블록을 같은 브로커로 먼저 구성하십시오.',
          '**디텍터를 바꿔 오탐을 고치려는 것:** 인도의 보행자는 올바른 인식입니다. 해법은 `required_zones`와 `loitering_time`을 갖춘 존이지, 더 빠른 가속기나 유료 모델이 아닙니다.',
          '**OS용 SSD에 녹화하는 것:** 연속적인 영상 쓰기는 소비자용 SSD의 수명을 빠르게 소모합니다. `/media/frigate`는 하드디스크에 두고 `/tmp/cache`는 빠르게 유지하며 `retain.mode: motion`을 설정하십시오.',
          '**Proxmox LXC에 배포하는 것:** 장치 패스스루가 되는 듯하다가 지원도 진단도 불가능한 방식으로 깨집니다. QEMU 가상 머신을 쓰십시오.',
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론: 실제로 무엇을 구성해야 합니까?',
        content:
          '**RAM 16 GB의 Intel 미니 PC를 구입해 내장 GPU에서 OpenVINO 디텍터를 돌리고, 720p / 5 fps 서브스트림을 쓰는 PoE 카메라를 사용하며, 첫 주는 하드웨어가 아니라 존 설정에 쓰십시오.** 이 구성이면 일반적인 주택을 감당하고, 카메라가 늘어나면 나중에 Hailo-8을 더할 여지도 남습니다.',
        items: [
          '처음부터 시작한다면 **Intel 내장 GPU의 OpenVINO**를 쓰십시오. 비용이 가장 낮고 추가 하드웨어가 없으며 카메라 2~6대에 여유가 충분합니다.',
          '카메라가 여덟 대를 넘거나 소비 전력이 중요하다면 **Hailo-8 M.2 모듈**을 쓰십시오.',
          '기기에 이미 NVIDIA GPU가 있다면 **ONNX**를 쓰십시오. 같은 기기에서 로컬 LLM도 돌린다면 특히 그렇습니다.',
          '**Coral**은 와트가 절대적 제약이고 더 이상 권장 경로가 아님을 받아들일 때만 쓰십시오.',
          '**cpu** 디텍터는 피하십시오. 대안으로는 OpenVINO의 CPU 모드가 낫습니다.',
          '결정이 어렵다면 Intel N150 미니 PC와 카메라 두 대로 시작해 존을 제대로 잡은 뒤 확장하십시오.',
        ],
        callouts: [
          { type: 'practice', text: '실제로 통하는 예산 집행 순서는 이렇습니다. 먼저 카메라와 PoE 스위치, 다음 호스트, 다음 저장장치, 그리고 시스템 페이지의 수치가 필요하다고 말할 때 비로소 가속기입니다. 가속기를 가장 먼저 사는 것이 전형적인 순서 뒤바뀜입니다.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Frigate NVR이란 무엇입니까?', a: 'Frigate는 OpenCV와 TensorFlow를 사용해 IP 카메라 스트림에 대한 AI 객체 인식을 로컬에서 실행하는 오픈소스 네트워크 비디오 레코더입니다. 단순한 움직임이 아니라 인식된 내용을 기준으로 클립을 녹화하고, 모든 인식 결과를 MQTT로 발행해 Home Assistant가 이를 기반으로 자동화할 수 있게 합니다. 핵심 소프트웨어에는 클라우드 서비스도 구독료도 없습니다.' },
          { q: '2026년에도 Frigate에 Google Coral TPU가 필요합니까?', a: '아닙니다. Frigate의 하드웨어 문서는 소비 전력 요구가 유난히 빡빡한 경우를 제외하면 신규 설치에 Coral을 권장하지 않는다고 명시합니다. 신규 구축에서는 Intel 내장 GPU의 OpenVINO 디텍터, Hailo-8 모듈, 또는 기존 NVIDIA GPU의 ONNX 디텍터가 권장 경로입니다.' },
          { q: 'Frigate의 어느 버전을 사용해야 합니까?', a: '2026년 6월 28일에 릴리스된 Frigate 0.17.2가 현재 안정 버전입니다. 0.18.0은 2026년 7월부터 베타 단계이며 세 번째 베타가 2026년 8월 8일에 나왔으므로, 마이너 버전 사이의 설정 변경을 감당할 수 있을 때만 0.18을 쓰십시오.' },
          { q: 'Frigate에는 RAM이 얼마나 필요합니까?', a: '객체 인식과 녹화만 하면 8 GB로 여유 있게 동작합니다. 시맨틱 검색은 기준을 높입니다. Frigate는 최소 8 GB, 권장 16 GB 이상과 전용 GPU를 문서화하고 있으며, AVX 및 AVX2 명령어를 지원하는 CPU를 요구합니다.' },
          { q: '집 앞을 지나가는 사람 때문에 Frigate 알림이 계속 오는 이유는 무엇입니까?', a: '그것이 올바른 인식이기 때문입니다. 대지 안쪽 지면만 덮는 존을 그리고, review.alerts.required_zones를 그 존으로 지정하고, loitering_time을 더해 지나가는 사람이 멈춰 서야만 알림이 발생하도록 하십시오. 존재 여부는 바운딩 박스의 하단 중앙점으로 판정되므로 존은 지면을 덮어야 합니다.' },
          { q: '인터넷 연결 없이도 Frigate가 동작합니까?', a: '네. 인식, 녹화, MQTT, Home Assistant 자동화가 모두 LAN 안에서 동작합니다. 연결이 필요한 것은 집 밖에서의 원격 시청과 선택적인 클라우드 GenAI 제공자뿐이며, 0.17에서 llama.cpp 연동이 추가되어 설명 생성도 로컬에서 할 수 있습니다.' },
          { q: 'Frigate에서 존과 마스크는 무엇이 다릅니까?', a: '모션 마스크는 해당 영역에서 인식 자체를 실행하지 않게 하며, 타임스탬프 오버레이나 상시 흔들리는 나뭇잎에 적합합니다. 존은 인식을 평소대로 수행하되 required_zones를 통해 어떤 인식이 알림을 일으켜도 되는지만 제한합니다. 객체가 아닌 것에는 마스크를, 관심 없는 실제 객체에는 존을 쓰십시오.' },
          { q: 'Frigate 서버 한 대로 카메라 몇 대를 감당할 수 있습니까?', a: '카메라 대수보다 추론 시간에 좌우됩니다. 초당 유효 인식 횟수는 대략 1000을 추론 시간(밀리초)으로 나눈 값이며 모든 카메라가 이를 나눠 씁니다. 카메라당 인식 5 fps에 Intel Arc A750이 YOLOv9-320에서 8 ms인 조건이라면 일반적인 주택 설치에는 여유가 상당합니다.' },
          { q: '얼굴 인식이나 번호판 인식에 Frigate+가 필요합니까?', a: '아닙니다. 얼굴 인식과 번호판 인식은 구독 없이 로컬에서 동작하며, Frigate+ 모델은 효율을 높여 줄 뿐입니다. Frigate+는 연 50달러이며 최대 12개의 파인튜닝 모델이 포함되고 추가 파인튜닝은 건당 5달러입니다. 반복되는 오분류에는 유효하지만 인도 통행 문제에는 필요하지 않습니다.' },
          { q: 'Proxmox LXC 컨테이너에서 Frigate를 실행할 수 있습니까?', a: '아닙니다. Proxmox LXC는 명시적으로 지원되지 않습니다. 대신 QEMU 가상 머신을 쓰십시오. 내장 GPU, Coral, Hailo 모듈의 패스스루는 LXC에서 동작하는 듯 보이다가 지원할 수 없는 방식으로 실패할 수 있습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '함께 읽기',
        items: [
          '[로컬 AI 카메라가 프라이버시 면에서 클라우드 카메라보다 나은 이유 이해하기](/ko/smart-home/local-ai-security-camera) — 구축 세부 사항에 앞선 판단 근거',
          '[RTSP와 ONVIF 지원이 확인된 로컬 보안 카메라 비교하기](/ko/smart-home/best-local-security-cameras-2027) — 어떤 카메라가 Frigate에 제대로 영상을 공급하는가',
          '[Home Assistant와 로컬 AI를 한 대에서 돌리는 미니 PC 살펴보기](/ko/smart-home/best-mini-pc-home-assistant-local-ai) — Frigate 구축에 맞춘 호스트',
          '[완전 로컬 스마트홈의 하드웨어 요구 사항 확인하기](/ko/smart-home/best-hardware-for-local-smart-home) — 가속기, 저장장치, 네트워크',
          '[Home Assistant 시작하는 법 익히기](/ko/smart-home/home-assistant-getting-started) — 처음이라면 필요한 선행 지식',
          '[카메라를 두기 곤란한 방을 위한 레이더 재실 감지 살펴보기](/ko/smart-home/radar-presence-sensing-no-camera) — 실내용 카메라 없는 대안',
          '[같은 기기에서 로컬 LLM을 돌리기 위한 Ollama 설치 방법 보기](/ko/local-llms/how-to-install-ollama) — 클러스터 교차: Frigate 이벤트의 로컬 GenAI 설명 생성',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '**Frigate 권장 하드웨어** — [docs.frigate.video/frigate/hardware](https://docs.frigate.video/frigate/hardware) — 디텍터별 공개 추론 시간과, 신규 설치에 Coral을 더 이상 권장하지 않는다는 서술.',
          '**Frigate 객체 디텍터 설정** — [docs.frigate.video/configuration/object_detectors](https://docs.frigate.video/configuration/object_detectors) — 디텍터 `type` 값의 전체 목록과 CPU 디텍터를 권장하지 않는다는 주석.',
          '**Frigate 카메라 설정** — [docs.frigate.video/frigate/camera_setup](https://docs.frigate.video/frigate/camera_setup) — 인식용·녹화용 스트림의 해상도, 프레임 레이트, I 프레임 간격 지침.',
          '**Frigate 존 설정** — [docs.frigate.video/configuration/zones](https://docs.frigate.video/configuration/zones) — required_zones, loitering_time, inertia 기본값, 속도 추정 요건.',
          '**Frigate 시맨틱 검색** — [docs.frigate.video/configuration/semantic_search](https://docs.frigate.video/configuration/semantic_search) — RAM 및 AVX2 요건, Jina CLIP V1과 V2 비교, 재색인 동작.',
          '**Frigate Home Assistant 통합** — [docs.frigate.video/integrations/home-assistant](https://docs.frigate.video/integrations/home-assistant) — 선행 조건인 MQTT와 통합이 생성하는 엔티티 유형.',
          '**GitHub의 Frigate 릴리스** — [github.com/blakeblackshear/frigate/releases](https://github.com/blakeblackshear/frigate/releases) — 0.17.x 및 0.18.0 베타의 버전 번호와 릴리스 날짜.',
          '**Frigate+** — [frigate.video/plus/](https://frigate.video/plus/) — 구독 가격, 포함된 파인튜닝 횟수, 라벨 제약.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Frigate NVR 구축 가이드: 디텍터, 존, Home Assistant (2026)',
      description: 'Frigate 0.17.2는 클라우드도 구독료도 없이 AI 인식을 로컬에서 처리합니다. 공식 문서는 신규 구축에 Coral을 더 이상 권장하지 않습니다. 대신 어떤 디텍터를 선택해야 하는지 정리했습니다.',
      url: 'https://www.promptquorum.com/ko/smart-home/frigate-nvr-home-assistant-setup',
      inLanguage: 'ko',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      about: [
        { '@type': 'Thing', name: 'Frigate NVR' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: '객체 인식' },
        { '@type': 'Thing', name: 'OpenVINO' },
        { '@type': 'Thing', name: 'Hailo-8' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Frigate' },
        { '@type': 'SoftwareApplication', name: 'Home Assistant' },
        { '@type': 'SoftwareApplication', name: 'go2rtc' },
      ],
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '자체 호스팅 AI 카메라 시스템을 구축하는 Home Assistant 사용자' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/ko/smart-home/frigate-nvr-home-assistant-setup' },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Frigate NVR 설치와 Home Assistant 연동',
      inLanguage: 'ko',
      totalTime: 'PT90M',
      step: [
        { '@type': 'HowToStep', position: 1, name: '호스트 준비', text: 'Debian 계열 호스트에 Docker를 설치하고 /config와 /media/frigate 디렉터리를 만듭니다.' },
        { '@type': 'HowToStep', position: 2, name: '최소 설정 작성', text: '카메라 한 대만 있고 디텍터 블록이 없는 config.yml을 만들어 기본값으로 기동시키고 스트림을 확인합니다.' },
        { '@type': 'HowToStep', position: 3, name: '컨테이너 실행', text: 'shm_size를 명시하고 알맞은 장치를 전달해 Frigate를 실행합니다. Intel은 /dev/dri, NVIDIA는 GPU 런타임, Hailo는 /dev/hailo0입니다.' },
        { '@type': 'HowToStep', position: 4, name: '웹 UI에서 확인', text: 'Frigate 웹 UI를 열어 카메라 화면, 인식 FPS, 시스템 페이지의 추론 시간을 확인합니다.' },
        { '@type': 'HowToStep', position: 5, name: '실제 디텍터 추가', text: '하드웨어에 맞는 detectors 블록을 추가해 재시작하고 추론 시간이 공개값까지 내려가는지 확인합니다.' },
        { '@type': 'HowToStep', position: 6, name: 'Home Assistant 연동', text: 'config.yml에 MQTT 브로커를 설정하고 Home Assistant에 MQTT 통합을 추가한 뒤 Frigate 통합을 설치합니다.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate NVR이란 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate는 OpenCV와 TensorFlow를 사용해 IP 카메라 스트림에 대한 AI 객체 인식을 로컬에서 실행하는 오픈소스 네트워크 비디오 레코더입니다. 인식된 내용을 기준으로 클립을 녹화하고, 모든 인식 결과를 MQTT로 발행해 Home Assistant가 자동화할 수 있게 합니다.' } },
        { '@type': 'Question', name: '2026년에도 Frigate에 Google Coral TPU가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. Frigate의 하드웨어 문서는 소비 전력 요구가 유난히 빡빡한 경우를 제외하면 신규 설치에 Coral을 권장하지 않는다고 명시합니다. 권장 경로는 Intel 내장 GPU의 OpenVINO 디텍터, Hailo-8 모듈, 또는 기존 NVIDIA GPU의 ONNX 디텍터입니다.' } },
        { '@type': 'Question', name: 'Frigate의 어느 버전을 사용해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '2026년 6월 28일에 릴리스된 Frigate 0.17.2가 현재 안정 버전입니다. 0.18.0은 2026년 7월부터 베타 단계이며 세 번째 베타가 2026년 8월 8일에 나왔습니다.' } },
        { '@type': 'Question', name: 'Frigate에는 RAM이 얼마나 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '객체 인식과 녹화만 하면 8 GB로 여유 있게 동작합니다. 시맨틱 검색의 경우 Frigate는 최소 8 GB, 권장 16 GB 이상과 전용 GPU를 문서화하고 있으며 AVX 및 AVX2를 지원하는 CPU를 요구합니다.' } },
        { '@type': 'Question', name: '집 앞을 지나가는 사람 때문에 Frigate 알림이 계속 오는 이유는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '그것이 올바른 인식이기 때문입니다. 대지 안쪽 지면만 덮는 존을 그리고 review.alerts.required_zones를 그 존으로 지정한 뒤 loitering_time을 더하십시오. 존재 여부는 바운딩 박스의 하단 중앙점으로 판정됩니다.' } },
        { '@type': 'Question', name: '인터넷 연결 없이도 Frigate가 동작합니까?', acceptedAnswer: { '@type': 'Answer', text: '네. 인식, 녹화, MQTT, Home Assistant 자동화가 모두 LAN 안에서 동작합니다. 연결이 필요한 것은 원격 시청과 선택적인 클라우드 GenAI 제공자뿐입니다.' } },
        { '@type': 'Question', name: 'Frigate에서 존과 마스크는 무엇이 다릅니까?', acceptedAnswer: { '@type': 'Answer', text: '모션 마스크는 해당 영역에서 인식 자체를 실행하지 않게 합니다. 존은 인식을 평소대로 수행하되 required_zones를 통해 어떤 인식이 알림을 일으켜도 되는지만 제한합니다.' } },
        { '@type': 'Question', name: 'Frigate 서버 한 대로 카메라 몇 대를 감당할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '카메라 대수보다 추론 시간에 좌우됩니다. 초당 유효 인식 횟수는 대략 1000을 추론 시간(밀리초)으로 나눈 값이며 모든 카메라가 이를 나눠 씁니다.' } },
        { '@type': 'Question', name: '얼굴 인식이나 번호판 인식에 Frigate+가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 얼굴 인식과 번호판 인식은 구독 없이 로컬에서 동작합니다. Frigate+는 연 50달러이며 최대 12개의 파인튜닝 모델이 포함되고 추가 파인튜닝은 건당 5달러입니다.' } },
        { '@type': 'Question', name: 'Proxmox LXC 컨테이너에서 Frigate를 실행할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. Proxmox LXC는 명시적으로 지원되지 않습니다. 대신 QEMU 가상 머신을 쓰십시오. 내장 GPU, Coral, Hailo 모듈의 패스스루는 동작하는 듯 보이다가 지원할 수 없는 방식으로 실패할 수 있습니다.' } },
      ],
    },
  },
}
