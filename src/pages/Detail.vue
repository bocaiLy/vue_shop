<template>
    <div class="container">
        <com-header :hShow="hShow" :goods="goods" v-if="flag"></com-header>
        <div class="main">
            <com-banner class="banner" :goodsImg="goodsImg" :img="img" v-if="flag"></com-banner>
            <div class="goodsDel">
                <div class="con">
                    <p class="title">舌尖上的中国 于都特产传统手工黄元米果 年糕糍粑 </p>
                    <p class="price">
                        惊爆价：￥{{goods.goods_price}} <del>{{goods.goods_market_price}}</del> <span class="f_right">收益:{{goods.goods_profit}}</span>
                    </p>
                </div>
                <div class="num g-flex">
                    <div class="left g-f-auto">
                        <p>销量：{{goods.goods_salenum}}件</p>
                        <p>库存：{{goods.goods_stock}}件</p>
                    </div>
                    <div class="right">
                        点赞：{{goods.goods_click}}次
                    </div>
                </div>
            </div>
            <div class="goods_other">
                <ul class="g-flex">
                    <li class="g-f-auto" :class="{active:tap=='one'}" @click="tap='one'">Go to 1</li>
                    <li class="g-f-auto" :class="{active:tap=='two'}" @click="tap='two'">Go to 2</li>
                    <li class="g-f-auto" :class="{active:tap=='three'}" @click="tap='three'">Go to 3</li>
                </ul>
                <div class="other_con p_3">
                    <div v-show="tap=='one'">
                       商品id{{goods.goods_detail}}
                    </div>
                    <div v-show="tap=='two'">
                        {{goods.goods_parameter}}
                    </div>
                    <div v-show="tap=='three'">
                        {{goods.goods_service}}
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <span class="i-b">客服</span>
            <span class="i-b">购物车</span>
            <span class="buy d_b f_right">立即购买</span>
        </footer>
    </div>
</template>

<script>
    import ComHeader from '../components/ComHeader'
    import ComBanner from '../components/ComBanner'
    //使用mockjs局限  list.vue页面已经用过，goods_id会累加，故复制一个
    import data from '../mock/goods';
    //  导入图片
    import a from '../assets/banner_1.png'
    import b from '../assets/banner_2.png'

//    import Vue from 'vue';
//    import VueRouter from 'vue-router';
//    Vue.use(VueRouter);
    //初次渲染不显示，目前还没有解决
//    const Detail = {
//        props:['goods','state'],
//        template:
//            `<div>
//            {{goods.goods_size}}
//            </div>`
//    }
//    const Parameter = {
//        props:['goods','state'],
//        template:
//            `<div>
//            {{goods.goods_name}}
//            </div>`
//    }
//    const Service = {
//        props:['goods','state'],
//        template:
//            `<div>
//3
//            </div>`
//    }
//
//    const routes = [
//        { path: '/', component: Detail },
//        { path: '/parameter', component: Parameter },
//        { path: '/service', component: Service }
//    ]
//    const router = new VueRouter({
//        routes // （缩写）相当于 routes: routes
//    })

    export default {
        data(){
            return{
                flag: false,
                state:1,
                hShow:'B',
                goods:[],
                img:1,
                brokerage:0,
                goodsImg:[],
                tap:"one",
            }
        },
        components: {
            ComHeader,
            ComBanner,
        },
        created(){
            this.$http.get("http://bocai.cn/goods").then((res) => {
//                this.$route.query.id 获取URL参数
                for(var i=0; i<res.body.list.length;i++){
                    if(res.body.list[i].goods_id==this.$route.query.id){

                        this.goods=res.body.list[i];
                            this.brokerage= res.body.list[i].goods_brokerage;
                            this.goodsImg = res.body.list[i].goods_img;
                            this.flag=true;//如果不使用flag，子组件created 打印出来的goodsImg为空，并且只渲染出来一条数据
                        }
                    }
                },
            );
//            不使用箭头函数
//            this.$http.get('http://bocai.cn/goods').then(function (res) {
//                console.log(res.body)
//            })
        },
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
    .goods_other{
        background: #fff;
        margin-top: .3rem;
    }
    .goods_other ul li{
        text-align: center;
        line-height: 1rem;
    }
    .goods_other ul li.active{
        color: #ff5001;
        border-bottom:.06rem solid #ff5001;
    }
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1rem;
        background: #fff;
    }
    footer .buy{
        line-height: 1rem;
        text-align: center;
        width: 2.2rem;
        background: #ff5001;
        color: #fff;
        font-size: .38rem;
    }
    footer span.i-b{
        display: block;
        width: 1.4rem;
        text-align: center;
        position: relative;
        padding-top: .6rem;
        float: left;
    }
    footer> span.i-b:before{
        position: absolute;
        top: .05rem;
        left: 0;
        width: 100%;
        height: .52rem;
        background: url("../assets/car.png") center no-repeat;
        background-size: .52rem;
    }
    footer> span.i-b:first-child{
        border-right:.02rem solid #e0e0e0;
    }
    footer> span.i-b:first-child:before{
        background: url("../assets/collect.png") center no-repeat;
        background-size: .52rem;
    }
</style>