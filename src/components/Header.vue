<template>
  <div class="mz-header">
       <h1 class="fl" @click="show">
         <a href="javascript:;">
           <span class="fl menu">菜单</span>
           <span class="fl title">卖座电影</span>
         </a>
       </h1>
       <div class="fr">
         <router-link class="fl city" to="/city">青岛</router-link>
         <router-link class="fl login" to="/login">登陆</router-link>
       </div>
  </div>
</template>

<script>
import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
export default {
  name: "mz-header",
  data () {
    return {
       
    }
  },
  methods:{
    ...mapActions({show:"showAction"})
    // show(){
    //   this.$store.dispatch("showAction");
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mz-header{position: fixed;left:0;top:0;z-index:999;width:100%; height:50px; line-height: 50px; background: #282828;}
.mz-header h1{font-weight:normal;}
.mz-header a{color:#999;font-size:14px; text-align: center;}
.mz-header a span{height: 50px;}
.mz-header a span.menu{width:50px; border-right: 1px solid #666;}
.mz-header a span.title{padding: 0 1em;color:#efefef;}

.mz-header .city{width:50px;height: 50px;padding: 0 6px;}
.mz-header .login{width:50px;height: 50px;}
</style>
