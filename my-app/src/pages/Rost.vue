<template>
  <div class="box">
    <div class="box1"><img :src="img.img1" @click='oxs'>
      <h2>我的收藏</h2>
    </div>
    <div class="box3"><img :src="img.img2" >
<p>还没有收藏课程哦～</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: {
           img1: require("../assets/img/jaintouzuo.png"),
      img2: require("../assets/img/emptyCourse.5bdfa94.png"),
      }
    };
  }, methods:{
      oxs(){
           this.$router.push('/mine');
      }
  }
};
</script>

<style scoped>
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
  box-sizing: border-box;background: rgb(248, 246, 246);border-radius: 5px;
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
.box3{
    width: 100%;height: 137px;background: #ffffff;margin-top: 200px;
}
.box3>img{
    width: 110px;height: 115px;margin-left: calc(100% - 260px);
}
.box3>p{
    width: 100%;text-align: center;font-size: 14px;
    color: #ccc;
}
</style>
