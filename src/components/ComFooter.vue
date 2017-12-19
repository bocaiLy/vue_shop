<template>
    <footer>
        <ul class="clearfix g-flex">
            <li class="g-f-auto home">    <a class="i-b a_d" href="">首页</a></li>
            <li class="g-f-auto classify"><a class="i-b a_d" href="">分类</a></li>
            <li class="g-f-auto car">     <a class="i-b a_d" href="">购物车</a></li>
            <li class="g-f-auto my">      <a class="i-b a_d" href="">我的</a></li>
        </ul>
    </footer>
</template>
<script>

</script>
<style>
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    footer ul{
        height: 1rem;
        background: #fff;
    }
    footer ul li{
        float: left;
    }
    footer ul li a{
        text-align: center;
        position: relative;
        padding-top: .6rem;
    }
    li .i-b:before{
        position: absolute;
        top: .05rem;
        left: 0;
        width: 100%;
        height: .52rem;
        background: url("../assets/home_active.png") center no-repeat;
        -webkit-background-size:.52rem;
        background-size:.52rem;
        /*margin-top: .05rem;*/
    }
    li:nth-child(2) .i-b:before{
        background: url("../assets/classify.png") center no-repeat;
        -webkit-background-size:.52rem;
        background-size:.52rem;
    }
    li:nth-child(3) .i-b:before{
        background: url("../assets/car.png") center no-repeat;
        -webkit-background-size:.52rem;
        background-size:.52rem;
    }
    li:nth-child(4) .i-b:before{
        background: url("../assets/my.png") center no-repeat;
        -webkit-background-size:.52rem;
        background-size:.52rem;
    }
    .active_1 li:first-child .i-b:before{
        background: url("../assets/home_active.png") center no-repeat;
        -webkit-background-size:.52rem;
        background-size:.52rem;
    }
    /*.active_2 li:nth-child(2) .i-b:before{*/
        /*background: url("../assets/classify_active.png") center no-repeat;*/
        /*-webkit-background-size:.52rem;*/
        /*background-size:.52rem;*/
    /*}*/
    /*.active_3 li:nth-child(3) .i-b:before{*/
        /*background: url("../assets/car_active.png") center no-repeat;*/
        /*-webkit-background-size:.52rem;*/
        /*background-size:.52rem;*/
    /*}*/
    /*.active_4 li:nth-child(4) .i-b:before{*/
        /*background: url("../assets/my_active.png") center no-repeat;*/
        /*-webkit-background-size:.52rem;*/
        /*background-size:.52rem;*/
    /*}*/

</style>