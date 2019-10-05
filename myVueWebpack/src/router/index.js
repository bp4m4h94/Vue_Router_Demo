// 載入官方元件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 自訂元件
import Home from '@/components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
     routes :[
        {
         name:'首頁',
         path:'/index',
         component:Home
        }
    ]
})
