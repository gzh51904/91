<template>
  <div class="app">
    <div class="main">
      <router-view/>
    </div>
    <div class="footer" v-show='tor'>
      <div v-for="item in pages" :key="item.mame" :index="item.path" @click='ass(item)'
     >
        <img :src="item.img1" style="width: 24px; height: 24px;" v-if="item.res" />
        <img :src="item.img2" style="width: 24px; height: 24px;" v-else />
        <span style="font-size: 12px;color:#ccc;  " >
          <router-link :to='item.path'>{{item.title}}</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { log } from 'util';

// import{Tabs,TabPane} from "element-ui";
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Tab);
export default {
  name: "app",
  data() {
    return {
      pages: [
        {
          title: "选课",
          path: "/home",
          name: "Home",
          img1: require("./assets/img/a1.png"),
          img2: require("./assets/img/a11.png"),
          res: "true",
          clear:'#5cbc20',
          ff:'1'
        },
        {
          title: "学习",
          path: "/discover",
          name: "Discover",
          img1: require("./assets/img/a3.png"),
          img2: require("./assets/img/a33.png"),
          res: "true",
          clear:'#5cbc20',
          ff:'2'
        },
        {
          title: "我的",
          path: "/mine",
          name: "Mine",
          img1: require("./assets/img/a2.png"),
          img2: require("./assets/img/a22.png"),
          res: "true",
          clear:'#5cbc20',
          ff:'3'
        }
      ],
      active: "/home",
       activeName: 'second',
       tor:!false,
       ress:[
         "/home",'/discover','/mine'
       ]
    };
   
  },
  methods: {
    
    ass(item) {
      // this.pages.res=!this.pages.res
      // item.res=!item.res; 
      // console.log(item,this.pages[0].res);
      if(item.ff==1){
        this.pages[0].res=false;
        this.pages[1].res=true;
        this.pages[2].res=true;
         this.$router.push('/home');
      }else if(item.ff==2){
         this.pages[0].res=true;
        this.pages[1].res=false;
        this.pages[2].res=true;
         this.$router.push('/discover');
      }else{
         this.pages[0].res=true;
        this.pages[1].res=true;
        this.pages[2].res=false;
         this.$router.push('/mine');
      }
      // console.log(item.res);
      
      //  console.log(this.$store.state);
      //  console.log(this.tor);

       
    },
     handleClick(tab, event) {
        // console.log(tab, event);
      },
   
    mounted(){
      
// console.log('我刚进来');
// this.$store.commit('add2')
//获取当前url路径

   
},updated(){
    // console.log('当前url路径:'+this.$route.path);
  },


     
    
  },
  
  components: {},
  watch:{
  $route(to,from){
    // console.log(to.path);
    // console.log(this.ress);
    if(this.ress.includes(to.path)){
        this.tor=true
    }else{
      this.tor=false
    }
    
  }
},
 creattd(){
       console.log('当前url路径:'+this.$route.path);
      //  this.tor=this.$store.state.tor
      //  console.log(this.tor);
       
    },

  

};
</script>


<style scoped>
/* scoped局部样式 */
* {
  padding: 0;
  margin: 0;
}
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  flex: 1;height: 100%;overflow: hidden;
}
.footer {
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;box-sizing: border-box;
  justify-content: space-around;
  border-top: 1px solid rgb(231, 230, 230);
}
.footer > div {
  height: 100%;
  width: 100%;background: #ffffff;
  text-align: center;
}
.footer > div> span {
  width: 100%;
  display: block;color: #ccc;
}
.footer > div> img{
  margin-top: 3px;
}
</style>
