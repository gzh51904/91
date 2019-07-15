<template>
   <div class="box">
    <div class="box1">
      <img :src="img.img1" @click='shhh' />
      <h2>关于</h2>
    </div>
    <div class="box2">
        <img :src="img.img2" >
    </div>
    <div class="box3"><span>当前版本</span><span>V1.1.2</span></div>
    <div class="box3"><span>客服电话</span><span>400-898-9191</span></div>
    <div class="box4">
        <p>91好课版权所有</p>
        <p>Copyright © 2016 高思教育 All Rights Reserved </p>
    </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      img: {
           img1:require("../assets/img/jaintouzuo.png"),
            img2:require("../assets/img/loghaoke.png"),
      }
    };
  }, methods:{
      shhh(){ this.$router.push('/mine'); }
  }
}
</script>

<style scoped>
*{
    padding: 0;margin: 0;
}
.box{
    width: 100%;height: 100%;box-sizing: border-box;padding: 0 10px 0 10px;
}
.box1{
     width: 100%;height: 50px;background: #ffffff;
     /* position: fixed;top: 0; */
   z-index: 22;
}
.box1>img{
     width: 15px;height: 24px;float: left;margin-top:13px;margin-left: 10px;
}
.box1>h2{
    display: inline-block;width: calc(100% - 50px);
height: 100%;line-height: 50px;
    font-size: 18px;float: left;text-align: center;
}
.box2{
    width: 100%;height: 107px;background: #ffffff;margin:50px 0 50px 0;
}
.box2>img{
    width: 194px;height: 93px;margin:8px 0 0 0;margin-left:calc(100% - 300px) ;
}
.box3{
    width: 100%;background: #ffffff;height: 69px;border-bottom: 1px solid #ccc;
}
.box3>span:nth-child(1){
    font-size: 16px;float: left;display: inline-block;height: 100%;line-height: 69px;
}
.box3>span:nth-child(2){
  float: right; font-size: 16px;display: inline-block;height: 100%;line-height: 69px;
}
.box4{
    width: 100%;height: 45px;position: fixed;left: 0;bottom: 0;background: #ffffff;
}
.box4>p{
    width: 100%;display: block;font-size: 14px;color: #ccc;text-align: center;
}
</style>
