<!--
    swiper 组件
    数据在父组件中，此组件是子组件，可以通过props接收父组件的数据
    1.安装swiper//分页器不起作用，直接入住下载好的css和js
    2.写template
        2.1 图片路径绑定到style上面，style内部是一个object，所以background-image要写成backgroundImage
    3.写js
        3.1 导入swiper和swiper的css
        3.2 通过props获取父组件传递过来的属性listImg
        3.3 mounted方法实例化swiper
    4.css样式
-->
<template>
    <div>
        <div class="swiper-container" v-if="img==2">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in listImg">
                    <img :src="str">
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
        <div class="swiper-container" v-else-if="img==1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in goodsImg">
                    <img :src="str">
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    </div>
</template>

<script>
//    import Swiper from 'swiper';
//    import 'swiper/dist/css/swiper.min.css';
    import '../../static/js/swiper.min';
    import '../../static/css/swiper.min.css';
    export default {
        props: ['listImg','goodsImg','img'],
        data(){
            return{

            }
        },
        created(){
            console.log(this.img);
            console.log(this.goodsImg);
            console.log(this.listImg);
        },
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                autoplay: 1500,
            });
        }
    }
</script>

<style>
    .swiper-container {
        width: 100%;
        height: 3.5rem;
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
    .swiper-pagination-bullet {
        width:0.2rem;
        height: 0.2rem;
        opacity: 1;
    }
    .swiper-pagination .swiper-pagination-bullet-active{
        background: #ff5001;
    }
</style>