<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/introduccion/img1.svg", alt="alt")
      .col-lg-8

        p Estimado aprendiz, bienvenido a este recurso educativo. A continuación, conocerá sobre el cliente potencial. Al finalizarlo, se espera que logre describirlo de acuerdo a métodos de valoración y naturaleza de datos, con el fin de que a futuro pueda prospectarlo de acuerdo con los segmentos objetivo y estrategias de ventas. Con lo aprendido, podrá tener claridad acerca de cuál es el cliente potencial que requiere la organización, algo que es vital para enfocar los esfuerzos comerciales y de #[i marketing]. Para lograrlo, se pueden llevar a cabo herramientas y técnicas que permitan establecer la conexión entre las bondades de los productos o servicios y las necesidades del segmento de mercado.
       
        p #[b En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!]

    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
             

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
