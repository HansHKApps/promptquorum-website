// Maps the free-text `license` strings used across src/lib/power-local-llm/apps/*.ts
// (e.g. "AGPL-3.0", "Apache 2.0 (variant)", "GPL-3.0 (editor) / AGPL-3.0 (server) / Apache-2.0 (GPUI)")
// to the license families explained in ai-tool-licenses-explained.ts, so the
// directory's License badge can show a short "core rule" popup instead of a
// bare string. Keep this in sync with that article: if a new license family
// is added there, add its matcher + blurb here too, and vice versa.

import type { Language } from '@/lib/blog/blogContent'

type Dict = Record<Language, string>

export type LicenseFamilyKey =
  | 'mit' | 'apache' | 'bsd' | 'gpl' | 'lgpl' | 'agpl' | 'mpl'
  | 'bsl' | 'sspl' | 'commonsClause' | 'sustainableUse' | 'rail'
  | 'ccBy' | 'customVendor' | 'proprietary' | 'unclear'

export interface LicenseFamily {
  key: LicenseFamilyKey
  name: Dict
  /** One or two short sentences: the core rule, not the full legal text. */
  summary: Dict
  /** Matched against the raw license string, case-insensitively, in array order (first match wins per family). */
  patterns: RegExp[]
}

export const LICENSE_FAMILIES: LicenseFamily[] = [
  {
    key: 'agpl',
    patterns: [/agpl/i],
    name: { en: 'AGPL-3.0', de: 'AGPL-3.0', fr: 'AGPL-3.0', ja: 'AGPL-3.0', zh: 'AGPL-3.0', es: 'AGPL-3.0', pt: 'AGPL-3.0', ar: 'AGPL-3.0', ko: 'AGPL-3.0' },
    summary: {
      en: 'Closes the SaaS loophole in GPL: even just hosting a modified version as a network service — no distribution needed — requires releasing your source code.',
      de: 'Schließt die SaaS-Lücke der GPL: Schon das Hosten einer geänderten Version als Netzwerkdienst — ganz ohne Weitergabe — verpflichtet zur Offenlegung des Quellcodes.',
      fr: 'Ferme la faille SaaS de la GPL : héberger une version modifiée comme service réseau — sans distribution — oblige déjà à publier le code source.',
      ja: 'GPLの「SaaS抜け穴」を塞ぐライセンス。改変版を配布せずネットワークサービスとしてホストするだけでも、ソースコードの公開義務が発生する。',
      zh: '堵上了 GPL 的 SaaS 漏洞：即使不分发,仅将修改版作为网络服务托管,也必须公开源代码。',
      es: 'Cierra la brecha SaaS de la GPL: alojar una versión modificada como servicio de red — sin distribuirla — ya obliga a publicar el código fuente.',
      pt: 'Fecha a brecha do SaaS na GPL: apenas hospedar uma versão modificada como serviço de rede — sem distribuição — já exige liberar o código-fonte.',
      ar: 'يغلق ثغرة SaaS الموجودة في GPL: مجرد استضافة نسخة معدَّلة كخدمة شبكية — دون توزيعها — يُلزم بنشر الشيفرة المصدرية.',
      ko: 'GPL의 SaaS 허점을 막는 라이선스. 배포 없이 네트워크 서비스로 수정판을 호스팅하기만 해도 소스 코드 공개 의무가 발생한다.',
    },
  },
  {
    key: 'lgpl',
    patterns: [/lgpl/i],
    name: { en: 'LGPL', de: 'LGPL', fr: 'LGPL', ja: 'LGPL', zh: 'LGPL', es: 'LGPL', pt: 'LGPL', ar: 'LGPL', ko: 'LGPL' },
    summary: {
      en: 'GPL for libraries: you can link it into a closed-source app without open-sourcing that app, as long as the library itself stays swappable and its own source stays open.',
      de: 'Die GPL für Bibliotheken: Sie können sie in eine proprietäre App einbinden, ohne diese offenzulegen — solange die Bibliothek selbst austauschbar und ihr Quellcode offen bleibt.',
      fr: 'La GPL pour les bibliothèques : vous pouvez l’intégrer à une appli propriétaire sans l’ouvrir, tant que la bibliothèque reste remplaçable et son propre code source ouvert.',
      ja: 'ライブラリ向けのGPL。ライブラリ自体を差し替え可能に保ち、そのソースを公開し続ける限り、クローズドソースアプリに組み込んでもアプリ側は非公開のままでよい。',
      zh: '面向库的 GPL 变体:只要库本身保持可替换且源码开放,就可以将其链接进闭源应用,无需公开该应用本身。',
      es: 'La GPL para bibliotecas: puedes enlazarla en una app de código cerrado sin abrir esa app, siempre que la biblioteca en sí siga siendo sustituible y su propio código permanezca abierto.',
      pt: 'A GPL para bibliotecas: você pode vinculá-la a um app de código fechado sem abri-lo, desde que a própria biblioteca permaneça substituível e seu código-fonte continue aberto.',
      ar: 'نسخة GPL مخصّصة للمكتبات: يمكنك ربطها بتطبيق مغلق المصدر دون فتح ذلك التطبيق، طالما بقيت المكتبة نفسها قابلة للاستبدال وظل مصدرها مفتوحًا.',
      ko: '라이브러리용 GPL. 라이브러리 자체가 교체 가능하고 소스가 공개된 상태를 유지하는 한, 클로즈드소스 앱에 링크해도 앱 자체를 공개할 필요는 없다.',
    },
  },
  {
    key: 'gpl',
    patterns: [/(?<!l|a)gpl/i, /\bgnu general public license\b/i],
    name: { en: 'GPL (v2/v3)', de: 'GPL (v2/v3)', fr: 'GPL (v2/v3)', ja: 'GPL（v2/v3）', zh: 'GPL（v2/v3）', es: 'GPL (v2/v3)', pt: 'GPL (v2/v3)', ar: 'GPL (v2/v3)', ko: 'GPL(v2/v3)' },
    summary: {
      en: 'If you distribute a modified version, you must release your changes under GPL too. Using it privately, in-house, doesn’t trigger this.',
      de: 'Wer eine geänderte Version weitergibt, muss die Änderungen ebenfalls unter der GPL veröffentlichen. Rein interne Nutzung löst diese Pflicht nicht aus.',
      fr: 'Si vous distribuez une version modifiée, vous devez publier vos modifications sous GPL aussi. Un usage privé, en interne, ne déclenche pas cette obligation.',
      ja: '改変版を配布する場合、その変更もGPLで公開する義務がある。社内など非公開の私的利用ではこの義務は発生しない。',
      zh: '如果你分发修改版,必须以 GPL 许可公开你的改动;仅内部私下使用不会触发该义务。',
      es: 'Si distribuyes una versión modificada, debes publicar tus cambios también bajo GPL. El uso privado e interno no activa esta obligación.',
      pt: 'Se você distribuir uma versão modificada, precisa liberar suas alterações também sob a GPL. Uso privado e interno não aciona essa obrigação.',
      ar: 'إذا وزّعت نسخة معدَّلة، يجب عليك نشر تعديلاتك أيضًا بموجب GPL. الاستخدام الداخلي الخاص لا يستوجب ذلك.',
      ko: '수정판을 배포하면 그 변경 사항도 GPL로 공개해야 한다. 사내에서만 비공개로 사용하는 경우에는 이 의무가 발생하지 않는다.',
    },
  },
  {
    key: 'mpl',
    patterns: [/\bmpl\b/i, /mozilla public license/i],
    name: { en: 'Mozilla Public License 2.0', de: 'Mozilla Public License 2.0', fr: 'Mozilla Public License 2.0', ja: 'Mozilla Public License 2.0', zh: 'Mozilla Public License 2.0', es: 'Mozilla Public License 2.0', pt: 'Mozilla Public License 2.0', ar: 'Mozilla Public License 2.0', ko: 'Mozilla Public License 2.0' },
    summary: {
      en: 'File-level copyleft: modified MPL files must stay open, but you can combine them with proprietary code in the same project.',
      de: 'Copyleft auf Dateiebene: Geänderte MPL-Dateien müssen offen bleiben, dürfen aber im selben Projekt mit proprietärem Code kombiniert werden.',
      fr: 'Copyleft au niveau du fichier : les fichiers MPL modifiés doivent rester ouverts, mais peuvent être combinés à du code propriétaire dans le même projet.',
      ja: 'ファイル単位のコピーレフト。改変したMPLファイルは公開のままにする必要があるが、同じプロジェクト内でプロプライエタリなコードと組み合わせることは可能。',
      zh: '文件级 Copyleft:修改过的 MPL 文件必须保持开放,但可以在同一项目中与专有代码混用。',
      es: 'Copyleft a nivel de archivo: los archivos MPL modificados deben seguir abiertos, pero pueden combinarse con código propietario en el mismo proyecto.',
      pt: 'Copyleft no nível de arquivo: arquivos MPL modificados devem permanecer abertos, mas podem ser combinados com código proprietário no mesmo projeto.',
      ar: 'حماية على مستوى الملف: يجب أن تبقى ملفات MPL المعدَّلة مفتوحة، لكن يمكن دمجها مع شيفرة مملوكة ضمن المشروع نفسه.',
      ko: '파일 단위 카피레프트. 수정한 MPL 파일은 공개 상태를 유지해야 하지만, 같은 프로젝트 안에서 독점 코드와 함께 사용할 수 있다.',
    },
  },
  {
    key: 'apache',
    patterns: [/apache/i],
    name: { en: 'Apache License 2.0', de: 'Apache License 2.0', fr: 'Apache License 2.0', ja: 'Apache License 2.0', zh: 'Apache License 2.0', es: 'Apache License 2.0', pt: 'Apache License 2.0', ar: 'Apache License 2.0', ko: 'Apache License 2.0' },
    summary: {
      en: 'Same freedoms as MIT — use, modify, resell, embed in closed-source products — plus an explicit patent grant from every contributor.',
      de: 'Die gleichen Freiheiten wie MIT — nutzen, ändern, weiterverkaufen, in proprietäre Produkte einbetten — plus eine ausdrückliche Patentfreigabe jedes Mitwirkenden.',
      fr: 'Mêmes libertés que MIT — utiliser, modifier, revendre, intégrer dans des produits fermés — plus une concession de brevet explicite de chaque contributeur.',
      ja: 'MITと同じ自由（利用・改変・再販・クローズドソース製品への組込みが可能）に加え、各コントリビューターから明示的な特許許諾が付与される。',
      zh: '与 MIT 相同的自由(可使用、修改、转售、嵌入闭源产品),外加每位贡献者明确的专利授权。',
      es: 'Las mismas libertades que MIT: usar, modificar, revender, integrar en productos de código cerrado, más una concesión explícita de patentes de cada colaborador.',
      pt: 'As mesmas liberdades da MIT — usar, modificar, revender, incorporar em produtos de código fechado — mais uma concessão explícita de patentes de cada contribuidor.',
      ar: 'نفس حريات MIT — الاستخدام والتعديل وإعادة البيع والتضمين في منتجات مغلقة المصدر — مع منح براءات اختراع صريح من كل مساهم.',
      ko: 'MIT와 동일한 자유(사용·수정·재판매·클로즈드소스 제품에 포함 가능)에 더해, 모든 기여자로부터 명시적인 특허 사용권까지 부여된다.',
    },
  },
  {
    key: 'bsd',
    patterns: [/\bbsd\b/i],
    name: { en: 'BSD License (2-/3-Clause)', de: 'BSD-Lizenz (2-/3-Clause)', fr: 'Licence BSD (2/3 clauses)', ja: 'BSDライセンス（2条項/3条項）', zh: 'BSD 许可证（2/3 条款）', es: 'Licencia BSD (2/3 cláusulas)', pt: 'Licença BSD (2/3 cláusulas)', ar: 'رخصة BSD (بندين/ثلاثة بنود)', ko: 'BSD 라이선스(2/3조항)' },
    summary: {
      en: 'Permissive like MIT. The 3-Clause version adds one rule: you can’t use the original authors’ names to promote your own fork.',
      de: 'Freizügig wie MIT. Die 3-Clause-Variante fügt eine Regel hinzu: Der Name der Autoren darf nicht zur Bewerbung des eigenen Forks genutzt werden.',
      fr: 'Permissive comme MIT. La version 3 clauses ajoute une règle : interdiction d’utiliser le nom des auteurs pour promouvoir votre propre fork.',
      ja: 'MITと同様に寛容なライセンス。3条項版では、元の作者名を自分のフォークの宣伝に使用できないという一点のみ制約が加わる。',
      zh: '与 MIT 一样宽松。3 条款版本多加一条规则:不得用原作者名义为自己的分支做宣传。',
      es: 'Permisiva como MIT. La versión de 3 cláusulas añade una regla: no puedes usar el nombre de los autores originales para promocionar tu propio fork.',
      pt: 'Permissiva como a MIT. A versão de 3 cláusulas adiciona uma regra: não é permitido usar o nome dos autores originais para promover seu próprio fork.',
      ar: 'متساهلة مثل MIT. تضيف نسخة الثلاثة بنود قاعدة واحدة: لا يجوز استخدام اسم المؤلفين الأصليين للترويج لنسختك المتفرعة الخاصة.',
      ko: 'MIT처럼 관대한 라이선스. 3조항 버전은 한 가지 규칙만 추가한다 — 원저작자 이름을 자신의 포크 홍보에 사용할 수 없다.',
    },
  },
  {
    key: 'mit',
    patterns: [/\bmit\b/i],
    name: { en: 'MIT License', de: 'MIT-Lizenz', fr: 'Licence MIT', ja: 'MITライセンス', zh: 'MIT 许可证', es: 'Licencia MIT', pt: 'Licença MIT', ar: 'رخصة MIT', ko: 'MIT 라이선스' },
    summary: {
      en: 'Do almost anything — use, modify, resell, embed in closed-source products. The only requirement is keeping the original copyright notice.',
      de: 'Fast alles erlaubt — nutzen, ändern, weiterverkaufen, in proprietäre Produkte einbetten. Einzige Pflicht: den ursprünglichen Copyright-Hinweis beibehalten.',
      fr: 'Presque tout est permis — utiliser, modifier, revendre, intégrer dans des produits fermés. Seule obligation : conserver la mention de copyright d’origine.',
      ja: 'ほぼ何でも自由（利用・改変・再販・クローズドソース製品への組込み）。唯一の義務は元の著作権表示を残すこと。',
      zh: '几乎可以做任何事——使用、修改、转售、嵌入闭源产品。唯一要求是保留原始版权声明。',
      es: 'Puedes hacer casi cualquier cosa: usar, modificar, revender, integrar en productos de código cerrado. El único requisito es conservar el aviso de copyright original.',
      pt: 'Você pode fazer quase tudo — usar, modificar, revender, incorporar em produtos de código fechado. A única exigência é manter o aviso de copyright original.',
      ar: 'يمكنك فعل أي شيء تقريبًا — الاستخدام والتعديل وإعادة البيع والتضمين في منتجات مغلقة المصدر. الشرط الوحيد هو الإبقاء على إشعار حقوق الطبع والنشر الأصلي.',
      ko: '거의 무엇이든 할 수 있다 — 사용, 수정, 재판매, 클로즈드소스 제품에 포함까지. 유일한 요건은 원본 저작권 고지를 유지하는 것이다.',
    },
  },
  {
    key: 'sspl',
    patterns: [/\bsspl\b/i, /server side public license/i],
    name: { en: 'SSPL', de: 'SSPL', fr: 'SSPL', ja: 'SSPL', zh: 'SSPL', es: 'SSPL', pt: 'SSPL', ar: 'SSPL', ko: 'SSPL' },
    summary: {
      en: 'Anyone offering the software as a hosted service must open-source their entire surrounding service stack — deliberately impractical for rival cloud providers.',
      de: 'Wer die Software als gehosteten Dienst anbietet, muss den gesamten umgebenden Service-Stack offenlegen — bewusst unpraktikabel für konkurrierende Cloud-Anbieter gestaltet.',
      fr: 'Quiconque propose le logiciel comme service hébergé doit ouvrir l’intégralité de la pile de services qui l’entoure — volontairement impraticable pour des fournisseurs cloud concurrents.',
      ja: 'ソフトウェアをホスティングサービスとして提供する者は、周辺のサービススタック全体をオープンソース化する義務がある。競合クラウド事業者にとって意図的に非現実的な条件。',
      zh: '任何以托管服务形式提供该软件的一方,必须公开其整个周边服务栈的源码——这是有意为竞争性云服务商设置的不切实际的门槛。',
      es: 'Quien ofrezca el software como servicio alojado debe abrir todo el stack de servicios que lo rodea — deliberadamente impráctico para proveedores de nube rivales.',
      pt: 'Quem oferecer o software como serviço hospedado precisa abrir todo o stack de serviços ao redor dele — deliberadamente impraticável para provedores de nuvem concorrentes.',
      ar: 'من يقدّم البرنامج كخدمة مستضافة يجب أن يفتح مصدر كامل حزمة الخدمات المحيطة به — وهذا شرط صُمم عمدًا ليكون غير عملي لمزوّدي السحابة المنافسين.',
      ko: '소프트웨어를 호스팅 서비스로 제공하는 누구든 주변 서비스 스택 전체를 오픈소스로 공개해야 한다 — 경쟁 클라우드 업체에게 의도적으로 비현실적인 조건이다.',
    },
  },
  {
    key: 'bsl',
    patterns: [/\bbsl\b/i, /\bbusl\b/i, /business source license/i],
    name: { en: 'Business Source License (BSL/BUSL)', de: 'Business Source License (BSL/BUSL)', fr: 'Business Source License (BSL/BUSL)', ja: 'Business Source License（BSL/BUSL）', zh: 'Business Source License（BSL/BUSL）', es: 'Business Source License (BSL/BUSL)', pt: 'Business Source License (BSL/BUSL)', ar: 'رخصة Business Source (BSL/BUSL)', ko: 'Business Source License(BSL/BUSL)' },
    summary: {
      en: 'Source is visible and broadly usable, but commercial use is restricted until a set future date, when it converts to a real open-source license.',
      de: 'Quellcode ist einsehbar und breit nutzbar, aber die kommerzielle Nutzung ist bis zu einem festgelegten Zukunftsdatum eingeschränkt, an dem sie in eine echte Open-Source-Lizenz übergeht.',
      fr: 'Le code source est visible et largement utilisable, mais l’usage commercial est restreint jusqu’à une date future fixée, où la licence devient réellement open source.',
      ja: 'ソースコードは公開され広く利用できるが、商用利用は定められた将来の日付まで制限され、その時点で正式なオープンソースライセンスに移行する。',
      zh: '源码可见且可广泛使用,但商业用途受限,直到设定的未来日期才转为真正的开源许可。',
      es: 'El código fuente es visible y ampliamente utilizable, pero el uso comercial está restringido hasta una fecha futura fijada, momento en el que se convierte en una licencia open source real.',
      pt: 'O código-fonte é visível e amplamente utilizável, mas o uso comercial é restrito até uma data futura definida, quando se converte em uma licença de código aberto de verdade.',
      ar: 'الشيفرة المصدرية مرئية وقابلة للاستخدام على نطاق واسع، لكن الاستخدام التجاري مقيّد حتى تاريخ مستقبلي محدد، تتحول بعده إلى رخصة مفتوحة المصدر حقيقية.',
      ko: '소스 코드는 공개되어 폭넓게 사용할 수 있지만, 상업적 이용은 정해진 미래 날짜까지 제한되며 그 시점 이후 정식 오픈소스 라이선스로 전환된다.',
    },
  },
  {
    key: 'commonsClause',
    patterns: [/commons clause/i],
    name: { en: 'Commons Clause', de: 'Commons Clause', fr: 'Commons Clause', ja: 'Commons Clause', zh: 'Commons Clause', es: 'Commons Clause', pt: 'Commons Clause', ar: 'Commons Clause', ko: 'Commons Clause' },
    summary: {
      en: 'An add-on restriction layered on another license that forbids selling the software, or reselling it as a paid hosted service.',
      de: 'Eine Zusatzbeschränkung, die auf eine andere Lizenz aufgesetzt wird und den Verkauf der Software oder ihren Weiterverkauf als kostenpflichtigen Hosting-Dienst untersagt.',
      fr: 'Une restriction ajoutée à une autre licence qui interdit de vendre le logiciel ou de le revendre comme service hébergé payant.',
      ja: '別のライセンスに追加される制限条項。ソフトウェアの販売、または有料ホスティングサービスとしての再販を禁止する。',
      zh: '附加在另一许可证之上的限制条款,禁止出售该软件,或将其作为付费托管服务转售。',
      es: 'Una restricción adicional sobre otra licencia que prohíbe vender el software o revenderlo como servicio alojado de pago.',
      pt: 'Uma restrição adicional aplicada sobre outra licença que proíbe vender o software ou revendê-lo como serviço hospedado pago.',
      ar: 'قيد إضافي يُضاف فوق رخصة أخرى، يمنع بيع البرنامج أو إعادة بيعه كخدمة استضافة مدفوعة.',
      ko: '다른 라이선스 위에 추가되는 제한 조항으로, 소프트웨어 판매나 유료 호스팅 서비스로의 재판매를 금지한다.',
    },
  },
  {
    key: 'sustainableUse',
    patterns: [/sustainable use/i, /fair-?code/i],
    name: { en: 'Sustainable Use License (fair-code)', de: 'Sustainable Use License (Fair-Code)', fr: 'Sustainable Use License (fair-code)', ja: 'Sustainable Use License（フェアコード）', zh: 'Sustainable Use License（fair-code）', es: 'Sustainable Use License (fair-code)', pt: 'Sustainable Use License (fair-code)', ar: 'رخصة Sustainable Use (fair-code)', ko: 'Sustainable Use License(fair-code)' },
    summary: {
      en: 'Free to use and self-host, including commercially inside your own organization, but you can’t resell it or offer it as a competing hosted service.',
      de: 'Kostenlos nutzbar und selbst hostbar, auch kommerziell im eigenen Unternehmen, aber nicht weiterverkaufbar oder als konkurrierender Hosting-Dienst anbietbar.',
      fr: 'Libre d’utilisation et d’auto-hébergement, même à des fins commerciales en interne, mais interdiction de le revendre ou de le proposer comme service hébergé concurrent.',
      ja: '自組織内であれば商用利用を含め、無料で使用・セルフホストできる。ただし転売したり、競合するホスティングサービスとして提供することはできない。',
      zh: '可免费使用并自行托管,包括在自己组织内部商用,但不得转售或将其作为竞争性托管服务提供。',
      es: 'Gratis para usar y autoalojar, incluso con fines comerciales dentro de tu propia organización, pero no puedes revenderlo ni ofrecerlo como servicio alojado competidor.',
      pt: 'Gratuito para usar e auto-hospedar, inclusive comercialmente dentro da sua própria organização, mas você não pode revendê-lo nem oferecê-lo como serviço hospedado concorrente.',
      ar: 'مجاني للاستخدام والاستضافة الذاتية، بما في ذلك الاستخدام التجاري داخل مؤسستك، لكن لا يجوز إعادة بيعه أو تقديمه كخدمة استضافة منافسة.',
      ko: '자체 조직 내 상업적 사용을 포함해 무료로 사용하고 셀프 호스팅할 수 있지만, 재판매하거나 경쟁 호스팅 서비스로 제공할 수는 없다.',
    },
  },
  {
    key: 'rail',
    patterns: [/\brail\b/i, /openrail/i],
    name: { en: 'RAIL / OpenRAIL', de: 'RAIL / OpenRAIL', fr: 'RAIL / OpenRAIL', ja: 'RAIL / OpenRAIL', zh: 'RAIL / OpenRAIL', es: 'RAIL / OpenRAIL', pt: 'RAIL / OpenRAIL', ar: 'RAIL / OpenRAIL', ko: 'RAIL / OpenRAIL' },
    summary: {
      en: 'An AI-model license granting broad, often commercial, use rights while explicitly prohibiting specific harmful uses (e.g., disinformation, discriminatory profiling).',
      de: 'Eine KI-Modelllizenz mit weitreichenden, oft kommerziellen Nutzungsrechten, die aber bestimmte schädliche Nutzungen (z. B. Desinformation, diskriminierendes Profiling) ausdrücklich untersagt.',
      fr: 'Une licence de modèle d’IA accordant des droits d’usage larges, souvent commerciaux, tout en interdisant explicitement certains usages nuisibles (désinformation, profilage discriminatoire, etc.).',
      ja: 'AIモデル向けライセンス。商用利用を含む広範な利用権を認めつつ、特定の有害な用途（偽情報の流布、差別的なプロファイリングなど）を明示的に禁止する。',
      zh: '一种 AI 模型许可,授予广泛(通常包括商用)的使用权,同时明确禁止特定的有害用途(如虚假信息传播、歧视性画像等)。',
      es: 'Una licencia de modelo de IA que otorga amplios derechos de uso, a menudo comerciales, mientras prohíbe explícitamente usos dañinos específicos (desinformación, perfilado discriminatorio, etc.).',
      pt: 'Uma licença de modelo de IA que concede amplos direitos de uso, muitas vezes comerciais, ao mesmo tempo em que proíbe explicitamente usos prejudiciais específicos (desinformação, perfilamento discriminatório etc.).',
      ar: 'رخصة لنماذج الذكاء الاصطناعي تمنح حقوق استخدام واسعة، تجارية غالبًا، بينما تحظر صراحةً استخدامات ضارة محددة (مثل التضليل الإعلامي أو التنميط التمييزي).',
      ko: '광범위하고 흔히 상업적인 사용권을 부여하면서도 특정 유해 사용(허위정보 유포, 차별적 프로파일링 등)은 명시적으로 금지하는 AI 모델 라이선스.',
    },
  },
  {
    key: 'ccBy',
    patterns: [/cc-by/i, /creative commons/i],
    name: { en: 'Creative Commons Attribution (CC-BY)', de: 'Creative Commons Attribution (CC-BY)', fr: 'Creative Commons Attribution (CC-BY)', ja: 'クリエイティブ・コモンズ 表示（CC-BY）', zh: '知识共享署名许可（CC-BY）', es: 'Creative Commons Attribution (CC-BY)', pt: 'Creative Commons Attribution (CC-BY)', ar: 'رخصة المشاع الإبداعي - النسب (CC-BY)', ko: '크리에이티브 커먼즈 저작자표시(CC-BY)' },
    summary: {
      en: 'Free to use, modify, and redistribute, even commercially, as long as you credit the original creator.',
      de: 'Kostenlos nutzbar, änderbar und weiterverbreitbar, auch kommerziell, solange der ursprüngliche Urheber genannt wird.',
      fr: 'Libre d’utilisation, de modification et de redistribution, même commerciale, tant que le créateur original est crédité.',
      ja: '元の作成者をクレジット表記する限り、商用利用を含め自由に使用・改変・再配布できる。',
      zh: '只要注明原作者,即可免费使用、修改和再分发,包括商业用途。',
      es: 'Gratis para usar, modificar y redistribuir, incluso comercialmente, siempre que se acredite al creador original.',
      pt: 'Gratuito para usar, modificar e redistribuir, mesmo comercialmente, desde que o criador original seja creditado.',
      ar: 'مجاني للاستخدام والتعديل وإعادة التوزيع، حتى تجاريًا، طالما تم نسب العمل إلى صاحبه الأصلي.',
      ko: '원작자를 표시하는 한, 상업적 이용을 포함해 자유롭게 사용·수정·재배포할 수 있다.',
    },
  },
  {
    key: 'proprietary',
    patterns: [/proprietary/i, /closed source/i, /^free\b/i],
    name: { en: 'Proprietary / Closed Source', de: 'Proprietär / Closed Source', fr: 'Propriétaire / Source fermée', ja: 'プロプライエタリ（クローズドソース）', zh: '专有 / 闭源', es: 'Propietario / Código cerrado', pt: 'Proprietário / Código fechado', ar: 'مملوك / مغلق المصدر', ko: '독점(클로즈드소스)' },
    summary: {
      en: 'No source access and no right to modify, audit, or fork. The vendor can change terms, pricing, or availability at any time.',
      de: 'Kein Quellcodezugriff und kein Recht zu ändern, prüfen oder forken. Der Anbieter kann Konditionen, Preise oder Verfügbarkeit jederzeit ändern.',
      fr: 'Aucun accès au code source, aucun droit de modifier, auditer ou forker. L’éditeur peut modifier les conditions, le prix ou la disponibilité à tout moment.',
      ja: 'ソースコードへのアクセス権、改変・監査・フォークする権利はない。ベンダーはいつでも条件、価格、提供状況を変更できる。',
      zh: '无法访问源码,也无权修改、审计或分叉。厂商可随时更改条款、定价或可用性。',
      es: 'Sin acceso al código fuente ni derecho a modificar, auditar o bifurcar. El proveedor puede cambiar los términos, el precio o la disponibilidad en cualquier momento.',
      pt: 'Sem acesso ao código-fonte e sem direito de modificar, auditar ou bifurcar. O fornecedor pode alterar os termos, o preço ou a disponibilidade a qualquer momento.',
      ar: 'لا يوجد وصول إلى الشيفرة المصدرية ولا حق في التعديل أو التدقيق أو التفريع. يمكن للمزوّد تغيير الشروط أو السعر أو التوفر في أي وقت.',
      ko: '소스 코드 접근 권한이 없으며 수정·감사·포크할 권리도 없다. 공급업체는 언제든 약관, 가격, 제공 여부를 바꿀 수 있다.',
    },
  },
  {
    key: 'customVendor',
    patterns: [/cpml/i],
    name: { en: 'Custom Vendor License', de: 'Herstellerspezifische Lizenz', fr: 'Licence propre à l’éditeur', ja: 'ベンダー独自ライセンス', zh: '厂商自定义许可', es: 'Licencia propia del proveedor', pt: 'Licença própria do fornecedor', ar: 'رخصة خاصة بالمزوّد', ko: '벤더 자체 라이선스' },
    summary: {
      en: 'A vendor-specific license that reads like open access but adds its own conditions — commonly a usage-scale threshold above which a commercial agreement is required.',
      de: 'Eine herstellerspezifische Lizenz, die wie offener Zugang wirkt, aber eigene Bedingungen enthält — meist eine Nutzungsschwelle, ab der eine kommerzielle Vereinbarung nötig wird.',
      fr: 'Une licence propre à l’éditeur qui ressemble à un accès ouvert mais ajoute ses propres conditions — souvent un seuil d’usage au-delà duquel un accord commercial devient nécessaire.',
      ja: '一見オープンなアクセスに見えるが独自の条件を付加するベンダー独自ライセンス。多くの場合、一定の利用規模を超えると商用契約が必要になる。',
      zh: '一种厂商自定义许可,表面看似开放访问,实则附加了自己的条件——通常是使用规模超过某阈值后需要签订商业协议。',
      es: 'Una licencia propia del proveedor que parece de acceso abierto pero añade sus propias condiciones — normalmente un umbral de uso a partir del cual se requiere un acuerdo comercial.',
      pt: 'Uma licença própria do fornecedor que parece de acesso aberto, mas adiciona suas próprias condições — geralmente um limite de uso acima do qual é necessário um acordo comercial.',
      ar: 'رخصة خاصة بمزوّد معيّن تبدو كأنها وصول مفتوح لكنها تضيف شروطها الخاصة — غالبًا عتبة استخدام يتطلب تجاوزها اتفاقية تجارية.',
      ko: '개방형 접근처럼 보이지만 자체 조건을 추가하는 벤더 전용 라이선스 — 흔히 특정 사용 규모를 넘으면 상업 계약이 필요해진다.',
    },
  },
  {
    key: 'unclear',
    patterns: [/not publicly documented/i, /^various$/i, /unconfirmed/i, /^open source$/i],
    name: { en: 'License Not Confirmed', de: 'Lizenz nicht bestätigt', fr: 'Licence non confirmée', ja: 'ライセンス未確認', zh: '许可证未确认', es: 'Licencia sin confirmar', pt: 'Licença não confirmada', ar: 'الترخيص غير مؤكد', ko: '라이선스 미확인' },
    summary: {
      en: 'This tool’s exact license terms aren’t publicly documented or verified yet. Check the project’s own repository or website before relying on it commercially.',
      de: 'Die genauen Lizenzbedingungen dieses Tools sind noch nicht öffentlich dokumentiert oder verifiziert. Vor kommerzieller Nutzung im eigenen Repository bzw. auf der Website des Projekts prüfen.',
      fr: 'Les conditions exactes de licence de cet outil ne sont pas encore documentées publiquement ni vérifiées. Vérifiez le dépôt ou le site du projet avant toute utilisation commerciale.',
      ja: 'このツールの正確なライセンス条件はまだ公に文書化・確認されていない。商用利用の前にプロジェクト自身のリポジトリやウェブサイトを確認すること。',
      zh: '该工具的确切许可条款尚未公开记录或核实。商用前请先查阅该项目自身的代码仓库或官网。',
      es: 'Los términos exactos de la licencia de esta herramienta aún no están documentados públicamente ni verificados. Consulta el repositorio o el sitio web del proyecto antes de usarla comercialmente.',
      pt: 'Os termos exatos da licença desta ferramenta ainda não estão documentados publicamente nem verificados. Consulte o repositório ou o site do próprio projeto antes de usá-la comercialmente.',
      ar: 'شروط الترخيص الدقيقة لهذه الأداة غير موثقة علنًا أو مؤكدة بعد. راجع مستودع المشروع أو موقعه قبل الاعتماد عليها تجاريًا.',
      ko: '이 도구의 정확한 라이선스 조건은 아직 공개적으로 문서화되거나 확인되지 않았다. 상업적으로 사용하기 전 프로젝트 자체 저장소나 웹사이트를 확인할 것.',
    },
  },
]

const FAMILY_BY_KEY: Record<LicenseFamilyKey, LicenseFamily> = Object.fromEntries(
  LICENSE_FAMILIES.map((f) => [f.key, f])
) as Record<LicenseFamilyKey, LicenseFamily>

/**
 * Returns every license family whose pattern matches the raw string, in
 * LICENSE_FAMILIES priority order (AGPL before GPL, etc. — see array order).
 * A compound string like "GPL-3.0 (editor) / AGPL-3.0 (server) / Apache-2.0
 * (GPUI)" legitimately matches more than one family; the modal renders all
 * of them rather than picking one arbitrarily.
 */
export function matchLicenseFamilies(raw: string): LicenseFamily[] {
  return LICENSE_FAMILIES.filter((f) => f.patterns.some((p) => p.test(raw)))
}

export function getLicenseFamily(key: LicenseFamilyKey): LicenseFamily {
  return FAMILY_BY_KEY[key]
}
