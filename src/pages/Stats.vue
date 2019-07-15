<template>

<div>
   <div class="list">
    
       <div class="list-header">
          
           <div class="list-header-name"> <img :src="img.img" alt="" 
           class="back" @click="back1()">我的课程</div>
           
           <div class="list-header-classname">
            <div @click="active='allclass' ;chang()">
                全部课程<span class="list-header-span"></span>
            </div>
           <div @click="active='allfilx' ;chang()">
               全部学科<span class="list-header-span"></span>
           </div>
          <div @click="active='allxueqi' ;chang()">
               全部学期<span class="list-header-span"></span>
           </div>
           </div>
         
         
       </div>
        <div class="twonav" v-show="show1"><component :is="active"/></div>




       <div class="list-main">
           <div class="list-main-outaide">
             
               <div class="list-main-content">
                 
                   <div>
                   <span class="list-main-season">春</span>
                   <span class="list-main-project">规划</span>
                   <span class="list-main-name">各种各样发布会</span>
                   </div>
            
                  <div class="list-main-starttime"> <img :src="img.img1" alt=""
                   class="list-shizhong">2019-3 晚XXX点</div>
                 <div class="list-main-specialoffer">特价课</div>
                  
             
                  <div  class="list-main-member">
                          <div class="list-main-memberlist">
                             <img src="" alt="">
                             <span class="list-main-memberlist-name">名字</span>
                             <span class="list-main-memberlist-job">主讲</span>
                         </div>

                             <div class="list-main-memberlist">
                             <img src="" alt="">
                             <span class="list-main-memberlist-name">名字</span>
                             <span class="list-main-memberlist-job">主讲</span>
                              <div class="ming-e">  剩余名额<span></span></div>
                         </div>
                  </div>
            
                       
                   
               
                  
                   <div class="list-main-price">
                       <div class="list-main-endtime">tingshou</div>
                       <div class="list-main-listprice">
                           <div class="list-main-oldprice">￥99</div>
                            <div class="list-main-newprice">
                                <span>￥</span>
                                <span>0</span>

                            </div>
                         
                       </div>


                   </div>
               </div>
                          
           </div>
       </div>

       
   </div>
</div>
</template>
<script>
// import Vue from "vue";
// import router from "vue-router";
// vue.use(router)
// import axios from "axios";
// import {Row,Col,DropdownItem,DropdownMenu,Dropdown} from 'element-ui';
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(DropdownItem);
// Vue.use(DropdownMenu);
// Vue.use(Dropdown);
// Vue.component('allclass',{
// data(){
//     return{

//     }
// },
//   template:`<div class="twonav">
//            <div>wu年级</div>
//             <div>we年级</div>
//             <div>we年级</div>
//             <div>we年级</div></div>`
// })
// Vue.component('allfilx',{
// data(){
//     return{

//     }
// },
//   template:`<div class="twonav">
//                <div>yi年级</div>
//             <div>年级</div>
//             <div>年级</div>
//             <div>年级</div>
//             </div>`
// })
export default {
  data() {
    return {
    // compon:''
    active:'',
    isamint:false,
    show1:false,
    img:{
            img:require("../assets/img/jaintouzuo.png"),
            img1:require("../assets/img/time.png.png")
        }   
      
    }

  },
  methods:{
    chang(){
        // this.isamint = !this.isamint
        this.show1 = !this.show1

    },
    back1(){
        this.$router.push('/discover');
    }
  },

  
  components:{
       allclass:{
           data(){
               return{
                 
               }
           },
        
            template:`<div>
                      <div class="classlist">全部课程</div>
                       <div class="classlist">未完结</div>
                       <div class="classlist">已完结</div>
                       <div class="classlist">已退课</div>
                     
                       </div>  `
           
         
           },
            allfilx:{
            data(){
                return{
               
               
            }
           
            },
             template:`<div>
                      <div class="classlist">全部学科</div>
                     <div class="classlist">语文</div>
                       <div class="classlist">数学</div>
                       <div class="classlist">英语</div>
                       <div class="classlist">物理</div>
                       <div class="classlist">化学</div>
                       <div class="classlist">生物</div>
                       <div class="classlist">历史</div>
                       <div class="classlist">地理</div>
                       <div class="classlist">政治</div>
                       <div class="classlist">科学</div>
                      
                       </div>`
           
       },
             allxueqi:{
           data(){
               return{
                 
               }
           },
        
            template:`<div>
                      <div class="classlist">全部学期</div>
                       <div class="classlist">暑期课</div>
                       <div class="classlist">秋季课</div>
                       <div class="classlist">寒假课</div>
                       <div class="classlist">春秋课</div>
                      
                       </div>  `
           
         
           },
  },
  created() {

  }
};
</script>

<style scoped>

.list-header {
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 9999;
  background: #ffffff;
 

}

.list-header-name {
  flex: 1;
  text-align: center;
  height: 100%;
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
.list-header-classname {
  flex: 1;
  display: flex;
   height: 100%;
  font-size: 18px;
  /* beijing */
  /* background: yellow; */
}
/* ul,li{
    list-style: none;
} */
.list-header-classname > div {
    position: relative;
  flex: 1;
  text-align: center;
  height: 100%;
   line-height:50px;
}
.twonav{
     background: #ffffff;

      width: 100%;
     position: fixed;
     padding: 20px;
     box-sizing: border-box;
 z-index:9999;

 
}
.twonav div{
 
  line-height: 50px;
    font-size: 20px;
}
.classlist {
  height: 50px;
  line-height: 50px;
  font-size: 20px;

 
}
.amint{
    color:red;
}
/* .el-icon--right{
    width: 10px;
}
.el-dropdown{ */
    /* position:relative;
}
.el-dropdown-menu{
   position: absolute;
   left: 0;
   right: 0;
  padding:20px;
  box-sizing: border-box;
    background: #ffffff;
}
.el-dropdown-menu  .el-dropdown-item{
border-bottom: 1px solid #ccc;
height: 50px;
line-height: 50px;
font-size:20px; */

/* } */
.list-header-span{
 display: inline-block;
width: 0;
height: 0;
position: absolute;
top: 25px;
margin-left: 5px;
border: 5px solid black;
border-left:  5px solid transparent;
border-right:  5px solid transparent;
border-bottom:  5px solid transparent;



}
/*     */
.list-main {
    margin-top: 100px;
  padding: 2%;
 
  box-sizing: border-box;
  width: 100%;
  height: 1700px;
  background: rgb(243, 239, 239);
}
.list-main-outaide{
    background: #ffffff;
      border-radius: 8px;
}
.list-main-content {
  width: 100%;
  padding: 4%;
  box-sizing: border-box;
  /* font-size: 20px;
  line-height: 30px; */
  margin-top: 10px;


}
.list-main-content>span{
        height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
}
.list-main-season{
    display: inline-block;
   background: greenyellow;
   color: #ffffff;
font-size: 14px;
margin-right: 5px;
 padding: 0 5px;
}
.list-main-project{
    display: inline-block;
    border: 1px solid greenyellow;
 font-size: 14px;
 color: greenyellow;
 text-align: center;
line-height: 18px;
margin-right: 5px;
height: 18px;
}
.list-main-name{
    font-size: 15px;
    font-weight: bolder;
    line-height: 30px;
}
.list-shizhong{
    width: 10px;
    height: 10px;
    margin-right: 15px;
}
.list-main-starttime{
    color:#cccc;
    font-size: 12px;
    height: 16px;

    line-height: 16px;
    margin-bottom: 10px;
}

.list-main-specialoffer{
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




.list-main-member{
    display: flex;
 


}
.list-main-memberlist{
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
.list-main-memberlist img{
width: 50px;
height: 50px;
/*beijing*/
background: orange;
border-radius: 50%;
}
.list-main-memberlist>span{
font-size: 14px;
line-height: 14px;
}
.list-main-memberlist-job{
color:#ccc;
font-size: 12px;
}
.ming-e{
    background:rgba(35, 248, 46, 0.2);
 
    height: 18px;
   /* padding-left: 8px;
    box-sizing: border-box;
     */
     text-align: center;
    position:absolute;
    top:-15px;
    left: 40px;
    border-radius: 10px 10px 10px 0;
    font-size: 12px;
    /* display:flex; */
    width: 80px;
    line-height: 18px;
    color: rgba(0,200,2,.9);

}

/* .ming-e span{
      font-size: 16px;
      line-height:20px;
} */
/* .ming-e span:nth-child(2){
    margin-right: 10px;
} */

.list-main-price{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

}
.list-main-endtime{
    height: 18px;
    background: #cccc;
    border-radius: 10px;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
     margin-right: 20px;
     color: dimgray;
    
}

.list-main-listprice{
    display: flex;
    line-height: 30px;
    height: 30px;
}
.list-main-oldprice{
    color: #ccc;
    margin-right: 20px;
}
.list-main-newprice{
    color: red;
    
}
.list-main-newprice span:nth-child(1){
    font-size: 18px;
   
}

.list-main-newprice span:nth-child(2){
    font-size: 30px;
}


</style>