<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Perfil del cliente potencial

    .row
      p Ya se hizo un acercamiento a los sistemas de información. Es momento de ver el siguiente video sobre cómo el perfil del cliente potencial podría generar mayores aportes: 

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          | El cliente potencial

    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
             

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-5
          p A partir de lo anterior, se puede decir que los leads en el turismo cumplen la función de ayudar a identificar y perfilar los posibles turistas potenciales, clasificándolos así mismo en fríos, templados y calientes. En conjunto con dichas herramientas de perfilamiento, las cuales se tratarán más adelante, facilitan a la empresa o el prestador de servicios turísticos identificar su público objetivo, prospectando las personas que probablemente si viajarán al destino y adquirirán los servicios.

    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.1 Herramientas para perfilar clientes (Mapa de la empatía, mapa de valor, buyer persona) 

    .row
      p Ahora bien, para perfilar clientes es importante contar con algunas herramientas, por eso a continuación se verá la siguiente información:

    .row.justify-content-center.align-items-center.mb-5
      
      .col-lg-5
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")
      
      .col-lg-7

        p Las herramientas para perfilar permiten identificar, conocer y reconocer las características del cliente potencial, creando segmentos en los cuales el marketing pueda enfocarse. Para esto, es necesario pensar en el consumidor como persona y ponerse en su lugar, preguntándose si realmente se conocen las necesidades, deseos y motivos que lo conducen a adquirir un servicio o producto. Las herramientas de perfilación permiten generar un esbozo conciso del público objetivo al que se está apuntando.

        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-5
           p En continuidad con lo anterior, es necesario entender que existen diferentes tipos de métodos para perfilar al cliente, en este apartado se estarán explicando tres de ellos: El mapa de empatía, el mapa de valor y el buyer persona.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.png')})`}"
          )

          .bloque-texto-g__texto.p-4
            p.mb-0 El mapa de empatía es una herramienta que identifica las necesidades de tu público. Por ello, es importante pensar en los visitantes como personas y no como segmentos (Servicio Nacional de Turismo -Sernatur, 2017).
    
    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Mapa de empatia]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img3.png", alt="alt")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .crd.clr-paleYellow3.p-4.mb-4
          p.mb-0 Según como dice Sernatur (2017. P. 56) “es necesario pensar en los clientes como un individuo concreto, buscando de esta manera empatizar con él por medio de preguntas, como ¿cuál es su nombre? ¿Dónde vive? ¿Qué lo motiva? ¿Qué lo emociona? ¿Qué le gusta?”.  De esta manera, se lleva a la organización a comprender quién es el público objetivo al que estoy apuntando desde una perspectiva enfocada en las emociones y experiencias que como organización puede satisfacer al cliente ya que esto es lo que él busca y desea. El mapa de empatía se divide en seis secciones que permiten ahondar a fondo en el comprador. Las respuestas a estos cuestionamientos propuestos conducen a la creación de hipótesis las cuales deberán ser validadas con clientes reales y que deben ser tomadas en cuenta siempre en la creación de una propuesta de valor.


    .row.mt-5
      p Es momento de ver el mapa de valor.

      p El mapa de valor, con base en lo planteado por Osterwalder, A, Pigneur, Y, Bernarda, G y Smith, A (2018), describe de manera muy estructurada y detallada las características de una propuesta de valor específica para un modelo de negocio, pero fundamentada en el perfil del cliente. Por lo tanto, está compuesto por dos partes, la primera de ellas es el perfil del cliente y la segunda es la propuesta de valor que, unidas de manera coherente, configuran el mapa de valor.


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Mapa de valor]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img4.png", alt="alt")


    .row.justify-content-center.align-items-center.mb-5
      
      .col-lg-5
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img5.png", alt="alt")
      
      .col-lg-7

        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-5
           p En este momento, el foco se centrará en la parte que se refiere al perfil del cliente que, como se puede apreciar en la Figura 4, tiene un esquema que se subdivide en tres: los trabajos, las frustraciones y alegrías que el cliente debe vivir para disfrutar de un tipo de producto o servicio.

    .row
      p Según esta herramienta se deben seguir cinco pasos: 

    .bg_img_01.mt-5
      .row.justify-content-center.mb-5
        .col-lg-3.mb-4.mb-lg-0.banner1-tema-2
          .crd
            .bottomCircle.mb-5
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt").img90.m-auto
            ol.lista-ol--cuadro.lista-ol--separador
              li
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 #[b Seleccionar un segmento de clientes:]
            p.text-center.mb-0 Seleccionar aquella sección de clientes que se busca perfilar.

        .col-lg-3.mb-4.mb-lg-0.banner1-tema-2
          .crd
            .bottomCircle.mb-5
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img7.svg", alt="alt").img90.m-auto
            ol.lista-ol--cuadro.lista-ol--separador
              li
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 #[b Identificar lostrabajos del cliente:]
            p.text-center.mb-0 Se deben cuestionar los trabajos que realizan, es decir, las actividades que intentan resolver en su vida laboral o personal.

        .col-lg-3.mb-4.mb-lg-0.banner1-tema-2
          .crd
            .bottomCircle.mb-5
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img8.svg", alt="alt").img90.m-auto
            ol.lista-ol--cuadro.lista-ol--separador
              li
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 #[b Identificar las frustraciones del público objetivo:]
            p.text-center.mb-0 Aquello que molesta al cliente antes, durante y después de realizar un trabajo, o que le impide resolverlo.
      
    .bg_img_01.mt-5
      .row.justify-content-center.mb-5
        .col-lg-3.mb-4.mb-lg-0.banner1-tema-2
          .crd
            .bottomCircle.mb-5
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt").img90.m-auto
            ol.lista-ol--cuadro.lista-ol--separador
              li
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 #[b Identificar las alegrías:]
            p.text-center.mb-0 Siendo estos los resultados o beneficios que esperan conseguir.

        .col-lg-3.mb-4.mb-lg-0.banner1-tema-2
          .crd
            .bottomCircle.mb-5
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img10.svg", alt="alt").img90.m-auto
            
            ol.lista-ol--cuadro.lista-ol--separador
              li
                .lista-ol--cuadro__vineta
                  span 5
                p.text-center.mb-0 #[b Priorizar:]
            p.text-center.mb-0 Finalmente, se priorizan los trabajos, frustraciones y alegrías identificadas anteriormente. 
        

    .row
      p Por último, se abordará el #[b #[i buyer]] persona.  

    .row.justify-content-center.align-items-center.mb-5
      
      .col-lg-12

        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-5
           p El #[i buyer] persona trata de “la  construcción de un modelo de cliente idóneo para un   producto o servicio que, teniendo en cuenta datos sociodemográficos  precisos, así como también información sobre aspectos tales como conducta online, personal, profesional y de la relación con la empresa que ofrece el  producto o servicio, puede llegar a ser uno de los pilares transcendentales en el #[i inbound marketing] (entendido como la herramienta para producir contenido de valor que despierte el interés de la audiencia objetivo) y no solamente por el hecho de conocer las inquietudes, intereses y dolores que pueda tener ese cliente al que se quiere llegar, sino además, se traduce en el cómo y dónde ese cliente busca el producto o servicio.” (Valdés, 2019; citado en Beltrán Mora, Parrales Carvajal, y Ledesma Álvarez, 2019, p. 672).

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b El buyer persona]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img12.png", alt="alt")

    .row.mt-5
      .col-lg-7
        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-5
           p Para conocer el paso a paso en el desarrollo del buyer persona, ver el Anexo 2.

           a.anexo.mb-4(:href="obtenerLink('/downloads/anexo2.docx')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
             p #[b Anexo 2. Desarrollo de buyer persona]

    .row.mt-3
      p A continuación, encontrará sobre la prospección de clientes.

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.2 Prospección de clientes 

    .row.justify-content-center.align-items-center.mb-5
      
      .col-lg-7

        p Según Maldonado y Franco (2018), prospectar es una estrategia de #[i marketing] científica basada en modelos matemáticos para seleccionar al cliente, proyectando los patrones de comportamiento del mercado, meta o público objetivo. Se realiza a través de llamadas a un posible público objetivo, cuyos número o datos han sido recogidos con anterioridad; dependiendo del tipo de lead al que se contacta, es posible seleccionar a aquellos verdaderamente interesados en adquirir el producto. “Se pueden prospectar clientes en su cartera actual a través del #[i cross selling] y la definición de rutas. Ambas son técnicas dirigidas a clientes que ya tienen relación con la empresa mas no con el producto ofertado.” (Godoy y Rischele, 2021, p. 73).

        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-5
           p Al prospectar al cliente es necesario contar con una agenda de usuarios actuales y posibles consumidores a los que se pueda realizar el llamado, siguiendo un guion que busque atraerlos a comprar el producto ofertado. Además, en caso de que no conozca a la empresa con anterioridad, es una posibilidad de hacerlo.

      .col-lg-5
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img13.png", alt="alt")

    .row.mt-5
      p Para ampliar la información descrita anteriormente, se puede ver lo siguiente:

    separador

    #t_2_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.3 Técnicas de evaluación de clientes potenciales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img14.png')})`}"
          )

          .bloque-texto-g__texto.p-4
            p.mb-0 Las técnicas de evaluación de clientes potenciales son aquellas que cada empresa define según sus necesidades, para monitorear y tomar decisiones al momento en que se realiza la prospección de clientes, verificando el nivel de aceptación del público objetivo, sus reacciones e interés en el producto, y en caso tal de que este no sea el esperado, tomar acción en consecuencia, ya sea mutando de mercado - meta o cambiando la manera de llegar a él. De esta manera, se evita generar pérdidas en términos de tiempo actuando de manera rápida y efectiva.

    .row.mt-5
      p De acuerdo a lo anterior, es momento de mirar la síntesis de este componente formativo.

</template>

<script>
export default {
  name: 'Tema2',
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
