<template>
  <div id="app">
    <mz-header></mz-header>
    <mz-menu></mz-menu>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default {
  name: "App",
  data(){
    return {
      
    };
  },
  methods:{
    
  },
  components:{
    [Header.name]:Header,
    [Menu.name]:Menu
  }
}
</script>

<style>
*{margin:0;padding:0;list-style:none;box-sizing: border-box;}
html,body{width:100%; height: 100%;  }/*overflow: hidden; */
a{ text-decoration: none; font-size:12px; color: #000;}
.fl{float: left;}
.fr{float: right;}
#app {
  width:375px; -height: 100%;  background: #ccc; margin: 0 auto;
}
.content{padding-top:50px;background:#f9f9f9;}

</style>
