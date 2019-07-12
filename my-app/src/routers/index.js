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
<<<<<<< HEAD
import Meiri from '../pages/Meiri.vue';
import Gongkai from '../pages/Gongkai.vue';
import List from '../pages/List.vue';
import Sale from '../pages/Sale.vue';
=======
import Meiri from '../pages/Meiri.vue'; 
import List from '../pages/List.vue';
>>>>>>> 5d0a38375911066832667706b02dbaa4179082d7

import Xinxi from '../pages/Xinxi.vue';
import Gouwu from '../pages/Gouwu.vue';
import Fasss from '../pages/Fasss.vue';
import Rost from '../pages/Rost.vue';
import Lsay from '../pages/Lsay.vue';
import Lsaytt from '../pages/Lsaytt.vue';
import Soso from '../pages/Soso.vue';

import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

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
          
             meta:{requiresAuth:true},
         
        },
        {
            name: 'Mine',
            path: '/mine',
            component: Mine,
            meta:{requiresAuth:true},
            beforeEnter(to,from,next){
                // console.log('Cart路由独享：beforeEnter')
                next();
            }

        },
        {
            name:'Register',
            path:'/register',
            component:Register,
        }, 
        {
            name:'Login',
            path:'/login',
            component:Login
        },
         {
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
<<<<<<< HEAD


           //home下的子路由
           {//home下的子路由
            name: 'Sale',
            path: '/sale',
            component: Sale, 
           },
            {//home下的子路由
                name: 'List',
                path: '/list',
                component: List, 
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
                {//Mine下面路由
            name: 'Soso',
            path: '/soso',
            component: Soso, 
           },
=======
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
          
>>>>>>> 5d0a38375911066832667706b02dbaa4179082d7
        ]
});
//全局路由守卫
router.beforeEach((to,from,next)=>{
    // console.log('全局：beforeEach',to);
    // 判断目标路由是否需要登录权限才可访问
    if(to.matched.some(item=>item.meta.requiresAuth)){
        let username = localStorage.getItem('Authorization');

        // 用户已登录
        if(username){
            next();
        }

        // 用户未登录
        else{
            next({
                path:'/login',
                query:{
                    redirectTo:to.fullPath
                }
            })
        }
    }else{
        next();
    }
})
router.afterEach((to,from)=>{
    // console.log('全局：afterEach');
})



export default router;