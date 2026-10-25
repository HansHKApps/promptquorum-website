import type { SolaStrings } from './types'

export const es: SolaStrings = {
  home: 'Inicio',
  about: 'Acerca de',
  series: 'El estado de la IA local',
  reportLabel: 'Informe 01',

  hubTitleSuffix: 'PromptQuorum',
  hubDescription:
    'Un informe trimestral sobre el estado de la IA local: cifras con fuentes, pruebas prácticas, supuestos señalados y un registro de afirmaciones. Próxima edición: enero de 2027.',
  hubIntro1:
    'El estado de la IA local es un informe trimestral sobre la situación actual de la IA local. Está escrito a partir de la experiencia del autor creando PromptQuorum y probando aplicaciones de IA local.',
  hubIntro2: 'Los hechos están etiquetados, las fuentes numeradas y los supuestos indican quién los hace y en qué se basan.',
  nextIssue: 'Próxima edición:',
  latestReport: 'Último informe',
  readReport: 'Leer el informe',
  evidenceFile: 'Archivo de evidencias',
  archive: 'Archivo',
  pressContact: 'Contacto de prensa',

  by: 'Por',
  dataCutOff: 'Cierre de datos',
  version: 'Versión',
  keyFindings: 'Hallazgos clave',
  fullEvidenceTitle: 'Evidencias completas y anexos',
  fullEvidenceSub:
    'Todas las notas de método, cálculos, recuadros de supuestos, tablas, el registro de afirmaciones y todas las fuentes numeradas. Se abre aquí mismo, sin necesidad de descargar.',
  evidenceEnglishNote: 'El archivo completo de evidencias (afirmaciones, cálculos y fuentes) solo está disponible en inglés.',
  scrollableTable: 'Tabla desplazable',
  citeThisReport: 'Citar este informe',
  aboutThisReport: 'Acerca de este informe',
  founderLine: 'es el fundador de PromptQuorum, con sede en Fráncfort, y cuenta con más de 30 años de experiencia en consultoría y dirección general.',
  methodPre: 'El método, las etiquetas, los supuestos y las fuentes se encuentran en la ',
  methodLink1: 'sección completa de evidencias',
  methodMid: ' de arriba, que también existe como ',
  methodLink2: 'página independiente',
  methodPost: '.',
  pressContactLabel: 'Contacto de prensa:',
  evidenceAndDownloads: 'Evidencias y descargas',
  evidenceFileSeparate: 'Archivo de evidencias como página independiente',
  claimRegister: 'Registro de afirmaciones (claims.csv)',
  sources: 'Fuentes',
  backTo: 'Volver a',
  correctionsAndUpdates: 'Correcciones y actualizaciones',
  translatedNote: 'Esta es una traducción del original en inglés; en caso de discrepancia, prevalece el original en inglés.',

  issues: {
    '2026-q4': {
      title: 'Pocas gallinas y aún menos huevos',
      subtitle:
        'La IA local crece rápido, pero la base instalada de hardware realmente utilizable es minúscula. Las grandes aplicaciones son todavía más escasas.',
      summary:
        'Muy pocos equipos pueden ejecutar un buen modelo de IA local, y aún menos aplicaciones hacen que valga la pena el esfuerzo. Nueve pruebas prácticas, cifras con fuentes y un registro de afirmaciones muestran dónde está hoy la IA local.',
      seoTitle: 'Pocas gallinas y aún menos huevos | Informe 01 IA local',
      metaDescription:
        'Informe 01 (Q4 2026): pocos equipos ejecutan buenos modelos de IA local y aún menos aplicaciones valen la pena. Cifras con fuentes y nueve pruebas.',
      keyFindings: [
        'En la encuesta de hardware de Steam de julio de 2026, el 25.9% de los sistemas encuestados tenía 16 GB de memoria gráfica y el 5.4% tenía 24 GB.',
        'En un Mac de 24 GB, en las pruebas del autor, el sistema usó 9.67 GB de memoria justo después del arranque, antes de cargar ningún modelo.',
        'De las nueve aplicaciones de IA local que probó el autor, ocho pudieron puntuarse; cuatro de esas ocho obtuvieron 2 o menos en su función principal.',
        'Entre el 2.2% y el 4.5% de los hogares o consumidores de EE. UU. paga por un chatbot de IA, según tres fuentes de datos de tarjetas. El 1% de mayores pagadores concentra el 19.5% del gasto de consumo en IA.',
        'El precio de lista del NVIDIA DGX Spark de 128 GB subió de $3,999 en el lanzamiento a $4,699 en febrero de 2026 y a $6,950 en octubre de 2026.',
        'Las ventas de portátiles y equipos de escritorio nuevos cayeron en el tercer trimestre de 2026: IDC informa de envíos un 20.1% menores, hasta 62.7 millones de unidades, y Omdia de una caída del 21.2%, hasta 58.1 millones.',
        'Los mayores modelos abiertos van unos cuatro meses por detrás de los mejores modelos en la nube, pero necesitan al menos 377 GB de memoria (un cálculo).',
        'Una búsqueda de "local AI" devuelve 10 resultados en la App Store alemana de Apple y 29 fichas en Google Play, entre unos 2.75 millones y 2.65 millones de aplicaciones.',
        'Las búsquedas de "local ai" en Google tuvieron su máximo a finales de mayo de 2026 y a mediados de octubre estaban en la mitad de su nivel de un año antes; el informe señala que esta divergencia respecto a otros indicadores no puede explicarse con los datos.',
      ],
      disclosure:
        'El autor fundó PromptQuorum, un sitio de contenidos y directorio sobre aplicaciones de IA local, y probó aplicaciones que figuran allí. Cada registro de prueba práctica, con sus etiquetas de evidencia y los propios errores del probador, está enlazado desde el archivo de evidencias. En las notas de prueba no consta ningún pago ni patrocinio.',
      correction: 'Versión 1.0: primera publicación.',
    },
  },
}
