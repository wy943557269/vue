<template>
  <div class="mz-home">
     <mz-banner></mz-banner>
     <!-- <mz-film type="now-playing"></mz-film>
     <mz-film type="coming-soon"></mz-film> -->

     <mz-film v-for="(item,index) in arr" :key="index" :type="item"></mz-film>

  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper";

import Banner from "./Banner";
import Film from "./Film";

export default {
  name: "mz-home",
  data() {
    return {
      arr:["now-playing","coming-soon"]
    }
  },
  methods:{
  },
  components:{
    [Banner.name]:Banner,
    [Film.name]:Film,
  }
}
</script>

<style>
.swiper-container {width: 375px;height: 210px;}  
.swiper-container img{width: 100%;height: 100%;}  
.film{padding:17px;padding-top: 18px;}
.film li{height:240px; background: yellow;margin-bottom:17px;}
.film li img{width: 100%;height: 100%;}  

</style>
