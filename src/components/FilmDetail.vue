<template>
  <div class="mz-film-detail">
      mz-film-detail xxx {{film}}
  </div>
</template>

<script>
export default {
  name: "mz-detail",
  props:["id"],
  data () {
    return {
       film:{},
    }
  },
  methods:{
    getFilmDeatil(){//now-playing | coming-soon
      //https://m.maizuo.com/v4/api/film/4266?__t=1533093597327
      
      let params = {__t:Date.now()};  
      let url = `http://localhost:9000/mz/v4/api/film/${this.id}`;
      this.$http.get(url,{params}).then(res=>{ 
          this.film = res.data.data.film;
      });
    }
    
  },
  created(){  
    this.getFilmDeatil();
  }
}
</script>
<style>
.mz-film-list{padding-left: 15px;padding-right: 15px;}

</style>

