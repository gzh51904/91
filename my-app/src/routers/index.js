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
import List from '../pages/List.vue';


import Sale from '../pages/Sale.vue';
// import Allfilx from '../pages/Allfilx.vue';
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
           },{//Goods下的子路由
            name: 'Meiri',
            path: '/meiri',
            component: Meiri, 
           },
           {//首页》公开课跳转
            name: 'List',
            path: '/list',
            component: List, 
           },
           {//暑秋》公开课跳转
            name: 'Sale',
            path: '/sale',
            component:Sale, 
           }
        //       {//公开课下二级导航
        //         name: 'Allfilx',
        //         path: '/allfilx',
        //         component:Allfilx, 
        //        }
          
        ]
});



export default router;