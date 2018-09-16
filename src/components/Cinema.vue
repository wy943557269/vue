<template>
  <div class="mz-cinema">
    <dl class="district" v-for="(item,key,index) in oCinema" :key="item.id">

      <template v-if="index==0">
        <dt @click="show(item)" class="title">{{item.name}}</dt>
        <!-- //{{item.data}} -->
        <dd v-show="!item.isShow" class="wraper" v-for="obj in item.data" :key="obj.id">
          <p>{{obj.name}}}</p>
          <p>{{obj.address}}}</p>
          <p>距离未知</p>
        </dd> 
      </template>
      <template v-else-if="index!=0">
        <dt @click="show(item)" class="title">{{item.name}}</dt>
        <!-- //{{item.data}} -->
        <dd v-show="item.isShow" class="wraper" v-for="obj in item.data" :key="obj.id">
          <p>{{obj.name}}}</p>
          <p>{{obj.address}}}</p>
          <p>距离未知</p>
        </dd> 
      </template>
      <!-- <dt class="title">市南区</dt>
      <dd class="wraper">
        <p>横店电影城青岛中山路店</p>
        <p>青岛市市南区中山路６７号乐喜客来广场２-４层</p>
        <p>距离未知</p>
      </dd>  --> 
    </dl>
  </div>
</template>

<script>
export default {
  name: "mz-cinema",
  data() {
    return {
       oCinema:{}, 
    }
  },
  methods:{ 
    show(item){ 
      item.isShow = !item.isShow;
      console.log(item.isShow);
    },
    getCinemas(){
      //https://m.maizuo.com/v4/api/cinema?__t=1533103317490
      let url = "http://localhost:9000/mz/v4/api/cinema";
      let params = {params:{__t:Date.now()}};
      this.$http.get(url,params).then(res=>{
        this.arr = res.data.data.cinemas;
        
        let cinemas = res.data.data.cinemas;
        let oCinema = {};
        //数据初始化
        cinemas.forEach(item => {
          //console.log("item:",item.id,item.name,JSON.stringify(item.district));
          //shi-nan-qu
          if(oCinema[item.district.pinyin]){
            //在每个区里面添加数据
            oCinema[item.district.pinyin].data.push({
                id:item.id,
                name:item.name,
                pinyin:item.pinyin,
                address:item.address
            });
          } else {
              oCinema[item.district.pinyin] = {
                id:Math.random(),
                name:item.district.name,
                isShow:false,
                data:[{
                    id:item.id,
                    name:item.name,
                    pinyin:item.pinyin,
                    address:item.address
                }]
              }; 
          } 
        });
        this.oCinema = oCinema;
      });
    }
  },
  created(){
    this.getCinemas(); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.district .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 16px;
    background: #e1e1e1;
    margin-bottom: 1px;
    color: #636363;
    cursor: pointer;
}

.district .wraper{
    margin: 0 auto;
    border-bottom: 1px solid #e1e1e1;
    cursor: pointer;
    min-width: 320px;
}

</style>
