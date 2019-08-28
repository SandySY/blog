<template>
  <div class="navbar-top">
    <div class="container">
      <slot name="center">
      <div class="navbar-header">
        <a class="navbar-brand" href="index.htm">
          <span class="logo">
           Sandy
          </span>
        </a>
      </div>
      <div class="navbar-collapse">
        <ul>
          <li><a href="index.htm">首页</a></li>
          <li><router-link :to="{name:'directory'}">目录树</router-link></li>
          <li><router-link :to="{name:'fish-baby'}">小鱼儿</router-link></li>
          <li><router-link :to="{name:'about-me'}">关于我</router-link></li>
          <!-- <li class="tuijian"><a href="http://how2j.cn/t/30" target="_blank" rel="nofollow">前端练手项目</a></li> -->
          <!--加推荐tuijian -->
        </ul>
      </div>
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Top',
    props: {
      title: {
        required: false,
        default: ""
      },
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted(){

    },
    created(){

    },
    activated() {
      /*this.$nextTick(() => {
        //this.headerHeight = this.$refs.header.clientHeight;
        this.$forceUpdate();
      });*/
    },
  }
</script>

<style scoped lang="less">
  .navbar-top{
    width: 100%;
    height: 100px;
    padding: 20px 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    margin-bottom: 20px;
    background-image: linear-gradient(89deg, #30bded 0, #2085c5 100%);
    border-color: #eee;
    background-color: #5899d0;
    .navbar-header{
      .navbar-brand {
        float: left;
        padding: 20px 15px;
        font-size: 24px;
        line-height: 20px;
        height: 60px;
        color: #ffffff;
      }
    }

    .navbar-collapse {
      float: right;
      ul li{
        float: left;
        display: block;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        a{
          color: #ffffff;
        }
      }
      @media (max-width: 800px) {
        ul li {
          width: 50px;
        }
      }
     }
  }
</style>
