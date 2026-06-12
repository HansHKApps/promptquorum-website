// Auto-generated from src/lib/local-llms/content.ts
// Slug: on-prem-air-gapped-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'On-Prem Air-Gapped Local LLMs: Isolated Deployment for Classified Environments',
      seoTitle: 'Air-Gapped Local LLM Deployment',
      intro: 'Air-gapped deployment means the LLM infrastructure is completely isolated from the internet. No internet connection, no external API calls, no data exfiltration risk. As of April 2026, this is standard for government, military, and financial institutions handling classified or highly sensitive data.',
      metaDescription: 'Air-gapped local LLM deployment: complete isolation architecture, network security, updates management, and classified data handling.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Air-gapped deployment means the LLM infrastructure is completely isolated from the internet. No internet connection, no external API calls, no data exfiltration risk. As of April 2026, this is standard for government, military, and financial institutions handling classified or highly sensitive data.**',
      audience: 'Engineers deploying local LLMs in production or enterprise environments',
      readTime: '12 min read',
      educationalLevel: 'Advanced',
      primaryTerm: 'air-gapped deployment',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is Air-Gapped?', anchor: '#what-is-air-gapped' },
        { label: 'Architecture Design', anchor: '#architecture' },
        { label: 'Network Isolation', anchor: '#network-isolation' },
        { label: 'Model and Data Management', anchor: '#model-management' },
        { label: 'Updates and Maintenance', anchor: '#updates' },
        { label: 'Security Considerations', anchor: '#security' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Air-gapped = completely isolated from internet. Zero network connectivity to external systems.',
            'Use case: Government (classified), military (war scenarios), finance (high-security), healthcare (HIPAA ultra-sensitive).',
            'Challenge: Cannot auto-update models, embeddings, or dependencies. Requires manual update procedures.',
            'Architecture: Dedicated hardware, encrypted storage, restricted user access, physical security.',
            '**Network isolation:** Firewalls, air-gap appliances, and network segmentation prevent any external communication.',
            '**Model management:** Transfer models via USB, secure media, or internal networks only; no cloud access.',
            '**Updates:** Manual process -- test updates offline first, then deploy via secure channels.',
            'As of April 2026, air-gapped is standard for government and defense contractors.',
          ],
        },
        whatIsAirGapped: {
          title: 'What Does Air-Gapped Mean?',
          content: [
            '**Air-gapped infrastructure has no network connection to the internet or any external system.** All data and computation stays on isolated hardware.',
            '**Absolute isolation:** No WiFi, no Ethernet to external networks, no USB connections to internet-connected devices.',
            '**Data never leaves:** Inference happens locally, results stay locally.',
            '**Updates are manual:** Cannot auto-download model updates. Updates require physical media (USB drive, SD card) or internal network transfer.',
          ],
        },
        architecture: {
          title: 'What Does Typical Air-Gapped Architecture Look Like?',
          content: [
            '**A single machine or small cluster, completely isolated, with restricted physical access.**',
          ],
          numberedItems: [
            '**Dedicated hardware:** Servers used only for LLM inference, nothing else.',
            '**Isolated network:** No connection to corporate network or internet. Separate VLAN at most.',
            '**Encrypted storage:** All model files, data, logs encrypted at rest.',
            '**Controlled access:** Only authorized personnel can access. Multi-factor authentication required.',
            '**Physical security:** Locked server room, surveillance, access logs.',
            '**No removable media:** USB ports disabled, CD/DVD drives removed.',
            '**Local monitoring:** Logs stay on-system, not sent to external monitoring services.',
          ],
        },
        networkIsolation: {
          title: 'How Do You Isolate Networks From External Connections?',
          content: [
            '**Isolation is enforced at multiple levels:**',
          ],
          items: [
            '**Physical:** Separate network hardware (switch, router) for air-gapped infrastructure.',
            '**Firewall:** Inbound and outbound traffic blocked. No exceptions for cloud services, NTP, DNS to external servers.',
            '**Software:** Host-level firewalls (iptables, Windows Firewall) as secondary control.',
            '**Monitoring:** Network traffic audited. Any attempt to connect externally is logged and flagged.',
          ],
        },
        modelManagement: {
          title: 'How Do You Manage Models in Air-Gapped Environments?',
          content: [
            '**Model updates are manual, requiring physical media transfer or internal secure processes.**',
          ],
          numberedItems: [
            'Download model on internet-connected machine (separate, non-classified environment).',
            'Verify model integrity (checksum, digital signature).',
            'Transfer to air-gapped system via encrypted USB drive or internal file server.',
            'Validation: Run tests to ensure model integrity was not compromised during transfer.',
            'Deployment: Load model into inference engine.',
            'Documentation: Log which models are deployed, versions, dates.',
          ],
        },
        updates: {
          title: 'How Do You Handle Updates and Patching?',
          content: [
            '**Security updates and model updates are manual:**',
          ],
          items: [
            '**Model updates:** Follow process above. Schedule updates quarterly or annually.',
            '**OS patches:** Test on isolated staging environment first, then deploy to production.',
            '**Dependencies:** Evaluate new versions carefully. Air-gapped systems run older versions longer.',
            '**No auto-updates:** Disable automatic updates entirely. All updates are controlled, documented, audited.',
          ],
        },
        security: {
          title: 'How Do You Ensure Security in Air-Gapped Systems?',
          content: [
            '**Air-gapped inherently more secure (no external attacks), but new risks emerge:**',
          ],
          items: [
            '**Insider threats:** Employees with access could copy data via USB. Require two-person integrity.',
            '**Supply chain attacks:** Compromised models or dependencies during transfer. Verify checksums, digital signatures.',
            '**Physical theft:** Models and data worth millions. Require locked room, surveillance, intrusion detection.',
            '**Social engineering:** "Trust me, I need to update the model." Require formal change control processes.',
            '**Logging gaps:** If logs are not audited, nobody detects insider activity. Require external audit of logs regularly.',
          ],
        },
        commonMistakes: {
          title: 'Common Air-Gapped Deployment Mistakes',
          items: [
            '**Incomplete isolation:** Leaving one port open, one wireless card enabled, or allowing USB devices defeats air-gapping. Audit rigorously.',
            '**No change control:** Model updates happen informally, no documentation. Leads to loss of knowledge about which version is deployed.',
            '**Poor backup strategy:** Air-gapped systems need redundant storage and off-site backups. But backups themselves must be air-gapped.',
            '**Insufficient logging:** Air-gapped systems require comprehensive auditing (who accessed what, when). Without logs, breaches go undetected.',
            '**Trusting physical security alone:** Security requires multiple layers: isolation, encryption, access control, auditing, not just locked doors.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Air-Gapped Systems',
          faqs: [
            {
              q: 'How do we update models in an air-gapped system?',
              a: 'Manually via encrypted USB, or via an internal secure network isolated from the internet. All updates require change control approval and audit trails.',
            },
            {
              q: 'Can we use cloud backups for air-gapped systems?',
              a: 'No. Cloud backups require internet connection (defeating air-gapping). Use physical backups (encrypted hard drives) stored in separate secure facility.',
            },
            {
              q: 'Is air-gapped truly secure against all attacks?',
              a: 'Mostly, but insider threats remain. Air-gapped is secure against remote attacks, but physical access or insider access can compromise it.',
            },
            {
              q: 'How expensive is air-gapped deployment?',
              a: 'Hardware costs $50k-500k (not much more than regular on-prem). Operational costs (security, auditing, training) are 5-10× higher due to manual processes.',
            },
            {
              q: 'Can we use standard tools (Ollama, vLLM) in air-gapped environments?',
              a: 'Yes. Both tools work without internet. Deploy once, then no internet connectivity needed. Ensure all dependencies are installed offline.',
            },
            {
              q: 'What if we need GDPR compliance but don\'t need full air-gapping?',
              a: 'For workloads where air-gapping isn\'t required but GDPR is, [EU-compliant cloud GPU options →](/local-llms/eu-cloud-gpu-gdpr-2026) (Hetzner, Scaleway, OVHcloud) offer EU data residency without isolation complexity.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Why Enterprises Use Local LLMs](/local-llms/why-enterprises-use-local-llms) -- Business case for on-prem AI.',
            '[Enterprise Compliance Local LLMs](/local-llms/enterprise-compliance-local-llms) -- Regulatory requirements.',
            '[Scaling Local LLMs Enterprise](/local-llms/scaling-local-llms-enterprise) -- Production deployment beyond single machine.',
            '[Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist) -- 12-step security verification.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'NIST Cybersecurity Framework -- nist.gov/cyberframework',
            'DoD Data Management -- defense.gov/News/Releases/',
            'Air-Gap Security Guidelines -- ietf.org (RFC documents on network isolation)',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Air-Gapped Local LLM Deployment',
        'description': 'Air-gapped local LLM deployment: complete isolation architecture, network security, updates management, and classified data handling.',
        'url': 'https://www.promptquorum.com/local-llms/on-prem-air-gapped-local-llm',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do we update models in an air-gapped system?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Manually via encrypted USB, or via an internal secure network isolated from the internet. All updates require change control approval and audit trails.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can we use cloud backups for air-gapped systems?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Cloud backups require internet connection (defeating air-gapping). Use physical backups (encrypted hard drives) stored in separate secure facility.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is air-gapped truly secure against all attacks?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Mostly, but insider threats remain. Air-gapped is secure against remote attacks, but physical access or insider access can compromise it.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How expensive is air-gapped deployment?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Hardware costs $50k-500k (not much more than regular on-prem). Operational costs (security, auditing, training) are 5-10× higher due to manual processes.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can we use standard tools (Ollama, vLLM) in air-gapped environments?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Both tools work without internet. Deploy once, then no internet connectivity needed. Ensure all dependencies are installed offline.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Air-Gapped Local LLM Deployment',
        'numberOfItems': 3,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Complete Network Isolation',
            'description': 'Air-gapped infrastructure has no network connection to the internet or any external system, ensuring zero external access.',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Manual Update Procedures',
            'description': 'Model updates require physical media (USB drive) or internal secure networks only; no cloud access.',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Enhanced Security',
            'description': 'Protects classified data in government, military, and financial environments requiring maximum data protection.',
          },
        ],
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'On-Prem Air-Gapped Local LLMs: Despliegue Aislado para Entornos Clasificados',
      seoTitle: 'Despliegue de LLM Local con Air-Gap',
      intro: 'El despliegue air-gapped significa que la infraestructura del LLM está completamente aislada de internet. Sin conexión a internet, sin llamadas a API externas, sin riesgo de exfiltración de datos. A partir de abril de 2026, esto es el estándar para gobiernos, militares e instituciones financieras que manejan datos clasificados o altamente sensibles.',
      metaDescription: 'Despliegue de LLM local con air-gap: arquitectura de aislamiento completo, seguridad de red, gestión de actualizaciones y manejo de datos clasificados.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**El despliegue air-gapped significa que la infraestructura del LLM está completamente aislada de internet. Sin conexión a internet, sin llamadas a API externas, sin riesgo de exfiltración de datos. A partir de abril de 2026, esto es el estándar para gobiernos, militares e instituciones financieras que manejan datos clasificados o altamente sensibles.**',
      audience: 'Ingenieros que despliegan LLM locales en entornos de producción o empresariales',
      readTime: '12 min de lectura',
      educationalLevel: 'Advanced',
      primaryTerm: 'despliegue air-gapped',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: '¿Qué es air-gapped?', anchor: '#what-is-air-gapped' },
        { label: 'Diseño de arquitectura', anchor: '#architecture' },
        { label: 'Aislamiento de red', anchor: '#network-isolation' },
        { label: 'Gestión de modelos y datos', anchor: '#model-management' },
        { label: 'Actualizaciones y mantenimiento', anchor: '#updates' },
        { label: 'Consideraciones de seguridad', anchor: '#security' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Lecturas relacionadas', anchor: '#related-reading' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Air-gapped = completamente aislado de internet. Cero conectividad de red con sistemas externos.',
            'Caso de uso: gobierno (clasificado), militar (escenarios de guerra), finanzas (alta seguridad), salud (HIPAA ultrasensible).',
            'Desafío: no se pueden actualizar automáticamente modelos, embeddings ni dependencias. Requiere procedimientos manuales.',
            'Arquitectura: hardware dedicado, almacenamiento cifrado, acceso de usuario restringido, seguridad física.',
            '**Aislamiento de red:** firewalls, appliances air-gap y segmentación de red previenen cualquier comunicación externa.',
            '**Gestión de modelos:** transfiere modelos solo por USB, medios seguros o redes internas; sin acceso a la nube.',
            '**Actualizaciones:** proceso manual -- prueba las actualizaciones offline primero, luego despliégalas por canales seguros.',
            'A partir de abril de 2026, air-gapped es el estándar para gobiernos y contratistas de defensa.',
          ],
        },
        whatIsAirGapped: {
          title: '¿Qué significa air-gapped?',
          content: [
            '**La infraestructura air-gapped no tiene conexión de red a internet ni a ningún sistema externo.** Todos los datos y la computación permanecen en hardware aislado.',
            '**Aislamiento absoluto:** sin WiFi, sin Ethernet a redes externas, sin conexiones USB a dispositivos conectados a internet.',
            '**Los datos nunca salen:** la inferencia ocurre localmente, los resultados se quedan localmente.',
            '**Las actualizaciones son manuales:** no se pueden descargar actualizaciones de modelos automáticamente. Las actualizaciones requieren medios físicos (USB, tarjeta SD) o transferencia por red interna.',
          ],
        },
        architecture: {
          title: '¿Cómo es una arquitectura air-gapped típica?',
          content: [
            '**Una sola máquina o un pequeño clúster, completamente aislado, con acceso físico restringido.**',
          ],
          numberedItems: [
            '**Hardware dedicado:** servidores usados solo para inferencia de LLM, nada más.',
            '**Red aislada:** sin conexión a la red corporativa ni a internet. Como máximo, una VLAN separada.',
            '**Almacenamiento cifrado:** todos los archivos de modelo, datos y logs cifrados en reposo.',
            '**Acceso controlado:** solo el personal autorizado puede acceder. Se requiere autenticación multifactor.',
            '**Seguridad física:** sala de servidores cerrada con llave, vigilancia, registros de acceso.',
            '**Sin medios extraíbles:** puertos USB deshabilitados, unidades CD/DVD eliminadas.',
            '**Monitoreo local:** los logs permanecen en el sistema, no se envían a servicios de monitoreo externos.',
          ],
        },
        networkIsolation: {
          title: '¿Cómo se aíslan las redes de las conexiones externas?',
          content: [
            '**El aislamiento se aplica en múltiples niveles:**',
          ],
          items: [
            '**Físico:** hardware de red separado (switch, router) para la infraestructura air-gapped.',
            '**Firewall:** tráfico entrante y saliente bloqueado. Sin excepciones para servicios en la nube, NTP ni DNS hacia servidores externos.',
            '**Software:** firewalls a nivel de host (iptables, Windows Firewall) como control secundario.',
            '**Monitoreo:** el tráfico de red se audita. Cualquier intento de conexión externa se registra y marca.',
          ],
        },
        modelManagement: {
          title: '¿Cómo se gestionan los modelos en entornos air-gapped?',
          content: [
            '**Las actualizaciones de modelos son manuales y requieren transferencia de medios físicos o procesos internos seguros.**',
          ],
          numberedItems: [
            'Descarga el modelo en una máquina conectada a internet (entorno separado y no clasificado).',
            'Verifica la integridad del modelo (checksum, firma digital).',
            'Transfiere al sistema air-gapped mediante USB cifrado o servidor de archivos interno.',
            'Validación: ejecuta pruebas para asegurar que la integridad del modelo no se comprometió durante la transferencia.',
            'Despliegue: carga el modelo en el motor de inferencia.',
            'Documentación: registra qué modelos se despliegan, versiones y fechas.',
          ],
        },
        updates: {
          title: '¿Cómo se gestionan las actualizaciones y los parches?',
          content: [
            '**Las actualizaciones de seguridad y de modelos son manuales:**',
          ],
          items: [
            '**Actualizaciones de modelos:** sigue el proceso anterior. Programa actualizaciones trimestralmente o anualmente.',
            '**Parches del SO:** prueba primero en un entorno de staging aislado, luego despliega en producción.',
            '**Dependencias:** evalúa las versiones nuevas con cuidado. Los sistemas air-gapped ejecutan versiones más antiguas por más tiempo.',
            '**Sin actualizaciones automáticas:** deshabilita las actualizaciones automáticas por completo. Todas las actualizaciones son controladas, documentadas y auditadas.',
          ],
        },
        security: {
          title: '¿Cómo se garantiza la seguridad en sistemas air-gapped?',
          content: [
            '**Air-gapped es inherentemente más seguro (sin ataques externos), pero surgen nuevos riesgos:**',
          ],
          items: [
            '**Amenazas internas:** los empleados con acceso podrían copiar datos por USB. Se requiere integridad de dos personas.',
            '**Ataques a la cadena de suministro:** modelos o dependencias comprometidos durante la transferencia. Verifica checksums y firmas digitales.',
            '**Robo físico:** modelos y datos que valen millones. Se requieren sala cerrada, vigilancia y detección de intrusos.',
            '**Ingeniería social:** "Confía en mí, necesito actualizar el modelo." Se requieren procesos formales de control de cambios.',
            '**Brechas de registro:** si los logs no se auditan, nadie detecta la actividad interna. Se requiere auditoría externa regular de logs.',
          ],
        },
        commonMistakes: {
          title: 'Errores comunes en el despliegue air-gapped',
          items: [
            '**Aislamiento incompleto:** dejar un puerto abierto, una tarjeta inalámbrica habilitada o permitir dispositivos USB anula el air-gapping. Audita rigurosamente.',
            '**Sin control de cambios:** las actualizaciones de modelos ocurren de forma informal, sin documentación. Lleva a la pérdida de conocimiento sobre qué versión está desplegada.',
            '**Mala estrategia de respaldo:** los sistemas air-gapped necesitan almacenamiento redundante y copias de seguridad fuera del sitio. Pero las copias de seguridad también deben ser air-gapped.',
            '**Registro insuficiente:** los sistemas air-gapped requieren auditoría exhaustiva (quién accedió a qué y cuándo). Sin logs, las brechas no se detectan.',
            '**Confiar solo en la seguridad física:** la seguridad requiere múltiples capas: aislamiento, cifrado, control de acceso y auditoría, no solo puertas con llave.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Preguntas frecuentes sobre sistemas air-gapped',
          faqs: [
            {
              q: '¿Cómo actualizamos los modelos en un sistema air-gapped?',
              a: 'De forma manual mediante USB cifrado, o a través de una red segura interna aislada de internet. Todas las actualizaciones requieren aprobación del control de cambios y registros de auditoría.',
            },
            {
              q: '¿Podemos usar copias de seguridad en la nube para sistemas air-gapped?',
              a: 'No. Las copias de seguridad en la nube requieren conexión a internet (lo que anula el air-gapping). Usa copias de seguridad físicas (discos duros cifrados) almacenadas en una instalación segura separada.',
            },
            {
              q: '¿Es air-gapped realmente seguro contra todos los ataques?',
              a: 'En su mayoría, pero las amenazas internas persisten. Air-gapped es seguro contra ataques remotos, pero el acceso físico o el acceso interno pueden comprometerlo.',
            },
            {
              q: '¿Cuánto cuesta un despliegue air-gapped?',
              a: 'El hardware cuesta entre $50k y $500k (no mucho más que un despliegue on-prem regular). Los costos operativos (seguridad, auditoría, formación) son entre 5 y 10 veces más altos debido a los procesos manuales.',
            },
            {
              q: '¿Podemos usar herramientas estándar (Ollama, vLLM) en entornos air-gapped?',
              a: 'Sí. Ambas herramientas funcionan sin internet. Se despliegan una vez y no necesitan conectividad a internet. Asegúrate de que todas las dependencias estén instaladas offline.',
            },
            {
              q: '¿Qué pasa si necesitamos cumplir con el RGPD pero no necesitamos air-gapping completo?',
              a: 'Para cargas de trabajo donde el air-gapping no es necesario pero sí el RGPD, las [opciones de GPU en la nube conformes con la UE →](/es/local-llms/eu-cloud-gpu-gdpr-2026) (Hetzner, Scaleway, OVHcloud) ofrecen residencia de datos en la UE sin la complejidad del aislamiento.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Por qué las empresas usan LLM locales](/es/local-llms/why-enterprises-use-local-llms) -- Caso de negocio para IA on-prem.',
            '[Cumplimiento normativo para LLM locales en empresas](/es/local-llms/enterprise-compliance-local-llms) -- Requisitos regulatorios.',
            '[Escalado de LLM locales en empresas](/es/local-llms/scaling-local-llms-enterprise) -- Despliegue en producción más allá de una sola máquina.',
            '[Lista de verificación de seguridad y privacidad para LLM locales](/es/local-llms/local-llm-security-privacy-checklist) -- Verificación de seguridad en 12 pasos.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            'NIST Cybersecurity Framework -- nist.gov/cyberframework',
            'DoD Data Management -- defense.gov/News/Releases/',
            'Guías de seguridad air-gap -- ietf.org (documentos RFC sobre aislamiento de red)',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Despliegue de LLM Local con Air-Gap',
        'description': 'Despliegue de LLM local con air-gap: arquitectura de aislamiento completo, seguridad de red, gestión de actualizaciones y manejo de datos clasificados.',
        'url': 'https://www.promptquorum.com/es/local-llms/on-prem-air-gapped-local-llm',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cómo actualizamos los modelos en un sistema air-gapped?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'De forma manual mediante USB cifrado, o a través de una red segura interna aislada de internet. Todas las actualizaciones requieren aprobación del control de cambios y registros de auditoría.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Podemos usar copias de seguridad en la nube para sistemas air-gapped?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Las copias de seguridad en la nube requieren conexión a internet (lo que anula el air-gapping). Usa copias de seguridad físicas (discos duros cifrados) almacenadas en una instalación segura separada.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Es air-gapped realmente seguro contra todos los ataques?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En su mayoría, pero las amenazas internas persisten. Air-gapped es seguro contra ataques remotos, pero el acceso físico o el acceso interno pueden comprometerlo.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuánto cuesta un despliegue air-gapped?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El hardware cuesta entre $50k y $500k (no mucho más que un despliegue on-prem regular). Los costos operativos (seguridad, auditoría, formación) son entre 5 y 10 veces más altos debido a los procesos manuales.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Podemos usar herramientas estándar (Ollama, vLLM) en entornos air-gapped?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Ambas herramientas funcionan sin internet. Se despliegan una vez y no necesitan conectividad a internet. Asegúrate de que todas las dependencias estén instaladas offline.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Despliegue de LLM Local con Air-Gap',
        'numberOfItems': 3,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Aislamiento de red completo',
            'description': 'La infraestructura air-gapped no tiene conexión de red a internet ni a ningún sistema externo, garantizando cero acceso externo.',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Procedimientos de actualización manual',
            'description': 'Las actualizaciones de modelos requieren medios físicos (USB) o solo redes internas seguras; sin acceso a la nube.',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Seguridad mejorada',
            'description': 'Protege datos clasificados en entornos gubernamentales, militares y financieros que requieren la máxima protección de datos.',
          },
        ],
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'نماذج LLM المحلية المعزولة في الموقع (Air-Gapped): نشر معزول للبيئات المصنّفة',
      seoTitle: 'LLM محلي معزول (Air-Gap): نشر في بيئات مصنّفة',
      intro: 'النشر المعزول (air-gapped) يعني أن بنية LLM التحتية معزولة تمامًا عن الإنترنت. بلا اتصال بالإنترنت، بلا استدعاءات API خارجية، بلا خطر تسريب البيانات. اعتبارًا من أبريل 2026، هذا هو المعيار للحكومات والجهات العسكرية والمؤسسات المالية التي تتعامل مع بيانات مصنّفة أو شديدة الحساسية.',
      metaDescription: 'النشر المعزول يقطع كل اتصال خارجي للبيانات المصنّفة. بنية عزل كاملة، أمان الشبكة وإدارة التحديثات بلا إنترنت للحكومات والمؤسسات المالية.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**النشر المعزول (air-gapped) يعني أن بنية LLM التحتية معزولة تمامًا عن الإنترنت. بلا اتصال بالإنترنت، بلا استدعاءات API خارجية، بلا خطر تسريب البيانات. اعتبارًا من أبريل 2026، هذا هو المعيار للحكومات والجهات العسكرية والمؤسسات المالية التي تتعامل مع بيانات مصنّفة أو شديدة الحساسية.**',
      audience: 'مهندسون ينشرون نماذج LLM محلية في بيئات إنتاج أو مؤسسية',
      readTime: '12 دقيقة قراءة',
      educationalLevel: 'Advanced',
      primaryTerm: 'النشر المعزول',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'ما هو النشر المعزول؟', anchor: '#what-is-air-gapped' },
        { label: 'تصميم البنية', anchor: '#architecture' },
        { label: 'عزل الشبكة', anchor: '#network-isolation' },
        { label: 'إدارة النماذج والبيانات', anchor: '#model-management' },
        { label: 'التحديثات والصيانة', anchor: '#updates' },
        { label: 'اعتبارات الأمان', anchor: '#security' },
        { label: 'أخطاء شائعة', anchor: '#common-mistakes' },
        { label: 'قراءات ذات صلة', anchor: '#related-reading' },
        { label: 'المصادر', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'معزول = منعزل تمامًا عن الإنترنت. صفر اتصال شبكي بالأنظمة الخارجية.',
            'حالة الاستخدام: الحكومة (مصنّف)، العسكرية (سيناريوهات قتالية)، المالية (أمان عالٍ)، الصحة (بيانات شديدة الحساسية).',
            'التحدي: لا يمكن تحديث النماذج أو embeddings أو التبعيات تلقائيًا. يتطلب إجراءات يدوية.',
            'البنية: عتاد مخصص، تخزين مشفّر، وصول مستخدم مقيّد، أمان مادي.',
            '**عزل الشبكة:** جدران الحماية وأجهزة العزل وتجزئة الشبكة تمنع أي اتصال خارجي.',
            '**إدارة النماذج:** انقل النماذج فقط عبر USB أو وسائط آمنة أو شبكات داخلية؛ بلا وصول للسحابة.',
            '**التحديثات:** عملية يدوية -- اختبر التحديثات دون اتصال أولًا، ثم انشرها عبر قنوات آمنة.',
            'اعتبارًا من أبريل 2026، النشر المعزول هو المعيار للحكومات ومقاولي الدفاع.',
          ],
        },
        whatIsAirGapped: {
          title: 'ماذا يعني النشر المعزول؟',
          content: [
            '**البنية التحتية المعزولة بلا اتصال شبكي بالإنترنت أو بأي نظام خارجي.** تبقى جميع البيانات والحوسبة على عتاد معزول.',
            '**عزل مطلق:** بلا WiFi، بلا Ethernet لشبكات خارجية، بلا اتصالات USB بأجهزة موصولة بالإنترنت.',
            '**البيانات لا تغادر أبدًا:** يحدث الاستدلال محليًا، وتبقى النتائج محليًا.',
            '**التحديثات يدوية:** لا يمكن تنزيل تحديثات النماذج تلقائيًا. تتطلب التحديثات وسائط مادية (USB، بطاقة SD) أو نقلًا عبر شبكة داخلية.',
          ],
        },
        architecture: {
          title: 'كيف تبدو البنية المعزولة النموذجية؟',
          content: [
            '**جهاز واحد أو عنقود صغير، معزول تمامًا، بوصول مادي مقيّد.**',
          ],
          numberedItems: [
            '**عتاد مخصص:** خوادم تُستخدم فقط لاستدلال LLM، لا شيء آخر.',
            '**شبكة معزولة:** بلا اتصال بالشبكة المؤسسية أو الإنترنت. كحد أقصى، VLAN منفصلة.',
            '**تخزين مشفّر:** جميع ملفات النموذج والبيانات والسجلات مشفّرة أثناء السكون.',
            '**وصول مُتحكَّم به:** يمكن للموظفين المخوّلين فقط الوصول. مطلوب مصادقة متعددة العوامل.',
            '**أمان مادي:** غرفة خوادم مقفلة، مراقبة، سجلات وصول.',
            '**بلا وسائط قابلة للإزالة:** منافذ USB معطّلة، محركات CD/DVD مُزالة.',
            '**مراقبة محلية:** تبقى السجلات على النظام، لا تُرسل لخدمات مراقبة خارجية.',
          ],
        },
        networkIsolation: {
          title: 'كيف تُعزَل الشبكات عن الاتصالات الخارجية؟',
          content: [
            '**يُطبَّق العزل على مستويات متعددة:**',
          ],
          items: [
            '**مادي:** عتاد شبكة منفصل (مبدّل، راوتر) للبنية التحتية المعزولة.',
            '**جدار الحماية:** حركة المرور الواردة والصادرة محظورة. بلا استثناءات لخدمات السحابة أو NTP أو DNS نحو خوادم خارجية.',
            '**برمجي:** جدران حماية على مستوى المضيف (iptables، Windows Firewall) كضابط ثانوي.',
            '**المراقبة:** تُدقَّق حركة الشبكة. أي محاولة اتصال خارجي تُسجَّل وتُوسَم.',
          ],
        },
        modelManagement: {
          title: 'كيف تُدار النماذج في البيئات المعزولة؟',
          content: [
            '**تحديثات النماذج يدوية وتتطلب نقل وسائط مادية أو عمليات داخلية آمنة.**',
          ],
          numberedItems: [
            'نزّل النموذج على جهاز موصول بالإنترنت (بيئة منفصلة وغير مصنّفة).',
            'تحقق من سلامة النموذج (checksum، توقيع رقمي).',
            'انقل إلى النظام المعزول عبر USB مشفّر أو خادم ملفات داخلي.',
            'التحقق: شغّل اختبارات لضمان عدم المساس بسلامة النموذج أثناء النقل.',
            'النشر: حمّل النموذج في محرك الاستدلال.',
            'التوثيق: سجّل أي نماذج تُنشَر وإصداراتها وتواريخها.',
          ],
        },
        updates: {
          title: 'كيف تُدار التحديثات والتصحيحات؟',
          content: [
            '**تحديثات الأمان والنماذج يدوية:**',
          ],
          items: [
            '**تحديثات النماذج:** اتبع العملية السابقة. جدول التحديثات ربع سنويًا أو سنويًا.',
            '**تصحيحات نظام التشغيل:** اختبر أولًا في بيئة staging معزولة، ثم انشر في الإنتاج.',
            '**التبعيات:** قيّم الإصدارات الجديدة بعناية. تشغّل الأنظمة المعزولة إصدارات أقدم لمدة أطول.',
            '**بلا تحديثات تلقائية:** عطّل التحديثات التلقائية بالكامل. جميع التحديثات مُتحكَّم بها وموثّقة ومُدقَّقة.',
          ],
        },
        security: {
          title: 'كيف يُضمَن الأمان في الأنظمة المعزولة؟',
          content: [
            '**النشر المعزول أكثر أمانًا بطبيعته (بلا هجمات خارجية)، لكن تنشأ مخاطر جديدة:**',
          ],
          items: [
            '**التهديدات الداخلية:** الموظفون ذوو الوصول قد ينسخون البيانات عبر USB. مطلوب تكامل من شخصين.',
            '**هجمات سلسلة التوريد:** نماذج أو تبعيات مخترقة أثناء النقل. تحقق من checksums والتواقيع الرقمية.',
            '**السرقة المادية:** نماذج وبيانات بقيمة ملايين. مطلوب غرفة مقفلة ومراقبة وكشف اختراق.',
            '**الهندسة الاجتماعية:** "ثق بي، أحتاج لتحديث النموذج." مطلوب عمليات رسمية لضبط التغيير.',
            '**ثغرات التسجيل:** إذا لم تُدقَّق السجلات، لا يكتشف أحد النشاط الداخلي. مطلوب تدقيق خارجي منتظم للسجلات.',
          ],
        },
        commonMistakes: {
          title: 'أخطاء شائعة في النشر المعزول',
          items: [
            '**عزل غير كامل:** ترك منفذ مفتوح أو بطاقة لاسلكية مفعّلة أو السماح بأجهزة USB يبطل العزل. دقّق بصرامة.',
            '**بلا ضبط للتغيير:** تحديثات النماذج تحدث بشكل غير رسمي، بلا توثيق. يؤدي لفقدان المعرفة بالإصدار المنشور.',
            '**استراتيجية نسخ احتياطي سيئة:** تحتاج الأنظمة المعزولة لتخزين مكرّر ونسخ احتياطية خارج الموقع. لكن النسخ الاحتياطية يجب أن تكون معزولة أيضًا.',
            '**تسجيل غير كافٍ:** تتطلب الأنظمة المعزولة تدقيقًا شاملًا (من وصل إلى ماذا ومتى). بلا سجلات، لا تُكتشف الاختراقات.',
            '**الاعتماد على الأمان المادي وحده:** يتطلب الأمان طبقات متعددة: عزل، تشفير، ضبط وصول، وتدقيق، لا مجرد أبواب مقفلة.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'الأسئلة الشائعة حول الأنظمة المعزولة',
          faqs: [
            {
              q: 'كيف نحدّث النماذج في نظام معزول؟',
              a: 'يدويًا عبر USB مشفّر، أو عبر شبكة داخلية آمنة معزولة عن الإنترنت. تتطلب جميع التحديثات موافقة ضبط التغيير وسجلات تدقيق.',
            },
            {
              q: 'هل يمكننا استخدام النسخ الاحتياطية السحابية للأنظمة المعزولة؟',
              a: 'لا. تتطلب النسخ الاحتياطية السحابية اتصالًا بالإنترنت (ما يبطل العزل). استخدم نسخًا احتياطية مادية (أقراص صلبة مشفّرة) مخزّنة في منشأة آمنة منفصلة.',
            },
            {
              q: 'هل النشر المعزول آمن فعلًا ضد جميع الهجمات؟',
              a: 'في معظمه، لكن التهديدات الداخلية تستمر. النشر المعزول آمن ضد الهجمات عن بُعد، لكن الوصول المادي أو الداخلي قد يخترقه.',
            },
            {
              q: 'كم يكلّف النشر المعزول؟',
              a: 'يكلّف العتاد بين 50 ألف و500 ألف دولار (ليس أكثر بكثير من نشر عادي في الموقع). التكاليف التشغيلية (أمان، تدقيق، تدريب) أعلى بـ 5 إلى 10 أضعاف بسبب العمليات اليدوية.',
            },
            {
              q: 'هل يمكننا استخدام أدوات قياسية (Ollama، vLLM) في البيئات المعزولة؟',
              a: 'نعم. كلتا الأداتين تعملان دون إنترنت. تُنشَران مرة واحدة ولا تحتاجان لاتصال بالإنترنت. تأكد من تثبيت جميع التبعيات دون اتصال.',
            },
            {
              q: 'ماذا لو احتجنا الامتثال للوائح حماية البيانات لكن لا نحتاج عزلًا كاملًا؟',
              a: 'لأحمال العمل التي لا تحتاج عزلًا لكنها تحتاج امتثالًا لحماية البيانات، توفّر [خيارات GPU السحابية الممتثلة لحماية البيانات →](/ar/local-llms/eu-cloud-gpu-gdpr-2026) إقامة بيانات إقليمية دون تعقيد العزل.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[لماذا تستخدم الشركات نماذج LLM المحلية](/ar/local-llms/why-enterprises-use-local-llms) -- مبرر الأعمال للذكاء الاصطناعي في الموقع.',
            '[الامتثال التنظيمي لنماذج LLM المحلية في الشركات](/ar/local-llms/enterprise-compliance-local-llms) -- المتطلبات التنظيمية.',
            '[توسيع نماذج LLM المحلية في الشركات](/ar/local-llms/scaling-local-llms-enterprise) -- النشر الإنتاجي بما يتجاوز جهازًا واحدًا.',
            '[قائمة تحقق الأمان والخصوصية لنماذج LLM المحلية](/ar/local-llms/local-llm-security-privacy-checklist) -- تحقق أمني من 12 خطوة.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            'NIST Cybersecurity Framework -- nist.gov/cyberframework',
            'DoD Data Management -- defense.gov/News/Releases/',
            'أدلة أمان العزل -- ietf.org (مستندات RFC حول عزل الشبكة)',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'نشر LLM محلي معزول (Air-Gap)',
        'description': 'نشر LLM محلي معزول: بنية عزل كاملة، أمان الشبكة، إدارة التحديثات، والتعامل مع البيانات المصنّفة.',
        'url': 'https://www.promptquorum.com/ar/local-llms/on-prem-air-gapped-local-llm',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'كيف نحدّث النماذج في نظام معزول؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يدويًا عبر USB مشفّر، أو عبر شبكة داخلية آمنة معزولة عن الإنترنت. تتطلب جميع التحديثات موافقة ضبط التغيير وسجلات تدقيق.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يمكننا استخدام النسخ الاحتياطية السحابية للأنظمة المعزولة؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'لا. تتطلب النسخ الاحتياطية السحابية اتصالًا بالإنترنت (ما يبطل العزل). استخدم نسخًا احتياطية مادية (أقراص صلبة مشفّرة) مخزّنة في منشأة آمنة منفصلة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل النشر المعزول آمن فعلًا ضد جميع الهجمات؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'في معظمه، لكن التهديدات الداخلية تستمر. النشر المعزول آمن ضد الهجمات عن بُعد، لكن الوصول المادي أو الداخلي قد يخترقه.',
            },
          },
          {
            '@type': 'Question',
            'name': 'كم يكلّف النشر المعزول؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يكلّف العتاد بين 50 ألف و500 ألف دولار (ليس أكثر بكثير من نشر عادي في الموقع). التكاليف التشغيلية (أمان، تدقيق، تدريب) أعلى بـ 5 إلى 10 أضعاف بسبب العمليات اليدوية.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يمكننا استخدام أدوات قياسية (Ollama، vLLM) في البيئات المعزولة؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. كلتا الأداتين تعملان دون إنترنت. تُنشَران مرة واحدة ولا تحتاجان لاتصال بالإنترنت. تأكد من تثبيت جميع التبعيات دون اتصال.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'نشر LLM محلي معزول (Air-Gap)',
        'numberOfItems': 3,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'عزل شبكة كامل',
            'description': 'البنية التحتية المعزولة بلا اتصال شبكي بالإنترنت أو بأي نظام خارجي، ما يضمن صفر وصول خارجي.',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'إجراءات تحديث يدوي',
            'description': 'تتطلب تحديثات النماذج وسائط مادية (USB) أو شبكات داخلية آمنة فقط؛ بلا وصول للسحابة.',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'أمان مُعزَّز',
            'description': 'يحمي البيانات المصنّفة في البيئات الحكومية والعسكرية والمالية التي تتطلب أقصى حماية للبيانات.',
          },
        ],
      },
    },
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'LLMs Locais On-Prem Air-Gapped: Implantação Isolada para Ambientes Classificados',
      seoTitle: 'Implantação de LLM Local com Air-Gap',
      intro: 'A implantação air-gapped significa que a infraestrutura do LLM está completamente isolada da internet. Sem conexão à internet, sem chamadas a APIs externas, sem risco de exfiltração de dados. Em abril de 2026, este é o padrão para governos, forças armadas e instituições financeiras que lidam com dados classificados ou altamente sensíveis. No Brasil, organizações sujeitas à LGPD que processam dados sensíveis (saúde, finanças, dados pessoais de alto risco) se beneficiam especialmente de implantações air-gapped para atender às exigências da ANPD.',
      metaDescription: 'Implantação de LLM local com air-gap: arquitetura de isolamento completo, segurança de rede, gestão de atualizações e tratamento de dados classificados.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**A implantação air-gapped significa que a infraestrutura do LLM está completamente isolada da internet. Sem conexão à internet, sem chamadas a APIs externas, sem risco de exfiltração de dados. Em abril de 2026, este é o padrão para governos, forças armadas e instituições financeiras que lidam com dados classificados ou altamente sensíveis.**',
      audience: 'Engenheiros que implantam LLMs locais em ambientes de produção ou empresariais',
      readTime: '12 min de leitura',
      educationalLevel: 'Advanced',
      primaryTerm: 'implantação air-gapped',
      toc: [
        { label: 'Pontos principais', anchor: '#key-takeaways' },
        { label: 'O que é air-gapped?', anchor: '#what-is-air-gapped' },
        { label: 'Design de arquitetura', anchor: '#architecture' },
        { label: 'Isolamento de rede', anchor: '#network-isolation' },
        { label: 'Gestão de modelos e dados', anchor: '#model-management' },
        { label: 'Atualizações e manutenção', anchor: '#updates' },
        { label: 'Considerações de segurança', anchor: '#security' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Leituras relacionadas', anchor: '#related-reading' },
        { label: 'Fontes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Air-gapped = completamente isolado da internet. Zero conectividade de rede com sistemas externos.',
            'Caso de uso: governo (classificado), forças armadas (cenários de combate), finanças (alta segurança), saúde (HIPAA/CFM ultrassensível), LGPD (dados de alto risco no Brasil).',
            'Desafio: não é possível atualizar automaticamente modelos, embeddings ou dependências. Requer procedimentos manuais.',
            'Arquitetura: hardware dedicado, armazenamento criptografado, acesso restrito de usuários, segurança física.',
            '**Isolamento de rede:** firewalls, appliances air-gap e segmentação de rede impedem qualquer comunicação externa.',
            '**Gestão de modelos:** transfira modelos apenas por USB, mídias seguras ou redes internas; sem acesso à nuvem.',
            '**Atualizações:** processo manual — teste as atualizações offline primeiro, depois implante por canais seguros.',
            'Em abril de 2026, air-gapped é o padrão para governos e contratantes de defesa.',
          ],
        },
        whatIsAirGapped: {
          title: 'O que significa air-gapped?',
          content: [
            '**A infraestrutura air-gapped não tem conexão de rede com a internet nem com nenhum sistema externo.** Todos os dados e a computação permanecem em hardware isolado.',
            '**Isolamento absoluto:** sem Wi-Fi, sem Ethernet para redes externas, sem conexões USB para dispositivos conectados à internet.',
            '**Os dados nunca saem:** a inferência ocorre localmente, os resultados ficam localmente.',
            '**As atualizações são manuais:** não é possível baixar atualizações de modelos automaticamente. As atualizações requerem mídia física (USB, cartão SD) ou transferência por rede interna.',
          ],
        },
        architecture: {
          title: 'Como é uma arquitetura air-gapped típica?',
          content: [
            '**Uma única máquina ou um pequeno cluster, completamente isolado, com acesso físico restrito.**',
          ],
          numberedItems: [
            '**Hardware dedicado:** servidores usados apenas para inferência de LLM, nada mais.',
            '**Rede isolada:** sem conexão à rede corporativa nem à internet. No máximo, uma VLAN separada.',
            '**Armazenamento criptografado:** todos os arquivos de modelo, dados e logs criptografados em repouso.',
            '**Acesso controlado:** apenas pessoal autorizado pode acessar. Autenticação multifator obrigatória.',
            '**Segurança física:** sala de servidores trancada, vigilância, registros de acesso.',
          ],
        },
        networkIsolation: {
          id: 'network-isolation',
          title: 'Como implementar o isolamento de rede?',
          content: [
            '**O isolamento de rede é a camada mais crítica de segurança em uma implantação air-gapped.** Mesmo uma única porta de rede não monitorada pode comprometer todo o ambiente.',
          ],
          items: [
            '**Segmentação física:** use hardware de rede separado (switches físicos dedicados) para a rede air-gapped, não VLANs no mesmo switch.',
            '**Firewall unidirecional (diodo de dados):** permite que dados fluam apenas para dentro do ambiente air-gapped, nunca para fora.',
            '**Desabilitar interfaces de rede não utilizadas:** desative Wi-Fi, Bluetooth e outros rádios no hardware do servidor.',
            '**Monitoramento de logs:** registre todas as tentativas de acesso. Use um SIEM isolado para correlação de logs.',
            '**Auditoria periódica:** varreduras regulares para detectar dispositivos não autorizados ou portas de rede abertas.',
          ],
        },
        modelManagement: {
          id: 'model-management',
          title: 'Como gerenciar modelos em ambiente air-gapped?',
          content: [
            '**Sem acesso à internet, os modelos devem ser baixados em um sistema externo e transferidos fisicamente.** Este processo é chamado de "sneakernet" — literalmente carregar dados em mídia física.',
          ],
          codeBlock: '# No sistema com internet: baixar modelo e verificar hash\nollama pull llama3.3:70b\nsha256sum ~/.ollama/models/manifests/registry.ollama.ai/library/llama3.3/70b > llama3.3-70b.sha256\n\n# Transferir para USB criptografado\ncp -r ~/.ollama/models/ /media/encrypted-usb/ollama-models/\ncp llama3.3-70b.sha256 /media/encrypted-usb/\n\n# No sistema air-gapped: verificar integridade e instalar\nsha256sum -c /media/secure-usb/llama3.3-70b.sha256\ncp -r /media/secure-usb/ollama-models/ ~/.ollama/models/',
          codeLanguage: 'bash',
        },
        updates: {
          id: 'updates',
          title: 'Como gerenciar atualizações e manutenção?',
          content: [
            '**O ciclo de atualização air-gapped é deliberado e manual — não automático.** Cada atualização requer aprovação, teste e transferência física.',
          ],
          items: [
            '**Frequência de atualização de modelos:** trimestralmente para novos lançamentos de modelo. Mensalmente para patches de segurança em frameworks (Ollama, vLLM).',
            '**Processo de aprovação:** cada atualização deve ser revisada e aprovada pela equipe de segurança antes da transferência.',
            '**Ambiente de teste:** sempre teste atualizações em um ambiente air-gapped de homologação antes de implantar em produção.',
            '**Registro de versões:** mantenha um registro de todas as versões instaladas e as datas de instalação para fins de auditoria.',
            '**Rollback:** mantenha sempre a versão anterior disponível para rollback rápido se uma atualização causar problemas.',
          ],
        },
        security: {
          id: 'security',
          title: 'Considerações de segurança específicas para LLMs air-gapped',
          content: [
            '**Os modelos LLM em si são arquivos grandes de parâmetros — verifique sempre a integridade com hashes SHA-256 antes e depois da transferência.** Modelos adulterados podem produzir saídas maliciosas ou vazar dados via steganografia.',
          ],
          items: [
            '**Validação de modelos:** verifique o hash SHA-256 de todos os arquivos de modelo contra os valores publicados pelo fornecedor.',
            '**Controle de prompts:** implemente filtragem de entrada para prevenir prompt injection que poderia exfiltrar dados.',
            '**Logs de auditoria:** registre todas as consultas ao LLM com timestamps, usuário e hash do prompt para conformidade.',
            '**Criptografia de dados em trânsito:** mesmo dentro da rede air-gapped, use TLS para comunicação entre serviços.',
            '**Conformidade LGPD:** para organizações brasileiras processando dados pessoais sensíveis, o relatório de impacto à proteção de dados (RIPD) deve documentar o ambiente air-gapped como medida de segurança adequada, conforme art. 38 da LGPD.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Erros comuns em implantações air-gapped',
          items: [
            '**Confiar apenas em VLANs em vez de isolamento físico.** VLANs podem ser comprometidas por misconfigurações. Use switches físicos separados para verdadeiro air-gapping.',
            '**Não verificar integridade dos modelos após transferência.** Falhas de mídia ou transferências interrompidas podem corromper modelos silenciosamente. Sempre verifique SHA-256.',
            '**Usar USB não criptografados.** Qualquer mídia física usada para transferência deve ser criptografada (VeraCrypt, BitLocker) e ter acesso registrado.',
            '**Não planejar para atualizações de emergência.** Vulnerabilidades críticas de segurança podem requerer atualização urgente. Tenha um procedimento de emergência documentado com tempos de resposta definidos.',
            '**Esquecer de desativar rádios do hardware.** Muitos servidores modernos têm Wi-Fi e Bluetooth integrados. Desabilite-os no BIOS/UEFI e fisicamente se possível.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[IA Local Privada para Empresas](/pt/local-llms/private-local-ai-for-business) — Implantação on-premises para conformidade empresarial',
            '[Multi-GPU LLMs Locais 2026](/pt/local-llms/multi-gpu-local-llms) — Infraestrutura multi-GPU para ambientes air-gapped',
            '[LLMs Locais vs APIs na Nuvem](/pt/local-llms/local-llms-vs-cloud-apis) — Por que o local supera a nuvem para dados sensíveis',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            'NIST SP 800-53 — Controles de Segurança e Privacidade para Sistemas de Informação Federais',
            'LGPD (Lei nº 13.709/2018) — Lei Geral de Proteção de Dados do Brasil, art. 38 (RIPD)',
            'ANPD — Guia Orientativo de Segurança da Informação, Autoridade Nacional de Proteção de Dados',
            'NSA/CISA — Guia de Boas Práticas para Ambientes Air-Gapped',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'LLMs Locais On-Prem Air-Gapped: Implantação Isolada para Ambientes Classificados',
        'description': 'Implantação de LLM local com air-gap: arquitetura de isolamento completo, segurança de rede, gestão de atualizações e tratamento de dados classificados.',
        'url': 'https://www.promptquorum.com/pt/local-llms/on-prem-air-gapped-local-llm',
        'inLanguage': 'pt-BR',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'On-Prem Air-Gapped Local LLMs: Isolierte Bereitstellung für klassifizierte Umgebungen',
      seoTitle: 'Air-Gapped Local LLM Bereitstellung',
      intro: 'Air-Gapped-Bereitstellung bedeutet, dass die LLM-Infrastruktur vollständig vom Internet isoliert ist. Keine Internetverbindung, keine externen API-Aufrufe, kein Datenabfluss-Risiko. Ab April 2026 ist dies Standard für Behörden, Militär und Finanzinstitute, die mit klassifizierten oder hochsensiblen Daten umgehen.',
      metaDescription: 'Air-Gapped Local LLM Bereitstellung: komplette Isolierungsarchitektur, Netzwerksicherheit, Update-Verwaltung und Klassifizierungsdaten-Handling.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Air-Gapped-Bereitstellung bedeutet, dass die LLM-Infrastruktur vollständig vom Internet isoliert ist. Keine Internetverbindung, keine externen API-Aufrufe, kein Datenabfluss-Risiko. Ab April 2026 ist dies Standard für Behörden, Militär und Finanzinstitute, die mit klassifizierten oder hochsensiblen Daten umgehen.**',
      audience: 'Ingenieure, die Local LLMs in Produktions- oder Enterprise-Umgebungen bereitstellen',
      readTime: '12 Min. Lesezeit',
      educationalLevel: 'Advanced',
      primaryTerm: 'Air-Gapped-Bereitstellung',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Was bedeutet Air-Gapped?', anchor: '#what-is-air-gapped' },
        { label: 'Architektur-Design', anchor: '#architecture' },
        { label: 'Netzwerkisolation', anchor: '#network-isolation' },
        { label: 'Modell- und Datenverwaltung', anchor: '#model-management' },
        { label: 'Updates und Wartung', anchor: '#updates' },
        { label: 'Sicherheitsaspekte', anchor: '#security' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Verwandte Lektüre', anchor: '#related-reading' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Air-Gapped = vollständig vom Internet isoliert. Null Netzwerkverbindung zu externen Systemen.',
            'Anwendungsfall: Behörden (klassifiziert), Militär (Kriegsszenarien), Finanzen (hohe Sicherheit), Gesundheitswesen (HIPAA ultrasensibel).',
            'Herausforderung: Kann Modelle, Embeddings oder Abhängigkeiten nicht automatisch aktualisieren. Erfordert manuelle Update-Verfahren.',
            'Architektur: Dedizierte Hardware, verschlüsselte Speicherung, eingeschränkter Benutzerzugriff, physische Sicherheit.',
            '**Netzwerkisolation:** Firewalls, Air-Gap-Appliances und Netzwerksegmentierung verhindern externe Kommunikation.',
            '**Modellverwaltung:** Modelle nur per USB, sichere Medien oder interne Netzwerke übertragen; kein Cloud-Zugriff.',
            '**Updates:** Manueller Prozess -- Updates zunächst offline testen, dann über sichere Kanäle bereitstellen.',
            'Ab April 2026 ist Air-Gapped Standard für Behörden und Rüstungsunternehmer.',
          ],
        },
        whatIsAirGapped: {
          id: 'what-is-air-gapped',
          title: 'Was bedeutet Air-Gapped?',
          content: [
            '**Air-Gapped-Infrastruktur hat keine Netzwerkverbindung zum Internet oder zu externen Systemen.** Alle Daten und Berechnungen bleiben auf isolierter Hardware.',
            '**Absolute Isolierung:** Kein WLAN, kein Ethernet zu externen Netzwerken, keine USB-Verbindungen zu internetverbundenen Geräten.',
            '**Daten verlassen das System nie:** Inferenzen finden lokal statt, Ergebnisse bleiben lokal.',
            '**Updates sind manuell:** Kann Modell-Updates nicht automatisch herunterladen. Updates erfordern physische Medien (USB-Stick, SD-Karte) oder interne Netzwerkübertragung.',
          ],
        },
        architecture: {
          id: 'architecture',
          title: 'Wie sieht typische Air-Gapped-Architektur aus?',
          content: [
            '**Eine einzelne Maschine oder ein kleiner Cluster, vollständig isoliert, mit eingeschränktem physischem Zugang.**',
            '**BSI-Grundschutz-Kataloge:** Deutsche Unternehmen sollten die BSI-Grundschutz-Anforderungen für die IT-Sicherheit von Air-Gapped-Systemen erfüllen.',
          ],
          numberedItems: [
            '**Dedizierte Hardware:** Server nur für LLM-Inferenz, nichts anderes.',
            '**Isoliertes Netzwerk:** Keine Verbindung zum Unternehmens-Netzwerk oder Internet. Höchstens separates VLAN.',
            '**Verschlüsselte Speicherung:** Alle Modelldateien, Daten, Logs verschlüsselt in Ruhe.',
            '**Kontrollierter Zugriff:** Nur autorisiertes Personal kann zugreifen. Multi-Faktor-Authentifizierung erforderlich.',
            '**Physische Sicherheit:** Gesperrter Serverraum, Überwachung, Zugriffsprotokolle.',
            '**Keine Wechselmedien:** USB-Anschlüsse deaktiviert, CD/DVD-Laufwerke entfernt.',
            '**Lokale Überwachung:** Logs bleiben im System, werden nicht an externe Monitoring-Dienste gesendet.',
          ],
        },
        networkIsolation: {
          id: 'network-isolation',
          title: 'Wie isolieren Sie Netzwerke von externen Verbindungen?',
          content: [
            '**Isolierung wird auf mehreren Ebenen erzwungen:**',
          ],
          items: [
            '**Physisch:** Separate Netzwerk-Hardware (Switch, Router) für Air-Gapped-Infrastruktur.',
            '**Firewall:** Ein- und ausgehender Datenverkehr blockiert. Keine Ausnahmen für Cloud-Dienste, NTP, DNS zu externen Servern.',
            '**Software:** Host-Level-Firewalls (iptables, Windows Firewall) als sekundäre Kontrolle.',
            '**Überwachung:** Netzwerkverkehr wird geprüft. Jeder Versuch, sich extern zu verbinden, wird protokolliert und gekennzeichnet.',
          ],
        },
        modelManagement: {
          id: 'model-management',
          title: 'Wie verwalten Sie Modelle in Air-Gapped-Umgebungen?',
          content: [
            '**Modell-Updates sind manuell und erfordern physische Medienübertragung oder interne sichere Prozesse.**',
          ],
          numberedItems: [
            'Laden Sie Modelle auf Internet-verbundener Maschine herunter (separate, nicht klassifizierte Umgebung).',
            'Überprüfen Sie die Modellintegrität (Checksum, digitale Signatur).',
            'Übertragen Sie auf Air-Gapped-System über verschlüsselten USB-Stick oder internen File-Server.',
            'Validierung: Tests durchführen, um sicherzustellen, dass die Modellintegrität während der Übertragung nicht beeinträchtigt wurde.',
            'Bereitstellung: Laden Sie Modell in Inferenz-Engine.',
            'Dokumentation: Protokollieren Sie, welche Modelle bereitgestellt werden, Versionen, Daten.',
          ],
        },
        updates: {
          id: 'updates',
          title: 'Wie handhaben Sie Updates und Patches?',
          content: [
            '**Sicherheits-Updates und Modell-Updates sind manuell:**',
          ],
          items: [
            '**Modell-Updates:** Folgen Sie dem obigen Verfahren. Planen Sie Updates vierteljährlich oder jährlich ein.',
            '**Betriebssystem-Patches:** Testen Sie zunächst in isolierter Staging-Umgebung, dann in Produktion bereitstellen.',
            '**Abhängigkeiten:** Evaluieren Sie neue Versionen sorgfältig. Air-Gapped-Systeme führen ältere Versionen länger aus.',
            '**Keine automatischen Updates:** Deaktivieren Sie automatische Updates vollständig. Alle Updates sind kontrolliert, dokumentiert, geprüft.',
          ],
        },
        security: {
          id: 'security',
          title: 'Wie stellen Sie Sicherheit in Air-Gapped-Systemen sicher?',
          content: [
            '**Air-Gapped ist inhärent sicherer (keine externen Angriffe), aber neue Risiken entstehen:**',
          ],
          items: [
            '**Insider-Bedrohungen:** Mitarbeiter mit Zugang könnten Daten per USB kopieren. Zwei-Personen-Integrität erforderlich.',
            '**Supply-Chain-Angriffe:** Kompromittierte Modelle oder Abhängigkeiten während Übertragung. Checksummen, digitale Signaturen überprüfen.',
            '**Physischer Diebstahl:** Modelle und Daten sind millionenwert. Gesperrter Raum, Überwachung, Eindringungserkennung erforderlich.',
            '**Social Engineering:** "Vertrauen Sie mir, ich muss das Modell aktualisieren." Formale Change-Control-Prozesse erforderlich.',
            '**Logging-Lücken:** Wenn Logs nicht geprüft werden, niemand erkennt Insider-Aktivitäten. Regelmäßige externe Audit von Logs erforderlich.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Häufige Air-Gapped-Bereitstellungsfehler',
          items: [
            '**Unvollständige Isolierung:** Ein offener Port, eine aktivierte Wireless-Karte oder erlaubte USB-Geräte aufheben Air-Gapping auf. Rigoros prüfen.',
            '**Keine Change-Control:** Modell-Updates geschehen informell, keine Dokumentation. Führt zu Wissensverlust über bereitgestellte Versionen.',
            '**Schlechte Backup-Strategie:** Air-Gapped-Systeme benötigen redundante Speicherung und Backups an anderen Orten. Backups selbst müssen Air-Gapped sein.',
            '**Unzureichendes Logging:** Air-Gapped-Systeme erfordern umfassende Auditing (wer auf was zugegriffen hat, wann). Ohne Logs bleiben Sicherheitsverletzungen unerkannt.',
            '**Nur physische Sicherheit vertrauen:** Sicherheit erfordert mehrere Ebenen: Isolierung, Verschlüsselung, Zugriffskontrolle, Auditing, nicht nur gesperrte Türen.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen zu Air-Gapped-Systemen',
          faqs: [
            {
              q: 'Wie aktualisieren Sie Modelle in einem Air-Gapped-System?',
              a: 'Manuell per verschlüsseltem USB oder über ein internes, vom Internet isoliertes sicheres Netzwerk. Alle Updates erfordern Change-Control-Genehmigung und Audit-Trails.',
            },
            {
              q: 'Können wir Cloud-Backups für Air-Gapped-Systeme verwenden?',
              a: 'Nein. Cloud-Backups erfordern Internetverbindung (aufheben Air-Gapping). Verwenden Sie physische Backups (verschlüsselte Festplatten) in separater sicherer Einrichtung.',
            },
            {
              q: 'Ist Air-Gapped wirklich sicher gegen alle Angriffe?',
              a: 'Größtenteils, aber Insider-Bedrohungen bleiben. Air-Gapped ist sicher gegen Remote-Angriffe, aber physischer oder Insider-Zugang kann es kompromittieren.',
            },
            {
              q: 'Wie teuer ist Air-Gapped-Bereitstellung?',
              a: 'Hardware-Kosten ca. 48k–480k € (nicht viel mehr als regulär On-Prem). Operational-Kosten (Sicherheit, Auditing, Training) sind 5–10× höher aufgrund manueller Prozesse.',
            },
            {
              q: 'Können Sie Standard-Tools (Ollama, vLLM) in Air-Gapped-Umgebungen verwenden?',
              a: 'Ja. Beide Tools funktionieren ohne Internet. Einmalige Bereitstellung, dann keine Internetverbindung erforderlich. Stellen Sie sicher, dass alle Abhängigkeiten offline installiert sind.',
            },
            {
              q: 'Muss ich bei Air-Gapped-Bereitstellung die DSGVO beachten?',
              a: 'Ja. Air-Gapped-Systeme sind ein Kontrollmechanismus für die DSGVO Artikel 28 (Datenverarbeitung). Sie erfüllen automatisch strenge Anforderungen für Datenresidenz und Sicherheit. Dokumentieren Sie alle Zugriffe und Änderungen für Compliance-Audits.',
            },
            {
              q: 'Ist Air-Gapped für den deutschen Mittelstand geeignet?',
              a: 'Ja, wenn Daten sensibel sind (Finanzen, Kundendaten, Betriebsgeheimnisse). Kleine bis mittlere Unternehmen können luftgapped Systeme mit 2–3 Servern + NAS-Backup wirtschaftlich betreiben. BSI-Grundschutz-Zertifizierung ist möglich und empfohlen für öffentliche Ausschreibungen.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Verwandte Lektüre',
          items: [
            '[Warum Unternehmen Local LLMs verwenden](/de/local-llms/why-enterprises-use-local-llms) -- Geschäftsfall für On-Prem-KI.',
            '[Enterprise-Compliance Local LLMs](/de/local-llms/enterprise-compliance-local-llms) -- Regulatorische Anforderungen.',
            '[Skalierung von Local LLMs Enterprise](/de/local-llms/scaling-local-llms-enterprise) -- Produktionsbereitstellung über einzelne Maschine hinaus.',
            '[Local LLM Sicherheits- und Datenschutz-Checkliste](/de/local-llms/local-llm-security-privacy-checklist) -- 12-Punkte-Sicherheitsverifizierung.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'NIST Cybersecurity Framework -- nist.gov/cyberframework',
            'BSI Grundschutz-Kataloge -- bsi.bund.de',
            'Air-Gap-Sicherheitsrichtlinien -- ietf.org (RFC-Dokumente zur Netzwerkisolation)',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'On-Prem Air-Gapped Local LLMs: Isolierte Bereitstellung für klassifizierte Umgebungen',
        'description': 'Air-Gapped Local LLM Bereitstellung: komplette Isolierungsarchitektur, Netzwerksicherheit, Update-Verwaltung und Klassifizierungsdaten-Handling.',
        'url': 'https://www.promptquorum.com/de/local-llms/on-prem-air-gapped-local-llm',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Wie aktualisieren Sie Modelle in einem Air-Gapped-System?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Manuell per verschlüsseltem USB oder über ein internes, vom Internet isoliertes sicheres Netzwerk. Alle Updates erfordern Change-Control-Genehmigung und Audit-Trails.' } },
          { '@type': 'Question', 'name': 'Können wir Cloud-Backups für Air-Gapped-Systeme verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nein. Cloud-Backups erfordern Internetverbindung (aufheben Air-Gapping). Verwenden Sie physische Backups (verschlüsselte Festplatten) in separater sicherer Einrichtung.' } },
          { '@type': 'Question', 'name': 'Ist Air-Gapped wirklich sicher gegen alle Angriffe?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Größtenteils, aber Insider-Bedrohungen bleiben. Air-Gapped ist sicher gegen Remote-Angriffe, aber physischer oder Insider-Zugang kann es kompromittieren.' } },
          { '@type': 'Question', 'name': 'Wie teuer ist Air-Gapped-Bereitstellung?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Hardware-Kosten ca. 48k–480k € (nicht viel mehr als regulär On-Prem). Operational-Kosten (Sicherheit, Auditing, Training) sind 5–10× höher aufgrund manueller Prozesse.' } },
          { '@type': 'Question', 'name': 'Können Sie Standard-Tools (Ollama, vLLM) in Air-Gapped-Umgebungen verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Beide Tools funktionieren ohne Internet. Einmalige Bereitstellung, dann keine Internetverbindung erforderlich. Stellen Sie sicher, dass alle Abhängigkeiten offline installiert sind.' } },
          { '@type': 'Question', 'name': 'Muss ich bei Air-Gapped-Bereitstellung die DSGVO beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Air-Gapped-Systeme sind ein Kontrollmechanismus für die DSGVO Artikel 28 (Datenverarbeitung). Sie erfüllen automatisch strenge Anforderungen für Datenresidenz und Sicherheit. Dokumentieren Sie alle Zugriffe und Änderungen für Compliance-Audits.' } },
          { '@type': 'Question', 'name': 'Ist Air-Gapped für den deutschen Mittelstand geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, wenn Daten sensibel sind (Finanzen, Kundendaten, Betriebsgeheimnisse). Kleine bis mittlere Unternehmen können Air-Gapped-Systeme mit 2–3 Servern + NAS-Backup wirtschaftlich betreiben. BSI-Grundschutz-Zertifizierung ist möglich und empfohlen für öffentliche Ausschreibungen.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Air-Gapped-Isolierungskomponenten',
        'numberOfItems': 3,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Vollständige Netzwerkisolierung', 'description': 'Air-Gapped-Infrastruktur hat keine Netzwerkverbindung zum Internet oder zu externen Systemen und stellt Null-Zugang von außen sicher.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Manuelle Update-Verfahren', 'description': 'Modell-Updates erfordern physische Medien (USB-Stick) oder nur interne sichere Netzwerke; kein Cloud-Zugriff.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Erhöhte Sicherheit', 'description': 'Schützt klassifizierte Daten in Behörden-, Militär- und Finanzumgebungen, die maximalen Datenschutz erfordern.' },
        ],
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'On-Prem Air-Gapped Local LLMs: Déploiement isolé pour environnements classifiés',
      seoTitle: 'Déploiement d\'LLM air-gapped isolé',
      intro: 'Le déploiement air-gapped signifie que l\'infrastructure LLM est complètement isolée d\'Internet. Aucune connexion Internet, aucun appel API externe, aucun risque d\'exfiltration de données. Depuis avril 2026, c\'est la norme pour les gouvernements, militaires et institutions financières traitant des données classifiées ou hautement sensibles.',
      metaDescription: 'Déploiement air-gapped d\'LLM local: architecture d\'isolement complet, sécurité réseau, gestion des mises à jour et données classifiées.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Le déploiement air-gapped signifie que l\'infrastructure LLM est complètement isolée d\'Internet. Aucune connexion Internet, aucun appel API externe, aucun risque d\'exfiltration de données. Depuis avril 2026, c\'est la norme pour les gouvernements, militaires et institutions financières traitant des données classifiées ou hautement sensibles.**',
      audience: 'Ingénieurs déployant des LLM locaux en production ou en environnements entreprise',
      readTime: '12 min de lecture',
      educationalLevel: 'Advanced',
      primaryTerm: 'déploiement air-gapped',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce que l\'air-gapped?', anchor: '#what-is-air-gapped' },
        { label: 'Conception architecturale', anchor: '#architecture' },
        { label: 'Isolation réseau', anchor: '#network-isolation' },
        { label: 'Gestion des modèles et données', anchor: '#model-management' },
        { label: 'Mises à jour et maintenance', anchor: '#updates' },
        { label: 'Considérations de sécurité', anchor: '#security' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Lectures connexes', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Air-gapped = complètement isolé d\'Internet. Zéro connectivité réseau vers les systèmes externes.',
            'Cas d\'usage: gouvernement (classifié), militaire (scénarios de guerre), finance (haute sécurité), santé (données ultra-sensibles).',
            'Défi: impossibilité de mettre à jour automatiquement les modèles, intégrations ou dépendances. Exige des procédures manuelles.',
            'Architecture: matériel dédié, stockage chiffré, accès utilisateur restreint, sécurité physique.',
            '**Isolation réseau:** pare-feu, appliances air-gap et segmentation réseau empêchent toute communication externe.',
            '**Gestion des modèles:** transférez via USB, supports sécurisés ou réseaux internes uniquement; aucun accès cloud.',
            '**Mises à jour:** processus manuel -- testez les mises à jour hors ligne d\'abord, puis déployez via canaux sécurisés.',
            'Depuis avril 2026, air-gapped est la norme pour les gouvernements et entrepreneurs en défense.',
          ],
        },
        whatIsAirGapped: {
          id: 'what-is-air-gapped',
          title: 'Qu\'est-ce que l\'air-gapped?',
          content: [
            '**Une infrastructure air-gapped n\'a aucune connexion réseau à Internet ou à tout système externe.** Toutes les données et tous les calculs restent sur matériel isolé.',
            '**Isolement absolu:** pas de WiFi, pas d\'Ethernet vers des réseaux externes, pas de connexions USB vers des appareils connectés à Internet.',
            '**Les données ne partent jamais:** l\'inférence se fait localement, les résultats restent locaux.',
            '**Les mises à jour sont manuelles:** impossible de télécharger automatiquement les mises à jour. Exigent des supports physiques (clé USB, carte SD) ou transfert réseau interne.',
          ],
        },
        architecture: {
          id: 'architecture',
          title: 'À quoi ressemble une architecture air-gapped typique?',
          content: [
            '**Une seule machine ou petit cluster, complètement isolé, avec accès physique restreint.**',
          ],
          numberedItems: [
            '**Matériel dédié:** serveurs utilisés uniquement pour l\'inférence LLM, rien d\'autre.',
            '**Réseau isolé:** aucune connexion au réseau d\'entreprise ou Internet. VLAN séparé au maximum.',
            '**Stockage chiffré:** tous les fichiers de modèle, données, journaux chiffrés au repos.',
            '**Accès contrôlé:** seul le personnel autorisé peut accéder. Authentification multifacteur requise.',
            '**Sécurité physique:** salle de serveurs verrouillée, surveillance, journaux d\'accès.',
            '**Pas de supports amovibles:** ports USB désactivés, lecteurs CD/DVD supprimés.',
            '**Surveillance locale:** les journaux restent sur le système, ne sont pas envoyés à des services de surveillance externes.',
          ],
        },
        networkIsolation: {
          id: 'network-isolation',
          title: 'Comment isolez-vous les réseaux des connexions externes?',
          content: [
            '**L\'isolement est appliqué à plusieurs niveaux:**',
          ],
          items: [
            '**Physique:** matériel réseau séparé (commutateur, routeur) pour l\'infrastructure air-gapped.',
            '**Pare-feu:** trafic entrant et sortant bloqué. Aucune exception pour services cloud, NTP, DNS vers serveurs externes.',
            '**Logiciel:** pare-feu niveau hôte (iptables, Windows Firewall) comme contrôle secondaire.',
            '**Surveillance:** trafic réseau audité. Toute tentative de connexion externe est enregistrée et signalée.',
          ],
        },
        modelManagement: {
          id: 'model-management',
          title: 'Comment gérez-vous les modèles dans les environnements air-gapped?',
          content: [
            '**Les mises à jour de modèles sont manuelles, exigeant un transfert de supports physiques ou des processus sécurisés internes.**',
          ],
          numberedItems: [
            'Téléchargez le modèle sur machine connectée à Internet (environnement séparé, non classifié).',
            'Vérifiez l\'intégrité du modèle (somme de contrôle, signature numérique).',
            'Transférez vers le système air-gapped via clé USB chiffrée ou serveur de fichiers interne sécurisé.',
            'Validation: exécutez des tests pour vous assurer que l\'intégrité du modèle n\'a pas été compromise pendant le transfert.',
            'Déploiement: chargez le modèle dans le moteur d\'inférence.',
            'Documentation: enregistrez les modèles déployés, versions, dates.',
          ],
        },
        updates: {
          id: 'updates',
          title: 'Comment gérez-vous les mises à jour et les correctifs?',
          content: [
            '**Les mises à jour de sécurité et les mises à jour de modèles sont manuelles:**',
          ],
          items: [
            '**Mises à jour de modèles:** suivez le processus ci-dessus. Planifiez les mises à jour trimestriellement ou annuellement.',
            '**Correctifs OS:** testez d\'abord dans un environnement de préparation isolé, puis déployez en production.',
            '**Dépendances:** évaluez les nouvelles versions avec soin. Les systèmes air-gapped exécutent les anciennes versions plus longtemps.',
            '**Aucune mise à jour automatique:** désactivez complètement les mises à jour automatiques. Toutes les mises à jour sont contrôlées, documentées, auditées.',
          ],
        },
        security: {
          id: 'security',
          title: 'Comment garantissez-vous la sécurité dans les systèmes air-gapped?',
          content: [
            '**Air-gapped est intrinsèquement plus sûr (pas d\'attaques externes), mais de nouveaux risques émergent:**',
            '**Conformité CNIL:** la CNIL recommande l\'inférence locale pour les données sensibles. Air-gapped satisfait les exigences les plus strictes de résidence des données et de sécurité du traitement.',
          ],
          items: [
            '**Menaces d\'initiés:** employés avec accès pourraient copier des données via USB. Exiger intégrité à deux personnes.',
            '**Attaques de chaîne d\'approvisionnement:** modèles ou dépendances compromis pendant transfert. Vérifier les sommes de contrôle, signatures numériques.',
            '**Vol physique:** modèles et données valent des millions. Exiger salle verrouillée, surveillance, détection d\'intrusion.',
            '**Ingénierie sociale:** "Faites-moi confiance, je dois mettre à jour le modèle." Exiger processus formels de contrôle des changements.',
            '**Lacunes de journalisation:** si les journaux ne sont pas auditées, personne ne détecte l\'activité des initiés. Exiger audit externe régulier des journaux.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Erreurs courantes de déploiement air-gapped',
          items: [
            '**Isolement incomplet:** laisser un port ouvert, une carte sans fil activée ou autoriser des périphériques USB annule air-gapping. Auditez rigoureusement.',
            '**Pas de contrôle des changements:** les mises à jour de modèles se font informellement, aucune documentation. Mène à la perte de savoir sur la version déployée.',
            '**Mauvaise stratégie de sauvegarde:** les systèmes air-gapped nécessitent stockage redondant et sauvegardes hors site. Mais les sauvegardes elles-mêmes doivent être air-gapped.',
            '**Journalisation insuffisante:** les systèmes air-gapped exigent un audit complet (qui a accédé à quoi, quand). Sans journaux, les violations passent inaperçues.',
            '**Faire confiance uniquement à la sécurité physique:** la sécurité exige plusieurs couches: isolement, chiffrement, contrôle d\'accès, audit, pas seulement portes verrouillées.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions courantes sur les systèmes air-gapped',
          faqs: [
            {
              q: 'Comment mettez-vous à jour les modèles dans un système air-gapped?',
              a: 'Manuellement via USB chiffré, ou via un réseau sécurisé isolé interne. Toutes les mises à jour exigent approbation du contrôle des changements et pistes d\'audit.',
            },
            {
              q: 'Pouvons-nous utiliser des sauvegardes cloud pour les systèmes air-gapped?',
              a: 'Non. Les sauvegardes cloud exigent connexion Internet (annulent air-gapping). Utilisez sauvegardes physiques (disques durs chiffrés) stockés dans installation sécurisée séparée.',
            },
            {
              q: 'Air-gapped est-il vraiment sûr contre toutes les attaques?',
              a: 'Généralement, mais les menaces d\'initiés persistent. Air-gapped protège contre les attaques distantes, mais accès physique ou accès d\'initié peuvent le compromettre.',
            },
            {
              q: 'Quel est le coût du déploiement air-gapped?',
              a: 'Coûts matériel 48 000–480 000 € (pas beaucoup plus qu\'on-prem régulier). Coûts opérationnels (sécurité, audit, formation) sont 5–10× plus élevés en raison des processus manuels.',
            },
            {
              q: 'Pouvons-nous utiliser les outils standards (Ollama, vLLM) dans les environnements air-gapped?',
              a: 'Oui. Les deux outils fonctionnent sans Internet. Déploiement une fois, puis aucune connectivité Internet requise. Assurez-vous que toutes les dépendances sont installées hors ligne.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures connexes',
          items: [
            '[Pourquoi les entreprises utilisent les LLM locaux](/fr/local-llms/why-enterprises-use-local-llms) -- Cas commercial pour l\'IA on-prem.',
            '[Conformité entreprise LLM local](/fr/local-llms/enterprise-compliance-local-llms) -- Exigences réglementaires.',
            '[Mise à l\'échelle des LLM locaux Enterprise](/fr/local-llms/scaling-local-llms-enterprise) -- Déploiement en production au-delà d\'une machine unique.',
            '[Liste de contrôle sécurité et confidentialité LLM local](/fr/local-llms/local-llm-security-privacy-checklist) -- Vérification de sécurité en 12 étapes.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Cadre de cybersécurité NIST -- nist.gov/cyberframework',
            'Recommandations CNIL sur l\'IA -- cnil.fr',
            'Directives de sécurité air-gap -- ietf.org (documents RFC sur l\'isolement réseau)',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'On-Prem Air-Gapped Local LLMs: Déploiement isolé pour environnements classifiés',
        'description': 'Déploiement air-gapped d\'LLM local: architecture d\'isolement complet, sécurité réseau, gestion des mises à jour et données classifiées.',
        'url': 'https://www.promptquorum.com/fr/local-llms/on-prem-air-gapped-local-llm',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Comment mettez-vous à jour les modèles dans un système air-gapped?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Manuellement via USB chiffré, ou via un réseau sécurisé isolé interne. Toutes les mises à jour exigent approbation du contrôle des changements et pistes d\'audit.' } },
          { '@type': 'Question', 'name': 'Pouvons-nous utiliser des sauvegardes cloud pour les systèmes air-gapped?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non. Les sauvegardes cloud exigent connexion Internet (annulent air-gapping). Utilisez sauvegardes physiques (disques durs chiffrés) stockés dans installation sécurisée séparée.' } },
          { '@type': 'Question', 'name': 'Air-gapped est-il vraiment sûr contre toutes les attaques?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Généralement, mais les menaces d\'initiés persistent. Air-gapped protège contre les attaques distantes, mais accès physique ou accès d\'initié peuvent le compromettre.' } },
          { '@type': 'Question', 'name': 'Quel est le coût du déploiement air-gapped?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Coûts matériel 48 000–480 000 € (pas beaucoup plus qu\'on-prem régulier). Coûts opérationnels (sécurité, audit, formation) sont 5–10× plus élevés en raison des processus manuels.' } },
          { '@type': 'Question', 'name': 'Pouvons-nous utiliser les outils standards (Ollama, vLLM) dans les environnements air-gapped?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Les deux outils fonctionnent sans Internet. Déploiement une fois, puis aucune connectivité Internet requise. Assurez-vous que toutes les dépendances sont installées hors ligne.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Composants d\'isolement air-gapped',
        'numberOfItems': 3,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Isolement réseau complet', 'description': 'L\'infrastructure air-gapped n\'a aucune connexion réseau à Internet ou à systèmes externes, assurant zéro accès externe.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Procédures de mise à jour manuelle', 'description': 'Les mises à jour de modèles exigent supports physiques (clé USB) ou seulement réseaux internes sécurisés; aucun accès cloud.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Sécurité renforcée', 'description': 'Protège les données classifiées dans les environnements gouvernementaux, militaires et financiers exigeant protection maximale.' },
        ],
      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: 'オンプレミス・エアギャップローカルLLM: 機密環境の隔離デプロイ',
      seoTitle: 'エアギャップローカルLLM デプロイメント',
      intro: 'エアギャップデプロイメントはLLMインフラをインターネットから完全に隔離することを意味します。インターネット接続なし、外部API呼び出しなし、データ流出リスクなし。2026年4月時点、これは機密またはきわめて機密データを扱う政府、軍事、金融機関の標準。',
      metaDescription: 'エアギャップローカルLLMデプロイメント: 完全隔離アーキテクチャ、ネットワークセキュリティ、更新管理、機密データ処理。',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**エアギャップデプロイメントはLLMインフラをインターネットから完全に隔離することを意味します。インターネット接続なし、外部API呼び出しなし、データ流出リスクなし。2026年4月時点、これは機密またはきわめて機密データを扱う政府、軍事、金融機関の標準。**',
      audience: '本番環境またはエンタープライズ環境でローカルLLMをデプロイするエンジニア',
      readTime: '12分',
      educationalLevel: 'Advanced',
      primaryTerm: 'エアギャップデプロイメント',
      toc: [
        { label: '要点', anchor: '#key-takeaways' },
        { label: 'エアギャップとは?', anchor: '#what-is-air-gapped' },
        { label: 'アーキテクチャ設計', anchor: '#architecture' },
        { label: 'ネットワーク隔離', anchor: '#network-isolation' },
        { label: 'モデルとデータ管理', anchor: '#model-management' },
        { label: '更新とメンテナンス', anchor: '#updates' },
        { label: 'セキュリティ考慮事項', anchor: '#security' },
        { label: '一般的ミス', anchor: '#common-mistakes' },
        { label: '関連記事', anchor: '#related-reading' },
        { label: '情報源', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'エアギャップ = インターネットから完全隔離。外部システムへのネットワーク接続ゼロ。',
            '使用例: 政府(機密)、軍事(戦争シナリオ)、金融(高セキュリティ)、医療(HIPAA超機密)。',
            'チャレンジ: モデル、埋め込み、依存関係の自動更新不可。手動更新手順必須。',
            'アーキテクチャ: 専用ハードウェア、暗号化ストレージ、ユーザーアクセス制限、物理セキュリティ。',
            '**ネットワーク隔離:** ファイアウォール、エアギャップアプライアンス、ネットワークセグメンテーション。',
            '**モデル管理:** USB、セキュアメディア、内部ネットワーク経由のみ; クラウドアクセスなし。',
            '**更新:** 手動プロセス―オフラインで更新テスト、セキュアチャネル経由でデプロイ。',
            '2026年4月時点、エアギャップは政府・防衛契約企業の標準。',
          ],
        },
        'what-is-air-gapped': {
          id: 'what-is-air-gapped',
          title: 'エアギャップとは?',
          content: 'エアギャップはネットワーク接続を物理的・論理的に切断すること。インターネット0、外部接続0。',
          items: [
            '**定義:** LLMと外部ネットワーク間に「エアギャップ」(物理的隔離)がある状態。',
            '**目的:** データ流出防止、機密保護、規制遵守(HIPAA, FedRAMP, 政府機密)。',
            '**制約:** 自動更新不可、外部リソース利用不可、手動管理必須。',
            '**セキュリティ効果:** 外部からのハッキング、マルウェア侵入、データ盗難 すべて物理的に不可能。',
          ],
        },
        'architecture': {
          id: 'architecture',
          title: 'アーキテクチャ設計',
          content: 'エアギャップLLM最小構成: GPU、CPU、メモリ、ローカルストレージ、管理端末。',
          items: [
            '**計算層:** RTX 4090 × 2 (70B推論)、または NVIDIA A100 (政府標準)。',
            '**ストレージ:** 暗号化NVMe (LUKS/BitLocker)、12-24TB (モデル + キャッシュ)。',
            '**ネットワーク:** 物理的に隔離。内部LANのみ。外部接続ケーブル完全削除。',
            '**管理:** エアギャップ内の管理ワークステーション、シリアルコンソール、物理キーボード。',
            '**更新メディア:** USB 3.0 (暗号化)、光学メディア(DVD-R)、専用転送デバイス。',
          ],
        },
        'network-isolation': {
          id: 'network-isolation',
          title: 'ネットワーク隔離',
          content: '完全隔離は物理的ハードウェア隔離を意味す。ファイアウォールだけは不十分。',
          items: [
            '**物理隔離:** ネットワークケーブル削除。WiFi/Bluetooth 無効化。USB制限。',
            '**監視:** IDS(侵入検知)、ログ監査、アクセス制御。',
            '**検査:** エアギャップデバイスへの追加デバイス/媒体は検査必須。',
            '**更新転送:** エアギャップメディア (USB厳格管理) で手動転送のみ。',
          ],
        },
        'model-management': {
          id: 'model-management',
          title: 'モデルとデータ管理',
          content: 'モデルはエアギャップ内で一度限りインストール。更新は手動。',
          items: [
            '**初期インストール:** セキュアUSB from Hugging Face公式、検証ハッシュ確認。',
            '**バージョン管理:** すべてのモデルバージョンをローカルで管理。削除禁止。',
            '**更新:** 政府/企業のセキュリティレビュー後、オフラインで新モデル検証。',
            '**バックアップ:** エアギャップ内の隔離ストレージに3世代保持。',
          ],
        },
        'updates': {
          id: 'updates',
          title: '更新とメンテナンス',
          content: '自動更新不可。すべて手動。テストは隔離環境で。',
          items: [
            '**ソフトウェア更新:** RHEL/Ubuntu パッチ は月1回、セキュリティボード承認後。',
            '**モデル更新:** 新モデル版は隔離テストマシンで動作確認、セキュリティスキャン後、デプロイ。',
            '**依存関係:** pip/npm 更新も手動。オフラインホイール/パッケージ。',
            '**ダウンタイム:** メンテナンスウィンドウ (2週間に1回、計画)。',
          ],
        },
        'security': {
          id: 'security',
          title: 'セキュリティ考慮事項',
          items: [
            '**物理セキュリティ:** 施錠ラック、CCTV、アクセスログ、要員チェック。',
            '**ユーザーアクセス:** 最少権限原則。CLI のみ、GUIなし。ロール分離 (管理者 vs ユーザー)。',
            '**ログ監査:** すべてのアクセス、実行コマンド、ファイル変更をログ。外部キューバックアップ。',
            '**暗号化:** ディスク全体(LUKS)、転送メディア(AES-256)、データベース(Encrypted SQLite)。',
            '**シークレット管理:** API キー、パスワード → ハードウェアセキュリティモジュール(HSM) or オフライン暗号化金庫。',
          ],
        },
        'common-mistakes': {
          id: 'common-mistakes',
          title: '一般的ミス',
          items: [
            'WiFi/Bluetooth 有効なまま。エアギャップ無効。物理的にオフに。',
            'USBポート常時有効。悪意あるメディア挿入リスク。USBホワイトリスト実装。',
            'ログなし。セキュリティ監査失敗。すべてのアクセス記録必須。',
            'パスワード紙にメモ。金庫に施錠保管必須。',
            'テスト環境の甘いセキュリティ。テスト = 本番同等セキュリティ必須。',
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[ローカルLLMセキュリティガイド](/ja/local-llms/local-llm-security)',
            '[エンタープライズLLMデプロイメント](/ja/local-llms/enterprise-llm-deployment)',
            '[政府・防衛LLMコンプライアンス](/ja/local-llms/govt-compliance-llm)',
          ],
        },
        'sources': {
          id: 'sources',
          title: '情報源',
          items: [
            'NIST Cybersecurity Framework (エアギャップ設計基準)',
            'DoD Security Requirements (米国防総省セキュリティ要件)',
            'HIPAA/FedRAMP ガイドライン (医療・政府規制)',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'オンプレミス・エアギャップローカルLLM: 機密環境の隔離デプロイ',
        'description': 'エアギャップローカルLLMデプロイメント: 完全隔離アーキテクチャ、ネットワークセキュリティ、更新管理、機密データ処理。',
        'url': 'https://www.promptquorum.com/ja/local-llms/on-prem-air-gapped-local-llm',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
    },
    zh: {
      freshness_tier: 'semi_annual',
      theme: 'Enterprise',
      title: '本地LLM气隙部署: 隔离架构与分类数据保护',
      seoTitle: '气隙本地LLM部署: 隔离架构与安全指南',
      intro: '气隙部署是指LLM基础设施完全隔离于互联网。无互联网连接、无外部API调用、无数据泄露风险。截至2026年4月，这是政府、军事和金融机构处理分类或高度敏感数据的标准做法。',
      metaDescription: '了解如何在完全隔离的网络环境中部署本地LLM: 包括网络隔离架构设计、模型离线管理、安全更新流程和分类信息保护。适用于政府、军事、金融机构。',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**气隙部署是指LLM基础设施完全隔离于互联网。无互联网连接、无外部API调用、无数据泄露风险。截至2026年4月，这是政府、军事和金融机构处理分类或高度敏感数据的标准做法。**',
      audience: '在生产或企业环境中部署本地LLM的工程师',
      readTime: '阅读约12分钟',
      educationalLevel: 'Advanced',
      primaryTerm: 'air-gapped deployment',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '气隙是什么?', anchor: '#what-is-air-gapped' },
        { label: '典型气隙架构', anchor: '#architecture' },
        { label: '网络隔离', anchor: '#network-isolation' },
        { label: '气隙中的模型管理', anchor: '#model-management' },
        { label: '更新和维护', anchor: '#updates' },
        { label: '安全考虑', anchor: '#security' },
        { label: '常见部署错误', anchor: '#common-mistakes' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '信息来源', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '气隙 = 完全隔离于互联网。零外部系统网络连接。',
            '用例: 政府 (分类信息)、军事 (战争场景)、金融 (高度安全)、医疗 (HIPAA超敏感)。',
            '挑战: 无法自动更新模型、嵌入式或依赖项。需要手动更新流程。',
            '架构: 专用硬件、加密存储、受限用户访问、物理安全。',
            '**网络隔离:** 防火墙、气隙设备和网络分段防止任何外部通信。',
            '**模型管理:** 通过USB、安全媒体或内部网络传输模型；无云访问。',
            '**更新:** 手动流程 -- 首先离线测试更新，然后通过安全渠道部署。',
            '截至2026年4月，气隙是政府和国防承包商的标准做法。',
          ],
        },
        whatIsAirGapped: {
          title: '气隙意味着什么?',
          content: [
            '**气隙基础设施与互联网或任何外部系统都没有网络连接。** 所有数据和计算都保留在隔离硬件上。',
            '**绝对隔离:** 无WiFi、无连接到外部网络的以太网、无连接到互联网设备的USB连接。',
            '**数据永不离开:** 推理在本地进行，结果保留在本地。',
            '**更新手动进行:** 无法自动下载模型更新。更新需要物理媒体 (USB驱动器、SD卡) 或内部网络传输。',
          ],
        },
        architecture: {
          title: '典型气隙架构是什么样的?',
          content: [
            '**一台机器或小型集群，完全隔离，具有受限的物理访问。**',
          ],
          numberedItems: [
            '**专用硬件:** 仅用于LLM推理的服务器，无其他用途。',
            '**隔离网络:** 无连接到企业网络或互联网。最多独立VLAN。',
            '**加密存储:** 所有模型文件、数据、日志在静止时加密。',
            '**受控访问:** 仅授权人员可访问。需要多因素身份验证。',
            '**物理安全:** 锁定的服务器室、监视、访问日志。',
            '**无可移除媒体:** USB端口禁用、CD/DVD驱动器移除。',
            '**本地监控:** 日志保留在系统上，不发送到外部监控服务。',
          ],
        },
        networkIsolation: {
          title: '如何将网络与外部连接隔离?',
          content: [
            '**隔离在多个级别强制执行:**',
          ],
          items: [
            '**物理:** 气隙基础设施的独立网络硬件 (交换机、路由器)。',
            '**防火墙:** 入站和出站流量被阻止。云服务、NTP、外部DNS服务器无例外。',
            '**软件:** 主机级防火墙 (iptables、Windows Firewall) 作为次要控制。',
            '**监控:** 网络流量被审计。任何外部连接尝试都被记录和标记。',
          ],
        },
        modelManagement: {
          title: '如何在气隙环境中管理模型?',
          content: [
            '**模型更新是手动的，需要物理媒体传输或内部安全流程。**',
          ],
          numberedItems: [
            '在互联网连接的机器 (独立、非分类环境) 上下载模型。',
            '验证模型完整性 (校验和、数字签名)。',
            '通过加密USB驱动器或内部文件服务器传输到气隙系统。',
            '验证: 运行测试以确保模型完整性在传输过程中未被破坏。',
            '部署: 将模型加载到推理引擎中。',
            '文档: 记录部署了哪些模型、版本、日期。',
          ],
        },
        updates: {
          title: '如何处理更新和补丁?',
          content: [
            '**安全更新和模型更新是手动的:**',
          ],
          items: [
            '**模型更新:** 遵循上述流程。按季度或年度安排更新。',
            '**操作系统补丁:** 首先在隔离的暂存环境中测试，然后部署到生产环境。',
            '**依赖项:** 仔细评估新版本。气隙系统运行较旧版本的时间较长。',
            '**无自动更新:** 完全禁用自动更新。所有更新都受控制、记录和审计。',
          ],
        },
        security: {
          title: '如何确保气隙系统中的安全?',
          content: [
            '**气隙本质上更安全 (无外部攻击)，但会出现新风险:**',
          ],
          items: [
            '**内部威胁:** 拥有访问权限的员工可能通过USB复制数据。需要双人完整性检查。',
            '**供应链攻击:** 传输过程中的模型或依赖项被破坏。验证校验和、数字签名。',
            '**物理盗窃:** 价值数百万的模型和数据。需要锁定的房间、监视、入侵检测。',
            '**社交工程:** "相信我，我需要更新模型。" 需要正式的变更控制流程。',
            '**日志记录缺口:** 如果日志未被审计，没有人会发现内部活动。需要定期外部审计日志。',
          ],
        },
        commonMistakes: {
          title: '常见的气隙部署错误',
          items: [
            '**不完整隔离:** 留下一个开放端口、启用一个无线卡或允许USB设备会破坏气隙。严格审计。',
            '**无变更控制:** 模型更新非正式进行，无文档。导致部署版本信息丢失。',
            '**糟糕的备份策略:** 气隙系统需要冗余存储和异地备份。但备份本身必须是气隙的。',
            '**日志记录不足:** 气隙系统需要全面审计 (谁访问了什么、何时)。没有日志，违规行为无法检测。',
            '**仅信任物理安全:** 安全需要多个层次: 隔离、加密、访问控制、审计，而不仅仅是锁定的门。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '关于气隙系统的常见问题',
          faqs: [
            {
              q: '我们如何在气隙系统中更新模型?',
              a: '通过加密USB手动进行，或通过与互联网隔离的内部安全网络进行。所有更新都需要变更控制批准和审计跟踪。',
            },
            {
              q: '我们可以为气隙系统使用云备份吗?',
              a: '不可以。云备份需要互联网连接 (破坏气隙)。使用物理备份 (加密硬盘) 存储在独立安全设施中。',
            },
            {
              q: '气隙是否真的安全防止所有攻击?',
              a: '大多数情况下是的，但内部威胁仍然存在。气隙可以防止远程攻击，但物理访问或内部访问可能会破坏它。',
            },
            {
              q: '气隙部署的成本是多少?',
              a: '硬件成本$50k-$500k (比常规本地部署多不了多少)。运营成本 (安全、审计、培训) 由于手动流程而高5-10倍。',
            },
            {
              q: '我们可以在气隙环境中使用标准工具 (Ollama、vLLM) 吗?',
              a: '可以。两种工具都可以在没有互联网的情况下工作。部署一次，然后不需要互联网连接。确保所有依赖项都是离线安装的。',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[企业为何使用本地LLM](/zh/local-llms/why-enterprises-use-local-llms) -- 本地AI的业务案例。',
            '[企业合规与本地LLM](/zh/local-llms/enterprise-compliance-local-llms) -- 监管要求。',
            '[扩展企业本地LLM](/zh/local-llms/scaling-local-llms-enterprise) -- 单机以外的生产部署。',
            '[本地LLM安全和隐私检查清单](/zh/local-llms/local-llm-security-privacy-checklist) -- 12步安全验证。',
          ],
        },
        sources: {
          id: 'sources',
          title: '信息来源',
          items: [
            'NIST网络安全框架 -- nist.gov/cyberframework',
            'DoD数据管理 -- defense.gov/News/Releases/',
            '气隙安全指南 -- ietf.org (RFC关于网络隔离的文档)',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '本地LLM气隙部署: 隔离架构与分类数据保护',
        'description': '了解如何在完全隔离的网络环境中部署本地LLM: 包括网络隔离架构设计、模型离线管理、安全更新流程和分类信息保护。',
        'url': 'https://www.promptquorum.com/zh/local-llms/on-prem-air-gapped-local-llm',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Advanced',
        'about': [
          { '@type': 'Thing', 'name': '气隙部署' },
          { '@type': 'Thing', 'name': '网络隔离' },
          { '@type': 'Thing', 'name': '本地LLM' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '我们如何在气隙系统中更新模型?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '通过加密USB手动进行，或通过与互联网隔离的内部安全网络进行。所有更新都需要变更控制批准和审计跟踪。',
            },
          },
          {
            '@type': 'Question',
            'name': '我们可以为气隙系统使用云备份吗?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '不可以。云备份需要互联网连接 (破坏气隙)。使用物理备份 (加密硬盘) 存储在独立安全设施中。',
            },
          },
          {
            '@type': 'Question',
            'name': '气隙是否真的安全防止所有攻击?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '大多数情况下是的，但内部威胁仍然存在。气隙可以防止远程攻击，但物理访问或内部访问可能会破坏它。',
            },
          },
          {
            '@type': 'Question',
            'name': '气隙部署的成本是多少?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '硬件成本$50k-$500k (比常规本地部署多不了多少)。运营成本 (安全、审计、培训) 由于手动流程而高5-10倍。',
            },
          },
          {
            '@type': 'Question',
            'name': '我们可以在气隙环境中使用标准工具 (Ollama、vLLM) 吗?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '可以。两种工具都可以在没有互联网的情况下工作。部署一次，然后不需要互联网连接。确保所有依赖项都是离线安装的。',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': '本地LLM气隙部署',
        'numberOfItems': 3,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': '完全网络隔离',
            'description': '气隙基础设施与互联网或任何外部系统都没有网络连接，确保零外部访问。',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': '手动更新流程',
            'description': '模型更新仅需要物理媒体 (USB驱动器) 或内部安全网络；无云访问。',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': '增强的安全性',
            'description': '保护政府、军事和金融环境中的分类数据，需要最大的数据保护。',
          },
        ],
      },
    },
  };
