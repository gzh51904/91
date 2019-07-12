import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Mine from '../pages/Mine.vue';

import Goods from '../pages/Goods.vue';
import Stats from '../pages/Stats.vue';
import Mas from '../pages/Mas.vue';
import Tus from '../pages/Tus.vue';
// sad dsdadasdad dasd ada as Meiri
import Meiri from '../pages/Meiri.vue';
import Shuqiu from '../pages/Shuqiu.vue';
import Zhuanti from '../pages/Zhuanti.vue';
import Gongkai from '../pages/Gongkai.vue';
import Xinxi from '../pages/Xinxi.vue';
import Gouwu from '../pages/Gouwu.vue';
import Fasss from '../pages/Fasss.vue';
import Rost from '../pages/Rost.vue';
import Lsay from '../pages/Lsay.vue';
import Lsaytt from '../pages/Lsaytt.vue';




// 3. 实例化router并配置参数
let router = new VueRouter({
    // 路由页面信息配置
    routes: [
        {
            name: 'Home',
            path: '/home',
            component: Home,
        },
        {
            name: 'Discover',
            path: '/discover',
            component: Discover,
            //子路由
            children:[
               
            ]
        },
        {
            name: 'Mine',
            path: '/mine',
            component: Mine,

        }, {
            //重定向
            path: '/',
            redirect:{name:'Home'}
          },
          {
              //Discover下的子路由
            name: 'Goods',
            path: '/goods',
            component: Goods,
           },{//Discover下的子路由
            name: 'Stats',
            path: '/stats',
            component: Stats, 
           },
           ,{//Discover下的子路由
            name: 'Mas',
            path: '/mas',
            component: Mas, 
           },
           ,{//Discover下的子路由
            name: 'Tus',
            path: '/tus',
            component: Tus, 
           },
           
           {//Goods下的子路由
            name: 'Meiri',
            path: '/meiri',
            component: Meiri, 
           },


           //home下的子路由
           {//home下的子路由
            name: 'Shuqiu',
            path: '/shuqiu',
            component: Shuqiu, 
           },
            {//home下的子路由
                name: 'Zhuanti',
                path: '/zhuanti',
                component: Zhuanti, 
               },
         {//home下的子路由
            name: 'Gongkai',
            path: '/gongkai',
            component: Gongkai, 
           },
     {//Mine下面路由
    name: 'Xinxi',
    path: '/xinxi',
    component: Xinxi, 
   },
     {//Mine下面路由
        name: 'Gouwu',
        path: '/gouwu',
        component: Gouwu, 
       },
        {//Mine下面路由
            name: 'Fasss',
            path: '/fasss',
            component: Fasss, 
           },
          {//Mine下面路由
            name: 'Rost',
            path: '/rost',
            component: Rost, 
           },  
             {//Mine下面路由
                name: 'Lsay',
                path: '/lsay',
                component: Lsay, 
                children:[
                ]
               },  
               {//Lsay
                    name: 'Lsaytt',
               path: '/lsaytt',
               component: Lsaytt, },
        ]
});



export default router;