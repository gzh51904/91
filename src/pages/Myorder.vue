<template>
    <div>
        <div class="myorder">
               <div class="myorder-header">
                    <div class="myorder-header-name"> <img :src="img.img" alt="" class="back" @click="back()">个人中心</div>
                    <div class="myorder-nav">
                          <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;"> -->
                     
                    <!-- </el-radio-group> -->

                    <el-tabs :tab-position="tabPosition">
                        <el-tab-pane label="全部订单">
                           
                               <div class="myorder-main">

                                    <div class="myorder-main-outaide">

                                        <div class="myorder-main-content">
                                            <div class="myorder-main-orderid">
                                                <div>
                                                    <span>订单号：</span><span>30663931235432</span>
                                                </div>
                                                <span class="myorder-main-paystate">已经支付</span>
                                            </div>
                                            <div>
                                                <span class="myorder-main-season">春</span>
                                                <span class="myorder-main-project">规划</span>
                                                <span class="myorder-main-name">各种各样发布会</span>
                                            </div>

                                            <div class="myorder-main-starttime">
                                                <img :src="img.img1" alt="" class="myorder-shizhong">2019-3 晚XXX点</div>
                                            <div class="myorder-main-specialoffer">特价课</div>


                                            <div class="myorder-main-member">
                                                <div class="myorder-main-memberlist">
                                                    <img src="" alt="">
                                                    <span class="myorder-main-memberlist-name">名字</span>
                                                    <span class="myorder-main-memberlist-job">主讲</span>
                                                </div>

                                                <div class="myorder-main-memberlist">
                                                    <img src="" alt="">
                                                    <span class="myorder-main-memberlist-name">名字</span>
                                                    <span class="myorder-main-memberlist-job">主讲</span>
                                                    
                                                </div>
                                            </div>


                                            <div class="myorder-main-price">
                                                <div></div>
                                                <div class="myorder-main-listprice">
                                                    <div class="myorder-main-money">应付款</div>
                                                    <div class="myorder-main-newprice">
                                                        <span>￥</span>
                                                        <span>0</span>

                                                    </div>

                                                </div>


                                            </div>
                                            <div class="myorder-main-data"><span class="myorder-main-details">订单详情</span></div>
                                        </div>
                                    </div>
                                </div>
                  


                        </el-tab-pane>
                        <el-tab-pane label="待支付"></el-tab-pane>
                        <el-tab-pane label="已支付"></el-tab-pane>
                        <el-tab-pane label="已取消"></el-tab-pane>
                        <el-tab-pane label="退款单"></el-tab-pane>
                    </el-tabs>
                           
                
                    </div>
               </div>

                
        </div>

  </div>
    
</template>

<script>
import Vue from 'vue';
import {Tabs ,TabPane} from 'element-ui';
Vue.use(Tabs);
Vue.use(TabPane);
export default {
data(){
    return{
    img:{
            img:require("../assets/img/jaintouzuo.png"),
             img1:require("../assets/img/time.png.png")
        } ,
        // headerlist:[
        //     {
        //         id:'1',
        //         content:'全部订单'
        //     },
        //         {
        //              id:'2',
        //         content:'待支付'
        //     },
        //         {
        //              id:'3',
        //         content:'已支付'
        //     },
        //         {
        //              id:'4',
        //         content:'已取消'
        //     },
        //         {
        //              id:'5',
        //         content:'退款单'
        //     }
        // ],
         tabPosition: 'top'

    }
},
methods:{
  back(){
        this.$router.push('/mine');
    }
    
}
}
</script>

<style>

.el-tabs__nav{
  width: 100%;
    display: flex;
    text-align: center;
 background: #ffffff;

}
.el-tabs__active-bar{

height: 5px;
border-radius: 2px;
 
}

.el-tabs__item{
    flex:1;
    padding: 0;
}


</style>



<style scoped>

.myorder-header {
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #ffffff;

}
.myorder-header-name {

  text-align: center;
  height:50px;
  line-height:50px;
  font-size: 20px;
  /* beijing */
  /* background: rebeccapurple; */
}
.back{
    position: absolute;
    top: 20px;
    left: 20px;
}


/* //  */

.myorder-main {
  
  padding: 2%;
 
  box-sizing: border-box;
  width: 100%;
  height: 1700px;
  background: rgb(243, 238, 238);
}
.myorder-main-outaide{
    background: #faf6f6;
      border-radius: 8px;
}

.myorder-main-orderid{
     display:flex;
     justify-content:space-between;
}
.myorder-main-orderid span{
    font-size:12px;
}
.myorder-main-paystate{
    color:red;
}
.myorder-main-content {
  width: 100%;
  padding: 4%;
  box-sizing: border-box;
  /* font-size: 20px;
  line-height: 30px; */
  margin-top: 10px;


}
.myorder-main-content>span{
        height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
}
.myorder-main-season{
    display: inline-block;
   background: greenyellow;
   color: #ffffff;
font-size: 14px;
margin-right: 5px;
 padding: 0 5px;
}
.myorder-main-project{
    display: inline-block;
    border: 1px solid greenyellow;
 font-size: 14px;
 color: greenyellow;
 text-align: center;
line-height: 18px;
margin-right: 5px;
height: 18px;
}
.myorder-main-name{
    font-size: 15px;
    font-weight: bolder;
    line-height: 30px;
}
.myorder-shizhong{
    width: 10px;
    height: 10px;
    margin-right: 15px;
}
.myorder-main-starttime{
    color:#cccc;
    font-size: 12px;
    height: 16px;

    line-height: 16px;
    margin-bottom: 10px;
}

.myorder-main-specialoffer{
    background:orange;
    padding:0 10px;
    color:#ffffff;
    font-size:16px;
    line-height: 20px;
    height: 20px;
    width: 80px;
    margin-bottom: 20px;
    border-radius:10px;
}




.myorder-main-member{
    display: flex;
 


}
.myorder-main-memberlist{
    width: 50px;
    height: 90px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
    margin-right: 10px;
    margin-bottom: 10px;
    /* baijing
    background: #cccccc; */
    align-items: center;
    position: relative;
}
.myorder-main-memberlist img{
width: 50px;
height: 50px;
/*beijing*/
background: orange;
border-radius: 50%;
}
.myorder-main-memberlist>span{
font-size: 14px;
line-height: 14px;
}
.myorder-main-memberlist-job{
color:#ccc;
font-size: 12px;
}
/* .ming-e{
    background:rgba(35, 248, 46, 0.2);
 

     text-align: center;
    position:absolute;
    top:-15px;
    left: 40px;
    border-radius: 10px 10px 10px 0;
    font-size: 12px;

    width: 80px;
    line-height: 18px;
    color: rgba(0,200,2,.9);

} */

/* .ming-e span{
      font-size: 16px;
      line-height:20px;
} */
/* .ming-e span:nth-child(2){
    margin-right: 10px;
} */

.myorder-main-price{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

}
/* .myorder-main-endtime{
    height: 18px;
    background: #cccc;
    border-radius: 10px;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
     margin-right: 20px;
     color: dimgray;
    
} */

.myorder-main-listprice{
    display: flex;
    line-height: 30px;
    height: 30px;
}
.myorder-main-money{
font-size:12px;
color:#cccccc;
margin-right:10px;
}

.myorder-main-newprice span:nth-child(1){
    font-size: 18px;
   
}

.myorder-main-newprice span:nth-child(2){
    font-size: 20px;
}
.myorder-main-data{
    margin-top:13px;
      text-align:right;
}
.myorder-main-details{
    border:1px solid #ccc;
    font-size:12px;
      border-radius:12px;
      display:inline-block;
      padding:0 10px;
      line-height:25px;
    
    
}

</style>
