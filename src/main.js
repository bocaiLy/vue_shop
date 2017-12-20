// 主配置文件

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

        }
    },
    router, // 在vue实例配置中，用router
})