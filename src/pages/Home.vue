<template>
  <div>
    <div class="pageSearch">
      <div class="searchBox" @click="resssss">
        <i class="icon iconfont icon-search">
          <img :src="imgss.iimg1" alt />
        </i>
        <input type="text" placeholder="搜索课程或老师" maxlength="50"  />
      </div>

      <div class="classBox">
        <i class="icon iconfont icon-grade"><img :src="imgss.img2" alt=""></i>
        <span>年级</span>
      </div>
    </div>

    <div class="page-swipe" >
       <!-- <img src="../assets/img/banner1.png" alt=""> -->
           <el-carousel height="150px">
      <el-carousel-item v-for="item in tp" :key="item.img">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <img :src="item.img" alt="" style="width:100%;height:100%;">
      </el-carousel-item>
    </el-carousel>
    </div>

    <div class="course_tab">
        <div href="#" class="course_f" @click='tabs1'></div>
        <div href="#" class="course_p" @click='tabs2'></div>
        <div href="#" class="course_o" @click='tabs3'></div>
    </div>
    <div class="tab_class">
        <div class="swiper-wrapper" style="height:43.98px;">
     
          <el-menu :default-active="active" class="el-menu-demo" mode="horizontal"
           @select="handleSelect">
          <el-menu-item style="width:56.83px;height:43.98px;text-align:center;" :index="item.name" 
          v-for="item in all" :key="item.name" @click='names(item.name)'>{{item.name}}</el-menu-item>
          
         
        </el-menu>
        </div>
    </div>
    <div class="swiper-wrapper" style="height:1583px" >
      <div class="swiper-slide swiper-slide-active" style="width:375px;">
        <div v-for="item in pag2" @click='tabs1' :key="item.id">
          <div class="course_li">
            <div class="title">
              <span class="season summer">{{item.vacation}}</span>
               <span class="course_subject">{{item.language}}</span> 
               <p title="三年级语文暑期课直播班">{{item.title}}</p></div>
            <div class="brief">
              <p></p> 
              <p>¥<i>{{item.price}}<b style="font-size:0.28rem">{{'.' + item.decimals}}</b></i></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from "vue";
import {Carousel,CarouselItem} from 'element-ui';
Vue.use(Carousel);
Vue.use(CarouselItem);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { log } from 'util';
Vue.use(ElementUI);
export default {
    data(){
        return{
          imgss:{
            img1: require('../assets/img/ss.png'),
               img2: require('../assets/img/huo.png'),
          },
          tp:[
            {
              img: require("../assets/img/banner1.png"),
            },
            {
              img: require("../assets/img/banner2.jpg"),
            },
            {
              img: require("../assets/img/banner3.jpg"),
            },
            {
              img: require("../assets/img/banner4.png"),
            },
            {
                img: require("../assets/img/banner5.jpg"),
              }
          ],
          all:[
                 {
                    name:'全部',
                  
                   
                },{
                    name:'语文'
                    
                },{
                    name:'数学'
                    
                },{
                    name:'英语',
                    
                },{
                    name:'物理',
                    
                },{
                    name:'化学',
                    
                },{
                    name:'生物',
                   
                },{
                    name:'历史',
                    
                },{
                    name:'地理',
                    
                },{
                    name:'政治',
                   
                },{
                    name:'科学',
                    
                },{
                    name:'规划',
                   
                }
          ],
         
        
           active:"name",
           pag1:[],
           pag2:[],
        }
    },
    methods:{
        handleSelect(index,indexPath){
          this.active = index
        },
        resssss(){ this.$router.push('/input');},
        tabs1(){
 this.$router.push('/list');      
        },
        tabs2(){
 this.$router.push('/gongkai');      
        },
        tabs3(){
 this.$router.push('/sale');     
        },
     names(namest){
       this.pag2=[];
// console.log(names,this.pag1);
if(namest){
// this.pag1=this.pag1.language
for(let i=0;i<this.pag1.length;i++){
if(this.pag1[i].language==namest){
this.pag2.push(this.pag1[i]);

}else if(namest=='全部'){
  this.pag2.push(this.pag1[i]);
  // console.log(1);
  
}

}  
}
     }

    },
    components:{},
     async created(){
        let { data } = await this.$axios.get("/goods",{
        params:{name:'goods'}
    });
    // console.log("data:", data.data);
    this.pag1=data.data.slice(0,16);this.names('全部');
    //  this.pag2=data.data.slice(0,16);
  },

};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
a{
    color: #181818;
}
a{
    text-decoration: none;
    cursor: pointer;
}
input {
  border: none;
  outline: none;
}
.box{
  width: 100%;
  height: 100%;
}
.pageSearch{
  position: fixed;top: 0;left: 0;
}
.pageSearch,
.searchBox {
  display: flex;
  align-items: center;box-sizing: border-box;
}
.pageSearch {
  height: 43.98px;
  width: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  padding: 0 15.996px;
  z-index: 555;
}
.searchBox {
  height: 31.98px;
  width: 100%;
  border-radius: 20px;
  background: #f5f5f5;
  flex: 1;
}
.searchBox > i {
  color: #c4c4c4;
  padding: 0 3.999px 0 7.998px;
}
.searchBox > input {
  background: none;
  height: 100%;
  flex: 1;
  font-size: 12px;
}
span {
  font-size: 12px;
}
.classBox{
    height: 39.98px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0 0 0 1.995px;
}

.page-swipe{
    margin-top: 43.989px;
    margin-bottom: 15.996px;
}
.page-swipe img{
    width: 100%;
    height: 100%;
}

.course_tab{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 19.995px;
}
.course_tab .course_f{
    background: url(../assets/img/fire.png) 50% no-repeat;
    background-size: contain;
    width: 69.97px;
    height: 89.97px;
}
.course_tab .course_p{
    background: url(../assets/img/open.png) 50% no-repeat;
    background-size: contain;
    width: 69.97px;
    height: 89.97px;
}
.course_tab .course_o{
    background: url(../assets/img/project.png) 50% no-repeat;
    background-size: contain;
    width: 69.97px;
    height: 89.97px;
}
.tab_class{
    height: 43.98px;
    box-sizing: border-box;
    margin:  0 16.996px;
    margin-bottom: 13.996px;
    /* width: 100%; */
    overflow: hidden;
}

.slider_cur{
  color: #181818;
  font-size: 18px;
  position: relative;
  font-weight: 600;
}
.swiper-slide{
  color: #666;
  font-size: 16px;
  line-height: 43.98px;
  text-align: center;
  float: left
}
.swiper-slide{
  height: 100%;
  position: relative;
}
.course_li {
  border-bottom: 1px solid #f5f5f5;
  margin-top: 15.996px 0 0 ;
  width: 100%;
  padding: 0 
}
.course_li .title{
  display: -webkit-box;
  font-size: 0;
  line-height: 0;
  position: relative;
}
.summer{
  background: linear-gradient(315deg,#ff8b8b,#fe7e7e)
}
.season{
  line-height: 21px;
  margin-right: 4px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
  padding: 3px;
  display: inline-block;
  vertical-align: middle;
}
.course_subject{
  font-size: 12px;
  line-height: 21px;
  padding: 3px;
  color: #75c82b;
  border: 1px solid #75c82b;
  border-radius: 2px;
  margin-right: 4px;
  display: inline-block;
  vertical-align: middle;
}
.title p{
  color: #181818;
  font-size: 16px;
  line-height: 21px;
  display: inline;
  vertical-align: middle;
  font-weight: 700;
}
.course_li .brief{
  margin: 18.99px;
  display: flex;
  justify-content: space-between;
}
.course_li .brief p{
  color: #ff4f00;
  line-height: 24px;
  font-size: 12px;
}
.brief p i{
  font-size: 19.995px; 
  margin:  0 2px;
}
</style>
