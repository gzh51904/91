<template>
     <div class="box">
     <div class="box1">
         <img :src="img.img1" @click='tattt'> <h2>我的课程</h2>
     </div>
 </div>
</template>

<script>
export default {
data() {
      return {
        img:{
            img1:require("../assets/img/jaintouzuo.png"),
        }   
      } 
    }, 
    methods:{
        tattt(){ 
             this.$router.push('/discover');
        }
    },

}
</script>

<style scoped>
*{
    padding: 0;margin: 0;
}
.box{
    width: 100%;height: 100%;
}
.box1{
    width: 100%;height: 50px;background:#ffffff;
}
.box1>img{
    width: 15px;height: 24px;float: left;margin-top:13px;margin-left: 10px;
}
.box1>h2{
        display: inline-block;width: calc(100% - 50px);
height: 100%;line-height: 50px;
    font-size: 18px;float: left;text-align: center;
}
</style>
