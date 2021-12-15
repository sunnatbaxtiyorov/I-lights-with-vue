<template>
  <div class="carousel absolute top-0 z-10 right-0" style="margin-left:53px;width:680px;">
    <VueSlickCarousel  v-bind="settings">
        <img src="https://i-lights.ru/upload/iblock/c0d/v7emg5ju9ne5rjaz60y8j07a9xy9zfyf.png" alt="">
        <img src="https://i-lights.ru/upload/iblock/4f4/pryxvs63g93m384qyfigvy6dnng1fg0a.png" alt="">
        <img src="https://i-lights.ru/upload/iblock/5f3/m5h7aeogny0kxzqs4v9l4n2d1u6uqkqf.png" alt="">
        <img src="https://i-lights.ru/upload/iblock/842/uc82ovg1o0t52h3fqgyj6og2g2ty362h.jpg" alt="">
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data() {
    return {
        settings: {
          speed: 10,
          autoplay: true,
          arrows: true,
          dots: true,
          },
    };
  },

  components: {
    VueSlickCarousel
  }

}
</script>

<style>
button.slick-prev, button.slick-next {
  border-radius: 3px;
  background: #3D4F64 !important;
  width: 32px;
  height: 27px;
}
.slick-next {
  left: 0;
  position: absolute;
  transform: translate(-40px, 101px);
}

.slick-prev {
  position: absolute;
  transform: translate(0px, 138px);
  left: -40px;
}
.slick-dots li button{
  display: none;
}
.slick-dots li{
  height: 1px;
  width: 25%;
  margin: 0;
}
.slick-dots .slick-active{
  height: 3px;
  border-radius: 3px !important;
  background: #F3A800;
}

@media screen and (max-width: 1030px){
    .carousel{
        display: none;
    }
    
}
</style>