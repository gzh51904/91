<template>
  <div>
    <div class="pageSearch">
      <div class="searchBox">
        <i class="icon iconfont icon-search">
          <img src="../assets/img/ss.png" alt />
        </i>
        <input type="text" placeholder="搜索课程或老师" maxlength="50" />
      </div>

      <div class="classBox">
        <i class="icon iconfont icon-grade"><img src="../assets/img/huo.png" alt=""></i>
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
        <a href="#" class="course_f" @click="tosale"></a>
        <a href="#" class="course_p" @click="toall"></a>
        <a href="#" class="course_o" @click="toall"></a>
    </div>
    <div class="tab_class">
        <div class="swiper-wrapper" style="height:43.98px;">
          <!-- <div class="swiper-slide slide_cur" style="width:56.833px">
            全部
          </div>
          <div class="swiper-slide" style="width:56.833px">
            语文
          </div>
          <div class="swiper-slide" style="width:56.833px">
            数学
          </div>
          <div class="swiper-slide" style="width:56.833px">
            英语
          </div>
          <div class="swiper-slide" style="width:56.833px">
            物理
          </div>
          <div class="swiper-slide" style="width:56.833px">
            化学
          </div> -->
          <el-menu :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item style="width:56.83px;height:43.98px;text-align:center;" :index="item.name" v-for="item in all" :key="item.name">{{item.name}}</el-menu-item>
          
         
        </el-menu>
        </div>
    </div>
    <div class="swiper-wrapper" style="height:1583px" >
      <div class="swiper-slide swiper-slide-active" style="width:375px;">
        <div v-for="item in pag"  @click="tosale" :key="item.id">
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
Vue.use(ElementUI);
export default {
    data(){
        return{
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
                    name:'全部'
                   
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
         
          pag:[
            {
              id:1,
              vacation:'暑期',
              language:'语文',
              title:'三年级语文暑期课直播班',
              price:1389,
              decimals:5
            },{
              id:2,
              vacation:'暑期',
              language:'数学',
              title:'四年级数学暑期课直播班',
              price:1111,
              decimals:0
            },{
              id:3,
              vacation:'暑期',
              language:'英语',
              title:'五年级数学暑期课直播班',
              price:49,
              decimals:0
            },{
              id:4,
              vacation:'暑期',
              language:'数学',
              title:'初一数学暑期课直播班',
              price:49,
              decimals:0
            },{
              id:5,
              vacation:'暑期',
              language:'物理',
              title:'初二数学暑期课直播班',
              price:1596,
              decimals:0
            },{
              id:6,
              vacation:'暑期',
              language:'化学',
              title:'初三化学暑期课直播班',
              price:1596,
              decimals:0
            },{
              id:6,
              vacation:'秋季',
              language:'语文',
              title:'五年级语文秋季课直播班',
              price:1389,
              decimals:38

            },{
              id:8,
              vacation:'秋季',
              language:'数学',
              title:'六年级数学秋季课直播班',
              price:2315,
              decimals:63
            },{
              id:9,
              vacation:'秋季',
              language:'英语',
              title:'四年级英语暑期课直播班',
              price:2315,
              decimals:63
            },{
              id:10,
              vacation:'暑期',
              language:'语文',
              title:'四年级语文暑期课直播班',
              price:1389,
              decimals:38
            },{
              id:11,
              vacation:'暑期',
              language:'语文',
              title:'五年级语文暑期课直播班',
              price:931,
              decimals:0
            },{
              id:12,
              vacation:'暑期',
              language:'语文',
              title:'六年级语文暑期课直播班',
              price:931,
              decimals:0
            },{
              id:13,
              vacation:'暑期',
              language:'数学',
              title:'二年级数学暑期课直播班',
              price:1040,
              decimals:0
            },{
              id:14,
              vacation:'暑期',
              language:'语文',
              title:'四年级语文暑期课直播班',
              price:1389,
              decimals:38
            },{
              id:15,
             vacation:'暑期',
              language:'语文',
              title:'五年级语文暑期课直播班',
              price:931,
              decimals:0
            },{
              id:16,
              vacation:'暑期',
              language:'数学',
              title:'高一数学暑期课直播班',
              price:99,
              decimals:0
            },
          ],
           active:"name"
        }
    },
    methods:{
        handleSelect(index,indexPath){
          this.active = index
        },
        toall(){
           this.$router.push('/list');
        },
      tosale(){
           this.$router.push('/sale');
        }
        
    },
    components:{}

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
.pageSearch,
.searchBox {
  display: flex;
  align-items: center;
}
.pageSearch {
  height: 43.98px;
  width: 91.5%;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  padding: 0 15.996px;
  z-index: 1;
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
