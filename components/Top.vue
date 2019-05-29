<template>
  <div class="navbar navbar-default header-top">
    <div class="container">
      <slot name="center">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-nav">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="index.htm">
                  <span class="logo">
                   Sandy
                  </span>
        </a>
      </div>
      <div class="collapse navbar-collapse navbar-collapse-nav" style="height:0px;">
        <ul class="nav navbar-nav navbar-right">
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

<style scoped>
  .header-top{
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }

</style>
