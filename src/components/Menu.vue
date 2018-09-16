<template>
  <div class="mz-menu">
    <transition name="slideLeft">
      <ul v-show="isShow" @click="show" >
           <router-link tag="li" v-for="item in arr" :to="item" :key="item.id">{{item.content}}</router-link>
      </ul>
    </transition>
    <transition name="fade">
      <div v-show="isShow" class="mask" @click="show"></div>
    </transition>
  </div>
</template>

<script>
import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
export default {
  name: "mz-menu",
  data () {
    return {
       arr:[
         {id:Math.random(),content:"首页",path:"/home",name:"home"},
         {id:Math.random(),content:"影片",path:"/filmlist",name:"filmlist"},
         {id:Math.random(),content:"影院",path:"/cinema",name:"cinema"},
         {id:Math.random(),content:"商城",path:"/home",name:"home"},
         {id:Math.random(),content:"我的",path:"/login",name:"login"},
         {id:Math.random(),content:"卖座卡",path:"/card",name:"card"},
       ],
    }
  },
  computed:{
    ...mapState({isShow:"isShow"})
    // isShow(){
    //   return this.$store.state.isShow;
    // }
  },
  methods:{
    ...mapMutations({show:"showMutation"})
    // show(){
    //    this.$store.commit("showMutation");
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mz-menu {position:fixed;left:0;top:50px;z-index:1000; -height: 100%; width:265px; }
.mz-menu ul{width:265px;background: #282828;position:fixed;left:0;top:50px;right:0;bottom:0; z-index:2 ; -overflow: hidden;border-top: 1px solid #666;
}
.mz-menu li{width:100%;
  height:50px; line-height:50px;color: #9a9a9a;
  font-size: 14px; padding: 0 16px;border-bottom: 1px dotted #333;
}
.mask{
    position: fixed;top: 0;bottom: 0; left: 0; right: 0;z-index: 1;
    background: rgba(0,0,0,0.5);
}


/* .fade-enter,.fade-leave-to{opacity: 0;}
.fade-enter-active,.fade-leave-active{ transition: 1s all ease;}
.fade-enter-to,.fade-leave{opacity: 1;} */

</style>
