<template>
  <div class="mz-film">
    <!-- 正在热映 https://m.maizuo.com/v4/api/film/now-playing?__t=1533018029103&page=1&count=5 -->
    <!-- 即将上映 https://m.maizuo.com/v4/api/film/coming-soon?__t=1533018029121&page=1&count=3 -->
    <ul class="film">
        <router-link tag="li" :to="{name:'filmdetail',params:{id:item.id}}" v-for="item in arr" :key="item.id">
          <img :src="item.cover.origin">
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mz-film",
  props:["type"],
  data () {
    return {
       arr:[]
    }
  },
  methods:{
    getFilms(){//now-playing | coming-soon
      let params = {__t:Date.now(),page:1,count:5};  
      let url = `http://localhost:9000/mz/v4/api/film/${this.type}`;
      this.$http.get(url,{params}).then(res=>{ 
          this.arr = res.data.data.films;
      }); 
    }
    
  },
  created(){  
    this.getFilms();
  },
}
</script>
