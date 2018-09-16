<template>
  <div class="mz-banner">
    <!-- 轮播 https://m.maizuo.com/v4/api/billboard/home?__t=1533018029083-->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in arr" :key="item.id">
              <img :src="item.imageUrl" />
            </div> 
        </div> 
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper";

export default {
  name: "mz-banner",
  data () {
    return {
       arr:[],
    }
  },
  methods:{
    
  },
  created(){
    //  https://m.maizuo.com/v4/api/billboard/home?__t=1533018029083
    let url = "http://localhost:9000/mz/v4/api/billboard/home";
    this.$http.get(url,{params:{__t:Date.now()}}).then(res=>{
      this.arr = res.data.data.billboards;
    });
  },
  updated(){
    new Swiper (".swiper-container",{loop: true});      
  }
}
</script>
