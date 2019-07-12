<template>
  <div class="box">
    <div class="box1">
      <img :src="img.img1" @click='goof' />
      <h2>我的购物车</h2><span>编辑</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: {
           img1:require("../assets/img/jaintouzuo.png"),
      }
    };
  }, methods:{
      goof(){ this.$router.push('/mine'); }
  }
};
</script>

<style scoped>
*{
    padding: 0;margin: 0;
}
.box{
    width: 100%;height: 100%;
}
.box1{
     width: 100%;height: 50px;background: #faf5f5;
     /* position: fixed;top: 0; */
   z-index: 22;
}
.box1>img{
     width: 15px;height: 24px;float: left;margin-top:13px;margin-left: 10px;
}
.box1>h2{
    display: inline-block;width: calc(100% - 65px);
height: 100%;line-height: 50px;
    font-size: 18px;float: left;text-align: center;
}
.box1>span{
    font-size: 16px;display: inline-block;line-height: 50px;height: 50px;
}
</style>
