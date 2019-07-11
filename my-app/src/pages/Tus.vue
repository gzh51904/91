<template>
   <div class="shij">
        <div class="sfa"><img :src="img.img1" @click='tiao'>
            <h2 class="h2">课程日历</h2></div>
    <el-calendar v-model="value"  >
</el-calendar>
  <div class="boxs"><img :src="img.img8" >
         <span>没有直播课程</span></div>
   </div>
</template>

<script>
import Vue from "vue";
import{Calendar,ButtonGroup,Button}from "element-ui";
Vue.use(ButtonGroup);
Vue.use(Calendar);
Vue.use(Button);
export default {
 data() {
      return {
   value: new Date(),
        img:{
            img1:require("../assets/img/jaintouzuo.png"),
            img8:require("../assets/img/tj.png"),
        }   
      } 
    },
    methods:{
  tiao(){
      this.$router.push('/discover');
  }
    },
   mounted(){
        //  console.log( new Date());
         
     }
   
  
}
</script>

<style scoped>
*{
    margin: 0;padding: 0;
}
.shij{
    text-align: center;width: 100%;height: 100%;
}
.sfa{
    width: 100%;height: 50px;background: #ffffff;

}
.sfa>img{
    width: 15px;height: 24px;float: left;margin-top:13px;margin-left: 10px;
}
.h2{display: inline-block;width: calc(100% - 50px);
height: 100%;
    font-size: 18px;float: left;
}
.ss{
    text-align: center;
}
.boxs{  position: fixed;
  left: 0;
  bottom: 0;
    width: 100%;background: #ffffff;height: 275px;margin-top: 50px;
    border-top: 3px solid rgb(240, 235, 235);
}
.boxs>img{
    width: 177px;height: 177px;margin-left:calc(50% - 185px);
}
.boxs>span{text-align: center;display: block;
    font-size: 16px;width: 100%;
}
</style>
