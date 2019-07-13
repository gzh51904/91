import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Page from '../pages/Page.vue';

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
            //本路由需要登录才可以访问
            meta:{requiresAuth:true}
        },
        {
            name: 'Mine',
            path: '/mine',
            component: Mine,
            meta:{requiresAuth:true},
            beforeEnter(to,from,next){
                console.log('Cart路由独享：beforeEnter')
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
        },{
            name:'Page',
            path:'/page',
            component:Page
        },{
            //重定向
            path: '/',
            // redirect:{name:'Home'}
          }]
});
//全局路由守卫
router.beforeEach((to,from,next)=>{
    console.log('全局：beforeEach',to);
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
    console.log('全局：afterEach');
})

export default router;