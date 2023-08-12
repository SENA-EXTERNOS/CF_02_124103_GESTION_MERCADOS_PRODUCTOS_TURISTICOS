<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Sistemas de información 

    .row.justify-content-center.align-items-center.mb-5
      
      .col-lg-7
        p En la era de conocimiento denominada Sistemas de Información,  gracias a la cantidad de esta disponible y accesible para todos, la producción de contenidos ya no solo está en manos de los científicos, diseñadores, estudiosos o artistas, sino que  ahora todos pueden ser generadores de productos digitales como videos, imágenes y textos para llegar a diferentes públicos objetivos.

        p Para ampliar la información acerca de los sistemas de información, es necesario ver lo siguiente:

      .col-lg-5
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")
        
    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h3.mb-0 Era del conocimiento

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-tarjeta-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')
          
        p.text-center Los empresarios pueden compartir el contenido de sus productos y servicios. Así mismo, los consumidores tienen acceso a la información de manera instantánea, según sean sus gustos, afinidades o a través de una búsqueda sencilla. 

      .col-md.tarjeta.color-tarjeta-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')

        p.text-center Para las organizaciones el manejo de la información que se genera a diario, tanto interna como externamente, es de vital importancia, toda vez que aporta de manera significativa en la toma de decisiones administrativas, financieras, comerciales y de producción.

      .col-md.tarjeta.color-tarjeta-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')
          
        p.text-center La popular frase ‘quien tiene la información tiene el poder’, precisamente hace referencia a la importancia demostrada de tener acceso a la información correcta de forma oportuna, para la elección de alternativas de solución a una situación o disyuntiva que se presente. 

    .row.mt-5.justify-content-center
      .col-lg-8
          a.anexo.mb-4(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
             p #[b Anexo 1.] Para ampliar esta información ver: Anexo 1, Sistemas de información.

           

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h3.mb-0 Funcionamiento y componentes

    .row.justify-content-center.align-items-center.mb-5
      
      .col-lg-8
      
        p Los sistemas de información pueden tener un alcance local, regional, nacional, internacional, incluso,  funcionar exclusivamente al interior de una organización, en apoyo a la buena gestión de esta. También pueden existir  simultáneamente sistemas que  cumplen diferentes propósitos, relacionándose entre sí o alimentando a otros de mayor alcance. No obstante, sin importar la trascendencia, propósito o tema que tengan, todos ellos funcionan de manera similar; y esto es a través de tres etapas fundamentales que marcan el funcionamiento de todo sistema, dejando ver sus componentes y estructura; estas son: 

        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            p.mb-0 Entradas.

          li 
            i.fas.fa-angle-right
            p.mb-0 Transformación.

          li 
            i.fas.fa-angle-right
            p.mb-0 Salidas.

        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-5
           p Si estas se equiparan a un sistema de producción, como la elaboración de pan por ejemplo, la etapa de entrada haría referencia a los ingredientes de preparación, que serían la materia prima, la mano de obra, la energía, el capital y el <i>know-how</i> o conocimiento requerido para prepararlo; el proceso sería la transformación de los ingredientes a través del <i>know-how</i> y el uso de las herramientas. Finalmente, la salida sería el pan listo para consumir. 


      .col-lg-4
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img5.png", alt="alt")

    .row.mt-5
      p Se encuentran los siguientes componentes en cada etapa: 


    ImagenInfografica.color-acento-botones.banner2-tema-1
      template(v-slot:imagen)
        figure(data-aos="zoom-in-left")
          img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="37%" y="11%" numero="1")
        .h5.mb-2 Etapa 1 - Entrada
        p Este es el primer paso, en el cual, a través de diferentes métodos y herramientas de recolección de datos, se obtiene la información que constituye el insumo o materia prima que será transformado. Estos deben corresponder al propósito de su recolección, es decir, el del sistema de información, por lo que deben ser seleccionados con anterioridad y objetividad.

        p En el sector turístico, por ejemplo, al interior de un hotel, existe un sistema de información que almacena y transforma el registro de ocupación del hotel. Este los recolecta a través del proceso de <i>check-in</i>, que recoge con números la cantidad de personas que entran y salen, además de sus edades, el tiempo que se van a hospedar, sus datos básicos, y si realiza algún pedido especial durante su estancia. 

      .tarjeta.color-acento-botones.p-3(x="60%" y="11%" numero="2")
        .h5.mb-2 Etapa 2 - Transformación
        p En esta etapa los datos anteriormente seleccionados se procesan y transforman, haciendo uso de diferentes métodos de procesamiento (selección, organización, tabulación, validación, cálculo e interpretación). Hoy en día este se encuentra muy unido a la tecnología, ya que le permite realizar de una manera más rápida, efectiva y automatizada su labor. 

        p Continuando con el ejemplo dentro del hotel, los datos recolectados son procesados, clasificados y divididos a través del sistema, según el propósito de las salidas del mismo.


      .tarjeta.color-acento-botones.p-3(x="83%" y="11%" numero="3")
        .h5.mb-2 Etapa 3 - Salida
        p La última etapa es la salida de la información. Esta es entregada como información básica, la cual, dependiendo del propósito del sistema y la percepción humana, puede ser interpretada de diferentes maneras, facilitando generar variaciones derivadas de ella y su aplicabilidad en diferentes ámbitos.  

        p Finalizando con el ejemplo, la información procesada desde el sistema de registro de ocupación del hotel puede encontrar diferentes salidas, como:

        ul.lista-ul
          li 
            i.lista-ul__vineta
            p.mb-0 Habitaciones disponibles para hospedar nuevos huéspedes.

          li
            i.lista-ul__vineta
            p.mb-0 Habitaciones ocupadas y que requieren del servicio de aseo. 

          li
            i.lista-ul__vineta
            p.mb-0 Porcentaje de ocupación por día, semana, mes o año.

          li
            i.lista-ul__vineta
            p.mb-0 El <i>Revenue Per Available Room (RevPAR)</i>, es un indicador hotelero que muestra el ingreso en un periodo determinado por habitación disponible.

          li
            i.lista-ul__vineta
            p.mb-0 Flujo de caja.

    .row.mt-5
      p Como se puede apreciar, los sistemas de información funcionan a través de la interrelación coordinada de los componentes que integran cada etapa (entrada, transformación y salida), que, a su vez, se estructuran de acuerdo a las necesidades de cada organización. A continuación, visualice la siguiente infografía:


    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10.col-xs-12
        figure(data-aos="zoom-in-left")
          img(src='@/assets/curso/temas/tema1/img10.svg', alt='Texto que describa la imagen')

    

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h3.mb-0 Datos y datos comerciales 

    .row.justify-content-center.align-items-center.mb-5
      
      .col-lg-7
        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-5
           p Como se mencionaba anteriormente, los datos son los elementos de la etapa de entrada y hacen referencia a todo registro de hechos reales o de mediciones registradas sobre fenómenos, es decir, un dato es un símbolo o un conjunto de símbolos que se usan para representar algo que sucedió.

        p.mt-3 Estas relaciones entre símbolos y lo que ellas representan son la esencia de lo que se denomina información, por lo tanto, son datos interpretados, proporcionados con semántica (Beynon-Davies, 2018). La información, a su vez, es la salida de la transformación de estos mismos, y surge para apoyar la toma de decisiones o definir la relación entre dos o más hechos. 

        p.mt-3 Para comprender mejor, es momento de ejemplificar:

        

      .col-lg-5
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img11.png", alt="alt")

    .row.mt-5
      p.mt-3 Relación entre el dato y la información en el sistema.

      figure(data-aos="zoom-in-left").mt-5
          img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt")

        
      p.mt-3 La figura muestra cómo los datos que entran al sistema se conjugan entre sí a través de una fórmula en la etapa de transformación, que arroja como resultado el porcentaje de ocupación del hotel para esa fecha.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-5
           p Los dos datos que se muestran corresponden a un hecho registrado en un hotel y a los elementos de entrada en ese sistema de información. Posteriormente, a través de un cálculo matemático, se relacionan como elemento de transformación, dando como resultado lo que se presenta en la salida.   

        p.mt-3 Otro aspecto a resaltar en este ejemplo, es que los datos son hechos sin mayor transformación y/o análisis, a diferencia de la información que refiere el nivel de ocupación que tuvo el hotel en un día específico, y que es producto de la interrelación de ambos. Con la misma, el jefe de recepción puede tomar decisiones sobre las estrategias de promoción o la gestión comercial que requiere realizar para aumentarla. 

    .row.justify-content-center.align-items-center.mb-5
      
      .col-lg-7

        p.mt-3 Por consiguiente, al contar con registros diarios de habitaciones disponibles y ocupadas, sumado al registro de las acciones realizadas por los huéspedes en temas de consumo, facturación, preferencias, reclamos, peticiones y demás, se configuran un conjunto de elementos que se requieren organizar para que, en el momento en que se necesite, esté disponible y sea de fácil acceso; siendo esto lo que denominamos una base de datos.

        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-5
           p Es por esto que una base de datos se puede definir, de acuerdo a Beynon-Davies (2018), como una colección organizada de hechos o aserciones positivas cuyo significado representa algún universo del discurso (UdD), es decir, en una clasificación y en la relación entre las diferentes tipificaciones creadas.

      .col-lg-5
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img13.png", alt="alt")

    .row.mt-5
      p Como se puede ven en la imagen que se presenta a continuación, existe un listado de hechos (número de habitaciones disponibles para la venta y número de habitaciones ocupadas) que están organizados por los meses del año en que tuvieron lugar, además, se muestra su porcentaje de ocupación promedio por mes y los totales por año, configurando una base de datos de la ocupación en un hotel.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-5
           p Esta muestra el nivel de ocupación con base a sus habitaciones disponibles de manera mensual. Algo a resaltar es que estas últimas no fueron iguales en todos los meses debido a los procesos de mantenimiento que tuvieron lugar en algunas de ellas por períodos de tiempo.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-c
            table
              thead
                tr
                  th.text-center.text-center Mes
                  th.text-center Número de habitaciones disponibles para la venta
                  th.text-center Número de habitaciones ocupadas
                  th.text-center Porcentaje de ocupación
              tbody
                tr
                  td.text-center Enero
                  td.text-center 43
                  td.text-center 43
                  td.text-center 100%
                tr
                  td.text-center Febrero
                  td.text-center 43
                  td.text-center 15
                  td.text-center 35%
                tr
                  td.text-center Marzo
                  td.text-center 43
                  td.text-center 12
                  td.text-center 28%
                tr
                  td.text-center Abril
                  td.text-center 43
                  td.text-center 43
                  td.text-center 100%
                tr
                  td.text-center Mayo
                  td.text-center 43
                  td.text-center 35
                  td.text-center 81%
                tr
                  td.text-center Junio
                  td.text-center 40
                  td.text-center 40
                  td.text-center 100%
                tr
                  td.text-center Julio
                  td.text-center 41
                  td.text-center 41
                  td.text-center 100%
                tr
                  td.text-center Agosto
                  td.text-center 43
                  td.text-center 10
                  td.text-center 23%
                tr
                  td.text-center Septiembre
                  td.text-center 43
                  td.text-center 34
                  td.text-center 79%
                tr
                  td.text-center Octubre
                  td.text-center 42
                  td.text-center 35
                  td.text-center 83%
                tr
                  td.text-center Noviembre
                  td.text-center 43
                  td.text-center 25
                  td.text-center 58%
                tr
                  td.text-center Diciembre
                  td.text-center 43
                  td.text-center 43
                  td.text-center 100%
                tr
                  th.text-center Totales
                  th.text-center 510 habitaciones disponibles en el año
                  th.text-center 376 habitaciones ocupadas durante el año
                  th.text-center 73% habitaciones ocupadas durante el año

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.png')})`}"
          )

          .bloque-texto-g__texto.p-4
            p.mb-0 En virtud a que todo hecho es un dato, las empresas se encuentran inundadas de los mismos, a nivel financiero, administrativo, de producción o de la operación comercial del negocio. Y aunque en muchos casos es necesario hacer el cruce de datos de diferentes tipos, también es cierto que las bases de cada área de la empresa deben estar bien organizadas para que puedan ser de utilidad, y no generar mayor trabajo añadido.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-5
           p En el caso de los datos comerciales, se definen como todos los hechos relacionados con los clientes actuales y potenciales; sus comportamientos y relación con los productos y servicios de la empresa. Ejemplos de bases datos comerciales serían: listados de clientes actuales por producto, de clientes potenciales por producto, de productos vendidos en un determinado segmento de mercado, de preferencias de los consumidores en relación con los productos y servicios de la empresa, calificación de los servicios recibidos por los clientes en un periodo de tiempo determinado, entre otros.

      .col-lg-5
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img15.png", alt="alt")

    .row.mt-5
      p Por último, los datos comerciales provienen de diferentes fuentes de información, como se muestra a continuación en la imagen:

    .row.justify-content-center.align-items-center.mb-5.mt-3
      .col-12
        h3.text-center DIFERENTES FUENTES DE INFORMACIÓN

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          figure(data-aos="zoom-in-left")
            img(src="@/assets/curso/temas/tema1/img16.svg", alt="alt").width-image-tema1
          .tarjeta-numerada__numero
          p.text-center 
            b Datos demográficos de los clientes potenciales: 
          p.text-center.text-small Estos por lo general son datos generales públicos de la tendencia de consumo de una población en relación con un tipo de producto o servicio o características de la población que se relacionan con las del mercado objetivo de la organización. Por ejemplo, si es una empresa distribuidora de juguetes le interesará conocer en la ciudad donde operan, el número de hogares con uno o más hijos, la edad de sus padres y su nivel salarial. 

      .col-md-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          figure(data-aos="zoom-in-left").pb-2
            img(src="@/assets/curso/temas/tema1/img17.svg", alt="alt").width-image-tema1
          .tarjeta-numerada__numero
          p.text-center 
            b Datos de su propia oferta de productos y servicios:
          p.text-center.text-small.pb-5 Para esto las empresas acostumbran tener una clasificación según sea su necesidad de análisis. Algunas clasifican según la tipología de productos y servicios que tienen y otras lo asocian al nivel de precio o al tipo de cliente que los consume; o incluso un mix de estas clasificaciones.
      
    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h3.mb-0 Métodos e instrumentos de recolección de datos 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-5
           p Según Mendoza y Ávila (2020), la recolección de datos es considerada como una medición y el instrumento para su recolección está orientado a crear las condiciones para ello. Es una precondición para obtener el conocimiento científico. Existen dos grandes formas para realizar la labor de recaudo: a partir de fuentes primarias y secundarias. 

        p.mt-3 Las fuentes secundarias permiten realizar consultas de documentos, investigaciones, artículos, libros, entre otros; escritas por otros autores que indagaron el tema con anterioridad. Estas cumplen la función de respaldar la base teórica del proceso de búsqueda. Las fuentes primarias son aquellas en las que los investigadores recogen de primera mano los datos necesarios, haciendo uso de herramientas o instrumentos de recolección.  Algunas de estas son:

      .col-lg-5
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img18.png", alt="alt")

    .row
      .col-lg-12.order-2.order-lg-1
        TabsC.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4.mb-3(titulo="Entrevistas de <em>focus group</em>")
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img19.png", alt="alt")

              .col-lg-9
                p Es una entrevista no estructurada, de flujo libre, que se realiza con un pequeño grupo de entre seis y diez personas, en la que un moderador entrenado sigue un formato flexible.

                p Los <i>focus group</i>, son un método que permite que las personas entrevistadas se  expresen con facilidad sus sentimientos, ansiedades, frustraciones reales y convicciones, con sus propias palabras. Son fáciles, rápidas, con perspectivas múltiples y alto grado de escrutinio. Es importante tener en cuenta la labor del moderador, la selección de los integrantes, el diseño de la guía de discusión y si esta se llevará a cabo de manera virtual o presencial. 

          .tarjeta.clr-paleYellow2.p-4.mb-3(titulo="Entrevistas de profundidad")
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img20.svg", alt="alt")

              .col-lg-9
                p Las entrevistas de profundidad, al contrario de las #[i focus group], se enfocan en el método uno a uno, permitiendo una dirección particular al sondeo en el cual se pide a los consumidores que compartan diferencias entre marcas a diferentes niveles (atributos, beneficios y valor).

                p Las entrevistas a profundidad suelen tener una duración mayor a una hora, y generan mayor cantidad de información a registrar y analizar. Además, aportan una sensación de privacidad y mayor libertad para la expresión de las consideraciones del entrevistado.

                p Debido a que no tiene preguntas estructuradas, se debe contar con un objetivo claro que la oriente.

                p #[b Ejemplo:] Distinguir a través de las entrevistas las diferencias y particularidades de dos atractivos turísticos.

                p.bm-0 a) El patrimonio que representan. 
                p.bm-0 b) Las experiencias que ofrecen. 
                p.bm-0 c) La emoción que generan.

         
          .tarjeta.clr-paleYellow.p-4.mb-3(titulo="Conversaciones")
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img21.svg", alt="alt")

              .col-lg-9
                p Las conversaciones son un medio para recabar información con un enfoque no estructurado, donde el objetivo es que el interlocutor dialogue sobre sus experiencias en un tema determinado. El resultado se extrae del diálogo resultante.

                p #[b Ejemplo:] Un investigador puede dedicarse a grabar una conversación sobre la experiencia de un visitante en determinado destino. Después el diálogo resultante se analiza por temas y líneas argumentales. El resultado será alguna perspectiva novedosa e interesante sobre los patrones de consumo de los visitantes en dicho sitio.

          .tarjeta.clr-paleYellow2.p-4.mb-3(titulo="Entrevistas semiestructuradas")
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img22.svg", alt="alt")

              .col-lg-9
                p Las entrevistas semiestructuradas normalmente se realizan de manera escrita y se le puede pedir a los entrevistados que redacten ensayos breves a preguntas específicas de respuesta abierta.

                p Las preguntas suelen dividirse en secciones, donde cada parte de apertura es seguida por otras de sondeo. Además, las respuestas obtenidas en una entrevista semiestructurada suelen ser más fáciles de interpretar que otros enfoques.

          .tarjeta.clr-paleYellow.p-4.mb-3(titulo="Método de libre asociación /Conclusión de oraciones")
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img23.svg", alt="alt")

              .col-lg-9
                p Las técnicas de libre asociación registran las primeras reacciones cognoscitivas (lo primero que viene a la mente) a cierto estímulo, estos pueden ser imágenes, sonidos, olores, texturas y sabores. La conclusión de oraciones se basa en los principios de libre asociación y son muy eficaces para determinar lo que el participante tiene en mente: 

                ul.lista-ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    | La gente que bebe café es ______________

                  li 
                    i.lista-ul__vineta
                    | La gente que viaja a San Andrés es _____________

                  li 
                    i.lista-ul__vineta
                    | La gente que viaja a México es ______________

                  li 
                    i.lista-ul__vineta
                    | La gente que viaja sola es ________________

                p En ocasiones, los métodos de libre asociación / conclusión de oraciones se usan en forma conjunta con otros enfoques, por ejemplo, para romper el hielo al inicio de una entrevista de #[i focus group].
              
          .tarjeta.clr-paleYellow2.p-4.mb-3(titulo="Observación")
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img24.svg", alt="alt")

              .col-lg-9
                p La observación integra al investigador o a quien recolecta los datos con el lugar de estudio, en el cual se encarga de ver y registrar todo aquello que encuentra o sucede con relación al tema. El registro de los datos, producto de un proceso de observación debe hacerse de manera ordenada y sincrónica para que su análisis tenga coherencia.

          .tarjeta.clr-paleYellow.p-4.mb-3(titulo="<em>Collages</em>")
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img25.svg", alt="alt")

              .col-lg-9
                p Los investigadores hacen que quienes respondan preparen #[i collages] para representar, a través de esta herramienta, la experiencia con algún bien, servicio o marca. Luego estos son analizados para determinar su significado. Esta herramienta busca ir más allá de la respuesta concreta a una pregunta, es decir, descifrar la representación de la marca que tiene el cliente a través de imágenes, descubriendo su modo de percibir el servicio que recibe de manera más auténtica.

          .tarjeta.clr-paleYellow2.p-4.mb-3(titulo="<em>Test</em> de percepción temática")
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img26.png", alt="alt")

              .col-lg-9
                p Presenta a los sujetos uno o varios cuadros de situaciones ambiguas en los que consumidores y productos son el centro de atención.  El investigador procede a pedirle al sujeto que diga lo que sucede en los cuadros y lo que sucederá después. Por lo tanto, se evocan temas con base en el uso interpretativo - perceptivo de los cuadros.

          .tarjeta.clr-paleYellow.p-4.mb-3(titulo="Encuestas")
            .row.justify-content-center.align-items-center
              .col-lg-3
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img27.svg", alt="alt")

              .col-lg-9
                p La encuesta es una herramienta que se lleva a cabo mediante la aplicación de un cuestionario a una muestra de personas. Estas proporcionan información sobre las opiniones, actitudes y comportamientos de los ciudadanos.  Su aplicación se da ante la necesidad de probar una hipótesis o hallar la solución a un problema, al identificar e interpretar, de la manera más ordenada posible, un conjunto de declaraciones que puedan cumplir con el propósito establecido dentro de la misma.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
