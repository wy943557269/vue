<template>
  <div class="mz-film-list">
    <!-- 正在热映 https://m.maizuo.com/v4/api/film/now-playing?__t=1533018029103&page=1&count=7 -->
    <!-- 即将上映 https://m.maizuo.com/v4/api/film/coming-soon?__t=1533018029121&page=1&count=7 -->
    <ul class="film-list-nav">
        <li @click="show(index)" v-for="(item,index) in types" :class="{[item.type]:true,active:iNow==index}" :key="item.id">{{item.title}}</li>
    </ul>
    <ul class="film-list-wrap">
      <router-link tag="li" :to="{name:'filmdetail',params:{id:item.id}}" v-for="item in arr" :key="item.id">
        <img class="fl film-item-img" :src="item.poster.thumbnail" />
        <div class="film-desc">
          <div class="film-grade" v-if="item.isNowPlaying==true">{{item.grade}}</div>


          <div class="film-name">{{item.name}}</div>
          <div class="film-intro">{{item.intro}}</div>

          <template  v-if="item.isNowPlaying==true">
            <div class="film-counts">
                  <span class="film-count-color">{{item.cinemaCount}}</span><span>家影院上映</span>
                  <span class="film-count-color" >{{item.watchCount}}</span><span>人购票</span>
            </div>
          </template>
          <template v-else>
            <div class="film-premiere-date">
              <span>12月31日上映</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>星期一</span>
            </div>
          </template>

        </div>
        <!-- <img class="fl film-item-img" src="https://pic.maizuo.com/usr/movie/aa7872b51e94b5f85a73a34bb93bd21b.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300" />
        <div class="film-desc">
          <div class="film-grade">8.5</div>
          <div class="film-name">我不是药神</div>
          <div class="film-intro">一场关于“救赎”的拉锯战</div>
          <div class="film-counts">
                <span class="film-count-color1">199</span><span>家影院上映</span>
                <span class="film-count-color1" >0</span><span>人购票</span>
          </div>
          <div class="film-premiere-date">
            <span>12月31日上映</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>星期一</span>
          </div>
        </div> -->
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mz-film",
  data () {
    return {
      iNow:0,
      types:[
        {id:Math.random(),type:"now-playing",title:"正在热映"},
        {id:Math.random(),type:"coming-soon",title:"即将上映"}
      ],
      page:1,
      count:7,
      isLoaded:true,//是否可以继续加载数据
      arr:[]
    }
  },
  methods:{
    show(index){
      //数据初始化
      this.iNow = index;
      this.isLoaded = true;
      this.page = 1;
      this.arr = [];
      this.getFilms();
    },
    getFilms(){//now-playing | coming-soon

      if(!this.isLoaded){return;}
      let params = {__t:Date.now(),page:this.page,count:this.count};  
      let url = `http://localhost:9000/mz/v4/api/film/${this.types[this.iNow].type}`;
      this.$http.get(url,{params}).then(res=>{ 
          this.arr = this.arr.concat(res.data.data.films);
          console.log(this.arr);
          if(res.data.data.films.length == 0){//没有数据
              this.isLoaded = false;
          }
      }); 
    }
    
  },
  created(){  
    this.getFilms();
  },

  mounted(){
    window.onscroll = ()=>{
        //scrollTop  scrollHeight clientHeight
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollHeight = document.body.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;

      if(scrollTop+ clientHeight == scrollHeight ){
         if(this.isLoaded){
          this.page++;
          console.log("到底了",this.page);
          this.getFilms();
        } 
      }


    };

  }
}
</script>
<style>
.mz-film-list{padding-left: 15px;padding-right: 15px;}
.film-list-nav {
    height: 46px;margin: 0 auto;border-bottom: solid #fe6e00 1px;
}

.film-list-nav li{
    float: left;
    width: 50%;height: 100%;text-align: center;
    font-size: 16px;line-height: 46px;color: #6a6a6a;cursor: pointer;
}
.film-list-nav li.active {
    color: #fe6e00; border-bottom: solid;
}

.film-list-wrap li{width:345px; height: 125px;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;}
    
.film-list-wrap .film-item-img {
    width: 60px;float: left;overflow: hidden;
}

.film-list-wrap .film-desc {
    width: 75%;padding-left: 15px;display: inline-block; 
}
.film-list-wrap .film-desc .film-grade {
    float: right;font-size: 16px;line-height: 32px;color: #fc7103;
}

.film-list-wrap .film-desc .film-name {
    font-size: 16px; line-height: 32px;color: #000;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
}
.film-list-wrap .film-desc .film-counts {
    line-height: 24px;color: #8e8e8e;font-size: 12px;
}
.film-list-wrap .film-desc .film-count-color {color: #8aa2bf;}
.film-list-wrap .film-desc .film-premiere-date {
    line-height: 24px;color: #ffb375;font-size: 12px;
}
</style>

