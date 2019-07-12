import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

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

        },
        {
            name: 'Mine',
            path: '/mine',
            component: Mine,
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
            //重定向
            path: '/',
            // redirect:{name:'Home'}
          }]
});



export default router;