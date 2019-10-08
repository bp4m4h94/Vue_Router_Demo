// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// 載入官方元件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 自訂元件
import Home from '@/components/HelloWorld'
import Page1 from '@/components/page/page1'

import Card1 from '@/components/page/child1'
import Card2 from '@/components/page/child2'
import Card3 from '@/components/page/child3'



// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 3. 创建 router 实例
export default new VueRouter({
// 2. 定义路由
     routes :[
        {
         name:'首頁',
         path:'/index', //每個路由(index)映射一個組件(Home)
         component:Home
        },
        {
            name:'分頁1',
            path:'/page1',
            component:Page1,
            children:[
                {
                    name:'卡片1',
                    path:'',
                    component:Card1
                },
                { 
                    name:'卡片2',
                    path:'card2',
                    component:Card2
                },
                {
                    name:'卡片3',
                    path:'card3/:id',
                    component:Card3
                }

            ]
        }
    ]
})
