<template>
    <div class="container">
        <com-header :hShow="hShow"></com-header>
        <div class="main">
            <com-banner class="banner" :listImg="listImg"></com-banner>
            <div class="goodsDel">
                <div class="con">
                    <p class="title">舌尖上的中国 于都特产传统手工黄元米果 年糕糍粑 </p>
                    <p class="price">
                        惊爆价：￥28.00 <del>35.00</del> <span class="f_right">收益:10%</span>
                    </p>
                </div>
                <div class="num g-flex">
                    <div class="left g-f-auto">
                        <p>销量：117件</p>
                        <p>库存：117件</p>
                    </div>
                    <div class="right">
                        点赞：200次
                    </div>
                </div>
            </div>
            <div class="goods_other">
                <ul class="g-flex">
                    <router-link class="g-f-auto" tag="li" to="/">Go to 1</router-link>
                    <router-link class="g-f-auto" tag="li" to="/parameter">Go to 2</router-link>
                    <router-link class="g-f-auto" tag="li" to="/service">Go to 3</router-link>
                </ul>
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script>
    import ComHeader from '../components/ComHeader'
    import ComBanner from '../components/ComBanner'
//    import data from '../mock/hot';
    import data from '../mock/goods';
    //  导入图片
    import a from '../assets/banner_1.png'
    import b from '../assets/banner_2.png'
    import Vue from 'vue';
    import VueRouter from 'vue-router';

    Vue.use(VueRouter);

//    const router = new VueRouter();
    const Detail = {
        template:
            `<div>
               goods.goods_id
            </div>`
    }
    const Parameter = {
        template:
            `<div>

            </div>`
    }
    const Service = {
        template:
            `<div>

            </div>`
    }

    const routes = [
        { path: '/', component: Detail },
        { path: '/parameter', component: Parameter },
        { path: '/service', component: Service }
    ]

    const router = new VueRouter({
        routes // （缩写）相当于 routes: routes
    })

    export default {
        data(){
            return{
                hShow:'B',
                goods:[],
                listImg:[
                    {
                        url:a
                    },{
                        url:b
                    }
                ],
            }
        },
        components: {
            ComHeader,
            ComBanner
        },
        created(){
            this.$http.get("http://bocai.cn/goods").then(
                (res) => {
                    console.log(res.body);
                    for(var i=0; i<res.body.list.length;i++){
                        if(res.body.list[i].goods_id==1){
                            this.goods=res.body.list[i];
                            console.log(this.goods);
                        }
                    }
                },
            );

//            不使用箭头函数
//            this.$http.get('http://bocai.cn/goods').then(function (res) {
//                console.log(res.body)
//            })
        },
        router
    }
</script>
<style>
    .con,.num{
        background: #fff;
    }
    .con{
        padding: .3rem;
        border-bottom:.01rem solid #e1e1e1;
    }
    .con .title{
        font-size: .36rem;
    }
    .con .price{
        color: #ff5001;
        margin-top: .2rem;
    }
    .con .price del{
        color: #999;
    }
    .goodsDel .num {
        padding: .15rem .3rem;
    }
    .goodsDel .num .left p{
        line-height: .42rem;
    }
    .goodsDel .num .right{
        line-height: .84rem;
    }
    .goods_other ul li{
        /*float: left;*/
        text-align: center;
    }
</style>