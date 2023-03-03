export default {
  global: {
    componenteFormativo: 'El cliente potencial',
    descripcionCurso:
      'Tener claro cuál es el cliente potencial de la organización es de vital importancia para enfocar los esfuerzos comerciales y de <em>marketing</em>. Para lograrlo se pueden llevar a cabo herramientas y técnicas que permitan establecer la conexión entre las bondades de los productos o servicios y las necesidades del segmento de mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistemas de información',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Perfil del cliente potencial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Perfil del cliente potencial / Herramientas para perfilar clientes potenciales',
      referencia:
        'Beltrán Mora, M. N., Parrales Carvajal, V. M., & Ledesma Álvarez, G. D. (2019). <i>El Buyer Persona como factor clave entre las tendencias en Gestión Empresarial</i>. Recimundo, 3(3), pp. 659-681.',
      tipo: 'Artículo de revista científica de investigación',
      link: 'https://recimundo.com/index.php/es/article/view/615',
    },
    {
      tema:
        'Perfil del cliente potencial / Herramientas para perfilar clientes potenciales',
      referencia:
        'Servicio Nacional de Turismo -Sernatur (2017). <i>MANUAL DE DISEÑO</i> Experiencias Turísticas.',
      tipo: 'Libro',
      link:
        'https://www.sernatur.cl/wp-content/uploads/2018/11/MDD-Manual-de-Experiencias-Turi%CC%81sticas-1.pdf',
    },
    {
      tema: 'Datos e información',
      referencia:
        'Departamento Administrativo Nacional de Estadística - DANE (2016) Video: <i>Los datos y la información</i>. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IEx7KVfOqfM',
    },
    {
      tema: 'Propuesta de valor',
      referencia:
        'Osterwalder, A., Pigneur, Y., Bernarda, G. & Smith, A (2018) <em>Diseñando la propuesta de valor</em>. Deusto',
      tipo: 'Libro (resumen)',
      link: 'https://sinca.gob.mx/pdf/comunidad/Resumen_propuesta_de_valor.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Datos',
      significado:
        'registro de hechos reales o mediciones hechas sobre fenómenos, es decir, un símbolo o un conjunto de símbolos que se usan para representar algo que sucedió.',
    },
    {
      termino: '<em>Early adopter</em>',
      significado:
        'los <em>early adopters</em> de un producto o servicio son aquellos que se convierten en consumidores de este en cuanto sus primeros beneficios empiezan a hacerse visibles. Representan un 13,5% del mercado, frente al 2,5% que constituyen los innovadores, y la principal diferencia con estos últimos es que buscan dar solución a un problema real, para el cual todavía no han encontrado alguna de entre las existentes en el mercado que les satisfaga lo suficiente (intelectium, 2022).',
    },
    {
      termino: 'Encuesta',
      significado:
        'Encuesta:	Herramienta que se lleva a cabo mediante la aplicación de un cuestionario a una muestra de personas, proporcionando información sobre las opiniones, actitudes y comportamientos de los ciudadanos.',
    },
    {
      termino: 'Herramientas para perfilar',
      significado:
        'Herramientas que permiten identificar, conocer y reconocer las características del cliente potencial, creando segmentos en los cuales el <em>marketing</em> pueda enfocarse.',
    },
    {
      termino: 'Información',
      significado:
        'La información son datos interpretados, proporcionados con semántica (Beynon, 2018, p. 22).  La información, a su vez, es la salida de la transformación de los mismos, y surge para apoyar la toma de decisiones o definir la relación entre dos o más hechos.',
    },
    {
      termino: '<em>Leads</em>',
      significado:
        'Persona o empresa que haya expresado interés en los productos o servicios. Esta definición puede variar según si se está hablando con el equipo de <em>marketing</em> o de ventas. Para el primero, es un usuario que ha entregado sus datos y pasa a ser un registro en la base de datos, con el que la organización puede interactuar. (Inboundcycle, 2022).',
    },
    {
      termino: 'Mapa de valor',
      significado:
        'Con base a lo planteado por Osterwalder, A, Pigneur, Y, Bernarda, G y Smith, A (2018), es una herramienta que describe, de manera muy estructurada y detallada, las características de una propuesta de valor específica para un modelo de negocio, pero, basada en el perfil del cliente.',
    },
    {
      termino: 'Perfilar clientes',
      significado:
        'Consiste en identificar y describir con alto nivel de detalle las características de un posible comprador o usuario.',
    },
    {
      termino: 'Prospectar',
      significado:
        'Es identificar quiénes son los verdaderos clientes potenciales, con el objetivo de crear una lista de personas probables, para después, sistemáticamente, contactarlos con la esperanza de convertirlos en clientes actuales (Impulsa, 2022)',
    },
    {
      termino: 'Turista potencial',
      significado:
        'Es aquel que, debido a sus intereses, gustos, y/o preferencias, o los de su entorno social (amigos, familia, compañeros, etc.) probablemente viajará a un destino concreto por un periodo de tiempo determinado, con la condición de pernoctar en él.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beltrán Mora, M. N., Parrales Carvajal, V. M., & Ledesma Álvarez, G. D. (2019). <i>El Buyer Persona como factor clave entre las tendencias en Gestión Empresarial</i>. <Recimundo, 3(3), pp. 659-681.',
      link: '',
    },
    {
      referencia:
        'Beynon-Davies, P. (2018). <i>Sistemas de bases de datos</i>. Reverté.',
      link: '',
    },
    {
      referencia:
        'Bravo Cobeña, C., Valdivieso Guerra, P. & Arregui Pozo, R. (2018). <i>Los sistemas de información en la toma de decisiones gerenciales en las empresas comerciales de Portoviejo</i>. Revista Eca Sinergia, 9 (2), pp. 45-54. ',
      link: '',
    },
    {
      referencia:
        'Gallardo, A. T. (2019). <i>Elementos de un sistema de información contable efectivo</i>. Quipukamayoc, 27(53), pp. 73-79.',
      link: '',
    },
    {
      referencia:
        'Godoy, R., &; Rischele, L. (2021). <i>El poder de la excelencia comercial: Solución práctica de cómo potencializar los resultados de su empresa</i>. Escola de Gestão Aquila.',
      link: '',
    },
    {
      referencia:
        'Huerta-Riveros, P. C., Gaete-Feres, H. G., & Pedraja-Rejas, L. M. (2020). <i>Dirección estratégica, sistema de información y calidad. El caso de una universidad estatal chilena</i>. Información tecnológica, 31(2), pp. 253-266.',
      link: '',
    },
    {
      referencia:
        'Impulsa (s.f.) <i>¿Qué es prospectar?</i> [Impulsa]. Blogspot.',
      link: 'https://www.sistemaimpulsa.com/blog/que-es-prospectar/ ',
    },
    {
      referencia: 'Intelectium (2022) <i>¿Qué es un Early Adopter?</i>',
      link: 'https://intelectium.com/early-adopter/ ',
    },
    {
      referencia:
        'Artículo de revista	Maldonado Córdova, A. V., & Franco Gómez, M. C. (2018) <i>Principios de marketing y competitividad como estrategias claves para el desarrollo de las MIPYMES en la provincia de El Oro</i>. INNOVA Research Journal, 3(10.1) pp. 195-201',
      link: '',
    },
    {
      referencia:
        'Mendoza, S. H., & Ávila, D. D. (2020). <i>Técnicas e instrumentos de recolección de datos</i>. Boletín Científico de las Ciencias Económico Administrativas del ICEA, 9(17), pp. 51-53.',
      link: '',
    },
    {
      referencia:
        'Mora, M. N. B., Carvajal, V. M. P., & Álvarez, G. D. L. (2019). <i>El Buyer Persona como factor clave entre las tendencias en Gestión Empresarial</i>. RECIMUNDO, 3(3 ESP), pp. 659-681.  ',
      link: '',
    },
    {
      referencia:
        'Osterwalder, A., Pigneur, Y., Bernarda, & G. Smith, A (2018), <i>Diseñando la propuesta de valor</i>. Deusto.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Turismo -Sernatur (2017). <i>MANUAL DE DISEÑO</i> Experiencias Turísticas.',
      link: '',
    },
    {
      referencia:
        'Inboundcycle. (2022). <i>Buyer persona: el factor clave en tu estrategia de marketing y ventas</i>. InboundCycle:',
      link: 'https://www.inboundcycle.com/buyer-persona ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
