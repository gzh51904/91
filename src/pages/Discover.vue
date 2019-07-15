
<template>
    <div class="box"> 
        <!-- <router-view/> -->
        <h2 class="h2">学习中心</h2>
        <div class="box1">
            <img :src="img.img1" class="img1">
         <div class="box2">
             <div class="box3"><h2>用户名称</h2><span>沉睡的种子</span></div>
             <div class="box4"><img :src="img.img2" ><span>10</span><img :src="img.img3" ><span>10</span></div>
         </div>
        </div>
         <div class="box5">
             <div @click='res1'><img :src="img.img4"><span>每日任务</span></div>
             <div @click='res2'><img :src="img.img5"><span>我的课程</span></div>
             <div @click='res3'><img :src="img.img6"><span>我的作业</span></div>
         </div>
         <div class="box6">
             <div class="box7"><span>{{shi1}}月{{shi2}}日 共0场直播 </span></div>
             <div class="box8" @click='res4'><span>课程日历</span><img :src="img.img7" ></div>
         </div>
         <div class="box9"><img :src="img.img8" @click='shi'>
         <span>没有直播课程</span></div>
    </div>
</template>

<script>
import { TimeSelect } from 'element-ui';
export default {
data(){
    return{
        img:{
            img1:require("../assets/img/touxiang1.png"),
            img2:require("../assets/img/biaoqian1.png"),
            img3:require("../assets/img/biaoqian2.png"),
            img4:require("../assets/img/ts1.png"),
            img5:require("../assets/img/ts2.png"),
            img6:require("../assets/img/ts3.png"),
            img7:require("../assets/img/jiantou.png"),
            img8:require("../assets/img/tj.png"),
        },
       shi1:new Date().getMonth()+1,
       shi2:new Date().getDate(),
    }
},
methods:{
  res1(){
     this.$router.push('/goods');
      },
  res2(){
     this.$router.push('/stats');
      },
  res3(){
     this.$router.push('/mas');
      },
  res4(){
     this.$router.push('/tus');
      },
   shi(){
    //    let res1=new Date().getMonth()+1
    //     let res2=new Date().getDate()
    //    console.log(res1,res2);
    //    this.res=res1+'月'+res2+'日'
       
   }   
},

}
</script>

<style scoped>
*{
    margin: 0;padding: 0;
}
.box{
    width: 100%;
}
.h2{
    width: 100%;height: 48px;line-height: 48px;font-size: 16px;text-align: center;
}
.box1{box-sizing: border-box;
    width: 100%;height: 88px;background: #ffffff;padding:10px  0 0 25px ;
}
.img1{
    width:66px;height: 66px;float: left;
   border-radius: 50%;

}
.box2{padding: 8px 0 0 20px;
    float: left;background: #ffffff;  width:calc(100% - 91px);height: 66px;
}
.box3{width: 100%;height: 20px;
box-sizing: border-box;
}
.box3>h2{
    font-size: 16px;width: 64px;float: left;
}
.box3>span{color: #ffffff;height: 20px;
background: #75c82b;display: inline;float: left;border-radius: 10px 10px ;
width: 90px;text-align: center;font-size: 12px;line-height: 20px;margin-left: 5px;
}
.box4{margin-top: 10px;
    width: 100%;height: 23px;background: #ffffff;float: left;
}
.box4>img{
    width: 18px;height: 18px;margin-right: 5px;
}
.box4>span{
font-size: 16px;margin-right: 10px;
}
.box5{
width: 100%;height: 70px;background: #ffffff; display: flex;
  justify-content: space-around;border-bottom: 3px solid #f5efef;
}
.box5>div{
    width: 33.3333%;height: 100%;text-align: center;
}
.box5>div>img{
    width: 40px;height: 40px;border-radius: 50%;
}
.box5>div>span{display: block;
    width: 100%;font-size: 16px;
}
.box6{
    width: 100%;height: 18px;background: #ffffff;margin-top: 20px;
}
.box6>div{
    height: 100%;padding: 0 10px;
}
.box7{
float: left;color: #ccc;font-size: 14px;
}
.box8{
    float:right;font-size: 14px;color: #ccc;
}
.box8>img{
    width: 14px;height: 14px;margin-left: 5px;
}
.box9{
    width: 100%;background: #ffffff;height: 275px;margin-top: 50px;
}
.box9>img{
    width: 177px;height: 177px;margin-left:calc(50% - 88.5px);
}
.box9>span{text-align: center;display: block;
    font-size: 16px;width: 100%;
}
</style>
