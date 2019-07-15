<template>
  <div class="boxj">
    <div class="box1">
      <img :src="img.img1" @click='mog' />
      <h2>我的余额</h2><img :src="img.img2" @click='mogs'>
    </div>
    <div class="boxg" >
<p>可用余额（元）</p>
<span>0</span>
<p>暂不接受充值和提现，余额由退费时选择“退至账户余额”方式产生，可用于购买课程时抵扣报名费用</p>
    </div>  
  </div>

</template>

<script>
export default {
  data() {
    return {
      img: {
        img1: require("../assets/img/jaintouzuo.png"),
         img2: require("../assets/img/wenben.png"),
      }
    };
  },
  methods: {
    mog() {
      this.$router.push("/mine");
    },
    mogs() {
      this.$router.push("/lsaytt");
    }
  }
};
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
.boxg{margin-top: 10px;
    width: calc(100% - 20px);height: 240px;background: #ffffff;
    border: 2px dotted  #ccc;box-sizing: border-box;border-radius: 5px;
    margin-left: 10px;padding: 20px 20px 20px 20px;
}
.boxg>p:nth-child(1){
    font-size: 16px;display: block;margin-bottom: 10px;
}
.boxg>span{
        color: #ff4f00ff;font-size: 60px;
}
.boxg>p:nth-child(3){
font-size: 14px;color: #ccc;margin-top: 40px;
}
</style>
