// 主配置文件
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
//
// Vue.config.productionTip = false
//
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
//
// })

// 导入Vue，这个是必需的，在使用Vue之前，必须先导入
import '../static/css/base.css'
import Vue from 'vue'

import jsApi from '../static/js/common'
Vue.prototype.jsApi = jsApi

// 导入 vue-router，并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入 vue-resource，并使用
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入 pages 下的 Home.vue
import Home from './pages/Home'
import Detail from './pages/Detail'

// // 使用 Mock
// var Mock = require('mockjs')
// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// })
// // 输出结果
// console.log(JSON.stringify(data, null, 4))

// 定义路由配置
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/detail',
        component: Detail
    }
]

// 创建路由实例
const router = new VueRouter({
    mode:'history',//切换路径模式，变成history模式,不然路径为/#/home
    routes
})

// 创建 Vue 实例
new Vue({
    el: '#app',
    data(){
        return {
            transitionName: 'slide'
        }
    },
    router, // 在vue实例配置中，用router
    watch: {
        // 监视路由，参数为要目标路由和当前页面的路由
        '$route' (to, from){
            const toDepth = to.path.substring(0, to.path.length-2).split('/').length
            // 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'
            // 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥
            // 但目前在这个demo中能正常运行，如果知道更好的方法，欢迎留言赐教
            const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
            // 根据路由深度，来判断是该从右侧进入还是该从左侧进入
        }
    }
})