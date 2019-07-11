import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Mine from '../pages/Mine.vue';


// let All = {
//     template:`<div>全部</div>`
// }
// let Language = {
//     template:`<div>语文</div>`
// }
// let Math = {
//     template:`<div>数学</div>`
// }
// let English = {
//     template:`<div>英语</div>`
// }
// let Physics = {
//     template:`<div>物理</div>`
// }
// let Huaxue = {
//     template:`<div>化学</div>`
// }

// let Shengwu = {
//     template:`<div>生物</div>`
// }
// let History = {
//     template:`<div>历史</div>`
// }
// let Dili = {
//     template:`<div>地理</div>`
// }
// let Zhengzhi = {
//     template:`<div>政治</div>`
// }
// let Kexue = {
//     template:`<div>科学</div>`
// }
// let Guihua = {
//     template:`<div>规划</div>`
// }
// 3. 实例化router并配置参数
let router = new VueRouter({
    // 路由页面信息配置
    routes: [
        {
            name: 'Home',
            path: '/home',
            component: Home,
            // //嵌套子路由
            // children:[
            //     {
            //         name:'All',
            //         path:'all',
            //         component:All
            //     },{
            //         name:'Language',
            //         path:'language',
            //         component:Language
            //     },{
            //         name:'Math',
            //         path:'math',
            //         component:Math
            //     },{
            //         name:'English',
            //         path:'english',
            //         component:English
            //     },{
            //         name:'Physics',
            //         path:'physics',
            //         component:Physics
            //     },{
            //         name:'Huaxue',
            //         path:'huaxue',
            //         component:Huaxue
            //     },{
            //         name:'Shengwu',
            //         path:'shengwu',
            //         component:Shengwu
            //     },{
            //         name:'History',
            //         path:'history',
            //         component:History
            //     },{
            //         name:'Dili',
            //         path:'dili',
            //         component:Dili
            //     },{
            //         name:'Zhengzhi',
            //         path:'zhengzhi',
            //         component:Zhengzhi
            //     },{
            //         name:'Kexue',
            //         path:'kexue',
            //         component:Kexue
            //     },{
            //         name:'Guihua',
            //         path:'guihua',
            //         component:Guihua
            //     }
            // ]
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

        }, {
            //重定向
            path: '/',
            // redirect:{name:'Home'}
          }]
});



export default router;