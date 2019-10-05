// 載入官方元件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 自訂元件
import Home from '@/components/HelloWorld'
import Page1 from '@/components/page/page1'


Vue.use(VueRouter)

export default new VueRouter({
     routes :[
        {
         name:'首頁',
         path:'/index',
         component:Home
        },
        {
            name:'分頁1',
            path:'/page1',
            component:Page1
        }
    ]
})
