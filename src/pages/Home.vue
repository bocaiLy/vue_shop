<!-- Home.vue -->
<template>
    <div class="container">
        <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
        <com-header :hShow="hShow"></com-header>
        <div class="main">
            <com-banner class="banner" :listImg="listImg" :img="img"></com-banner>
            <div class="nav">
                <ul class="clearfix g-flex">
                    <li class="g-f-auto" v-for="item in navList">
                        <router-link class="a_d" :to="item.link">
                            <img :src="item.img">
                            <span>{{item.name}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="sales p_3_3">
                <div class="con" v-for="item in sales">
                    <div class="saleList" :data-id="item.goods_id">
                        <img src="../assets/banner_2.png">
                        <p class="des">{{item.goods_name}}</p>
                        <p class="price">
                            ￥<span>{{item.goods_price}}</span>
                            <del class="market">￥{{item.goods_market_price}}</del>
                        </p>
                        <router-link to="/" class="i-b">
                            剩余：3天20小时
                            <span>去抢购</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="hot">
                <h3>店铺热卖</h3>
            </div>
            <list></list>
        </div>
        <com-footer class="active_1"></com-footer>
    </div>

</template>

<script>
    // 导入要用到的子组件
    import ComHeader from '../components/ComHeader'
    import ComFooter from '../components/ComFooter'
    import List from '../components/List'
    import ComBanner from '../components/ComBanner'
    import data from '../mock/sales';


    //  导入图片
    import a from '../assets/banner_1.png'
    import b from '../assets/banner_2.png'
    import c_1 from '../assets/classify_1.png'
    import c_2 from '../assets/classify_2.png'
    import c_3 from '../assets/classify_3.png'
    import c_4 from '../assets/classify_4.png'
    import c_5 from '../assets/classify_5.png'
    export default {
        data () {
            return {
                hShow:'A',
                sales:[],
                listImg:[a,b],
                img:2,
                navList:[
                    {
                        name:'水果',
                        link:'#',
                        img:c_1
                    },
                    {
                        name:'零食',
                        link:'#',
                        img:c_2
                    },
                    {
                        name:'饮料',
                        link:'#',
                        img:c_3
                    },
                    {
                        name:'宵夜',
                        link:'#',
                        img:c_4
                    },
                    {
                        name:'早餐',
                        link:'#',
                        img:c_5
                    }
                ]
            }
        },
        // 在components字段中，包含导入的子组件
        components: {
            ComHeader,
            List,
            ComFooter,
            ComBanner
        },
        // 在组件创建完成时，执行的钩子函数
        created (){
            // 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了
            this.$http.get("http://bocai.cn/sales").then((res) => {
                this.sales = res.body.list;
            });
        }
    }
</script>
<style>
    .container {
        margin: 0 auto;
        overflow-x: hidden;
    }
    .goods_ul {
        margin: 0 0.18rem;
    }

    .nav ul{
        padding: .24rem 0 .2rem;
        background: #fff;
    }
    .nav li{
        text-align: center;
    }
    .nav li img{
        display: block;
        width: 70%;
        margin:0 auto .2rem;
    }
    .sales{
        margin-top: .2rem;
    }
    .saleList{
        background: #fff;
        padding-bottom: .2rem;
    }
    .saleList img{
        width: 6.9rem;
    }
    .saleList p{
        padding: .25rem;
        line-height: .38rem;
        font-size: .32rem;
        border-bottom:.01px solid #999;
    }
    .saleList del{
        color: #999;
        font-size: .3rem;
    }
    .saleList p.price span{
        font-size: .42rem;
    }
    .saleList p.price{
        color: #ff5001;
        border-bottom: 0;

    }
    .saleList a span{
        float: right;
        padding-right: .3rem;
    }
    .saleList a{
        display: block;
        width: 6.3rem;
        height: .96rem;
        line-height: .96rem;
        margin:0 .3rem;
        background:url("../assets/salesBg.png") center no-repeat;
        color: #fff;
        border-radius: .1rem;
    }
    .saleList a:before{
        width: .6rem;
        height: .6rem;
        background: url("../assets/clock.png") center no-repeat;
        -webkit-background-size:.5rem;
        background-size:.5rem;
        margin:-.1rem .05rem 0 .2rem;
    }
    .hot h3{
        line-height: 1rem;
        text-align: center;
        background: url("../assets/titleBg.png") center no-repeat;
    }
</style>