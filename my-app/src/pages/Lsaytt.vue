<template>
  <div>
       <div class="box1">
      <img :src="img.img1" @click='kksa'  />
      <h2>余额记录</h2>
    </div>
    <div class="box22">
        <img :src="img.img2">
        <p>暂无余额记录～</p>
    </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      img: {
        img1: require("../assets/img/jaintouzuo.png"),
         img2: require("../assets/img/emptyAddress.0297b55.png"),
      }
    };
  }, methods:{
kksa(){
    this.$router.push("/lsay");
}
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.boxj {
  width: 100%;
  height: 100%;
}
.box1 {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-radius: 5px;
}
.box1 > img {
  width: 15px;
  height: 20px;
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
.box22{
    width: 100%;background: #ffffff;height: 140px;margin-top: 200px;
}
.box22>img{
    width: 116px;height: 116px;margin-left: calc(100% - 260px);
}
.box22>p{
    width: 100%;text-align: center;color: #ccc;
}
</style>
