<template>
  <div class="min">
    <div class="min1">
      <img class="imgs" :src="img.img1"  @click='tias' />
      <h3>每日任务</h3>
      <img class="imgg" :src="img.img2" @click='tata' />
    </div>
    <div class="min2">
       <ul>
           <li class="lio">
               <p>日签到</p>
               <p>每日签到</p>
               <div class="divss"><img :src="img.img3">
                   <span>0</span>
                   <img :src="img.img4">
                   <span>10</span>
                   <span class="spano">已签到</span>
               </div>
           </li>
      </ul>
    </div>
    <div class="os"></div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      img: {
        img1: require("../assets/img/jaintouzuo.png"),
        img2: require("../assets/img/wenben.png"),
        img3: require("../assets/img/biaoqian1.png"),
        img4: require("../assets/img/biaoqian2.png"),
      }
    };
  },
 methods:{
   tias(){
        this.$router.push('/discover');
   },
   tata(){
       this.$router.push('/meiri');
   }
 },
  destroyed: function() {
    // console.log("我已经离开了！");
    // console.log(this.$store.state);
    // this.$store.commit('add2')
  },
  mounted() {
    // console.log('我刚进来');
    // this.$store.commit('add2')
    //获取当前url路径
    // console.log('当前url路径:'+this.$route.path);
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.min {
  width: 100%;
  height: 100%;display: flex;flex-direction: column;
}
.min1{
    width: 100%;height: 50px;background: #f8f8f8;
}
.imgs{
     width: 15px;height: 24px;float: left;margin-top:13px;margin-left: 10px;
}
.min1>h3{
display: inline-block;width: calc(100% - 50px);
height: 100%;
    font-size: 18px;float: left;line-height: 50px;text-align: center;
}
.imgg{
   width: 20px;height: 24px;float: left; margin-top:13px;
}
.min2{flex: 1;
    width: 100%;height: calc(100% -50px);box-sizing: border-box;padding:  10px 15px 0 15px;
    /* background:#f8f8f8; */
}
.os{
    width: 100%;height: 0px;
}
.min2>ul{
    width: 100%;height: 100%;  list-style: none;
}
.min2>ul>li{box-sizing: border-box;
background:#f8f8f8; width: 100%;height: 118px;border-radius: 10px;
padding: 10px 20px;
}
.lio>p:nth-child(1){
width: 100%;font-size: 16px;color: rgb(184, 181, 181);margin-bottom: 5px;
}
.lio>p:nth-child(2){
    width: 100%;font-size: 14px;color: rgb(184, 181, 181);
}
.divss{
    width: 100%;height: 31px;background: #f8f8f8;margin-top: 15px;
}
.divss>img{
    width: 24px;height: 24px;
}
.divss>span{
    font-size: 16px;color: #181818;margin: 5px;
}
.spano{
    font-size: 14px;float:right;
}
</style>
