<template>
  <div class="box">
    <div class="box1">
      <img :src="img.img1" @click='tatbts' />
      <h2>历史任务</h2>
    </div>
    <ul class="box2">
      <li class="boxs">
        <div class="boxt">
          <span>日签到</span>
          <img :src="img.img2" class="img1"><span>0</span>
          <img :src="img.img3" class="img2"><span>10</span>
          <p>2019-07-11 11:22:35</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      img: {
        img1: require("../assets/img/jaintouzuo.png"),
        img2: require("../assets/img/biaoqian1.png"),
        img3: require("../assets/img/biaoqian2.png")
      }
    };
  },
 methods:{
     tatbts(){
         this.$router.push('/goods');
     }
 }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.box {
  width: 100%;
  height: 100%;
}
.box1 {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
}
.box1 > img {
  width: 15px;
  height: 24px;
  float: left;
  margin-top: 13px;
  margin-left: 10px;
}
.box1 > h2 {
  display: inline-block;
  width: calc(100% - 50px);
  height: 100%;
  font-size: 18px;
  float: left;
  line-height: 50px;
  text-align: center;
}
.box2 {
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 50px);
  padding: 2px 10px;
}
.boxs {
  background: #ffffff;
  height: 80px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;padding: 10px 10px 5px 10px ;
}
.boxt{
    width: 100%; height: 18px;font-size: 14px;
}
.boxt>img{
width: 24px;height: 24px;
/* margin-left: 10px; */
}
.boxt>p{
    font-size: 14px;margin-top: 5px;
}
.img1{
    margin-left: calc(100% - 130px);
}
.img2{
    margin-left: 10px;
}
</style>
