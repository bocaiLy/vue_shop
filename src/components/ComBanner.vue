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
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :style="{ background: 'url(' + str.url + ') center/cover' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
//    import Swiper from 'swiper';
//    import 'swiper/dist/css/swiper.min.css';
    import '../../static/js/swiper.min';
    import '../../static/css/swiper.min.css';
    export default {
        props: ['listImg'],
        mounted() {
            console.log('mounted', this)
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                autoplay: 2000,
//                onTouchEnd: function() {
//                    swiper.startAutoplay()
//                }
            });
        }
    }
</script>

<style>
    .swiper-container {
        width: 100%;
        height: 3.5rem;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
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