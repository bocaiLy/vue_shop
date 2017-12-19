<template>
    <ul class="goods_ul clearfix">
        <li class="goods_li" v-for="item in goods">
            <!--<router-link to="detail" class="goods_a" :id="item.goods_id">-->
            <router-link :to="{ path:'detail', query:{ id: item.goods_id }}" class="goods_a" :id="item.goods_id">
                <div class="goods_img">
                    <img v-bind:src="item.goods_img">
                    <div class="profit">收益10%</div>
                </div>
                <p class="goods_price">￥<span class="cur">{{item.goods_price}}</span>元<del>￥<span>{{item.goods_market_price}}</span>元</del></p>
                <p class="goods_name f_text2">{{item.goods_name}}贵溪米粉正宗地方特贵溪米粉正宗地方特 产粗米粉</p>
            </router-link>
        </li>
    </ul>

</template>
<script>
    import data from '../mock/goods';
    export default{
//        props: ['price', 'title','img','market_price'],
        data(){
            return {
                goods:[],
            }
        },
        created (){
            // 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了
            this.$http.get("http://bocai.cn/goods").then((res) => {
                this.goods = res.body.list;
                console.log(res);
            });
        }
    }

</script>
<style scoped>
    .goods_li{
        float: left;
        width: 50%;
        margin-bottom: .12rem;
    }
    .goods_a{
        display: block;
        margin:0 .05rem;
        background: #fff;
        padding-bottom: .2rem;
    }
    .goods_img{
        position: relative;
    }
    .goods_img>img{
        width:3.47rem;
        height: 3.47rem;
    }
    .goods_img>.profit{
        position: absolute;
        bottom: 0;
        right: 0;
        background: #ff5001;
        opacity:.8;
        color: #fff;
        padding:0 .1rem;
        width: 1.25rem;
        height: .4rem;
    }
    .goods_name{
        line-height: .4rem;
        color: #333;
        padding:0 .2rem;
    }
    .goods_price{
        height: .7rem;
        line-height: .7rem;
        color: #ff5001;
        font-size: .24rem;
        padding:0 .2rem;
    }
    .goods_price span{
        font-size: .3rem;
    }
    .goods_price del{
        color: #999;
        margin-left:.2rem;
    }

</style>
