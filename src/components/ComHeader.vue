<template>
  <header>
    <div v-if="hShow == 'A'" class="g-flex" style="background: #ff5001">
      <div class="logo g-f-auto pl_3">
        <img src="../assets/logo.png">
      </div>
      <router-link class="search" to="/search">
        <img src="../assets/search.png">
      </router-link>
    </div>
    <div v-else-if="hShow == 'B'" class="g-flex" style="background: #fff;">
      <div class="left"><img src="../assets/back.png" @click="goBack"></div>
      <h3 class="g-f-auto">商品详情</h3>
      <div class="share">
        <div>赚￥{{goods.goods_brokerage}}</div>
      </div>
    </div>
  </header>
</template>
<script>
  export default{
      props: ['hShow','goods'],
      data(){
          return{

          }
      },
      methods: {
          goBack(){
              window.history.back();
          },
      }
  }
</script>
<style>
  .logo{
    text-align: left;
  }
  .search{
    width: .58rem;
    text-align: right;
    padding-right: .3rem;
  }
  .search img{
    width: .58rem;
  }
  header{
    z-index:9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  header .g-flex{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
  header .g-flex .left{
    text-align: left!important;
    padding-left: .5rem;
    width: 2rem;
  }
  header .g-flex .share{
    width: 2.5rem;
    text-align: right;
  }
  header .g-flex .share>div{
    display: inline-block;
    height: .74rem;
    line-height: .74rem;
    color: #fff;
    padding:0 .2rem 0 .7rem;
    background: #ff5000 url("../../src/assets/share.png") .2rem .15rem no-repeat;
    border-radius: .37rem 0 0 .37rem;
    margin-top: .13rem;
  }
</style>