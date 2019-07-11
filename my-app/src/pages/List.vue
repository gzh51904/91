<template>

<div>
   <div class="list">
    
       <div class="list-header">
           <div class="list-header-name">专题课</div>
           
           <div class="list-header-classname">
            <div v-for="item in nav" :key="item.name">
                <router-link>{{item.title}}</router-link>
            </div>
            <router-view/>
     


              
           </div>
       </div>
    

       <div class="list-main">
           <div class="list-main-outaide">
             
               <div class="list-main-content">
                 
                   <div>
                   <span class="list-main-season">春</span>
                   <span class="list-main-project">规划</span>
                   <span class="list-main-name">各种各样发布会</span>
                   </div>
            
                  <div class="list-main-starttime">2019-3 晚XXX点</div>

                   <div class="list-main-member">
             
                         <div class="list-main-memberlist">
                             <img src="" alt="">
                             <span class="list-main-memberlist-name">名字</span>
                             <span class="list-main-memberlist-job">主讲</span>
                         </div>

                                <div class="list-main-memberlist">
                             <img src="" alt="">
                             <span>名字</span>
                             <span>主讲</span>
                         </div>
            
                        <div></div>
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
import Vue from "vue";
// import router from "vue-router";
// vue.use(router)
// import axios from "axios";
// import {Row,Col,DropdownItem,DropdownMenu,Dropdown} from 'element-ui';
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(DropdownItem);
// Vue.use(DropdownMenu);
// Vue.use(Dropdown);


export default {
  data() {
    return {
        nav:[
            {
                title:'年级',
                // path:'/class',
                // name:'Class'

            },
             {
                title:'年级',
                // path:'/class',
                // name:'Class'

            }
        ]
    };
  },
  components:{},
  created() {}
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
 

}

.list-header-name {
  flex: 1;
  text-align: center;
  height: 100%;
  line-height:50px;
  font-size: 20px;
  /* beijing */
  background: rebeccapurple;
}

.list-header-classname {
  flex: 1;
  display: flex;
   height: 100%;
  font-size: 18px;
  /* beijing */
  background: yellow;
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
/* .list-header-span{
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



} */
/*     */
.list-main {
    margin-top: 100px;
  padding: 4%;
 
  box-sizing: border-box;
  width: 100%;
  height: 1700px;
  background: #ccc;
}
.list-main-outaide{
    background: #ffffff;
      border-radius: 8px;
}
.list-main-content {
  width: 100%;
  padding: 6%;
  box-sizing: border-box;
  /* font-size: 20px;
  line-height: 30px; */
  margin-top: 20px;

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
font-size: 16px;
margin-right: 5px;
 padding: 0 5px;
}
.list-main-project{
    display: inline-block;
    border: 1px solid greenyellow;
 font-size: 16px;
 color: greenyellow;
 margin-right: 5px;
 padding: 0 5px;
}
.list-main-name{
    font-size: 20px;
    font-weight: bolder;
    line-height: 30px;
}

.list-main-starttime{
    color:#cccc;
    font-size: 14px;
    height: 30px;

    line-height: 30px;
    margin-bottom: 20px;
}








.list-main-member{
    display: flex;


}
.list-main-memberlist{
    width: 106px;
    height: 200px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    /* baijing
    background: #cccccc; */
    align-items: center;
}
.list-main-memberlist img{
width: 100px;
height: 100px;
/*beijing*/
background: orange;
border-radius: 50%;
}
.list-main-memberlist>span{
font-size: 18px;
line-height: 18px;
}
.list-main-memberlist-job{
color:#ccc;
}





.list-main-price{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

}
.list-main-endtime{
    height: 30px;
    background: #cccc;
    border-radius: 10px;
    font-size: 18px;
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